// ═══════════════════════════════════════════════════════════════
// MEDIPREP — SIMULADORES PREMEDICINA v2
// Timer + Modo Repaso + 3 Volúmenes
// ═══════════════════════════════════════════════════════════════
(function() {

var CATALOGO = [
    { key:'SIMULACRO_PREMEDICINA_V1', titulo:'Simulacro Premedicina Vol. 1', subtitulo:'EXANI-II · 48 preguntas', icono:'🎯', color:'#4F8EF7', glow:'rgba(79,142,247,0.22)', bg:'rgba(79,142,247,0.1)', border:'rgba(79,142,247,0.28)', badge:'Vol. 1' },
    { key:'SIMULACRO_PREMEDICINA_V2', titulo:'Simulacro Premedicina Vol. 2', subtitulo:'EXANI-II · 47 preguntas', icono:'🎯', color:'#00D4AA', glow:'rgba(0,212,170,0.22)', bg:'rgba(0,212,170,0.1)', border:'rgba(0,212,170,0.28)', badge:'Vol. 2' },
    { key:'SIMULACRO_PREMEDICINA_V3', titulo:'Simulacro Premedicina Vol. 3', subtitulo:'EXANI-II · 48 preguntas', icono:'🎯', color:'#FF5C7A', glow:'rgba(255,92,122,0.22)', bg:'rgba(255,92,122,0.1)', border:'rgba(255,92,122,0.28)', badge:'Vol. 3' }
];

// ── Estado ──────────────────────────────────────────────────
var simState = { data:null, key:null, idx:0, respuestas:[], timerInterval:null, segundosRestantes:0, imagenBase:'sim_imgs/' };

// ── Lobby ────────────────────────────────────────────────────
window.renderSimuladoresLobby = function() {
    var el = document.getElementById('simuladoresContent');
    if (!el) return;
    var best = {};
    try { best = JSON.parse(localStorage.getItem('mp_sim_best')||'{}'); } catch(e){}

    el.innerHTML = '<div style="font-size:.58rem;font-weight:800;color:var(--text-dim);letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem;">Simulacros disponibles <span style="flex:1;height:1px;background:var(--border);"></span></div>'
        + CATALOGO.map(function(sim) {
            var data = window[sim.key];
            if (!data) return '';
            var b = best[sim.key];
            var bestHTML = b ? '<span style="font-size:.62rem;color:'+sim.color+';font-weight:800;">Mejor: '+b.pct+'% ('+b.correctas+'/'+data.preguntas.length+')</span>' : '<span style="font-size:.62rem;color:var(--text-dim);">Sin intentos aún</span>';
            return '<div onclick="iniciarSimulacro(\''+sim.key+'\')" style="background:var(--card);border:1.5px solid '+sim.border+';border-radius:18px;padding:1.1rem;cursor:pointer;margin-bottom:.6rem;position:relative;overflow:hidden;transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;box-shadow:0 4px 18px '+sim.glow+'"'
                +' onmouseover="this.style.transform=\'translateY(-4px)\';this.style.boxShadow=\'0 12px 32px '+sim.glow+'\'"'
                +' onmouseout="this.style.transform=\'\';this.style.boxShadow=\'0 4px 18px '+sim.glow+'\'">'
                +'<div style="position:absolute;top:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,'+sim.color+',transparent);"></div>'
                +'<div style="display:flex;align-items:center;gap:.9rem;">'
                +'<div style="width:52px;height:52px;border-radius:15px;background:'+sim.bg+';border:1px solid '+sim.border+';display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0;">'+sim.icono+'</div>'
                +'<div style="flex:1;min-width:0;">'
                +'<div style="font-family:var(--font-d);font-size:.96rem;font-weight:800;color:var(--text);margin-bottom:.15rem;">'+sim.titulo+'</div>'
                +'<div style="font-size:.68rem;color:var(--text-3);">'+data.preguntas.length+' preguntas · '+data.tiempo+' min · Con explicaciones por opción</div>'
                +'<div style="margin-top:.28rem;">'+bestHTML+'</div>'
                +'</div>'
                +'<span style="background:'+sim.bg+';color:'+sim.color+';padding:.18rem .6rem;border-radius:20px;font-size:.6rem;font-weight:800;border:1px solid '+sim.border+';flex-shrink:0;">'+sim.badge+'</span>'
                +'</div></div>';
        }).join('')
        + '<div style="background:rgba(245,158,11,0.06);border:1px dashed rgba(245,158,11,0.22);border-radius:14px;padding:1rem;text-align:center;margin-top:.35rem;">'
        + '<div style="font-size:1.2rem;margin-bottom:.3rem;">📦</div>'
        + '<div style="font-size:.76rem;font-weight:700;color:var(--text-3);">Más volúmenes próximamente</div>'
        + '<div style="font-size:.66rem;color:var(--text-dim);margin-top:.1rem;">Se añadirán conforme los subas</div></div>';
};

// ── Iniciar simulacro ────────────────────────────────────────
window.iniciarSimulacro = function(key) {
    var data = window[key];
    if (!data) return;
    simState.data = data;
    simState.key  = key;
    simState.idx  = 0;
    simState.respuestas = new Array(data.preguntas.length).fill(null);
    simState.segundosRestantes = data.tiempo * 60;
    clearInterval(simState.timerInterval);
    simState.timerInterval = setInterval(function() {
        simState.segundosRestantes--;
        actualizarTimerSim();
        if (simState.segundosRestantes <= 0) {
            clearInterval(simState.timerInterval);
            mostrarResultadosSim();
        }
    }, 1000);
    showScreen('simulacroQuizScreen');
    renderSimPregunta();
};

// ── Actualizar display del timer ─────────────────────────────
function actualizarTimerSim() {
    var el = document.getElementById('simTimer');
    if (!el) return;
    var s = simState.segundosRestantes;
    var min = Math.floor(s/60);
    var seg = s%60;
    var txt = min+':'+(seg<10?'0':'')+seg;
    el.textContent = txt;
    var urgent = s < 120;
    el.style.color    = urgent ? 'var(--rose)' : 'var(--gold)';
    el.style.background = urgent ? 'var(--rose-bg)' : 'var(--gold-bg)';
    el.style.borderColor= urgent ? 'var(--rose-bdr)' : 'rgba(245,166,35,.25)';
    if (urgent) el.style.animation = 'timerPulse .6s ease infinite';
    else el.style.animation = '';
}

// ── Render pregunta ──────────────────────────────────────────
window.renderSimPregunta = function() {
    var el = document.getElementById('simulacroQuizContent');
    if (!el || !simState.data) return;
    var q     = simState.data.preguntas[simState.idx];
    var total = simState.data.preguntas.length;
    var resp  = simState.respuestas[simState.idx];
    var pct   = Math.round((simState.idx / total) * 100);
    var letras= ['A','B','C'];
    var modoRepaso = typeof Repaso !== 'undefined' && Repaso.isActive();

    // Imagen
    var imgHTML = '';
    if (q.imagen) {
        imgHTML = '<div style="margin-bottom:.85rem;border-radius:12px;overflow:hidden;border:1px solid var(--border);">'
            +'<img src="'+simState.imagenBase+q.imagen+'.jpg" alt="Imagen pregunta '+q.n+'" style="width:100%;display:block;" '
            +'onerror="this.parentElement.innerHTML=\'<div style=&quot;background:rgba(245,158,11,0.08);border:1px dashed rgba(245,158,11,0.28);border-radius:12px;padding:1.1rem;text-align:center;&quot;><div style=&quot;font-size:1.3rem;&quot;>🖼️</div><div style=&quot;font-size:.72rem;color:var(--text-3);margin-top:.3rem;&quot;>Imagen pendiente: '+q.imagen+'</div></div>\'">'
            +'</div>';
    }

    el.innerHTML = ''
        // Header
        + '<div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem;margin-bottom:.6rem;">'
        + '<button onclick="salirSimulacro()" style="width:32px;height:32px;border-radius:9px;background:var(--glass);border:1px solid var(--border);color:var(--text-3);font-size:.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;" title="Salir">←</button>'
        + '<span style="font-family:var(--font-d);font-weight:800;font-size:.84rem;color:var(--text-2);flex:1;text-align:center;">'+simState.data.titulo+'</span>'
        + '<span id="simTimer" style="font-family:var(--mono);font-size:.82rem;font-weight:700;color:var(--gold);background:var(--gold-bg);border:1px solid rgba(245,166,35,.25);border-radius:20px;padding:.22rem .65rem;flex-shrink:0;">'+ (function(){var s=simState.segundosRestantes;return Math.floor(s/60)+':'+(s%60<10?'0':'')+s%60;})() +'</span>'
        + '</div>'
        // Progreso + repaso toggle
        + '<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.55rem;">'
        + '<div style="flex:1;height:4px;background:var(--border);border-radius:99px;overflow:hidden;">'
        + '<div style="height:100%;width:'+pct+'%;background:linear-gradient(90deg,var(--blue),var(--teal));border-radius:99px;transition:width .5s;box-shadow:0 0 8px var(--blue-glow);"></div>'
        + '</div>'
        + '<span style="font-size:.68rem;font-weight:800;color:var(--text-dim);white-space:nowrap;">'+(simState.idx+1)+'/'+total+'</span>'
        + '<button id="simRepasoBtn" onclick="toggleSimRepaso()" title="Modo Repaso" style="display:flex;align-items:center;gap:.28rem;padding:.22rem .6rem;border-radius:20px;background:'+(modoRepaso?'var(--teal-bg)':'var(--glass)')+';border:1px solid '+(modoRepaso?'var(--teal-bdr)':'var(--border)')+';font-size:.62rem;font-weight:700;color:'+(modoRepaso?'var(--teal-l)':'var(--text-3)')+';cursor:pointer;font-family:var(--font);transition:all .18s;white-space:nowrap;">📖 Repaso</button>'
        + '</div>'
        // Tarjeta pregunta
        + '<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--r-xl);padding:1.25rem 1.1rem;margin-bottom:.7rem;position:relative;overflow:hidden;">'
        + '<div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--teal),var(--violet));"></div>'
        + '<div style="font-size:.6rem;font-weight:800;color:var(--blue-l);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.6rem;font-family:var(--font-d);">❓ Pregunta '+q.n+'</div>'
        + imgHTML
        + '<div style="font-family:var(--font-d);font-size:.98rem;font-weight:700;line-height:1.65;color:var(--text);white-space:pre-line;">'+q.pregunta+'</div>'
        + '</div>'
        // Opciones
        + '<div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:.8rem;">'
        + q.opciones.map(function(opc, i) {
            var ya = resp !== null;
            var esCorrecta = (i === q.correcta);
            var esSel = (ya && resp === i);
            var esHint = (!ya && modoRepaso && esCorrecta);

            var border, bg, textColor, letterBg;
            if (esHint) {
                border = 'var(--teal)'; bg = 'var(--teal-bg)'; textColor = 'var(--teal-l)'; letterBg = 'var(--teal)';
            } else if (!ya) {
                border = 'var(--border)'; bg = 'var(--glass)'; textColor = 'var(--text-2)'; letterBg = 'rgba(255,255,255,.07)';
            } else if (esCorrecta) {
                border = 'var(--teal)'; bg = 'var(--teal-bg)'; textColor = 'var(--teal-l)'; letterBg = 'var(--teal)';
            } else if (esSel) {
                border = 'var(--rose)'; bg = 'var(--rose-bg)'; textColor = '#FFB0BA'; letterBg = 'var(--rose)';
            } else {
                border = 'rgba(255,255,255,.04)'; bg = 'transparent'; textColor = 'var(--text-dim)'; letterBg = 'rgba(255,255,255,.03)';
            }

            var icono = !ya ? '' : (esCorrecta ? '<span style="margin-left:auto;color:var(--teal);flex-shrink:0;">✓</span>' : (esSel ? '<span style="margin-left:auto;color:var(--rose);flex-shrink:0;">✗</span>' : ''));
            var letterColor = (ya && (esCorrecta || esSel)) || esHint ? '#fff' : 'var(--text-3)';

            // Explicación
            var expHTML = '';
            if (ya) {
                var expTxt = esCorrecta ? q.exp_correcta : (q.exp_incorrectas[i < q.correcta ? i : i-1] || q.exp_incorrectas[q.exp_incorrectas.length-1] || '');
                if (expTxt) expHTML = '<div style="margin-top:.5rem;padding:.55rem .7rem;border-radius:8px;font-size:.77rem;line-height:1.6;color:'+(esCorrecta?'var(--teal-l)':'var(--text-3)')+';background:'+(esCorrecta?'rgba(0,212,170,0.07)':'rgba(255,255,255,0.02)')+';border-left:2px solid '+(esCorrecta?'var(--teal)':'rgba(255,255,255,.06)')+';">'+expTxt+'</div>';
            }

            var hintAnim = esHint ? ' animation:repasoHintPulse 2s ease-in-out infinite;' : '';
            var clickAttr = !ya ? 'onclick="seleccionarSimOpc('+i+')"' : '';
            var hoverAttr = !ya && !esHint ? ' onmouseover="this.style.borderColor=\'var(--blue-bdr)\';this.style.background=\'var(--blue-bg)\'" onmouseout="this.style.borderColor=\''+border+'\';this.style.background=\''+bg+'\'"' : '';

            return '<div '+clickAttr+hoverAttr+' style="border:1.5px solid '+border+';background:'+bg+';border-radius:var(--r);padding:.82rem .9rem;cursor:'+(ya?'default':'pointer')+';position:relative;overflow:hidden;'+hintAnim+'">'
                +'<div style="display:flex;align-items:flex-start;gap:.7rem;">'
                +'<div style="width:26px;height:26px;border-radius:7px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:900;font-family:var(--font-d);background:'+letterBg+';color:'+letterColor+';">'+letras[i]+'</div>'
                +'<div style="flex:1;font-size:.86rem;font-weight:600;color:'+textColor+';line-height:1.45;">'+opc+icono+'</div>'
                +'</div>'
                + expHTML
                +'</div>';
        }).join('')
        + '</div>'
        // Botón siguiente
        + (resp !== null ? '<button onclick="avanzarSimPregunta()" style="width:100%;padding:.9rem;border:none;border-radius:var(--r);background:linear-gradient(135deg,var(--blue),var(--blue-d));color:#fff;font-weight:800;font-size:.9rem;cursor:pointer;font-family:var(--font-d);box-shadow:0 4px 16px var(--blue-glow);">'
            + (simState.idx < total-1 ? '→ Siguiente pregunta' : '🏁 Ver resultados') + '</button>' : '');
};

// ── Toggle modo repaso ───────────────────────────────────────
window.toggleSimRepaso = function() {
    if (typeof Repaso !== 'undefined') {
        Repaso.set(!Repaso.isActive());
    }
    renderSimPregunta();
};

// ── Seleccionar opción ───────────────────────────────────────
window.seleccionarSimOpc = function(idx) {
    if (simState.respuestas[simState.idx] !== null) return;
    simState.respuestas[simState.idx] = idx;
    renderSimPregunta();
};

// ── Avanzar ──────────────────────────────────────────────────
window.avanzarSimPregunta = function() {
    var total = simState.data.preguntas.length;
    if (simState.idx < total-1) {
        simState.idx++;
        renderSimPregunta();
        window.scrollTo(0,0);
        var c = document.querySelector('.container');
        if (c) c.scrollTop = 0;
    } else {
        clearInterval(simState.timerInterval);
        mostrarResultadosSim();
    }
};

// ── Salir ────────────────────────────────────────────────────
window.salirSimulacro = function() {
    clearInterval(simState.timerInterval);
    showScreen('simuladoresScreen');
    setTimeout(function(){ if(typeof renderSimuladoresLobby==='function') renderSimuladoresLobby(); }, 60);
};

// ── Resultados ───────────────────────────────────────────────
function mostrarResultadosSim() {
    var data = simState.data;
    var total = data.preguntas.length;
    var correctas = simState.respuestas.filter(function(r,i){ return r === data.preguntas[i].correcta; }).length;
    var pct = Math.round((correctas/total)*100);
    var tiempoUsado = (data.tiempo*60) - simState.segundosRestantes;
    var minUsados = Math.floor(tiempoUsado/60), segUsados = tiempoUsado%60;

    try {
        var best = JSON.parse(localStorage.getItem('mp_sim_best')||'{}');
        if (!best[simState.key] || pct > best[simState.key].pct)
            best[simState.key] = { pct:pct, correctas:correctas, fecha:new Date().toISOString() };
        localStorage.setItem('mp_sim_best', JSON.stringify(best));
    } catch(e){}

    var emoji = pct>=90?'🏆':pct>=70?'⭐':pct>=50?'📚':'💪';
    var msg   = pct>=90?'¡Dominio total del tema!':pct>=70?'¡Muy buen desempeño!':pct>=50?'Buen avance, sigue practicando':'Repasa los temas y vuelve a intentarlo';
    var letras=['A','B','C'];

    var el = document.getElementById('simulacroQuizContent');
    el.innerHTML = '<div style="text-align:center;padding:.5rem 0 1rem;">'
        +'<div style="font-size:3.5rem;margin-bottom:.5rem;filter:drop-shadow(0 0 20px rgba(245,166,35,.5));">'+emoji+'</div>'
        +'<div style="font-family:var(--font-d);font-size:3.8rem;font-weight:900;letter-spacing:-.06em;background:linear-gradient(135deg,#B8D0FF,var(--teal));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;">'+pct+'%</div>'
        +'<div style="font-size:1rem;font-weight:700;color:var(--text);margin:.35rem 0 .15rem;">'+msg+'</div>'
        +'<div style="font-size:.75rem;color:var(--text-3);">'+correctas+' correctas · '+total+' preguntas · ⏱ '+minUsados+'m '+segUsados+'s</div>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem;margin:.8rem 0;">'
        + _stat('✅',correctas,'Correctas','#6ee7b7')
        + _stat('❌',total-correctas,'Incorrectas','#f87171')
        + _stat('📊',pct+'%','Precisión','#7dd3fc')
        +'</div>'
        +'<div style="font-size:.58rem;font-weight:800;color:var(--text-dim);letter-spacing:.1em;text-transform:uppercase;margin:.4rem 0 .55rem;display:flex;align-items:center;gap:.5rem;">Preguntas incorrectas <span style="flex:1;height:1px;background:var(--border);"></span></div>'
        + simState.respuestas.map(function(r,i){
            if (r === data.preguntas[i].correcta) return '';
            var q=data.preguntas[i];
            var tuResp = r !== null ? letras[r]+') '+q.opciones[r] : '(sin responder)';
            return '<div style="background:rgba(255,92,122,0.06);border:1px solid rgba(255,92,122,0.18);border-radius:12px;padding:.82rem .9rem;margin-bottom:.42rem;">'
                +'<div style="font-size:.64rem;font-weight:800;color:var(--rose);margin-bottom:.3rem;">Pregunta '+q.n+'</div>'
                +'<div style="font-size:.8rem;color:var(--text-2);line-height:1.5;margin-bottom:.42rem;font-weight:600;">'+q.pregunta.substring(0,120)+(q.pregunta.length>120?'…':'')+'</div>'
                +'<div style="font-size:.75rem;color:#f87171;">✗ Tu resp: '+tuResp+'</div>'
                +'<div style="font-size:.75rem;color:var(--teal-l);margin-top:.18rem;">✓ Correcta: '+letras[q.correcta]+') '+q.opciones[q.correcta]+'</div>'
                +'</div>';
        }).join('')
        +'<div style="display:flex;gap:.5rem;margin-top:1rem;">'
        +'<button onclick="iniciarSimulacro(simState.key)" style="flex:1;padding:.85rem;border:none;border-radius:var(--r);background:linear-gradient(135deg,var(--blue),var(--blue-d));color:#fff;font-weight:800;font-size:.88rem;cursor:pointer;font-family:var(--font-d);">🔄 Intentar de nuevo</button>'
        +'<button onclick="salirSimulacro()" style="flex:1;padding:.85rem;border:1px solid var(--border);border-radius:var(--r);background:var(--glass);color:var(--text-2);font-weight:700;font-size:.88rem;cursor:pointer;">← Menú</button>'
        +'</div>';
}

function _stat(icon,val,label,color) {
    return '<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--r-lg);padding:.85rem .5rem;text-align:center;">'
        +'<div style="font-size:1.1rem;margin-bottom:.2rem;">'+icon+'</div>'
        +'<div style="font-family:var(--font-d);font-size:1.35rem;font-weight:900;color:'+color+';letter-spacing:-.04em;">'+val+'</div>'
        +'<div style="font-size:.58rem;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;margin-top:.08rem;">'+label+'</div>'
        +'</div>';
}

})();
