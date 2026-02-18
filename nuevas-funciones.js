// ============================================
// MEDIPREP SMART — NUEVAS FUNCIONES v2.0
// SRS · Dashboard · Pomodoro · Plan Estudio
// Glosario · Flashcards · Historial Exámenes
// ============================================

// ══════════════════════════════════════════════════════
// 1. HISTORIAL DE EXÁMENES
// ══════════════════════════════════════════════════════
const ExamHistory = {
    save(tipo, score, correct, total, timeSeconds) {
        const history = this.getAll();
        history.push({
            id: Date.now(),
            tipo,
            score,
            correct,
            total,
            timeSeconds,
            fecha: new Date().toISOString()
        });
        // Mantener solo los últimos 30
        const trimmed = history.slice(-30);
        localStorage.setItem('mediprep_exam_history', JSON.stringify(trimmed));
    },
    getAll() {
        try { return JSON.parse(localStorage.getItem('mediprep_exam_history') || '[]'); }
        catch { return []; }
    },
    getLast(n = 10) {
        return this.getAll().slice(-n).reverse();
    },
    clear() {
        localStorage.setItem('mediprep_exam_history', '[]');
    }
};

// Parchear endQuiz para guardar historial automáticamente
window.addEventListener('load', () => {
    const _origEndQuiz = window.endQuiz;
    if (_origEndQuiz) {
        window.endQuiz = function() {
            _origEndQuiz.call(this);
            // Guardar en historial
            const total = currentQuestions.length;
            const score = Math.round((correctAnswers / total) * 100);
            const tipo = isExamMode ? 'Examen' : 'Quiz';
            const timeUsedSec = Math.floor((Date.now() - startTime) / 1000);
            ExamHistory.save(tipo, score, correctAnswers, total, timeUsedSec);
        };
    }
});


// ══════════════════════════════════════════════════════
// 2. SISTEMA SRS — REPETICIÓN ESPACIADA (SM-2)
// ══════════════════════════════════════════════════════
const SRSSystem = {
    _key: 'mediprep_srs_cards',

    getAll() {
        try { return JSON.parse(localStorage.getItem(this._key) || '[]'); }
        catch { return []; }
    },

    _save(cards) {
        localStorage.setItem(this._key, JSON.stringify(cards));
    },

    // Agregar pregunta al sistema SRS (cuando se falla)
    addCard(pregunta, respuestaCorrecta, explicacion, categoria) {
        const cards = this.getAll();
        const exists = cards.find(c => c.pregunta === pregunta);
        if (exists) return; // ya existe
        cards.push({
            id: 'srs_' + Date.now() + Math.random(),
            pregunta,
            respuestaCorrecta,
            explicacion,
            categoria: categoria || 'general',
            interval: 1,        // días hasta próxima revisión
            repetitions: 0,     // veces revisadas correctamente
            easeFactor: 2.5,    // factor de facilidad SM-2
            nextReview: new Date().toISOString(), // se puede revisar hoy
            createdAt: new Date().toISOString()
        });
        this._save(cards);
    },

    // Obtener tarjetas vencidas (nextReview <= hoy)
    getDueCards() {
        const now = new Date();
        return this.getAll().filter(c => new Date(c.nextReview) <= now);
    },

    // Actualizar una tarjeta después de revisarla
    // quality: 0-5 (0-1 = olvidó, 2 = difícil, 3 = bien, 4 = fácil, 5 = perfecto)
    updateCard(cardId, quality) {
        const cards = this.getAll();
        const card = cards.find(c => c.id === cardId);
        if (!card) return;

        // Algoritmo SM-2
        if (quality < 3) {
            // Falló: reiniciar
            card.repetitions = 0;
            card.interval = 1;
        } else {
            // Correcto
            if (card.repetitions === 0) {
                card.interval = 1;
            } else if (card.repetitions === 1) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.easeFactor);
            }
            card.repetitions++;
        }

        // Actualizar factor de facilidad
        card.easeFactor = Math.max(1.3,
            card.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
        );

        // Calcular próxima revisión
        const next = new Date();
        next.setDate(next.getDate() + card.interval);
        card.nextReview = next.toISOString();
        card.lastReviewed = new Date().toISOString();

        this._save(cards);
        return card;
    },

    getStats() {
        const all = this.getAll();
        const due = this.getDueCards();
        const mastered = all.filter(c => c.repetitions >= 5);
        return { total: all.length, due: due.length, mastered: mastered.length };
    }
};

// Hook al WrongAnswersBank para sincronizar con SRS
const _origWrongAdd = WrongAnswersBank.add.bind(WrongAnswersBank);
WrongAnswersBank.add = function(pregunta, tuRespuesta, correcta, explicacion, categoria) {
    _origWrongAdd(pregunta, tuRespuesta, correcta, explicacion, categoria);
    SRSSystem.addCard(pregunta, correcta, explicacion, categoria);
};


// ── Variables de sesión SRS ────────────────────────────
let srsSessionCards = [];
let srsSessionIndex = 0;
let srsSessionCorrect = 0;
let srsSessionTotal = 0;
let srsMostrandoRespuesta = false;

function iniciarSRS() {
    const due = SRSSystem.getDueCards();
    if (due.length === 0) {
        const stats = SRSSystem.getStats();
        renderSRSEmpty(stats);
        showScreen('srsScreen');
        return;
    }
    srsSessionCards = shuffle([...due]).slice(0, 20);
    srsSessionIndex = 0;
    srsSessionCorrect = 0;
    srsSessionTotal = srsSessionCards.length;
    srsMostrandoRespuesta = false;
    showScreen('srsScreen');
    renderSRSCard();
}

function renderSRSEmpty(stats) {
    document.getElementById('srsContent').innerHTML = `
        <div style="text-align:center;padding:3rem 1rem;">
            <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
            <h2 style="color:#10b981;font-size:1.5rem;font-weight:800;margin-bottom:0.5rem;">¡Al día con el repaso!</h2>
            <p style="color:#94a3b8;margin-bottom:1.5rem;">No tienes tarjetas pendientes para hoy.</p>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin-bottom:2rem;">
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#6ee7b7;font-weight:700;margin-bottom:0.25rem;">TOTAL</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#10b981;">${stats.total}</div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#fcd34d;font-weight:700;margin-bottom:0.25rem;">PENDIENTES</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#f59e0b;">${stats.due}</div>
                </div>
                <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#a5b4fc;font-weight:700;margin-bottom:0.25rem;">DOMINADAS</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#6366f1;">${stats.mastered}</div>
                </div>
            </div>
            <button onclick="goHome()" style="width:100%;padding:1rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:14px;color:white;font-weight:700;font-size:1rem;cursor:pointer;">← Volver al Inicio</button>
        </div>`;
}

function renderSRSCard() {
    if (srsSessionIndex >= srsSessionTotal) {
        renderSRSResults();
        return;
    }
    const card = srsSessionCards[srsSessionIndex];
    srsMostrandoRespuesta = false;
    const progress = Math.round((srsSessionIndex / srsSessionTotal) * 100);

    document.getElementById('srsContent').innerHTML = `
        <!-- Progreso -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;font-size:0.8rem;color:#64748b;">
            <span>Tarjeta ${srsSessionIndex + 1} de ${srsSessionTotal}</span>
            <span style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);padding:0.2rem 0.6rem;border-radius:10px;color:#a5b4fc;font-weight:600;">${card.categoria}</span>
        </div>
        <div style="background:rgba(99,102,241,0.08);border-radius:8px;height:6px;margin-bottom:1.5rem;overflow:hidden;">
            <div style="height:100%;width:${progress}%;background:linear-gradient(90deg,#6366f1,#818cf8);border-radius:8px;transition:width 0.4s;"></div>
        </div>

        <!-- Tarjeta principal -->
        <div id="srsCardBox" style="background:linear-gradient(135deg,rgba(13,17,31,0.95),rgba(16,22,42,0.9));border:1.5px solid rgba(99,102,241,0.25);border-radius:20px;padding:2rem;min-height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;margin-bottom:1.5rem;position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <div style="font-size:0.7rem;font-weight:700;color:#6366f1;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1rem;">PREGUNTA</div>
            <div id="srsPregunta" style="font-size:1.1rem;font-weight:600;color:#f1f5f9;line-height:1.65;">${card.pregunta}</div>
        </div>

        <!-- Botón ver respuesta -->
        <div id="srsBtns">
            <button onclick="srsVerRespuesta()" style="width:100%;padding:1rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:14px;color:white;font-weight:700;font-size:1rem;cursor:pointer;margin-bottom:0.75rem;">
                👁️ Ver Respuesta
            </button>
        </div>
    `;
}

function srsVerRespuesta() {
    if (srsMostrandoRespuesta) return;
    srsMostrandoRespuesta = true;
    const card = srsSessionCards[srsSessionIndex];

    // Mostrar respuesta en la tarjeta
    const cardBox = document.getElementById('srsCardBox');
    cardBox.innerHTML = `
        <div style="font-size:0.7rem;font-weight:700;color:#10b981;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:0.75rem;">RESPUESTA</div>
        <div style="font-size:1rem;font-weight:600;color:#f1f5f9;line-height:1.65;white-space:pre-line;margin-bottom:1rem;">${card.respuestaCorrecta}</div>
        ${card.explicacion ? `<div style="font-size:0.82rem;color:#94a3b8;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);padding:0.75rem;border-radius:10px;line-height:1.6;"><strong style="color:#a5b4fc;">💡</strong> ${card.explicacion}</div>` : ''}
    `;
    cardBox.style.borderColor = 'rgba(16,185,129,0.3)';

    // Botones de calificación
    document.getElementById('srsBtns').innerHTML = `
        <div style="font-size:0.8rem;color:#64748b;text-align:center;margin-bottom:0.75rem;font-weight:600;">¿Qué tan bien lo recordaste?</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;">
            <button onclick="srsResponder(1)" style="padding:0.85rem 0.5rem;background:rgba(239,68,68,0.15);border:1.5px solid rgba(239,68,68,0.4);border-radius:12px;color:#fca5a5;font-weight:700;font-size:0.82rem;cursor:pointer;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(239,68,68,0.25)'" onmouseout="this.style.background='rgba(239,68,68,0.15)'">
                😰 Olvidé<br><span style="font-size:0.65rem;opacity:0.7;">Repasar pronto</span>
            </button>
            <button onclick="srsResponder(3)" style="padding:0.85rem 0.5rem;background:rgba(245,158,11,0.15);border:1.5px solid rgba(245,158,11,0.4);border-radius:12px;color:#fcd34d;font-weight:700;font-size:0.82rem;cursor:pointer;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(245,158,11,0.25)'" onmouseout="this.style.background='rgba(245,158,11,0.15)'">
                🤔 Difícil<br><span style="font-size:0.65rem;opacity:0.7;">En 6 días</span>
            </button>
            <button onclick="srsResponder(5)" style="padding:0.85rem 0.5rem;background:rgba(16,185,129,0.15);border:1.5px solid rgba(16,185,129,0.4);border-radius:12px;color:#6ee7b7;font-weight:700;font-size:0.82rem;cursor:pointer;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(16,185,129,0.25)'" onmouseout="this.style.background='rgba(16,185,129,0.15)'">
                💪 Fácil<br><span style="font-size:0.65rem;opacity:0.7;">Más tarde</span>
            </button>
        </div>
    `;
}

function srsResponder(quality) {
    const card = srsSessionCards[srsSessionIndex];
    SRSSystem.updateCard(card.id, quality);
    if (quality >= 3) srsSessionCorrect++;
    srsSessionIndex++;
    setTimeout(() => renderSRSCard(), 200);
}

function renderSRSResults() {
    const pct = Math.round((srsSessionCorrect / srsSessionTotal) * 100);
    document.getElementById('srsContent').innerHTML = `
        <div style="text-align:center;padding:2rem 0;">
            <div style="font-size:4rem;margin-bottom:0.75rem;">${pct >= 70 ? '🏆' : pct >= 40 ? '📚' : '💪'}</div>
            <div style="font-size:2.5rem;font-weight:900;color:${pct >= 70 ? '#10b981' : '#f59e0b'};margin-bottom:0.25rem;">${pct}%</div>
            <div style="color:#94a3b8;margin-bottom:2rem;">Sesión de repaso completada</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:2rem;">
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#6ee7b7;font-weight:700;margin-bottom:0.25rem;">RECORDADAS</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#10b981;">${srsSessionCorrect}</div>
                </div>
                <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#fca5a5;font-weight:700;margin-bottom:0.25rem;">A REFORZAR</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#ef4444;">${srsSessionTotal - srsSessionCorrect}</div>
                </div>
            </div>
            <button onclick="iniciarSRS()" style="width:100%;padding:1rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:14px;color:white;font-weight:700;font-size:1rem;cursor:pointer;margin-bottom:0.75rem;">🔄 Otra sesión</button>
            <button onclick="goHome()" style="width:100%;padding:0.85rem;background:transparent;border:1px solid rgba(100,116,139,0.3);border-radius:14px;color:#94a3b8;font-weight:600;cursor:pointer;">← Inicio</button>
        </div>`;
}


// ══════════════════════════════════════════════════════
// 3. DASHBOARD DE ANALÍTICAS
// ══════════════════════════════════════════════════════
function renderDashboard() {
    const stats = AchievementSystem.getStats();
    const history = ExamHistory.getLast(10);
    const wrongBank = WrongAnswersBank.getAll();
    const srsStats = SRSSystem.getStats();
    const correct = stats.correct || 0;
    const total = stats.totalAnswered || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Calcular tendencia (últimos 5 exámenes)
    const trend = history.slice(0, 5).map(h => h.score);
    const avgTrend = trend.length > 0 ? Math.round(trend.reduce((a,b) => a+b, 0) / trend.length) : 0;

    // Categorías de incorrectas para radar
    const catMap = {};
    wrongBank.forEach(q => {
        const cat = q.categoria || 'general';
        catMap[cat] = (catMap[cat] || 0) + 1;
    });
    const topCats = Object.entries(catMap).sort((a,b) => b[1]-a[1]).slice(0, 5);

    const dashEl = document.getElementById('dashboardContent');
    if (!dashEl) return;

    dashEl.innerHTML = `
    <!-- ── MÉTRICAS PRINCIPALES ── -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.75rem;margin-bottom:1.5rem;">
        <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#6ee7b7;font-weight:700;margin-bottom:0.3rem;">✅ CORRECTAS</div>
            <div style="font-size:2rem;font-weight:900;color:#10b981;">${correct.toLocaleString()}</div>
        </div>
        <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#a5b4fc;font-weight:700;margin-bottom:0.3rem;">🎯 PRECISIÓN</div>
            <div style="font-size:2rem;font-weight:900;color:#6366f1;">${accuracy}%</div>
        </div>
        <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#fcd34d;font-weight:700;margin-bottom:0.3rem;">🔥 RACHA MÁX</div>
            <div style="font-size:2rem;font-weight:900;color:#f59e0b;">${stats.maxStreak || 0}</div>
        </div>
        <div style="background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#7dd3fc;font-weight:700;margin-bottom:0.3rem;">🧠 SRS HOY</div>
            <div style="font-size:2rem;font-weight:900;color:#38bdf8;">${srsStats.due}</div>
        </div>
    </div>

    <!-- ── HISTORIAL DE EXÁMENES ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">📈 Últimos Resultados</div>
        ${history.length === 0 ? '<div style="text-align:center;color:#475569;padding:1rem;font-size:0.85rem;">Aún no hay exámenes registrados.<br>¡Haz tu primer simulacro!</div>' :
        `<div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${history.slice(0,6).map(h => {
                const d = new Date(h.fecha);
                const dateStr = `${d.getDate()}/${d.getMonth()+1}`;
                const color = h.score >= 80 ? '#10b981' : h.score >= 60 ? '#f59e0b' : '#ef4444';
                const min = Math.floor(h.timeSeconds/60);
                const sec = h.timeSeconds % 60;
                return `<div style="display:flex;align-items:center;gap:0.75rem;background:rgba(255,255,255,0.03);border-radius:10px;padding:0.6rem 0.85rem;">
                    <div style="font-size:0.7rem;color:#64748b;width:32px;flex-shrink:0;">${dateStr}</div>
                    <div style="flex:1;background:rgba(100,116,139,0.15);border-radius:4px;height:8px;overflow:hidden;">
                        <div style="height:100%;width:${h.score}%;background:${color};border-radius:4px;transition:width 0.6s;"></div>
                    </div>
                    <div style="font-weight:800;color:${color};font-size:0.9rem;width:38px;text-align:right;">${h.score}%</div>
                    <div style="font-size:0.7rem;color:#475569;width:36px;">${min}:${String(sec).padStart(2,'0')}</div>
                </div>`;
            }).join('')}
        </div>`}
        ${history.length > 0 && avgTrend > 0 ? `<div style="margin-top:0.75rem;padding:0.6rem 0.85rem;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;font-size:0.78rem;color:#a5b4fc;"><strong>Promedio reciente:</strong> ${avgTrend}%</div>` : ''}
    </div>

    <!-- ── ÁREAS DÉBILES ── -->
    ${topCats.length > 0 ? `
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">⚠️ Áreas a Reforzar</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${topCats.map(([cat, count], i) => {
                const max = topCats[0][1];
                const pct = Math.round((count / max) * 100);
                const colors = ['#ef4444','#fb923c','#f59e0b','#84cc16','#14b8a6'];
                const col = colors[i] || '#94a3b8';
                return `<div style="display:flex;align-items:center;gap:0.75rem;">
                    <div style="font-size:0.8rem;color:#94a3b8;width:120px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cat}</div>
                    <div style="flex:1;background:rgba(100,116,139,0.15);border-radius:4px;height:10px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:${col};border-radius:4px;"></div>
                    </div>
                    <div style="font-weight:700;color:${col};font-size:0.8rem;width:24px;">${count}</div>
                </div>`;
            }).join('')}
        </div>
    </div>` : ''}

    <!-- ── SRS STATS ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">🧠 Repetición Espaciada</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;">
            <div style="text-align:center;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#6366f1;">${srsStats.total}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Tarjetas</div>
            </div>
            <div style="text-align:center;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#f59e0b;">${srsStats.due}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Pendientes</div>
            </div>
            <div style="text-align:center;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#10b981;">${srsStats.mastered}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Dominadas</div>
            </div>
        </div>
        ${srsStats.due > 0 ? `<button onclick="iniciarSRS()" style="width:100%;margin-top:0.75rem;padding:0.8rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:10px;color:white;font-weight:700;cursor:pointer;font-size:0.9rem;">Repasar ${srsStats.due} tarjeta${srsStats.due !== 1 ? 's' : ''} ahora →</button>` : ''}
    </div>

    <!-- ── TOTAL RESPONDIDAS ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.75rem;">📊 Resumen Global</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.9rem;">
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Total respondidas</span><span style="color:#f1f5f9;font-weight:700;">${total.toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Correctas</span><span style="color:#10b981;font-weight:700;">${correct.toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Incorrectas</span><span style="color:#ef4444;font-weight:700;">${(total - correct).toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Precisión global</span><span style="color:#6366f1;font-weight:700;">${accuracy}%</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Exámenes completados</span><span style="color:#f59e0b;font-weight:700;">${history.length}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Logros desbloqueados</span><span style="color:#fcd34d;font-weight:700;">${AchievementSystem._getUnlocked().length} / ${typeof ACHIEVEMENTS !== 'undefined' ? ACHIEVEMENTS.length : '?'}</span></div>
        </div>
    </div>`;
}


// ══════════════════════════════════════════════════════
// 4. GLOSARIO MÉDICO BUSCABLE
// ══════════════════════════════════════════════════════
let glosarioFiltroCategoria = 'Todos';
let glosarioQuery = '';

function renderGlosario() {
    const contenedor = document.getElementById('glosarioContent');
    if (!contenedor) return;

    // Filtrar
    let items = GLOSARIO_DATA;
    if (glosarioFiltroCategoria !== 'Todos') {
        items = items.filter(t => t.categoria === glosarioFiltroCategoria);
    }
    if (glosarioQuery.trim()) {
        const q = glosarioQuery.toLowerCase().trim();
        items = items.filter(t =>
            t.termino.toLowerCase().includes(q) ||
            t.definicion.toLowerCase().includes(q) ||
            t.categoria.toLowerCase().includes(q)
        );
    }

    // Renderizar categorías (chips)
    const categorias = ['Todos', ...GLOSARIO_CATEGORIAS];
    document.getElementById('glosarioCategorias').innerHTML = categorias.map(cat => {
        const active = glosarioFiltroCategoria === cat;
        return `<button onclick="filtrarGlosario('${cat}')" style="
            padding:0.4rem 0.9rem;border-radius:20px;border:1.5px solid ${active ? 'rgba(99,102,241,0.7)' : 'rgba(100,116,139,0.25)'};
            background:${active ? 'rgba(99,102,241,0.2)' : 'transparent'};
            color:${active ? '#a5b4fc' : '#64748b'};font-size:0.75rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:all 0.15s;
        ">${cat}</button>`;
    }).join('');

    if (items.length === 0) {
        contenedor.innerHTML = `<div style="text-align:center;padding:3rem 1rem;color:#475569;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🔍</div>
            <div>No se encontraron términos</div>
        </div>`;
        return;
    }

    contenedor.innerHTML = items.map(t => `
        <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:1.1rem;margin-bottom:0.75rem;cursor:pointer;"
            onclick="toggleGlosarioItem('gexp_${t.id}')">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;">
                <div style="display:flex;align-items:center;gap:0.6rem;">
                    <span style="font-size:1.2rem;">${t.icono}</span>
                    <div>
                        <div style="font-weight:700;color:#f1f5f9;font-size:0.95rem;">${t.termino}</div>
                        <div style="font-size:0.68rem;color:#6366f1;font-weight:600;margin-top:0.15rem;">${t.categoria}</div>
                    </div>
                </div>
                <span id="gexp_${t.id}_arrow" style="color:#475569;font-size:0.9rem;transition:transform 0.2s;">▼</span>
            </div>
            <div id="gexp_${t.id}" style="display:none;margin-top:0.9rem;padding-top:0.9rem;border-top:1px solid rgba(255,255,255,0.06);">
                <p style="color:#cbd5e1;font-size:0.88rem;line-height:1.65;margin-bottom:0.75rem;">${t.definicion}</p>
                ${t.ejemplo ? `<div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:0.6rem 0.85rem;font-size:0.82rem;color:#a5b4fc;"><strong>📌 Ejemplo:</strong> ${t.ejemplo}</div>` : ''}
            </div>
        </div>
    `).join('');

    // Contador
    const countEl = document.getElementById('glosarioCount');
    if (countEl) countEl.textContent = `${items.length} términos`;
}

function toggleGlosarioItem(id) {
    const el = document.getElementById(id);
    const arrow = document.getElementById(id + '_arrow');
    if (!el) return;
    const isOpen = el.style.display !== 'none';
    el.style.display = isOpen ? 'none' : 'block';
    if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function filtrarGlosario(categoria) {
    glosarioFiltroCategoria = categoria;
    renderGlosario();
}

function buscarGlosario(query) {
    glosarioQuery = query;
    renderGlosario();
}


// ══════════════════════════════════════════════════════
// 5. FLASHCARDS
// ══════════════════════════════════════════════════════
let fcCards = [];
let fcIndex = 0;
let fcVolteo = false;
let fcModulo = 'Todos';
let fcCorrect = 0;
let fcIncorrect = 0;

function iniciarFlashcards(modulo = 'Todos') {
    fcModulo = modulo;
    const pool = modulo === 'Todos' ? FLASHCARDS_DATA :
        FLASHCARDS_DATA.filter(c => c.modulo === modulo);
    fcCards = shuffle([...pool]);
    fcIndex = 0;
    fcVolteo = false;
    fcCorrect = 0;
    fcIncorrect = 0;
    showScreen('flashcardsScreen');
    renderFlashcard();
}

function renderFlashcardMenu() {
    const modulos = ['Todos', ...new Set(FLASHCARDS_DATA.map(c => c.modulo))];
    document.getElementById('flashcardsMenuContent').innerHTML = `
        <div style="margin-bottom:1rem;color:#94a3b8;font-size:0.85rem;">${FLASHCARDS_DATA.length} tarjetas disponibles</div>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
            ${modulos.map(m => {
                const count = m === 'Todos' ? FLASHCARDS_DATA.length : FLASHCARDS_DATA.filter(c => c.modulo === m).length;
                return `<button onclick="iniciarFlashcards('${m}')" style="width:100%;padding:0.9rem 1.1rem;background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.08);border-radius:12px;color:#f1f5f9;font-weight:600;font-size:0.9rem;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;transition:all 0.15s;"
                    onmouseover="this.style.borderColor='rgba(99,102,241,0.5)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                    <span>${m === 'Todos' ? '📚 Todos los módulos' : '📖 ' + m}</span>
                    <span style="background:rgba(99,102,241,0.2);border:1px solid rgba(99,102,241,0.3);padding:0.15rem 0.5rem;border-radius:8px;font-size:0.75rem;color:#a5b4fc;">${count}</span>
                </button>`;
            }).join('')}
        </div>`;
}

function renderFlashcard() {
    if (fcIndex >= fcCards.length) {
        renderFlashcardResults();
        return;
    }
    const card = fcCards[fcIndex];
    fcVolteo = false;
    const progress = Math.round((fcIndex / fcCards.length) * 100);

    document.getElementById('flashcardsContent').innerHTML = `
        <!-- Header -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;font-size:0.78rem;color:#64748b;">
            <span>${fcIndex + 1} / ${fcCards.length}</span>
            <span style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.25);padding:0.2rem 0.6rem;border-radius:8px;color:#818cf8;">${card.modulo}</span>
        </div>
        <div style="background:rgba(99,102,241,0.12);border-radius:6px;height:4px;margin-bottom:1.25rem;overflow:hidden;">
            <div style="height:100%;width:${progress}%;background:linear-gradient(90deg,${card.color || '#6366f1'},#818cf8);transition:width 0.4s;"></div>
        </div>

        <!-- Tarjeta flip -->
        <div id="fcCardOuter" onclick="flipFlashcard()" style="cursor:pointer;perspective:1000px;margin-bottom:1.25rem;">
            <div id="fcCardInner" style="position:relative;transition:transform 0.5s;transform-style:preserve-3d;min-height:220px;">
                <!-- Frente -->
                <div style="background:linear-gradient(135deg,rgba(13,17,31,0.97),rgba(16,24,44,0.95));border:1.5px solid rgba(99,102,241,0.3);border-radius:20px;padding:2rem;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.05);">
                    <div style="font-size:2.5rem;margin-bottom:1rem;">${card.icono}</div>
                    <div style="font-size:0.68rem;font-weight:700;color:${card.color || '#6366f1'};letter-spacing:2px;text-transform:uppercase;margin-bottom:0.75rem;">PREGUNTA</div>
                    <div style="font-size:1.05rem;font-weight:600;color:#f1f5f9;line-height:1.6;">${card.frente}</div>
                    <div style="margin-top:1.25rem;font-size:0.72rem;color:#374151;font-weight:600;">Toca para ver la respuesta 👆</div>
                </div>
            </div>
        </div>

        <!-- Botones de acción -->
        <div id="fcBtnArea">
            <div style="display:flex;gap:0.6rem;">
                <button onclick="fcRespuesta(false)" style="flex:1;padding:0.85rem;background:rgba(239,68,68,0.15);border:1.5px solid rgba(239,68,68,0.35);border-radius:12px;color:#fca5a5;font-weight:700;cursor:pointer;font-size:0.85rem;"
                    onmouseover="this.style.background='rgba(239,68,68,0.25)'" onmouseout="this.style.background='rgba(239,68,68,0.15)'">
                    ❌ No la sabía
                </button>
                <button onclick="fcRespuesta(true)" style="flex:1;padding:0.85rem;background:rgba(16,185,129,0.15);border:1.5px solid rgba(16,185,129,0.35);border-radius:12px;color:#6ee7b7;font-weight:700;cursor:pointer;font-size:0.85rem;"
                    onmouseover="this.style.background='rgba(16,185,129,0.25)'" onmouseout="this.style.background='rgba(16,185,129,0.15)'">
                    ✅ La sabía
                </button>
            </div>
        </div>
    `;
}

function flipFlashcard() {
    const card = fcCards[fcIndex];
    const inner = document.getElementById('fcCardInner');
    if (!inner) return;

    if (!fcVolteo) {
        fcVolteo = true;
        // Mostrar reverso
        inner.innerHTML = `
            <div style="background:linear-gradient(135deg,rgba(13,31,17,0.97),rgba(13,28,22,0.95));border:1.5px solid rgba(16,185,129,0.4);border-radius:20px;padding:2rem;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.5);">
                <div style="font-size:0.68rem;font-weight:700;color:#10b981;letter-spacing:2px;text-transform:uppercase;margin-bottom:1rem;">RESPUESTA</div>
                <div style="font-size:0.98rem;font-weight:600;color:#f1f5f9;line-height:1.7;white-space:pre-line;">${card.reverso}</div>
            </div>`;
        playSound('voltear');
    } else {
        // Volver al frente
        fcVolteo = false;
        renderFlashcard();
    }
}

function fcRespuesta(correcto) {
    if (correcto) fcCorrect++;
    else fcIncorrect++;
    fcIndex++;
    setTimeout(() => renderFlashcard(), 150);
}

function renderFlashcardResults() {
    const total = fcCards.length;
    const pct = total > 0 ? Math.round((fcCorrect / total) * 100) : 0;
    document.getElementById('flashcardsContent').innerHTML = `
        <div style="text-align:center;padding:2rem 0;">
            <div style="font-size:4rem;margin-bottom:0.75rem;">${pct >= 80 ? '🏆' : pct >= 50 ? '📚' : '💪'}</div>
            <div style="font-size:2.5rem;font-weight:900;color:${pct >= 80 ? '#10b981' : '#f59e0b'};margin-bottom:0.25rem;">${pct}%</div>
            <div style="color:#94a3b8;margin-bottom:2rem;">Sesión de flashcards completada</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:2rem;">
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#6ee7b7;font-weight:700;margin-bottom:0.25rem;">SABÍAS</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#10b981;">${fcCorrect}</div>
                </div>
                <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:1rem;text-align:center;">
                    <div style="font-size:0.7rem;color:#fca5a5;font-weight:700;margin-bottom:0.25rem;">A REPASAR</div>
                    <div style="font-size:1.8rem;font-weight:800;color:#ef4444;">${fcIncorrect}</div>
                </div>
            </div>
            <button onclick="iniciarFlashcards('${fcModulo}')" style="width:100%;padding:1rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:14px;color:white;font-weight:700;font-size:1rem;cursor:pointer;margin-bottom:0.75rem;">🔄 Repetir mazo</button>
            <button onclick="showScreen('flashcardsMenuScreen')" style="width:100%;padding:0.85rem;background:transparent;border:1px solid rgba(100,116,139,0.3);border-radius:14px;color:#94a3b8;font-weight:600;cursor:pointer;">← Elegir módulo</button>
        </div>`;
}


// ══════════════════════════════════════════════════════
// 6. PLAN DE ESTUDIO AUTOMÁTICO
// ══════════════════════════════════════════════════════
function generarPlanEstudio() {
    const fechaInput = document.getElementById('planFechaExamen');
    const horasInput = document.getElementById('planHorasDia');

    if (!fechaInput || !horasInput) return;

    const fechaExamen = new Date(fechaInput.value);
    const horasDia = parseFloat(horasInput.value) || 2;

    if (!fechaInput.value) {
        alert('Por favor selecciona la fecha de tu examen.');
        return;
    }

    const hoy = new Date();
    hoy.setHours(0,0,0,0);
    const diasRestantes = Math.ceil((fechaExamen - hoy) / (1000 * 60 * 60 * 24));

    if (diasRestantes <= 0) {
        alert('La fecha del examen debe ser en el futuro.');
        return;
    }

    // Calcular horas totales disponibles
    const horasTotales = diasRestantes * horasDia;

    // Determinar prioridades basadas en áreas débiles
    const wrongBank = WrongAnswersBank.getAll();
    const catMap = {};
    wrongBank.forEach(q => {
        const cat = q.categoria || 'general';
        catMap[cat] = (catMap[cat] || 0) + 1;
    });

    // Distribución base (% de tiempo) por área
    const distribucion = [
        { nombre: 'Premedicina (Biología, Fisio)', porcentaje: 30, icono: '🧬', color: '#8b5cf6' },
        { nombre: 'Matemáticas y Estadística', porcentaje: 25, icono: '📐', color: '#6366f1' },
        { nombre: 'Comprensión de Textos', porcentaje: 20, icono: '📖', color: '#14b8a6' },
        { nombre: 'Redacción y Gramática', porcentaje: 15, icono: '✍️', color: '#f59e0b' },
        { nombre: 'Repaso y Simulacros', porcentaje: 10, icono: '🎯', color: '#ef4444' },
    ];

    // Ajustar si hay áreas débiles identificadas
    const tieneDebiles = Object.keys(catMap).length > 0;

    // Crear semanas del plan
    const semanas = [];
    let diaActual = new Date(hoy);
    let semanaNum = 1;

    while (diaActual < fechaExamen && semanas.length < 8) {
        const semanaInicio = new Date(diaActual);
        const semanaFin = new Date(diaActual);
        semanaFin.setDate(semanaFin.getDate() + 6);
        if (semanaFin > fechaExamen) semanaFin.setTime(fechaExamen.getTime());

        const diasSemana = Math.ceil((semanaFin - semanaInicio) / (1000 * 60 * 60 * 24)) + 1;
        const horasSemana = diasSemana * horasDia;

        // Enfoque de la semana
        let enfoque, descripcion;
        const totalSemanas = Math.ceil(diasRestantes / 7);
        const progreso = semanaNum / totalSemanas;

        if (progreso <= 0.3) {
            enfoque = 'Fundamentos';
            descripcion = 'Biología celular, Sistemas corporales, Álgebra básica';
        } else if (progreso <= 0.6) {
            enfoque = 'Profundización';
            descripcion = 'Sistemas avanzados, Resolución de problemas, Comprensión';
        } else if (progreso <= 0.85) {
            enfoque = 'Integración';
            descripcion = 'Casos clínicos, Matemáticas aplicadas, Redacción práctica';
        } else {
            enfoque = 'Repaso Final';
            descripcion = 'Simulacros completos, Repaso de incorrectas, Estrategias';
        }

        semanas.push({
            num: semanaNum,
            inicio: new Date(semanaInicio),
            fin: new Date(semanaFin),
            horas: horasSemana.toFixed(1),
            enfoque,
            descripcion
        });

        diaActual.setDate(diaActual.getDate() + 7);
        semanaNum++;
    }

    // Renderizar plan
    const contenedor = document.getElementById('planResultado');
    const formatFecha = d => d.toLocaleDateString('es-MX', { day:'numeric', month:'short' });

    contenedor.style.display = 'block';
    contenedor.innerHTML = `
        <!-- Resumen -->
        <div style="background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(16,185,129,0.1));border:1px solid rgba(99,102,241,0.3);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
            <div style="font-size:0.7rem;font-weight:700;color:#a5b4fc;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:0.75rem;">📅 Tu Plan Personalizado</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;text-align:center;">
                <div><div style="font-size:1.5rem;font-weight:800;color:#6366f1;">${diasRestantes}</div><div style="font-size:0.7rem;color:#64748b;">días</div></div>
                <div><div style="font-size:1.5rem;font-weight:800;color:#10b981;">${horasTotales.toFixed(0)}h</div><div style="font-size:0.7rem;color:#64748b;">estudio</div></div>
                <div><div style="font-size:1.5rem;font-weight:800;color:#f59e0b;">${horasDia}h</div><div style="font-size:0.7rem;color:#64748b;">por día</div></div>
            </div>
        </div>

        <!-- Distribución por área -->
        <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:1.1rem;margin-bottom:1.1rem;">
            <div style="font-size:0.72rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.85rem;">⏱️ Distribución de Tiempo</div>
            ${distribucion.map(d => {
                const horas = (horasTotales * d.porcentaje / 100).toFixed(1);
                return `<div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.6rem;">
                    <span style="font-size:1.1rem;">${d.icono}</span>
                    <div style="flex:1;">
                        <div style="display:flex;justify-content:space-between;margin-bottom:0.2rem;">
                            <span style="font-size:0.78rem;color:#94a3b8;">${d.nombre}</span>
                            <span style="font-size:0.75rem;color:${d.color};font-weight:700;">${horas}h (${d.porcentaje}%)</span>
                        </div>
                        <div style="background:rgba(100,116,139,0.15);border-radius:3px;height:6px;overflow:hidden;">
                            <div style="height:100%;width:${d.porcentaje}%;background:${d.color};border-radius:3px;"></div>
                        </div>
                    </div>
                </div>`;
            }).join('')}
        </div>

        <!-- Semanas -->
        <div style="font-size:0.72rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.75rem;">📆 Plan Semanal</div>
        ${semanas.map(s => {
            const colores = { 'Fundamentos':'#6366f1','Profundización':'#8b5cf6','Integración':'#14b8a6','Repaso Final':'#ef4444' };
            const col = colores[s.enfoque] || '#6366f1';
            return `<div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-left:3px solid ${col};border-radius:12px;padding:1rem;margin-bottom:0.6rem;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.4rem;">
                    <div>
                        <span style="font-weight:700;color:#f1f5f9;font-size:0.88rem;">Semana ${s.num}</span>
                        <span style="margin-left:0.5rem;background:rgba(${col.replace('#','').match(/.{2}/g).map(h=>parseInt(h,16)).join(',')},0.15);color:${col};font-size:0.65rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:6px;">${s.enfoque}</span>
                    </div>
                    <span style="font-size:0.72rem;color:#475569;">${formatFecha(s.inicio)} – ${formatFecha(s.fin)}</span>
                </div>
                <div style="font-size:0.78rem;color:#64748b;">${s.descripcion}</div>
                <div style="margin-top:0.4rem;font-size:0.72rem;color:#6366f1;font-weight:600;">${s.horas}h de estudio esta semana</div>
            </div>`;
        }).join('')}

        ${tieneDebiles ? `
        <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:12px;padding:1rem;margin-top:0.5rem;">
            <div style="font-size:0.75rem;font-weight:700;color:#f59e0b;margin-bottom:0.4rem;">⚠️ Áreas prioritarias detectadas</div>
            <div style="font-size:0.8rem;color:#94a3b8;">Basado en tu banco de incorrectas, dedica tiempo extra a: ${Object.keys(catMap).slice(0,3).join(', ')}.</div>
        </div>` : ''}

        <button onclick="guardarPlan()" style="width:100%;margin-top:1rem;padding:0.9rem;background:linear-gradient(135deg,#10b981,#059669);border:none;border-radius:12px;color:white;font-weight:700;cursor:pointer;">💾 Guardar Plan</button>
    `;

    // Guardar datos del plan
    localStorage.setItem('mediprep_plan', JSON.stringify({
        fechaExamen: fechaInput.value,
        horasDia,
        generado: new Date().toISOString()
    }));
}

function guardarPlan() {
    const btn = event.currentTarget;
    btn.textContent = '✅ Plan guardado';
    btn.style.background = 'linear-gradient(135deg,#6366f1,#4338ca)';
    setTimeout(() => { btn.textContent = '💾 Guardar Plan'; btn.style.background = 'linear-gradient(135deg,#10b981,#059669)'; }, 2500);
}

// Cargar plan guardado al abrir la pantalla
function cargarPlanGuardado() {
    const plan = localStorage.getItem('mediprep_plan');
    if (plan) {
        try {
            const p = JSON.parse(plan);
            const fi = document.getElementById('planFechaExamen');
            const hi = document.getElementById('planHorasDia');
            if (fi && p.fechaExamen) fi.value = p.fechaExamen;
            if (hi && p.horasDia) hi.value = p.horasDia;
        } catch {}
    }
}


// ══════════════════════════════════════════════════════
// 7. POMODORO INTEGRADO
// ══════════════════════════════════════════════════════
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
        fabEl.style.background = pomodoroMode === 'work' ? 'linear-gradient(135deg,#ef4444,#dc2626)' : 'linear-gradient(135deg,#10b981,#059669)';
    } else if (fabEl) {
        fabEl.textContent = '🍅';
        fabEl.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
    }

    // Actualizar barra de progreso
    const total = pomodoroMode === 'work' ? 25 * 60 : 5 * 60;
    const pct = ((total - pomodoroSecondsLeft) / total) * 100;
    const barEl = document.getElementById('pomodoroBar');
    if (barEl) barEl.style.width = pct + '%';
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
                playSound('fin');
                document.getElementById('pomodoroSession').textContent = pomodoroSession;
                const totalMins = Math.floor(pomodoroTotalFocusSeconds / 60);
                const tf = document.getElementById('pomodoroTotalFocus');
                if (tf) tf.textContent = totalMins + ' min';
                pomodoroMode = 'break';
                pomodoroSecondsLeft = 5 * 60;
                const modeEl = document.getElementById('pomodoroModeLabel');
                if (modeEl) {
                    modeEl.textContent = '☕ Descanso';
                    modeEl.style.color = '#10b981';
                }
                alert('🍅 ¡Pomodoro completado! Descansa 5 minutos.');
            } else {
                pomodoroMode = 'work';
                pomodoroSecondsLeft = 25 * 60;
                const modeEl = document.getElementById('pomodoroModeLabel');
                if (modeEl) {
                    modeEl.textContent = '🧠 Enfoque';
                    modeEl.style.color = '#ef4444';
                }
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
    const barEl = document.getElementById('pomodoroBar');
    if (barEl) barEl.style.width = '0%';
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
    const barEl = document.getElementById('pomodoroBar');
    if (barEl) barEl.style.width = '0%';
    updatePomodoroDisplay();
}


// ══════════════════════════════════════════════════════
// OVERRIDE showScreen para renderizar nuevas pantallas
// ══════════════════════════════════════════════════════
const _originalShowScreen = showScreen;
showScreen = function(screenId) {
    _originalShowScreen.call(this, screenId);
    if (screenId === 'dashboardScreen') renderDashboard();
    if (screenId === 'glosarioScreen') renderGlosario();
    if (screenId === 'flashcardsMenuScreen') renderFlashcardMenu();
    if (screenId === 'srsScreen') {
        const due = SRSSystem.getDueCards();
        if (srsSessionCards.length === 0) iniciarSRS();
    }
    if (screenId === 'planEstudioScreen') cargarPlanGuardado();
    if (screenId === 'pomodoroScreen') {
        updatePomodoroDisplay();
        const totalMins = Math.floor(pomodoroTotalFocusSeconds / 60);
        const tf = document.getElementById('pomodoroTotalFocus');
        if (tf) tf.textContent = totalMins + ' min';
        const se = document.getElementById('pomodoroSession');
        if (se) se.textContent = pomodoroSession;
    }
};

console.log('✅ MediPrep v2.0 — Nuevas funciones cargadas');
