// ═══════════════════════════════════════════════════════════════
// MEDIPREP — MÓDULOS UI v2 (modulos-ui.js)
// Reemplaza cargarModulos() con un renderer visual mejorado
// ═══════════════════════════════════════════════════════════════

// Paleta de colores por módulo (accent, glow, bg)
var MODULO_COLORES = {
    'conceptos-salud':       { accent: '#818cf8', glow: 'rgba(99,102,241,0.22)',  bg: 'rgba(99,102,241,0.09)',  border: 'rgba(99,102,241,0.28)' },
    'planimetria':           { accent: '#f59e0b', glow: 'rgba(245,158,11,0.22)',  bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.3)'  },
    'sistema-nervioso':      { accent: '#a78bfa', glow: 'rgba(167,139,250,0.22)', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.3)' },
    'sistema-endocrino':     { accent: '#34d399', glow: 'rgba(52,211,153,0.22)',  bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.28)' },
    'biologia-celular':      { accent: '#38bdf8', glow: 'rgba(56,189,248,0.22)',  bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.28)' },
    'sistema-cardiovascular':{ accent: '#f87171', glow: 'rgba(248,113,113,0.22)', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.28)'},
    'sistema-respiratorio':  { accent: '#67e8f9', glow: 'rgba(103,232,249,0.2)',  bg: 'rgba(103,232,249,0.07)', border: 'rgba(103,232,249,0.28)'},
    'aparato-digestivo':     { accent: '#fb923c', glow: 'rgba(251,146,60,0.22)',  bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.28)' },
    'carbohidratos':         { accent: '#fbbf24', glow: 'rgba(251,191,36,0.22)',  bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.28)' },
    'signos-vitales':        { accent: '#f472b6', glow: 'rgba(244,114,182,0.22)', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.28)'},
    'farmacologia':          { accent: '#818cf8', glow: 'rgba(129,140,248,0.22)', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.28)'},
    'vitaminas':             { accent: '#fb923c', glow: 'rgba(251,146,60,0.22)',  bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.28)' },
    'genetica':              { accent: '#34d399', glow: 'rgba(52,211,153,0.22)',  bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.28)' },
};

var DEFAULT_COLOR = { accent: '#818cf8', glow: 'rgba(99,102,241,0.2)', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.25)' };

// Override cargarModulos with our enhanced renderer
window.addEventListener('load', function() {
    if (typeof cargarModulos !== 'function') return;

    window.cargarModulos = function() {
        if (typeof cargarProgreso === 'function') cargarProgreso();
        var container = document.getElementById('modulosContainer');
        if (!container) return;
        container.innerHTML = '';

        // Update global header stats
        var totalLecciones = 0, totalCompletadas = 0, totalEval = 0;
        MODULOS_PREMEDICINA.forEach(function(m) {
            if (typeof calcularProgresoModulo === 'function') m.progreso = calcularProgresoModulo(m);
            totalLecciones  += m.lecciones.length;
            totalCompletadas+= m.lecciones.filter(function(l){ return l.completada; }).length;
            totalEval       += (m.evaluacion ? m.evaluacion.length : 0);
        });
        var progresoGlobal = totalLecciones ? Math.round((totalCompletadas / totalLecciones) * 100) : 0;
        var pg = document.getElementById('progresoGlobal');
        if (pg) pg.textContent = progresoGlobal + '%';
        var sl = document.getElementById('clasesStatLecciones');
        if (sl) sl.textContent = totalLecciones;
        var sm = document.getElementById('clasesStatModulos');
        if (sm) sm.textContent = MODULOS_PREMEDICINA.length;

        // Render each module card
        MODULOS_PREMEDICINA.forEach(function(modulo, idx) {
            var col   = MODULO_COLORES[modulo.id] || DEFAULT_COLOR;
            var pct   = modulo.progreso || 0;
            var total = modulo.lecciones.length;
            var done  = modulo.lecciones.filter(function(l){ return l.completada; }).length;
            var hasEval = modulo.evaluacion && modulo.evaluacion.length > 0;
            var evalCount = hasEval ? modulo.evaluacion.length : null;

            var badge = '';
            if (pct === 100) {
                badge = '<span style="font-size:.6rem;font-weight:800;padding:.18rem .5rem;border-radius:20px;background:rgba(16,185,129,.18);color:#6ee7b7;border:1px solid rgba(16,185,129,.35);font-family:var(--font-d);">✓ Completado</span>';
            } else if (pct > 0) {
                badge = '<span style="font-size:.6rem;font-weight:800;padding:.18rem .5rem;border-radius:20px;background:'+col.bg+';color:'+col.accent+';border:1px solid '+col.border+';font-family:var(--font-d);">En progreso</span>';
            } else {
                badge = '<span style="font-size:.6rem;font-weight:800;padding:.18rem .5rem;border-radius:20px;background:rgba(255,255,255,.04);color:var(--text-dim);border:1px solid var(--border);font-family:var(--font-d);">Sin comenzar</span>';
            }

            var statsRow = '<div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.65rem;">'
                + badge
                + (evalCount ? '<span style="font-size:.6rem;font-weight:700;color:var(--text-dim);">· '+evalCount+' pregs. evaluación</span>' : '')
                + '<span style="font-size:.6rem;color:var(--text-dim);">· '+total+' lecciones</span>'
                + '</div>';

            var progressBar = '<div style="margin-top:.6rem;">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">'
                + '<span style="font-size:.6rem;font-weight:700;color:var(--text-dim);letter-spacing:.04em;text-transform:uppercase;">Progreso</span>'
                + '<span style="font-size:.7rem;font-weight:800;color:'+col.accent+';">'+done+' / '+total+'</span>'
                + '</div>'
                + '<div style="height:5px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden;">'
                + '<div style="height:100%;width:'+pct+'%;background:linear-gradient(90deg,'+col.accent+','+col.glow.replace('0.22','0.6')+');border-radius:99px;transition:width 1s cubic-bezier(.22,1,.36,1);box-shadow:0 0 8px '+col.glow+';">'
                + '</div></div></div>';

            var card = document.createElement('div');
            card.setAttribute('data-module-id', modulo.id);
            card.style.cssText = [
                'background:var(--card)',
                'border:1.5px solid '+col.border,
                'border-radius:18px',
                'padding:1.1rem 1.05rem 1rem',
                'cursor:pointer',
                'position:relative',
                'overflow:hidden',
                'transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .22s,border-color .2s',
                'box-shadow:0 4px 18px '+col.glow,
                'animation:fadeInUp .4s cubic-bezier(.22,1,.36,1) both',
                'animation-delay:'+(idx * 0.05)+'s'
            ].join(';');

            card.innerHTML = [
                // Top accent line
                '<div style="position:absolute;top:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,'+col.accent+',transparent);border-radius:18px 18px 0 0;"></div>',
                // Left accent bar
                '<div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:'+col.accent+';border-radius:18px 0 0 18px;opacity:.7;"></div>',
                // Glow corner
                '<div style="position:absolute;top:-30px;right:-20px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,'+col.glow+' 0%,transparent 70%);pointer-events:none;"></div>',
                // Content
                '<div style="padding-left:.55rem;">',
                '  <div style="display:flex;align-items:flex-start;gap:.85rem;margin-bottom:.55rem;">',
                '    <div style="width:46px;height:46px;border-radius:14px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:'+col.bg+';border:1px solid '+col.border+';">'+modulo.icono+'</div>',
                '    <div style="flex:1;min-width:0;">',
                '      <div style="font-family:var(--font-d);font-size:.95rem;font-weight:800;color:var(--text);line-height:1.25;margin-bottom:.12rem;">'+modulo.titulo+'</div>',
                '      <div style="font-size:.72rem;color:var(--text-3);line-height:1.4;">'+modulo.descripcion+'</div>',
                '    </div>',
                '    <div style="text-align:right;flex-shrink:0;">',
                '      <div style="font-family:var(--font-d);font-size:1.3rem;font-weight:900;color:'+(pct===100?'#6ee7b7':col.accent)+';">'+pct+'%</div>',
                '    </div>',
                '  </div>',
                statsRow,
                progressBar,
                '</div>'
            ].join('');

            card.onmouseenter = function() {
                this.style.transform = 'translateY(-4px) scale(1.008)';
                this.style.boxShadow = '0 12px 32px '+col.glow+', 0 4px 12px rgba(0,0,0,.3)';
                this.style.borderColor = col.accent;
            };
            card.onmouseleave = function() {
                this.style.transform = '';
                this.style.boxShadow = '0 4px 18px '+col.glow;
                this.style.borderColor = col.border;
            };
            card.ontouchstart = function() {
                this.style.transform = 'scale(.97)';
            };
            card.ontouchend = function() {
                this.style.transform = '';
            };
            card.onclick = function() {
                if (typeof abrirModulo === 'function') abrirModulo(modulo.id);
            };

            container.appendChild(card);
        });
    };
});
