// ═══════════════════════════════════════════════════════════════
// MEDIPREP SMART — POMODORO v2 (pomodoro.js)
// Bugs corregidos + configuración ampliada
// ═══════════════════════════════════════════════════════════════

// ── Config por defecto (editable en settings) ─────────────────
const POMODORO_DEFAULTS = {
    workMinutes:       25,
    shortBreakMinutes: 5,
    longBreakMinutes:  15,
    sessionsBeforeLong:4,
    autoStartBreak:    true,
    autoStartWork:     false,
    soundEnabled:      true,
};

function getPomoCfg() {
    try {
        const saved = JSON.parse(localStorage.getItem('mp_pomo_cfg') || '{}');
        return { ...POMODORO_DEFAULTS, ...saved };
    } catch { return { ...POMODORO_DEFAULTS }; }
}
function savePomoCfg(cfg) {
    localStorage.setItem('mp_pomo_cfg', JSON.stringify(cfg));
}

// ── Estado ────────────────────────────────────────────────────
let pomodoroInterval        = null;
let pomodoroSecondsLeft     = getPomoCfg().workMinutes * 60;
let pomodoroTotalSeconds     = getPomoCfg().workMinutes * 60; // duración actual del bloque
let pomodoroMode             = 'work'; // 'work' | 'break' | 'longbreak'
let pomodoroSession          = 0;      // pomodoros completados esta sesión
let pomodoroRunning          = false;
let pomodoroTotalFocusSeconds = 0;

// ── Display ───────────────────────────────────────────────────
function updatePomodoroDisplay() {
    const m = Math.floor(pomodoroSecondsLeft / 60);
    const s = pomodoroSecondsLeft % 60;
    const display = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    const timeEl = document.getElementById('pomodoroTime');
    if (timeEl) timeEl.textContent = display;

    // FAB flotante
    const fabEl = document.getElementById('pomodoroFab');
    if (fabEl) {
        if (pomodoroRunning) {
            fabEl.textContent = display;
            fabEl.style.fontSize = '.58rem';
            fabEl.style.fontWeight = '800';
            fabEl.style.background = pomodoroMode === 'work'
                ? 'linear-gradient(135deg,#ef4444,#dc2626)'
                : 'linear-gradient(135deg,#10b981,#059669)';
        } else {
            fabEl.textContent = '🍅';
            fabEl.style.fontSize = '1.2rem';
            fabEl.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
        }
    }

    // Barra de progreso lineal
    const pct = pomodoroTotalSeconds > 0
        ? ((pomodoroTotalSeconds - pomodoroSecondsLeft) / pomodoroTotalSeconds) * 100
        : 0;
    const barEl = document.getElementById('pomodoroBar');
    if (barEl) barEl.style.width = pct + '%';

    // Círculo SVG — usa stroke-dasharray "filled gap" como en el HTML
    const circle = document.getElementById('pomodoroCircle');
    if (circle) {
        const circumference = 2 * Math.PI * 90; // r=90 → ~565.5
        const filled = pomodoroTotalSeconds > 0
            ? ((pomodoroTotalSeconds - pomodoroSecondsLeft) / pomodoroTotalSeconds) * circumference
            : 0;
        circle.setAttribute('stroke-dasharray', `${filled} ${circumference}`);
        circle.setAttribute('stroke', pomodoroMode === 'work' ? '#ef4444' : '#10b981');
    }

    // Label de modo
    const modeEl = document.getElementById('pomodoroModeLabel');
    if (modeEl) {
        if (pomodoroMode === 'work') {
            modeEl.textContent = '🧠 Enfoque';
            modeEl.style.color = '#ef4444';
        } else if (pomodoroMode === 'longbreak') {
            modeEl.textContent = '😴 Descanso largo';
            modeEl.style.color = '#10b981';
        } else {
            modeEl.textContent = '☕ Descanso';
            modeEl.style.color = '#10b981';
        }
    }
}

// ── Controles ─────────────────────────────────────────────────
function togglePomodoro() {
    pomodoroRunning ? pausePomodoro() : startPomodoro();
}

function startPomodoro() {
    if (pomodoroRunning) return;
    pomodoroRunning = true;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '⏸ Pausar';

    // Pedir permiso de notificación si no se ha dado
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }

    pomodoroInterval = setInterval(() => {
        pomodoroSecondsLeft--;
        if (pomodoroMode === 'work') pomodoroTotalFocusSeconds++;
        updatePomodoroDisplay();

        if (pomodoroSecondsLeft <= 0) {
            clearInterval(pomodoroInterval);
            pomodoroRunning = false;
            pomodoroOnComplete();
        }
    }, 1000);
}

function pausePomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '▶ Continuar';
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    pomodoroMode = 'work';
    const cfg = getPomoCfg();
    pomodoroSecondsLeft  = cfg.workMinutes * 60;
    pomodoroTotalSeconds = cfg.workMinutes * 60;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '▶ Iniciar';
    updatePomodoroDisplay();
}

function setPomodoroMode(minutes, mode) {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    pomodoroMode = mode;
    pomodoroSecondsLeft  = minutes * 60;
    pomodoroTotalSeconds = minutes * 60;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '▶ Iniciar';
    updatePomodoroDisplay();
}

// ── Al completar un bloque ────────────────────────────────────
function pomodoroOnComplete() {
    const cfg = getPomoCfg();

    if (pomodoroMode === 'work') {
        pomodoroSession++;
        // Actualizar contadores en UI
        const sesEl = document.getElementById('pomodoroSession');
        if (sesEl) sesEl.textContent = pomodoroSession;
        const totalMins = Math.floor(pomodoroTotalFocusSeconds / 60);
        const tf = document.getElementById('pomodoroTotalFocus');
        if (tf) tf.textContent = totalMins + ' min';

        // ¿Descanso largo?
        const isLong = (pomodoroSession % cfg.sessionsBeforeLong === 0);
        pomodoroMode = isLong ? 'longbreak' : 'break';
        const breakMins = isLong ? cfg.longBreakMinutes : cfg.shortBreakMinutes;
        pomodoroSecondsLeft  = breakMins * 60;
        pomodoroTotalSeconds = breakMins * 60;

        pomodoroNotify(
            isLong ? '🏆 ¡Gran bloque completado!' : '🍅 ¡Pomodoro completado!',
            isLong
                ? `Llevas ${pomodoroSession} pomodoros. Descansa ${breakMins} minutos.`
                : 'Buen trabajo. Descansa 5 minutos.'
        );

        if (cfg.autoStartBreak) {
            setTimeout(startPomodoro, 1500);
        } else {
            const btn = document.getElementById('pomodoroBtnStart');
            if (btn) btn.textContent = '▶ Iniciar descanso';
        }

    } else {
        // Descanso terminado → volver a trabajo
        pomodoroMode = 'work';
        pomodoroSecondsLeft  = cfg.workMinutes * 60;
        pomodoroTotalSeconds = cfg.workMinutes * 60;

        pomodoroNotify('☕ Descanso terminado', '¡A estudiar de nuevo!');

        if (cfg.autoStartWork) {
            setTimeout(startPomodoro, 1500);
        } else {
            const btn = document.getElementById('pomodoroBtnStart');
            if (btn) btn.textContent = '▶ Iniciar enfoque';
        }
    }

    updatePomodoroDisplay();
}

// ── Notificación (sin alert) ───────────────────────────────────
function pomodoroNotify(title, body) {
    // Toast en app
    if (typeof showToast === 'function') showToast(`${title} — ${body}`, 4000);

    // Notificación nativa si hay permiso
    if ('Notification' in window && Notification.permission === 'granted') {
        try {
            new Notification(title, { body, icon: 'icon-192.png' });
        } catch (e) {}
    }

    // Sonido
    const cfg = getPomoCfg();
    if (cfg.soundEnabled && typeof playAudioFile === 'function') {
        playAudioFile('Yippee.ogg');
    }
}

// ── Render panel de configuración del Pomodoro ────────────────
function renderPomoSettings() {
    const el = document.getElementById('pomoConfigPanel');
    if (!el) return;
    const cfg = getPomoCfg();

    el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin-bottom:.75rem;">
        <div>
            <label style="font-size:.68rem;font-weight:700;color:var(--text-3);display:block;margin-bottom:.3rem;">🍅 Trabajo (min)</label>
            <input type="number" id="pomoCfgWork" min="1" max="90" value="${cfg.workMinutes}"
                style="width:100%;padding:.55rem .7rem;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.9rem;font-weight:700;text-align:center;outline:none;"
                oninput="previewPomoCfg()">
        </div>
        <div>
            <label style="font-size:.68rem;font-weight:700;color:var(--text-3);display:block;margin-bottom:.3rem;">☕ Descanso corto (min)</label>
            <input type="number" id="pomoCfgShort" min="1" max="30" value="${cfg.shortBreakMinutes}"
                style="width:100%;padding:.55rem .7rem;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.9rem;font-weight:700;text-align:center;outline:none;"
                oninput="previewPomoCfg()">
        </div>
        <div>
            <label style="font-size:.68rem;font-weight:700;color:var(--text-3);display:block;margin-bottom:.3rem;">😴 Descanso largo (min)</label>
            <input type="number" id="pomoCfgLong" min="5" max="60" value="${cfg.longBreakMinutes}"
                style="width:100%;padding:.55rem .7rem;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.9rem;font-weight:700;text-align:center;outline:none;"
                oninput="previewPomoCfg()">
        </div>
        <div>
            <label style="font-size:.68rem;font-weight:700;color:var(--text-3);display:block;margin-bottom:.3rem;">🔁 Pomodoros antes del largo</label>
            <input type="number" id="pomoCfgLongAfter" min="2" max="8" value="${cfg.sessionsBeforeLong}"
                style="width:100%;padding:.55rem .7rem;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.9rem;font-weight:700;text-align:center;outline:none;"
                oninput="previewPomoCfg()">
        </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:.75rem;">
        <label style="display:flex;align-items:center;justify-content:space-between;padding:.6rem .8rem;background:var(--glass);border:1px solid var(--border);border-radius:10px;cursor:pointer;">
            <span style="font-size:.8rem;font-weight:700;color:var(--text);">Auto-iniciar descanso</span>
            <label class="toggle-switch" onclick="event.stopPropagation()">
                <input type="checkbox" id="pomoCfgAutoBreak" ${cfg.autoStartBreak ? 'checked' : ''} onchange="applyPomoCfg()">
                <span class="toggle-slider"></span>
            </label>
        </label>
        <label style="display:flex;align-items:center;justify-content:space-between;padding:.6rem .8rem;background:var(--glass);border:1px solid var(--border);border-radius:10px;cursor:pointer;">
            <span style="font-size:.8rem;font-weight:700;color:var(--text);">Auto-iniciar siguiente enfoque</span>
            <label class="toggle-switch" onclick="event.stopPropagation()">
                <input type="checkbox" id="pomoCfgAutoWork" ${cfg.autoStartWork ? 'checked' : ''} onchange="applyPomoCfg()">
                <span class="toggle-slider"></span>
            </label>
        </label>
        <label style="display:flex;align-items:center;justify-content:space-between;padding:.6rem .8rem;background:var(--glass);border:1px solid var(--border);border-radius:10px;cursor:pointer;">
            <span style="font-size:.8rem;font-weight:700;color:var(--text);">Sonido al completar</span>
            <label class="toggle-switch" onclick="event.stopPropagation()">
                <input type="checkbox" id="pomoCfgSound" ${cfg.soundEnabled ? 'checked' : ''} onchange="applyPomoCfg()">
                <span class="toggle-slider"></span>
            </label>
        </label>
    </div>

    <button onclick="applyPomoCfg(true)"
        style="width:100%;padding:.75rem;border-radius:10px;border:none;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;font-weight:800;font-size:.88rem;cursor:pointer;">
        ✓ Guardar y aplicar
    </button>
    `;
}

function previewPomoCfg() { /* live preview opcional */ }

function applyPomoCfg(showMsg) {
    const work      = parseInt(document.getElementById('pomoCfgWork')?.value)      || 25;
    const shortB    = parseInt(document.getElementById('pomoCfgShort')?.value)     || 5;
    const longB     = parseInt(document.getElementById('pomoCfgLong')?.value)      || 15;
    const longAfter = parseInt(document.getElementById('pomoCfgLongAfter')?.value) || 4;
    const autoBreak = document.getElementById('pomoCfgAutoBreak')?.checked ?? true;
    const autoWork  = document.getElementById('pomoCfgAutoWork')?.checked  ?? false;
    const sound     = document.getElementById('pomoCfgSound')?.checked     ?? true;

    const cfg = { workMinutes: work, shortBreakMinutes: shortB, longBreakMinutes: longB,
                  sessionsBeforeLong: longAfter, autoStartBreak: autoBreak,
                  autoStartWork: autoWork, soundEnabled: sound };
    savePomoCfg(cfg);

    // Resetear timer con la nueva duración si no está corriendo
    if (!pomodoroRunning) {
        resetPomodoro();
    }
    if (showMsg && typeof showToast === 'function') showToast('✓ Configuración guardada');
}

console.log('✅ Pomodoro v2 cargado');
