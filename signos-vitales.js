// ============================================
// MÓDULO: SIGNOS VITALES
// Para CENEVAL EXANI-II — Premedicina
// ============================================

const MODULO_SIGNOS_VITALES = {
    id: 'signos-vitales',
    titulo: 'Signos Vitales',
    descripcion: 'Tensión arterial, temperatura, FC, FR, oximetría, glucosa y más',
    icono: '🩺',
    progreso: 0,
    lecciones: [

        // ─────────────────────────────────────────
        // LECCIÓN 1: INTRODUCCIÓN Y TENSIÓN ARTERIAL
        // ─────────────────────────────────────────
        {
            id: 'tension-arterial',
            titulo: 'Tensión Arterial (TA)',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(239,68,68,0.12);border-left:4px solid #ef4444;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#ef4444;margin:0 0 0.5rem;">¿Qué es la Tensión Arterial?</h4>
                    <p style="margin:0;color:#e2e8f0;">Fuerza que ejerce la sangre sobre las paredes de las arterias al ser impulsada por el corazón. Se mide en milímetros de mercurio (mmHg).</p>
                </div>

                <h3 style="color:#ef4444;margin:1rem 0 0.75rem;">Componentes</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.3);padding:1rem;border-radius:8px;">
                        <strong style="color:#f87171;">Sistólica (máxima)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Presión durante la contracción del ventrículo izquierdo (sístole). Valor normal: <strong style="color:#fca5a5;">120 mmHg</strong></p>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(239,68,68,0.3);padding:1rem;border-radius:8px;">
                        <strong style="color:#f87171;">Diastólica (mínima)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Presión durante la relajación del corazón (diástole). Valor normal: <strong style="color:#fca5a5;">80 mmHg</strong></p>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(99,102,241,0.3);padding:1rem;border-radius:8px;">
                        <strong style="color:#a5b4fc;">Presión de Pulso</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Diferencia entre sistólica y diastólica. Normal: 40 mmHg. Fórmula: PP = TAS – TAD</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:8px;">
                        <strong style="color:#6ee7b7;">Presión Arterial Media (PAM)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Fórmula: PAM = TAD + (PP/3). Normal: 70–100 mmHg. Garantiza perfusión a órganos.</p>
                    </div>
                </div>

                <h3 style="color:#ef4444;margin:1rem 0 0.75rem;">Clasificación (JNC / OMS)</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <thead>
                            <tr style="background:rgba(239,68,68,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#f87171;border-bottom:1px solid rgba(239,68,68,0.3);">Categoría</th>
                                <th style="padding:0.6rem;text-align:center;color:#f87171;border-bottom:1px solid rgba(239,68,68,0.3);">Sistólica</th>
                                <th style="padding:0.6rem;text-align:center;color:#f87171;border-bottom:1px solid rgba(239,68,68,0.3);">Diastólica</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                                <td style="padding:0.6rem;color:#e2e8f0;">Normal</td>
                                <td style="padding:0.6rem;text-align:center;color:#6ee7b7;">&lt;120</td>
                                <td style="padding:0.6rem;text-align:center;color:#6ee7b7;">&lt;80</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                                <td style="padding:0.6rem;color:#e2e8f0;">Elevada</td>
                                <td style="padding:0.6rem;text-align:center;color:#fbbf24;">120–129</td>
                                <td style="padding:0.6rem;text-align:center;color:#6ee7b7;">&lt;80</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                                <td style="padding:0.6rem;color:#e2e8f0;">HTA Etapa 1</td>
                                <td style="padding:0.6rem;text-align:center;color:#fb923c;">130–139</td>
                                <td style="padding:0.6rem;text-align:center;color:#fb923c;">80–89</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                                <td style="padding:0.6rem;color:#e2e8f0;">HTA Etapa 2</td>
                                <td style="padding:0.6rem;text-align:center;color:#f87171;">≥140</td>
                                <td style="padding:0.6rem;text-align:center;color:#f87171;">≥90</td>
                            </tr>
                            <tr>
                                <td style="padding:0.6rem;color:#e2e8f0;">Crisis hipertensiva</td>
                                <td style="padding:0.6rem;text-align:center;color:#ef4444;font-weight:700;">&gt;180</td>
                                <td style="padding:0.6rem;text-align:center;color:#ef4444;font-weight:700;">&gt;120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="color:#ef4444;margin:1rem 0 0.75rem;">Hipotensión</h3>
                <div style="background:rgba(99,102,241,0.1);border-left:4px solid #6366f1;padding:1rem;border-radius:8px;margin-bottom:1rem;">
                    <p style="margin:0;color:#cbd5e1;font-size:0.9rem;">TA sistólica <strong style="color:#a5b4fc;">&lt;90 mmHg</strong> o caída &gt;40 mmHg de la basal. Puede indicar shock, deshidratación o fallo cardíaco.</p>
                </div>

                <h3 style="color:#ef4444;margin:1rem 0 0.75rem;">Factores que modifican la TA</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.85rem;">
                    <div style="background:rgba(239,68,68,0.08);padding:0.7rem;border-radius:8px;border:1px solid rgba(239,68,68,0.2);">
                        <div style="color:#f87171;font-weight:700;margin-bottom:0.3rem;">⬆ Aumentan</div>
                        <div style="color:#cbd5e1;">Estrés · Ejercicio<br>Sal excesiva · Obesidad<br>Tabaco · Edad<br>Medicamentos (AINE)</div>
                    </div>
                    <div style="background:rgba(16,185,129,0.08);padding:0.7rem;border-radius:8px;border:1px solid rgba(16,185,129,0.2);">
                        <div style="color:#6ee7b7;font-weight:700;margin-bottom:0.3rem;">⬇ Disminuyen</div>
                        <div style="color:#cbd5e1;">Reposo · Sueño<br>Hemorragia · Shock<br>Deshidratación<br>Antihipertensivos</div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 2: TEMPERATURA Y FRECUENCIA CARDÍACA
        // ─────────────────────────────────────────
        {
            id: 'temperatura-fc',
            titulo: 'Temperatura Corporal y Frecuencia Cardíaca',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">🌡️ Temperatura Corporal</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Grado de calor del organismo, resultado del equilibrio entre la producción y la pérdida de calor (termorregulación hipotalámica).</p>
                </div>

                <h3 style="color:#fb923c;margin:1rem 0 0.75rem;">Valores Normales</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(251,146,60,0.3);padding:0.85rem 1rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="color:#e2e8f0;">Oral (boca)</span>
                        <strong style="color:#fbbf24;">36.5 – 37.5 °C</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(251,146,60,0.3);padding:0.85rem 1rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="color:#e2e8f0;">Rectal</span>
                        <strong style="color:#fbbf24;">37.0 – 38.0 °C</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(251,146,60,0.3);padding:0.85rem 1rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="color:#e2e8f0;">Axilar</span>
                        <strong style="color:#fbbf24;">36.0 – 37.0 °C</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.8);border:1px solid rgba(251,146,60,0.3);padding:0.85rem 1rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="color:#e2e8f0;">Timpánica</span>
                        <strong style="color:#fbbf24;">36.5 – 37.5 °C</strong>
                    </div>
                </div>

                <h3 style="color:#fb923c;margin:1rem 0 0.75rem;">Alteraciones de Temperatura</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(99,102,241,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(99,102,241,0.25);">
                        <strong style="color:#a5b4fc;">Hipotermia</strong> — &lt;35.0 °C
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Exposición al frío, hipotiroidismo, shock severo</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(251,146,60,0.25);">
                        <strong style="color:#fbbf24;">Febrícula</strong> — 37.1 – 37.9 °C
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Temperatura ligeramente elevada, sin fiebre franca</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.25);">
                        <strong style="color:#f87171;">Fiebre (pirexia)</strong> — ≥38.0 °C
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Respuesta inmune. Causas: infección, inflamación, neoplasias</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.2);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.5);">
                        <strong style="color:#ef4444;">Hiperpirexia</strong> — &gt;41.0 °C
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Emergencia médica. Riesgo de convulsiones y daño cerebral</p>
                    </div>
                </div>

                <div style="background:rgba(16,185,129,0.12);border-left:4px solid #10b981;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#10b981;margin:0 0 0.5rem;">❤️ Frecuencia Cardíaca (FC / Pulso)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Número de contracciones del corazón por minuto. Se palpa en: arteria radial, carotídea, femoral, braquial, poplítea.</p>
                </div>

                <h3 style="color:#10b981;margin:1rem 0 0.75rem;">Valores Normales por Edad</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <thead>
                            <tr style="background:rgba(16,185,129,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#6ee7b7;border-bottom:1px solid rgba(16,185,129,0.3);">Grupo</th>
                                <th style="padding:0.6rem;text-align:center;color:#6ee7b7;border-bottom:1px solid rgba(16,185,129,0.3);">FC (lpm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Recién nacido</td><td style="padding:0.6rem;text-align:center;color:#6ee7b7;">120–160</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Lactante (1–12 meses)</td><td style="padding:0.6rem;text-align:center;color:#6ee7b7;">80–140</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Niño (1–10 años)</td><td style="padding:0.6rem;text-align:center;color:#6ee7b7;">70–120</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Adulto</td><td style="padding:0.6rem;text-align:center;color:#fbbf24;">60–100</td></tr>
                            <tr><td style="padding:0.6rem;color:#e2e8f0;">Adulto mayor</td><td style="padding:0.6rem;text-align:center;color:#fbbf24;">60–100</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style="display:grid;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(99,102,241,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(99,102,241,0.25);">
                        <strong style="color:#a5b4fc;">Bradicardia</strong> — &lt;60 lpm
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Atletas, hipotiroidismo, bloqueos cardíacos, β-bloqueadores</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.25);">
                        <strong style="color:#f87171;">Taquicardia</strong> — &gt;100 lpm
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Fiebre, ansiedad, anemia, hipertiroidismo, ejercicio</p>
                    </div>
                </div>

                <div style="background:rgba(251,146,60,0.08);border-radius:8px;padding:0.85rem 1rem;margin-bottom:0.5rem;">
                    <strong style="color:#fbbf24;">💡 Regla nemotécnica:</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">FC normal adulto = <strong>60–100</strong> lpm. Por encima → <strong>TAQUI</strong>cardia. Por debajo → <strong>BRADI</strong>cardia.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 3: FRECUENCIA RESPIRATORIA Y SpO2
        // ─────────────────────────────────────────
        {
            id: 'respiracion-oximetria',
            titulo: 'Frecuencia Respiratoria y Oximetría',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(56,189,248,0.12);border-left:4px solid #38bdf8;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#38bdf8;margin:0 0 0.5rem;">🫁 Frecuencia Respiratoria (FR)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Número de ciclos respiratorios (inspiración + espiración) por minuto. Se mide observando el movimiento del tórax durante 1 minuto completo.</p>
                </div>

                <h3 style="color:#38bdf8;margin:1rem 0 0.75rem;">Valores Normales por Edad</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <thead>
                            <tr style="background:rgba(56,189,248,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#7dd3fc;border-bottom:1px solid rgba(56,189,248,0.3);">Grupo</th>
                                <th style="padding:0.6rem;text-align:center;color:#7dd3fc;border-bottom:1px solid rgba(56,189,248,0.3);">FR (rpm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Recién nacido</td><td style="padding:0.6rem;text-align:center;color:#7dd3fc;">40–60</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Lactante</td><td style="padding:0.6rem;text-align:center;color:#7dd3fc;">30–40</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Niño escolar</td><td style="padding:0.6rem;text-align:center;color:#7dd3fc;">20–30</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Adolescente</td><td style="padding:0.6rem;text-align:center;color:#fbbf24;">15–20</td></tr>
                            <tr><td style="padding:0.6rem;color:#e2e8f0;">Adulto</td><td style="padding:0.6rem;text-align:center;color:#fbbf24;">12–20</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(99,102,241,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(99,102,241,0.25);">
                        <strong style="color:#a5b4fc;">Bradipnea</strong> — &lt;12 rpm (adulto)
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Sobredosis de opioides, lesión del tronco cerebral, hipotiroidismo grave</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.25);">
                        <strong style="color:#f87171;">Taquipnea</strong> — &gt;20 rpm (adulto)
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Fiebre, ansiedad, neumonía, asma, acidosis metabólica</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.15);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.4);">
                        <strong style="color:#ef4444;">Apnea</strong> — Ausencia de respiración
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Emergencia médica. Parada respiratoria</p>
                    </div>
                </div>

                <div style="background:rgba(16,185,129,0.12);border-left:4px solid #10b981;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#10b981;margin:0 0 0.5rem;">💉 Oximetría de Pulso (SpO₂)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Medición no invasiva de la saturación de oxígeno en sangre mediante pulsioxímetro. Se coloca en el dedo, lóbulo de la oreja o nariz.</p>
                </div>

                <h3 style="color:#10b981;margin:1rem 0 0.75rem;">Valores e Interpretación</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(16,185,129,0.12);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(16,185,129,0.3);">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong style="color:#6ee7b7;">Normal</strong>
                            <span style="color:#6ee7b7;font-weight:700;font-size:1.1rem;">95 – 100%</span>
                        </div>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(251,146,60,0.3);">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong style="color:#fbbf24;">Hipoxemia leve</strong>
                            <span style="color:#fbbf24;font-weight:700;font-size:1.1rem;">91 – 94%</span>
                        </div>
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.8rem;">Se recomienda administrar oxígeno suplementario</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.12);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.35);">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong style="color:#f87171;">Hipoxemia moderada</strong>
                            <span style="color:#f87171;font-weight:700;font-size:1.1rem;">86 – 90%</span>
                        </div>
                    </div>
                    <div style="background:rgba(239,68,68,0.2);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.5);">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong style="color:#ef4444;">Hipoxemia grave</strong>
                            <span style="color:#ef4444;font-weight:700;font-size:1.1rem;">&lt;85%</span>
                        </div>
                        <p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.8rem;">Emergencia. Riesgo de daño orgánico</p>
                    </div>
                </div>

                <div style="background:rgba(56,189,248,0.08);border-radius:8px;padding:0.85rem 1rem;">
                    <strong style="color:#7dd3fc;">💡 Patrones respiratorios importantes para el EXANI:</strong>
                    <div style="display:grid;gap:0.35rem;margin-top:0.5rem;font-size:0.85rem;color:#cbd5e1;">
                        <div><strong style="color:#7dd3fc;">Cheyne-Stokes:</strong> ciclos de apnea + hiperpnea. En ICC, ACV, altitud</div>
                        <div><strong style="color:#7dd3fc;">Kussmaul:</strong> respiración profunda y rápida. En cetoacidosis diabética</div>
                        <div><strong style="color:#7dd3fc;">Biot:</strong> respiraciones irregulares con apnea. En lesión del tronco cerebral</div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 4: GLUCOSA, PESO Y TALLA
        // ─────────────────────────────────────────
        {
            id: 'glucosa-peso-talla',
            titulo: 'Glucosa, IMC, Peso y Talla',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,191,36,0.12);border-left:4px solid #fbbf24;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#fbbf24;margin:0 0 0.5rem;">🍬 Glucosa en Sangre (Glucemia)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Concentración de glucosa en sangre periférica. Se mide en mg/dL o mmol/L. Principal fuente de energía celular.</p>
                </div>

                <h3 style="color:#fbbf24;margin:1rem 0 0.75rem;">Valores de Glucosa (ADA)</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(16,185,129,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(16,185,129,0.25);display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#6ee7b7;">Normal (ayuno)</strong><br><span style="font-size:0.8rem;color:#94a3b8;">Sin ingesta por ≥8 horas</span></div>
                        <strong style="color:#6ee7b7;">70 – 99 mg/dL</strong>
                    </div>
                    <div style="background:rgba(16,185,129,0.08);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(16,185,129,0.2);display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#6ee7b7;">Normal (postprandial)</strong><br><span style="font-size:0.8rem;color:#94a3b8;">2 horas tras comer</span></div>
                        <strong style="color:#6ee7b7;">&lt;140 mg/dL</strong>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(251,146,60,0.25);display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#fbbf24;">Prediabetes (ayuno)</strong></div>
                        <strong style="color:#fbbf24;">100 – 125 mg/dL</strong>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(239,68,68,0.25);display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#f87171;">Diabetes (ayuno)</strong></div>
                        <strong style="color:#f87171;">≥126 mg/dL</strong>
                    </div>
                    <div style="background:rgba(99,102,241,0.1);padding:0.8rem 1rem;border-radius:8px;border:1px solid rgba(99,102,241,0.25);display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#a5b4fc;">Hipoglucemia</strong></div>
                        <strong style="color:#a5b4fc;">&lt;70 mg/dL</strong>
                    </div>
                </div>

                <div style="background:rgba(139,92,246,0.12);border-left:4px solid #8b5cf6;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#8b5cf6;margin:0 0 0.5rem;">⚖️ Índice de Masa Corporal (IMC)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:0.9rem;">Fórmula: <strong style="color:#c4b5fd;">IMC = Peso (kg) / Talla² (m)</strong></p>
                </div>

                <h3 style="color:#8b5cf6;margin:1rem 0 0.75rem;">Clasificación IMC (OMS)</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <thead>
                            <tr style="background:rgba(139,92,246,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#c4b5fd;border-bottom:1px solid rgba(139,92,246,0.3);">Categoría</th>
                                <th style="padding:0.6rem;text-align:center;color:#c4b5fd;border-bottom:1px solid rgba(139,92,246,0.3);">IMC (kg/m²)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Bajo peso</td><td style="padding:0.6rem;text-align:center;color:#7dd3fc;">&lt;18.5</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Normal</td><td style="padding:0.6rem;text-align:center;color:#6ee7b7;">18.5 – 24.9</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Sobrepeso</td><td style="padding:0.6rem;text-align:center;color:#fbbf24;">25.0 – 29.9</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Obesidad Grado I</td><td style="padding:0.6rem;text-align:center;color:#fb923c;">30.0 – 34.9</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem;color:#e2e8f0;">Obesidad Grado II</td><td style="padding:0.6rem;text-align:center;color:#f87171;">35.0 – 39.9</td></tr>
                            <tr><td style="padding:0.6rem;color:#e2e8f0;">Obesidad Grado III (mórbida)</td><td style="padding:0.6rem;text-align:center;color:#ef4444;">≥40.0</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style="background:rgba(56,189,248,0.08);border-radius:8px;padding:0.85rem 1rem;margin-bottom:1rem;">
                    <strong style="color:#7dd3fc;">📏 Talla (Estatura)</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Se mide en posición de pie con estadiómetro. Talla normal adulto: hombre ~170 cm, mujer ~160 cm (varía por etnia y genética).</p>
                </div>

                <div style="background:rgba(251,191,36,0.08);border-radius:8px;padding:0.85rem 1rem;">
                    <strong style="color:#fbbf24;">💡 Para el EXANI-II recuerda:</strong>
                    <div style="margin-top:0.4rem;font-size:0.85rem;color:#cbd5e1;">
                        ✅ Glucemia normal ayuno: <strong>70–99 mg/dL</strong><br>
                        ✅ Diabetes diagnóstico: <strong>≥126 mg/dL en ayuno</strong> (confirmado 2 veces)<br>
                        ✅ HbA1c normal: &lt;5.7% · Prediabetes: 5.7–6.4% · Diabetes: ≥6.5%
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 5: RESUMEN Y TABLA DE REFERENCIA
        // ─────────────────────────────────────────
        {
            id: 'resumen-signos',
            titulo: 'Resumen y Tabla de Referencia Rápida',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(16,185,129,0.12);border-left:4px solid #10b981;padding:1.25rem;border-radius:8px;margin-bottom:1.25rem;">
                    <h4 style="color:#10b981;margin:0 0 0.3rem;">📋 Tabla de Signos Vitales — Adulto Sano</h4>
                    <p style="margin:0;color:#94a3b8;font-size:0.82rem;">Memoriza estos valores para el EXANI-II</p>
                </div>

                <div style="display:grid;gap:0.55rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(239,68,68,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">🩸</span>
                        <div style="flex:1;">
                            <div style="color:#f87171;font-weight:700;font-size:0.88rem;">Tensión Arterial</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Sistólica / Diastólica</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">120/80 mmHg</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,146,60,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">🌡️</span>
                        <div style="flex:1;">
                            <div style="color:#fb923c;font-weight:700;font-size:0.88rem;">Temperatura Corporal</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Oral / Normal</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">36.5 – 37.5°C</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">❤️</span>
                        <div style="flex:1;">
                            <div style="color:#6ee7b7;font-weight:700;font-size:0.88rem;">Frecuencia Cardíaca</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Pulso en reposo</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">60 – 100 lpm</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(56,189,248,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">🫁</span>
                        <div style="flex:1;">
                            <div style="color:#7dd3fc;font-weight:700;font-size:0.88rem;">Frecuencia Respiratoria</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Ciclos por minuto</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">12 – 20 rpm</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">💉</span>
                        <div style="flex:1;">
                            <div style="color:#6ee7b7;font-weight:700;font-size:0.88rem;">Saturación O₂ (SpO₂)</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Oximetría de pulso</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">95 – 100%</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(251,191,36,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">🍬</span>
                        <div style="flex:1;">
                            <div style="color:#fbbf24;font-weight:700;font-size:0.88rem;">Glucosa en ayuno</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Glucemia basal</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">70 – 99 mg/dL</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(139,92,246,0.3);border-radius:10px;padding:0.9rem 1rem;display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.4rem;">⚖️</span>
                        <div style="flex:1;">
                            <div style="color:#c4b5fd;font-weight:700;font-size:0.88rem;">IMC Normal</div>
                            <div style="color:#94a3b8;font-size:0.78rem;">Índice de Masa Corporal</div>
                        </div>
                        <strong style="color:#fff;font-size:1rem;">18.5 – 24.9</strong>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin:0 0 0.75rem;">⚡ Nemotecnia para el examen</h3>
                <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);border-radius:10px;padding:1rem;margin-bottom:1rem;">
                    <div style="display:grid;gap:0.4rem;font-size:0.87rem;color:#e2e8f0;">
                        <div>🔴 <strong style="color:#f87171;">TA</strong> alta = Hipertensión (≥140/90) · baja = Hipotensión (&lt;90/60)</div>
                        <div>🟠 <strong style="color:#fb923c;">Temp</strong> &gt;38°C = Fiebre · &lt;35°C = Hipotermia</div>
                        <div>🟢 <strong style="color:#6ee7b7;">FC</strong> &lt;60 = Bradicardia · &gt;100 = Taquicardia</div>
                        <div>🔵 <strong style="color:#7dd3fc;">FR</strong> &lt;12 = Bradipnea · &gt;20 = Taquipnea · 0 = Apnea</div>
                        <div>💚 <strong style="color:#6ee7b7;">SpO₂</strong> &lt;95% = Hipoxemia (necesita O₂)</div>
                        <div>🟡 <strong style="color:#fbbf24;">Glucosa</strong> &lt;70 = Hipoglucemia · ≥126 = Diabetes</div>
                    </div>
                </div>

                <div style="background:rgba(234,179,8,0.1);border-radius:8px;padding:1rem;text-align:center;margin-top:1rem;">
                    <p style="margin:0;color:#eab308;font-size:0.9rem;">💡 <strong>¡Has completado el módulo! Realiza la evaluación para consolidar lo aprendido.</strong></p>
                </div>
            `
        }
    ],

    // ─────────────────────────────────────────
    // EVALUACIÓN INTEGRADA — 40 preguntas
    // ─────────────────────────────────────────
    evaluacion: [
        // TENSIÓN ARTERIAL
        { pregunta: "¿Cuál es el valor normal de la tensión arterial en un adulto sano?", opciones: ["100/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"], correcta: 1, explicacion: "La tensión arterial normal en adultos es 120/80 mmHg (sistólica/diastólica). Valores ≥140/90 mmHg se clasifican como hipertensión etapa 2.", categoria: "Signos Vitales" },
        { pregunta: "La presión sistólica representa:", opciones: ["La presión durante la relajación del corazón", "La presión durante la contracción del ventrículo izquierdo", "La diferencia entre presión máxima y mínima", "La presión promedio durante el ciclo cardíaco"], correcta: 1, explicacion: "La presión sistólica (máxima) se genera durante la sístole ventricular, cuando el ventrículo izquierdo se contrae y expulsa sangre a la aorta.", categoria: "Signos Vitales" },
        { pregunta: "¿A partir de qué valor de tensión arterial sistólica se diagnostica hipertensión etapa 2?", opciones: ["120 mmHg", "130 mmHg", "140 mmHg", "160 mmHg"], correcta: 2, explicacion: "La hipertensión etapa 2 se define con TA sistólica ≥140 mmHg y/o diastólica ≥90 mmHg según las guías JNC/OMS.", categoria: "Signos Vitales" },
        { pregunta: "La hipotensión arterial se define como una TA sistólica:", opciones: ["Menor de 100 mmHg", "Menor de 90 mmHg", "Menor de 80 mmHg", "Menor de 70 mmHg"], correcta: 1, explicacion: "La hipotensión arterial se define como TA sistólica <90 mmHg o una caída >40 mmHg de la presión basal del paciente.", categoria: "Signos Vitales" },
        { pregunta: "La Presión Arterial Media (PAM) se calcula como:", opciones: ["(TAS + TAD) / 2", "TAD + (PP / 3)", "TAS – TAD", "(TAS × 2 + TAD) / 3"], correcta: 1, explicacion: "PAM = TAD + (Presión de Pulso / 3). El valor normal es 70–100 mmHg. Es el parámetro clave para evaluar la perfusión de órganos.", categoria: "Signos Vitales" },
        { pregunta: "Una crisis hipertensiva se define cuando la TA supera:", opciones: ["140/90 mmHg", "160/100 mmHg", "180/120 mmHg", "200/110 mmHg"], correcta: 2, explicacion: "Una crisis hipertensiva ocurre cuando la TA sistólica >180 mmHg y/o la diastólica >120 mmHg, requiriendo atención médica urgente.", categoria: "Signos Vitales" },
        { pregunta: "¿Cuál de los siguientes factores DISMINUYE la tensión arterial?", opciones: ["Estrés agudo", "Consumo de sal", "Hemorragia severa", "Obesidad"], correcta: 2, explicacion: "La hemorragia severa reduce el volumen sanguíneo (hipovolemia), lo que disminuye el retorno venoso, el gasto cardíaco y la TA.", categoria: "Signos Vitales" },
        { pregunta: "La presión de pulso (PP) se obtiene mediante la fórmula:", opciones: ["TAS + TAD", "TAS – TAD", "TAD / TAS", "TAS × TAD"], correcta: 1, explicacion: "Presión de Pulso = TAS – TAD. Valor normal: ~40 mmHg. Una PP >60 mmHg puede indicar rigidez arterial en adultos mayores.", categoria: "Signos Vitales" },

        // TEMPERATURA
        { pregunta: "¿Cuál es la temperatura corporal oral normal en adultos?", opciones: ["35.5 – 36.5 °C", "36.5 – 37.5 °C", "37.5 – 38.5 °C", "36.0 – 37.0 °C"], correcta: 1, explicacion: "La temperatura oral normal en adultos es 36.5–37.5°C. La temperatura rectal es ~0.5°C mayor y la axilar ~0.5°C menor.", categoria: "Signos Vitales" },
        { pregunta: "Se considera fiebre (pirexia) cuando la temperatura es igual o mayor a:", opciones: ["37.0 °C", "37.5 °C", "38.0 °C", "38.5 °C"], correcta: 2, explicacion: "La fiebre se diagnostica con temperatura ≥38.0°C. Entre 37.1–37.9°C se denomina febrícula.", categoria: "Signos Vitales" },
        { pregunta: "La hipotermia se define como temperatura corporal:", opciones: ["Menor de 37 °C", "Menor de 36 °C", "Menor de 35 °C", "Menor de 34 °C"], correcta: 2, explicacion: "La hipotermia se define como temperatura corporal central <35°C. Puede clasificarse en leve (32–35°C), moderada (28–32°C) y severa (<28°C).", categoria: "Signos Vitales" },
        { pregunta: "La hiperpirexia es una emergencia médica que se presenta con temperatura:", opciones: ["Mayor de 38 °C", "Mayor de 39 °C", "Mayor de 40 °C", "Mayor de 41 °C"], correcta: 3, explicacion: "La hiperpirexia es fiebre extrema >41°C. Constituye una emergencia médica por riesgo de convulsiones, daño cerebral y colapso circulatorio.", categoria: "Signos Vitales" },
        { pregunta: "¿Qué estructura del cerebro regula la temperatura corporal?", opciones: ["Cerebelo", "Hipocampo", "Hipotálamo", "Corteza cerebral"], correcta: 2, explicacion: "El hipotálamo actúa como termostato central: detecta cambios de temperatura sanguínea y activa mecanismos de pérdida (sudoración, vasodilatación) o producción de calor (temblores, vasoconstricción).", categoria: "Signos Vitales" },
        { pregunta: "¿Cuál de los siguientes NO es un mecanismo de pérdida de calor corporal?", opciones: ["Sudoración (evaporación)", "Radiación infrarroja", "Temblor muscular", "Vasodilatación cutánea"], correcta: 2, explicacion: "El temblor muscular es un mecanismo de PRODUCCIÓN de calor (termogénesis). La sudoración, radiación y vasodilatación son mecanismos de pérdida de calor.", categoria: "Signos Vitales" },

        // FRECUENCIA CARDÍACA
        { pregunta: "La frecuencia cardíaca normal en reposo de un adulto es:", opciones: ["40–60 lpm", "50–90 lpm", "60–100 lpm", "70–110 lpm"], correcta: 2, explicacion: "La FC normal en adultos es 60–100 lpm. En atletas puede ser menor (bradicardia fisiológica). En neonatos es 120–160 lpm.", categoria: "Signos Vitales" },
        { pregunta: "Se denomina taquicardia cuando la frecuencia cardíaca en adultos supera:", opciones: ["80 lpm", "90 lpm", "100 lpm", "110 lpm"], correcta: 2, explicacion: "Taquicardia = FC >100 lpm en adultos. Causas: fiebre, ansiedad, anemia, hipertiroidismo, ejercicio, deshidratación.", categoria: "Signos Vitales" },
        { pregunta: "¿Cuál de las siguientes condiciones puede causar bradicardia?", opciones: ["Hipertiroidismo", "Fiebre alta", "Uso de β-bloqueadores", "Anemia severa"], correcta: 2, explicacion: "Los β-bloqueadores reducen la frecuencia cardíaca al bloquear los receptores β1 del corazón. También causan bradicardia: hipotiroidismo, entrenamiento atlético, bloqueos AV.", categoria: "Signos Vitales" },
        { pregunta: "La frecuencia cardíaca de un recién nacido normal es aproximadamente:", opciones: ["60–100 lpm", "80–120 lpm", "120–160 lpm", "140–180 lpm"], correcta: 2, explicacion: "Los recién nacidos tienen FC de 120–160 lpm, fisiológicamente más alta que los adultos debido a su mayor metabolismo basal y menor volumen sistólico.", categoria: "Signos Vitales" },
        { pregunta: "¿En qué arteria se palpa más frecuentemente el pulso en situaciones de emergencia?", opciones: ["Radial", "Braquial", "Carotídea", "Femoral"], correcta: 2, explicacion: "En emergencias se prefiere la arteria carótida porque es fácilmente palpable y se mantiene con pulso incluso con TA sistólica de 60 mmHg. La radial puede desaparecer con TA <80 mmHg.", categoria: "Signos Vitales" },

        // FRECUENCIA RESPIRATORIA
        { pregunta: "La frecuencia respiratoria normal en adultos es:", opciones: ["8–12 rpm", "12–20 rpm", "20–25 rpm", "25–30 rpm"], correcta: 1, explicacion: "La FR normal en adultos es 12–20 respiraciones por minuto. Cada respiración incluye una inspiración y una espiración.", categoria: "Signos Vitales" },
        { pregunta: "La taquipnea en adultos se define como FR mayor a:", opciones: ["16 rpm", "18 rpm", "20 rpm", "25 rpm"], correcta: 2, explicacion: "Taquipnea = FR >20 rpm en adultos. Causas: fiebre, ansiedad, neumonía, asma, acidosis metabólica (compensación).", categoria: "Signos Vitales" },
        { pregunta: "El patrón respiratorio de Kussmaul se caracteriza por:", opciones: ["Ciclos de apnea seguidos de hiperpnea progresiva", "Respiraciones profundas y rápidas regulares", "Respiraciones irregulares con períodos de apnea", "Respiraciones superficiales y lentas"], correcta: 1, explicacion: "La respiración de Kussmaul es profunda, rápida y regular. Es característica de la cetoacidosis diabética; representa una compensación respiratoria de la acidosis metabólica.", categoria: "Signos Vitales" },
        { pregunta: "El patrón de Cheyne-Stokes se caracteriza por:", opciones: ["Respiraciones profundas y rápidas constantes", "Ciclos de hiperpnea seguidos de apnea", "Respiraciones completamente irregulares", "Inspiraciones prolongadas con espiración breve"], correcta: 1, explicacion: "Cheyne-Stokes: ciclos de hiperpnea progresiva seguida de apnea. Se observa en insuficiencia cardíaca congestiva, ACV y en personas a gran altitud.", categoria: "Signos Vitales" },
        { pregunta: "La FR normal en recién nacidos es:", opciones: ["20–30 rpm", "30–40 rpm", "40–60 rpm", "60–80 rpm"], correcta: 2, explicacion: "Los recién nacidos tienen FR de 40–60 rpm, mucho mayor que la de adultos, porque sus pulmones son pequeños y su metabolismo elevado.", categoria: "Signos Vitales" },

        // OXIMETRÍA
        { pregunta: "Una saturación de oxígeno (SpO₂) normal en adultos es:", opciones: ["88–92%", "90–95%", "95–100%", "92–98%"], correcta: 2, explicacion: "La SpO₂ normal es 95–100%. Valores <95% indican hipoxemia y pueden requerir oxígeno suplementario.", categoria: "Signos Vitales" },
        { pregunta: "¿A qué porcentaje de SpO₂ se considera hipoxemia grave?", opciones: ["Menor de 95%", "Menor de 90%", "Menor de 85%", "Menor de 80%"], correcta: 2, explicacion: "La hipoxemia grave se define como SpO₂ <85%, constituyendo una emergencia médica por riesgo de daño orgánico por falta de oxígeno.", categoria: "Signos Vitales" },
        { pregunta: "¿Qué instrumento se usa para medir la saturación de oxígeno de forma no invasiva?", opciones: ["Esfigmomanómetro", "Espirómetro", "Pulsioxímetro (oxímetro de pulso)", "Capnógrafo"], correcta: 2, explicacion: "El pulsioxímetro mide la SpO₂ mediante espectrofotometría, detectando la diferencia de absorción de luz entre hemoglobina oxigenada y desoxigenada.", categoria: "Signos Vitales" },
        { pregunta: "La hipoxemia leve corresponde a valores de SpO₂ entre:", opciones: ["90–94%", "91–94%", "92–95%", "93–96%"], correcta: 1, explicacion: "La hipoxemia leve = SpO₂ 91–94%. En este rango se recomienda administrar oxígeno suplementario para prevenir complicaciones.", categoria: "Signos Vitales" },

        // GLUCOSA
        { pregunta: "El valor normal de glucosa en ayuno según la ADA es:", opciones: ["60–90 mg/dL", "70–99 mg/dL", "80–110 mg/dL", "90–120 mg/dL"], correcta: 1, explicacion: "La glucemia en ayuno normal es 70–99 mg/dL. Entre 100–125 mg/dL = prediabetes. ≥126 mg/dL en dos ocasiones = diagnóstico de diabetes.", categoria: "Signos Vitales" },
        { pregunta: "La hipoglucemia se define como glucemia menor a:", opciones: ["60 mg/dL", "70 mg/dL", "80 mg/dL", "90 mg/dL"], correcta: 1, explicacion: "La hipoglucemia se define como glucosa <70 mg/dL. Síntomas: sudoración, temblor, confusión, palpitaciones. Tratamiento: azúcar de absorción rápida.", categoria: "Signos Vitales" },
        { pregunta: "Para diagnosticar diabetes mellitus en ayuno se requiere glucemia:", opciones: ["Mayor de 110 mg/dL", "Mayor de 115 mg/dL", "Mayor de 120 mg/dL", "Mayor o igual a 126 mg/dL"], correcta: 3, explicacion: "El criterio diagnóstico de DM es glucemia en ayuno ≥126 mg/dL confirmada en 2 ocasiones distintas. También: glucemia aleatoria ≥200 mg/dL con síntomas, o HbA1c ≥6.5%.", categoria: "Signos Vitales" },
        { pregunta: "La prediabetes se diagnostica con glucemia en ayuno entre:", opciones: ["90–109 mg/dL", "100–125 mg/dL", "110–135 mg/dL", "115–130 mg/dL"], correcta: 1, explicacion: "La prediabetes corresponde a glucemia en ayuno 100–125 mg/dL. Representa riesgo elevado de desarrollar DM2. Se trata con cambios de estilo de vida.", categoria: "Signos Vitales" },

        // IMC
        { pregunta: "Un IMC de 27 kg/m² clasifica a una persona como:", opciones: ["Peso normal", "Sobrepeso", "Obesidad grado I", "Obesidad grado II"], correcta: 1, explicacion: "IMC 25.0–29.9 = Sobrepeso. IMC 18.5–24.9 = Normal. IMC 30–34.9 = Obesidad I. IMC 35–39.9 = Obesidad II. IMC ≥40 = Obesidad mórbida.", categoria: "Signos Vitales" },
        { pregunta: "La fórmula del Índice de Masa Corporal (IMC) es:", opciones: ["Peso (kg) × Talla (m)", "Peso (kg) / Talla (m)", "Peso (kg) / Talla² (m²)", "Peso (kg) × Talla² (m²)"], correcta: 2, explicacion: "IMC = Peso en kg dividido entre el cuadrado de la talla en metros. Ejemplo: 70 kg / (1.75)² = 70 / 3.0625 = 22.9 kg/m² (normal).", categoria: "Signos Vitales" },
        { pregunta: "¿Cuál es el IMC considerado obesidad mórbida (grado III)?", opciones: ["Mayor o igual a 35 kg/m²", "Mayor o igual a 38 kg/m²", "Mayor o igual a 40 kg/m²", "Mayor o igual a 45 kg/m²"], correcta: 2, explicacion: "Obesidad grado III (mórbida) = IMC ≥40 kg/m². Se asocia con alto riesgo cardiovascular, DM2, apnea del sueño y reducción de esperanza de vida.", categoria: "Signos Vitales" },

        // PREGUNTAS INTEGRADORAS
        { pregunta: "Un paciente tiene FC=110, FR=24, Temp=38.5°C y TA=100/65. ¿Cuáles signos vitales son ANORMALES?", opciones: ["Solo la temperatura", "FC y temperatura", "FC, FR y temperatura", "Todos los signos vitales"], correcta: 3, explicacion: "FC=110 (taquicardia >100), FR=24 (taquipnea >20), Temp=38.5 (fiebre ≥38), TA=100/65 (borderline baja, sistólica >90 pero diastólica baja). Cuadro compatible con sepsis.", categoria: "Signos Vitales" },
        { pregunta: "¿Cuál de los siguientes NO es un signo vital clásico?", opciones: ["Tensión arterial", "Frecuencia respiratoria", "Nivel de conciencia", "Peso corporal"], correcta: 3, explicacion: "Los 5 signos vitales clásicos son: TA, FC, FR, temperatura y SpO₂. El peso y el nivel de conciencia son parámetros clínicos importantes pero no se clasifican como signos vitales propiamente dichos.", categoria: "Signos Vitales" },
        { pregunta: "La medición de la temperatura rectal es más alta que la oral porque:", opciones: ["El recto tiene más terminaciones nerviosas", "Es más cercana a la temperatura central del organismo", "Los gérmenes aumentan la temperatura rectal", "El recto genera más calor metabólico"], correcta: 1, explicacion: "La temperatura rectal refleja más fielmente la temperatura central del cuerpo (≈0.5°C mayor que la oral). La temperatura axilar es ≈0.5°C menor que la oral.", categoria: "Signos Vitales" },
        { pregunta: "En una persona con cetoacidosis diabética, ¿qué patrón respiratorio es característico?", opciones: ["Cheyne-Stokes", "Kussmaul", "Biot", "Apnea"], correcta: 1, explicacion: "La respiración de Kussmaul (profunda, rápida y regular) es el patrón compensatorio de la cetoacidosis diabética, donde el organismo intenta eliminar CO₂ para compensar la acidosis metabólica.", categoria: "Signos Vitales" },
        { pregunta: "Un paciente tiene SpO₂ de 88%. Esto indica:", opciones: ["Saturación normal", "Hipoxemia leve", "Hipoxemia moderada", "Hipoxemia grave"], correcta: 2, explicacion: "SpO₂ 86–90% = hipoxemia moderada. <85% = grave. 91–94% = leve. ≥95% = normal. Con SpO₂ de 88% se debe administrar oxígeno de inmediato.", categoria: "Signos Vitales" }
    ]
};

console.log('✅ Módulo Signos Vitales cargado —', MODULO_SIGNOS_VITALES.lecciones.length, 'lecciones,', MODULO_SIGNOS_VITALES.evaluacion.length, 'preguntas');
