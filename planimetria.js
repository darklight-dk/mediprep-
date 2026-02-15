// ============================================
// MÓDULO: PLANIMETRÍA ANATÓMICA
// ============================================

const MODULO_PLANIMETRIA = {
    id: 'planimetria',
    titulo: 'Planimetría Anatómica',
    descripcion: 'Planos anatómicos y términos de posición',
    icono: '📐',
    progreso: 0,
    lecciones: [

        // ─────────────────────────────────────────
        // LECCIÓN 1: POSICIÓN ANATÓMICA ESTÁNDAR
        // ─────────────────────────────────────────
        {
            id: 'posicion-anatomica',
            titulo: 'Posición Anatómica Estándar',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">POSICIÓN ANATÓMICA ESTÁNDAR</h4>
                    <p style="margin: 0;">Es la referencia universal para describir ubicaciones corporales. <strong>Todas</strong> las descripciones anatómicas asumen esta posición, independientemente de cómo esté el paciente.</p>
                </div>

                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Características de la Posición Estándar</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: flex-start;">
                        <span style="font-size: 1.3rem;">🧍</span>
                        <div><strong>De pie (bipedestación)</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Cuerpo erecto, en posición vertical</p></div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: flex-start;">
                        <span style="font-size: 1.3rem;">👀</span>
                        <div><strong>Mirando al frente</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Ojos dirigidos hacia adelante (horizonte)</p></div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: flex-start;">
                        <span style="font-size: 1.3rem;">🤲</span>
                        <div><strong>Brazos a los lados, palmas hacia adelante</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Extremidades superiores extendidas, con supinación (palmas en supino)</p></div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; gap: 0.75rem; align-items: flex-start;">
                        <span style="font-size: 1.3rem;">🦶</span>
                        <div><strong>Pies juntos y paralelos</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Extremidades inferiores unidas, dedos apuntando hacia adelante</p></div>
                    </div>
                </div>

                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.25rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">¿Por qué es importante?</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Permite <strong>comunicación precisa entre profesionales de salud</strong> en todo el mundo. Sin esta referencia, decir "arriba" o "abajo" sería ambiguo dependiendo de cómo esté el paciente acostado, de pie o en cirugía.</p>
                </div>

                <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: #fb923c; margin: 0 0 0.5rem;">Posiciones derivadas</h4>
                    <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                        <div><strong style="color: #fb923c;">Decúbito supino:</strong> Acostado boca arriba (de espaldas)</div>
                        <div><strong style="color: #fb923c;">Decúbito prono:</strong> Acostado boca abajo</div>
                        <div><strong style="color: #fb923c;">Decúbito lateral:</strong> Acostado sobre un costado (derecho o izquierdo)</div>
                        <div><strong style="color: #fb923c;">Sedestación:</strong> Sentado</div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 2: PLANOS ANATÓMICOS
        // ─────────────────────────────────────────
        {
            id: 'planos-anatomicos',
            titulo: 'Planos Anatómicos',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">PLANOS ANATÓMICOS</h4>
                    <p style="margin: 0;">Superficies imaginarias que cortan el cuerpo para describir la ubicación y relación de estructuras. Se describen siempre asumiendo la <strong>posición anatómica estándar</strong>.</p>
                </div>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <div style="background: #3b82f6; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;">⬅️</div>
                            <h4 style="color: #3b82f6; margin: 0;">Plano Sagital (Mediano)</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">Divide el cuerpo en mitades <strong>derecha</strong> e <strong>izquierda</strong>. Corre de adelante hacia atrás verticalmente.</p>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">• <strong>Plano sagital medio:</strong> divide en dos mitades exactamente simétricas<br>• <strong>Planos parasagitales:</strong> paralelos al medio, no en el centro<br>• Eje: anteroposterior (de adelante hacia atrás)</p>
                    </div>

                    <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <div style="background: #10b981; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;">↕️</div>
                            <h4 style="color: #10b981; margin: 0;">Plano Coronal (Frontal)</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">Divide el cuerpo en parte <strong>anterior</strong> (ventral/frente) y <strong>posterior</strong> (dorsal/espalda). Corre de lado a lado verticalmente.</p>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">• También llamado plano frontal<br>• Paralelo a la frente (corona)<br>• Eje: mediolateral (de un lado al otro)</p>
                    </div>

                    <div style="background: rgba(251,146,60,0.1); border: 1px solid rgba(251,146,60,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <div style="background: #fb923c; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;">➖</div>
                            <h4 style="color: #fb923c; margin: 0;">Plano Transversal (Horizontal)</h4>
                        </div>
                        <p style="margin: 0 0 0.5rem;">Divide el cuerpo en parte <strong>superior</strong> (craneal/arriba) e <strong>inferior</strong> (caudal/abajo). Corre horizontalmente.</p>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">• También llamado plano axial u horizontal<br>• Es el plano que usan las tomografías (TC) y resonancias (RM)<br>• Eje: longitudinal (de arriba hacia abajo)</p>
                    </div>

                    <div style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.4); border-radius: 12px; padding: 1.25rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <div style="background: #8b5cf6; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;">🔀</div>
                            <h4 style="color: #8b5cf6; margin: 0;">Plano Oblicuo</h4>
                        </div>
                        <p style="margin: 0;">Cualquier plano que NO sea paralelo a los tres planos principales. Se usa en estudios de imagen cuando la estructura no está alineada con los planos estándar.</p>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Mnemotecnia:</strong> SCT → Sagital (D/I) · Coronal (A/P) · Transversal (Sup/Inf)</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 3: EJES ANATÓMICOS
        // ─────────────────────────────────────────
        {
            id: 'ejes-anatomicos',
            titulo: 'Ejes Anatómicos y Movimientos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">EJES ANATÓMICOS</h4>
                    <p style="margin: 0;">Líneas imaginarias perpendiculares a los planos, alrededor de las cuales ocurren los movimientos articulares. Cada eje es perpendicular a su plano correspondiente.</p>
                </div>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">Eje Longitudinal (Vertical)</h4>
                        <p style="margin: 0 0 0.5rem;">Corre de arriba hacia abajo. Perpendicular al plano transversal.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">Movimiento: <strong>rotación</strong> (girar la cabeza, rotación interna/externa del brazo)</p>
                    </div>
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #10b981; margin: 0 0 0.5rem;">Eje Anteroposterior (Sagital)</h4>
                        <p style="margin: 0 0 0.5rem;">Corre de adelante hacia atrás. Perpendicular al plano coronal.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">Movimiento: <strong>abducción / aducción</strong> (separar/juntar el brazo del cuerpo)</p>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.25rem; border-radius: 8px;">
                        <h4 style="color: #fb923c; margin: 0 0 0.5rem;">Eje Mediolateral (Transversal)</h4>
                        <p style="margin: 0 0 0.5rem;">Corre de un lado al otro. Perpendicular al plano sagital.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">Movimiento: <strong>flexión / extensión</strong> (doblar/extender el codo, rodilla)</p>
                    </div>
                </div>

                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Movimientos Articulares Básicos</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Flexión</strong><br>
                        <span style="color: #94a3b8;">Disminuye el ángulo articular</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Extensión</strong><br>
                        <span style="color: #94a3b8;">Aumenta el ángulo articular</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Abducción</strong><br>
                        <span style="color: #94a3b8;">Se aleja de la línea media</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Aducción</strong><br>
                        <span style="color: #94a3b8;">Se acerca a la línea media</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Rotación</strong><br>
                        <span style="color: #94a3b8;">Gira sobre su propio eje</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Circunducción</strong><br>
                        <span style="color: #94a3b8;">Combinación de los 4 movimientos anteriores</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Pronación</strong><br>
                        <span style="color: #94a3b8;">Girar el antebrazo, palma hacia abajo</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">
                        <strong style="color: #a78bfa;">Supinación</strong><br>
                        <span style="color: #94a3b8;">Girar el antebrazo, palma hacia arriba</span>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 4: TÉRMINOS DIRECCIONALES
        // ─────────────────────────────────────────
        {
            id: 'terminos-direccionales',
            titulo: 'Términos de Posición: Direccionales',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">TÉRMINOS DE POSICIÓN DIRECCIONALES</h4>
                    <p style="margin: 0;">Describen la ubicación <strong>relativa</strong> de una estructura respecto a otra. Siempre se usan en pares opuestos.</p>
                </div>

                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(59,130,246,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #3b82f6; font-size: 0.85rem;">EJE SUPERIOR / INFERIOR</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Superior (Craneal / Cefálico)</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hacia la cabeza / arriba.<br><em>El corazón es superior al estómago.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Inferior (Caudal)</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hacia los pies / abajo.<br><em>El estómago es inferior al corazón.</em></p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(16,185,129,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #10b981; font-size: 0.85rem;">EJE ANTERIOR / POSTERIOR</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Anterior (Ventral)</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hacia el frente del cuerpo.<br><em>El esternón es anterior a la columna.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Posterior (Dorsal)</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hacia la espalda.<br><em>La columna es posterior al esternón.</em></p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(251,146,60,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #fb923c; font-size: 0.85rem;">EJE MEDIAL / LATERAL</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Medial</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hacia la línea media del cuerpo.<br><em>La nariz es medial a los ojos.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Lateral</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Alejado de la línea media.<br><em>El pulgar es lateral al meñique.</em></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <p style="margin: 0; color: #a78bfa; font-size: 0.9rem;">💡 <strong>Tip:</strong> Estos términos son RELATIVOS. El corazón es inferior al cuello pero superior al estómago — todo depende de qué estructura se compara.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 5: TÉRMINOS DE PROXIMIDAD
        // ─────────────────────────────────────────
        {
            id: 'terminos-proximidad',
            titulo: 'Términos de Posición: Proximidad',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">TÉRMINOS DE PROXIMIDAD Y PROFUNDIDAD</h4>
                    <p style="margin: 0;">Describen la distancia de una estructura respecto al punto de unión con el tronco o respecto a la superficie corporal.</p>
                </div>

                <div style="display: grid; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(139,92,246,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #8b5cf6; font-size: 0.85rem;">PROXIMAL / DISTAL — Distancia al tronco</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Proximal</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Cerca del punto de unión con el tronco.<br><em>El hombro es proximal al codo.<br>El codo es proximal a la muñeca.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Distal</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Lejos del punto de unión.<br><em>La muñeca es distal al codo.<br>Los dedos son distales a la muñeca.</em></p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(59,130,246,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #3b82f6; font-size: 0.85rem;">SUPERFICIAL / PROFUNDO — Distancia a la superficie</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Superficial</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Cerca de la superficie del cuerpo.<br><em>La piel es superficial al músculo.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Profundo</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Lejos de la superficie.<br><em>El hueso es profundo al músculo.</em></p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(16,185,129,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #10b981; font-size: 0.85rem;">IPSILATERAL / CONTRALATERAL — Lado del cuerpo</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Ipsilateral</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Del <strong>mismo lado</strong> del cuerpo.<br><em>El brazo derecho es ipsilateral a la pierna derecha.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Contralateral</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Del <strong>lado opuesto</strong>.<br><em>El brazo derecho es contralateral al brazo izquierdo.</em></p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(30,41,59,0.8); border-radius: 12px; overflow: hidden;">
                        <div style="background: rgba(251,146,60,0.2); padding: 0.6rem 1rem; font-weight: 700; color: #fb923c; font-size: 0.85rem;">INTERNO / EXTERNO — Cavidades</div>
                        <div style="padding: 0.85rem 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div>
                                <strong style="color: #10b981;">Interno</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Dentro de una cavidad.<br><em>El corazón está interno a la caja torácica.</em></p>
                            </div>
                            <div>
                                <strong style="color: #ef4444;">Externo</strong>
                                <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Fuera de una cavidad.<br><em>Los músculos intercostales son externos al pulmón.</em></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>Proximal/Distal</strong> se usa principalmente para extremidades. <strong>Superficial/Profundo</strong> para capas de tejido.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 6: CAVIDADES CORPORALES
        // ─────────────────────────────────────────
        {
            id: 'cavidades-corporales',
            titulo: 'Cavidades Corporales',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">CAVIDADES CORPORALES</h4>
                    <p style="margin: 0;">Espacios internos del cuerpo que contienen y protegen los órganos vitales. Se dividen en dos cavidades principales: <strong>dorsal</strong> y <strong>ventral</strong>.</p>
                </div>

                <h3 style="color: #3b82f6; margin-bottom: 0.75rem;">Cavidad Dorsal (Posterior)</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1rem; border-radius: 8px;">
                        <strong>Cavidad Craneal</strong>
                        <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Formada por el cráneo. Contiene el <strong>encéfalo</strong> (cerebro, cerebelo y tallo cerebral).</p>
                    </div>
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1rem; border-radius: 8px;">
                        <strong>Cavidad Vertebral (Espinal)</strong>
                        <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Formada por las vértebras. Contiene la <strong>médula espinal</strong> y las raíces nerviosas.</p>
                    </div>
                </div>

                <h3 style="color: #10b981; margin-bottom: 0.75rem;">Cavidad Ventral (Anterior)</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
                        <strong>Cavidad Torácica</strong>
                        <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Delimitada por la caja torácica y el diafragma. Contiene:</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-top: 0.5rem; font-size: 0.85rem;">
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">❤️ Corazón (pericardio)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🫁 Pulmones (pleura)</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🔗 Esófago</div>
                            <div style="background: rgba(16,185,129,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">🫀 Tráquea y bronquios</div>
                        </div>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0.5rem 0 0;">El <strong>mediastino</strong> es el espacio central entre los dos pulmones.</p>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1rem; border-radius: 8px;">
                        <strong>Cavidad Abdominopélvica</strong>
                        <p style="margin: 0.3rem 0 0; color: #94a3b8; font-size: 0.9rem;">Se divide en abdominal (arriba) y pélvica (abajo), separadas por el estrecho superior de la pelvis.</p>
                        <div style="margin-top: 0.75rem;">
                            <p style="color: #fb923c; font-size: 0.9rem; margin: 0 0 0.4rem;"><strong>Abdominal:</strong></p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.85rem; margin-bottom: 0.75rem;">
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Estómago</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Hígado y vesícula</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Intestinos</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Riñones y páncreas</div>
                            </div>
                            <p style="color: #fb923c; font-size: 0.9rem; margin: 0 0 0.4rem;"><strong>Pélvica:</strong></p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.85rem;">
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Vejiga urinaria</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Órganos reproductores</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Recto y sigma</div>
                                <div style="background: rgba(251,146,60,0.15); padding: 0.4rem 0.6rem; border-radius: 6px;">Útero / Próstata</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #eab308; margin: 0 0 0.5rem;">Membranas de las Cavidades</h4>
                    <div style="display: grid; gap: 0.4rem; font-size: 0.9rem;">
                        <div>🫁 <strong>Pleura:</strong> recubre los pulmones y la cavidad torácica</div>
                        <div>❤️ <strong>Pericardio:</strong> rodea al corazón</div>
                        <div>🫃 <strong>Peritoneo:</strong> reviste la cavidad abdominal y los órganos abdominales</div>
                        <div>🧠 <strong>Meninges:</strong> recubren el encéfalo y la médula espinal</div>
                    </div>
                </div>

                <div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-weight: 600;">¡Has completado el módulo de Planimetría Anatómica! 🎉<br>Realiza la evaluación para consolidar tu aprendizaje.</p>
                </div>
            `
        }

    ]
};

console.log("✅ Módulo Planimetría cargado -", MODULO_PLANIMETRIA.lecciones.length, "lecciones");
