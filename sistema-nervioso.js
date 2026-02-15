// ============================================
// MÓDULO: SISTEMA NERVIOSO
// ============================================

const MODULO_SISTEMA_NERVIOSO = {
    id: 'sistema-nervioso',
    titulo: 'Sistema Nervioso',
    descripcion: 'SNC, SNP, neuronas y funciones',
    icono: '🧠',
    progreso: 0,
    lecciones: [

        // ─────────────────────────────────────────
        // LECCIÓN 1: SNC — ENCÉFALO
        // ─────────────────────────────────────────
        {
            id: 'snc-encefalo',
            titulo: 'Sistema Nervioso Central: Encéfalo',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">ENCÉFALO</h4>
                    <p style="margin: 0;">Parte del SNC contenida en la cavidad craneal. Pesa ~1400 g en el adulto. Está protegido por el cráneo, las meninges y el líquido cefalorraquídeo. Consta de <strong>cerebro, cerebelo y tronco encefálico</strong>.</p>
                </div>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

                    <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem;">
                            <div style="background: #3b82f6; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">🧠</div>
                            <h4 style="color: #3b82f6; margin: 0;">Cerebro (Telencéfalo + Diencéfalo)</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">La parte más grande del encéfalo. Se divide en <strong>dos hemisferios</strong> (derecho e izquierdo) conectados por el <strong>cuerpo calloso</strong>.</p>
                        <div style="display: grid; gap: 0.4rem; font-size: 0.9rem;">
                            <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Lóbulo frontal:</strong> funciones ejecutivas, movimiento voluntario, lenguaje (Broca)</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Lóbulo parietal:</strong> sensación somática, orientación espacial</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Lóbulo temporal:</strong> audición, memoria, lenguaje (Wernicke)</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Lóbulo occipital:</strong> visión y procesamiento visual</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Diencéfalo:</strong> tálamo (relay sensorial) e hipotálamo (homeostasis, temperatura, hambre, sed, sueño)</div>
                        </div>
                    </div>

                    <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem;">
                            <div style="background: #10b981; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">🌀</div>
                            <h4 style="color: #10b981; margin: 0;">Cerebelo</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">Ubicado en la fosa craneal posterior, bajo el cerebro. Representa el 10% del peso encefálico pero contiene el <strong>50% de las neuronas</strong>.</p>
                        <div style="display: grid; gap: 0.4rem; font-size: 0.9rem;">
                            <div style="background: rgba(16,185,129,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Coordina</strong> el movimiento voluntario (precisión y suavidad)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Equilibrio y postura</strong> corporal</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Aprendizaje motor</strong> (montar bicicleta, tocar un instrumento)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;">Lesión → <strong>ataxia</strong> (movimientos incoordinados, marcha tambaleante)</div>
                        </div>
                    </div>

                    <div style="background: rgba(251,146,60,0.1); border: 1px solid rgba(251,146,60,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem;">
                            <div style="background: #fb923c; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">🔗</div>
                            <h4 style="color: #fb923c; margin: 0;">Tronco Encefálico</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">Conecta el cerebro con la médula espinal. Controla funciones <strong>vitales automáticas</strong>. Contiene los núcleos de los nervios craneales III-XII.</p>
                        <div style="display: grid; gap: 0.4rem; font-size: 0.9rem;">
                            <div style="background: rgba(251,146,60,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Mesencéfalo:</strong> reflejos visuales y auditivos, control motor</div>
                            <div style="background: rgba(251,146,60,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Protuberancia (puente de Varolio):</strong> respiración, sueño, postura</div>
                            <div style="background: rgba(251,146,60,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Bulbo raquídeo (médula oblongada):</strong> frecuencia cardíaca, respiración, deglución, vómito</div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Clave:</strong> El bulbo raquídeo contiene los centros vitales — una lesión aquí es incompatible con la vida.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 2: SNC — MÉDULA ESPINAL
        // ─────────────────────────────────────────
        {
            id: 'snc-medula',
            titulo: 'Sistema Nervioso Central: Médula Espinal',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">MÉDULA ESPINAL</h4>
                    <p style="margin: 0;">Estructura cilíndrica que se extiende desde el bulbo raquídeo hasta la vértebra <strong>L1-L2</strong>. Mide ~45 cm. Está protegida por la columna vertebral y las meninges.</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Segmentos Medulares</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); padding: 0.75rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: 800; color: #3b82f6;">8</div>
                        <div style="font-size: 0.85rem; color: #94a3b8;">Cervicales (C1–C8)</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Brazos y cuello</div>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: 800; color: #10b981;">12</div>
                        <div style="font-size: 0.85rem; color: #94a3b8;">Torácicos (T1–T12)</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Tórax y abdomen</div>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.75rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: 800; color: #fb923c;">5</div>
                        <div style="font-size: 0.85rem; color: #94a3b8;">Lumbares (L1–L5)</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Piernas y muslos</div>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 0.75rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: 800; color: #8b5cf6;">5+1</div>
                        <div style="font-size: 0.85rem; color: #94a3b8;">Sacros (S1–S5) + Coccígeo</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Pelvis y genitales</div>
                    </div>
                </div>

                <h3 style="color: #10b981; margin-bottom: 0.75rem;">Estructura Interna</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Sustancia gris</strong> (en H/mariposa) — al interior
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
                            <div style="color: #94a3b8;">🔼 <strong>Asta anterior (ventral):</strong> neuronas motoras</div>
                            <div style="color: #94a3b8;">🔽 <strong>Asta posterior (dorsal):</strong> neuronas sensitivas</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Sustancia blanca</strong> (rodeando la gris) — axones mielinizados
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.4rem 0 0;">Contiene los tractos ascendentes (sensitivos → encéfalo) y descendentes (motores → músculos).</p>
                    </div>
                </div>

                <h3 style="color: #fb923c; margin-bottom: 0.75rem;">Funciones Principales</h3>
                <div style="display: grid; gap: 0.5rem; margin-bottom: 1rem;">
                    <div style="background: rgba(251,146,60,0.1); padding: 0.75rem 1rem; border-radius: 8px;">🔄 <strong>Conducción:</strong> transmite impulsos sensitivos al encéfalo y motores al cuerpo</div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.75rem 1rem; border-radius: 8px;">⚡ <strong>Reflejos medulares:</strong> arco reflejo sin necesidad del encéfalo (ej: reflejo patelar)</div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Clínica:</strong> Lesión cervical alta (C3-C5) → parálisis del diafragma. Lesión lumbar → paraplejia (piernas). Lesión cervical → cuadriplejia (4 extremidades).</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 3: SISTEMA NERVIOSO PERIFÉRICO
        // ─────────────────────────────────────────
        {
            id: 'snp',
            titulo: 'Sistema Nervioso Periférico',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">SISTEMA NERVIOSO PERIFÉRICO (SNP)</h4>
                    <p style="margin: 0;">Todo el tejido nervioso fuera del SNC. Conecta el SNC con los órganos, músculos y piel. Incluye <strong>nervios craneales, nervios espinales</strong> y el <strong>sistema nervioso autónomo</strong>.</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Por Dirección de la Señal</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #3b82f6;">Aferente (Sensitivo)</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Lleva señales DESDE los receptores HACIA el SNC. Cuerpo → SNC.</p>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #10b981;">Eferente (Motor)</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Lleva señales DESDE el SNC HACIA los efectores. SNC → cuerpo.</p>
                    </div>
                </div>

                <h3 style="color: #fb923c; margin-bottom: 0.75rem;">Nervios Craneales (12 pares)</h3>
                <div style="background: rgba(30,41,59,0.8); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem;">
                    <div style="display: grid; gap: 0.4rem; font-size: 0.88rem;">
                        <div><strong style="color: #fb923c;">I Olfatorio</strong> — olfato</div>
                        <div><strong style="color: #fb923c;">II Óptico</strong> — visión</div>
                        <div><strong style="color: #fb923c;">III Oculomotor</strong> — movimiento ocular, pupila</div>
                        <div><strong style="color: #fb923c;">IV Troclear</strong> — músculo oblicuo superior del ojo</div>
                        <div><strong style="color: #fb923c;">V Trigémino</strong> — sensación facial, masticación</div>
                        <div><strong style="color: #fb923c;">VI Abducens</strong> — músculo recto lateral del ojo</div>
                        <div><strong style="color: #fb923c;">VII Facial</strong> — expresión facial, gusto anterior</div>
                        <div><strong style="color: #fb923c;">VIII Vestibulococlear</strong> — audición y equilibrio</div>
                        <div><strong style="color: #fb923c;">IX Glosofaríngeo</strong> — deglución, gusto posterior</div>
                        <div><strong style="color: #fb923c;">X Vago</strong> — parasimpático visceral (corazón, pulmón, digestión)</div>
                        <div><strong style="color: #fb923c;">XI Espinal (Accesorio)</strong> — músculos del cuello y hombro</div>
                        <div><strong style="color: #fb923c;">XII Hipogloso</strong> — movimiento de la lengua</div>
                    </div>
                    <p style="color: #eab308; font-size: 0.85rem; margin: 0.75rem 0 0;">💡 Mnemotecnia: <em>Oh, Oh, Oh, To Touch And Feel Very Good Velvet, Ah, Heaven!</em></p>
                </div>

                <h3 style="color: #8b5cf6; margin-bottom: 0.75rem;">Sistema Nervioso Autónomo (SNA)</h3>
                <div style="display: grid; gap: 0.6rem;">
                    <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #ef4444;">Simpático — "Fight or Flight" (lucha o huida)</strong>
                        <div style="display: grid; gap: 0.3rem; margin-top: 0.5rem; font-size: 0.9rem; color: #94a3b8;">
                            <div>↑ FC, ↑ PA, ↑ glucosa · dilata pupilas · broncodilatación</div>
                            <div>↓ digestión · vasodilatación en músculos</div>
                            <div>Neurotransmisor: <strong style="color: #ef4444;">Noradrenalina</strong></div>
                        </div>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #10b981;">Parasimpático — "Rest and Digest" (reposo y digestión)</strong>
                        <div style="display: grid; gap: 0.3rem; margin-top: 0.5rem; font-size: 0.9rem; color: #94a3b8;">
                            <div>↓ FC, ↓ PA · contrae pupilas (miosis) · broncoconstricción</div>
                            <div>↑ digestión y secreciones · erección</div>
                            <div>Neurotransmisor: <strong style="color: #10b981;">Acetilcolina</strong></div>
                        </div>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #8b5cf6;">Entérico</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">El "segundo cerebro" — regula el tracto gastrointestinal de forma independiente. Contiene ~500 millones de neuronas.</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 4: MENINGES Y LCR
        // ─────────────────────────────────────────
        {
            id: 'meninges-lcr',
            titulo: 'Meninges y Líquido Cefalorraquídeo',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">MENINGES</h4>
                    <p style="margin: 0;">Tres membranas concéntricas que envuelven y protegen el encéfalo y la médula espinal. De afuera hacia adentro: <strong>Duramadre → Aracnoides → Piamadre</strong>.</p>
                </div>

                <div style="display: grid; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #ef4444; font-size: 1rem;">1. Duramadre</strong> — "Madre dura"
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Capa más externa y resistente. Doble capa en el cráneo (perióstica + meníngea). Forma los senos venosos durales. <br><strong>Espacio epidural:</strong> entre el cráneo/vértebra y la duramadre → aquí se aplica la <em>anestesia epidural</em>.</p>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #fb923c; font-size: 1rem;">2. Aracnoides</strong> — "Membrana araña"
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Capa media. Delgada y avascular. Entre aracnoides y piamadre está el <strong>espacio subaracnoideo</strong> que contiene el LCR. <br><em>Punción lumbar:</em> se toma muestra de LCR del espacio subaracnoideo en L3-L4.</p>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #10b981; font-size: 1rem;">3. Piamadre</strong> — "Madre tierna"
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Capa más interna. Se adhiere directamente a la superficie del encéfalo y médula. Altamente vascularizada. Sigue todos los surcos y circunvoluciones cerebrales.</p>
                    </div>
                </div>

                <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.4); border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.75rem;">Líquido Cefalorraquídeo (LCR)</h4>
                    <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Producción:</strong> plexos coroideos de los ventrículos cerebrales (~500 mL/día)</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Cantidad:</strong> ~150 mL circulando en todo momento</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Composición normal:</strong> claro como agua, proteínas bajas, glucosa (60% plasmática), pocos leucocitos</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Funciones:</strong> amortiguación mecánica, nutrición, eliminación de desechos metabólicos</div>
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem 0.75rem; border-radius: 6px;"><strong>Meningitis bacteriana:</strong> LCR turbio, ↑ leucocitos (neutrófilos), ↑ proteínas, ↓ glucosa</div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 5: FUNCIONES DEL SN
        // ─────────────────────────────────────────
        {
            id: 'funciones-sn',
            titulo: 'Sistema Nervioso: Funciones',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">FUNCIONES GENERALES</h4>
                    <p style="margin: 0;">El sistema nervioso cumple tres funciones fundamentales: <strong>sensitiva, integradora y motora</strong>. Funciona como el "sistema de control" del cuerpo.</p>
                </div>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">1. Función Sensitiva (Aferente)</h4>
                        <p style="margin: 0 0 0.5rem;">Recibe información del ambiente interno y externo mediante receptores sensoriales.</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.88rem;">
                            <div style="background: rgba(59,130,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">👁️ Visión (retina)</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">👂 Audición (cóclea)</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">👃 Olfato (neuronas olfatorias)</div>
                            <div style="background: rgba(59,130,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🩸 Presión, dolor, temperatura (piel)</div>
                        </div>
                    </div>

                    <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">2. Función Integradora</h4>
                        <p style="margin: 0 0 0.5rem;">Procesa, analiza y almacena la información. Toma decisiones. Ocurre principalmente en el encéfalo.</p>
                        <div style="display: grid; gap: 0.4rem; font-size: 0.88rem;">
                            <div style="background: rgba(139,92,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🧠 Pensamiento, razonamiento, memoria</div>
                            <div style="background: rgba(139,92,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">💭 Emociones (sistema límbico)</div>
                            <div style="background: rgba(139,92,246,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">⚡ Reflejos (arcos reflejos medulares)</div>
                        </div>
                    </div>

                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #10b981; margin: 0 0 0.5rem;">3. Función Motora (Eferente)</h4>
                        <p style="margin: 0 0 0.5rem;">Envía señales a los efectores (músculos y glándulas) para generar una respuesta.</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.88rem;">
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">💪 Movimiento somático (voluntario)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">❤️ Control visceral (autónomo)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🫁 Respiración, FC, digestión</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">💧 Secreción glandular</div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem;">
                    <h4 style="color: #eab308; margin: 0 0 0.5rem;">Arco Reflejo — La vía más rápida</h4>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">Receptor → Neurona aferente → Centro integrador (médula) → Neurona eferente → Efector. <strong>No pasa por el encéfalo</strong>, por eso es tan rápido. Ejemplo: retirar la mano al quemarte.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 6: ESTRUCTURA DE LA NEURONA
        // ─────────────────────────────────────────
        {
            id: 'estructura-neurona',
            titulo: 'Estructura de la Neurona',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">LA NEURONA</h4>
                    <p style="margin: 0;">Unidad estructural y funcional del sistema nervioso. El cerebro humano contiene ~86 mil millones de neuronas. Cada neurona puede tener hasta <strong>10,000 conexiones sinápticas</strong>. Son células <strong>postmitóticas</strong> (no se dividen en el adulto).</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Partes de la Neurona</h3>
                <div style="display: grid; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #3b82f6; font-size: 1rem;">Soma (Cuerpo Celular)</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Centro metabólico de la neurona. Contiene el núcleo (con ADN), RER rugoso (<strong>cuerpos de Nissl</strong>), mitocondrias y el aparato de Golgi. Genera proteínas necesarias para toda la célula.</p>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #10b981; font-size: 1rem;">Dendritas</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Extensiones múltiples y ramificadas del soma. <strong>Reciben</strong> señales de otras neuronas. Las <strong>espinas dendríticas</strong> aumentan la superficie receptora. Más dendritas = más conexiones posibles.</p>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #fb923c; font-size: 1rem;">Axón</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;"><strong>Una sola</strong> extensión larga que conduce el impulso DESDE el soma HACIA otras células. Nace en el <strong>cono axónico</strong> (zona de inicio del potencial de acción). Termina en los <strong>botones terminales</strong> (telodendros).</p>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.25rem; border-radius: 8px;">
                        <strong style="color: #8b5cf6; font-size: 1rem;">Vaina de Mielina</strong>
                        <p style="margin: 0.4rem 0 0; color: #94a3b8; font-size: 0.9rem;">Cubierta lipídica que envuelve el axón. En el <strong>SNP</strong> la producen las <strong>células de Schwann</strong>; en el <strong>SNC</strong> los <strong>oligodendrocitos</strong>. Los espacios entre segmentos de mielina se llaman <strong>nódulos de Ranvier</strong> y permiten la conducción saltatoria.</p>
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; margin-top: 0.5rem; font-size: 0.88rem;">⚠️ <strong>Esclerosis Múltiple:</strong> destrucción autoinmune de la mielina en el SNC → ralentiza o bloquea la conducción nerviosa.</div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Regla de oro:</strong> Dendritas RECIBEN (input) → Soma INTEGRA → Axón ENVÍA (output). Siempre en ese sentido.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 7: TIPOS DE NEURONAS
        // ─────────────────────────────────────────
        {
            id: 'tipos-neuronas',
            titulo: 'Tipos de Neuronas',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">CLASIFICACIÓN DE NEURONAS</h4>
                    <p style="margin: 0;">Las neuronas se clasifican por su <strong>morfología</strong> (estructura) y por su <strong>función</strong> (rol en la transmisión de señales).</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Por Morfología (número de prolongaciones)</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: #3b82f6; min-width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white;">1+</div>
                        <div>
                            <strong>Multipolares</strong> — las más comunes del SNC
                            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.2rem 0 0;">Un axón + múltiples dendritas. Ej: neuronas motoras, células de Purkinje del cerebelo, interneuronas.</p>
                        </div>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: #10b981; min-width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white;">2</div>
                        <div>
                            <strong>Bipolares</strong> — especializadas sensoriales
                            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.2rem 0 0;">Un axón + una dendrita. Ej: retina (bastones/conos), mucosa olfatoria, ganglio vestibulococlear.</p>
                        </div>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: #fb923c; min-width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white;">1</div>
                        <div>
                            <strong>Pseudounipolares</strong> — sensitivas del SNP
                            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.2rem 0 0;">Una sola prolongación que se divide en T. Ej: ganglios de la raíz dorsal (llevan dolor, temperatura, tacto).</p>
                        </div>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: #8b5cf6; min-width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white;">-</div>
                        <div>
                            <strong>Unipolares</strong> — raras en humanos
                            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.2rem 0 0;">Solo una prolongación. Predominan en invertebrados. En humanos solo en etapa embrionaria.</p>
                        </div>
                    </div>
                </div>

                <h3 style="color: #10b981; margin-bottom: 0.75rem;">Por Función</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.25rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong style="color: #3b82f6;">Neuronas Sensitivas (Aferentes)</strong>
                        <p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Conducen señales DESDE receptores al SNC. Detectan cambios en el ambiente. Ej: pseudounipolares de los ganglios dorsales.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong style="color: #10b981;">Neuronas Motoras (Eferentes)</strong>
                        <p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Conducen señales DESDE el SNC a músculo o glándula. Ej: motoneuronas del asta anterior de la médula espinal.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong style="color: #fb923c;">Interneuronas (Asociativas)</strong>
                        <p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Conectan neuronas entre sí dentro del SNC. Son el 99% de todas las neuronas. Procesan e integran la información.</p>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Células de la glía:</strong> astrocitos, oligodendrocitos, microglía, células de Schwann. Son ~10x más numerosas que las neuronas y las apoyan, nutren y protegen.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 8: POTENCIAL DE ACCIÓN Y SINAPSIS
        // ─────────────────────────────────────────
        {
            id: 'potencial-sinapsis',
            titulo: 'Potencial de Acción y Sinapsis',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">SEÑALIZACIÓN NEURONAL</h4>
                    <p style="margin: 0;">Las neuronas se comunican mediante señales eléctricas (<strong>potenciales de acción</strong>) y señales químicas (<strong>neurotransmisores</strong> en la sinapsis).</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Potencial de Membrana en Reposo</h3>
                <div style="background: rgba(30,41,59,0.8); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem;">
                    <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                        <div>⚡ En reposo: <strong style="color: #3b82f6;">-70 mV</strong> (interior negativo respecto al exterior)</div>
                        <div>🔑 Mantenido por la bomba <strong>Na⁺/K⁺ ATPasa</strong>: saca 3 Na⁺ y mete 2 K⁺ (gasto ATP)</div>
                        <div>📊 Interior: alto K⁺, bajo Na⁺ | Exterior: alto Na⁺, bajo K⁺</div>
                    </div>
                </div>

                <h3 style="color: #fb923c; margin-bottom: 0.75rem;">Fases del Potencial de Acción</h3>
                <div style="display: grid; gap: 0.5rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); padding: 0.75rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: center;">
                        <span style="background: #3b82f6; color: white; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; flex-shrink:0;">1</span>
                        <div><strong>Despolarización:</strong> Na⁺ entra masivamente → potencial sube a +30 mV. Se activan canales de Na⁺ voltaje-dependientes.</div>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.75rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: center;">
                        <span style="background: #fb923c; color: white; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; flex-shrink:0;">2</span>
                        <div><strong>Repolarización:</strong> K⁺ sale → potencial regresa. Canales de Na⁺ se inactivan.</div>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 0.75rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: center;">
                        <span style="background: #8b5cf6; color: white; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; flex-shrink:0;">3</span>
                        <div><strong>Hiperpolarización (período refractario):</strong> baja hasta -80 mV. La neurona no puede dispararse de nuevo (período refractario absoluto).</div>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: center;">
                        <span style="background: #10b981; color: white; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem; flex-shrink:0;">4</span>
                        <div><strong>Restablecimiento:</strong> bomba Na⁺/K⁺ restaura el potencial de reposo en -70 mV.</div>
                    </div>
                </div>

                <h3 style="color: #10b981; margin-bottom: 0.75rem;">La Sinapsis</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Sinapsis química</strong> (la más común): el potencial de acción llega al botón terminal → Ca²⁺ entra → vesículas liberan <strong>neurotransmisor</strong> a la hendidura sináptica → se une a receptores postsinápticos.
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Sinapsis eléctrica</strong> (gap junctions): corriente eléctrica pasa directamente entre células. Más rápida pero menos flexible. Presente en corazón y músculo liso.
                    </div>
                </div>

                <h3 style="color: #8b5cf6; margin-bottom: 0.75rem;">Principales Neurotransmisores</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.88rem;">
                    <div style="background: rgba(16,185,129,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #10b981;">Acetilcolina</strong><br><span style="color:#94a3b8;">Músculo esquelético, parasimpático, memoria</span></div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #ef4444;">Noradrenalina</strong><br><span style="color:#94a3b8;">Simpático, atención, estado de alerta</span></div>
                    <div style="background: rgba(59,130,246,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #3b82f6;">Dopamina</strong><br><span style="color:#94a3b8;">Recompensa, movimiento (↓ en Parkinson)</span></div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #fb923c;">Serotonina</strong><br><span style="color:#94a3b8;">Estado de ánimo, sueño (↓ en depresión)</span></div>
                    <div style="background: rgba(139,92,246,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #a78bfa;">GABA</strong><br><span style="color:#94a3b8;">Inhibidor principal del SNC</span></div>
                    <div style="background: rgba(234,179,8,0.1); padding: 0.6rem; border-radius: 8px;"><strong style="color: #eab308;">Glutamato</strong><br><span style="color:#94a3b8;">Excitador principal del SNC, memoria</span></div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-weight: 600;">¡Has completado el módulo de Sistema Nervioso! 🎉<br>Realiza la evaluación para consolidar tu aprendizaje.</p>
                </div>
            `
        }

    ]
};

console.log("✅ Módulo Sistema Nervioso cargado —", MODULO_SISTEMA_NERVIOSO.lecciones.length, "lecciones");
