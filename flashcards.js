// ============================================
// MEDIPREP SMART — FLASHCARDS
// ============================================

let fcCards = [];
let fcIndex = 0;
let fcVolteo = false;
let fcModulo = 'Todos';
let fcCorrect = 0;
let fcIncorrect = 0;

// Pool combinado: flashcards originales + CONAMAT
function getFlashcardsPool() {
    const base = typeof FLASHCARDS_DATA !== 'undefined' ? FLASHCARDS_DATA : [];
    const conamat = typeof FLASHCARDS_CONAMAT !== 'undefined' ? FLASHCARDS_CONAMAT : [];
    return [...base, ...conamat];
}

function iniciarFlashcards(modulo = 'Todos') {
    fcModulo = modulo;
    const allCards = getFlashcardsPool();
    const pool = modulo === 'Todos' ? allCards :
        allCards.filter(c => c.modulo === modulo);
    fcCards = shuffle([...pool]);
    fcIndex = 0;
    fcVolteo = false;
    fcCorrect = 0;
    fcIncorrect = 0;
    showScreen('flashcardsScreen');
    renderFlashcard();
}

function renderFlashcardMenu() {
    const allCards = getFlashcardsPool();
    const modulos = ['Todos', ...new Set(allCards.map(c => c.modulo))];
    document.getElementById('flashcardsMenuContent').innerHTML = `
        <div style="margin-bottom:1rem;color:#94a3b8;font-size:0.85rem;">${allCards.length} tarjetas disponibles</div>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
            ${modulos.map(m => {
                const count = m === 'Todos' ? allCards.length : allCards.filter(c => c.modulo === m).length;
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
        inner.innerHTML = `
            <div style="background:linear-gradient(135deg,rgba(13,31,17,0.97),rgba(13,28,22,0.95));border:1.5px solid rgba(16,185,129,0.4);border-radius:20px;padding:2rem;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.5);">
                <div style="font-size:0.68rem;font-weight:700;color:#10b981;letter-spacing:2px;text-transform:uppercase;margin-bottom:1rem;">RESPUESTA</div>
                <div style="font-size:0.98rem;font-weight:600;color:#f1f5f9;line-height:1.7;white-space:pre-line;">${card.reverso}</div>
            </div>`;
        if (typeof playSound === 'function') playSound('voltear');
    } else {
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

console.log('✅ Flashcards cargado');
