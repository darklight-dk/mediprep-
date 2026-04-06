// ═══════════════════════════════════════════════════════════════
// MEDIPREP — MODO REPASO v4 (repaso.js)
// Usa MutationObserver en #optionsContainer — sin patching
// ═══════════════════════════════════════════════════════════════

(function () {

  var repasoActivo = localStorage.getItem('mp_repaso') === '1';

  // ── API pública ──────────────────────────────────────────────
  window.Repaso = {
    isActive: function() { return repasoActivo; },
    set: setRepaso
  };

  // ── Activar / desactivar ─────────────────────────────────────
  function setRepaso(on) {
    repasoActivo = !!on;
    localStorage.setItem('mp_repaso', on ? '1' : '0');

    var btn = document.getElementById('quizRepasoToggle');
    if (btn) btn.classList.toggle('active', repasoActivo);

    var chk = document.getElementById('repasoModeToggle');
    if (chk) chk.checked = repasoActivo;

    if (repasoActivo) {
      aplicarHint(); // mostrar en pregunta actual si ya hay opciones
    } else {
      limpiarHints(); // quitar inmediatamente
    }
  }

  // ── Aplicar hint a opciones visibles ─────────────────────────
  function aplicarHint() {
    if (!repasoActivo) return;

    var q;
    try { q = currentQuestions[currentQuestionIndex]; } catch(e) { return; }
    if (!q || q.shuffledIndexMap == null) return;

    var opts = document.querySelectorAll('#optionsContainer .option');
    if (!opts.length) return;

    for (var i = 0; i < opts.length; i++) {
      if (opts[i].classList.contains('disabled')) continue;
      if (q.shuffledIndexMap[i] === q.correcta) {
        opts[i].classList.add('repaso-hint');
      }
    }
  }

  function limpiarHints() {
    var hints = document.querySelectorAll('.repaso-hint');
    for (var i = 0; i < hints.length; i++) {
      hints[i].classList.remove('repaso-hint');
    }
  }

  // ── MutationObserver — detecta cuando se renderizan nuevas opciones ──
  // Cada vez que showQuestion() mete .option divs en #optionsContainer,
  // el observer dispara y aplica el hint si repaso está activo.
  function initObserver() {
    var container = document.getElementById('optionsContainer');
    if (!container) {
      // DOM no listo aún, reintentar
      setTimeout(initObserver, 200);
      return;
    }

    var observer = new MutationObserver(function() {
      if (!repasoActivo) return;
      // Pequeño delay para que showQuestion termine de asignar shuffledIndexMap
      setTimeout(aplicarHint, 30);
    });

    observer.observe(container, { childList: true });
  }

  // Arrancar observer cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }

  // ── Sync UI al cargar ─────────────────────────────────────────
  function syncUI() {
    repasoActivo = localStorage.getItem('mp_repaso') === '1';
    var btn = document.getElementById('quizRepasoToggle');
    if (btn) btn.classList.toggle('active', repasoActivo);
    var chk = document.getElementById('repasoModeToggle');
    if (chk) chk.checked = repasoActivo;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncUI);
  } else {
    syncUI();
  }

})();
