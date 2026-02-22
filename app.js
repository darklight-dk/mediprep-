// ═══════════════════════════════════════
// UTILIDAD: Scroll suave al final de pantalla
// ═══════════════════════════════════════
function scrollToBottom(targetEl, delay = 120) {
    setTimeout(() => {
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        // También forzar scroll de window al fondo
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, delay);
}

// ============================================
// MEDIPREP SMART - MOTOR DEL SISTEMA
// ============================================

const CONFIG = {
    SOUNDS: { enabled: true },
    ANIMATIONS: { enabled: true }
};

const WrongAnswersBank = {
    add(pregunta, tuRespuesta, correcta, explicacion, categoria = 'general') {
        const bank = this.getAll();
        bank.push({
            id: Date.now() + Math.random(),
            pregunta,
            tuRespuesta,
            correcta,
            explicacion,
            categoria,
            fecha: new Date().toISOString(),
            revisada: false
        });
        localStorage.setItem('mediprep_wrong_bank', JSON.stringify(bank));
    },
    
    getAll() {
        try {
            return JSON.parse(localStorage.getItem('mediprep_wrong_bank') || '[]');
        } catch {
            return [];
        }
    },
    
    getPending() {
        return this.getAll().filter(q => !q.revisada);
    },
    
    markAsReviewed(id) {
        const bank = this.getAll();
        const item = bank.find(q => q.id === id);
        if (item) item.revisada = true;
        localStorage.setItem('mediprep_wrong_bank', JSON.stringify(bank));
    },
    
    clear() {
        localStorage.setItem('mediprep_wrong_bank', '[]');
    },
    
    getCount() {
        return this.getPending().length;
    }
};

// SISTEMA DE LICENCIAS
const VALID_LICENSES = [
    'MEDIPREP-2026-PREMIUM',
    'MEDIPREP-DEMO-001',
    // Aquí agregarás los códigos que generes
];

// Función segura para ir al home — respeta la activación
function goHome() {
    const isActivated = localStorage.getItem('mediprep_activated');
    if (isActivated === 'true') {
        showScreen('homeScreen');
    }
    // Si no está activado, no hace nada (no se puede escapar)
}

function checkLicenseOnLoad() {
    const savedLicense = localStorage.getItem('mediprep_license');
    const isActivated = localStorage.getItem('mediprep_activated');

    if (isActivated === 'true' && savedLicense) {
        // Licencia ya activada - ir directo al home
        console.log("✅ Licencia activa:", savedLicense);
        showScreen('homeScreen');
        return true;
    } else {
        // NO HAY LICENCIA - Mostrar pantalla de activación
        console.log("🔒 Licencia requerida");
        showScreen('activationScreen');
        return false;
    }
}

function activateLicense() {
    const input = document.getElementById('licenseInput').value.trim().toUpperCase();
    const errorDiv = document.getElementById('activationError');

    if (!input) {
        errorDiv.textContent = '⚠️ Por favor ingresa un código de activación';
        errorDiv.style.display = 'block';
        return;
    }

    // Validar formato básico
    if (!input.startsWith('MEDIPREP-')) {
        errorDiv.textContent = '❌ Código inválido. Debe comenzar con MEDIPREP-';
        errorDiv.style.display = 'block';
        return;
    }

    // Validar código (aquí puedes agregar validación con hash)
    if (isValidLicense(input)) {
        // Activar licencia
        localStorage.setItem('mediprep_license', input);
        localStorage.setItem('mediprep_activated', 'true');
        localStorage.setItem('mediprep_activation_date', new Date().toISOString());

        // Mostrar mensaje de éxito
        showActivationSuccess();
    } else {
        errorDiv.textContent = '❌ Código inválido. Verifica e intenta nuevamente o contacta por WhatsApp.';
        errorDiv.style.display = 'block';
    }
}

function isValidLicense(code) {
    // Validación simple: verifica si está en la lista O cumple con el patrón
    if (VALID_LICENSES.includes(code)) {
        return true;
    }

    // Validación por patrón (formato MEDIPREP-XXXX-XXXX)
    // Aquí puedes implementar algoritmo de hash para mayor seguridad
    const pattern = /^MEDIPREP-[A-Z0-9]{4,8}-[A-Z0-9]{4,8}$/;
    if (pattern.test(code)) {
        // Aquí podrías validar con un hash
        return validateHash(code);
    }

    return false;
}

function validateHash(code) {
    // Algoritmo simple de validación
    // Los códigos válidos tienen un patrón específico
    const parts = code.split('-');
    if (parts.length !== 3) return false;

    // Validación básica por checksum
    const checksum = parts[2];
    const expectedChecksum = generateChecksum(parts[1]);

    return checksum === expectedChecksum;
}

function generateChecksum(seed) {
    // Genera un checksum simple de 8 caracteres
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36).toUpperCase().substring(0, 8).padEnd(8, '0');
}

function showActivationSuccess() {
    const activationScreen = document.getElementById('activationScreen');
    activationScreen.innerHTML = `
        <div style="max-width: 500px; margin: 4rem auto; text-align: center;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">✅</div>
            <h1 style="font-size: 2.5rem; color: #22c55e; margin-bottom: 1rem;">¡Licencia Activada!</h1>
            <p style="color: #94a3b8; margin-bottom: 2rem; font-size: 1.1rem;">
                Tu acceso permanente ha sido activado exitosamente
            </p>

            <div style="background: rgba(34,197,94,0.1); border: 2px solid #22c55e; border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
                <div style="color: #cbd5e1; margin-bottom: 0.5rem;">Estado:</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #22c55e;">PERMANENTE</div>
            </div>

            <button class="btn btn-primary" onclick="showScreen('homeScreen')" style="width: 100%; font-size: 1.2rem;">
                Comenzar a Estudiar 🚀
            </button>
        </div>
    `;
}

let currentMode = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timerInterval = null;

// ─── MODAL GENÉRICO ──────────────────────────────────────────
function mostrarModal(titulo, mensaje, botones) {
    const iconMap = { '⏱️': '⏱️', '🗑️': '🗑️', '❓': '❓' };
    const partes = titulo.split(' ');
    const icono = partes[0];
    const tituloLimpio = partes.slice(1).join(' ');

    document.getElementById('gModalIcon').textContent = icono;
    document.getElementById('gModalTitle').textContent = tituloLimpio;
    document.getElementById('gModalMessage').textContent = mensaje;

    const btns = document.getElementById('gModalButtons');
    btns.innerHTML = '';
    (botones || []).forEach(b => {
        const btn = document.createElement('button');
        btn.className = 'modal-btn ' + (b.clase || 'modal-btn-cancel');
        btn.textContent = b.texto;
        btn.onclick = b.accion;
        btns.appendChild(btn);
    });

    document.getElementById('genericModal').classList.add('active');
}

function cerrarModal() {
    document.getElementById('genericModal').classList.remove('active');
}
let startTime = 0;
let timeRemaining = 0;
let isExamMode = false;
let wrongAnswers = [];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    updateQuestionCounts();
    checkLicenseOnLoad(); // Verificar licencia al cargar
});

function updateQuestionCounts() {
    // Usar la nueva estructura modular — con verificación segura de existencia de elementos
    const safeSet = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    if (typeof PREGUNTAS !== 'undefined') {
        safeSet('count-comprension', `${(PREGUNTAS.comprension || []).length} preguntas`);
        safeSet('count-redaccion',   `${(PREGUNTAS.redaccion   || []).length} preguntas`);
        safeSet('count-matematicas', `${(PREGUNTAS.matematicas || []).length} preguntas`);
        safeSet('count-medicina',    `${(PREGUNTAS.medicina    || []).length} preguntas`);
    }
}

function showScreen(screenId) {
    // GUARD DE SEGURIDAD: si no está activado, solo puede ver activationScreen
    const isActivated = localStorage.getItem('mediprep_activated');
    if (isActivated !== 'true' && screenId !== 'activationScreen') {
        console.warn("🔒 Acceso bloqueado - Licencia requerida");
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('activationScreen').classList.add('active');
        return;
    }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    // Limpiar timer del quiz si salimos de la pantalla de preguntas
    if (screenId !== 'quizScreen' && screenId !== 'resultsScreen' && screenId !== 'preguntasRapidasScreen' && screenId !== 'resultadosScreen') {
        clearInterval(timerInterval);
    }
    if (screenId === 'homeScreen') refreshHomeStats();
    if (screenId === 'logrosScreen') renderLogros();
    if (screenId === 'repasoIncorrectasScreen') renderWrongBank();
    if (screenId === 'batallaMenuScreen' && typeof refreshArenaMenu === 'function') refreshArenaMenu();
    if (screenId === 'aiTutorScreen'     && typeof AITutor       !== 'undefined') AITutor.render();
}

// ─── NAVEGACIÓN CON BOTTOM NAV ──────────────────────────────
function navTo(screenId, navId) {
    showScreen(screenId);
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const el = document.getElementById(navId);
    if (el) el.classList.add('active');
}

// Actualizar stats del home en cada visita
function refreshHomeStats() {
    const s = AchievementSystem.getStats();
    const el = id => document.getElementById(id);
    
    // Header streak (siempre visible si hay racha)
    const streak = s.currentStreak || 0;
    const hStreak = el('headerStreak');
    if (hStreak) {
        hStreak.style.display = streak >= 1 ? 'flex' : 'none';
        const sv = el('headerStreakVal');
        if (sv) sv.textContent = streak;
    }
    
    // Contador de incorrectas pendientes
    const wrongCount = WrongAnswersBank.getCount();
    const wrongBadge = el('wrongCountBadge');
    if (wrongBadge) {
        wrongBadge.textContent = wrongCount;
        wrongBadge.style.display = wrongCount > 0 ? 'flex' : 'none';
    }
    
    // Actualizar card del home
    const cardHome = el('wrongBankCard');
    const cardCount = el('wrongBankCardCount');
    if (cardHome && cardCount) {
        cardHome.style.display = wrongCount > 0 ? 'block' : 'none';
        cardCount.textContent = wrongCount;
    }
    
    // Actualizar estadísticas generales
    const correct = s.correct || 0;
    const total = s.totalAnswered || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    // ── Nuevos IDs v4.0 ──
    const precisionEl  = el('hstatPrecision');
    const rachaEl      = el('hstatRacha');
    const totalEl2     = el('hstatTotal');
    const bar1         = el('hstatBar1');
    const bar2         = el('hstatBar2');
    const bar3         = el('hstatBar3');
    const srsIndicator = el('homeSrsIndicator');
    const srsCountEl   = el('homeSrsCount');

    if (precisionEl) precisionEl.textContent = accuracy + '%';
    if (rachaEl)     rachaEl.textContent      = streak;
    if (totalEl2)    totalEl2.textContent     = total;
    if (bar1) setTimeout(()=>{ bar1.style.width = accuracy + '%'; }, 100);
    if (bar2) setTimeout(()=>{ bar2.style.width = Math.min(streak * 10, 100) + '%'; }, 150);
    if (bar3) setTimeout(()=>{ bar3.style.width = Math.min(total / 5, 100) + '%'; }, 200);

    // SRS indicator en la daily card
    if (typeof SRSSystem !== 'undefined' && srsIndicator && srsCountEl) {
        const due = SRSSystem.getDueCards().length;
        srsIndicator.style.display = due > 0 ? 'block' : 'none';
        srsCountEl.textContent = due;
    }

    // ── Legacy IDs (por compatibilidad) ──
    const correctEl  = el('homeStatsCorrect');
    const totalElOld = el('homeStatsTotal');
    const accuracyEl = el('homeAccuracyLabel');
    const accuracyBar= el('homeAccuracyBar');
    if (correctEl)  correctEl.textContent  = correct;
    if (totalElOld) totalElOld.textContent = total;
    if (accuracyEl) accuracyEl.textContent = accuracy + '%';
    if (accuracyBar) accuracyBar.style.width = accuracy + '%';
}


function showSection(section) {
    const screens = {
        'preguntasRapidas': 'preguntasRapidasScreen',
        'examenes': 'examenesScreen',
        'clases': 'clasesScreen'
    };
    showScreen(screens[section]);
}

// ─── QUIZ FLASH ───────────────────────────────
let currentDificultad = null; // null = todas

function selectDificultad(nivel) {
    currentDificultad = currentDificultad === nivel ? null : nivel;

    const config = {
        facil:   { border: '#10b981', bg: 'rgba(16,185,129,0.35)', text: '#10b981' },
        medio:   { border: '#fb923c', bg: 'rgba(251,146,60,0.35)',  text: '#fb923c' },
        dificil: { border: '#ef4444', bg: 'rgba(239,68,68,0.35)',   text: '#ef4444' }
    };
    const defaults = {
        facil:   { border: 'rgba(16,185,129,0.5)',  bg: 'rgba(16,185,129,0.15)',  text: '#10b981' },
        medio:   { border: 'rgba(251,146,60,0.5)',  bg: 'rgba(251,146,60,0.15)',  text: '#fb923c' },
        dificil: { border: 'rgba(239,68,68,0.5)',   bg: 'rgba(239,68,68,0.15)',   text: '#ef4444' }
    };

    ['facil','medio','dificil'].forEach(n => {
        const btn = document.getElementById('dif-' + n);
        if (!btn) return;
        const style = (n === currentDificultad) ? config[n] : defaults[n];
        btn.style.border = '2px solid ' + style.border;
        btn.style.background = style.bg;
        btn.style.transform = (n === currentDificultad) ? 'scale(1.05)' : 'scale(1)';
    });
}

function startQuizFlash() {
    const tema = document.getElementById('quizTema')?.value || 'todos';

    let pool = [];
    if (tema === 'todos') {
        pool = [
            ...PREGUNTAS.comprension,
            ...PREGUNTAS.redaccion,
            ...PREGUNTAS.matematicas,
            ...PREGUNTAS.medicina
        ];
    } else {
        pool = PREGUNTAS[tema] || [];
    }

    // Filtrar por dificultad si se seleccionó una
    if (currentDificultad) {
        const filtered = pool.filter(q => q.dificultad === currentDificultad);
        // Si hay preguntas con ese nivel, usar esas; si no, usar todas (retrocompatibilidad)
        if (filtered.length > 0) pool = filtered;
    }

    // Modo flash: máx 20 preguntas aleatorias
    currentMode = tema;
    isExamMode = false;
    wrongAnswers = [];
    currentQuestions = shuffle(pool).slice(0, 20);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('totalQ').textContent = currentQuestions.length;
    // progress bar
    const pBar = document.getElementById('quizProgressBar');
    if (pBar) {
        const pct = currentQuestions.length > 0 ? Math.round((currentQuestionIndex / currentQuestions.length) * 100) : 0;
        pBar.style.width = pct + '%';
    }
    // label pregunta
    const qLabel = document.getElementById('questionLabel');
    if (qLabel) qLabel.textContent = 'Pregunta ' + (currentQuestionIndex + 1) + ' de ' + currentQuestions.length;
    timeRemaining = 300; // 5 minutos fijos
    startTimer();

    showScreen('quizScreen');
    showQuestion();
}

function quickMode(tipo) {
    // Modos rápidos preconfigurados
    const config = {
        rapido:     { tema: 'todos', cant: 10, dif: null },
        adaptativo: { tema: 'todos', cant: 15, dif: 'medio' },
        efectivo:   { tema: 'todos', cant: 20, dif: null }
    };
    const c = config[tipo];

    // Configurar el selector de tema
    const sel = document.getElementById('quizTema');
    if (sel) sel.value = c.tema;

    // Configurar dificultad
    currentDificultad = c.dif;
    ['facil','medio','dificil'].forEach(n => {
        const btn = document.getElementById('dif-' + n);
        if (btn) btn.style.transform = 'scale(1)';
    });
    if (c.dif) selectDificultad(c.dif);

    startQuizFlash();
}
// ─────────────────────────────────────────────

function startQuiz(mode) {
    currentMode = mode;
    isExamMode = false;
    wrongAnswers = [];

    let questionPool = [];
    if (mode === 'medicina') {
        questionPool = PREGUNTAS.medicina;
    } else {
        questionPool = PREGUNTAS[mode] || [];
    }

    // USAR TODAS LAS PREGUNTAS DISPONIBLES
    currentQuestions = shuffle(questionPool);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('totalQ').textContent = currentQuestions.length;

    // Tiempo: 45 segundos por pregunta
    const totalTime = Math.max(300, currentQuestions.length * 45);
    timeRemaining = totalTime;
    startTimer();

    showQuestion();
    showScreen('quizScreen');
}

// SISTEMA DE SONIDOS
// playSound se define abajo en la sección de juegos (Web Audio API)
// Alias para compatibilidad con el sistema de quiz
function playSoundQuiz(type) {
    if (type === 'correct') playSound('correcto');
    else if (type === 'incorrect') playSound('incorrecto');
}

function startExam(type) {
    isExamMode = true;
    wrongAnswers = [];
    currentQuestions = [];

    switch(type) {
        case 'completo':
            // EXAMEN COMPLETO: 138 preguntas (como el EXANI-II oficial)
            // 48 medicina + 30 comprensión + 30 redacción + 30 matemáticas = 138
            currentQuestions = [
                ...shuffle(PREGUNTAS.comprension || []).slice(0, 30),
                ...shuffle(PREGUNTAS.redaccion || []).slice(0, 30),
                ...shuffle(PREGUNTAS_EXAMEN.matematicas || PREGUNTAS.matematicas || []).slice(0, 30),
                ...shuffle(PREGUNTAS.medicina || []).slice(0, 48)
            ];
            break;
        case 'medicina':
            // EXAMEN MEDICINA: TODAS las preguntas disponibles
            currentQuestions = shuffle(PREGUNTAS.medicina || []);
            break;
        case 'comprension':
            // EXAMEN COMPRENSIÓN: TODAS las preguntas (31)
            currentQuestions = shuffle(PREGUNTAS.comprension || []);
            break;
        case 'redaccion':
            // EXAMEN REDACCIÓN: TODAS las preguntas (29)
            currentQuestions = shuffle(PREGUNTAS.redaccion || []);
            break;
        case 'matematicas':
            // EXAMEN MATEMÁTICAS: TODAS las preguntas tipo oficial (80)
            currentQuestions = shuffle(PREGUNTAS_EXAMEN.matematicas || PREGUNTAS.matematicas || []);
            break;
    }

    currentQuestions = shuffle(currentQuestions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('totalQ').textContent = currentQuestions.length;
    timeRemaining = currentQuestions.length * 60;
    startTimer();

    showQuestion();
    showScreen('quizScreen');
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;

    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;

    // MEZCLAR LAS OPCIONES ALEATORIAMENTE
    const shuffledOptions = q.opciones.map((opcion, index) => ({ opcion, originalIndex: index }));
    shuffle(shuffledOptions);

    // Guardar el mapeo de índices mezclados a originales
    q.shuffledIndexMap = shuffledOptions.map(item => item.originalIndex);

    // MOSTRAR PREGUNTA CON SOPORTE PARA IMÁGENES Y SVG
    let questionHTML = '';

    // Si hay SVG inline
    if (q.svg) {
        questionHTML += `<div style="text-align:center;margin:0 auto 1.25rem;max-width:320px;">${q.svg}</div>`;
    }
    // Si hay imagen URL
    else if (q.imagen) {
        questionHTML += `<div style="text-align: center; margin-bottom: 1.5rem;">
            <img src="${q.imagen}" alt="Imagen de la pregunta" style="max-width: 100%; max-height: 400px; border-radius: 12px; border: 2px solid rgba(100,116,139,0.3);">
        </div>`;
    }

    // Si hay texto de lectura
    if (q.text) {
        questionHTML += `<div style="background: rgba(20,184,166,0.1); border: 2px solid #14b8a6; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
            <div style="font-weight: 700; color: #14b8a6; margin-bottom: 1rem;">📖 Lee el siguiente texto:</div>
            <div style="line-height: 1.8; color: #cbd5e1;">${q.text}</div>
        </div>
        <div style="font-weight: 700; color: #fb923c; margin-bottom: 1rem;">❓ Pregunta:</div>`;
    }

    questionHTML += q.pregunta;

    document.getElementById('questionText').innerHTML = questionHTML;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    shuffledOptions.forEach((item, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + i)}</div>
            <div>${item.opcion}</div>
        `;
        optionDiv.onclick = () => selectOption(i);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('explanationBox').style.display = 'none';
    document.getElementById('submitBtn').disabled = true;
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    selectedAnswer = index;
    document.getElementById('submitBtn').disabled = false;
}

function checkAnswer() {
    if (selectedAnswer === null) return;

    const q = currentQuestions[currentQuestionIndex];

    // Convertir el índice seleccionado (mezclado) al índice original
    const originalSelectedIndex = q.shuffledIndexMap[selectedAnswer];
    const isCorrect = originalSelectedIndex === q.correcta;

    // 🔊 REPRODUCIR SONIDO
    playSoundQuiz(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        correctAnswers++;
        const streak = parseInt(localStorage.getItem('mediprep_streak') || '0') + 1;
        localStorage.setItem('mediprep_streak', streak);
        if (streak % 5 === 0) Animations.confetti();

        // ✅ Logros AL MOMENTO — actualizar y revisar inmediatamente
        const prev = AchievementSystem.getStats();
        const updated = {
            totalAnswered: (prev.totalAnswered || 0) + 1,
            correct: (prev.correct || 0) + 1,
            currentStreak: streak,
            maxStreak: Math.max(prev.maxStreak || 0, streak),
        };
        AchievementSystem.saveStats(updated);
        AchievementSystem.check(updated);
        refreshHomeStats();

    } else {
        incorrectAnswers++;
        localStorage.setItem('mediprep_streak', '0');

        const prev = AchievementSystem.getStats();
        AchievementSystem.saveStats({ totalAnswered: (prev.totalAnswered || 0) + 1, currentStreak: 0 });
        AchievementSystem.check(AchievementSystem.getStats());
        refreshHomeStats();

        // Guardar en banco de incorrectas
        WrongAnswersBank.add(
            q.pregunta,
            q.opciones[originalSelectedIndex],
            q.opciones[q.correcta],
            q.explicacion,
            q.categoria || 'general'
        );

        if (isExamMode) {
            wrongAnswers.push({
                numero: currentQuestionIndex + 1,
                pregunta: q.pregunta,
                tuRespuesta: q.opciones[originalSelectedIndex],
                respuestaCorrecta: q.opciones[q.correcta],
                explicacion: q.explicacion
            });
        }
    }

    // Marcar visualmente las opciones usando los índices mezclados
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.add('disabled');
        const originalIndex = q.shuffledIndexMap[i];
        if (originalIndex === q.correcta) opt.classList.add('correct');
        if (i === selectedAnswer && !isCorrect) opt.classList.add('incorrect');
    });

    // 💥 Shake DESPUÉS de marcar la clase .incorrect
    if (!isCorrect) {
        const wrongBtn = document.querySelector('.option.incorrect');
        Animations.shake(wrongBtn || document.getElementById('questionContainer') || document.body);
    }

    document.getElementById('explanationText').textContent = q.explicacion || 'Sin explicación disponible';
    document.getElementById('explanationBox').style.display = 'block';
    document.getElementById('submitBtn').textContent = 'Siguiente →';
    document.getElementById('submitBtn').onclick = nextQuestion;
    
    // Scroll automático a la explicación (PC y móvil)
    scrollToBottom(document.getElementById('explanationBox'), 150);
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('submitBtn').textContent = 'Confirmar Respuesta';
    document.getElementById('submitBtn').onclick = checkAnswer;
    showQuestion();
}

function skipQuestion() {
    document.getElementById('skipModal').classList.add('active');
}

function closeSkipModal() {
    document.getElementById('skipModal').classList.remove('active');
}

function confirmSkip() {
    closeSkipModal();
    nextQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    startTime = Date.now();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            mostrarModal('⏱️ ¡Tiempo agotado!', 'Se acabó el tiempo. Vamos a ver tus resultados.', [
                { texto: 'Ver resultados', clase: 'btn-primary', accion: () => endQuiz() }
            ]);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    document.getElementById('timer').textContent =
        `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`;
}

function endQuiz() {
    clearInterval(timerInterval);

    const total = currentQuestions.length;
    const percentage = Math.round((correctAnswers / total) * 100);
    const timeUsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(timeUsed / 60);
    const secs = timeUsed % 60;

    document.getElementById('finalScore').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('incorrectCount').textContent = incorrectAnswers;
    document.getElementById('timeUsed').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

    // Guardar nota del módulo si fue evaluación de módulo
    if (currentMode === 'evaluacion-modulo' && moduloActual) {
        localStorage.setItem('mediprep_nota_' + moduloActual.id, JSON.stringify({
            pct: percentage,
            correctas: correctAnswers,
            total: total,
            fecha: new Date().toLocaleDateString('es-MX')
        }));
    }

    // Actualizar estadísticas y revisar logros
    const prevStats = AchievementSystem.getStats();
    const newStats = {
        totalAnswered: (prevStats.totalAnswered || 0) + total,
        correct: (prevStats.correct || 0) + correctAnswers,
        maxStreak: Math.max(prevStats.maxStreak || 0, parseInt(localStorage.getItem('mediprep_streak') || '0')),
    };
    AchievementSystem.saveStats(newStats);
    AchievementSystem.check(newStats, { score: percentage, total });
    localStorage.setItem('mediprep_streak', '0');

    if (percentage >= 80) setTimeout(() => Animations.confetti(), 400);

    if (isExamMode && wrongAnswers.length > 0) {
        showWrongAnswersReview();
    } else {
        showScreen('resultsScreen');
    }
}

function showWrongAnswersReview() {
    const total      = currentQuestions.length;
    const correctos  = correctAnswers;
    const incorrectos = wrongAnswers.length;
    const omitidos   = total - correctos - incorrectos;
    const pct        = Math.round((correctos / total) * 100);
    const timeUsed   = Math.floor((Date.now() - startTime) / 1000);
    const mins       = Math.floor(timeUsed / 60);
    const secs       = timeUsed % 60;

    // Color del arco según rendimiento
    const arcColor  = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444';
    const emoji     = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
    const mensaje   = pct >= 80 ? '¡Excelente resultado!' : pct >= 60 ? 'Buen trabajo, sigue practicando' : 'Repasa los temas marcados';

    // SVG de arco circular
    const radius  = 52;
    const circum  = 2 * Math.PI * radius;
    const dash    = (pct / 100) * circum;

    let html = `<div style="max-width:780px;margin:0 auto;padding-bottom:2rem;">

        <!-- ── TARJETA RESUMEN ── -->
        <div style="
            background: linear-gradient(135deg,rgba(13,22,40,0.95),rgba(16,27,48,0.9));
            border: 1px solid rgba(20,184,166,0.2);
            border-radius: 22px;
            padding: 1.75rem 1.5rem 1.5rem;
            margin-bottom: 1.75rem;
            box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        ">
            <!-- Fila superior: arco + stats -->
            <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">

                <!-- Arco circular -->
                <div style="position:relative;width:130px;height:130px;flex-shrink:0;margin:0 auto;">
                    <svg width="130" height="130" viewBox="0 0 130 130">
                        <!-- Track -->
                        <circle cx="65" cy="65" r="${radius}"
                            fill="none" stroke="rgba(100,116,139,0.18)" stroke-width="10"/>
                        <!-- Progreso -->
                        <circle cx="65" cy="65" r="${radius}"
                            fill="none" stroke="${arcColor}" stroke-width="10"
                            stroke-linecap="round"
                            stroke-dasharray="${dash.toFixed(1)} ${circum.toFixed(1)}"
                            stroke-dashoffset="${(circum * 0.25).toFixed(1)}"
                            transform="rotate(-90 65 65)"
                            style="filter:drop-shadow(0 0 6px ${arcColor}88);transition:stroke-dasharray 1s ease;"/>
                    </svg>
                    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                        <div style="font-size:1.8rem;font-weight:900;letter-spacing:-0.04em;color:${arcColor};">${pct}%</div>
                        <div style="font-size:0.65rem;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:1px;">resultado</div>
                    </div>
                </div>

                <!-- Stats verticales -->
                <div style="flex:1;display:flex;flex-direction:column;gap:0.6rem;min-width:160px;">
                    <!-- Total -->
                    <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(100,116,139,0.1);border-radius:10px;padding:0.55rem 0.9rem;">
                        <span style="color:#94a3b8;font-size:0.85rem;font-weight:600;">📝 Total</span>
                        <span style="color:#f1f5f9;font-weight:800;font-size:1.05rem;">${total}</span>
                    </div>
                    <!-- Correctas -->
                    <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:10px;padding:0.55rem 0.9rem;">
                        <span style="color:#86efac;font-size:0.85rem;font-weight:600;">✅ Correctas</span>
                        <span style="color:#22c55e;font-weight:800;font-size:1.05rem;">${correctos}</span>
                    </div>
                    <!-- Incorrectas -->
                    <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:0.55rem 0.9rem;">
                        <span style="color:#fca5a5;font-size:0.85rem;font-weight:600;">❌ Incorrectas</span>
                        <span style="color:#ef4444;font-weight:800;font-size:1.05rem;">${incorrectos}</span>
                    </div>
                    ${omitidos > 0 ? `
                    <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.2);border-radius:10px;padding:0.55rem 0.9rem;">
                        <span style="color:#fdba74;font-size:0.85rem;font-weight:600;">⏭ Sin responder</span>
                        <span style="color:#fb923c;font-weight:800;font-size:1.05rem;">${omitidos}</span>
                    </div>` : ''}
                </div>
            </div>

            <!-- Barra de progreso visual -->
            <div style="margin-top:1.25rem;">
                <div style="background:rgba(100,116,139,0.15);border-radius:6px;height:8px;overflow:hidden;">
                    <div style="
                        display:flex;height:100%;border-radius:6px;overflow:hidden;
                        transition:width 0.8s ease;
                    ">
                        <div style="width:${(correctos/total*100).toFixed(1)}%;background:linear-gradient(90deg,#16a34a,#22c55e);"></div>
                        <div style="width:${(incorrectos/total*100).toFixed(1)}%;background:linear-gradient(90deg,#dc2626,#ef4444);"></div>
                        ${omitidos > 0 ? `<div style="width:${(omitidos/total*100).toFixed(1)}%;background:rgba(251,146,60,0.6);"></div>` : ''}
                    </div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:0.4rem;">
                    <span style="font-size:0.7rem;color:#64748b;">${emoji} ${mensaje}</span>
                    <span style="font-size:0.7rem;color:#64748b;">⏱ ${mins}:${secs.toString().padStart(2,'0')}</span>
                </div>
            </div>
        </div>

        <!-- ── TÍTULO REVISIÓN ── -->
        <h2 style="color:#f1f5f9;font-size:1.3rem;font-weight:800;letter-spacing:-0.03em;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;">
            📋 Revisión de errores
            <span style="font-size:0.75rem;font-weight:600;color:#64748b;background:rgba(100,116,139,0.15);padding:0.2rem 0.6rem;border-radius:20px;">${incorrectos} ${incorrectos === 1 ? 'pregunta' : 'preguntas'}</span>
        </h2>`;

    // Tarjetas de errores
    wrongAnswers.forEach((wa, idx) => {
        html += `
        <div style="
            background:rgba(13,22,40,0.85);
            border:1px solid rgba(239,68,68,0.25);
            border-radius:16px;padding:1.35rem;
            margin-bottom:1rem;
            border-left:3px solid #ef4444;
        ">
            <div style="color:#ef4444;font-weight:700;margin-bottom:0.6rem;font-size:0.9rem;letter-spacing:-0.01em;">
                ❌ Pregunta ${wa.numero}
            </div>
            <div style="margin-bottom:1rem;line-height:1.65;font-size:0.95rem;color:#e2e8f0;">${wa.pregunta}</div>
            <div style="background:rgba(239,68,68,0.09);border:1px solid rgba(239,68,68,0.18);padding:0.7rem 0.9rem;border-radius:10px;margin-bottom:0.5rem;font-size:0.88rem;">
                <strong style="color:#ef4444;">Tu respuesta:</strong> <span style="color:#fca5a5;">${wa.tuRespuesta}</span>
            </div>
            <div style="background:rgba(34,197,94,0.09);border:1px solid rgba(34,197,94,0.2);padding:0.7rem 0.9rem;border-radius:10px;margin-bottom:0.5rem;font-size:0.88rem;">
                <strong style="color:#22c55e;">Respuesta correcta:</strong> <span style="color:#86efac;">${wa.respuestaCorrecta}</span>
            </div>
            <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.18);padding:0.7rem 0.9rem;border-radius:10px;font-size:0.88rem;line-height:1.55;">
                <strong style="color:#60a5fa;">💡 Explicación:</strong> <span style="color:#bfdbfe;">${wa.explicacion}</span>
            </div>
        </div>`;
    });

    html += `
        <div style="display:flex;gap:0.75rem;margin-top:1.5rem;">
            <button class="btn btn-secondary" onclick="backToHome()" style="flex:1;">← Volver al Inicio</button>
            <button class="btn btn-primary" onclick="location.reload()" style="flex:1;">Nuevo Examen</button>
        </div>
    </div>`;

    document.getElementById('resultsScreen').innerHTML = html;
    showScreen('resultsScreen');
}

function backToHome() {
    clearInterval(timerInterval);
    location.reload();
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============================================
// SISTEMA DE MÓDULOS Y LECCIONES
// ============================================

let moduloActual = null;
let leccionActual = null;

// Cargar progreso de localStorage
function cargarProgreso() {
    const progreso = localStorage.getItem('mediprep_progreso');
    if (progreso) {
        const datos = JSON.parse(progreso);
        MODULOS_PREMEDICINA.forEach(modulo => {
            if (datos[modulo.id]) {
                modulo.lecciones.forEach((leccion, index) => {
                    if (datos[modulo.id].lecciones && datos[modulo.id].lecciones[index]) {
                        leccion.completada = datos[modulo.id].lecciones[index].completada;
                    }
                });
                modulo.progreso = calcularProgresoModulo(modulo);
            }
        });
    }
}

// Guardar progreso en localStorage
function guardarProgreso() {
    const datos = {};
    MODULOS_PREMEDICINA.forEach(modulo => {
        datos[modulo.id] = {
            lecciones: modulo.lecciones.map(l => ({ completada: l.completada }))
        };
    });
    localStorage.setItem('mediprep_progreso', JSON.stringify(datos));
}

// Calcular progreso de un módulo
function calcularProgresoModulo(modulo) {
    const completadas = modulo.lecciones.filter(l => l.completada).length;
    return Math.round((completadas / modulo.lecciones.length) * 100);
}

// Cargar módulos en la pantalla principal
function cargarModulos() {
    cargarProgreso();
    const container = document.getElementById('modulosContainer');
    container.innerHTML = '';

    MODULOS_PREMEDICINA.forEach(modulo => {
        modulo.progreso = calcularProgresoModulo(modulo);
        const moduloCard = document.createElement('div');
        moduloCard.style.cssText = `
            background: linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.8));
            border: 2px solid rgba(100,116,139,0.3);
            border-radius: 16px;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s;
        `;
        moduloCard.onmouseover = () => moduloCard.style.borderColor = '#8b5cf6';
        moduloCard.onmouseout = () => moduloCard.style.borderColor = 'rgba(100,116,139,0.3)';
        moduloCard.onclick = () => abrirModulo(modulo.id);

        moduloCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                <div style="display: flex; gap: 1rem; flex: 1;">
                    <div style="font-size: 2rem;">${modulo.icono}</div>
                    <div style="flex: 1;">
                        <h3 style="color: #e2e8f0; margin-bottom: 0.5rem; font-size: 1.1rem;">${modulo.titulo}</h3>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">${modulo.descripcion}</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="color: ${modulo.progreso > 0 ? '#10b981' : '#94a3b8'}; font-size: 1.2rem; font-weight: 700;">${modulo.progreso}%</div>
                    <div style="color: #94a3b8; font-size: 0.8rem;">Completado</div>
                </div>
            </div>
            <div style="background: rgba(100,116,139,0.2); border-radius: 8px; height: 6px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, #10b981 0%, #059669 100%); height: 100%; width: ${modulo.progreso}%; transition: width 0.3s;"></div>
            </div>
        `;

        container.appendChild(moduloCard);
    });

    // Actualizar progreso global
    actualizarProgresoGlobal();
}

// Actualizar progreso global
function actualizarProgresoGlobal() {
    let totalLecciones = 0;
    let totalCompletadas = 0;

    MODULOS_PREMEDICINA.forEach(modulo => {
        totalLecciones += modulo.lecciones.length;
        totalCompletadas += modulo.lecciones.filter(l => l.completada).length;
    });

    const progresoGlobal = Math.round((totalCompletadas / totalLecciones) * 100);
    document.getElementById('progresoGlobal').textContent = progresoGlobal + '%';
}

// Abrir un módulo específico
function abrirModulo(moduloId) {
    moduloActual = MODULOS_PREMEDICINA.find(m => m.id === moduloId);
    if (!moduloActual) return;

    document.getElementById('moduloTitulo').textContent = moduloActual.titulo;
    document.getElementById('moduloDescripcion').textContent = moduloActual.descripcion;
    document.getElementById('moduloProgresoBarra').style.width = moduloActual.progreso + '%';

    // Cargar lecciones
    const container = document.getElementById('leccionesContainer');
    container.innerHTML = '';

    moduloActual.lecciones.forEach((leccion, index) => {
        const leccionCard = document.createElement('div');
        const completada = leccion.completada;

        leccionCard.style.cssText = `
            background: ${completada ? 'rgba(16,185,129,0.1)' : 'rgba(30,41,59,0.8)'};
            border: 2px solid ${completada ? '#10b981' : 'rgba(100,116,139,0.3)'};
            border-radius: 16px;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s;
        `;

        leccionCard.onmouseover = () => leccionCard.style.borderColor = '#8b5cf6';
        leccionCard.onmouseout = () => leccionCard.style.borderColor = completada ? '#10b981' : 'rgba(100,116,139,0.3)';
        leccionCard.onclick = () => abrirLeccion(moduloId, index);

        leccionCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: ${completada ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(100,116,139,0.3)'}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
                    ${completada ? '✓' : '📚'}
                </div>
                <div style="flex: 1;">
                    <h4 style="color: #e2e8f0; margin-bottom: 0.5rem;">${leccion.titulo}</h4>
                    <div style="color: #94a3b8; font-size: 0.9rem;">
                        <span>⏱️</span> ${leccion.tiempo}
                    </div>
                </div>
                ${completada ? '<div style="color: #fbbf24; font-size: 1.5rem;">⭐</div>' : ''}
            </div>
            ${!completada ? `<button style="width: 100%; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 600; margin-top: 1rem; cursor: pointer;">▶ Repasar</button>` : '<button style="width: 100%; background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); color: white; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 600; margin-top: 1rem; cursor: pointer;">▶ Repasar</button>'}
        `;

        container.appendChild(leccionCard);
    });

    showScreen('leccionesScreen');
}

// Abrir una lección específica
let leccionIndexActual = 0; // guardar índice para navegación

function abrirLeccion(moduloId, leccionIndex) {
    moduloActual = MODULOS_PREMEDICINA.find(m => m.id === moduloId);
    leccionIndexActual = leccionIndex;
    leccionActual = moduloActual.lecciones[leccionIndex];

    document.getElementById('leccionTitulo').textContent = leccionActual.titulo;
    document.getElementById('leccionTiempo').textContent = leccionActual.tiempo;
    document.getElementById('leccionContenido').innerHTML = leccionActual.contenido;

    const total = moduloActual.lecciones.length;
    document.getElementById('leccionNumero').textContent = `Lección ${leccionIndex + 1} de ${total}`;

    // Botón completar
    const btn = document.getElementById('btnCompletarLeccion');
    if (leccionActual.completada) {
        btn.innerHTML = '<span>✓</span> Completada';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else {
        btn.innerHTML = '<span>✓</span> Marcar como completada';
        btn.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)';
    }

    // ── NAVEGACIÓN ──
    const esUltima = leccionIndex === total - 1;
    const esPrimera = leccionIndex === 0;

    // Anterior
    const btnAnt = document.getElementById('btnAnterior');
    if (btnAnt) {
        btnAnt.style.opacity = esPrimera ? '0.3' : '1';
        btnAnt.style.pointerEvents = esPrimera ? 'none' : 'auto';
    }

    // Siguiente — se oculta en última lección
    const btnSig = document.getElementById('btnSiguiente');
    if (btnSig) {
        btnSig.style.opacity = esUltima ? '0.3' : '1';
        btnSig.style.pointerEvents = esUltima ? 'none' : 'auto';
    }

    // Mensaje + botón Evaluación solo en última lección
    // Detecta dinámicamente si el módulo tiene evaluación (interna o archivo externo)
    const modulosEvalExterna = ['conceptos-salud', 'planimetria', 'sistema-nervioso', 'sistema-endocrino', 'sistema-cardiovascular', 'sistema-respiratorio', 'aparato-digestivo', 'carbohidratos'];
    const tieneEvalInterna  = moduloActual && Array.isArray(moduloActual.evaluacion) && moduloActual.evaluacion.length > 0;
    const tieneEvalExterna  = modulosEvalExterna.includes(moduloActual ? moduloActual.id : '');
    const tieneEvaluacion   = tieneEvalInterna || tieneEvalExterna;

    const msgUltima = document.getElementById('msgUltimaLeccion');
    const btnEval   = document.getElementById('btnEvaluacion');
    if (msgUltima) msgUltima.style.display = esUltima ? 'block' : 'none';
    if (btnEval)   btnEval.style.display   = (esUltima && tieneEvaluacion) ? 'flex' : 'none';

    // Mostrar nota previa si ya evaluó este módulo
    const notaCard  = document.getElementById('notaModuloCard');
    const notaTexto = document.getElementById('notaModuloTexto');
    if (notaCard && notaTexto && esUltima && moduloActual) {
        const notaGuardada = localStorage.getItem('mediprep_nota_' + moduloActual.id);
        if (notaGuardada) {
            const nota = JSON.parse(notaGuardada);
            // Nota vieja (<40 preguntas) → borrar y pedir re-evaluar
            if (nota.total < 40) {
                localStorage.removeItem('mediprep_nota_' + moduloActual.id);
                notaCard.style.display = 'none';
                if (msgUltima) {
                    msgUltima.style.display = 'block';
                    msgUltima.textContent = '🔄 La evaluación fue actualizada a 60 preguntas. ¡Vuelve a evaluarte!';
                }
            } else {
                const emoji = nota.pct >= 80 ? '🏆' : nota.pct >= 60 ? '👍' : '📚';
                notaTexto.textContent = `${nota.pct}% — ${nota.correctas}/${nota.total} correctas ${emoji}`;
                notaCard.style.display = 'block';
                if (msgUltima) msgUltima.style.display = 'none';
            }
        } else {
            notaCard.style.display = 'none';
        }
    } else if (notaCard) {
        notaCard.style.display = 'none';
    }

    // Scroll al tope
    window.scrollTo({ top: 0, behavior: 'smooth' });

    showScreen('leccionContenidoScreen');
}

// Navegar entre lecciones (-1 = anterior, +1 = siguiente)
function navegarLeccion(direccion) {
    if (!moduloActual) return;
    const nuevoIndex = leccionIndexActual + direccion;
    if (nuevoIndex < 0 || nuevoIndex >= moduloActual.lecciones.length) return;
    abrirLeccion(moduloActual.id, nuevoIndex);
}

// Lanzar evaluación del módulo conceptos-salud
function iniciarEvaluacionModulo() {
    const moduloId = moduloActual ? moduloActual.id : 'conceptos-salud';

    let banco = [];
    let minutos = 60;

    // ── Primero: usar la evaluación integrada en el módulo (nuevos módulos)
    if (moduloActual && moduloActual.evaluacion && moduloActual.evaluacion.length > 0) {
        banco = moduloActual.evaluacion;
        minutos = Math.max(30, Math.ceil(banco.length * 2.5));

    // ── Segundo: archivos de evaluación separados (módulos antiguos)
    } else if (moduloId === 'planimetria') {
        banco = (typeof EVALUACION_PLANIMETRIA !== 'undefined') ? EVALUACION_PLANIMETRIA : [];
        minutos = 55;
    } else if (moduloId === 'sistema-nervioso') {
        banco = (typeof EVALUACION_SISTEMA_NERVIOSO !== 'undefined') ? EVALUACION_SISTEMA_NERVIOSO : [];
        minutos = 60;
    } else if (moduloId === 'sistema-endocrino') {
        banco = (typeof EVALUACION_SISTEMA_ENDOCRINO !== 'undefined') ? EVALUACION_SISTEMA_ENDOCRINO : [];
        minutos = 75;
    } else if (moduloId === 'sistema-cardiovascular') {
        banco = (typeof EVALUACION_SISTEMA_CARDIOVASCULAR !== 'undefined') ? EVALUACION_SISTEMA_CARDIOVASCULAR : [];
        minutos = 75;
    } else if (moduloId === 'sistema-respiratorio') {
        banco = (typeof EVALUACION_SISTEMA_RESPIRATORIO !== 'undefined') ? EVALUACION_SISTEMA_RESPIRATORIO : [];
        minutos = 75;
    } else if (moduloId === 'aparato-digestivo') {
        banco = (typeof EVALUACION_APARATO_DIGESTIVO !== 'undefined') ? EVALUACION_APARATO_DIGESTIVO : [];
        minutos = 75;
    } else if (moduloId === 'carbohidratos') {
        // Evaluación de 100 preguntas distribuidas en bloques
        if (typeof EVALUACION_CARBOHIDRATOS !== 'undefined' && EVALUACION_CARBOHIDRATOS.bloques) {
            banco = EVALUACION_CARBOHIDRATOS.bloques.flatMap(b => b.preguntas);
        } else {
            banco = [];
        }
        minutos = 90;
    } else if (moduloId === 'conamat-u1') {
        banco = (typeof EVALUACION_CONAMAT_UNIDAD1 !== 'undefined') ? EVALUACION_CONAMAT_UNIDAD1 : [];
        minutos = 50;
    } else if (moduloId === 'conamat-u2') {
        banco = (typeof EVALUACION_CONAMAT_UNIDAD2 !== 'undefined') ? EVALUACION_CONAMAT_UNIDAD2 : [];
        minutos = 65;
    } else if (moduloId === 'conamat-completo') {
        banco = (typeof EVALUACION_CONAMAT_COMPLETO !== 'undefined') ? EVALUACION_CONAMAT_COMPLETO : [];
        minutos = 115;
    } else {
        banco = (typeof EVALUACION_CONCEPTOS_SALUD !== 'undefined') ? EVALUACION_CONCEPTOS_SALUD : PREGUNTAS.medicina || [];
        minutos = 70;
    }

    if (banco.length === 0) {
        alert('No hay preguntas disponibles para este módulo.');
        return;
    }

    currentMode = 'evaluacion-modulo';
    isExamMode = true;
    wrongAnswers = [];
    currentQuestions = shuffle([...banco]);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('totalQ').textContent = currentQuestions.length;
    timeRemaining = minutos * 60;
    startTime = Date.now();
    startTimer();

    showScreen('quizScreen');
    showQuestion();
}

// Completar una lección
function completarLeccion() {
    if (!leccionActual) return;

    leccionActual.completada = true;
    guardarProgreso();

    const btn = document.getElementById('btnCompletarLeccion');
    btn.innerHTML = '<span>✓</span> ¡Completada! 🎉';
    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

    // Actualizar progreso del módulo
    if (moduloActual) {
        moduloActual.progreso = calcularProgresoModulo(moduloActual);
    }

    // Si hay siguiente lección, avanzar automáticamente después de 1s
    const haysiguiente = leccionIndexActual < moduloActual.lecciones.length - 1;
    if (haysiguiente) {
        setTimeout(() => navegarLeccion(1), 1000);
    }
    // Si es la última, se queda para que el usuario vea el botón "Ir a Evaluación"
}

// Volver a la lista de lecciones
function volverALecciones() {
    if (moduloActual) {
        abrirModulo(moduloActual.id);
    }
}

// Inicializar módulos cuando se carga la página
window.addEventListener('load', () => {
    checkFirstVisit();
    initOnboardingDots();
    initOnboardingSwipe();
    if (typeof MODULOS_PREMEDICINA !== 'undefined') {
        cargarModulos();
    }
});

// ══════════════════════════════════════════════
// JUEGO: SIGNOS VS SÍNTOMAS
// ══════════════════════════════════════════════
let juegoTarjetas = [];
let juegoIndex = 0;

// ─── ONBOARDING ──────────────────────────────────────────────
let currentOnboardingSlide = 0;
const totalOnboardingSlides = 7;

function checkFirstVisit() {
    const visited = localStorage.getItem('mediprep_visited');
    console.log('🔍 Primera visita:', !visited);
    
    if (!visited) {
        // Primera vez - mostrar onboarding
        setTimeout(() => {
            // Asegurar estado limpio
            const slides = document.querySelectorAll('.onboarding-slide');
            const dots   = document.querySelectorAll('.onb-dot');
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            if (slides[0]) slides[0].classList.add('active');
            if (dots[0])   dots[0].classList.add('active');
            currentOnboardingSlide = 0;
            showScreen('onboardingScreen');
            playAudioFile('entrar_primera_pregunta.ogg');
            initOnboardingDots();
            initOnboardingSwipe();
        }, 100);
    } else {
        // Ya visitó antes - ir al home
        setTimeout(() => {
            navTo('homeScreen', 'nav-home');
        }, 100);
    }
}

function nextOnboardingSlide() {
    if (currentOnboardingSlide < totalOnboardingSlides - 1) {
        goToOnboardingSlide(currentOnboardingSlide + 1);
    }
}

function goToOnboardingSlide(n) {
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.onb-dot');
    
    slides[currentOnboardingSlide].classList.remove('active');
    dots[currentOnboardingSlide].classList.remove('active');
    
    currentOnboardingSlide = n;
    
    slides[currentOnboardingSlide].classList.add('active');
    dots[currentOnboardingSlide].classList.add('active');
    
    // Mostrar botón "Comenzar" en último slide
    const btnNext = document.getElementById('onbNext');
    const btnStart = document.getElementById('onbStart');
    const btnSkip = document.getElementById('onbSkip');
    
    if (currentOnboardingSlide === totalOnboardingSlides - 1) {
        btnNext.style.display = 'none';
        btnStart.style.display = 'flex';
        btnSkip.style.display = 'none';
    } else {
        btnNext.style.display = 'flex';
        btnStart.style.display = 'none';
        btnSkip.style.display = 'flex';
    }
}

function skipOnboarding() {
    finishOnboarding();
}

function finishOnboarding() {
    localStorage.setItem('mediprep_visited', 'true');
    navTo('homeScreen', 'nav-home');
}

function showOnboardingAgain() {
    // Resetear TODOS los slides a estado inactivo antes de mostrar
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots   = document.querySelectorAll('.onb-dot');
    
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentOnboardingSlide = 0;
    
    // Activar solo el primero
    if (slides[0]) slides[0].classList.add('active');
    if (dots[0])   dots[0].classList.add('active');
    
    // Resetear botones
    const btnNext  = document.getElementById('onbNext');
    const btnStart = document.getElementById('onbStart');
    const btnSkip  = document.getElementById('onbSkip');
    if (btnNext)  { btnNext.style.display  = 'flex'; }
    if (btnStart) { btnStart.style.display = 'none'; }
    if (btnSkip)  { btnSkip.style.display  = 'flex'; }
    
    showScreen('onboardingScreen');
    playAudioFile('entrar_primera_pregunta.ogg');
}


// Hacer que los dots sean clickeables
function initOnboardingDots() {
    const dots = document.querySelectorAll('.onb-dot');
    dots.forEach((dot, i) => {
        dot.onclick = () => goToOnboardingSlide(i);
    });
}

// Swipe support para móvil
function initOnboardingSwipe() {
    const container = document.getElementById('onboardingSlides');
    if (!container) return;
    
    let startX = 0;
    let isDragging = false;
    
    container.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    container.addEventListener('touchmove', e => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    container.addEventListener('touchend', e => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentOnboardingSlide < totalOnboardingSlides - 1) {
                nextOnboardingSlide();
            } else if (diff < 0 && currentOnboardingSlide > 0) {
                goToOnboardingSlide(currentOnboardingSlide - 1);
            }
        }
    });
}


let juegoCorrectas = 0;
let juegoIncorrectas = 0;
let juegoRacha = 0;
let juegoMaxRacha = 0;
let tarjetaVolteada = false;
let juegoRespondida = false;

function iniciarJuegoSignos() {
    if (typeof SIGNOS_SINTOMAS_DATA === 'undefined') {
        alert('Error: no se encontró el archivo signos-sintomas-data.js');
        return;
    }
    // Mezclar tarjetas
    juegoTarjetas = shuffle([...SIGNOS_SINTOMAS_DATA]);
    juegoIndex = 0;
    juegoCorrectas = 0;
    juegoIncorrectas = 0;
    juegoRacha = 0;
    juegoMaxRacha = 0;

    showScreen('juegoSignosScreen');
    mostrarTarjeta();
}

function mostrarTarjeta() {
    if (juegoIndex >= juegoTarjetas.length) {
        mostrarResultadoJuego();
        return;
    }

    const tarjeta = juegoTarjetas[juegoIndex];
    tarjetaVolteada = false;
    juegoRespondida = false;

    const frente  = document.getElementById('tarjetaFrente');
    const reverso = document.getElementById('tarjetaReverso');

    // Reset instantáneo: mostrar frente sin animación
    frente.style.transition  = 'none';
    reverso.style.transition = 'none';
    frente.style.transform   = 'scaleX(1)';
    frente.style.opacity     = '1';
    frente.style.display     = 'flex';
    reverso.style.display    = 'none';
    reverso.style.transform  = 'scaleX(1)';
    reverso.style.opacity    = '1';

    // Frente
    document.getElementById('frentetermino').textContent = tarjeta.termino;
    document.getElementById('frenteDesc').textContent = tarjeta.descripcion;
    document.getElementById('frenteCat').textContent = tarjeta.categoria;

    // Reverso (pre-construir oculto al otro lado)
    const esSigno = tarjeta.tipo === 'signo';
    document.getElementById('tarjetaReverso').style.background =
        esSigno ? 'linear-gradient(135deg,rgba(37,99,235,0.9),rgba(29,78,216,0.95))'
                : 'linear-gradient(135deg,rgba(190,24,93,0.9),rgba(157,23,77,0.95))';
    document.getElementById('tarjetaReverso').innerHTML = `
        <div style="font-size:3rem;margin-bottom:0.75rem;">${esSigno ? '🩺' : '💬'}</div>
        <div style="font-size:1.5rem;font-weight:800;color:white;margin-bottom:0.5rem;">
            ${esSigno ? 'SIGNO' : 'SÍNTOMA'}
        </div>
        <div style="color:rgba(255,255,255,0.75);font-size:0.9rem;line-height:1.5;max-width:280px;">
            ${esSigno
                ? '✅ Objetivo: el médico lo puede medir u observar.'
                : '💭 Subjetivo: solo el paciente lo percibe y describe.'}
        </div>
        <div style="margin-top:1rem;background:rgba(255,255,255,0.1);border-radius:10px;padding:0.6rem 1rem;color:rgba(255,255,255,0.9);font-size:0.85rem;">
            ${tarjeta.termino} → ${tarjeta.tipo}
        </div>
    `;

    // Resetear hint
    const hint = document.getElementById('hintVoltear');
    if (hint) hint.textContent = '¿Signo o síntoma? 👇';

    // Progreso
    document.getElementById('juegoProgreso').textContent = `Tarjeta ${juegoIndex + 1} / ${juegoTarjetas.length}`;
    document.getElementById('juegoCategoria').textContent = tarjeta.categoria;
    document.getElementById('juegoRacha').textContent = `🔥 ${juegoRacha}`;
    const pct = (juegoIndex / juegoTarjetas.length * 100).toFixed(1);
    document.getElementById('juegoBarraProgreso').style.width = pct + '%';

    // Reset botones
    document.getElementById('botonesRespuesta').style.display = 'grid';
    document.getElementById('btnSiguienteTarjeta').style.display = 'none';
    document.getElementById('resultadoInline').style.display = 'none';

    // Resetear colores botones
    document.querySelectorAll('#botonesRespuesta button').forEach(b => {
        b.style.opacity = '1';
        b.style.pointerEvents = 'auto';
    });
}

function voltearTarjeta() {
    // Solo permitir voltear DESPUÉS de haber respondido
    if (!juegoRespondida) return;
    tarjetaVolteada = !tarjetaVolteada;
    _animarFlip(tarjetaVolteada);
}

function _animarFlip(mostrarReverso) {
    const frente  = document.getElementById('tarjetaFrente');
    const reverso = document.getElementById('tarjetaReverso');

    // Fase 1: encoger ambos a scaleX(0) — mitad de la animación
    frente.style.transition  = 'transform 0.2s ease,opacity 0.2s ease';
    reverso.style.transition = 'transform 0.2s ease,opacity 0.2s ease';
    frente.style.transform   = 'scaleX(0)';
    frente.style.opacity     = '0';
    reverso.style.transform  = 'scaleX(0)';
    reverso.style.opacity    = '0';

    setTimeout(() => {
        // Fase 2: intercambiar cuál se ve
        if (mostrarReverso) {
            frente.style.display  = 'none';
            reverso.style.display = 'flex';
        } else {
            reverso.style.display = 'none';
            frente.style.display  = 'flex';
        }

        // Fase 3: expandir el que aparece
        const visible = mostrarReverso ? reverso : frente;
        visible.style.transform = 'scaleX(0)';
        visible.style.opacity   = '0';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                visible.style.transition = 'transform 0.2s ease,opacity 0.2s ease';
                visible.style.transform  = 'scaleX(1)';
                visible.style.opacity    = '1';
            });
        });
    }, 200);
}

function responderJuego(respuesta) {
    if (juegoRespondida) return;
    juegoRespondida = true;

    const tarjeta = juegoTarjetas[juegoIndex];
    const correcto = respuesta === tarjeta.tipo;

    // Voltear automáticamente para mostrar la respuesta
    tarjetaVolteada = true;
    _animarFlip(true);

    // Ahora sí se puede voltear — actualizar hint
    const hint = document.getElementById('hintVoltear');
    if (hint) hint.textContent = 'Toca para voltear 🔄';

    // Feedback visual en los botones
    const botones = document.querySelectorAll('#botonesRespuesta button');
    botones.forEach(b => { b.style.opacity = '0.4'; b.style.pointerEvents = 'none'; });

    if (correcto) {
        juegoCorrectas++;
        juegoRacha++;
        if (juegoRacha > juegoMaxRacha) juegoMaxRacha = juegoRacha;
        const btnCorrecto = respuesta === 'signo' ? botones[0] : botones[1];
        btnCorrecto.style.opacity = '1';
        btnCorrecto.style.background = respuesta === 'signo'
            ? 'rgba(16,185,129,0.35)' : 'rgba(16,185,129,0.35)';
        btnCorrecto.style.borderColor = '#10b981';
        btnCorrecto.style.color = '#34d399';

        mostrarResultadoInline(true);
        playSound('correcto');
        // Logro al momento
        const ps = AchievementSystem.getStats();
        const us = { correct: (ps.correct||0)+1, totalAnswered: (ps.totalAnswered||0)+1, maxStreak: Math.max(ps.maxStreak||0, juegoRacha) };
        AchievementSystem.saveStats(us);
        AchievementSystem.check(us);
    } else {
        juegoIncorrectas++;
        juegoRacha = 0;
        const btnIncorrecto = respuesta === 'signo' ? botones[0] : botones[1];
        const btnCorrecto  = tarjeta.tipo === 'signo' ? botones[0] : botones[1];
        btnIncorrecto.style.opacity = '1';
        btnIncorrecto.style.background = 'rgba(239,68,68,0.25)';
        btnIncorrecto.style.borderColor = '#ef4444';
        btnIncorrecto.style.color = '#fca5a5';
        btnCorrecto.style.opacity = '1';
        btnCorrecto.style.background = 'rgba(16,185,129,0.25)';
        btnCorrecto.style.borderColor = '#10b981';
        btnCorrecto.style.color = '#34d399';

        mostrarResultadoInline(false, tarjeta.tipo);
        playSound('incorrecto');
        Animations.shake(document.getElementById('tarjetaActual') || document.getElementById('juegoSignosScreen'));
        const ps2 = AchievementSystem.getStats();
        AchievementSystem.saveStats({ totalAnswered: (ps2.totalAnswered||0)+1 });
        AchievementSystem.check(AchievementSystem.getStats());
    }

    document.getElementById('juegoRacha').textContent = `🔥 ${juegoRacha}`;
    document.getElementById('btnSiguienteTarjeta').style.display = 'block';
}

function mostrarResultadoInline(correcto, tipoCorrector) {
    const el = document.getElementById('resultadoInline');
    el.style.display = 'block';
    if (correcto) {
        el.style.background = 'rgba(16,185,129,0.15)';
        el.style.color = '#34d399';
        el.style.border = '1px solid rgba(16,185,129,0.3)';
        el.innerHTML = '✅ ¡Correcto! Sigue así 🔥';
    } else {
        const tipo = tipoCorrector === 'signo' ? '🩺 SIGNO (objetivo)' : '💬 SÍNTOMA (subjetivo)';
        el.style.background = 'rgba(239,68,68,0.12)';
        el.style.color = '#fca5a5';
        el.style.border = '1px solid rgba(239,68,68,0.25)';
        el.innerHTML = `❌ Era: <strong>${tipo}</strong>`;
    }
    // Scroll automático (PC y móvil)
    scrollToBottom(el, 100);
}

function siguienteTarjeta() {
    juegoIndex++;
    mostrarTarjeta();
}

function mostrarResultadoJuego() {
    showScreen('juegoResultadoScreen');
    playSound('fin');
    const total = juegoTarjetas.length;
    const pct = Math.round(juegoCorrectas / total * 100);

    document.getElementById('juegoResultadoPuntos').textContent = `${juegoCorrectas} / ${total}`;
    document.getElementById('juegoCorrectasTotal').textContent = juegoCorrectas;
    document.getElementById('juegoIncorrectasTotal').textContent = juegoIncorrectas;

    if (pct >= 75) setTimeout(() => Animations.confetti(), 300);

    const prevStats = AchievementSystem.getStats();
    AchievementSystem.saveStats({ maxStreak: Math.max(prevStats.maxStreak || 0, juegoMaxRacha) });
    AchievementSystem.check(AchievementSystem.getStats());

    let emoji, msg;
    if (pct >= 90)      { emoji = '🏆'; msg = `¡Experto! ${pct}% — Dominas la diferencia entre signos y síntomas.`; }
    else if (pct >= 75) { emoji = '🎉'; msg = `¡Muy bien! ${pct}% — Ya casi lo tienes, repasa los que fallaste.`; }
    else if (pct >= 50) { emoji = '📚'; msg = `${pct}% — Buen intento, sigue practicando.`; }
    else                { emoji = '💪'; msg = `${pct}% — ¡No te rindas! Vuélvelo a intentar.`; }

    document.getElementById('juegoResultadoEmoji').textContent = emoji;
    document.getElementById('juegoResultadoMsg').textContent = msg + (juegoMaxRacha > 2 ? ` Mejor racha: 🔥${juegoMaxRacha}` : '');
}

// ══════════════════════════════════════════════
// SONIDOS — Web Audio API (sin archivos externos)
// ══════════════════════════════════════════════
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}


// ═══════════════════════════════════════
// REPRODUCIR ARCHIVOS DE AUDIO (.ogg)
// ═══════════════════════════════════════
function playAudioFile(filename) {
    if (!CONFIG.SOUNDS.enabled) return;
    try {
        const audio = new Audio(filename);
        audio.volume = 0.5;
        
        // Intentar reproducir el archivo
        audio.play().catch(err => {
            console.log('Audio play error:', err);
            
            // Si falla con .ogg, intentar con .mp3
            if (filename.endsWith('.ogg')) {
                const mp3Filename = filename.replace('.ogg', '.mp3');
                const audioMp3 = new Audio(mp3Filename);
                audioMp3.volume = 0.5;
                audioMp3.play().catch(err2 => {
                    console.log('MP3 fallback también falló:', err2);
                    
                    // Último fallback: sonido sintético
                    if (filename.includes('yippee')) {
                        playYippeeFallback();
                    }
                });
            }
        });
    } catch (err) {
        console.log('Audio error:', err);
    }
}

// Fallback sintético para yippee si no se encuentra el archivo
function playYippeeFallback() {
    if (!CONFIG.SOUNDS.enabled) return;
    try {
        const ctx = getAudioCtx();
        // Melodía alegre ascendente (yippee style)
        const notas = [523, 659, 784, 1047, 1319]; // C5, E5, G5, C6, E6
        notas.forEach((freq, i) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g);
            g.connect(ctx.destination);
            o.type = 'sine';
            o.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
            g.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.08);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.2);
            o.start(ctx.currentTime + i * 0.08);
            o.stop(ctx.currentTime + i * 0.08 + 0.2);
        });
    } catch (err) {
        console.log('Yippee fallback error:', err);
    }
}


// ═══════════════════════════════════════
// BANCO DE PREGUNTAS INCORRECTAS
// ═══════════════════════════════════════


// ═══════════════════════════════════════
// RENDERIZAR BANCO DE INCORRECTAS
// ═══════════════════════════════════════
function renderWrongBank() {
    const pending = WrongAnswersBank.getPending();
    const listEl = document.getElementById('wrongBankList');
    const emptyEl = document.getElementById('wrongBankEmpty');
    const btnStart = document.getElementById('btnStartWrongQuiz');
    const cardHome = document.getElementById('wrongBankCard');
    const cardCount = document.getElementById('wrongBankCardCount');
    
    if (pending.length === 0) {
        if (listEl) listEl.style.display = 'none';
        if (emptyEl) emptyEl.style.display = 'block';
        if (btnStart) btnStart.style.display = 'none';
        if (cardHome) cardHome.style.display = 'none';
    } else {
        if (listEl) {
            listEl.style.display = 'flex';
            listEl.innerHTML = pending.map((q, idx) => `
                <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.2);border-radius:12px;padding:1rem;">
                    <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-bottom:0.5rem;">PREGUNTA ${idx + 1}</div>
                    <div style="font-size:0.9rem;color:white;margin-bottom:0.75rem;line-height:1.5;">${q.pregunta}</div>
                    <div style="display:grid;gap:0.5rem;font-size:0.85rem;margin-bottom:0.75rem;">
                        <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);padding:0.6rem;border-radius:8px;color:#fca5a5;">
                            <strong>❌ Tu respuesta:</strong> ${q.tuRespuesta}
                        </div>
                        <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);padding:0.6rem;border-radius:8px;color:#6ee7b7;">
                            <strong>✅ Correcta:</strong> ${q.correcta}
                        </div>
                    </div>
                    
                    <!-- Explicación expandible -->
                    <div id="wrongExp${q.id}" style="display:none;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);padding:0.75rem;border-radius:8px;margin-bottom:0.75rem;font-size:0.85rem;color:#cbd5e1;line-height:1.6;">
                        <strong style="color:#a5b4fc;">💡 Explicación:</strong><br>${q.explicacion || 'Sin explicación disponible'}
                    </div>
                    
                    <div style="display:flex;gap:0.5rem;">
                        <button onclick="document.getElementById('wrongExp${q.id}').style.display = document.getElementById('wrongExp${q.id}').style.display === 'none' ? 'block' : 'none';" style="flex:1;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);color:#a5b4fc;padding:0.6rem;border-radius:8px;font-size:0.8rem;font-weight:600;cursor:pointer;">
                            💡 Ver explicación
                        </button>
                        <button onclick="WrongAnswersBank.markAsReviewed(${q.id}); renderWrongBank(); refreshHomeStats();" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);color:#6ee7b7;padding:0.6rem 1rem;border-radius:8px;font-size:0.8rem;font-weight:600;cursor:pointer;">
                            ✓ Revisada
                        </button>
                    </div>
                </div>
            `).join('');
        }
        if (emptyEl) emptyEl.style.display = 'none';
        if (btnStart) btnStart.style.display = 'none';  // Ocultar el botón de quiz ya que ahora es modo estudio directo
        if (cardHome) cardHome.style.display = 'block';
        if (cardCount) cardCount.textContent = pending.length;
    }
}

// ═══════════════════════════════════════
// INICIAR QUIZ DE REPASO DE INCORRECTAS
// ═══════════════════════════════════════
function startWrongQuestionsQuiz() {
    const pending = WrongAnswersBank.getPending();
    if (pending.length === 0) {
        alert('No hay preguntas pendientes');
        return;
    }
    
    // Mostrar directamente las preguntas como tarjetas de estudio
    // En lugar de intentar recrear un quiz (que requiere todas las opciones originales)
    alert('📚 Modo de estudio de incorrectas:\n\nRevisa cada pregunta y su explicación.\nMarca como "revisada" cuando la hayas entendido.');
    showScreen('repasoIncorrectasScreen');
    renderWrongBank();
}

function playSound(tipo) {
    if (!CONFIG.SOUNDS.enabled) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (tipo === 'correcto' || tipo === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.22);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.45);

        } else if (tipo === 'incorrecto' || tipo === 'incorrect') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(280, ctx.currentTime);
            osc.frequency.setValueAtTime(220, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.25, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.4);

        } else if (tipo === 'voltear') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.08);

        } else if (tipo === 'fin' || tipo === 'achievement') {
            const notas = [523, 659, 784, 1047];
            notas.forEach((freq, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(ctx.destination);
                o.type = 'sine';
                o.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
                g.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.12);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.25);
                o.start(ctx.currentTime + i * 0.12);
                o.stop(ctx.currentTime + i * 0.12 + 0.25);
            });
        }
    } catch(e) {}
}

// ══════════════════════════════════════════════
// ANIMACIONES
// ══════════════════════════════════════════════
const Animations = {
    confetti() {
        if (!CONFIG.ANIMATIONS.enabled) return;
        // 🎉 YIPPEE sound effect
        playAudioFile('yippee.ogg');
        const colors = ['#14b8a6', '#fb923c', '#ec4899', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6'];
        for (let i = 0; i < 80; i++) {
            const p = document.createElement('div');
            const duration = 2 + Math.random() * 2;
            const delay    = Math.random() * 0.8;
            const size     = 6 + Math.random() * 8;
            const color    = colors[Math.floor(Math.random() * colors.length)];
            const isCircle = Math.random() > 0.5;
            // ✅ La animación COMPLETA va en cssText — no dividida entre CSS e inline
            p.style.cssText = `
                position: fixed;
                top: -12px;
                left: ${5 + Math.random() * 90}%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${isCircle ? '50%' : '2px'};
                pointer-events: none;
                z-index: 9999;
                animation: confettiFall ${duration}s ${delay}s linear forwards;
            `;
            document.body.appendChild(p);
            setTimeout(() => p.remove(), (duration + delay) * 1000 + 100);
        }
    },

    shake(element) {
        if (!CONFIG.ANIMATIONS.enabled || !element) return;
        element.classList.add('animate-shake');
        setTimeout(() => element.classList.remove('animate-shake'), 500);
    },

    countUp(element, target, duration = 1000) {
        if (!element) return;
        const startTime = performance.now();
        const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.floor(target * ease) + '%';
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
};

// ══════════════════════════════════════════════
// SISTEMA DE LOGROS
// ══════════════════════════════════════════════
const ACHIEVEMENTS = [
    // ═══════════════════════════════════════════════
    // 🥉 BRONCE - Primeros Pasos
    // ═══════════════════════════════════════════════
    { id: 'first_steps',    name: 'Primeros Pasos',           icon: '👣', tier: 'bronze',   description: 'Respondiste tu primera pregunta',              condition: (s) => (s.totalAnswered||0) >= 1 },
    { id: 'curious',        name: 'Curioso',                  icon: '🔍', tier: 'bronze',   description: 'Respondiste 10 preguntas',                    condition: (s) => (s.totalAnswered||0) >= 10 },
    { id: 'warming_up',     name: 'Calentando',               icon: '🔄', tier: 'bronze',   description: 'Respondiste 25 preguntas',                    condition: (s) => (s.totalAnswered||0) >= 25 },
    { id: 'beginner',       name: 'Principiante',             icon: '🌱', tier: 'bronze',   description: '10 respuestas correctas',                     condition: (s) => (s.correct||0) >= 10 },
    { id: 'first_exam',     name: 'Primera Prueba',           icon: '📝', tier: 'bronze',   description: 'Completaste tu primer examen',                condition: (s) => (s.examsCompleted||0) >= 1 },
    
    // ═══════════════════════════════════════════════
    // 🥈 PLATA - Estudiante Comprometido
    // ═══════════════════════════════════════════════
    { id: 'fifty_correct',  name: 'Estudiante Aplicado',      icon: '📚', tier: 'silver',   description: '50 respuestas correctas',                     condition: (s) => (s.correct||0) >= 50 },
    { id: 'hundred_ans',    name: 'Constante',                icon: '💯', tier: 'silver',   description: '100 preguntas respondidas',                   condition: (s) => (s.totalAnswered||0) >= 100 },
    { id: 'streak_5',       name: 'En Racha',                 icon: '🔥', tier: 'silver',   description: '5 aciertos seguidos',                         condition: (s) => (s.maxStreak||0) >= 5 },
    { id: 'quick_learner',  name: 'Aprendizaje Rápido',       icon: '⚡', tier: 'silver',   description: 'Respondiste 20 preguntas en menos de 10 min', condition: (s) => (s.speedRun20||0) > 0 },
    { id: 'night_owl',      name: 'Búho Nocturno',            icon: '🦉', tier: 'silver',   description: 'Estudiaste después de medianoche',            condition: () => { const h = new Date().getHours(); return h >= 0 && h < 5; } },
    
    // ═══════════════════════════════════════════════
    // 🥇 ORO - Experto en Formación
    // ═══════════════════════════════════════════════
    { id: 'expert',         name: 'Experto',                  icon: '🎓', tier: 'gold',     description: '100 respuestas correctas',                    condition: (s) => (s.correct||0) >= 100 },
    { id: 'two_fifty',      name: 'Imparable',                icon: '🚀', tier: 'gold',     description: '250 preguntas respondidas',                   condition: (s) => (s.totalAnswered||0) >= 250 },
    { id: 'streak_10',      name: 'Racha de Fuego',           icon: '🔥', tier: 'gold',     description: '10 aciertos seguidos',                        condition: (s) => (s.maxStreak||0) >= 10 },
    { id: 'high_score',     name: 'Alto Rendimiento',         icon: '🥇', tier: 'gold',     description: '90%+ en un examen de 20+ preguntas',          condition: (s, ex) => ex && ex.score >= 90 && ex.total >= 20 },
    { id: 'five_exams',     name: 'Evaluador Serial',         icon: '📋', tier: 'gold',     description: 'Completaste 5 exámenes completos',            condition: (s) => (s.examsCompleted||0) >= 5 },
    { id: 'doctor',         name: 'Doctor en Ciernes',        icon: '🩺', tier: 'gold',     description: '10 diagnósticos correctos',                   condition: (s) => (s.diagCorrectas||0) >= 10 },
    
    // ═══════════════════════════════════════════════
    // 💎 PLATINO - Maestro del Conocimiento
    // ═══════════════════════════════════════════════
    { id: 'master',         name: 'Maestro',                  icon: '🧠', tier: 'platinum', description: '250 respuestas correctas',                    condition: (s) => (s.correct||0) >= 250 },
    { id: 'five_hundred',   name: 'Dedicación Total',         icon: '🔱', tier: 'platinum', description: '500 preguntas respondidas',                   condition: (s) => (s.totalAnswered||0) >= 500 },
    { id: 'streak_20',      name: 'Legendario',               icon: '💎', tier: 'platinum', description: '20 aciertos seguidos',                        condition: (s) => (s.maxStreak||0) >= 20 },
    { id: 'perfect_exam',   name: 'Examen Perfecto',          icon: '💯', tier: 'platinum', description: '100% en examen de 20+ preguntas',             condition: (s, ex) => ex && ex.score === 100 && ex.total >= 20 },
    { id: 'specialist',     name: 'Especialista Clínico',     icon: '🏥', tier: 'platinum', description: '30 diagnósticos correctos',                   condition: (s) => (s.diagCorrectas||0) >= 30 },
    { id: 'ten_exams',      name: 'Veterano de Exámenes',     icon: '📚', tier: 'platinum', description: 'Completaste 10 exámenes completos',           condition: (s) => (s.examsCompleted||0) >= 10 },
    { id: 'early_bird',     name: 'Madrugador Disciplinado',  icon: '🌅', tier: 'platinum', description: 'Estudiaste entre 5 y 7 AM',                  condition: () => { const h = new Date().getHours(); return h >= 5 && h < 7; } },
    
    // ═══════════════════════════════════════════════
    // 👑 DIAMANTE - Elite Absoluta
    // ═══════════════════════════════════════════════
    { id: 'grandmaster',    name: 'Gran Maestro',             icon: '👑', tier: 'diamond',  description: '500 respuestas correctas',                    condition: (s) => (s.correct||0) >= 500 },
    { id: 'thousand',       name: 'Leyenda Viviente',         icon: '🌟', tier: 'diamond',  description: '1000 preguntas respondidas',                  condition: (s) => (s.totalAnswered||0) >= 1000 },
    { id: 'streak_30',      name: 'Modo Dios',                icon: '⚡', tier: 'diamond',  description: '30 aciertos seguidos sin fallar',             condition: (s) => (s.maxStreak||0) >= 30 },
    { id: 'streak_50',      name: 'Inmortal',                 icon: '🔮', tier: 'diamond',  description: '50 aciertos seguidos',                        condition: (s) => (s.maxStreak||0) >= 50 },
    { id: 'attending',      name: 'Médico Residente',         icon: '👨‍⚕️', tier: 'diamond',  description: 'Completaste 60 casos clínicos',               condition: (s) => (s.diagCorrectas||0) >= 60 },
    { id: 'perfectionist',  name: 'Perfeccionista',           icon: '✨', tier: 'diamond',  description: '95%+ de precisión con 100+ preguntas',        condition: (s) => (s.totalAnswered||0) >= 100 && ((s.correct||0)/(s.totalAnswered||1)) >= 0.95 },
    { id: 'twenty_exams',   name: 'Maestro Evaluador',        icon: '🎯', tier: 'diamond',  description: 'Completaste 20 exámenes completos',           condition: (s) => (s.examsCompleted||0) >= 20 },
    
    // ═══════════════════════════════════════════════
    // 🌈 SECRETOS / ESPECIALES
    // ═══════════════════════════════════════════════
    { id: 'no_mistakes',    name: 'Impecable',                icon: '🎖️', tier: 'secret',   description: 'Completaste un examen sin errores (50+ preg)', condition: (s, ex) => ex && ex.score === 100 && ex.total >= 50 },
    { id: 'speed_demon',    name: 'Demonio de Velocidad',     icon: '🏃', tier: 'secret',   description: '50 preguntas correctas en menos de 15 min',   condition: (s) => (s.speedRun50||0) > 0 },
    { id: 'comeback_kid',   name: 'Phoenix',                  icon: '🔥', tier: 'secret',   description: 'Racha de 15+ después de fallar 5 seguidas',  condition: (s) => (s.comeback||0) > 0 },
    { id: 'scholar',        name: 'Erudito Completo',         icon: '📖', tier: 'secret',   description: 'Visitaste todos los módulos de clases',       condition: (s) => (s.modulesVisited||0) >= 7 },
];

const AchievementSystem = {
    _getUnlocked() {
        try { return JSON.parse(localStorage.getItem('mediprep_achievements') || '[]'); } catch { return []; }
    },
    _saveUnlocked(arr) {
        try { localStorage.setItem('mediprep_achievements', JSON.stringify(arr)); } catch {}
    },
    getStats() {
        try { return JSON.parse(localStorage.getItem('mediprep_stats') || '{}'); } catch { return {}; }
    },
    saveStats(updates) {
        try {
            const s = this.getStats();
            Object.assign(s, updates);
            localStorage.setItem('mediprep_stats', JSON.stringify(s));
        } catch {}
    },
    check(extraStats = {}, lastExam = null) {
        const unlocked = this._getUnlocked();
        const stats = { ...this.getStats(), ...extraStats };
        ACHIEVEMENTS.forEach(ach => {
            if (!unlocked.includes(ach.id) && ach.condition(stats, lastExam)) {
                unlocked.push(ach.id);
                this._saveUnlocked(unlocked);
                this._showPopup(ach);
            }
        });
    },
    _showPopup(ach) {
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `
            <div style="font-size:2rem;margin-right:0.75rem;">${ach.icon}</div>
            <div>
                <div style="font-size:0.7rem;color:#f59e0b;font-weight:700;letter-spacing:1px;text-transform:uppercase;">¡Logro Desbloqueado!</div>
                <div style="font-size:1rem;font-weight:800;color:white;">${ach.name}</div>
                <div style="font-size:0.8rem;color:#94a3b8;">${ach.description}</div>
            </div>`;
        document.body.appendChild(popup);
        playAudioFile('subir-de-nivel_.ogg');
        setTimeout(() => popup.classList.add('show'), 50);
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 500);
        }, 4000);
    }
};

// ══════════════════════════════════════════════
// JUEGO: DIAGNÓSTICO CLÍNICO
// ══════════════════════════════════════════════
let diagCasos = [];
let diagIndex = 0;
let diagCorrectas = 0;
let diagIncorrectas = 0;
let diagRacha = 0;
let diagMaxRacha = 0;
let diagRespondido = false;

const VITALES_CONFIG = {
    temperatura:    { icono: '🌡️', label: 'Temperatura' },
    frecCardiaca:   { icono: '❤️', label: 'Frec. Cardíaca' },
    frecResp:       { icono: '💨', label: 'Frec. Respiratoria' },
    presionArterial:{ icono: '🩸', label: 'Presión Arterial' },
    glucosa:        { icono: '🍬', label: 'Glucosa' },
    spo2:           { icono: '💧', label: 'SpO₂ / Oxígeno' },
};

function iniciarJuegoDiagnostico() {
    if (typeof DIAGNOSTICOS_DATA === 'undefined') {
        alert('Error: no se encontró diagnosticos-data.js');
        return;
    }
    diagCasos = shuffle([...DIAGNOSTICOS_DATA]);
    diagIndex = 0;
    diagCorrectas = 0;
    diagIncorrectas = 0;
    diagRacha = 0;
    diagMaxRacha = 0;
    showScreen('juegoDiagnosticoScreen');
    mostrarCasoDiag();
}

function mostrarCasoDiag() {
    if (diagIndex >= diagCasos.length) {
        mostrarResultadoDiag();
        return;
    }
    const caso = diagCasos[diagIndex];
    diagRespondido = false;

    // Header
    document.getElementById('diagCategoria').textContent = caso.categoria;
    document.getElementById('diagProgreso').textContent = `Caso ${diagIndex + 1} / ${diagCasos.length}`;
    document.getElementById('diagRacha').textContent = `🔥 ${diagRacha}`;
    document.getElementById('diagBarraProgreso').style.width = (diagIndex / diagCasos.length * 100) + '%';

    // Paciente
    document.getElementById('diagPaciente').textContent = caso.paciente;

    // Vitales — tarjetitas con colores
    const vDiv = document.getElementById('diagVitales');
    vDiv.innerHTML = Object.entries(caso.vitales).map(([key, v]) => {
        const cfg = VITALES_CONFIG[key] || { icono: '📊', label: key };
        return `<div style="background:rgba(${hexToRgb(v.color)},0.08);border:1px solid rgba(${hexToRgb(v.color)},0.3);border-radius:10px;padding:0.6rem 0.7rem;">
            <div style="font-size:0.72rem;color:#64748b;margin-bottom:0.2rem;">${cfg.icono} ${cfg.label}</div>
            <div style="font-weight:700;color:${v.color};font-size:0.92rem;">${v.valor}</div>
            <div style="font-size:0.68rem;color:${v.color};opacity:0.8;text-transform:uppercase;letter-spacing:0.3px;">${v.estado}</div>
        </div>`;
    }).join('');

    // Opciones mezcladas
    const opcionesMezcladas = shuffle(caso.opciones.map((op, i) => ({ op, original: i })));
    const oDiv = document.getElementById('diagOpciones');
    oDiv.innerHTML = opcionesMezcladas.map((item, i) => `
        <button onclick="responderDiag(${item.original}, this)"
            style="padding:0.9rem 1rem;border-radius:12px;border:2px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.06);color:#e2e8f0;font-size:0.92rem;font-weight:600;cursor:pointer;text-align:left;transition:all 0.15s;width:100%;"
            onmouseover="if(!this.disabled){this.style.borderColor='#f59e0b';this.style.background='rgba(245,158,11,0.15)'}"
            onmouseout="if(!this.disabled){this.style.borderColor='rgba(245,158,11,0.3)';this.style.background='rgba(245,158,11,0.06)'}">
            <span style="color:#f59e0b;margin-right:0.5rem;">${String.fromCharCode(65+i)}.</span>${item.op}
        </button>`).join('');

    // Reset UI
    document.getElementById('diagBtnSiguiente').style.display = 'none';
    document.getElementById('diagExplicacion').style.display = 'none';
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
}

function responderDiag(indexOriginal, btnPresionado) {
    if (diagRespondido) return;
    diagRespondido = true;

    const caso = diagCasos[diagIndex];
    const correcto = indexOriginal === caso.correcta;

    // Deshabilitar todos los botones
    document.querySelectorAll('#diagOpciones button').forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.5';
        b.style.cursor = 'default';
        b.onmouseover = null;
        b.onmouseout = null;
    });

    // Colorear correcto e incorrecto
    document.querySelectorAll('#diagOpciones button').forEach(b => {
        const txt = b.textContent.trim().slice(2); // quitar "A. "
        if (txt === caso.opciones[caso.correcta]) {
            b.style.background = 'rgba(16,185,129,0.2)';
            b.style.borderColor = '#10b981';
            b.style.color = '#34d399';
            b.style.opacity = '1';
        }
    });

    if (correcto) {
        btnPresionado.style.background = 'rgba(16,185,129,0.2)';
        btnPresionado.style.borderColor = '#10b981';
        btnPresionado.style.color = '#34d399';
        btnPresionado.style.opacity = '1';
        diagCorrectas++;
        diagRacha++;
        if (diagRacha > diagMaxRacha) diagMaxRacha = diagRacha;
        playSound('correcto');
        // Logro al momento
        const pd = AchievementSystem.getStats();
        const ud = {
            correct: (pd.correct||0)+1,
            totalAnswered: (pd.totalAnswered||0)+1,
            diagCorrectas: (pd.diagCorrectas||0)+1,
            maxStreak: Math.max(pd.maxStreak||0, diagRacha)
        };
        AchievementSystem.saveStats(ud);
        AchievementSystem.check(ud);
    } else {
        btnPresionado.style.background = 'rgba(239,68,68,0.15)';
        btnPresionado.style.borderColor = '#ef4444';
        btnPresionado.style.color = '#fca5a5';
        btnPresionado.style.opacity = '1';
        diagIncorrectas++;
        diagRacha = 0;
        playSound('incorrecto');
        Animations.shake(btnPresionado || document.getElementById('juegoDiagnosticoScreen'));
        const pd2 = AchievementSystem.getStats();
        AchievementSystem.saveStats({ totalAnswered: (pd2.totalAnswered||0)+1 });
        AchievementSystem.check(AchievementSystem.getStats());
    }

    document.getElementById('diagRacha').textContent = `🔥 ${diagRacha}`;

    // Mostrar explicación
    const expDiv = document.getElementById('diagExplicacion');
    const expTxt = document.getElementById('diagExplicacionTexto');
    expDiv.style.display = 'block';
    expDiv.style.borderColor = correcto ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)';
    expDiv.style.background = correcto ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)';
    expTxt.textContent = caso.explicacion;

    document.getElementById('diagBtnSiguiente').style.display = 'block';
    scrollToBottom(document.getElementById('diagBtnSiguiente'), 150);
}

function siguienteDiagnostico() {
    diagIndex++;
    mostrarCasoDiag();
}

function mostrarResultadoDiag() {
    showScreen('diagResultadoScreen');
    playSound('fin');
    const total = diagCasos.length;
    const pct = Math.round(diagCorrectas / total * 100);
    document.getElementById('diagResultadoPuntos').textContent = `${diagCorrectas} / ${total}`;
    document.getElementById('diagCorrectasTotal').textContent = diagCorrectas;
    document.getElementById('diagIncorrectasTotal').textContent = diagIncorrectas;

    if (pct >= 70) setTimeout(() => Animations.confetti(), 300);

    const prevStats = AchievementSystem.getStats();
    AchievementSystem.saveStats({
        diagCorrectas: (prevStats.diagCorrectas || 0) + diagCorrectas,
        maxStreak: Math.max(prevStats.maxStreak || 0, diagMaxRacha),
    });
    AchievementSystem.check(AchievementSystem.getStats());

    let emoji, msg;
    if (pct >= 90)      { emoji = '🏆'; msg = `¡Excelente médico! ${pct}% — Diagnósticos perfectos.`; }
    else if (pct >= 70) { emoji = '🩺'; msg = `¡Bien! ${pct}% — Sigue repasando los casos fallidos.`; }
    else if (pct >= 50) { emoji = '📚'; msg = `${pct}% — Repasa los signos vitales y vuelve a intentarlo.`; }
    else                { emoji = '💪'; msg = `${pct}% — Los signos vitales son clave, ¡sigue practicando!`; }

    document.getElementById('diagResultadoEmoji').textContent = emoji;
    document.getElementById('diagResultadoMsg').textContent = msg + (diagMaxRacha > 2 ? ` Mejor racha: 🔥${diagMaxRacha}` : '');
}

// ══════════════════════════════════════════════
// PANTALLA DE LOGROS
// ══════════════════════════════════════════════
// ═══════════════════════════════════════
// COLORES POR TIER
// ═══════════════════════════════════════
const TIER_COLORS = {
    bronze:   { bg: 'rgba(205,127,50,0.15)',  border: 'rgba(205,127,50,0.4)',   glow: 'rgba(205,127,50,0.3)', text: '#cd7f32' },
    silver:   { bg: 'rgba(192,192,192,0.15)', border: 'rgba(192,192,192,0.4)',  glow: 'rgba(192,192,192,0.3)', text: '#c0c0c0' },
    gold:     { bg: 'rgba(255,215,0,0.15)',   border: 'rgba(255,215,0,0.4)',    glow: 'rgba(255,215,0,0.3)', text: '#ffd700' },
    platinum: { bg: 'rgba(229,228,226,0.15)', border: 'rgba(229,228,226,0.4)',  glow: 'rgba(229,228,226,0.3)', text: '#e5e4e2' },
    diamond:  { bg: 'rgba(185,242,255,0.15)', border: 'rgba(185,242,255,0.4)',  glow: 'rgba(185,242,255,0.3)', text: '#b9f2ff' },
    secret:   { bg: 'rgba(168,85,247,0.15)',  border: 'rgba(168,85,247,0.4)',   glow: 'rgba(168,85,247,0.3)', text: '#a855f7' }
};

let currentFilter = 'all';

function filterLogros(tier) {
    currentFilter = tier;
    
    // Actualizar botones de filtro
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        const btnTier = btn.id.replace('filter-', '');
        if (btnTier === tier) {
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1.05)';
        } else {
            btn.style.opacity = '0.6';
            btn.style.transform = 'scale(1)';
        }
    });
    
    renderLogros();
}

function renderLogros() {
    const unlocked = AchievementSystem._getUnlocked();
    const stats = AchievementSystem.getStats();

    // ═══════════════════════════════════════
    // ESTADÍSTICAS
    // ═══════════════════════════════════════
    const correct = stats.correct || 0;
    const total = stats.totalAnswered || 0;
    const precision = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    const elC = document.getElementById('statCorrectas');
    const elR = document.getElementById('statRacha');
    const elT = document.getElementById('statTotal');
    const elP = document.getElementById('statPrecision');
    
    if (elC) elC.textContent = correct;
    if (elR) elR.textContent = stats.maxStreak || 0;
    if (elT) elT.textContent = total;
    if (elP) elP.textContent = precision + '%';

    // ═══════════════════════════════════════
    // PROGRESO GENERAL
    // ═══════════════════════════════════════
    const percentage = Math.round((unlocked.length / ACHIEVEMENTS.length) * 100);
    
    const sub = document.getElementById('logrosSubtitulo');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (sub) sub.textContent = `${unlocked.length} / ${ACHIEVEMENTS.length} Logros`;
    if (progressBar) progressBar.style.width = percentage + '%';
    if (progressText) progressText.textContent = percentage + '% completado';

    // ═══════════════════════════════════════
    // FILTRAR LOGROS
    // ═══════════════════════════════════════
    const filteredAchievements = currentFilter === 'all' 
        ? ACHIEVEMENTS 
        : ACHIEVEMENTS.filter(ach => ach.tier === currentFilter);

    // ═══════════════════════════════════════
    // GRID DE LOGROS CON DISEÑO PROFESIONAL
    // ═══════════════════════════════════════
    const grid = document.getElementById('logrosGrid');
    if (!grid) return;
    
    grid.innerHTML = filteredAchievements.map(ach => {
        const done = unlocked.includes(ach.id);
        const colors = TIER_COLORS[ach.tier] || TIER_COLORS.bronze;
        
        return `<div data-tier="${ach.tier}" style="
            background:${done ? colors.bg : 'rgba(30,41,59,0.4)'};
            border:2px solid ${done ? colors.border : 'rgba(100,116,139,0.15)'};
            border-radius:16px;
            padding:1.1rem;
            text-align:center;
            transition:all 0.3s cubic-bezier(0.4,0,0.2,1);
            position:relative;
            overflow:hidden;
            ${done ? '' : 'opacity:0.5;filter:grayscale(0.8);'}
            cursor:pointer;
            ${done ? 'box-shadow:0 4px 12px ' + colors.glow + ';' : ''}
            transform:scale(1);
        " onmouseover="if(this.style.opacity==='1' || !this.style.opacity || this.style.opacity===''){this.style.transform='scale(1.05) translateY(-2px)';this.style.boxShadow='0 8px 20px ${colors.glow}';}" 
           onmouseout="this.style.transform='scale(1) translateY(0)';this.style.boxShadow='${done ? '0 4px 12px ' + colors.glow : 'none'}';"> 
           
            ${done ? `<div style="position:absolute;top:8px;right:8px;width:20px;height:20px;background:linear-gradient(135deg,#10b981,#34d399);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;box-shadow:0 2px 6px rgba(16,185,129,0.4);">✓</div>` : ''}
            
            <div style="font-size:2.5rem;margin-bottom:0.6rem;filter:${done ? 'none' : 'grayscale(1)'};transition:transform 0.3s;">${ach.icon}</div>
            
            <div style="font-weight:800;font-size:0.9rem;color:${done ? colors.text : '#64748b'};margin-bottom:0.35rem;line-height:1.2;">${ach.name}</div>
            
            <div style="font-size:0.72rem;color:${done ? '#94a3b8' : '#475569'};line-height:1.4;margin-bottom:0.5rem;">${ach.description}</div>
            
            ${done 
                ? `<div style="display:inline-block;background:rgba(16,185,129,0.2);border:1px solid rgba(16,185,129,0.4);color:#34d399;padding:0.25rem 0.65rem;border-radius:12px;font-size:0.65rem;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">Desbloqueado</div>` 
                : `<div style="display:inline-block;background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.25);color:#64748b;padding:0.25rem 0.65rem;border-radius:12px;font-size:0.65rem;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">🔒 Bloqueado</div>`
            }
        </div>`;
    }).join('');
    
    // Mensaje si no hay logros en el filtro
    if (filteredAchievements.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:#64748b;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🎯</div>
            <div style="font-size:0.9rem;">No hay logros en esta categoría</div>
        </div>`;
    }
}

// ══════════════════════════════════════════════════════
// MODO CLÍNICO — Examina al paciente con herramientas
// ══════════════════════════════════════════════════════

const HERRAMIENTAS = [
    {
        id: 'inspeccion',
        icono: '👁️',
        label: 'Inspección',
        vitales: [],       // no revela vital — ya se ve en el texto del paciente
        hallazgo: (caso) => `Paciente: ${caso.paciente.split('.')[0]}.`
    },
    {
        id: 'termometro',
        icono: '🌡️',
        label: 'Termómetro',
        vitales: ['temperatura'],
        hallazgo: (caso) => `Temperatura: ${caso.vitales.temperatura.valor} (${caso.vitales.temperatura.estado})`
    },
    {
        id: 'estetoscopio',
        icono: '🩺',
        label: 'Estetoscopio',
        vitales: ['frecCardiaca', 'frecResp'],
        hallazgo: (caso) => `FC ${caso.vitales.frecCardiaca.valor} · FR ${caso.vitales.frecResp.valor}`
    },
    {
        id: 'tensiómetro',
        icono: '💪',
        label: 'Tensiómetro',
        vitales: ['presionArterial'],
        hallazgo: (caso) => `PA: ${caso.vitales.presionArterial.valor} (${caso.vitales.presionArterial.estado})`
    },
    {
        id: 'glucometro',
        icono: '🍬',
        label: 'Glucómetro',
        vitales: ['glucosa'],
        hallazgo: (caso) => `Glucosa: ${caso.vitales.glucosa.valor} (${caso.vitales.glucosa.estado})`
    },
    {
        id: 'oximetro',
        icono: '💧',
        label: 'Oxímetro',
        vitales: ['spo2'],
        hallazgo: (caso) => `SpO₂: ${caso.vitales.spo2.valor} (${caso.vitales.spo2.estado})`
    },
];

const VITALES_ICONOS = {
    temperatura:     { icono: '🌡️', label: 'Temp' },
    frecCardiaca:    { icono: '❤️', label: 'FC' },
    frecResp:        { icono: '💨', label: 'FR' },
    presionArterial: { icono: '🩸', label: 'PA' },
    glucosa:         { icono: '🍬', label: 'Glucosa' },
    spo2:            { icono: '💧', label: 'SpO₂' },
};

const AVATARES = ['🧑‍🦱','👩‍🦳','👨‍🦲','👩','👴','👵','🧑','👨‍🦰','👩‍🦱'];

let mcCasos = [];
let mcIndex = 0;
let mcPuntosTotal = 0;
let mcHerramientasUsadas = new Set();
let mcRespondido = false;

function iniciarModoClinico() {
    if (typeof DIAGNOSTICOS_DATA === 'undefined') {
        alert('Error: no se encontró diagnosticos-data.js');
        return;
    }
    mcCasos = [...DIAGNOSTICOS_DATA].sort(() => Math.random() - 0.5);
    mcIndex = 0;
    mcPuntosTotal = 0;
    mcHerramientasUsadas = new Set();
    mcRespondido = false;
    showScreen('modoClinicoScreen');
    mcRenderCaso();
}

function mcRenderCaso() {
    if (mcIndex >= mcCasos.length) {
        mcMostrarResultado();
        return;
    }

    const caso = mcCasos[mcIndex];
    mcHerramientasUsadas = new Set();
    mcRespondido = false;

    // Header
    document.getElementById('mcCategoria').textContent = caso.categoria || 'Consultorio';
    document.getElementById('mcProgreso').textContent = `Caso ${mcIndex + 1} / ${mcCasos.length}`;
    document.getElementById('mcPuntos').textContent = `⭐ ${mcPuntosTotal}`;

    // Barra
    const pct = (mcIndex / mcCasos.length) * 100;
    document.getElementById('mcBarraProgreso').style.width = pct + '%';

    // Avatar aleatorio según género implícito en el texto
    const texto = caso.paciente.toLowerCase();
    const avatar = texto.includes('mujer') || texto.includes('femenin') || texto.includes('niña') || texto.includes('embarazada')
        ? ['👩','👩‍🦳','👩‍🦱','👵'][Math.floor(Math.random()*4)]
        : texto.includes('niño') || texto.includes('lactante') || texto.includes('bebé')
        ? '👶'
        : ['👨','👴','🧑‍🦱','👨‍🦲'][Math.floor(Math.random()*4)];
    document.getElementById('mcAvatarPaciente').textContent = avatar;

    // Texto del paciente — mostrar solo el inicio
    document.getElementById('mcPacienteTexto').textContent = caso.paciente;

    // Monitor: todos ocultos al inicio
    const monitor = document.getElementById('mcMonitor');
    monitor.innerHTML = Object.entries(VITALES_ICONOS).map(([key, cfg]) => `
        <div id="mcSlot_${key}" class="mc-vital-slot">
            <div class="mc-vital-icono">${cfg.icono}</div>
            <div class="mc-vital-label">${cfg.label}</div>
            <div class="mc-vital-oculto mc-vital-valor">—</div>
        </div>
    `).join('');

    // Herramientas
    const toolsEl = document.getElementById('mcHerramientas');
    toolsEl.innerHTML = HERRAMIENTAS.map(h => `
        <button class="mc-herramienta" id="mcTool_${h.id}" onclick="mcUsarHerramienta('${h.id}')">
            <span style="font-size:1.6rem;">${h.icono}</span>
            <span class="mc-herramienta-label">${h.label}</span>
        </button>
    `).join('');

    // Ocultar log y diagnóstico
    document.getElementById('mcHallazgosContainer').style.display = 'none';
    document.getElementById('mcHallazgosLog').innerHTML = '';
    document.getElementById('mcDiagnosticarBtn').style.display = 'none';
    document.getElementById('mcExplicacion').style.display = 'none';
}

function mcUsarHerramienta(herramientaId) {
    if (mcRespondido) return;
    if (mcHerramientasUsadas.has(herramientaId)) return;

    mcHerramientasUsadas.add(herramientaId);
    playSound('voltear');

    const caso = mcCasos[mcIndex];
    const herramienta = HERRAMIENTAS.find(h => h.id === herramientaId);

    // Marcar herramienta como usada
    const btnTool = document.getElementById(`mcTool_${herramientaId}`);
    if (btnTool) {
        btnTool.classList.add('usada');
        btnTool.onclick = null;
        // Animación de "uso"
        btnTool.style.transform = 'scale(0.92)';
        setTimeout(() => { btnTool.style.transform = ''; }, 200);
    }

    // Revelar vitales en el monitor
    herramienta.vitales.forEach(vitalKey => {
        const slot = document.getElementById(`mcSlot_${vitalKey}`);
        if (!slot || !caso.vitales[vitalKey]) return;
        const vital = caso.vitales[vitalKey];
        slot.classList.add('revelado');
        slot.innerHTML = `
            <div class="mc-vital-icono">${VITALES_ICONOS[vitalKey].icono}</div>
            <div class="mc-vital-label">${VITALES_ICONOS[vitalKey].label}</div>
            <div class="mc-vital-valor" style="color:${vital.color};">${vital.valor}</div>
        `;
    });

    // Agregar hallazgo al log
    const hallazgoTexto = herramienta.hallazgo(caso);
    const logContainer = document.getElementById('mcHallazgosContainer');
    const log = document.getElementById('mcHallazgosLog');
    logContainer.style.display = 'block';
    const item = document.createElement('div');
    item.className = 'mc-hallazgo';
    item.innerHTML = `<strong style="color:#14b8a6;">${herramienta.icono} ${herramienta.label}:</strong> ${hallazgoTexto}`;
    log.appendChild(item);
    log.scrollTop = log.scrollHeight;

    // Si usó todas las herramientas → mostrar diagnóstico
    if (mcHerramientasUsadas.size === HERRAMIENTAS.length) {
        setTimeout(() => mcMostrarOpciones(), 400);
    }
}

function mcMostrarOpciones() {
    const caso = mcCasos[mcIndex];
    const opcionesEl = document.getElementById('mcOpciones');

    // Barajar opciones
    const indices = caso.opciones.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    opcionesEl.innerHTML = indices.map(i => `
        <button class="mc-opcion" onclick="mcResponder(${i}, this)">
            ${caso.opciones[i]}
        </button>
    `).join('');

    document.getElementById('mcDiagnosticarBtn').style.display = 'block';
    // Scroll suave hacia el final
    scrollToBottom(document.getElementById('mcDiagnosticarBtn'), 200);
}

function mcResponder(indiceOriginal, btnPresionado) {
    if (mcRespondido) return;
    mcRespondido = true;

    const caso = mcCasos[mcIndex];
    const correcto = indiceOriginal === caso.correcta;

    // Bloquear todos los botones
    document.querySelectorAll('.mc-opcion').forEach(b => {
        b.onclick = null;
        if (parseInt(b.getAttribute('data-index')) === caso.correcta) b.classList.add('correcta');
    });

    if (correcto) {
        btnPresionado.classList.add('correcta');
        mcPuntosTotal += 10;
        document.getElementById('mcPuntos').textContent = `⭐ ${mcPuntosTotal}`;
        playSound('correcto');
        if (mcPuntosTotal % 50 === 0) Animations.confetti();

        const prev = AchievementSystem.getStats();
        const upd = {
            correct: (prev.correct||0)+1,
            totalAnswered: (prev.totalAnswered||0)+1,
            diagCorrectas: (prev.diagCorrectas||0)+1,
            maxStreak: Math.max(prev.maxStreak||0, 1),
        };
        AchievementSystem.saveStats(upd);
        AchievementSystem.check(upd);
    } else {
        btnPresionado.classList.add('incorrecta');
        // Marcar la correcta en verde
        document.querySelectorAll('.mc-opcion').forEach(b => {
            if (b.textContent.trim() === caso.opciones[caso.correcta]) b.classList.add('correcta');
        });
        playSound('incorrecto');
        Animations.shake(btnPresionado);

        const prev = AchievementSystem.getStats();
        AchievementSystem.saveStats({ totalAnswered: (prev.totalAnswered||0)+1 });
        AchievementSystem.check(AchievementSystem.getStats());
    }

    // Mostrar explicación
    const expDiv = document.getElementById('mcExplicacion');
    expDiv.style.display = 'block';
    expDiv.style.borderColor = correcto ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.3)';
    expDiv.style.background = correcto ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.06)';
    document.getElementById('mcExplicacionTexto').innerHTML = `
        <strong style="color:${correcto ? '#34d399' : '#fca5a5'};">${correcto ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong>
        <br><br>${caso.explicacion}
        ${caso.clave ? `<br><br><span style="color:#f59e0b;font-size:0.82rem;font-weight:700;">🔑 Clave: ${caso.clave}</span>` : ''}
    `;

    // Si es el último caso, cambiar el botón
    if (mcIndex >= mcCasos.length - 1) {
        document.getElementById('mcSiguienteBtn').textContent = '🏁 Ver resultados';
    }

    scrollToBottom(expDiv, 150);
}

function mcSiguienteCaso() {
    mcIndex++;
    if (mcIndex >= mcCasos.length) {
        mcMostrarResultado();
    } else {
        mcRenderCaso();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function mcMostrarResultado() {
    playSound('fin');
    const total = mcCasos.length;
    const pct = Math.round((mcPuntosTotal / (total * 10)) * 100);
    if (pct >= 60) setTimeout(() => Animations.confetti(), 300);

    document.getElementById('modoClinicoScreen').innerHTML = `
        <div style="text-align:center;padding:2rem 0;">
            <div style="font-size:4rem;margin-bottom:1rem;">${pct >= 80 ? '🏆' : pct >= 60 ? '🩺' : '📚'}</div>
            <h2 style="color:#14b8a6;font-size:1.8rem;margin-bottom:0.5rem;">Modo Clínico</h2>
            <div style="font-size:3rem;font-weight:900;color:white;margin:0.5rem 0;">${mcPuntosTotal} pts</div>
            <div style="color:#94a3b8;margin-bottom:2rem;">${pct}% de efectividad diagnóstica</div>
            <div style="background:rgba(20,184,166,0.08);border:1px solid rgba(20,184,166,0.2);border-radius:16px;padding:1.25rem;margin-bottom:2rem;text-align:left;">
                <div style="color:#94a3b8;font-size:0.85rem;margin-bottom:0.5rem;font-weight:600;">Tu rendimiento:</div>
                <div style="color:#e2e8f0;font-size:1rem;line-height:1.8;">
                    🩺 ${total} casos examinados<br>
                    ⭐ ${mcPuntosTotal} / ${total * 10} puntos<br>
                    🎯 ${pct}% de diagnósticos correctos
                </div>
            </div>
            <button onclick="iniciarModoClinico()" style="width:100%;padding:1rem;background:linear-gradient(135deg,#0e7490,#14b8a6);border:none;border-radius:14px;color:white;font-weight:700;font-size:1rem;cursor:pointer;margin-bottom:0.75rem;">🔄 Volver a jugar</button>
            <button onclick="showScreen('juegosScreen')" style="width:100%;padding:0.85rem;background:transparent;border:1px solid rgba(100,116,139,0.3);border-radius:14px;color:#94a3b8;font-weight:600;font-size:0.95rem;cursor:pointer;">← Volver a Juegos</button>
        </div>
    `;
}
