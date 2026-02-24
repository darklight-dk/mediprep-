// ══════════════════════════════════════════════════════════════
//  MEDIPREP — ARENA MÉDICA ⚔️  v2.2
//  Audio: archivos .mp3 locales (sin base64)
//  Pool: conectado a las 597 preguntas reales del app
//  Bugs corregidos: timeout crash, hover stuck, Cargando...
// ══════════════════════════════════════════════════════════════

// ─── AUDIO ENGINE ─────────────────────────────────────────────
// Usa archivos .mp3 locales — sin base64, sin Blob, sin peso
const ArenaAudio = {
  _cache: {},
  _files: {
    correcto:  'arena_correcto.mp3',
    vida:      'arena_vida.mp3',
    derrota:   'arena_derrota.mp3',
    gameover:  'arena_gameover.mp3',
    victoria:  'arena_victoria.mp3',
  },

  play(key, vol) {
    vol = (vol == null) ? 1 : vol;
    var file = this._files[key];
    if (!file) return;
    try {
      // Reutiliza la instancia si existe, para evitar GC acumulado
      if (!this._cache[key]) this._cache[key] = new Audio(file);
      var a = this._cache[key];
      a.currentTime = 0;
      a.volume      = Math.min(1, Math.max(0, vol));
      a.play().catch(function(){});
    } catch(e) {}
  },

  correct()  { this.play('correcto', 0.85); },
  loseLife() { this.play('vida',     0.9);  },
  loseGame() { this.play('derrota',  0.85); },
  loseAll()  { this.play('gameover', 0.9);  },
  win()      { this.play('victoria', 0.9);  },
  powerup()  { this.play('correcto', 0.45); },
};


// ─── FX ENGINE ────────────────────────────────────────────────
const ArenaFX = {

  confetti(x, y, colors) {
    colors = colors || ['#6366f1','#a78bfa','#fbbf24','#34d399','#f472b6','#38bdf8'];
    var canvas = document.getElementById('fxCanvas');
    if (!canvas) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < 26; i++) {
      var p   = document.createElement('div');
      var sz  = 5 + Math.random() * 7;
      var vx  = (Math.random() - 0.5) * 280;
      var vy  = -(130 + Math.random() * 200);
      var rot = Math.random() * 700;
      var c   = colors[i % colors.length];
      var h   = sz * (Math.random() > 0.5 ? 0.5 : 1);
      p.style.cssText = 'position:fixed;pointer-events:none;z-index:9997;animation:confettiParticle .9s cubic-bezier(.22,1,.36,1) both;'
        + 'left:' + x + 'px;top:' + y + 'px;width:' + sz + 'px;height:' + h + 'px;'
        + 'background:' + c + ';border-radius:' + (Math.random() > 0.4 ? '50%' : '2px') + ';'
        + '--vx:' + vx + 'px;--vy:' + vy + 'px;--rot:' + rot + 'deg;';
      frag.appendChild(p);
      setTimeout((function(el){ return function(){ el.remove(); }; })(p), 960);
    }
    canvas.appendChild(frag);
  },

  comboExplode(combo) {
    var colors = combo >= 10 ? ['#ef4444','#f97316','#fbbf24']
               : combo >=  5 ? ['#a78bfa','#6366f1','#38bdf8']
                             : ['#34d399','#6ee7b7','#6366f1'];
    this.confetti(window.innerWidth / 2, window.innerHeight * 0.35, colors);
  },

  shake(intensity) {
    intensity = intensity || 8;
    var c = document.querySelector('.container');
    if (!c) return;
    c.style.setProperty('--shake-i', intensity + 'px');
    c.style.animation = 'none';
    void c.offsetHeight;
    c.style.animation = 'arenaShake .45s ease both';
    setTimeout(function() { c.style.animation = ''; }, 450);
  },

  flash(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var anim = id === 'damageOverlay' ? 'damageFlash' : 'correctFlash';
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = anim + ' .38s ease both';
    setTimeout(function() { el.style.opacity = '0'; el.style.animation = ''; }, 390);
  },

  floatText(text, color) {
    color = color || '#fbbf24';
    var canvas = document.getElementById('fxCanvas');
    if (!canvas) return;
    var p = document.createElement('div');
    var x = Math.round(window.innerWidth / 2) - 35;
    p.style.cssText = 'position:fixed;pointer-events:none;z-index:9996;'
      + 'left:' + x + 'px;top:42%;'
      + "font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;"
      + 'color:' + color + ';text-shadow:0 0 16px ' + color + '80;'
      + 'animation:floatUp .9s cubic-bezier(.22,1,.36,1) both;';
    p.textContent = text;
    canvas.appendChild(p);
    setTimeout(function() { p.remove(); }, 960);
  },

  renderHearts(lives, max) {
    var el = document.getElementById('batallaHearts');
    if (!el) return;
    var html = '';
    for (var i = 0; i < max; i++) {
      html += i < lives
        ? '<span style="display:inline-block;font-size:1.05rem;transition:all .3s;">❤️</span>'
        : '<span style="display:inline-block;font-size:1.05rem;opacity:.25;filter:grayscale(1);">🖤</span>';
    }
    el.innerHTML = html;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'heartShake .48s ease both';
    setTimeout(function() { el.style.animation = ''; }, 480);
  },
};


// ─── ARENA ────────────────────────────────────────────────────
var Arena = {
  lives: 3, maxLives: 3,
  combo: 0, maxCombo: 0,
  score: 0, xp: 0,
  qIdx: 0, questions: [],
  timeLeft: 15, totalTime: 15,
  _timer: null, _answered: false, _frozen: false,
  roundType: 'normal',

  LEVELS: [
    { min:0,    max:100,  level:1, name:'Estudiante',       color:'#94a3b8', icon:'📘' },
    { min:100,  max:300,  level:2, name:'Interno',           color:'#60a5fa', icon:'🩺' },
    { min:300,  max:600,  level:3, name:'Residente',         color:'#34d399', icon:'🏥' },
    { min:600,  max:1000, level:4, name:'Especialista',      color:'#a78bfa', icon:'⚕️' },
    { min:1000, max:1500, level:5, name:'Médico Senior',     color:'#fbbf24', icon:'🥼' },
    { min:1500, max:2200, level:6, name:'Jefe de Guardia',   color:'#f97316', icon:'🚨' },
    { min:2200, max:9999, level:7, name:'Cirujano de Élite', color:'#ef4444', icon:'⚔️' },
  ],

  getLevel: function() {
    var xp = this.getTotalXP();
    for (var i = 0; i < this.LEVELS.length; i++) {
      if (xp >= this.LEVELS[i].min && xp < this.LEVELS[i].max) return this.LEVELS[i];
    }
    return this.LEVELS[this.LEVELS.length - 1];
  },
  getTotalXP: function() {
    return parseInt(localStorage.getItem('mediprep_arena_xp') || '0');
  },
  addXP: function(amount) {
    var prev    = this.getTotalXP();
    var prevLvl = this.getLevel().level;
    localStorage.setItem('mediprep_arena_xp', prev + amount);
    var newLvl = this.getLevel();
    if (newLvl.level > prevLvl) this._levelUp(newLvl);
  },
  _levelUp: function(lvl) {
    var el = document.getElementById('arenaLevelUpBanner');
    if (!el) return;
    el.innerHTML = lvl.icon + ' ¡NIVEL ' + lvl.level + '! <strong>' + lvl.name + '</strong>';
    el.style.display = 'flex';
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'levelUpPop .7s cubic-bezier(.34,1.56,.64,1) both';
    ArenaFX.confetti(window.innerWidth / 2, 130, ['#fbbf24','#f97316','#fff','#fcd34d']);
    setTimeout(function() { el.style.display = 'none'; }, 4000);
  },

  // ── POOL — usa las variables REALES del app ──────────────────
  _getPool: function() {
    var pool = [];
    var sources = [
      function() { return typeof EVALUACION_PLANIMETRIA           !== 'undefined' ? EVALUACION_PLANIMETRIA           : []; },
      function() { return typeof EVALUACION_SISTEMA_NERVIOSO       !== 'undefined' ? EVALUACION_SISTEMA_NERVIOSO       : []; },
      function() { return typeof EVALUACION_SISTEMA_CARDIOVASCULAR !== 'undefined' ? EVALUACION_SISTEMA_CARDIOVASCULAR : []; },
      function() { return typeof EVALUACION_SISTEMA_RESPIRATORIO   !== 'undefined' ? EVALUACION_SISTEMA_RESPIRATORIO   : []; },
      function() { return typeof EVALUACION_SISTEMA_ENDOCRINO      !== 'undefined' ? EVALUACION_SISTEMA_ENDOCRINO      : []; },
      function() { return typeof EVALUACION_APARATO_DIGESTIVO      !== 'undefined' ? EVALUACION_APARATO_DIGESTIVO      : []; },
      function() { return typeof EVALUACION_CONCEPTOS_SALUD        !== 'undefined' ? EVALUACION_CONCEPTOS_SALUD        : []; },
      function() { return typeof EVALUACION_CONAMAT_COMPLETO       !== 'undefined' ? EVALUACION_CONAMAT_COMPLETO       : []; },
      function() {
        if (typeof EVALUACION_CARBOHIDRATOS !== 'undefined' && EVALUACION_CARBOHIDRATOS.bloques)
          return EVALUACION_CARBOHIDRATOS.bloques.reduce(function(a,b){ return a.concat(b.preguntas||[]); }, []);
        return [];
      },
      function() {
        // Solo medicina pura — sin comprensión lectora ni matemáticas
        if (typeof PREGUNTAS === 'undefined') return [];
        return Array.isArray(PREGUNTAS.medicina) ? PREGUNTAS.medicina : [];
      },
    ];

    for (var i = 0; i < sources.length; i++) {
      try { var arr = sources[i](); if (Array.isArray(arr)) pool = pool.concat(arr); }
      catch(e) {}
    }

    pool = pool.filter(function(q) {
      return q && typeof q.pregunta === 'string'
          && Array.isArray(q.opciones) && q.opciones.length >= 2
          && typeof q.correcta === 'number';
    });

    console.log('[Arena] Pool: ' + pool.length + ' preguntas');
    return pool;
  },

  // ── START ────────────────────────────────────────────────────
  start: function(type) {
    type           = type || 'normal';
    this.roundType = type;
    this.maxLives  = type === 'boss' ? 2 : 3;
    this.lives     = this.maxLives;
    this.combo     = 0;
    this.maxCombo  = 0;
    this.score     = 0;
    this.xp        = 0;
    this.qIdx      = 0;
    this._answered = false;
    this._frozen   = false;
    this._done     = false;   // guard: solo 1 llamada a _results()
    this.powerups  = { fifty: true, freeze: true, skip: true };
    this.totalTime = type === 'veloz' ? 8 : type === 'boss' ? 20 : 15;

    var pool  = this._getPool();
    var count = type === 'boss' ? 8 : 12;

    if (pool.length === 0) {
      showToast('⚠️ Las preguntas aún no cargaron. Espera un segundo.');
      return;
    }

    this.questions = _arShuffle(pool).slice(0, count).map(function(q) {
      var opts        = q.opciones.slice();
      var correctText = opts[q.correcta];
      var shuffled    = _arShuffle(opts);
      var result = {};
      for (var k in q) result[k] = q[k];
      result._dOpts    = shuffled;
      result._dCorrect = shuffled.indexOf(correctText);
      return result;
    });

    // Asegurar que powerups y HUD secundario están visibles al iniciar
    var puBar2 = document.getElementById('batallaPoweups');
    var comboEl2 = document.getElementById('batallaCombo');
    var xpEl2    = document.getElementById('batallaXPLabel');
    if (puBar2)   puBar2.style.display   = 'flex';
    if (comboEl2) comboEl2.style.display = 'none';   // empieza oculto, se muestra con primer combo
    if (xpEl2)    xpEl2.style.display    = 'block';

    showScreen('batallaScreen');
    this._renderQ();
    this._hudUpdate();
  },

  // ── RENDER QUESTION ──────────────────────────────────────────
  _renderQ: function() {
    this._answered = false;
    clearInterval(this._timer);
    this.timeLeft = this.totalTime;
    this._updatePU();

    var q = this.questions[this.qIdx];
    if (!q) { this._results(); return; }

    var isBoss = this.roundType === 'boss' && this.qIdx >= this.questions.length - 2;
    var isLast = this.qIdx === this.questions.length - 1;
    var LETTERS = 'ABCD';

    var optsHTML = '';
    for (var i = 0; i < q._dOpts.length; i++) {
      optsHTML +=
        '<button class="bat-opt" onclick="Arena.answer(' + i + ')"'
        + ' style="text-align:left;padding:.76rem 1rem;border-radius:13px;border:1.5px solid rgba(255,255,255,0.07);background:rgba(13,17,31,0.88);color:var(--text);font-size:.84rem;cursor:pointer;line-height:1.45;width:100%;display:flex;align-items:center;gap:.6rem;transition:border-color .15s,background .15s,transform .15s;"'
        + ' onmouseover="if(!this.disabled){this.style.borderColor=\'rgba(99,102,241,0.45)\';this.style.background=\'rgba(99,102,241,0.09)\';this.style.transform=\'translateX(3px)\';}"'
        + ' onmouseout="if(!this.disabled){this.style.borderColor=\'rgba(255,255,255,0.07)\';this.style.background=\'rgba(13,17,31,0.88)\';this.style.transform=\'\';}"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,0.07);align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0;">' + LETTERS[i] + '</span><span style="flex:1;">' + q._dOpts[i] + '</span></button>';
    }

    requestAnimationFrame(function() {
      document.getElementById('batallaContent').innerHTML =
      '<div style="animation:qSlideIn .32s cubic-bezier(.22,1,.36,1) both;">'
        + (isBoss ? '<div style="text-align:center;margin-bottom:.8rem;"><span style="display:inline-flex;align-items:center;gap:.4rem;background:rgba(239,68,68,0.14);border:1.5px solid rgba(239,68,68,0.45);border-radius:99px;padding:.3rem .85rem;animation:bossGlow 1.5s ease-in-out infinite;font-size:.72rem;font-weight:800;color:#ef4444;letter-spacing:.09em;text-transform:uppercase;">👹 Pregunta Jefe</span></div>' : '')
        + '<div style="font-size:.67rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.09em;margin-bottom:.45rem;display:flex;align-items:center;gap:.35rem;"><span style="width:5px;height:5px;border-radius:50%;background:var(--indigo-l);display:inline-block;"></span>' + (q.categoria || 'Medicina') + '</div>'
        + '<div style="font-size:.95rem;font-weight:600;color:var(--text);line-height:1.6;margin-bottom:.9rem;padding:.8rem 1rem;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:14px;">' + q.pregunta + '</div>'
        + '<div id="bOpts" style="display:flex;flex-direction:column;gap:.45rem;">' + optsHTML + '</div>'
        + '<div id="bExp" style="display:none;margin-top:.75rem;padding:.75rem 1rem;border-radius:12px;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);font-size:.82rem;color:var(--text-2);line-height:1.55;"></div>'
        + '<button id="bNext" style="display:none;width:100%;margin-top:.65rem;padding:.82rem;border-radius:14px;background:linear-gradient(135deg,var(--indigo),var(--indigo-d));border:none;color:#fff;font-weight:800;font-size:.88rem;cursor:pointer;box-shadow:0 4px 16px rgba(99,102,241,0.3);transition:transform .15s;"'
        + ' onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'\'" onclick="Arena.next()">'
        + (isLast ? 'Ver resultados ⚔️' : 'Siguiente →') + '</button>'
      + '</div>';
      _self._startTimer();
    });
  },

  // ── ANSWER ───────────────────────────────────────────────────
  answer: function(idx) {
    if (this._answered) return;
    this._answered = true;
    clearInterval(this._timer);

    var q       = this.questions[this.qIdx];
    var timeout = (idx === -1);
    var correct = !timeout && (idx === q._dCorrect);
    var timeBonus = Math.floor(this.timeLeft * 2.5);
    var self    = this;

    // Deshabilitar todos los botones, limpiar hover
    var opts = document.querySelectorAll('.bat-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].disabled        = true;
      opts[i].style.cursor    = 'default';
      opts[i].style.transform = '';
      opts[i].onmouseover     = null;
      opts[i].onmouseout      = null;
    }

    // Siempre marca la correcta en verde
    if (opts[q._dCorrect]) {
      opts[q._dCorrect].style.background  = 'rgba(16,185,129,0.2)';
      opts[q._dCorrect].style.borderColor = 'rgba(16,185,129,0.65)';
      opts[q._dCorrect].style.color       = '#6ee7b7';
    }

    if (correct) {
      this.combo++;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      var mult   = Math.min(this.combo, 8);
      var earned = Math.round((12 + timeBonus) * (1 + (mult - 1) * 0.28));
      this.score += earned;
      this.xp    += earned;

      ArenaAudio.correct();
      ArenaFX.flash('correctOverlay');
      ArenaFX.floatText('+' + earned, '#6ee7b7');
      if (this.combo >= 3) ArenaFX.comboExplode(this.combo);

      var icons = ['','','🔥','🔥🔥','⚡','⚡⚡','💥','💥💥','🌟'];
      this._comboUI(this.combo, earned, icons[Math.min(this.combo, icons.length - 1)]);

      if (this.combo === 5)  showToast('🔥 COMBO x5 — ¡Imparable!');
      if (this.combo === 8)  showToast('⚡ COMBO x8 — ¡Legendario!');
      if (this.combo === 10) showToast('💥 COMBO x10 — ¡Dios médico!');

    } else {
      this.combo = 0;
      this.lives--;

      if (!timeout && idx >= 0 && opts[idx]) {
        opts[idx].style.background  = 'rgba(239,68,68,0.18)';
        opts[idx].style.borderColor = 'rgba(239,68,68,0.65)';
        opts[idx].style.color       = '#fca5a5';
      }

      if (this.lives <= 0) {
        ArenaAudio.loseAll();
        ArenaFX.shake(16);
      } else {
        ArenaAudio.loseLife();
        ArenaFX.shake(9);
        ArenaFX.floatText('−1 vida', '#ef4444');
      }
      ArenaFX.flash('damageOverlay');
      ArenaFX.renderHearts(this.lives, this.maxLives);

      if (window.WrongAnswersBank && !timeout) {
        WrongAnswersBank.add(
          q.pregunta,
          q._dOpts[idx] || '(sin respuesta)',
          q.opciones[q.correcta],
          q.explicacion || '',
          q.categoria   || 'Arena'
        );
      }
    }

    // Explicación
    var expEl = document.getElementById('bExp');
    if (expEl && q.explicacion) { expEl.textContent = q.explicacion; expEl.style.display = 'block'; }

    // Botón siguiente
    var nxtEl = document.getElementById('bNext');
    if (nxtEl) {
      nxtEl.style.display = 'block';
      if (this.lives <= 0) {
        nxtEl.textContent      = '💀 Ver resultados finales';
        nxtEl.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
        nxtEl.onclick          = function() { Arena._results(); };
      }
    }

    this._hudUpdate();
  },

  // ── NEXT ─────────────────────────────────────────────────────
  next: function() {
    if (this.lives <= 0) { this._results(); return; }
    this.qIdx++;
    if (this.qIdx >= this.questions.length) { this._results(); return; }
    this._renderQ();
    this._hudUpdate();
  },

  // ── POWER-UPS ────────────────────────────────────────────────
  usePowerup: function(type) {
    if (!this.powerups[type]) { showToast('Ya lo usaste'); return; }
    if (this._answered)       { showToast('Responde primero'); return; }
    this.powerups[type] = false;
    this._updatePU();
    ArenaAudio.powerup();

    var q    = this.questions[this.qIdx];
    var opts = document.querySelectorAll('.bat-opt');
    var self = this;

    if (type === 'fifty') {
      var removed = 0;
      for (var i = 0; i < opts.length; i++) {
        if (i !== q._dCorrect && removed < 2) {
          opts[i].style.opacity       = '0.2';
          opts[i].style.pointerEvents = 'none';
          removed++;
        }
      }
      showToast('🃏 50/50 activado');
    }

    if (type === 'freeze') {
      clearInterval(this._timer);
      this._frozen = true;
      var bar = document.getElementById('batallaTimerBar');
      if (bar) { bar.style.background = '#38bdf8'; }
      showToast('❄️ +10s congelados');
      setTimeout(function() {
        self._frozen = false;
        if (!self._answered) self._startTimer();
        var b = document.getElementById('batallaTimerBar');
        if (b) b.style.background = '';
      }, 10000);
    }

    if (type === 'skip') {
      this._answered = true;
      clearInterval(this._timer);
      showToast('⏭️ Pregunta saltada');
      setTimeout(function() { Arena.next(); }, 450);
    }
  },

  // ── TIMER ────────────────────────────────────────────────────
  _startTimer: function() {
    var bar   = document.getElementById('batallaTimerBar');
    var label = document.getElementById('batallaTimerLabel');
    var self  = this;

    if (bar) { bar.style.width = '100%'; bar.style.background = '#10b981'; bar.style.animation = ''; }

    this._timer = setInterval(function() {
      if (self._frozen) return;
      self.timeLeft--;
      var pct = Math.max(0, (self.timeLeft / self.totalTime) * 100);

      if (bar) {
        bar.style.width      = pct + '%';
        bar.style.background = pct > 50 ? '#10b981' : pct > 25 ? '#f59e0b' : '#ef4444';
        bar.style.animation  = pct <= 20 ? 'timerPulse .45s ease infinite' : '';
      }
      if (label) {
        label.textContent = Math.max(0, self.timeLeft);
        label.style.color = pct <= 20 ? '#ef4444' : 'var(--text-2)';
      }

      if (self.timeLeft <= 0) {
        clearInterval(self._timer);
        if (!self._answered) {
          showToast('⏰ ¡Tiempo agotado!');
          self.answer(-1);
        }
      }
    }, 1000);
  },

  // ── HUD ──────────────────────────────────────────────────────
  _hudUpdate: function() {
    ArenaFX.renderHearts(this.lives, this.maxLives);

    var sEl = document.getElementById('batallaScore');
    if (sEl) {
      sEl.textContent = this.score.toLocaleString();
      sEl.style.animation = 'none';
      void sEl.offsetHeight;
      sEl.style.animation = 'scorePop .25s cubic-bezier(.34,1.56,.64,1) both';
    }

    var prog = document.getElementById('batallaProgress');
    if (prog) prog.style.width = Math.round((this.qIdx / this.questions.length) * 100) + '%';

    var qN = document.getElementById('batallaQNum');
    if (qN) qN.textContent = (this.qIdx + 1) + ' / ' + this.questions.length;

    var lvl  = this.getLevel();
    var xpEl = document.getElementById('batallaXPLabel');
    if (xpEl) xpEl.innerHTML = '<span style="color:' + lvl.color + '">' + lvl.icon + ' Nv.' + lvl.level + ' ' + lvl.name + '</span> · ' + this.getTotalXP() + ' XP';
  },

  _updatePU: function() {
    var self = this;
    ['fifty','freeze','skip'].forEach(function(p) {
      var el = document.getElementById('pu_' + p);
      if (!el) return;
      var on = self.powerups[p];
      el.style.opacity = on ? '1'       : '0.3';
      el.style.filter  = on ? ''        : 'grayscale(1)';
      el.style.cursor  = on ? 'pointer' : 'not-allowed';
    });
  },

  _comboUI: function(combo, earned, icon) {
    var el = document.getElementById('batallaCombo');
    if (!el) return;
    el.innerHTML = combo > 1
      ? icon + ' COMBO x' + Math.min(combo, 8) + ' <span style="font-size:.72rem;opacity:.72;">+' + earned + ' pts</span>'
      : '<span style="font-size:.8rem;">+' + earned + ' pts ✓</span>';
    el.style.display   = 'flex';
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'comboPop .5s cubic-bezier(.34,1.56,.64,1) both';
    clearTimeout(el._t);
    el._t = setTimeout(function() { el.style.display = 'none'; }, 2000);
  },

  // ── RESULTS ──────────────────────────────────────────────────
  _results: function() {
    if (this._done) return;   // evitar doble ejecución
    this._done = true;
    clearInterval(this._timer);

    // Ocultar power-ups para que no queden debajo de los resultados
    var puBar = document.getElementById('batallaPoweups');
    if (puBar) puBar.style.display = 'none';

    // Ocultar HUD secundario (combo, XP label) para pantalla limpia
    var comboEl = document.getElementById('batallaCombo');
    var xpEl    = document.getElementById('batallaXPLabel');
    if (comboEl) comboEl.style.display = 'none';
    if (xpEl)    xpEl.style.display    = 'none';
    this.addXP(this.xp);

    var prevBest = parseInt(localStorage.getItem('mediprep_arena_best') || '0');
    var isRecord = this.score > prevBest;
    if (isRecord) localStorage.setItem('mediprep_arena_best', this.score);

    var won       = this.lives > 0;
    var lvl       = this.getLevel();
    var roundType = this.roundType;
    var score     = this.score;
    var maxCombo  = this.maxCombo;
    var xp        = this.xp;
    var lives     = this.lives;
    var totalXP   = this.getTotalXP();

    if (won) {
      ArenaAudio.win();
      setTimeout(function() {
        ArenaFX.confetti(window.innerWidth * 0.3, window.innerHeight * 0.38);
        ArenaFX.confetti(window.innerWidth * 0.7, window.innerHeight * 0.38);
      }, 350);
    } else {
      ArenaAudio.loseGame();
    }

    var perf   = score >= 500 ? '🏆 ¡Majestuoso!' : score >= 300 ? '⭐ ¡Excelente!' : score >= 150 ? '👍 Bien hecho' : '💪 Sigue adelante';
    var trophy = won ? (score >= 400 ? '🏆' : '🥇') : '💀';
    var hearts = won ? '❤️'.repeat(lives) : '💀';
    var glow   = won ? 'rgba(245,158,11,.65)' : 'rgba(239,68,68,.5)';
    var xpPct  = Math.min(Math.round((totalXP / lvl.max) * 100), 100);
    var recordBadge = isRecord
      ? '<div style="display:inline-flex;align-items:center;gap:.35rem;background:rgba(245,158,11,.14);border:1px solid rgba(245,158,11,.4);border-radius:99px;padding:.25rem .8rem;font-size:.76rem;font-weight:700;color:var(--gold);margin:.5rem 0 .8rem;animation:fadeInUp .45s ease .35s both;">🌟 NUEVO RÉCORD</div>'
      : '<div style="height:.8rem;"></div>';

    document.getElementById('batallaContent').innerHTML =
      '<div style="text-align:center;padding:.5rem 0;animation:resultReveal .6s cubic-bezier(.22,1,.36,1) both;">'
        + '<div style="font-size:3.8rem;margin-bottom:.35rem;filter:drop-shadow(0 0 22px ' + glow + ');animation:trophyBounce .8s cubic-bezier(.34,1.56,.64,1) .15s both;">' + trophy + '</div>'
        + '<div style="font-family:var(--font-d);font-size:1.65rem;font-weight:800;margin-bottom:.1rem;animation:fadeInUp .45s ease .25s both;">' + perf + '</div>'
        + recordBadge
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.85rem;animation:fadeInUp .45s ease .4s both;">'
          + '<div style="background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:15px;padding:.85rem .5rem;"><div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--indigo-l);">' + score.toLocaleString() + '</div><div style="font-size:.6rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Puntuación</div></div>'
          + '<div style="background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);border-radius:15px;padding:.85rem .5rem;"><div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--gold);">x' + maxCombo + '</div><div style="font-size:.6rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Combo Máx</div></div>'
          + '<div style="background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:15px;padding:.85rem .5rem;"><div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--emerald);">+' + xp + '</div><div style="font-size:.6rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">XP Ganado</div></div>'
          + '<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:15px;padding:.85rem .5rem;"><div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--violet);">' + hearts + '</div><div style="font-size:.6rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Vidas</div></div>'
        + '</div>'
        + '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:.8rem;margin-bottom:.85rem;text-align:left;animation:fadeInUp .45s ease .48s both;">'
          + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.45rem;"><span style="font-size:.76rem;font-weight:700;color:' + lvl.color + ';">' + lvl.icon + ' Nv.' + lvl.level + ' — ' + lvl.name + '</span><span style="font-size:.68rem;color:var(--text-3);">' + totalXP + ' / ' + lvl.max + ' XP</span></div>'
          + '<div style="height:7px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden;"><div id="rXPBar" style="height:100%;width:0%;background:linear-gradient(90deg,' + lvl.color + ',white);border-radius:99px;transition:width 1.2s cubic-bezier(.22,1,.36,1);"></div></div>'
        + '</div>'
        + '<div style="display:flex;gap:.55rem;animation:fadeInUp .45s ease .55s both;">'
          + '<button onclick="Arena.start(\'' + roundType + '\')" style="flex:1;padding:.88rem;border-radius:14px;background:linear-gradient(135deg,var(--indigo),var(--indigo-d));border:none;color:#fff;font-weight:800;font-size:.88rem;cursor:pointer;box-shadow:0 4px 14px rgba(99,102,241,.3);transition:transform .15s;" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'\'">⚔️ Revancha</button>'
          + '<button onclick="showScreen(\'batallaMenuScreen\')" style="flex:1;padding:.88rem;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:var(--text-2);font-weight:800;font-size:.88rem;cursor:pointer;transition:background .15s;" onmouseover="this.style.background=\'rgba(255,255,255,.1)\'" onmouseout="this.style.background=\'rgba(255,255,255,.06)\'">🏟️ Arena</button>'
        + '</div>'
      + '</div>';

    setTimeout(function() {
      var bar = document.getElementById('rXPBar');
      if (bar) bar.style.width = xpPct + '%';
    }, 250);
  },
};


// ─── SHUFFLE LOCAL ────────────────────────────────────────────
function _arShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
