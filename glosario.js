// ============================================
// MEDIPREP SMART — GLOSARIO MÉDICO
// Con soporte de imágenes y búsqueda avanzada
// ============================================

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
            t.categoria.toLowerCase().includes(q) ||
            (t.sinonimos && t.sinonimos.some(s => s.toLowerCase().includes(q)))
        );
    }

    // Renderizar chips de categorías
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
        <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:1.1rem;margin-bottom:0.75rem;cursor:pointer;transition:border-color 0.15s;"
            onclick="toggleGlosarioItem('gexp_${t.id}')"
            onmouseover="this.style.borderColor='rgba(99,102,241,0.3)'"
            onmouseout="this.style.borderColor='rgba(255,255,255,0.06)'">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;">
                <div style="display:flex;align-items:center;gap:0.6rem;">
                    <span style="font-size:1.2rem;">${t.icono}</span>
                    <div>
                        <div style="font-weight:700;color:#f1f5f9;font-size:0.95rem;">${t.termino}</div>
                        <div style="display:flex;align-items:center;gap:0.4rem;margin-top:0.15rem;">
                            <span style="font-size:0.68rem;color:#6366f1;font-weight:600;">${t.categoria}</span>
                            ${t.imagen ? `<span style="font-size:0.65rem;color:#f59e0b;font-weight:600;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:0.1rem 0.4rem;border-radius:6px;">🖼️ imagen</span>` : ''}
                            ${t.sinonimos && t.sinonimos.length > 0 ? `<span style="font-size:0.65rem;color:#10b981;opacity:0.7;">${t.sinonimos.join(' · ')}</span>` : ''}
                        </div>
                    </div>
                </div>
                <span id="gexp_${t.id}_arrow" style="color:#475569;font-size:0.9rem;transition:transform 0.2s;flex-shrink:0;">▼</span>
            </div>
            <div id="gexp_${t.id}" style="display:none;margin-top:0.9rem;padding-top:0.9rem;border-top:1px solid rgba(255,255,255,0.06);">
                ${t.imagen ? _renderGlosarioImagen(t) : ''}
                <p style="color:#cbd5e1;font-size:0.88rem;line-height:1.65;margin-bottom:${t.ejemplo ? '0.75rem' : '0'};">${t.definicion}</p>
                ${t.ejemplo ? `<div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:0.6rem 0.85rem;font-size:0.82rem;color:#a5b4fc;"><strong>📌 Ejemplo:</strong> ${t.ejemplo}</div>` : ''}
                ${t.relacionados && t.relacionados.length > 0 ? `
                    <div style="margin-top:0.6rem;display:flex;flex-wrap:wrap;gap:0.35rem;">
                        <span style="font-size:0.7rem;color:#64748b;font-weight:600;">Ver también:</span>
                        ${t.relacionados.map(r => `<button onclick="event.stopPropagation();buscarGlosario('${r}')" style="font-size:0.7rem;color:#818cf8;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);padding:0.15rem 0.5rem;border-radius:8px;cursor:pointer;">${r}</button>`).join('')}
                    </div>` : ''}
            </div>
        </div>
    `).join('');

    // Contador
    const countEl = document.getElementById('glosarioCount');
    if (countEl) countEl.textContent = `${items.length} términos`;
}

// Renderiza la imagen de un término (si existe)
function _renderGlosarioImagen(t) {
    if (!t.imagen) return '';
    const src = t.imagen;
    const uid = 'gimg_' + t.id;
    return `
        <div id="${uid}_wrap" style="margin-bottom:0.85rem;border-radius:12px;overflow:hidden;border:1px solid rgba(99,102,241,0.2);background:rgba(0,0,0,0.25);">
            <div id="${uid}_loader" style="text-align:center;padding:0.85rem;font-size:0.72rem;color:#475569;">⏳ Cargando imagen...</div>
            <img src="${src}" alt="${t.termino}" loading="lazy"
                style="width:100%;max-height:240px;object-fit:contain;display:none;padding:0.5rem;box-sizing:border-box;"
                onload="(function(img){img.style.display='block';var l=document.getElementById('${uid}_loader');if(l)l.style.display='none';})(this)"
                onerror="(function(wrap){if(wrap)wrap.innerHTML='<div style=\\'text-align:center;padding:0.65rem;font-size:0.72rem;color:#475569;\\'>📡 Requiere conexión a internet</div>';})(document.getElementById('${uid}_wrap'))">
            ${t.imagenCredito ? `<div style="font-size:0.62rem;color:#475569;text-align:center;padding:0.2rem 0.5rem 0.4rem;border-top:1px solid rgba(255,255,255,0.04);">${t.imagenCredito}</div>` : ''}
        </div>`;
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
    // Si se busca desde "Ver también", limpiar el filtro de categoría
    glosarioFiltroCategoria = 'Todos';
    renderGlosario();
    // Limpiar el input si existe
    const inp = document.getElementById('glosarioInput');
    if (inp) inp.value = query;
}

function limpiarBusquedaGlosario() {
    glosarioQuery = '';
    glosarioFiltroCategoria = 'Todos';
    const inp = document.getElementById('glosarioInput');
    if (inp) inp.value = '';
    const btn = document.getElementById('glosarioClearBtn');
    if (btn) btn.style.display = 'none';
    renderGlosario();
}

console.log('✅ Glosario con soporte de imágenes cargado');
