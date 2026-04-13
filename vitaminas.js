const MODULO_VITAMINAS = {
    id: 'vitaminas',
    titulo: 'Vitaminas',
    descripcion: 'Liposolubles (A,D,E,K), hidrosolubles (B y C), hipervitaminosis y fuentes',
    icono: '🍊',
    progreso: 0,
    lecciones: [
        {
            id: 'vitaminas-intro',
            titulo: 'Introducción y Clasificación',
            tiempo: '3 min', completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#fb923c;margin:0 0 .4rem;">¿Qué son las vitaminas?</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Compuestos orgánicos <strong>esenciales en pequeñas cantidades</strong> para el metabolismo. El organismo no puede sintetizarlas en cantidad suficiente, por lo que deben obtenerse de la dieta.</p>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(251,146,60,0.1);border:1.5px solid rgba(251,146,60,0.3);border-radius:12px;padding:1rem;">
                        <div style="font-weight:800;color:#fbbf24;font-size:.88rem;margin-bottom:.5rem;">🔴 LIPOSOLUBLES</div>
                        <div style="font-size:2rem;text-align:center;margin:.5rem 0;letter-spacing:.3rem;">A D E K</div>
                        <div style="font-size:.78rem;color:#94a3b8;line-height:1.55;">Se almacenan en tejido adiposo e hígado. <strong style="color:#fca5a5;">Riesgo de toxicidad por acumulación.</strong> Se absorben con grasas dietéticas.</div>
                    </div>
                    <div style="background:rgba(56,189,248,0.1);border:1.5px solid rgba(56,189,248,0.3);border-radius:12px;padding:1rem;">
                        <div style="font-weight:800;color:#7dd3fc;font-size:.88rem;margin-bottom:.5rem;">🔵 HIDROSOLUBLES</div>
                        <div style="font-size:1rem;text-align:center;margin:.5rem 0;font-weight:700;color:#e2e8f0;">Complejo B + C</div>
                        <div style="font-size:.78rem;color:#94a3b8;line-height:1.55;">No se almacenan. El exceso se elimina por orina. <strong style="color:#6ee7b7;">Menor riesgo de toxicidad.</strong></div>
                    </div>
                </div>
                <div style="background:rgba(16,185,129,0.1);border-radius:10px;padding:.85rem 1rem;margin-bottom:.75rem;">
                    <strong style="color:#6ee7b7;">💡 Nemotecnia ADEK:</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.86rem;"><strong style="color:#fbbf24;">A</strong>yuda <strong style="color:#fbbf24;">D</strong>esde <strong style="color:#fbbf24;">E</strong>ste <strong style="color:#fbbf24;">K</strong>omplot → <strong>ADEK</strong> son liposolubles</p>
                </div>
                <div style="background:rgba(99,102,241,0.1);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#a5b4fc;">⚠️ Hipervitaminosis vs Avitaminosis:</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.85rem;"><strong>Hipervitaminosis:</strong> exceso de vitaminas, principalmente liposolubles (ADEK). Riesgo con suplementación excesiva.<br><strong>Avitaminosis/hipovitaminosis:</strong> deficiencia vitamínica. Cada vitamina tiene su enfermedad característica.</p>
                </div>`
        },
        {
            id: 'vitaminas-liposolubles',
            titulo: 'Vitaminas Liposolubles (A, D, E, K)',
            tiempo: '4 min', completada: false,
            contenido: `
                <h3 style="color:#fbbf24;margin:0 0 .75rem;">Vitaminas Liposolubles: ADEK</h3>
                <div style="display:grid;gap:.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,146,60,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(251,146,60,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#fbbf24;">A</div>
                            <div><strong style="color:#fbbf24;">Vitamina A — Retinol</strong><div style="font-size:.72rem;color:#94a3b8;">Fuentes: hígado, zanahoria, mango, huevo</div></div>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            ✅ <span style="color:#94a3b8;">Visión (rodopsina), división celular, crecimiento, inmunidad</span><br>
                            ❌ Deficiencia: <span style="color:#fca5a5;font-weight:600;">Nictalopía (ceguera nocturna)</span>, xeroftalmia<br>
                            ⚠️ Toxicidad: cefalea, hepatotoxicidad, teratogenia
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,191,36,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(251,191,36,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#fde68a;">D</div>
                            <div><strong style="color:#fde68a;">Vitamina D — Colecalciferol (D3)</strong><div style="font-size:.72rem;color:#94a3b8;">Fuentes: luz solar, pescado graso, leche</div></div>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            ✅ <span style="color:#94a3b8;">Homeostasis calcio-fósforo, mineralización ósea y dental</span><br>
                            ❌ Deficiencia: <span style="color:#fca5a5;font-weight:600;">Raquitismo</span> (niños) / <span style="color:#fca5a5;font-weight:600;">Osteomalacia</span> (adultos)<br>
                            ⚠️ Toxicidad: hipercalcemia, calcificación de tejidos blandos
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#6ee7b7;">E</div>
                            <div><strong style="color:#6ee7b7;">Vitamina E — Tocoferol</strong><div style="font-size:.72rem;color:#94a3b8;">Fuentes: aceites vegetales, nueces, semillas</div></div>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            ✅ <span style="color:#94a3b8;">Antioxidante principal liposoluble. Protege membranas celulares del daño oxidativo</span><br>
                            ❌ Deficiencia: <span style="color:#fca5a5;font-weight:600;">Neuropatías periféricas y trastornos oculares</span> (poco común)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(139,92,246,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#c4b5fd;">K</div>
                            <div><strong style="color:#c4b5fd;">Vitamina K — Filoquinona (K1) / Menaquinona (K2)</strong><div style="font-size:.72rem;color:#94a3b8;">Fuentes: vegetales de hoja verde, hígado</div></div>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            ✅ <span style="color:#94a3b8;">Cofactor para activar factores de coagulación: <strong>II (protrombina), VII, IX y X</strong></span><br>
                            ❌ Deficiencia: <span style="color:#fca5a5;font-weight:600;">Sangrado prolongado, coagulopatía</span><br>
                            💊 Warfarina es <strong>antagonista de vit. K</strong>: inhibe su reciclaje → anticoagulante
                        </div>
                    </div>
                </div>`
        },
        {
            id: 'vitaminas-b',
            titulo: 'Vitaminas del Complejo B',
            tiempo: '5 min', completada: false,
            contenido: `
                <h3 style="color:#7dd3fc;margin:0 0 .75rem;">Vitaminas del Complejo B — Hidrosolubles</h3>
                <div style="display:grid;gap:.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B1 — Tiamina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Carne de cerdo, cereales integrales, legumbres</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Coenzima en metabolismo de <strong>carbohidratos y aminoácidos</strong><br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Beriberi</span> (húmedo: cardíaco / seco: neurológico) y <span style="color:#fca5a5;font-weight:600;">Wernicke-Korsakoff</span> (alcohólicos)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B2 — Riboflavina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Lácteos, carne, huevo, vegetales verdes</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Componente de <strong>FAD y FMN</strong>. Síntesis de hemoglobina, metabolismo energético<br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Queilosis (grietas en labios), glositis, alteraciones mucocutáneas</span>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B3 — Niacina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Carnes, pescado, maní, cereales</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Componente de <strong>NAD+ y NADP+</strong>. Metabolismo de carbohidratos, lípidos y proteínas<br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Pelagra</span> — las 3D: <strong>D</strong>ermatitis, <strong>D</strong>iarrea, <strong>D</strong>emencia (+ muerte: 4D)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B5 — Ácido Pantoténico</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Presente en casi todos los alimentos</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Componente de la <strong>coenzima A (CoA)</strong>. Esencial para metabolismo de carbohidratos, grasas y proteínas<br>
                            Deficiencia: Muy rara. Síndrome de "pies ardientes"
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B6 — Piridoxina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Carnes, plátano, papa, espinaca</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Síntesis de <strong>neurotransmisores</strong> (serotonina, dopamina, GABA) y metabolismo de aminoácidos<br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Alteraciones neurológicas, hipoglucemia en ayuno</span>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B7 — Biotina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Huevo (cocinado), nueces, hígado</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Coenzima en <strong>carboxilaciones</strong> (gluconeogénesis, síntesis de ácidos grasos)<br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Dermatitis, alopecia, conjuntivitis</span>. Clara de huevo cruda inhibe su absorción
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B9 — Ácido Fólico</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Vegetales verdes, legumbres, hígado</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Síntesis y reparación del <strong>ADN</strong>, eritrocitos, <strong>desarrollo del tubo neural</strong><br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Anemia megaloblástica</span> y <span style="color:#fca5a5;font-weight:600;">defectos del tubo neural</span> (espina bífida, anencefalia) en embarazo
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;">
                            <strong style="color:#7dd3fc;">B12 — Cianocobalamina</strong>
                            <span style="font-size:.72rem;color:#94a3b8;">Carnes, mariscos, lácteos, huevo (solo animal)</span>
                        </div>
                        <div style="font-size:.84rem;color:#cbd5e1;">
                            Función: Síntesis ADN, formación eritrocitos, mantenimiento de la <strong>mielina</strong> del sistema nervioso<br>
                            Deficiencia: <span style="color:#fca5a5;font-weight:600;">Anemia megaloblástica perniciosa</span> + <span style="color:#fca5a5;font-weight:600;">degeneración subaguda combinada de médula espinal</span><br>
                            Absorción requiere <strong>Factor Intrínseco</strong> (secretado por células parietales del estómago)
                        </div>
                    </div>
                </div>`
        },
        {
            id: 'vitamina-c-resumen',
            titulo: 'Vitamina C y Tabla Resumen',
            tiempo: '3 min', completada: false,
            contenido: `
                <div style="background:rgba(56,189,248,0.12);border-left:4px solid #38bdf8;padding:1.25rem;border-radius:8px;margin-bottom:1.25rem;">
                    <strong style="color:#7dd3fc;">Vitamina C — Ácido Ascórbico</strong>
                    <div style="margin-top:.4rem;font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                        Fuentes: <span style="color:#94a3b8;">Cítricos, kiwi, pimiento, brócoli, fresas</span><br>
                        Función: <strong>Síntesis de colágeno</strong> (prolil/lisil hidroxilasas), inmunomodulación, antioxidante, facilita absorción de <strong>hierro no hemo</strong><br>
                        Deficiencia: <span style="color:#fca5a5;font-weight:600;">Escorbuto</span> — encías sangrantes, petequias, cicatrización deficiente, pérdida de dientes<br>
                        Curiosidad: El ser humano es de los pocos mamíferos que no puede sintetizar vitamina C endógenamente
                    </div>
                </div>
                <h3 style="color:#fbbf24;margin:0 0 .75rem;">⚡ Tabla de Referencia Rápida</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:.78rem;">
                        <thead><tr style="background:rgba(245,158,11,0.2);">
                            <th style="padding:.5rem .6rem;text-align:left;color:#fbbf24;border-bottom:1px solid rgba(245,158,11,0.25);">Vitamina</th>
                            <th style="padding:.5rem .6rem;text-align:left;color:#fbbf24;border-bottom:1px solid rgba(245,158,11,0.25);">Nombre</th>
                            <th style="padding:.5rem .6rem;text-align:left;color:#fbbf24;border-bottom:1px solid rgba(245,158,11,0.25);">Deficiencia</th>
                        </tr></thead>
                        <tbody>
                            ${[['A','Retinol','Nictalopía, xeroftalmia'],['D','Colecalciferol','Raquitismo (niños) / Osteomalacia (adultos)'],['E','Tocoferol','Neuropatías (raro)'],['K','Filoquinona','Coagulopatía, sangrado'],['B1','Tiamina','Beriberi, Wernicke-Korsakoff'],['B2','Riboflavina','Queilosis, glositis'],['B3','Niacina','Pelagra (3D)'],['B5','Pantoténico','Sínd. pies ardientes (raro)'],['B6','Piridoxina','Alt. neurológicas'],['B7','Biotina','Dermatitis, alopecia'],['B9','Ác. Fólico','Anemia megaloblástica, defecto tubo neural'],['B12','Cobalamina','Anemia perniciosa, daño neurológico'],['C','Ác. Ascórbico','Escorbuto']].map(([v,n,d])=>`<tr style="border-bottom:1px solid rgba(255,255,255,.04);"><td style="padding:.45rem .6rem;color:#e2e8f0;font-weight:700;">${v}</td><td style="padding:.45rem .6rem;color:#94a3b8;">${n}</td><td style="padding:.45rem .6rem;color:#fca5a5;font-size:.77rem;">${d}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
                <div style="background:rgba(245,158,11,0.1);border-radius:10px;padding:.85rem 1rem;text-align:center;">
                    <p style="margin:0;color:#eab308;">💡 <strong>¡Módulo completado! Realiza la evaluación.</strong></p>
                </div>`
        }
    ],

    evaluacion: [
        { pregunta: "Las vitaminas liposolubles son:", opciones: ["A, B, C y D","A, D, E y K","B1, B2, B6 y B12","C, D, E y K"], correcta: 1, explicacion: "Vitaminas liposolubles: ADEK. Se almacenan en tejido adiposo e hígado. Las hidrosolubles son el complejo B y vitamina C.", categoria: "Vitaminas" },
        { pregunta: "¿Cuál es el principal riesgo de las vitaminas liposolubles en comparación con las hidrosolubles?", opciones: ["Mayor costo económico","Se acumulan en tejidos y pueden causar toxicidad por hipervitaminosis","Menor absorción intestinal","Requieren cofactores para su activación"], correcta: 1, explicacion: "Las vitaminas liposolubles (ADEK) se almacenan en grasa e hígado. Su exceso no se elimina fácilmente por orina, por lo que pueden acumularse y causar toxicidad.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina A es esencial para:", opciones: ["La coagulación sanguínea","La homeostasis del calcio","La visión nocturna, división celular e inmunidad","La síntesis de colágeno"], correcta: 2, explicacion: "La vitamina A (retinol) participa en la visión (rodopsina), división celular, crecimiento e inmunidad. Deficiencia → nictalopía.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina D en adultos provoca:", opciones: ["Nictalopía","Raquitismo","Osteomalacia","Escorbuto"], correcta: 2, explicacion: "En adultos la deficiencia de vitamina D causa osteomalacia (desmineralización). En niños causa raquitismo (deformidad de huesos en crecimiento).", categoria: "Vitaminas" },
        { pregunta: "La Vitamina E (tocoferol) actúa principalmente como:", opciones: ["Factor de coagulación","Coenzima en metabolismo de carbohidratos","Potente antioxidante liposoluble","Regulador del calcio"], correcta: 2, explicacion: "La vitamina E es el principal antioxidante liposoluble. Protege las membranas celulares del daño oxidativo (peroxidación lipídica).", categoria: "Vitaminas" },
        { pregunta: "Los factores de coagulación dependientes de Vitamina K son:", opciones: ["I, II, V y VIII","II, VII, IX y X","I, III, VIII y XII","IV, VI, X y XI"], correcta: 1, explicacion: "Los factores K-dependientes son II (protrombina), VII, IX y X. La vitamina K es cofactor de la carboxilasa que los activa.", categoria: "Vitaminas" },
        { pregunta: "La warfarina actúa como anticoagulante porque:", opciones: ["Inhibe la síntesis de vitamina K en el hígado","Activa los factores procoagulantes","Es antagonista de la vitamina K, inhibiendo la activación de los factores II, VII, IX y X","Estimula la fibrinólisis"], correcta: 2, explicacion: "La warfarina inhibe la vitamina K epóxido reductasa, impidiendo el reciclaje de la vitamina K activa necesaria para los factores de coagulación.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de B1 (Tiamina) produce Beriberi y:", opciones: ["Escorbuto","Pelagra","Síndrome de Wernicke-Korsakoff (en alcohólicos)","Anemia megaloblástica"], correcta: 2, explicacion: "La tiamina es esencial para el metabolismo cerebral de glucosa. En alcohólicos su deficiencia produce el síndrome de Wernicke-Korsakoff (confusión, oftalmoplejia, ataxia).", categoria: "Vitaminas" },
        { pregunta: "La Pelagra (dermatitis, diarrea, demencia) es la enfermedad por deficiencia de:", opciones: ["Vitamina B1 (Tiamina)","Vitamina B3 (Niacina)","Vitamina B12","Vitamina C"], correcta: 1, explicacion: "La pelagra es la enfermedad clásica por deficiencia de niacina (B3). Se recuerda con las 4D: Dermatitis, Diarrea, Demencia y muerte (Death).", categoria: "Vitaminas" },
        { pregunta: "El ácido fólico (B9) es especialmente importante en el embarazo para:", opciones: ["Prevenir el escorbuto","Prevenir defectos en el tubo neural (espina bífida, anencefalia)","Fortalecer el sistema inmune","Aumentar absorción de calcio"], correcta: 1, explicacion: "El ácido fólico es esencial para el cierre del tubo neural (semanas 3-4 del embarazo). Su deficiencia periconcepcional aumenta el riesgo de espina bífida.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B12 se diferencia del ácido fólico porque:", opciones: ["B12 es liposoluble","Solo B12 participa en síntesis de ADN","La deficiencia de B12 causa degeneración neurológica (desmielinización) además de anemia megaloblástica","B9 causa mayor daño neurológico que B12"], correcta: 2, explicacion: "Ambas causan anemia megaloblástica, pero la B12 también mantiene la mielina. Su deficiencia causa degeneración subaguda combinada de la médula espinal (parestesias, debilidad).", categoria: "Vitaminas" },
        { pregunta: "¿Qué es el Factor Intrínseco y por qué es importante?", opciones: ["Un cofactor hepático para la vitamina K","Una proteína gástrica producida por células parietales, necesaria para absorber la vitamina B12","Un receptor intestinal para la vitamina D","Una enzima que activa la vitamina A"], correcta: 1, explicacion: "El Factor Intrínseco (FI) es producido por las células parietales del estómago. Se une a la B12 para permitir su absorción en el íleon terminal. Su ausencia causa anemia perniciosa.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina C provoca:", opciones: ["Beriberi","Pelagra","Escorbuto (encías sangrantes, cicatrización deficiente)","Nictalopía"], correcta: 2, explicacion: "El escorbuto por deficiencia de vitamina C resulta de la síntesis deficiente de colágeno: encías sangrantes, petequias, mala cicatrización, pérdida de dientes.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina C facilita la absorción del:", opciones: ["Calcio","Hierro no hemo","Zinc","Magnesio"], correcta: 1, explicacion: "La vitamina C reduce el hierro férrico (Fe³⁺) a ferroso (Fe²⁺), forma más absorbible. Por eso se recomienda tomar suplementos de hierro con jugo de naranja.", categoria: "Vitaminas" },
        { pregunta: "¿Cuál vitamina puede sintetizarse con exposición solar?", opciones: ["Vitamina A","Vitamina C","Vitamina E","Vitamina D"], correcta: 3, explicacion: "La vitamina D se sintetiza en la piel por acción de la luz UV-B sobre el 7-dehidrocolesterol. Luego se activa en hígado (25-OH) y riñón (1,25-OH = calcitriol activo).", categoria: "Vitaminas" },
        { pregunta: "La vitamina B7 (Biotina) participa principalmente en:", opciones: ["Síntesis de neurotransmisores","Reacciones de carboxilación (gluconeogénesis, síntesis de ácidos grasos)","Síntesis de colágeno","Coagulación sanguínea"], correcta: 1, explicacion: "La biotina es coenzima de carboxilasas clave: piruvato carboxilasa (gluconeogénesis), acetil-CoA carboxilasa (síntesis de ácidos grasos).", categoria: "Vitaminas" },
        { pregunta: "¿Cuál nutriente presente en la clara de huevo cruda interfiere con la absorción de biotina?", opciones: ["Ovoalbúmina","Avidina (se une a biotina impidiendo su absorción)","Lisozima","Conalbúmina"], correcta: 1, explicacion: "La avidina de la clara de huevo cruda se une fuertemente a la biotina en el intestino, impidiendo su absorción. La cocción destruye la avidina.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B2 (Riboflavina) es componente de:", opciones: ["NAD+ y NADP+","FAD y FMN","Coenzima A","Piridoxal fosfato"], correcta: 1, explicacion: "La riboflavina es componente del FAD (flavín adenín dinucleótido) y FMN (flavín mononucleótido), coenzimas esenciales en la cadena respiratoria.", categoria: "Vitaminas" },
        { pregunta: "La hipervitaminosis A puede producir:", opciones: ["Escorbuto y sangrado","Cefalea, hepatotoxicidad y teratogenia","Hipocalcemia y tetania","Anemia megaloblástica"], correcta: 1, explicacion: "La hipervitaminosis A (intoxicación por exceso de vitamina A) produce cefalea, visión borrosa, hepatotoxicidad y es teratogénica (malformaciones fetales).", categoria: "Vitaminas" },
        { pregunta: "¿Qué vitaminas componen el complejo B?", opciones: ["B1, B2, B3, B5, B6, B7, B9 y B12","Solo B1, B6 y B12","B1, B3, B6, B9 y C","B2, B4, B8 y B12"], correcta: 0, explicacion: "El complejo B incluye: B1 (tiamina), B2 (riboflavina), B3 (niacina), B5 (pantoténico), B6 (piridoxina), B7 (biotina), B9 (ácido fólico) y B12 (cobalamina).", categoria: "Vitaminas" }
    ]
};
console.log('✅ Módulo Vitaminas cargado —', MODULO_VITAMINAS.lecciones.length, 'lecciones,', MODULO_VITAMINAS.evaluacion.length, 'preguntas');
