// ============================================
// MEDIPREP SMART — SISTEMA SRS (SM-2)
// Repetición Espaciada — Spaced Repetition
// ============================================

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
        if (exists) return;
        cards.push({
            id: 'srs_' + Date.now() + Math.random(),
            pregunta,
            respuestaCorrecta,
            explicacion,
            categoria: categoria || 'general',
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5,
            nextReview: new Date().toISOString(),
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
            card.repetitions = 0;
            card.interval = 1;
        } else {
            if (card.repetitions === 0) {
                card.interval = 1;
            } else if (card.repetitions === 1) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.easeFactor);
            }
            card.repetitions++;
        }

        card.easeFactor = Math.max(1.3,
            card.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
        );

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
window.addEventListener('load', () => {
    if (typeof WrongAnswersBank !== 'undefined') {
        const _origWrongAdd = WrongAnswersBank.add.bind(WrongAnswersBank);
        WrongAnswersBank.add = function(pregunta, tuRespuesta, correcta, explicacion, categoria) {
            _origWrongAdd(pregunta, tuRespuesta, correcta, explicacion, categoria);
            SRSSystem.addCard(pregunta, correcta, explicacion, categoria);
        };
    }
});

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
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;font-size:0.8rem;color:#64748b;">
            <span>Tarjeta ${srsSessionIndex + 1} de ${srsSessionTotal}</span>
            <span style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);padding:0.2rem 0.6rem;border-radius:10px;color:#a5b4fc;font-weight:600;">${card.categoria}</span>
        </div>
        <div style="background:rgba(99,102,241,0.08);border-radius:8px;height:6px;margin-bottom:1.5rem;overflow:hidden;">
            <div style="height:100%;width:${progress}%;background:linear-gradient(90deg,#6366f1,#818cf8);border-radius:8px;transition:width 0.4s;"></div>
        </div>
        <div id="srsCardBox" style="background:linear-gradient(135deg,rgba(13,17,31,0.95),rgba(16,22,42,0.9));border:1.5px solid rgba(99,102,241,0.25);border-radius:20px;padding:2rem;min-height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;margin-bottom:1.5rem;position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <div style="font-size:0.7rem;font-weight:700;color:#6366f1;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1rem;">PREGUNTA</div>
            <div id="srsPregunta" style="font-size:1.1rem;font-weight:600;color:#f1f5f9;line-height:1.65;">${card.pregunta}</div>
        </div>
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

    const cardBox = document.getElementById('srsCardBox');
    cardBox.innerHTML = `
        <div style="font-size:0.7rem;font-weight:700;color:#10b981;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:0.75rem;">RESPUESTA</div>
        <div style="font-size:1rem;font-weight:600;color:#f1f5f9;line-height:1.65;white-space:pre-line;margin-bottom:1rem;">${card.respuestaCorrecta}</div>
        ${card.explicacion ? `<div style="font-size:0.82rem;color:#94a3b8;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);padding:0.75rem;border-radius:10px;line-height:1.6;"><strong style="color:#a5b4fc;">💡</strong> ${card.explicacion}</div>` : ''}
    `;
    cardBox.style.borderColor = 'rgba(16,185,129,0.3)';

    document.getElementById('srsBtns').innerHTML = `
        <div style="font-size:0.8rem;color:#64748b;text-align:center;margin-bottom:0.75rem;font-weight:600;">¿Qué tan bien lo recordaste?</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;">
            <button onclick="srsResponder(1)" style="padding:0.85rem 0.5rem;background:rgba(239,68,68,0.15);border:1.5px solid rgba(239,68,68,0.4);border-radius:12px;color:#fca5a5;font-weight:700;font-size:0.82rem;cursor:pointer;">
                😰 Olvidé<br><span style="font-size:0.65rem;opacity:0.7;">Repasar pronto</span>
            </button>
            <button onclick="srsResponder(3)" style="padding:0.85rem 0.5rem;background:rgba(245,158,11,0.15);border:1.5px solid rgba(245,158,11,0.4);border-radius:12px;color:#fcd34d;font-weight:700;font-size:0.82rem;cursor:pointer;">
                🤔 Difícil<br><span style="font-size:0.65rem;opacity:0.7;">En 6 días</span>
            </button>
            <button onclick="srsResponder(5)" style="padding:0.85rem 0.5rem;background:rgba(16,185,129,0.15);border:1.5px solid rgba(16,185,129,0.4);border-radius:12px;color:#6ee7b7;font-weight:700;font-size:0.82rem;cursor:pointer;">
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

console.log('✅ Sistema SRS cargado');
