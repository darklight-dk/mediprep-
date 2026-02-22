// ============================================
// MEDIPREP SMART — PLAN DE ESTUDIO AUTOMÁTICO
// ============================================

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

    const horasTotales = diasRestantes * horasDia;

    // Detectar áreas débiles del banco de incorrectas
    const wrongBank = WrongAnswersBank.getAll();
    const catMap = {};
    wrongBank.forEach(q => {
        const cat = q.categoria || 'general';
        catMap[cat] = (catMap[cat] || 0) + 1;
    });

    const distribucion = [
        { nombre: 'Premedicina (Biología, Fisio)', porcentaje: 30, icono: '🧬', color: '#8b5cf6' },
        { nombre: 'Matemáticas y Estadística',      porcentaje: 25, icono: '📐', color: '#6366f1' },
        { nombre: 'Comprensión de Textos',           porcentaje: 20, icono: '📖', color: '#14b8a6' },
        { nombre: 'Redacción y Gramática',           porcentaje: 15, icono: '✍️', color: '#f59e0b' },
        { nombre: 'Repaso y Simulacros',             porcentaje: 10, icono: '🎯', color: '#ef4444' },
    ];

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

        const totalSemanas = Math.ceil(diasRestantes / 7);
        const progreso = semanaNum / totalSemanas;

        let enfoque, descripcion;
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
                        <span style="margin-left:0.5rem;color:${col};font-size:0.65rem;font-weight:700;background:rgba(99,102,241,0.1);padding:0.15rem 0.5rem;border-radius:6px;">${s.enfoque}</span>
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

console.log('✅ Plan de Estudio cargado');
