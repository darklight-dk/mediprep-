const MODULO_VITAMINAS = {
    id: 'vitaminas',
    titulo: 'Vitaminas',
    descripcion: 'Vitaminas liposolubles (A,D,E,K) e hidrosolubles (complejo B y C)',
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
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Compuestos orgánicos <strong>esenciales en pequeñas cantidades</strong> para el metabolismo. El organismo no puede sintetizarlas (en general), por lo que deben obtenerse de la dieta.</p>
                </div>
                <h3 style="color:#fb923c;margin:1rem 0 .75rem;">Clasificación según solubilidad</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(251,146,60,0.1);border:1.5px solid rgba(251,146,60,0.3);border-radius:12px;padding:1rem;">
                        <div style="font-weight:800;color:#fbbf24;font-size:.88rem;margin-bottom:.5rem;">🔴 LIPOSOLUBLES</div>
                        <div style="font-size:2rem;text-align:center;margin:.5rem 0;">A D E K</div>
                        <div style="font-size:.78rem;color:#94a3b8;line-height:1.5;">Se almacenan en tejido adiposo e hígado. Pueden acumularse y causar toxicidad por sobredosis.</div>
                    </div>
                    <div style="background:rgba(56,189,248,0.1);border:1.5px solid rgba(56,189,248,0.3);border-radius:12px;padding:1rem;">
                        <div style="font-weight:800;color:#7dd3fc;font-size:.88rem;margin-bottom:.5rem;">🔵 HIDROSOLUBLES</div>
                        <div style="font-size:1.1rem;text-align:center;margin:.5rem 0;font-weight:700;color:#e2e8f0;">Complejo B + C</div>
                        <div style="font-size:.78rem;color:#94a3b8;line-height:1.5;">No se almacenan. El exceso se elimina por orina. Menor riesgo de toxicidad.</div>
                    </div>
                </div>
                <div style="background:rgba(16,185,129,0.1);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#6ee7b7;">💡 Nemotecnia para recordar liposolubles:</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.86rem;"><strong style="color:#fbbf24;">A</strong>yuda <strong style="color:#fbbf24;">D</strong>esde <strong style="color:#fbbf24;">E</strong>ste <strong style="color:#fbbf24;">K</strong>omplot → <strong>ADEK</strong> son liposolubles</p>
                </div>`
        },
        {
            id: 'vitaminas-liposolubles',
            titulo: 'Vitaminas Liposolubles (A, D, E, K)',
            tiempo: '4 min', completada: false,
            contenido: `
                <h3 style="color:#fbbf24;margin:0 0 .75rem;">Vitaminas Liposolubles: A D E K</h3>
                <div style="display:grid;gap:.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,146,60,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(251,146,60,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#fbbf24;">A</div>
                            <strong style="color:#fbbf24;">Vitamina A — Retinol</strong>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            <div>✅ Función: <span style="color:#94a3b8;">Visión (especialmente nocturna), división celular, crecimiento e inmunidad</span></div>
                            <div>❌ Deficiencia: <span style="color:#f87171;font-weight:600;">Nictalopía (ceguera nocturna)</span> y alteraciones en la división celular</div>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,191,36,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(251,191,36,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#fde68a;">D</div>
                            <strong style="color:#fde68a;">Vitamina D — Colecalciferol (D3)</strong>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            <div>✅ Función: <span style="color:#94a3b8;">Homeostasis del calcio y fósforo. Esencial para huesos y dientes</span></div>
                            <div>❌ Deficiencia: <span style="color:#f87171;font-weight:600;">Raquitismo</span> (niños) y <span style="color:#f87171;font-weight:600;">Osteomalacia</span> (adultos)</div>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#6ee7b7;">E</div>
                            <strong style="color:#6ee7b7;">Vitamina E — Tocoferol</strong>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            <div>✅ Función: <span style="color:#94a3b8;">Potente antioxidante. Protege membranas celulares del daño oxidativo</span></div>
                            <div>❌ Deficiencia: <span style="color:#f87171;font-weight:600;">Neuropatías y trastornos oculares</span> (poco común)</div>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(139,92,246,0.3);border-radius:12px;padding:1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#c4b5fd;">K</div>
                            <strong style="color:#c4b5fd;">Vitamina K — Filoquinona</strong>
                        </div>
                        <div style="font-size:.85rem;color:#cbd5e1;line-height:1.6;">
                            <div>✅ Función: <span style="color:#94a3b8;">Coenzima para activar factores de coagulación II, VII, IX y X</span></div>
                            <div>❌ Deficiencia: <span style="color:#f87171;font-weight:600;">Deficiencia en la coagulación</span> (sangrado, equimosis)</div>
                        </div>
                    </div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#fbbf24;">⚠️ Punto clave EXANI:</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.86rem;">Vitamina K → anticoagulantes como <strong>warfarina actúan como antagonistas</strong> de la vitamina K. Los factores K-dependientes son <strong>2, 7, 9 y 10</strong>.</p>
                </div>`
        },
        {
            id: 'vitaminas-b-c',
            titulo: 'Vitaminas Hidrosolubles (Complejo B y C)',
            tiempo: '5 min', completada: false,
            contenido: `
                <h3 style="color:#7dd3fc;margin:0 0 .75rem;">Vitaminas del Complejo B</h3>
                <div style="display:grid;gap:.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B1 — Tiamina</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Metabolismo de <strong>carbohidratos y aminoácidos</strong><br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Beriberi</span> (cardiovascular o neurológico) y <span style="color:#f87171;font-weight:600;">Síndrome de Wernicke-Korsakoff</span> (alcohólicos)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B2 — Riboflavina</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Síntesis de <strong>hemoglobina</strong> y metabolismo de carbohidratos, grasas y proteínas<br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Alteraciones mucocutáneas</span> (queilosis, glositis)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B3 — Niacina</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Metabolismo de carbohidratos, lípidos y proteínas. Esencial para <strong>SN, digestivo y tegumentario</strong><br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Pelagra</span> (las 3 D: Dermatitis, Diarrea, Demencia)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B6 — Piridoxina</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Síntesis de <strong>neurotransmisores</strong> y metabolismo de proteínas y aminoácidos<br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Hipoglucemia en ayuno</span> y alteraciones neurológicas
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B9 — Ácido Fólico</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Síntesis y reparación del <strong>ADN</strong>, formación de eritrocitos, <strong>desarrollo del tubo neural</strong><br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Anemia megaloblástica</span> (deficiencia de folatos) y <span style="color:#f87171;font-weight:600;">defectos del tubo neural</span> (espina bífida)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#7dd3fc;">B12 — Cianocobalamina</strong>
                        <div style="font-size:.84rem;color:#cbd5e1;margin-top:.25rem;">
                            Función: Síntesis del <strong>ADN</strong>, formación de eritrocitos, mantenimiento del <strong>sistema nervioso</strong><br>
                            Deficiencia: <span style="color:#f87171;font-weight:600;">Anemia megaloblástica perniciosa</span> y degeneración neurológica
                        </div>
                    </div>
                </div>
                <div style="background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.25);border-radius:12px;padding:1rem;margin-bottom:.75rem;">
                    <strong style="color:#7dd3fc;">Vitamina C — Ácido Ascórbico</strong>
                    <div style="font-size:.84rem;color:#cbd5e1;margin-top:.3rem;">
                        Función: Síntesis de <strong>colágeno</strong> y funcionamiento del <strong>sistema inmune</strong>. Potente antioxidante.<br>
                        Deficiencia: <span style="color:#f87171;font-weight:600;">Escorbuto</span> (encías sangrantes, pérdida de dientes, cicatrización deficiente)
                    </div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border-radius:10px;padding:.85rem 1rem;text-align:center;">
                    <p style="margin:0;color:#eab308;">💡 <strong>¡Módulo completado! Realiza la evaluación.</strong></p>
                </div>`
        }
    ],
    evaluacion: [
        { pregunta: "Las vitaminas liposolubles son:", opciones: ["A, B, C y D","A, D, E y K","B1, B2, B6 y B12","C, D, E y K"], correcta: 1, explicacion: "Vitaminas liposolubles: A, D, E y K (nemotecnia: ADEK). Se almacenan en tejido adiposo e hígado. Las hidrosolubles son el complejo B y vitamina C.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina A (retinol) es esencial para:", opciones: ["La coagulación sanguínea","La homeostasis del calcio","La visión nocturna, división celular e inmunidad","La síntesis de colágeno"], correcta: 2, explicacion: "La vitamina A participa en la visión (rodopsina), división celular, crecimiento e inmunidad. Su deficiencia causa nictalopía (ceguera nocturna).", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina D en adultos provoca:", opciones: ["Nictalopía","Raquitismo","Osteomalacia","Escorbuto"], correcta: 2, explicacion: "La deficiencia de vitamina D en adultos causa osteomalacia (desmineralización ósea). En niños causa raquitismo (deformidad de huesos en crecimiento).", categoria: "Vitaminas" },
        { pregunta: "¿Cuál vitamina actúa como potente antioxidante?", opciones: ["Vitamina A","Vitamina D","Vitamina E","Vitamina K"], correcta: 2, explicacion: "La vitamina E (tocoferol) es el principal antioxidante liposoluble. Protege las membranas celulares del daño oxidativo.", categoria: "Vitaminas" },
        { pregunta: "Los factores de coagulación dependientes de Vitamina K son:", opciones: ["I, II, V y VIII","II, VII, IX y X","I, III, VIII y XII","IV, VI, X y XI"], correcta: 1, explicacion: "Los factores K-dependientes son II (protrombina), VII, IX y X. La vitamina K es coenzima necesaria para su activación en el hígado.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina K produce principalmente:", opciones: ["Nictalopía","Raquitismo","Escorbuto","Déficit de coagulación y sangrado"], correcta: 3, explicacion: "La vitamina K activa los factores de coagulación. Su deficiencia produce sangrado anormal, equimosis y coagulopatía.", categoria: "Vitaminas" },
        { pregunta: "Las vitaminas hidrosolubles incluyen:", opciones: ["Vitaminas A, D, E y K","Solo vitamina C","Complejo B y vitamina C","Solo vitaminas del complejo B"], correcta: 2, explicacion: "Las vitaminas hidrosolubles son las del complejo B (B1, B2, B3, B5, B6, B7, B9, B12) y la vitamina C.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina B1 (Tiamina) provoca:", opciones: ["Pelagra","Escorbuto","Beriberi y Wernicke-Korsakoff","Anemia megaloblástica"], correcta: 2, explicacion: "La deficiencia de tiamina causa Beriberi (forma cardiovascular o neurológica seca/húmeda) y el síndrome de Wernicke-Korsakoff en pacientes alcohólicos.", categoria: "Vitaminas" },
        { pregunta: "¿Qué enfermedad se asocia con deficiencia de Vitamina B3 (Niacina)?", opciones: ["Beriberi","Escorbuto","Pelagra","Raquitismo"], correcta: 2, explicacion: "La pelagra es la enfermedad por deficiencia de niacina. Se caracteriza por las 3 D: Dermatitis, Diarrea y Demencia.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B9 (Ácido fólico) es especialmente importante durante el embarazo para:", opciones: ["Prevenir el escorbuto","Prevenir defectos en el tubo neural del feto","Fortalecer el sistema inmune materno","Aumentar la absorción de hierro"], correcta: 1, explicacion: "El ácido fólico es esencial para el correcto cierre del tubo neural. Su deficiencia en el primer trimestre aumenta el riesgo de espina bífida y anencefalia.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B12 (Cianocobalamina) se diferencia del ácido fólico porque:", opciones: ["B12 es liposoluble; B9 es hidrosoluble","La deficiencia de B12 causa anemia perniciosa y degeneración neurológica; B9 solo causa anemia megaloblástica","Solo la B12 participa en la síntesis de ADN","B9 se absorbe mejor que B12"], correcta: 1, explicacion: "Ambas causan anemia megaloblástica, pero la B12 también mantiene la mielina nerviosa. Su deficiencia causa degeneración subaguda combinada de la médula espinal.", categoria: "Vitaminas" },
        { pregunta: "La deficiencia de Vitamina C provoca:", opciones: ["Beriberi","Pelagra","Escorbuto","Nictalopía"], correcta: 2, explicacion: "El escorbuto es la enfermedad por deficiencia de vitamina C. Se caracteriza por encías sangrantes, petequias, cicatrización deficiente y pérdida de dientes.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina C es fundamental para la síntesis de:", opciones: ["Hemoglobina","Colágeno","Rodopsina","Factores de coagulación"], correcta: 1, explicacion: "La vitamina C (ácido ascórbico) es coenzima de las prolil y lisil hidroxilasas, enzimas esenciales para la síntesis y maduración del colágeno.", categoria: "Vitaminas" },
        { pregunta: "La nictalopía (ceguera nocturna) es signo de deficiencia de:", opciones: ["Vitamina D","Vitamina K","Vitamina A","Vitamina E"], correcta: 2, explicacion: "La vitamina A es componente de la rodopsina, pigmento visual de los bastones. Su deficiencia reduce la visión con poca luz (nictalopía).", categoria: "Vitaminas" },
        { pregunta: "¿Cuál vitamina puede ser sintetizada por el organismo con exposición solar?", opciones: ["Vitamina A","Vitamina C","Vitamina E","Vitamina D"], correcta: 3, explicacion: "La vitamina D se sintetiza en la piel por acción de la luz UV sobre el 7-dehidrocolesterol. Por eso se llama la 'vitamina del sol'.", categoria: "Vitaminas" },
        { pregunta: "La warfarina actúa como anticoagulante porque:", opciones: ["Inhibe la síntesis de vitamina K","Activa los factores procoagulantes","Es antagonista de la vitamina K, inhibiendo la activación de los factores de coagulación K-dependientes","Estimula la fibrinólisis"], correcta: 2, explicacion: "La warfarina es un antagonista de la vitamina K. Inhibe la vitamina K epóxido reductasa, impidiendo la activación de los factores II, VII, IX y X.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B6 (piridoxina) es importante para la síntesis de:", opciones: ["Colágeno","Hemoglobina y eritrocitos","Neurotransmisores (serotonina, dopamina, GABA)","Factores de coagulación"], correcta: 2, explicacion: "La piridoxina es coenzima en la descarboxilación de aminoácidos para sintetizar neurotransmisores: serotonina (de triptófano), dopamina (de DOPA), GABA (de glutamato).", categoria: "Vitaminas" },
        { pregunta: "El raquitismo en niños se produce por deficiencia de:", opciones: ["Vitamina A","Vitamina B12","Vitamina C","Vitamina D"], correcta: 3, explicacion: "El raquitismo es la enfermedad por deficiencia de vitamina D en niños en crecimiento. Causa deformidades óseas (piernas arqueadas, cráneo aplastado) por mineralización deficiente.", categoria: "Vitaminas" },
        { pregunta: "La Vitamina B2 (Riboflavina) participa en:", opciones: ["La coagulación sanguínea","La síntesis de hemoglobina y metabolismo de carbohidratos, grasas y proteínas","La formación del tubo neural","La visión nocturna"], correcta: 1, explicacion: "La riboflavina es componente de FAD y FMN, coenzimas de la cadena de transporte de electrones. Participa en síntesis de hemoglobina y metabolismo energético.", categoria: "Vitaminas" },
        { pregunta: "¿Cuál es la principal diferencia entre vitaminas liposolubles e hidrosolubles respecto al almacenamiento?", opciones: ["Las hidrosolubles se almacenan en hígado; las liposolubles se eliminan por orina","Las liposolubles se almacenan en tejido adiposo e hígado; las hidrosolubles no se almacenan y se eliminan por orina","Ambas se almacenan en igual medida","Las liposolubles se eliminan más rápido"], correcta: 1, explicacion: "Las liposolubles (ADEK) se acumulan en grasa e hígado (riesgo de hipervitaminosis). Las hidrosolubles (B y C) no se almacenan y se eliminan por orina (menor riesgo de toxicidad).", categoria: "Vitaminas" }
    ]
};
console.log('✅ Módulo Vitaminas cargado —', MODULO_VITAMINAS.lecciones.length, 'lecciones,', MODULO_VITAMINAS.evaluacion.length, 'preguntas');
