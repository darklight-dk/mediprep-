// ============================================
// MÓDULO: SISTEMA CARDIOVASCULAR
// Contenido EXANI-II Premedicina
// ============================================

const MODULO_SISTEMA_CARDIOVASCULAR = {
    id: 'sistema-cardiovascular',
    titulo: 'Sistema Cardiovascular',
    descripcion: 'Corazón, circulación, presión arterial y patologías',
    icono: '❤️',
    progreso: 0,
    lecciones: [

        // ─────────────────────────────────────────
        // LECCIÓN 1: ANATOMÍA DEL CORAZÓN
        // ─────────────────────────────────────────
        {
            id: 'anatomia-corazon',
            titulo: 'Anatomía del Corazón',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">¿Qué es el corazón?</h4>
                    <p style="margin:0;line-height:1.6;">Órgano muscular hueco situado en el mediastino medio, entre los dos pulmones. Pesa ~300 g en adultos. Es el motor de la circulación sanguínea.</p>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Capas del corazón</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Pericardio</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Saco fibroseroso que rodea al corazón. Tiene hoja parietal y visceral (epicardio). Entre ellas hay líquido pericárdico que reduce la fricción.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Miocardio</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Capa muscular media. Responsable de la contracción cardíaca. Es músculo cardíaco estriado involuntario, con células llamadas <em>cardiomiocitos</em>.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Endocardio</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Capa interna que recubre las cavidades y válvulas. Está en contacto directo con la sangre.</p>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Las 4 cavidades cardíacas</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:0.85rem;border-radius:10px;text-align:center;">
                        <div style="font-size:1.5rem;">🔴</div>
                        <strong style="color:#fca5a5;font-size:0.9rem;">Aurícula Derecha</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.8rem;">Recibe sangre venosa (desoxigenada) de venas cavas</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:0.85rem;border-radius:10px;text-align:center;">
                        <div style="font-size:1.5rem;">🔴</div>
                        <strong style="color:#fca5a5;font-size:0.9rem;">Ventrículo Derecho</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.8rem;">Bombea sangre a los pulmones (circulación menor)</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);padding:0.85rem;border-radius:10px;text-align:center;">
                        <div style="font-size:1.5rem;">❤️</div>
                        <strong style="color:#f87171;font-size:0.9rem;">Aurícula Izquierda</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.8rem;">Recibe sangre arterial (oxigenada) de las venas pulmonares</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);padding:0.85rem;border-radius:10px;text-align:center;">
                        <div style="font-size:1.5rem;">❤️</div>
                        <strong style="color:#f87171;font-size:0.9rem;">Ventrículo Izquierdo</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.8rem;">Bombea sangre al cuerpo (circulación mayor). Pared más gruesa</p>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Válvulas cardíacas</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;display:flex;gap:0.75rem;align-items:center;">
                        <div style="color:#ef4444;font-size:1.3rem;flex-shrink:0;">🔵</div>
                        <div><strong style="color:#fca5a5;">Tricúspide</strong> — entre aurícula y ventrículo DERECHO (3 valvas)</div>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;display:flex;gap:0.75rem;align-items:center;">
                        <div style="color:#ef4444;font-size:1.3rem;flex-shrink:0;">🟣</div>
                        <div><strong style="color:#fca5a5;">Pulmonar</strong> — entre ventrículo derecho y arteria pulmonar (semilunar)</div>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;display:flex;gap:0.75rem;align-items:center;">
                        <div style="color:#ef4444;font-size:1.3rem;flex-shrink:0;">🔴</div>
                        <div><strong style="color:#fca5a5;">Mitral (bicúspide)</strong> — entre aurícula y ventrículo IZQUIERDO (2 valvas)</div>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;display:flex;gap:0.75rem;align-items:center;">
                        <div style="color:#ef4444;font-size:1.3rem;flex-shrink:0;">🟠</div>
                        <div><strong style="color:#fca5a5;">Aórtica</strong> — entre ventrículo izquierdo y aorta (semilunar)</div>
                    </div>
                </div>
                <div style="background:rgba(239,68,68,0.08);border-radius:8px;padding:0.85rem;text-align:center;margin-top:0.5rem;">
                    <p style="margin:0;color:#f87171;font-size:0.88rem;">💡 Mnemotecnia: <strong>TPMA</strong> — Tricúspide, Pulmonar, Mitral, Aórtica (de derecha a izquierda)</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 2: CICLO CARDÍACO Y GASTO
        // ─────────────────────────────────────────
        {
            id: 'ciclo-cardiaco',
            titulo: 'Ciclo Cardíaco y Gasto Cardíaco',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">Ciclo Cardíaco</h4>
                    <p style="margin:0;line-height:1.6;">Secuencia completa de eventos mecánicos y eléctricos desde un latido hasta el siguiente. Dura ~0.8 segundos en reposo (75 lpm).</p>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Fases del ciclo</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">1. Sístole auricular</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Las aurículas se contraen y terminan de llenar los ventrículos. Dura ~0.1 s.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">2. Sístole ventricular</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Los ventrículos se contraen. Se cierran válvulas AV (1er ruido: "lub") y se abren semilunares. Eyectan sangre. Dura ~0.3 s.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #10b981;padding:0.9rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">3. Diástole</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Los ventrículos se relajan y llenan de sangre. Se cierran semilunares (2do ruido: "dub"). Dura ~0.4 s (periodo más largo).</p>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Ruidos cardíacos</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem;border-radius:8px;">
                        <strong style="color:#fca5a5;">S1 "Lub"</strong> — Cierre de válvulas <strong>Mitral y Tricúspide</strong> al inicio de la sístole
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem;border-radius:8px;">
                        <strong style="color:#fca5a5;">S2 "Dub"</strong> — Cierre de válvulas <strong>Aórtica y Pulmonar</strong> al inicio de la diástole
                    </div>
                    <div style="background:rgba(251,146,60,0.1);padding:0.8rem;border-radius:8px;">
                        <strong style="color:#fdba74;">S3</strong> — Anormal (en adultos) = inicio de IC. Normal en niños/jóvenes
                    </div>
                    <div style="background:rgba(251,146,60,0.1);padding:0.8rem;border-radius:8px;">
                        <strong style="color:#fdba74;">S4</strong> — Siempre anormal = ventrículo rígido (HTA, hipertrofia)
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Gasto Cardíaco (GC)</h3>
                <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:1.1rem;margin-bottom:1rem;text-align:center;">
                    <div style="font-size:1.3rem;font-weight:800;color:#ef4444;margin-bottom:0.4rem;">GC = FC × VS</div>
                    <div style="color:#94a3b8;font-size:0.88rem;">Frecuencia Cardíaca × Volumen Sistólico</div>
                    <div style="color:#cbd5e1;margin-top:0.5rem;font-size:0.9rem;">Normal: 75 lpm × 70 mL = <strong style="color:#fca5a5;">~5 L/min</strong></div>
                </div>
                <div style="display:grid;gap:0.5rem;">
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Volumen sistólico (VS)</strong> ~70 mL: sangre eyectada por latido
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Fracción de eyección</strong> normal: 55-70% (% del ventrículo que se vacía)
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Precarga</strong>: volumen al final de la diástole (llenado) — ↑ precarga = ↑ contracción (Ley de Frank-Starling)
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Poscarga</strong>: resistencia que vence el corazón al expulsar sangre — ↑ poscarga = ↑ trabajo cardíaco
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 3: CIRCULACIÓN MAYOR Y MENOR
        // ─────────────────────────────────────────
        {
            id: 'circuitos-circulacion',
            titulo: 'Circuitos de la Circulación',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Dos circuitos complementarios</h3>

                <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:1.1rem;margin-bottom:1rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.75rem;">🔴 Circulación Mayor (Sistémica)</h4>
                    <div style="font-size:0.9rem;line-height:1.8;color:#e2e8f0;">
                        <strong style="color:#fca5a5;">Ventrículo izquierdo</strong> → Aorta → Arterias sistémicas → Capilares (intercambio O₂/CO₂ en tejidos) → Venas → Vena Cava Superior e Inferior → <strong style="color:#fca5a5;">Aurícula derecha</strong>
                    </div>
                    <div style="margin-top:0.75rem;color:#94a3b8;font-size:0.85rem;">🎯 Función: llevar O₂ a todos los órganos y recoger CO₂</div>
                </div>

                <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:1.1rem;margin-bottom:1.5rem;">
                    <h4 style="color:#818cf8;margin:0 0 0.75rem;">🔵 Circulación Menor (Pulmonar)</h4>
                    <div style="font-size:0.9rem;line-height:1.8;color:#e2e8f0;">
                        <strong style="color:#a5b4fc;">Ventrículo derecho</strong> → Arteria pulmonar → Capilares pulmonares (hematosis: CO₂ ↔ O₂) → Venas pulmonares → <strong style="color:#a5b4fc;">Aurícula izquierda</strong>
                    </div>
                    <div style="margin-top:0.75rem;color:#94a3b8;font-size:0.85rem;">🎯 Función: oxigenar la sangre y eliminar CO₂ en los pulmones</div>
                </div>

                <div style="background:rgba(239,68,68,0.08);border-radius:10px;padding:1rem;margin-bottom:1.25rem;">
                    <p style="margin:0;color:#fca5a5;font-size:0.88rem;">⚠️ Importante: Las <strong>venas pulmonares</strong> llevan sangre <strong>oxigenada</strong> (al corazón izquierdo). Las <strong>arterias pulmonares</strong> llevan sangre <strong>desoxigenada</strong> (del corazón derecho). ¡Excepción a la regla arterias=oxigenada!</p>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Tipos de vasos sanguíneos</h3>
                <div style="display:grid;gap:0.6rem;">
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Arterias</strong> — llevan sangre DESDE el corazón. Pared gruesa con 3 capas (íntima, media, adventicia). Alta presión.
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Arteriolas</strong> — pequeñas arterias. Regulan la presión arterial por vasoconstricción/vasodilatación.
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Capilares</strong> — pared de una sola capa de células (endotelio). Aquí ocurre el intercambio de O₂, CO₂, nutrientes y desechos.
                    </div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.85rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Venas</strong> — llevan sangre HACIA el corazón. Paredes más delgadas, con válvulas para evitar el reflujo. Baja presión. Contienen el 70% del volumen sanguíneo.
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 4: PRESIÓN ARTERIAL
        // ─────────────────────────────────────────
        {
            id: 'presion-arterial',
            titulo: 'Presión Arterial e Hipertensión',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">Presión Arterial (PA)</h4>
                    <p style="margin:0;line-height:1.6;">Fuerza que ejerce la sangre sobre las paredes de los vasos sanguíneos. Se mide en mmHg con el esfigmomanómetro.</p>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Clasificación de la PA</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <strong style="color:#34d399;">Normal</strong>
                        <span style="color:#6ee7b7;font-weight:700;">&lt; 120/80 mmHg</span>
                    </div>
                    <div style="background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <strong style="color:#fbbf24;">Elevada</strong>
                        <span style="color:#fde68a;font-weight:700;">120-129 / &lt;80 mmHg</span>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <strong style="color:#fb923c;">HTA Estadio 1</strong>
                        <span style="color:#fdba74;font-weight:700;">130-139 / 80-89 mmHg</span>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <strong style="color:#ef4444;">HTA Estadio 2</strong>
                        <span style="color:#fca5a5;font-weight:700;">≥ 140 / ≥ 90 mmHg</span>
                    </div>
                    <div style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.5);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <strong style="color:#f87171;">Crisis hipertensiva</strong>
                        <span style="color:#fca5a5;font-weight:700;">&gt; 180 / &gt; 120 mmHg</span>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Determinantes de la PA</h3>
                <div style="background:rgba(239,68,68,0.08);border-radius:10px;padding:1rem;margin-bottom:1rem;text-align:center;">
                    <div style="font-size:1.1rem;font-weight:800;color:#ef4444;">PA = GC × RVP</div>
                    <div style="color:#94a3b8;font-size:0.85rem;margin-top:0.3rem;">Gasto Cardíaco × Resistencia Vascular Periférica</div>
                </div>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">↑ FC o ↑ VS → ↑ GC → ↑ PA</div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">Vasoconstricción arteriolar → ↑ RVP → ↑ PA</div>
                    <div style="background:rgba(30,41,59,0.8);padding:0.75rem;border-radius:8px;font-size:0.9rem;">↑ Volumen sanguíneo (retención de Na⁺/H₂O) → ↑ PA</div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Factores de riesgo cardiovascular</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(239,68,68,0.08);padding:0.75rem;border-radius:8px;">
                        <div style="color:#ef4444;font-weight:700;font-size:0.8rem;margin-bottom:0.3rem;">MODIFICABLES</div>
                        <div style="font-size:0.82rem;color:#cbd5e1;line-height:1.7;">HTA · Tabaquismo · Dislipidemia · Diabetes · Obesidad · Sedentarismo · Estrés</div>
                    </div>
                    <div style="background:rgba(100,116,139,0.1);padding:0.75rem;border-radius:8px;">
                        <div style="color:#94a3b8;font-weight:700;font-size:0.8rem;margin-bottom:0.3rem;">NO MODIFICABLES</div>
                        <div style="font-size:0.82rem;color:#cbd5e1;line-height:1.7;">Edad · Sexo masculino · Herencia genética · Antecedentes familiares</div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 5: SANGRE Y COMPONENTES
        // ─────────────────────────────────────────
        {
            id: 'sangre-componentes',
            titulo: 'La Sangre y sus Componentes',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">La Sangre</h4>
                    <p style="margin:0;line-height:1.6;">Tejido conectivo líquido que circula por los vasos sanguíneos. Volumen adulto: <strong>~5 litros</strong>. pH: 7.35-7.45. Temperatura: 37°C.</p>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Composición de la sangre</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(251,146,60,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fb923c;">Plasma (55%)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Líquido amarillento. Contiene: agua (90%), proteínas (albúmina, globulinas, fibrinógeno), glucosa, lípidos, hormonas, electrolitos.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(239,68,68,0.3);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">Eritrocitos / Glóbulos Rojos (45%)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">4-6 millones/µL. Sin núcleo en adultos. Contienen <strong>hemoglobina</strong> para transportar O₂ y CO₂. Vida media: 120 días. Se producen en médula ósea (eritropoyesis).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(99,102,241,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#a5b4fc;">Leucocitos / Glóbulos Blancos (&lt;1%)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">4,500-11,000/µL. Con núcleo. Función inmunológica. Tipos: granulocitos (neutrófilos, eosinófilos, basófilos) y agranulocitos (linfocitos, monocitos).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(20,184,166,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#5eead4;">Plaquetas / Trombocitos</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">150,000-400,000/µL. Fragmentos de megacariocitos. Función: hemostasia (coagulación). Vida media: 7-10 días.</p>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin-bottom:0.75rem;">Grupos sanguíneos ABO</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <tr style="background:rgba(239,68,68,0.2);">
                            <th style="padding:0.6rem;text-align:left;color:#fca5a5;border:1px solid rgba(239,68,68,0.2);">Grupo</th>
                            <th style="padding:0.6rem;color:#fca5a5;border:1px solid rgba(239,68,68,0.2);">Antígeno</th>
                            <th style="padding:0.6rem;color:#fca5a5;border:1px solid rgba(239,68,68,0.2);">Anticuerpo</th>
                            <th style="padding:0.6rem;color:#fca5a5;border:1px solid rgba(239,68,68,0.2);">Dona a</th>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);font-weight:700;color:#ef4444;">A</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">A</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Anti-B</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">A, AB</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);font-weight:700;color:#ef4444;">B</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">B</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Anti-A</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">B, AB</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);font-weight:700;color:#22c55e;">AB</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">A y B</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Ninguno</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#22c55e;font-weight:700;">Solo AB (receptor universal)</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);font-weight:700;color:#3b82f6;">O</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Ninguno</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Anti-A y Anti-B</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#3b82f6;font-weight:700;">Todos (donador universal)</td>
                        </tr>
                    </table>
                </div>
                <div style="background:rgba(239,68,68,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#fca5a5;font-size:0.88rem;">💡 Factor Rh: si tienes el antígeno D → Rh+ (~85% de la población). Si no → Rh−. Rh incompatible en embarazo → eritroblastosis fetal.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 6: ENFERMEDADES CARDIOVASCULARES
        // ─────────────────────────────────────────
        {
            id: 'enfermedades-cardiovasculares',
            titulo: 'Principales Enfermedades Cardiovasculares',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0;line-height:1.6;">Las enfermedades cardiovasculares son la <strong>primera causa de muerte en el mundo</strong> según la OMS. Representan el 32% de todas las muertes globales.</p>
                </div>

                <div style="display:grid;gap:0.75rem;margin-bottom:1rem;">

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">❤️‍🔥 Infarto Agudo de Miocardio (IAM)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Necrosis del miocardio por oclusión de arteria coronaria (habitualmente por trombo sobre placa aterosclerótica). Síntoma clave: dolor opresivo en el pecho irradiado al brazo izquierdo, mandíbula, espalda. Diagnóstico: ECG + troponinas. Tratamiento: trombolisis o angioplastia urgente.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #f97316;padding:1rem;border-radius:10px;">
                        <strong style="color:#fdba74;">🧱 Aterosclerosis</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Acumulación de placas de lípidos (ateromas) en la íntima arterial. Estrecha el lumen → isquemia. Puede afectar arterias coronarias (cardiopatía), cerebrales (ACV) o periféricas.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🧠 Accidente Cerebrovascular (ACV / EVC)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Interrupción del flujo sanguíneo cerebral. Isquémico (80%): oclusión de arteria. Hemorrágico (20%): rotura de vaso. Síntomas FAST: Face (asimetría facial), Arm (debilidad brazo), Speech (dificultad al hablar), Time (tiempo = cerebro).</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #06b6d4;padding:1rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">💙 Insuficiencia Cardíaca (IC)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">El corazón no bombea suficiente sangre para satisfacer las necesidades del cuerpo. Síntomas: disnea de esfuerzo, ortopnea, edema en piernas, fatiga. Causa más común: HTA y cardiopatía isquémica.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #10b981;padding:1rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">💚 Angina de Pecho</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Dolor torácico por isquemia miocárdica TRANSITORIA (sin necrosis). Estable: por esfuerzo, cede con reposo/nitroglicerina. Inestable: en reposo, más grave (riesgo de IAM).</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #eab308;padding:1rem;border-radius:10px;">
                        <strong style="color:#fde68a;">⚡ Arritmias</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Alteraciones del ritmo cardíaco. Bradicardia (&lt;60 lpm), Taquicardia (&gt;100 lpm), Fibrilación auricular (la más común), Fibrilación ventricular (mortal sin desfibrilación).</p>
                    </div>
                </div>

                <div style="background:rgba(239,68,68,0.08);border-left:4px solid #ef4444;padding:1rem;border-radius:10px;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">Prevención cardiovascular</h4>
                    <div style="display:grid;gap:0.35rem;font-size:0.88rem;color:#cbd5e1;">
                        <div>✅ Control de HTA, diabetes y dislipidemia</div>
                        <div>✅ Dejar de fumar (riesgo disminuye 50% al año de dejar)</div>
                        <div>✅ Dieta mediterránea + reducir sodio y grasas saturadas</div>
                        <div>✅ Actividad física: 150 min/semana de intensidad moderada</div>
                        <div>✅ Mantener peso saludable (IMC 18.5-24.9)</div>
                    </div>
                </div>
            `
        }
    ]
};

console.log("✅ Sistema Cardiovascular cargado:", MODULO_SISTEMA_CARDIOVASCULAR.lecciones.length, "lecciones,", MODULO_SISTEMA_CARDIOVASCULAR.evaluacion.length, "preguntas de evaluación");
