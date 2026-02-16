// ============================================
// MÓDULO: SISTEMA ENDOCRINO — COMPLETO
// EXANI-II Premedicina | 6 lecciones + 20 preguntas
// ============================================

const MODULO_SISTEMA_ENDOCRINO = {
    id: 'sistema-endocrino',
    titulo: 'Sistema Endocrino',
    descripcion: 'Hormonas, glándulas y regulación del organismo',
    icono: '⚗️',
    progreso: 0,
    lecciones: [

        // LECCIÓN 1: HIPOTÁLAMO E HIPÓFISIS
        {
            id: 'hipotalamo-hipofisis',
            titulo: 'Hipotálamo e Hipófisis',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(139,92,246,0.12);border-left:4px solid #8b5cf6;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#8b5cf6;margin:0 0 0.5rem;">¿Qué es el Sistema Endocrino?</h4>
                    <p style="margin:0;line-height:1.6;">Red de glándulas que producen <strong>hormonas</strong> — mensajeros químicos que viajan por la sangre para regular metabolismo, crecimiento, reproducción y respuesta al estrés.</p>
                </div>

                <div style="background:rgba(139,92,246,0.08);border-radius:10px;padding:0.85rem;margin-bottom:1.25rem;text-align:center;">
                    <p style="margin:0;color:#c4b5fd;font-size:0.88rem;">💡 <strong>Endocrina</strong> = secreta directamente al torrente sanguíneo · <strong>Exocrina</strong> = secreta por conductos (saliva, sudor)</p>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🧠 Hipotálamo — El Director</h3>
                <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.25);padding:1rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0 0 0.75rem;color:#cbd5e1;font-size:0.9rem;line-height:1.6;">Región del diencéfalo que conecta el SN con el sistema endocrino. Controla la hipófisis mediante <strong>factores liberadores (RH)</strong> e inhibidores (IH).</p>
                    <div style="display:grid;gap:0.4rem;font-size:0.85rem;">
                        <div style="background:rgba(139,92,246,0.12);padding:0.6rem;border-radius:8px;color:#e2e8f0;">🟣 <strong>TRH</strong> → estimula TSH → tiroides</div>
                        <div style="background:rgba(139,92,246,0.12);padding:0.6rem;border-radius:8px;color:#e2e8f0;">🟣 <strong>CRH</strong> → estimula ACTH → suprarrenales</div>
                        <div style="background:rgba(139,92,246,0.12);padding:0.6rem;border-radius:8px;color:#e2e8f0;">🟣 <strong>GnRH</strong> → estimula FSH y LH → gónadas</div>
                        <div style="background:rgba(139,92,246,0.12);padding:0.6rem;border-radius:8px;color:#e2e8f0;">🟣 <strong>GHRH</strong> → estimula GH → crecimiento</div>
                        <div style="background:rgba(139,92,246,0.12);padding:0.6rem;border-radius:8px;color:#e2e8f0;">🟣 <strong>Dopamina</strong> → inhibe prolactina</div>
                    </div>
                    <p style="margin:0.75rem 0 0;color:#94a3b8;font-size:0.82rem;">También regula: temperatura, hambre, sed y ciclos circadianos.</p>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">⚗️ Hipófisis (Pituitaria) — La Glándula Maestra</h3>
                <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.25);padding:1rem;border-radius:10px;margin-bottom:1rem;">
                    <p style="margin:0 0 0.75rem;color:#cbd5e1;font-size:0.9rem;">Situada en la silla turca del esfenoides. Pesa ~0.6 g. Tiene dos lóbulos:</p>

                    <div style="background:rgba(139,92,246,0.12);border-radius:8px;padding:0.9rem;margin-bottom:0.6rem;">
                        <strong style="color:#c4b5fd;">Adenohipófisis (Anterior — 80%)</strong>
                        <div style="display:grid;gap:0.35rem;margin-top:0.5rem;font-size:0.85rem;color:#e2e8f0;">
                            <div>🔵 <strong>GH</strong> (hormona del crecimiento) — anabolismo y talla</div>
                            <div>🔵 <strong>TSH</strong> — estimula tiroides → T3 y T4</div>
                            <div>🔵 <strong>ACTH</strong> — estimula corteza suprarrenal → cortisol</div>
                            <div>🔵 <strong>FSH / LH</strong> — gonadotropinas → estimulan gónadas</div>
                            <div>🔵 <strong>PRL</strong> (Prolactina) — producción de leche materna</div>
                            <div>🔵 <strong>MSH</strong> — pigmentación de la piel</div>
                        </div>
                    </div>

                    <div style="background:rgba(99,102,241,0.12);border-radius:8px;padding:0.9rem;">
                        <strong style="color:#a5b4fc;">Neurohipófisis (Posterior — 20%)</strong>
                        <p style="margin:0.4rem 0 0.4rem;color:#94a3b8;font-size:0.82rem;">No produce hormonas — las almacena y libera (fabricadas en hipotálamo).</p>
                        <div style="display:grid;gap:0.35rem;font-size:0.85rem;color:#e2e8f0;">
                            <div>🟣 <strong>ADH (vasopresina)</strong> — reabsorción de agua en riñón. Su falta → diabetes insípida</div>
                            <div>🟣 <strong>Oxitocina</strong> — contracciones de parto + eyección de leche</div>
                        </div>
                    </div>
                </div>

                <div style="background:rgba(139,92,246,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#c4b5fd;font-size:0.88rem;">⚠️ <strong>Retroalimentación negativa:</strong> Hipotálamo → Hipófisis → Glándula diana → Hormona final → inhibe al hipotálamo e hipófisis cuando ya hay suficiente.</p>
                </div>
            `
        },

        // LECCIÓN 2: TIROIDES
        {
            id: 'tiroides-paratiroides',
            titulo: 'Glándulas Endocrinas: Tiroides',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🦋 Glándula Tiroides</h3>
                <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.25);padding:1rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0 0 0.75rem;color:#cbd5e1;font-size:0.9rem;line-height:1.6;">Glándula en forma de mariposa en la cara anterior del cuello. Pesa ~20-30 g. Regula el <strong>metabolismo basal</strong> de todo el organismo. Requiere <strong>yodo</strong> para sintetizar sus hormonas.</p>

                    <h4 style="color:#c4b5fd;margin-bottom:0.5rem;">Hormonas tiroideas</h4>
                    <div style="display:grid;gap:0.5rem;margin-bottom:0.75rem;">
                        <div style="background:rgba(139,92,246,0.12);padding:0.85rem;border-radius:8px;">
                            <strong style="color:#c4b5fd;">T4 (Tiroxina)</strong> — forma de almacenamiento y transporte. Se convierte periféricamente en T3.
                        </div>
                        <div style="background:rgba(139,92,246,0.12);padding:0.85rem;border-radius:8px;">
                            <strong style="color:#c4b5fd;">T3 (Triyodotironina)</strong> — forma <strong>ACTIVA</strong>. 3-5 veces más potente que T4.
                        </div>
                        <div style="background:rgba(16,185,129,0.1);padding:0.85rem;border-radius:8px;">
                            <strong style="color:#6ee7b7;">Calcitonina</strong> — células C parafoliculares. <strong>Disminuye</strong> el calcio sérico inhibiendo osteoclastos.
                        </div>
                    </div>

                    <h4 style="color:#c4b5fd;margin-bottom:0.4rem;">Efectos de T3/T4 en el organismo</h4>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;font-size:0.82rem;">
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Metabolismo basal</div>
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Frecuencia cardíaca</div>
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Temperatura corporal</div>
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Maduración del SNC</div>
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Síntesis de proteínas</div>
                        <div style="background:rgba(30,41,59,0.7);padding:0.5rem;border-radius:6px;color:#cbd5e1;">↑ Glucogenólisis</div>
                    </div>
                </div>

                <h4 style="color:#8b5cf6;margin-bottom:0.6rem;">Patologías tiroideas clave</h4>
                <div style="display:grid;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.85rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fca5a5;">Hipertiroidismo</strong> — exceso de T3/T4<br>
                        Síntomas: taquicardia, pérdida de peso, insomnio, sudoración, temblor, diarrea.<br>
                        Causa más común: <strong>Enfermedad de Graves-Basedow</strong> (autoinmune + exoftalmos).
                    </div>
                    <div style="background:rgba(99,102,241,0.08);border-left:3px solid #818cf8;padding:0.85rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#a5b4fc;">Hipotiroidismo</strong> — déficit de T3/T4<br>
                        Síntomas: bradicardia, aumento de peso, fatiga, intolerancia al frío, estreñimiento, mixedema.<br>
                        En niños: <strong>cretinismo</strong> (retraso mental irreversible + talla baja). Causa mundial: déficit de yodo.
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #fb923c;padding:0.85rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fdba74;">Bocio</strong> — agrandamiento de tiroides. Por déficit de yodo o hipotiroidismo. La <strong>sal yodada</strong> es la principal prevención.
                    </div>
                </div>

                <div style="background:rgba(139,92,246,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#c4b5fd;font-size:0.88rem;">💡 <strong>Mnemotecnia Hipertiroidismo:</strong> TAQUICARDIA, todo está ACELERADO (metabolismo, FC, temperatura, tránsito intestinal, pérdida de peso). Hipotiroidismo: todo ENLENTECIDO.</p>
                </div>
            `
        },

        // LECCIÓN 3: PARATIROIDES Y SUPRARRENALES
        {
            id: 'suprarrenales',
            titulo: 'Glándulas Endocrinas: Paratiroides y Suprarrenales',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🔬 Glándulas Paratiroides</h3>
                <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.2);padding:1rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0 0 0.6rem;color:#cbd5e1;font-size:0.9rem;">4 pequeñas glándulas detrás de la tiroides. Producen <strong>PTH (Parathormona)</strong> — el principal regulador del calcio.</p>
                    <div style="display:grid;gap:0.45rem;font-size:0.88rem;">
                        <div style="background:rgba(139,92,246,0.12);padding:0.75rem;border-radius:8px;color:#e2e8f0;">PTH <strong>SUBE</strong> el calcio: estimula osteoclastos (libera Ca del hueso) + ↑ reabsorción renal de Ca + activa vitamina D (↑ absorción intestinal de Ca)</div>
                        <div style="background:rgba(16,185,129,0.1);padding:0.75rem;border-radius:8px;color:#e2e8f0;">Antagonista de calcitonina: PTH ↑ Ca · Calcitonina ↓ Ca</div>
                        <div style="background:rgba(239,68,68,0.08);padding:0.75rem;border-radius:8px;color:#fca5a5;">Hiperparatiroidismo → hipercalcemia → litiasis renal, huesos débiles. Hipoparatiroidismo → hipocalcemia → tetania, signo de Chvostek y Trousseau</div>
                    </div>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🏔️ Glándulas Suprarrenales — Regla ABC</h3>
                <p style="color:#94a3b8;font-size:0.85rem;margin-bottom:0.75rem;">2 glándulas sobre cada riñón con 2 zonas: Corteza (externa) y Médula (interna).</p>

                <div style="display:grid;gap:0.6rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.3);padding:1rem;border-radius:10px;">
                        <strong style="color:#fdba74;">A — Zona Glomerular → Aldosterona (mineralocorticoide)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">↑ reabsorción de Na⁺ en riñón → retención de agua → ↑ PA. Se activa por el sistema RAA (Renina-Angiotensina-Aldosterona). Hiperaldosteronismo → HTA + hipopotasemia.</p>
                    </div>
                    <div style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">B — Zona Fascicular → Cortisol (glucocorticoide)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Hormona del estrés crónico. ↑ glucemia, inmunosupresor, antiinflamatorio, catabolismo proteico. Pico matutino 6-8 AM. Regulado por ACTH.</p>
                    </div>
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);padding:1rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">C — Zona Reticular → Andrógenos (DHEA)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Débiles andrógenos. En mujeres contribuyen al vello y la libido. En exceso → virilización.</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Médula → Adrenalina (80%) + Noradrenalina (20%)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Respuesta aguda al estrés "fight or flight": ↑ FC, ↑ PA, broncodilatación, glucogenólisis, pupilodilación. La adrenalina es tratamiento de elección en anafilaxia.</p>
                    </div>
                </div>

                <h4 style="color:#8b5cf6;margin-bottom:0.6rem;">Patologías suprarrenales clave</h4>
                <div style="display:grid;gap:0.45rem;">
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fca5a5;">Síndrome de Cushing</strong> — exceso de cortisol: cara de luna llena, joroba de búfalo, estrías moradas, obesidad central, hiperglucemia, HTA, osteoporosis.
                    </div>
                    <div style="background:rgba(99,102,241,0.08);border-left:3px solid #818cf8;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#a5b4fc;">Enfermedad de Addison</strong> — insuficiencia suprarrenal crónica (autoinmune): fatiga, hipotensión, hipoglucemia, <strong>hiperpigmentación</strong> (↑ ACTH → ↑ MSH).
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #fb923c;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fdba74;">Feocromocitoma</strong> — tumor de médula suprarrenal: exceso de catecolaminas → tríada: cefalea + sudoración + palpitaciones + HTA paroxística.
                    </div>
                </div>
            `
        },

        // LECCIÓN 4: PÁNCREAS ENDOCRINO
        {
            id: 'pancreas-endocrino',
            titulo: 'Páncreas Endocrino',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(139,92,246,0.12);border-left:4px solid #8b5cf6;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#8b5cf6;margin:0 0 0.5rem;">Islotes de Langerhans</h4>
                    <p style="margin:0;line-height:1.6;">Solo el 1-2% del páncreas es endocrino, pero regula la glucemia (glucosa en sangre), una de las funciones más críticas del organismo. Contiene ~1 millón de islotes.</p>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">Tipos celulares</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">🟢 Células Beta (60-80%) → INSULINA</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Libera cuando ↑ glucosa postprandial. Efectos: ↑ captación celular de glucosa, glucogénesis, lipogénesis. <strong>Única hormona hipoglucemiante.</strong> Su destrucción autoinmune → DM tipo 1.</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">🔴 Células Alfa (20-25%) → GLUCAGÓN</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Libera en ayuno (↓ glucosa). Glucogenólisis + gluconeogénesis. <strong>Principal hormona hiperglucemiante.</strong> Antagónica de la insulina.</p>
                    </div>
                    <div style="background:rgba(100,116,139,0.1);border:1px solid rgba(100,116,139,0.2);padding:1rem;border-radius:10px;">
                        <strong style="color:#94a3b8;">⚪ Células Delta (5-10%) → Somatostatina</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Inhibe secreción de insulina y glucagón. Frena todo.</p>
                    </div>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">Diabetes Mellitus</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Tipo 1 — Insulinodependiente</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Destrucción autoinmune de células Beta → déficit absoluto de insulina. Niños/jóvenes. Cetoacidosis diabética. <strong>Tratamiento: insulina de por vida.</strong></p>
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #fb923c;padding:1rem;border-radius:10px;">
                        <strong style="color:#fdba74;">Tipo 2 — Resistencia a insulina</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Las células no responden a la insulina. 90-95% de todos los diabéticos. Asociada a obesidad, sedentarismo, >40 años. <strong>Tratamiento: metformina + cambios de estilo de vida.</strong></p>
                    </div>
                    <div style="background:rgba(16,185,129,0.08);border-left:3px solid #10b981;padding:1rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">Gestacional</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;">Aparece en embarazo por hormonas contrainsulares placentarias. Riesgo: macrosomía fetal y DM tipo 2 posterior.</p>
                    </div>
                </div>

                <div style="background:rgba(139,92,246,0.08);border-radius:10px;padding:1rem;">
                    <h4 style="color:#8b5cf6;margin:0 0 0.5rem;">Diagnóstico de Diabetes (criterios ADA)</h4>
                    <div style="display:grid;gap:0.35rem;font-size:0.85rem;color:#cbd5e1;">
                        <div>📌 Glucosa en ayuno ≥ 126 mg/dL (en 2 ocasiones)</div>
                        <div>📌 Glucosa 2 h postcarga ≥ 200 mg/dL</div>
                        <div>📌 HbA1c ≥ 6.5%</div>
                        <div>📌 Glucosa aleatoria ≥ 200 mg/dL + síntomas</div>
                        <div style="color:#fca5a5;margin-top:0.3rem;">⚠️ Las 3P: <strong>Poliuria</strong>, <strong>Polidipsia</strong>, <strong>Polifagia</strong> (+ pérdida de peso en tipo 1)</div>
                    </div>
                </div>
            `
        },

        // LECCIÓN 5: GÓNADAS
        {
            id: 'gonadas-endocrinas',
            titulo: 'Gónadas Endocrinas',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(139,92,246,0.12);border-left:4px solid #8b5cf6;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0;line-height:1.6;">Las gónadas (testículos y ovarios) producen gametos y hormonas sexuales. Su actividad depende de las gonadotropinas hipofisarias: <strong>FSH</strong> (folículo estimulante) y <strong>LH</strong> (luteinizante).</p>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🔵 Testículos</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">Células de Leydig (estimuladas por LH) → Testosterona</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Espermatogénesis, caracteres sexuales secundarios masculinos (vello, masa muscular, voz grave, libido), cierre de epífisis óseas en pubertad.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(139,92,246,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">Células de Sertoli (estimuladas por FSH) → Inhibina + nutrición espermátides</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">La inhibina inhibe FSH por retroalimentación negativa.</p>
                    </div>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.75rem;">🔴 Ovarios</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(236,72,153,0.1);border:1px solid rgba(236,72,153,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#f9a8d4;">Estrógenos (Estradiol) — células granulosas del folículo (FSH)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Caracteres femeninos secundarios, crecimiento endometrial (fase proliferativa), protección cardiovascular. Pico preovulatorio desencadena surge de LH → ovulación.</p>
                    </div>
                    <div style="background:rgba(236,72,153,0.1);border:1px solid rgba(236,72,153,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#f9a8d4;">Progesterona — cuerpo lúteo (LH)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Prepara endometrio para implantación (fase secretora). Mantiene el embarazo. Termogénica (↑ temp. basal). Si no hay embarazo, cuerpo lúteo regresa → menstruación.</p>
                    </div>
                </div>

                <h3 style="color:#8b5cf6;margin-bottom:0.6rem;">Ciclo Menstrual (28 días)</h3>
                <div style="display:grid;gap:0.4rem;font-size:0.85rem;">
                    <div style="background:rgba(239,68,68,0.08);padding:0.7rem;border-radius:8px;color:#e2e8f0;">
                        <strong style="color:#fca5a5;">Días 1-5: Menstruación</strong> — ↓ estrógenos y progesterona → descamación endometrial
                    </div>
                    <div style="background:rgba(139,92,246,0.08);padding:0.7rem;border-radius:8px;color:#e2e8f0;">
                        <strong style="color:#c4b5fd;">Días 6-13: Proliferativa</strong> — FSH estimula folículos → ↑ estrógenos → crecimiento endometrial
                    </div>
                    <div style="background:rgba(16,185,129,0.08);padding:0.7rem;border-radius:8px;color:#e2e8f0;">
                        <strong style="color:#6ee7b7;">Día 14: Ovulación</strong> — pico de LH → liberación del óvulo
                    </div>
                    <div style="background:rgba(99,102,241,0.08);padding:0.7rem;border-radius:8px;color:#e2e8f0;">
                        <strong style="color:#a5b4fc;">Días 15-28: Secretora/lútea</strong> — cuerpo lúteo produce progesterona → prepara endometrio
                    </div>
                </div>
            `
        },

        // LECCIÓN 6: OTRAS GLÁNDULAS
        {
            id: 'otras-glandulas',
            titulo: 'Otras Glándulas Endocrinas',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="display:grid;gap:0.75rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🌙 Glándula Pineal (Epífisis) → Melatonina</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Se produce en respuesta a la oscuridad. Regula ritmos circadianos (ciclo sueño-vigilia). Mayor secreción nocturna. Disminuye con la edad. La luz artificial nocturna inhibe su secreción.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">❤️ Corazón → ANP (Péptido Natriurético Auricular)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Las aurículas liberan ANP cuando hay distensión por sobrecarga de volumen. Efecto: natriuresis (elimina Na⁺ y agua) → ↓ PA. Antagonista del sistema RAA.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🫘 Riñones → Eritropoyetina (EPO) + Renina + Vit. D activa</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">EPO estimula eritropoyesis (↓ O₂ → ↑ EPO → más eritrocitos). Insuficiencia renal → ↓ EPO → anemia. Renina activa el eje RAA → ↑ aldosterona → ↑ PA.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🦋 Timo → Timosina</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Involuciona después de la pubertad. Maduración de linfocitos T → inmunidad celular. Su hipoplasia (síndrome de DiGeorge) causa inmunodeficiencia grave en niños.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🍔 Tejido Adiposo → Leptina + Adiponectina</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Leptina = señal de saciedad al hipotálamo (más grasa → más leptina → menos hambre). En obesidad: resistencia a leptina → ciclo vicioso. Adiponectina mejora sensibilidad a la insulina.</p>
                    </div>
                </div>

                <div style="background:rgba(139,92,246,0.08);border-left:4px solid #8b5cf6;padding:1rem;border-radius:10px;">
                    <h4 style="color:#8b5cf6;margin:0 0 0.5rem;">💡 Hormonas según su naturaleza química</h4>
                    <div style="display:grid;gap:0.35rem;font-size:0.85rem;color:#cbd5e1;">
                        <div>🟣 <strong>Proteicas/peptídicas:</strong> insulina, GH, TSH, ADH, oxitocina → receptores de membrana</div>
                        <div>🟡 <strong>Esteroideas</strong> (del colesterol): cortisol, aldosterona, estrógenos, testosterona → receptores intranucleares</div>
                        <div>🔵 <strong>Aminoacídicas:</strong> T3/T4 (tiroideas), adrenalina, melatonina</div>
                    </div>
                </div>
            `
        }
    ],
};

console.log("✅ Sistema Endocrino cargado:", MODULO_SISTEMA_ENDOCRINO.lecciones.length, "lecciones");
// Evaluación en: evaluacion-sistema-endocrino.js → EVALUACION_SISTEMA_ENDOCRINO (60 preguntas)
