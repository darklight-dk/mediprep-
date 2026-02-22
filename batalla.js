// ══════════════════════════════════════════════════════
//  MEDIPREP — ARENA MÉDICA ⚔️
//  Modo Batalla con vidas, combos, XP y power-ups
//  v1.0 — Mega Update
// ══════════════════════════════════════════════════════

const Arena = {

  // ── STATE ──────────────────────────────────────────
  lives: 3,
  combo: 0,
  maxCombo: 0,
  score: 0,
  xp: 0,
  questionIndex: 0,
  questions: [],
  timeLeft: 15,
  timerInterval: null,
  answered: false,
  powerups: { fifty: true, freeze: true, skip: true },
  roundType: 'normal',  // 'normal' | 'veloz' | 'boss'
  totalTime: 15,
  bossRound: false,

  // ── XP SYSTEM ──────────────────────────────────────
  getLevel() {
    const xp = this.getTotalXP();
    if (xp < 100)  return { level: 1, name: 'Estudiante',      color: '#94a3b8', next: 100  };
    if (xp < 300)  return { level: 2, name: 'Interno',         color: '#60a5fa', next: 300  };
    if (xp < 600)  return { level: 3, name: 'Residente',       color: '#34d399', next: 600  };
    if (xp < 1000) return { level: 4, name: 'Especialista',    color: '#a78bfa', next: 1000 };
    if (xp < 1500) return { level: 5, name: 'Médico Senior',   color: '#fbbf24', next: 1500 };
    if (xp < 2200) return { level: 6, name: 'Jefe de Guardia', color: '#f97316', next: 2200 };
                   return { level: 7, name: 'Cirujano de Élite',color: '#ef4444', next: 9999 };
  },
  getTotalXP() {
    return parseInt(localStorage.getItem('mediprep_arena_xp') || '0');
  },
  addXP(amount) {
    const prev = this.getTotalXP();
    const prevLevel = this.getLevel().level;
    localStorage.setItem('mediprep_arena_xp', prev + amount);
    const newLevel = this.getLevel().level;
    if (newLevel > prevLevel) this.triggerLevelUp(newLevel, this.getLevel().name);
  },
  triggerLevelUp(level, name) {
    const el = document.getElementById('arenaLevelUpBanner');
    if (!el) return;
    el.innerHTML = `<span style="font-size:1.5rem">⬆️</span> ¡Nivel ${level}! <strong>${name}</strong>`;
    el.style.display = 'flex';
    el.style.animation = 'levelUpPop .6s cubic-bezier(.34,1.56,.64,1) both';
    setTimeout(() => { el.style.display = 'none'; }, 3500);
  },

  // ── INIT ───────────────────────────────────────────
  start(type = 'normal') {
    this.roundType = type;
    this.lives = type === 'boss' ? 2 : 3;
    this.combo = 0;
    this.maxCombo = 0;
    this.score = 0;
    this.xp = 0;
    this.questionIndex = 0;
    this.answered = false;
    this.powerups = { fifty: true, freeze: true, skip: true };
    this.totalTime = type === 'veloz' ? 8 : type === 'boss' ? 20 : 15;
    this.bossRound = type === 'boss';

    // Pull questions from global pool
    const pool = this._getPool();
    const count = type === 'boss' ? 8 : 12;
    this.questions = shuffle(pool).slice(0, count).map(q => {
      const opts = [...q.opciones];
      const correctText = opts[q.correcta];
      const shuffled = shuffle(opts);
      const newCorrectIdx = shuffled.indexOf(correctText);
      return { ...q, displayOpts: shuffled, displayCorrect: newCorrectIdx };
    });

    showScreen('batallaScreen');
    this._renderQuestion();
    this._updateHUD();
  },

  _getPool() {
    let pool = [];
    const sources = [
      'PREGUNTAS_PLANIMETRIA','PREGUNTAS_NERVIOSO','PREGUNTAS_CARDIOVASCULAR',
      'PREGUNTAS_RESPIRATORIO','PREGUNTAS_ENDOCRINO','PREGUNTAS_DIGESTIVO',
      'PREGUNTAS_SALUD','PREGUNTAS_CONAMAT'
    ];
    sources.forEach(s => {
      if (window[s] && Array.isArray(window[s])) pool = pool.concat(window[s]);
    });
    // Also check PREGUNTAS object
    if (window.PREGUNTAS) {
      Object.values(window.PREGUNTAS).forEach(arr => {
        if (Array.isArray(arr)) pool = pool.concat(arr);
      });
    }
    // Fallback
    if (pool.length < 10) {
      pool = Array.from({length: 20}, (_, i) => ({
        pregunta: `Pregunta de práctica ${i+1}: ¿Cuál es la función del sistema nervioso?`,
        opciones: ['Regulación hormonal','Control motor y sensitivo','Digestión','Circulación'],
        correcta: 1,
        explicacion: 'El SN controla funciones motoras y sensitivas del cuerpo.',
        categoria: 'Sistema Nervioso'
      }));
    }
    return pool;
  },

  // ── RENDER QUESTION ────────────────────────────────
  _renderQuestion() {
    this.answered = false;
    clearInterval(this.timerInterval);
    this.timeLeft = this.totalTime;
    this._updatePowerupUI();

    const q = this.questions[this.questionIndex];
    if (!q) { this._showResults(); return; }

    const isBoss = this.bossRound && this.questionIndex >= this.questions.length - 3;
    const container = document.getElementById('batallaContent');
    if (!container) return;

    container.innerHTML = `
      <div id="batallaQ" style="animation:qSlideIn .35s cubic-bezier(.22,1,.36,1) both;">
        ${isBoss ? `<div style="text-align:center;margin-bottom:.75rem;font-size:.75rem;font-weight:800;color:#ef4444;letter-spacing:.1em;text-transform:uppercase;animation:pulse 1s infinite;">⚔️ PREGUNTA JEFE</div>` : ''}
        <div style="font-size:.72rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.6rem;">${q.categoria || 'Medicina'}</div>
        <div style="font-size:.97rem;font-weight:600;color:var(--text);line-height:1.55;margin-bottom:1.1rem;">${q.pregunta}</div>
        <div id="batallaOpts" style="display:flex;flex-direction:column;gap:.5rem;">
          ${q.displayOpts.map((opt, i) => `
            <button class="batalla-opt" data-idx="${i}" onclick="Arena.answer(${i})"
              style="text-align:left;padding:.8rem 1rem;border-radius:14px;border:1.5px solid rgba(255,255,255,0.08);background:rgba(13,17,31,0.8);color:var(--text);font-size:.85rem;font-weight:500;cursor:pointer;transition:all .18s;line-height:1.4;width:100%;"
              onmouseover="if(!this.disabled)this.style.borderColor='rgba(99,102,241,0.4)'"
              onmouseout="if(!this.disabled)this.style.borderColor='rgba(255,255,255,0.08)'">
              <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,0.07);text-align:center;line-height:22px;font-size:.72rem;font-weight:700;margin-right:.6rem;flex-shrink:0;">${'ABCD'[i]}</span>${opt}
            </button>
          `).join('')}
        </div>
        <div id="batallaExplicacion" style="display:none;margin-top:.85rem;padding:.85rem 1rem;border-radius:12px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);font-size:.82rem;color:var(--text-2);line-height:1.5;"></div>
        <button id="batallaSiguiente" style="display:none;width:100%;margin-top:.75rem;padding:.85rem;border-radius:14px;background:var(--indigo);border:none;color:white;font-weight:700;font-size:.9rem;cursor:pointer;transition:all .2s;" onclick="Arena.next()">Siguiente →</button>
      </div>`;

    this._startTimer();
  },

  // ── ANSWER ─────────────────────────────────────────
  answer(idx) {
    if (this.answered) return;
    this.answered = true;
    clearInterval(this.timerInterval);

    const q = this.questions[this.questionIndex];
    const correct = idx === q.displayCorrect;
    const timeBonus = Math.floor(this.timeLeft * 2);

    // Disable all options
    document.querySelectorAll('.batalla-opt').forEach(btn => {
      btn.disabled = true;
      btn.style.cursor = 'default';
    });

    // Mark correct/wrong
    const opts = document.querySelectorAll('.batalla-opt');
    opts[q.displayCorrect].style.background = 'rgba(16,185,129,0.2)';
    opts[q.displayCorrect].style.borderColor = 'rgba(16,185,129,0.6)';
    opts[q.displayCorrect].style.color = '#6ee7b7';

    if (correct) {
      this.combo++;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      const multiplier = Math.min(this.combo, 5);
      const earned = (10 + timeBonus) * multiplier;
      this.score += earned;
      this.xp += earned;
      this._showCombo(this.combo, earned);
      opts[idx].style.animation = 'correctPop .4s cubic-bezier(.34,1.56,.64,1)';

      // Unlock achievements
      if (this.combo === 5)  this._showToast('🔥 COMBO x5 — ¡Imparable!');
      if (this.combo === 10) this._showToast('⚡ COMBO x10 — ¡Legendario!');

    } else {
      this.combo = 0;
      this.lives--;
      opts[idx].style.background = 'rgba(239,68,68,0.2)';
      opts[idx].style.borderColor = 'rgba(239,68,68,0.6)';
      opts[idx].style.color = '#fca5a5';
      opts[idx].style.animation = 'shake .4s ease';
      this._shakeHeart();

      // Also save to wrong bank
      if (window.WrongAnswersBank) {
        const origCorrect = q.opciones[q.correcta];
        const chosen = q.displayOpts[idx];
        WrongAnswersBank.add(q.pregunta, chosen, origCorrect, q.explicacion, q.categoria || 'Arena');
      }
    }

    // Show explanation
    const exp = document.getElementById('batallaExplicacion');
    if (exp) {
      exp.textContent = q.explicacion || 'Sin explicación disponible.';
      exp.style.display = 'block';
    }

    // Show next btn
    const nxt = document.getElementById('batallaSiguiente');
    if (nxt) {
      nxt.style.display = 'block';
      // Auto-advance if last question or no lives
      if (this.lives <= 0) {
        nxt.textContent = 'Ver resultados ⚔️';
        nxt.onclick = () => this._showResults();
      }
    }

    this._updateHUD();

    if (this.lives <= 0) {
      this._showToast('💀 Sin vidas — redirigiendo...');
    }
  },

  // ── NEXT ───────────────────────────────────────────
  next() {
    if (this.lives <= 0) { this._showResults(); return; }
    this.questionIndex++;
    if (this.questionIndex >= this.questions.length) {
      this._showResults();
    } else {
      this._renderQuestion();
      this._updateHUD();
    }
  },

  // ── POWER-UPS ──────────────────────────────────────
  usePowerup(type) {
    if (!this.powerups[type] || this.answered) return;
    this.powerups[type] = false;
    this._updatePowerupUI();

    const q = this.questions[this.questionIndex];

    if (type === 'fifty') {
      // Remove 2 wrong options
      const opts = document.querySelectorAll('.batalla-opt');
      let removed = 0;
      opts.forEach((btn, i) => {
        if (i !== q.displayCorrect && removed < 2) {
          btn.style.opacity = '.25';
          btn.disabled = true;
          removed++;
        }
      });
      this._showToast('🃏 50/50 activado');
    }
    if (type === 'freeze') {
      clearInterval(this.timerInterval);
      this._showToast('❄️ Tiempo congelado por 10s');
      setTimeout(() => { if (!this.answered) this._startTimer(); }, 10000);
    }
    if (type === 'skip') {
      this.combo = 0;
      clearInterval(this.timerInterval);
      this._showToast('⏭️ Pregunta saltada');
      this.answered = true;
      setTimeout(() => this.next(), 600);
    }
  },

  // ── TIMER ──────────────────────────────────────────
  _startTimer() {
    const bar = document.getElementById('batallaTimerBar');
    const label = document.getElementById('batallaTimerLabel');
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const pct = (this.timeLeft / this.totalTime) * 100;
      if (bar) {
        bar.style.width = pct + '%';
        bar.style.background = pct > 50 ? 'var(--emerald)' : pct > 25 ? 'var(--gold)' : '#ef4444';
      }
      if (label) label.textContent = this.timeLeft;
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        if (!this.answered) {
          this._showToast('⏰ ¡Tiempo agotado!');
          this.answer(-1); // force wrong
        }
      }
    }, 1000);
  },

  // ── HUD ────────────────────────────────────────────
  _updateHUD() {
    const hearts = '❤️'.repeat(this.lives) + '🖤'.repeat(Math.max(0, (this.roundType === 'boss' ? 2 : 3) - this.lives));
    const hEl = document.getElementById('batallaHearts');
    if (hEl) hEl.textContent = hearts;

    const sEl = document.getElementById('batallaScore');
    if (sEl) sEl.textContent = this.score.toLocaleString();

    const prog = document.getElementById('batallaProgress');
    if (prog) prog.style.width = ((this.questionIndex / this.questions.length) * 100) + '%';

    const qN = document.getElementById('batallaQNum');
    if (qN) qN.textContent = `${this.questionIndex + 1} / ${this.questions.length}`;

    // Level info in HUD
    const lvl = this.getLevel();
    const xpEl = document.getElementById('batallaXPLabel');
    if (xpEl) {
      const total = this.getTotalXP();
      xpEl.innerHTML = `<span style="color:${lvl.color}">Nv.${lvl.level} ${lvl.name}</span> · ${total} XP`;
    }
  },

  _updatePowerupUI() {
    ['fifty','freeze','skip'].forEach(p => {
      const btn = document.getElementById('pu_' + p);
      if (!btn) return;
      btn.style.opacity = this.powerups[p] ? '1' : '.3';
      btn.style.cursor  = this.powerups[p] ? 'pointer' : 'not-allowed';
    });
  },

  _showCombo(combo, earned) {
    const el = document.getElementById('batallaCombo');
    if (!el) return;
    const multiplier = Math.min(combo, 5);
    el.innerHTML = combo > 1
      ? `<span style="font-size:1.1rem">🔥</span> COMBO ×${multiplier} <span style="font-size:.75rem;opacity:.75">+${earned} pts</span>`
      : `<span style="font-size:.85rem">+${earned} pts</span>`;
    el.style.display = 'flex';
    el.style.animation = 'comboPop .5s cubic-bezier(.34,1.56,.64,1) both';
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.style.display = 'none'; }, 2000);
  },

  _shakeHeart() {
    const el = document.getElementById('batallaHearts');
    if (!el) return;
    el.style.animation = 'shake .4s ease';
    setTimeout(() => { el.style.animation = ''; }, 400);
  },

  _showToast(msg) {
    showToast(msg);
  },

  // ── RESULTS ────────────────────────────────────────
  _showResults() {
    clearInterval(this.timerInterval);
    const total = this.questions.length;
    const correct = this.score > 0 ? Math.ceil(this.score / 20) : 0;
    const accuracy = Math.round(((total - (this.lives <= 0 ? total - this.questionIndex : 0)) / total) * 100);

    this.addXP(this.xp);
    const lvl = this.getLevel();

    const perf = this.score >= 300 ? '🏆 Excelente' : this.score >= 150 ? '⭐ Bien' : '💪 Sigue adelante';

    const container = document.getElementById('batallaContent');
    container.innerHTML = `
      <div style="text-align:center;padding:1rem 0;animation:screenIn .5s cubic-bezier(.22,1,.36,1) both;">
        <div style="font-size:3.5rem;margin-bottom:.5rem;filter:drop-shadow(0 0 20px rgba(245,158,11,0.5));">
          ${this.lives > 0 ? '🏆' : '💀'}
        </div>
        <div style="font-family:var(--font-d);font-size:1.6rem;font-weight:800;margin-bottom:.25rem;">
          ${this.lives > 0 ? perf : 'Derrota'}
        </div>
        <div style="font-size:.8rem;color:var(--text-3);margin-bottom:1.5rem;">
          ${this.lives > 0 ? 'Batalla completada' : 'Sin vidas restantes'}
        </div>

        <!-- STATS GRID -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1rem;">
          <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:.9rem;">
            <div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--indigo-l);">${this.score.toLocaleString()}</div>
            <div style="font-size:.62rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Puntuación</div>
          </div>
          <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);border-radius:14px;padding:.9rem;">
            <div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--gold);">×${this.maxCombo}</div>
            <div style="font-size:.62rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Combo Máx</div>
          </div>
          <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:14px;padding:.9rem;">
            <div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--emerald);">${this.xp}</div>
            <div style="font-size:.62rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">XP Ganado</div>
          </div>
          <div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.2);border-radius:14px;padding:.9rem;">
            <div style="font-family:var(--font-d);font-size:1.8rem;font-weight:800;color:var(--violet);">${this.lives}</div>
            <div style="font-size:.62rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;">Vidas Restantes</div>
          </div>
        </div>

        <!-- XP PROGRESS -->
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:.85rem;margin-bottom:1.1rem;text-align:left;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;">
            <span style="font-size:.78rem;font-weight:700;color:${lvl.color};">Nv.${lvl.level} — ${lvl.name}</span>
            <span style="font-size:.72rem;color:var(--text-3);">${this.getTotalXP()} / ${lvl.next} XP</span>
          </div>
          <div style="height:6px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;">
            <div style="height:100%;width:${Math.min((this.getTotalXP()/lvl.next)*100,100)}%;background:linear-gradient(90deg,${lvl.color},white);border-radius:99px;transition:width 1s ease;"></div>
          </div>
        </div>

        <div style="display:flex;gap:.6rem;">
          <button onclick="Arena.start('${this.roundType}')"
            style="flex:1;padding:.9rem;border-radius:14px;background:var(--indigo);border:none;color:white;font-weight:700;font-size:.9rem;cursor:pointer;">
            ⚔️ Revancha
          </button>
          <button onclick="navTo('homeScreen','nav-home')"
            style="flex:1;padding:.9rem;border-radius:14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--text-2);font-weight:700;font-size:.9rem;cursor:pointer;">
            🏠 Inicio
          </button>
        </div>
      </div>`;
  }
};
