// ============================================
// MEDIPREP SMART — POMODORO INTEGRADO
// ============================================

let pomodoroInterval = null;
let pomodoroSecondsLeft = 25 * 60;
let pomodoroMode = 'work'; // 'work' | 'break'
let pomodoroSession = 0;
let pomodoroRunning = false;
let pomodoroTotalFocusSeconds = 0;

function updatePomodoroDisplay() {
    const m = Math.floor(pomodoroSecondsLeft / 60);
    const s = pomodoroSecondsLeft % 60;
    const display = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    const timeEl = document.getElementById('pomodoroTime');
    const fabEl = document.getElementById('pomodoroFab');
    if (timeEl) timeEl.textContent = display;
    if (fabEl && pomodoroRunning) {
        fabEl.textContent = display;
        fabEl.style.background = pomodoroMode === 'work'
            ? 'linear-gradient(135deg,#ef4444,#dc2626)'
            : 'linear-gradient(135deg,#10b981,#059669)';
    } else if (fabEl) {
        fabEl.textContent = '🍅';
        fabEl.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
    }

    // Barra de progreso
    const total = pomodoroMode === 'work' ? 25 * 60 : 5 * 60;
    const pct = ((total - pomodoroSecondsLeft) / total) * 100;
    const barEl = document.getElementById('pomodoroBar');
    if (barEl) barEl.style.width = pct + '%';

    // Círculo SVG
    const circle = document.getElementById('pomodoroCircle');
    if (circle) {
        const circumference = 2 * Math.PI * 90;
        const elapsed = total - pomodoroSecondsLeft;
        const offset = circumference - (elapsed / total) * circumference;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = offset;
        circle.setAttribute('stroke', pomodoroMode === 'work' ? '#ef4444' : '#10b981');
    }
}

function togglePomodoro() {
    if (pomodoroRunning) {
        pausePomodoro();
    } else {
        startPomodoro();
    }
}

function startPomodoro() {
    pomodoroRunning = true;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '⏸ Pausar';

    pomodoroInterval = setInterval(() => {
        pomodoroSecondsLeft--;
        if (pomodoroMode === 'work') pomodoroTotalFocusSeconds++;
        updatePomodoroDisplay();

        if (pomodoroSecondsLeft <= 0) {
            clearInterval(pomodoroInterval);
            pomodoroRunning = false;

            if (pomodoroMode === 'work') {
                pomodoroSession++;
                if (typeof playSound === 'function') playSound('fin');
                const sesEl = document.getElementById('pomodoroSession');
                if (sesEl) sesEl.textContent = pomodoroSession;
                const totalMins = Math.floor(pomodoroTotalFocusSeconds / 60);
                const tf = document.getElementById('pomodoroTotalFocus');
                if (tf) tf.textContent = totalMins + ' min';

                pomodoroMode = 'break';
                pomodoroSecondsLeft = 5 * 60;
                const modeEl = document.getElementById('pomodoroModeLabel');
                if (modeEl) { modeEl.textContent = '☕ Descanso'; modeEl.style.color = '#10b981'; }
                const btn2 = document.getElementById('pomodoroBtnStart');
                if (btn2) btn2.textContent = '▶ Iniciar';

                // Notificación
                if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification('🍅 MediPrep — ¡Pomodoro completado!', {
                        body: 'Buen trabajo. Descansa 5 minutos.',
                        icon: 'icon-192.png'
                    });
                } else {
                    alert('🍅 ¡Pomodoro completado! Descansa 5 minutos.');
                }
            } else {
                pomodoroMode = 'work';
                pomodoroSecondsLeft = 25 * 60;
                const modeEl = document.getElementById('pomodoroModeLabel');
                if (modeEl) { modeEl.textContent = '🧠 Enfoque'; modeEl.style.color = '#ef4444'; }
                const btn2 = document.getElementById('pomodoroBtnStart');
                if (btn2) btn2.textContent = '▶ Iniciar';
            }
            updatePomodoroDisplay();
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
    pomodoroSecondsLeft = 25 * 60;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '▶ Iniciar';
    const modeEl = document.getElementById('pomodoroModeLabel');
    if (modeEl) { modeEl.textContent = '🧠 Enfoque'; modeEl.style.color = '#ef4444'; }
    updatePomodoroDisplay();
}

function setPomodoroMode(minutes, mode) {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    pomodoroMode = mode;
    pomodoroSecondsLeft = minutes * 60;
    const btn = document.getElementById('pomodoroBtnStart');
    if (btn) btn.textContent = '▶ Iniciar';
    const modeEl = document.getElementById('pomodoroModeLabel');
    if (modeEl) {
        modeEl.textContent = mode === 'work' ? '🧠 Enfoque' : '☕ Descanso';
        modeEl.style.color = mode === 'work' ? '#ef4444' : '#10b981';
    }
    updatePomodoroDisplay();
}

// Solicitar permiso para notificaciones
function solicitarPermisoPomodoroNotif() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

console.log('✅ Pomodoro cargado');
