// ============================================
// MÓDULO: SISTEMA RESPIRATORIO
// Contenido EXANI-II Premedicina
// ============================================

const MODULO_SISTEMA_RESPIRATORIO = {
    id: 'sistema-respiratorio',
    titulo: 'Sistema Respiratorio',
    descripcion: 'Anatomía, fisiología pulmonar y patologías respiratorias',
    icono: '🫁',
    progreso: 0,
    lecciones: [

        {
            id: 'anatomia-vias-aereas',
            titulo: 'Anatomía de las Vías Aéreas',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(6,182,212,0.12);border-left:4px solid #06b6d4;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#06b6d4;margin:0 0 0.5rem;">Sistema Respiratorio</h4>
                    <p style="margin:0;line-height:1.6;">Conjunto de órganos que permiten el intercambio gaseoso (O₂ y CO₂) entre el organismo y el ambiente. Se divide en vías aéreas superiores e inferiores.</p>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Vías Aéreas Superiores</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">👃 Nariz y Fosas Nasales</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Entrada del aire. Funciones: filtrar (pelos y moco), calentar (red vascular) y humidificar el aire inspirado. Contiene el epitelio olfatorio.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">👄 Faringe</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Conducto común para el aire y los alimentos. Se divide en: nasofaringe (solo aire), orofaringe y laringofaringe.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">🗣️ Laringe</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Contiene las cuerdas vocales (fonación). La epiglotis cubre la laringe durante la deglución para evitar aspiración. Cartílago tiroides = "nuez de Adán".</p>
                    </div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Vías Aéreas Inferiores</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">Tráquea</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Tubo de ~12 cm reforzado con anillos cartilaginosos en C (incompletos atrás). Se bifurca en la <strong>carina</strong> (nivel de T4-T5) en dos bronquios principales.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">Bronquios Principales</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;"><strong>Derecho</strong>: más corto, ancho y vertical (¡cuerpos extraños caen aquí con más frecuencia!). <strong>Izquierdo</strong>: más largo y horizontal. Se dividen en bronquios lobares y segmentarios.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(6,182,212,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">Bronquiolos</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Sin cartílago. Los bronquiolos terminales son los últimos de conducción. Los bronquiolos respiratorios ya participan en el intercambio gaseoso.</p>
                    </div>
                    <div style="background:rgba(6,182,212,0.12);border:1px solid rgba(6,182,212,0.3);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#22d3ee;">Alvéolos</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Sacos microscópicos donde ocurre el <strong>intercambio gaseoso (hematosis)</strong>. Son ~300 millones por pulmón. Cubiertos por neumocitos I y II. Los neumocitos II producen <strong>surfactante pulmonar</strong>.</p>
                    </div>
                </div>

                <div style="background:rgba(6,182,212,0.08);border-radius:10px;padding:1rem;">
                    <p style="margin:0;color:#67e8f9;font-size:0.88rem;">💡 <strong>Árbol bronquial:</strong> Tráquea → Bronquios principales (2) → Lobares (5) → Segmentarios (18) → Bronquiolos → Bronquiolos terminales → Bronquiolos respiratorios → Conductos alveolares → Alvéolos</p>
                </div>
            `
        },

        {
            id: 'pulmones-pleura',
            titulo: 'Pulmones y Pleura',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Los Pulmones</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#22d3ee;margin:0 0 0.5rem;">Pulmón Derecho</h4>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.7;">
                            🔷 3 lóbulos<br>
                            🔷 Superior, medio e inferior<br>
                            🔷 Más voluminoso<br>
                            🔷 2 cisuras (mayor y menor)
                        </div>
                    </div>
                    <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#22d3ee;margin:0 0 0.5rem;">Pulmón Izquierdo</h4>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.7;">
                            🔷 2 lóbulos<br>
                            🔷 Superior e inferior<br>
                            🔷 Tiene língula (equivale al lóbulo medio)<br>
                            🔷 1 cisura (mayor/oblicua)
                        </div>
                    </div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">La Pleura</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.9rem;border-radius:10px;border:1px solid rgba(6,182,212,0.2);">
                        <strong style="color:#67e8f9;">Pleura Visceral</strong> — cubre directamente al pulmón
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.9rem;border-radius:10px;border:1px solid rgba(6,182,212,0.2);">
                        <strong style="color:#67e8f9;">Pleura Parietal</strong> — tapiza la caja torácica por dentro
                    </div>
                    <div style="background:rgba(6,182,212,0.08);padding:0.9rem;border-radius:10px;border:1px solid rgba(6,182,212,0.15);">
                        <strong style="color:#22d3ee;">Espacio pleural</strong> — entre las dos pleuras. Contiene ~10-20 mL de líquido pleural que reduce la fricción. Presión negativa que mantiene los pulmones expandidos.
                    </div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Patologías de la pleura</h3>
                <div style="display:grid;gap:0.5rem;">
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.8rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Neumotórax</strong> — aire en el espacio pleural → colapso pulmonar
                    </div>
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.8rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fca5a5;">Hemotórax</strong> — sangre en el espacio pleural (trauma)
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #f97316;padding:0.8rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fdba74;">Derrame pleural</strong> — líquido excesivo en la pleura (IC, infección, cáncer)
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #f97316;padding:0.8rem;border-radius:8px;font-size:0.9rem;">
                        <strong style="color:#fdba74;">Pleuritis</strong> — inflamación de la pleura → dolor pleurítico (aumenta con la respiración)
                    </div>
                </div>
            `
        },

        {
            id: 'mecanica-respiratoria',
            titulo: 'Mecánica Respiratoria',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(6,182,212,0.12);border-left:4px solid #06b6d4;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#06b6d4;margin:0 0 0.5rem;">¿Cómo respiramos?</h4>
                    <p style="margin:0;line-height:1.6;">La respiración es un proceso activo (inspiración) y pasivo (espiración normal). El músculo principal es el <strong>diafragma</strong>.</p>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Inspiración (activa)</h3>
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:10px;margin-bottom:1rem;">
                    <div style="font-size:0.9rem;line-height:1.8;color:#e2e8f0;">
                        Diafragma se contrae y desciende → ↑ volumen torácico → ↓ presión intrapulmonar → <strong style="color:#6ee7b7;">el aire ENTRA</strong>
                    </div>
                    <div style="margin-top:0.5rem;color:#94a3b8;font-size:0.85rem;">Músculos accesorios: intercostales externos, escalenos, esternocleidomastoideo (en ejercicio/disnea)</div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Espiración (pasiva en reposo)</h3>
                <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);padding:1rem;border-radius:10px;margin-bottom:1.5rem;">
                    <div style="font-size:0.9rem;line-height:1.8;color:#e2e8f0;">
                        Diafragma se relaja y asciende → ↓ volumen torácico → ↑ presión intrapulmonar → <strong style="color:#fca5a5;">el aire SALE</strong>
                    </div>
                    <div style="margin-top:0.5rem;color:#94a3b8;font-size:0.85rem;">Espiración forzada usa: intercostales internos y abdominales</div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Volúmenes y Capacidades Pulmonares</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#67e8f9;">Volumen Corriente (VC)</strong> — respiración normal</span>
                        <strong style="color:#22d3ee;">500 mL</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#67e8f9;">Vol. de Reserva Inspiratoria</strong></span>
                        <strong style="color:#22d3ee;">~3,000 mL</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#67e8f9;">Vol. de Reserva Espiratoria</strong></span>
                        <strong style="color:#22d3ee;">~1,200 mL</strong>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#67e8f9;">Volumen Residual</strong> — queda siempre en pulmones</span>
                        <strong style="color:#22d3ee;">~1,200 mL</strong>
                    </div>
                    <div style="background:rgba(6,182,212,0.15);border:1px solid rgba(6,182,212,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#22d3ee;">Capacidad Vital (CV)</strong> = VC + VRI + VRE</span>
                        <strong style="color:#06b6d4;">~4,800 mL</strong>
                    </div>
                    <div style="background:rgba(6,182,212,0.15);border:1px solid rgba(6,182,212,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#22d3ee;">Capacidad Pulmonar Total</strong> = CV + VR</span>
                        <strong style="color:#06b6d4;">~6,000 mL</strong>
                    </div>
                </div>

                <div style="background:rgba(6,182,212,0.08);border-radius:8px;padding:0.9rem;">
                    <p style="margin:0;color:#67e8f9;font-size:0.88rem;">💡 <strong>Espacio muerto anatómico:</strong> ~150 mL de aire que queda en vías aéreas de conducción y NO participa en intercambio gaseoso (nariz, tráquea, bronquios).</p>
                </div>
            `
        },

        {
            id: 'intercambio-gaseoso',
            titulo: 'Intercambio Gaseoso y Transporte',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(6,182,212,0.12);border-left:4px solid #06b6d4;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#06b6d4;margin:0 0 0.5rem;">Hematosis (Intercambio Gaseoso)</h4>
                    <p style="margin:0;line-height:1.6;">Proceso de intercambio de O₂ y CO₂ entre los alvéolos y la sangre capilar pulmonar. Ocurre por <strong>difusión simple</strong> según el gradiente de presión parcial.</p>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Presiones Parciales clave (mmHg)</h3>
                <div style="overflow-x:auto;margin-bottom:1.25rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                        <tr style="background:rgba(6,182,212,0.2);">
                            <th style="padding:0.6rem;text-align:left;color:#67e8f9;border:1px solid rgba(6,182,212,0.2);">Gas</th>
                            <th style="padding:0.6rem;color:#67e8f9;border:1px solid rgba(6,182,212,0.2);">Alveolar</th>
                            <th style="padding:0.6rem;color:#67e8f9;border:1px solid rgba(6,182,212,0.2);">Sangre venosa</th>
                            <th style="padding:0.6rem;color:#67e8f9;border:1px solid rgba(6,182,212,0.2);">Sangre arterial</th>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);">O₂</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#6ee7b7;font-weight:700;">100</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#fca5a5;">40</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#6ee7b7;">100</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);">CO₂</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#fca5a5;font-weight:700;">40</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#fca5a5;">46</td>
                            <td style="padding:0.6rem;border:1px solid rgba(100,116,139,0.2);text-align:center;color:#6ee7b7;">40</td>
                        </tr>
                    </table>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Transporte de O₂ en sangre</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(16,185,129,0.1);border-left:3px solid #10b981;padding:0.9rem;border-radius:8px;">
                        <strong style="color:#6ee7b7;">98.5% — Unido a hemoglobina</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Forma oxihemoglobina (HbO₂). 1g de Hb transporta 1.34 mL de O₂. La saturación normal es ≥95% (SpO₂).</p>
                    </div>
                    <div style="background:rgba(100,116,139,0.1);border-left:3px solid #64748b;padding:0.9rem;border-radius:8px;">
                        <strong style="color:#94a3b8;">1.5% — Disuelto en plasma</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Pequeña fracción disuelta directamente.</p>
                    </div>
                </div>

                <h3 style="color:#06b6d4;margin-bottom:0.75rem;">Transporte de CO₂ en sangre</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;font-size:0.9rem;display:flex;gap:0.5rem;">
                        <strong style="color:#fca5a5;flex-shrink:0;">70%</strong> — Como bicarbonato (HCO₃⁻) en plasma tras reacción con agua
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;font-size:0.9rem;display:flex;gap:0.5rem;">
                        <strong style="color:#fca5a5;flex-shrink:0;">23%</strong> — Unido a hemoglobina (carbaminohemoglobina)
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;font-size:0.9rem;display:flex;gap:0.5rem;">
                        <strong style="color:#fca5a5;flex-shrink:0;">7%</strong> — Disuelto en plasma
                    </div>
                </div>

                <div style="background:rgba(6,182,212,0.08);border-radius:8px;padding:0.9rem;">
                    <p style="margin:0;color:#67e8f9;font-size:0.88rem;">💡 <strong>Control de la respiración:</strong> El centro respiratorio en el <em>bulbo raquídeo</em> es el principal regulador. El estímulo más potente es el ↑ CO₂ arterial (hipercapnia), no la falta de O₂.</p>
                </div>
            `
        },

        {
            id: 'enfermedades-respiratorias',
            titulo: 'Enfermedades Respiratorias Principales',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(6,182,212,0.12);border-left:4px solid #06b6d4;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0;line-height:1.6;">Las enfermedades respiratorias son la 3ra causa de muerte en el mundo. El tabaco es el factor de riesgo más importante para las enfermedades crónicas.</p>
                </div>

                <div style="display:grid;gap:0.75rem;margin-bottom:1rem;">

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #06b6d4;padding:1rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">🌬️ EPOC (Enfermedad Pulmonar Obstructiva Crónica)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Obstrucción crónica e irreversible del flujo aéreo. Incluye: <em>enfisema</em> (destrucción de alvéolos, "pulmón de papel") y <em>bronquitis crónica</em> (tos con moco ≥3 meses/año por 2 años). Causa: tabaquismo (90%). Espirometría: FEV1/FVC &lt;0.70.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #f59e0b;padding:1rem;border-radius:10px;">
                        <strong style="color:#fde68a;">💨 Asma</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Inflamación crónica de la vía aérea con hiperreactividad bronquial y obstrucción <strong>reversible</strong>. Síntomas: sibilancias, tos, disnea episódica (peor de noche/madrugada). Desencadenantes: alérgenos, ejercicio, frío, infecciones. Tratamiento: broncodilatadores (β₂-agonistas) + corticoides inhalados.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🦠 Neumonía</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Inflamación del parénquima pulmonar (alvéolos). Más común: Streptococcus pneumoniae. Síntomas: fiebre, tos productiva, dolor pleurítico, crepitantes. Diagnóstico: Rx tórax (infiltrado/consolidación). Tratamiento: antibióticos según agente.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">🔴 Tuberculosis Pulmonar</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Infección por Mycobacterium tuberculosis. Síntomas: tos crónica, hemoptisis, sudoración nocturna, pérdida de peso. Diagnóstico: BAAR, cultivo, PPD/IGRA. Tratamiento: RIPE 6 meses (Rifampicina, Isoniazida, Pirazinamida, Etambutol).</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #10b981;padding:1rem;border-radius:10px;">
                        <strong style="color:#6ee7b7;">💚 Neumotórax</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Aire en el espacio pleural. Espontáneo: jóvenes altos delgados (bulas). Traumático: por herida. A tensión: emergencia (desviación traqueal, hipotensión). Tratamiento: drenaje pleural.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #3b82f6;padding:1rem;border-radius:10px;">
                        <strong style="color:#93c5fd;">🩺 Síndrome de Distrés Respiratorio Agudo (SDRA)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Fallo respiratorio agudo grave por daño alveolar difuso. PaO₂/FiO₂ &lt;300. Causas: sepsis, trauma, neumonía grave. Alta mortalidad. Requiere ventilación mecánica.</p>
                    </div>
                </div>

                <div style="background:rgba(6,182,212,0.08);border-left:4px solid #06b6d4;padding:1rem;border-radius:10px;">
                    <h4 style="color:#06b6d4;margin:0 0 0.5rem;">Prevención respiratoria</h4>
                    <div style="display:grid;gap:0.3rem;font-size:0.88rem;color:#cbd5e1;">
                        <div>✅ No fumar (tabaco = principal FDR modificable)</div>
                        <div>✅ Vacunación: influenza anual, neumococo, COVID-19</div>
                        <div>✅ Ventilación adecuada en espacios cerrados</div>
                        <div>✅ Uso de cubrebocas en ambientes contaminados</div>
                        <div>✅ Ejercicio aeróbico regular mejora la capacidad pulmonar</div>
                    </div>
                </div>
            `
        }
    ]
};

console.log("✅ Sistema Respiratorio cargado:", MODULO_SISTEMA_RESPIRATORIO.lecciones.length, "lecciones,", MODULO_SISTEMA_RESPIRATORIO.evaluacion.length, "preguntas");
