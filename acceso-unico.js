// ══════════════════════════════════════════════════════════════
// ACCESO ÚNICO — Engine del visor de libro
// Depende de: preguntas-acceso-unico.js (ACCESO_UNICO)
// ══════════════════════════════════════════════════════════════

let auCurrentCatId  = null;
let auPreguntas     = [];
let auCurrentIndex  = 0;
let auAnsweredMap   = {};
let auScore         = { correct: 0, wrong: 0 };

// SVG diagrams
const AU_SVGS = {
    'capas-piel': `
        <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;">
            <rect x="28" y="8" width="175" height="52" rx="4" fill="#8ab4a0" opacity=".85"/>
            <path d="M28 26 Q38 20 50 26 Q62 32 72 26 Q84 20 96 26 Q108 32 120 26 Q132 20 144 26 Q156 32 168 26 Q180 20 190 26 Q200 22 203 26" stroke="#6a9a82" stroke-width="1" fill="none" opacity=".6"/>
            <path d="M28 38 Q38 32 50 38 Q62 44 72 38 Q84 32 96 38 Q108 44 120 38 Q132 32 144 38 Q156 44 168 38 Q180 32 190 38 Q200 34 203 38" stroke="#6a9a82" stroke-width="1" fill="none" opacity=".5"/>
            <line x1="88" y1="8" x2="86" y2="-4" stroke="#3a2a1a" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="120" y1="8" x2="118" y2="-4" stroke="#3a2a1a" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="152" y1="8" x2="150" y2="-4" stroke="#3a2a1a" stroke-width="2.5" stroke-linecap="round"/>
            <text x="6" y="40" font-size="12" font-weight="700" fill="rgba(255,255,255,.9)" font-family="monospace">a)</text>
            <rect x="28" y="60" width="175" height="62" rx="2" fill="#7a9e8c" opacity=".75"/>
            <path d="M28 72 Q55 66 80 72 Q105 78 130 72 Q155 66 180 72 Q200 75 203 72" stroke="#5a8070" stroke-width="1.2" fill="none" opacity=".7"/>
            <path d="M28 84 Q55 78 80 84 Q105 90 130 84 Q155 78 180 84 Q200 87 203 84" stroke="#5a8070" stroke-width="1.2" fill="none" opacity=".6"/>
            <path d="M28 96 Q55 90 80 96 Q105 102 130 96 Q155 90 180 96 Q200 99 203 96" stroke="#5a8070" stroke-width="1.2" fill="none" opacity=".55"/>
            <path d="M28 108 Q55 102 80 108 Q105 114 130 108 Q155 102 180 108 Q200 111 203 108" stroke="#5a8070" stroke-width="1.2" fill="none" opacity=".5"/>
            <ellipse cx="119" cy="110" rx="7" ry="5" fill="#3a2818" opacity=".8"/>
            <line x1="119" y1="60" x2="119" y2="105" stroke="#3a2818" stroke-width="2.5"/>
            <text x="6" y="98" font-size="12" font-weight="700" fill="rgba(255,255,255,.9)" font-family="monospace">b)</text>
            <rect x="28" y="122" width="175" height="58" rx="2" fill="#b0a870" opacity=".6"/>
            <ellipse cx="55"  cy="148" rx="14" ry="10" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
            <ellipse cx="82"  cy="144" rx="13" ry="9"  fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
            <ellipse cx="110" cy="150" rx="14" ry="10" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
            <ellipse cx="138" cy="144" rx="12" ry="9"  fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
            <ellipse cx="164" cy="148" rx="13" ry="9"  fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
            <text x="6" y="158" font-size="12" font-weight="700" fill="rgba(255,255,255,.9)" font-family="monospace">c)</text>
            <line x1="28" y1="60"  x2="203" y2="60"  stroke="rgba(255,255,255,.35)" stroke-width=".8"/>
            <line x1="28" y1="122" x2="203" y2="122" stroke="rgba(255,255,255,.35)" stroke-width=".8"/>
        </svg>
        <div style="display:flex;justify-content:center;gap:.8rem;margin-top:.5rem;font-size:.62rem;color:rgba(255,255,255,.4);">
            <span>a) Epidermis</span><span>b) Dermis</span><span>c) Hipodermis</span>
        </div>`,

    'isotonica': `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:120px;">
            <circle cx="18" cy="20" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="140" cy="18" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="8" cy="70" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="150" cy="75" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="30" cy="105" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="130" cy="102" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="75" cy="10" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="155" cy="45" r="4" fill="rgba(251,191,36,.7)"/>
            <circle cx="80" cy="62" r="38" fill="rgba(99,102,241,.08)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
            <circle cx="68" cy="52" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="90" cy="48" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="62" cy="68" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="82" cy="72" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="96" cy="66" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="74" cy="82" r="4" fill="rgba(99,102,241,.9)"/>
            <circle cx="88" cy="58" r="4" fill="rgba(99,102,241,.9)"/>
        </svg>
        <div style="display:flex;justify-content:center;gap:1rem;margin-top:.4rem;font-size:.62rem;color:rgba(255,255,255,.4);">
            <span>🟡 Extracelular</span><span>🔵 Intracelular</span>
        </div>`
};

// Category config: hcard color + info (NOT linked to book viewer)
const AU_CAT_CONFIG = {
    saludPublica:    { color:'cyan',    icon:'🏥', reactivos:10 },
    anatomia:        { color:'rose',    icon:'🫀', reactivos:18 },
    biologiaCelular: { color:'emerald', icon:'🔬', reactivos:10 },
    bioquimica:      { color:'violet',  icon:'⚗️', reactivos:10 }
};

// ── Render lobby ─────────────────────────────────────────────────
function auRenderLobby() {
    if (typeof ACCESO_UNICO === 'undefined') return;
    const grid = document.getElementById('auLobbyGrid');
    if (!grid) return;

    const total = Object.values(ACCESO_UNICO).reduce((s, c) => s + c.preguntas.length, 0);
    const tc = document.getElementById('auTotalCount');
    if (tc) tc.textContent = total;

    // 4 category cards (2×2) — info/study reference, NOT linked to book
    const catCards = Object.values(ACCESO_UNICO).map(cat => {
        const cfg = AU_CAT_CONFIG[cat.id] || { color:'indigo', icon:'📚', reactivos:10 };
        return `
            <div class="hcard hcard-${cfg.color} kinetic au-cat-info-card">
                <div class="hcard-glow"></div>
                <span class="hcard-icon">${cfg.icon}</span>
                <div class="hcard-title">${cat.titulo}</div>
                <div class="hcard-sub">${cat.preguntas.length} preguntas</div>
                <span class="hcard-tag">${cfg.reactivos} reactivos</span>
            </div>`;
    }).join('');

    // Total preguntas sumadas
    const allQ = Object.values(ACCESO_UNICO).reduce((arr, cat) => arr.concat(cat.preguntas), []);

    grid.innerHTML = `
        <div class="au-lobby-grid">
            ${catCards}
        </div>

        <!-- ── POSIBLES PREGUNTAS — gold full-width card ── -->
        <div class="hcard hcard-gold kinetic au-lobby-full" onclick="auOpenBook()" style="min-height:auto;padding:1.15rem 1.05rem 1rem;">
            <div class="hcard-glow"></div>
            <div style="display:flex;align-items:center;gap:.7rem;">
                <span class="hcard-icon" style="font-size:1.8rem;">📖</span>
                <div style="flex:1;">
                    <div class="hcard-title" style="font-size:1rem;">Posibles Preguntas</div>
                    <div class="hcard-sub">Guía manual · Preguntas reales de examen</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.25rem;flex-shrink:0;">
                    <span class="hcard-tag">${allQ.length} preguntas</span>
                    <span style="font-size:.65rem;color:rgba(251,191,36,.5);font-weight:700;">Con respuesta ✓</span>
                </div>
            </div>
        </div>
    `;
}

// ── Open the book with ALL questions ────────────────────────────
function auOpenBook() {
    // Merge all questions from all categories
    auCurrentCatId = 'all';
    auPreguntas    = Object.values(ACCESO_UNICO).reduce((arr, cat) => arr.concat(cat.preguntas), []);
    auCurrentIndex = 0;
    auAnsweredMap  = {};
    auScore        = { correct: 0, wrong: 0 };

    document.getElementById('auLobbyView').style.display   = 'none';
    document.getElementById('auBookView').style.display    = 'flex';
    document.getElementById('auResultsView').style.display = 'none';

    document.getElementById('auBookCatName').textContent = '📖 Posibles Preguntas';
    auRenderQuestion();
    window.scrollTo(0, 0);
}

// ── Render current question (with INLINE nav) ───────────────────
function auRenderQuestion() {
    const q     = auPreguntas[auCurrentIndex];
    const total = auPreguntas.length;
    const n     = auCurrentIndex + 1;
    const answered = auAnsweredMap[auCurrentIndex] !== undefined;

    // Header
    document.getElementById('auBookProgressText').textContent = `Pregunta ${n} de ${total}`;
    document.getElementById('auBookCounter').textContent      = `${n}/${total}`;
    document.getElementById('auProgressFill').style.width     = `${(n / total) * 100}%`;

    // Diagram
    let diagramHtml = '';
    if (q.svgKey && AU_SVGS[q.svgKey]) {
        diagramHtml = `<div class="au-diagram">${AU_SVGS[q.svgKey]}</div>`;
    }

    // Category label
    const catLabel = Object.values(ACCESO_UNICO).find(cat =>
        cat.preguntas.some(p => p.id === q.id)
    );
    const catCfg = catLabel ? (AU_CAT_CONFIG[catLabel.id] || {}) : {};

    // Options
    const letters = ['A', 'B', 'C', 'D'];
    let optsHtml = '';
    q.opciones.forEach((opt, i) => {
        let cls = '';
        let icon = '';
        if (answered) {
            const sel = auAnsweredMap[auCurrentIndex].selected;
            if (i === q.correcta)          { cls = 'reveal-correct disabled'; icon = '✅'; }
            else if (i === sel)            { cls = 'selected-wrong disabled';  icon = '❌'; }
            else                           { cls = 'disabled'; }
        }
        optsHtml += `
            <div class="au-opt ${cls}" onclick="auSelectOption(${i})" style="cursor:${answered?'default':'pointer'}">
                <div class="au-opt-letter">${letters[i]}</div>
                <div class="au-opt-text">${opt}</div>
                ${icon ? `<span class="au-opt-icon">${icon}</span>` : ''}
            </div>`;
    });

    // Explanation
    let explainHtml = '';
    if (answered) {
        const sel = auAnsweredMap[auCurrentIndex].selected;
        const ok  = sel === q.correcta;
        const txt = q.explicaciones ? q.explicaciones[sel] : (ok ? 'Correcto.' : 'Incorrecto.');
        explainHtml = `
            <div class="au-explanation show">
                <div class="au-explanation-label">${ok ? '✅ Correcto' : '❌ Incorrecto'} — Explicación</div>
                <div class="au-explanation-text">${txt}</div>
                ${q.fuente ? `<div class="au-source-tag">📚 ${q.fuente}</div>` : ''}
            </div>`;
    }

    // Dots
    const maxDots = Math.min(total, 12);
    const dotStart = Math.max(0, Math.min(auCurrentIndex - 5, total - maxDots));
    let dots = '';
    for (let i = dotStart; i < dotStart + maxDots && i < total; i++) {
        let col = 'rgba(255,255,255,.2)';
        if (i === auCurrentIndex)             col = '#fbbf24';
        else if (auAnsweredMap[i] !== undefined) col = auAnsweredMap[i].correct ? '#4ade80' : '#f87171';
        const w = i === auCurrentIndex ? '18px' : '7px';
        dots += `<span style="display:inline-block;width:${w};height:7px;border-radius:4px;background:${col};transition:all .3s;"></span>`;
    }

    // Inline nav buttons
    const isFirst = auCurrentIndex === 0;
    const isLast  = auCurrentIndex === total - 1;
    const navHtml = `
        <div class="au-page-nav">
            <button class="au-page-nav-btn au-page-nav-prev" onclick="auNavPrev()" ${isFirst ? 'disabled' : ''}>
                ← Anterior
            </button>
            <button class="au-page-nav-btn au-page-nav-next" onclick="auNavNext()">
                ${isLast ? '🏁 Ver resultados' : 'Siguiente →'}
            </button>
        </div>`;

    document.getElementById('auBookPage').innerHTML = `
        <!-- dots -->
        <div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:1rem;">${dots}</div>

        <!-- tema + subárea -->
        <div class="au-page-tema">
            ${catCfg.icon || '📋'} ${q.tema || 'Pregunta'}
        </div>

        <!-- question -->
        <div class="au-page-pregunta">${q.pregunta}</div>

        <!-- diagram -->
        ${diagramHtml}

        <!-- options -->
        <div id="auOptionsWrap">${optsHtml}</div>

        <!-- explanation -->
        ${explainHtml}

        <!-- INLINE nav — right after content -->
        ${navHtml}
    `;
}

// ── Select option ───────────────────────────────────────────────
function auSelectOption(i) {
    if (auAnsweredMap[auCurrentIndex] !== undefined) return;
    const q  = auPreguntas[auCurrentIndex];
    const ok = i === q.correcta;
    auAnsweredMap[auCurrentIndex] = { selected: i, correct: ok };
    if (ok) auScore.correct++; else auScore.wrong++;
    auRenderQuestion();
    // scroll explanation into view
    setTimeout(() => {
        const expl = document.querySelector('.au-explanation');
        if (expl) expl.scrollIntoView({ behavior:'smooth', block:'nearest' });
    }, 300);
}

// ── Nav ─────────────────────────────────────────────────────────
function auNavNext() {
    if (auCurrentIndex >= auPreguntas.length - 1) { auShowResults(); return; }
    auCurrentIndex++;
    auRenderQuestion();
    window.scrollTo(0, 0);
}
function auNavPrev() {
    if (auCurrentIndex <= 0) return;
    auCurrentIndex--;
    auRenderQuestion();
    window.scrollTo(0, 0);
}

// ── Results ─────────────────────────────────────────────────────
function auShowResults() {
    document.getElementById('auBookView').style.display    = 'none';
    document.getElementById('auResultsView').style.display = 'block';
    const total = auPreguntas.length;
    document.getElementById('auResultsSubtitle').textContent = `📖 Posibles Preguntas — ${total} preguntas`;
    document.getElementById('auResCorrect').textContent = auScore.correct;
    document.getElementById('auResWrong').textContent   = auScore.wrong;
    window.scrollTo(0, 0);
}

// ── Back to lobby ────────────────────────────────────────────────
function auBackToLobby() {
    document.getElementById('auLobbyView').style.display   = 'block';
    document.getElementById('auBookView').style.display    = 'none';
    document.getElementById('auResultsView').style.display = 'none';
    auCurrentCatId = null;
    window.scrollTo(0, 0);
}
function auRestartCategory() {
    auOpenBook();
}

// ── Hook into showScreen ─────────────────────────────────────────
(function() {
    const _orig = window.showScreen;
    window.showScreen = function(id) {
        if (_orig) _orig.call(this, id);
        if (id === 'accesoUnicoScreen') {
            const lv = document.getElementById('auLobbyView');
            const bv = document.getElementById('auBookView');
            const rv = document.getElementById('auResultsView');
            if (lv) lv.style.display   = 'block';
            if (bv) bv.style.display   = 'none';
            if (rv) rv.style.display   = 'none';
            setTimeout(auRenderLobby, 50);
        }
    };
})();

document.addEventListener('DOMContentLoaded', () => setTimeout(auRenderLobby, 200));
console.log('✅ acceso-unico.js cargado');
