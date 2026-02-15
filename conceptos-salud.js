// ============================================
// MÓDULO: CONCEPTOS FUNDAMENTALES DE SALUD
// Contenido basado en Tablas de Estudio UNX
// ============================================

const MODULO_CONCEPTOS_SALUD = {
    id: 'conceptos-salud',
    titulo: 'Conceptos Fundamentales de Salud',
    descripcion: 'Salud, enfermedad, tríada ecológica e historia natural',
    icono: '🏥',
    progreso: 0,
    lecciones: [

        // ─────────────────────────────────────────
        // LECCIÓN 1: SALUD Y ENFERMEDAD
        // ─────────────────────────────────────────
        {
            id: 'salud-enfermedad',
            titulo: 'Concepto de Salud y Enfermedad',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">SALUD</h4>
                    <p style="margin: 0;">Estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.</p>
                </div>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">ENFERMEDAD</h4>
                    <p style="margin: 0;">Alteración o desviación del estado fisiológico en una o varias partes del cuerpo, por causas en general conocidas, manifestada por síntomas y signos característicos, y cuya evolución es más o menos previsible.</p>
                </div>
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Modelos del Proceso Salud/Enfermedad</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Mágico Religioso</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de fuerzas divinas o espíritus (benignos y malignos).</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Sanitarista</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de las condiciones medioambientales (salubres e insalubres).</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Social</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de las condiciones sociales (estilo de vida, cultura, economía).</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Unicausal</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de un solo agente o factor causal y la respuesta del individuo.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Multicausal</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de dos o más factores o agentes causales. Además intervienen factores del huésped y ambiente.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Epidemiológico</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de una red de causalidad donde se identifican factores de riesgo aunados al modelo multicausal.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Histórico Social</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende del contexto histórico, cultura, nivel socioeconómico y ambiente social en el que vive el individuo.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Geográfico</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad depende de factores patológicos y factores propios del ambiente geográfico (factores geógenos).</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Modelo Económico</strong>
                        <p style="margin: 0.4rem 0 0; color: #cbd5e1; font-size: 0.95rem;">El proceso salud/enfermedad es visto como un producto de inversión y consumo.</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 2: HOMEOSTASIS
        // ─────────────────────────────────────────
        {
            id: 'homeostasis',
            titulo: 'Homeostasis y Retroalimentación',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">HOMEOSTASIS</h4>
                    <p style="margin: 0;">Es la condición de equilibrio o balance en el medio interno gracias a la continua interrelación de los múltiples procesos de regulación corporal.</p>
                </div>
                <h3 style="color: #8b5cf6; margin: 1.5rem 0 1rem;">Tipos de Retroalimentación</h3>
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">Retroalimentación Negativa</h4>
                    <p style="margin: 0;">Mecanismo que mantiene una variable cerca de su punto de equilibrio, anulando o inhibiendo una respuesta inicial.</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.75rem 0 0;">Ejemplo: glucosa sube → insulina baja la glucosa → se inhibe la insulina.</p>
                </div>
                <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.5rem; border-radius: 8px;">
                    <h4 style="color: #fb923c; margin: 0 0 0.5rem;">Retroalimentación Positiva</h4>
                    <p style="margin: 0;">Autoamplificación de una señal en la que un cambio fisiológico conduce a otro aún mayor en la misma dirección.</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.75rem 0 0;">Ejemplo: contracciones del parto → más oxitocina → contracciones más fuertes → hasta el nacimiento.</p>
                </div>
                <div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 1rem; margin-top: 1.5rem;">
                    <p style="margin: 0; font-size: 0.9rem; color: #a78bfa;">💡 Negativa = mantiene equilibrio | Positiva = amplifica el proceso</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 3: TRÍADA ECOLÓGICA INTRO
        // ─────────────────────────────────────────
        {
            id: 'triada-ecologica-intro',
            titulo: 'Tríada Ecológica: Introducción',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Componentes de la Tríada Ecológica</h3>
                <p style="margin-bottom: 1.5rem;">La tríada ecológica está formada por: <strong>Agente, Ambiente y Huésped.</strong></p>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">AGENTE</h4>
                    <p style="margin: 0;">Factor biológico o no biológico cuya presencia, excesiva o relativa ausencia, es esencial para la ocurrencia de la enfermedad en el huésped.</p>
                </div>
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">HUÉSPED</h4>
                    <p style="margin: 0;">Ser vivo susceptible que permite el alojamiento y subsistencia de un agente causal para el desarrollo de la enfermedad.</p>
                </div>
                <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">AMBIENTE</h4>
                    <p style="margin: 0;">Conjunto de factores en los que interactúan el agente causal y el huésped. Involucra ambientes físicos, biológicos y sociales.</p>
                </div>
                <div style="background: rgba(139,92,246,0.1); border-radius: 12px; padding: 1.5rem; text-align: center;">
                    <div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <div style="text-align: center;"><div style="font-size: 2rem;">🦠</div><div style="color: #ef4444; font-weight: 700;">AGENTE</div></div>
                        <div style="color: #8b5cf6; font-size: 1.5rem;">⟷</div>
                        <div style="text-align: center;"><div style="font-size: 2rem;">👤</div><div style="color: #10b981; font-weight: 700;">HUÉSPED</div></div>
                        <div style="color: #8b5cf6; font-size: 1.5rem;">⟷</div>
                        <div style="text-align: center;"><div style="font-size: 2rem;">🌍</div><div style="color: #3b82f6; font-weight: 700;">AMBIENTE</div></div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 4: TIPOS DE AGENTES
        // ─────────────────────────────────────────
        {
            id: 'triada-agentes',
            titulo: 'Tríada Ecológica: Tipos de Agentes',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <h3 style="color: #8b5cf6; margin-bottom: 1.5rem;">Clasificación de Agentes</h3>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">AGENTE BIOLÓGICO</h4>
                    <p style="margin: 0;">Agentes vivos. Participan hongos, parásitos, virus, bacterias y/o sus toxinas, involucrados en la génesis de las <strong>enfermedades transmisibles</strong>.</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">Ej: SARS-CoV-2, Mycobacterium tuberculosis, Candida, Plasmodium</p>
                </div>
                <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #fb923c; margin: 0 0 0.5rem;">AGENTE NO BIOLÓGICO</h4>
                    <p style="margin: 0;">Agentes inertes. Participan agentes químicos y físicos, involucrados en la génesis de las <strong>enfermedades no transmisibles</strong>.</p>
                </div>
                <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">AGENTES QUÍMICOS</h4>
                    <p style="margin: 0;">Pesticidas, fármacos, ácidos, hidrocarburos, aditivos, metales pesados, drogas, etc.</p>
                </div>
                <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">AGENTES FÍSICOS</h4>
                    <p style="margin: 0;">Temperatura, presiones, radiación, fuerza mecánica, cualquier fuente de energía, etc.</p>
                </div>
                <div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 1rem; margin-top: 1.5rem;">
                    <p style="margin: 0; font-size: 0.9rem; color: #a78bfa;">💡 Biológico = transmisible | No biológico (Químico/Físico) = no transmisible</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 5: CADENA EPIDEMIOLÓGICA
        // ─────────────────────────────────────────
        {
            id: 'cadena-epidemiologica',
            titulo: 'Cadena Epidemiológica',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Eslabones de la Cadena Epidemiológica</h3>
                <p style="margin-bottom: 1.5rem; color: #94a3b8;">Romper cualquier eslabón = prevenir la transmisión</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="background: rgba(239,68,68,0.15); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #ef4444;">1. Agente Causal</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Capacidad de un microorganismo de generar un proceso patológico en el huésped.</p>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(251,146,60,0.15); border-left: 4px solid #fb923c; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #fb923c;">2. Reservorio</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Lugar donde vive y se multiplica el agente. Puede ser humano, animal o ambiental.</p>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(234,179,8,0.15); border-left: 4px solid #eab308; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #eab308;">3. Vía de Salida del Reservorio</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Capacidad de un antígeno de generar una respuesta inmune en el organismo del huésped.</p>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(16,185,129,0.15); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #10b981;">4. Mecanismo de Transmisión</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Forma en que el agente llega al nuevo huésped. Directo (contacto) o indirecto (vectores, agua, aire).</p>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(59,130,246,0.15); border-left: 4px solid #3b82f6; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #3b82f6;">5. Vía de Entrada al Huésped</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Alteración en la información genética de los seres vivos. En los microorganismos representa una evolución adaptativa aumentando su resistencia.</p>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1rem; border-radius: 8px;">
                        <strong style="color: #8b5cf6;">6. Huésped Susceptible</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Persona sin inmunidad que puede desarrollar la enfermedad.</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 6: HISTORIA NATURAL
        // ─────────────────────────────────────────
        {
            id: 'historia-natural-intro',
            titulo: 'Historia Natural de la Enfermedad',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">HISTORIA NATURAL DE LA ENFERMEDAD</h4>
                    <p style="margin: 0;">Curso de la enfermedad desde el inicio hasta su resolución, en ausencia de intervención médica.</p>
                </div>
                <h3 style="color: #8b5cf6; margin: 1.5rem 0 1rem;">Los 2 Períodos</h3>
                <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">PERÍODO PREPATOGÉNICO</h4>
                    <p style="margin: 0;">Periodo de riesgo que procede al inicio de la enfermedad. En él interactúan los factores de la tríada ecológica en total armonía, sin estímulo eficaz.</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">→ Antes de que empiece la enfermedad</p>
                </div>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">PERÍODO PATOGÉNICO</h4>
                    <p style="margin: 0;">Periodo en el que el agente causal logró realizar el estímulo específico en el huésped susceptible para generar la enfermedad.</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">→ Durante la enfermedad</p>
                </div>
                <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: #a78bfa; margin: 0 0 0.5rem;">ETAPAS DEL PERÍODO PATOGÉNICO</h4>
                    <p style="margin: 0;">1) Etapa subclínica (asintomática) · 2) Etapa clínica (sintomática)</p>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">Divididas por el <strong>horizonte clínico</strong>.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 7: HORIZONTE CLÍNICO Y RESOLUCIÓN
        // ─────────────────────────────────────────
        {
            id: 'etapas-horizonte',
            titulo: 'Horizonte Clínico, Etapas y Resolución',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(234,179,8,0.15); border-left: 4px solid #eab308; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #eab308; margin: 0 0 0.5rem;">HORIZONTE CLÍNICO</h4>
                    <p style="margin: 0;">Línea que marca el inicio de las manifestaciones evidentes de la enfermedad: signos (objetivos) y síntomas (subjetivos). Divide al periodo subclínico del clínico.</p>
                </div>
                <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">ETAPA SUBCLÍNICA</h4>
                    <p style="margin: 0;">Etapa en donde ya existen cambios bioquímicos, celulares y tisulares causados por la enfermedad, sin que haya presencia de signos y/o síntomas.</p>
                </div>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">ETAPA CLÍNICA</h4>
                    <p style="margin: 0;">Etapa en donde se presentan signos y síntomas prodrómicos y/o específicos causados por el desarrollo de la enfermedad.</p>
                </div>
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">CONVALECENCIA</h4>
                    <p style="margin: 0;">Fase que precede a la resolución. Se intenta recuperar la fuerza tras el paso de la enfermedad. Permite suponer la evolución de la resolución.</p>
                </div>
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">RESOLUCIÓN</h4>
                    <p style="margin: 0;">Fase en la cual culmina la historia natural. Puede terminar con:</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
                        <span style="background: rgba(16,185,129,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #10b981;">Cura total</span>
                        <span style="background: rgba(251,146,60,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #fb923c;">Estado crónico</span>
                        <span style="background: rgba(234,179,8,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #eab308;">Secuelas</span>
                        <span style="background: rgba(239,68,68,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #ef4444;">Muerte</span>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 8: NIVELES DE PREVENCIÓN
        // ─────────────────────────────────────────
        {
            id: 'niveles-prevencion',
            titulo: 'Niveles de Prevención',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <h3 style="color: #8b5cf6; margin-bottom: 0.5rem;">Niveles de Prevención</h3>
                <p style="margin-bottom: 1.5rem; color: #94a3b8;">1) Primaria · 2) Secundaria · 3) Terciaria</p>
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">PREVENCIÓN PRIMARIA</h4>
                    <p style="margin: 0;">Enfocada en el <strong>período prepatogénico</strong>. Se basa en el fomento de la salud y protección específica.</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
                        <span style="background: rgba(16,185,129,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Fomento de la salud</span>
                        <span style="background: rgba(16,185,129,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Protección específica</span>
                    </div>
                </div>
                <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #fb923c; margin: 0 0 0.5rem;">PREVENCIÓN SECUNDARIA</h4>
                    <p style="margin: 0;">Enfocada en el <strong>período patogénico</strong>. Se basa en el diagnóstico precoz y tratamiento inmediato, así como en la limitación del daño.</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
                        <span style="background: rgba(251,146,60,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Diagnóstico precoz</span>
                        <span style="background: rgba(251,146,60,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Tratamiento inmediato</span>
                        <span style="background: rgba(251,146,60,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Limitación del daño</span>
                    </div>
                </div>
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">PREVENCIÓN TERCIARIA</h4>
                    <p style="margin: 0;">Enfocada en el <strong>período patogénico</strong>. Se basa en la rehabilitación física, psicológica y social.</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
                        <span style="background: rgba(239,68,68,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Rehabilitación física</span>
                        <span style="background: rgba(239,68,68,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Rehabilitación psicológica</span>
                        <span style="background: rgba(239,68,68,0.2); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">Rehabilitación social</span>
                    </div>
                </div>
                <div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 1rem;">
                    <p style="margin: 0; font-size: 0.9rem; color: #a78bfa;">💡 Primaria = antes de enfermar | Secundaria = durante | Terciaria = rehabilitación</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 9: SIGNOS VITALES
        // ─────────────────────────────────────────
        {
            id: 'signos-vitales',
            titulo: 'Signos Vitales',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <h3 style="color: #8b5cf6; margin-bottom: 1.5rem;">Signos Vitales</h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #ef4444; margin: 0;">🌡️ Temperatura</h4>
                            <span style="background: rgba(239,68,68,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #ef4444;">36.5°C – 37.5°C</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">Fiebre: &gt;37.5°C | Hipotermia: &lt;35°C</p>
                    </div>
                    <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #fb923c; margin: 0;">❤️ Frecuencia Cardíaca</h4>
                            <span style="background: rgba(251,146,60,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #fb923c;">60–100 lpm</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">Taquicardia: &gt;100 lpm | Bradicardia: &lt;60 lpm</p>
                    </div>
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #3b82f6; margin: 0;">💨 Frec. Respiratoria</h4>
                            <span style="background: rgba(59,130,246,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #3b82f6;">12–20 rpm</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">Taquipnea: &gt;20 rpm | Bradipnea: &lt;12 rpm</p>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #8b5cf6; margin: 0;">🩸 Presión Arterial</h4>
                            <span style="background: rgba(139,92,246,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #8b5cf6;">120/80 mmHg</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">HTA: &ge;140/90 | Hipotensión: &lt;90/60 mmHg</p>
                    </div>
                    <div style="background: rgba(234,179,8,0.1); border-left: 4px solid #eab308; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #eab308; margin: 0;">🍬 Glucosa en sangre</h4>
                            <span style="background: rgba(234,179,8,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #eab308;">70–100 mg/dL</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">Hipoglucemia: &lt;70 mg/dL | Hiperglucemia: &gt;126 mg/dL (ayuno)</p>
                        <p style="margin: 0.4rem 0 0; font-size: 0.85rem; color: #64748b;">Se mide en ayuno. Valor &gt;200 mg/dL en cualquier momento = sospecha de diabetes.</p>
                    </div>
                    <div style="background: rgba(20,184,166,0.1); border-left: 4px solid #14b8a6; padding: 1.25rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <h4 style="color: #14b8a6; margin: 0;">💧 Saturación de Oxígeno (SpO₂)</h4>
                            <span style="background: rgba(20,184,166,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; color: #14b8a6;">95–100%</span>
                        </div>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #94a3b8;">Hipoxemia leve: 91–94% | Hipoxemia severa: &lt;90% (emergencia)</p>
                        <p style="margin: 0.4rem 0 0; font-size: 0.85rem; color: #64748b;">Se mide con oxímetro de pulso en el dedo. Refleja el % de hemoglobina saturada con O₂.</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 10: SIGNOS, SÍNTOMAS Y SÍNDROMES
        // ─────────────────────────────────────────
        {
            id: 'signos-sintomas',
            titulo: 'Signos, Síntomas y Síndromes',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">SIGNO</h4>
                        <p style="margin: 0;">Manifestación <strong>OBJETIVA</strong> de la enfermedad que puede ser observada y medida por el médico.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">Ej: fiebre, hipertensión, ictericia, cianosis, edema</p>
                    </div>
                    <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="color: #ef4444; margin: 0 0 0.5rem;">SÍNTOMA</h4>
                        <p style="margin: 0;">Manifestación <strong>SUBJETIVA</strong> que solo el paciente puede percibir y describir.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">Ej: dolor, náuseas, mareo, fatiga, comezón</p>
                    </div>
                    <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">SÍNDROME</h4>
                        <p style="margin: 0;">Conjunto de signos y síntomas que aparecen juntos y caracterizan una condición específica.</p>
                        <p style="color: #94a3b8; font-size: 0.9rem; margin: 0.5rem 0 0;">Ej: Síndrome metabólico, síndrome gripal</p>
                    </div>
                </div>
                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-weight: 600;">SIGNO = Lo ve el médico &nbsp;|&nbsp; SÍNTOMA = Lo siente el paciente</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 11: CADENA EPIDEMIOLÓGICA INTRO
        // ─────────────────────────────────────────
        {
            id: 'cadena-intro',
            titulo: 'Cadena Epidemiológica: Introducción',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">¿QUÉ ES LA CADENA EPIDEMIOLÓGICA?</h4>
                    <p style="margin: 0;">Secuencia de elementos necesarios para que una enfermedad infecciosa se transmita de una fuente a un huésped susceptible.</p>
                </div>
                <h3 style="color: #8b5cf6; margin: 1.5rem 0 1rem;">Los 6 eslabones</h3>
                <div style="display: grid; gap: 0.5rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #ef4444; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">1</span>
                        <span><strong>Agente causal</strong></span>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #fb923c; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">2</span>
                        <span><strong>Reservorio</strong></span>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #eab308; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">3</span>
                        <span><strong>Vía de salida del reservorio</strong></span>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #10b981; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">4</span>
                        <span><strong>Mecanismo de transmisión</strong></span>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #3b82f6; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">5</span>
                        <span><strong>Vía de entrada al huésped</strong></span>
                    </div>
                    <div style="text-align: center; color: #8b5cf6;">↓</div>
                    <div style="background: rgba(30,41,59,0.8); padding: 0.85rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                        <span style="background: #8b5cf6; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">6</span>
                        <span><strong>Huésped susceptible</strong></span>
                    </div>
                </div>
                <div style="background: rgba(16,185,129,0.1); border-radius: 8px; padding: 1rem; margin-top: 1.5rem;">
                    <p style="margin: 0; color: #10b981; font-size: 0.9rem;">💡 Romper cualquier eslabón interrumpe la transmisión de la enfermedad.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 12: CADENA - AGENTE Y RESERVORIO
        // ─────────────────────────────────────────
        {
            id: 'cadena-agente-reservorio',
            titulo: 'Cadena Epidemiológica: Agente y Reservorio',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">ESLABÓN 1 — AGENTE CAUSAL</h4>
                    <p style="margin: 0;">Capacidad de un microorganismo de generar un proceso patológico en el huésped.</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.75rem;">
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem; border-radius: 6px; font-size: 0.85rem;">🦠 Bacterias</div>
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem; border-radius: 6px; font-size: 0.85rem;">🔬 Virus</div>
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem; border-radius: 6px; font-size: 0.85rem;">🍄 Hongos</div>
                        <div style="background: rgba(239,68,68,0.15); padding: 0.5rem; border-radius: 6px; font-size: 0.85rem;">🪱 Parásitos</div>
                    </div>
                </div>
                <div style="background: rgba(251,146,60,0.1); border-left: 4px solid #fb923c; padding: 1.5rem; border-radius: 8px;">
                    <h4 style="color: #fb923c; margin: 0 0 0.75rem;">ESLABÓN 2 — RESERVORIO</h4>
                    <p style="margin: 0 0 1rem;">Lugar donde el agente vive, se reproduce y del que depende para sobrevivir.</p>
                    <div style="display: grid; gap: 0.5rem;">
                        <div style="background: rgba(251,146,60,0.15); padding: 0.75rem 1rem; border-radius: 8px;">
                            <strong>👥 Reservorio Humano</strong>
                            <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Personas enfermas o portadoras asintomáticas.<br><span style="color: #94a3b8;">Ej: tuberculosis, hepatitis, tifoidea</span></p>
                        </div>
                        <div style="background: rgba(251,146,60,0.15); padding: 0.75rem 1rem; border-radius: 8px;">
                            <strong>🐾 Reservorio Animal (Zoonosis)</strong>
                            <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Animales que albergan el agente y lo transmiten al humano.<br><span style="color: #94a3b8;">Ej: rabia (perros), leptospirosis (ratas)</span></p>
                        </div>
                        <div style="background: rgba(251,146,60,0.15); padding: 0.75rem 1rem; border-radius: 8px;">
                            <strong>🌱 Reservorio Ambiental</strong>
                            <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Suelo, agua, alimentos.<br><span style="color: #94a3b8;">Ej: tétanos (suelo), cólera (agua)</span></p>
                        </div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 13: CADENA - PUERTAS Y TRANSMISIÓN
        // ─────────────────────────────────────────
        {
            id: 'cadena-puertas-transmision',
            titulo: 'Cadena Epidemiológica: Puertas y Transmisión',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(234,179,8,0.1); border-left: 4px solid #eab308; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #eab308; margin: 0 0 0.75rem;">ESLABÓN 3 — VÍA DE SALIDA</h4>
                    <p style="margin: 0 0 0.75rem;">Vía por donde el agente abandona el reservorio:</p>
                    <div style="display: grid; gap: 0.4rem;">
                        <div style="background: rgba(234,179,8,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🫁 Respiratoria — tos, estornudos</div>
                        <div style="background: rgba(234,179,8,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🫃 Digestiva — heces, vómito</div>
                        <div style="background: rgba(234,179,8,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🩸 Sanguínea — sangre, picadura</div>
                        <div style="background: rgba(234,179,8,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🧬 Genitourinaria — secreciones</div>
                        <div style="background: rgba(234,179,8,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🤰 Transplacentaria — madre a hijo</div>
                    </div>
                </div>
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px;">
                    <h4 style="color: #10b981; margin: 0 0 0.75rem;">ESLABÓN 4 — MECANISMO DE TRANSMISIÓN</h4>
                    <div style="display: grid; gap: 0.75rem;">
                        <div style="background: rgba(16,185,129,0.15); padding: 0.75rem; border-radius: 8px;">
                            <strong>Transmisión Directa</strong>
                            <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Contacto físico inmediato persona a persona.<br><span style="color: #94a3b8;">Ej: ETS, gripe, varicela</span></p>
                        </div>
                        <div style="background: rgba(16,185,129,0.15); padding: 0.75rem; border-radius: 8px;">
                            <strong>Transmisión Indirecta</strong>
                            <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: #cbd5e1;">A través de vehículos intermedios:</p>
                            <ul style="margin: 0.25rem 0 0; padding-left: 1.25rem; font-size: 0.9rem; color: #94a3b8;">
                                <li>Agua/alimentos contaminados</li>
                                <li>Objetos (fómites)</li>
                                <li>Vectores (mosquitos, garrapatas)</li>
                                <li>Aire (aerosoles)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 14: CADENA - ENTRADA Y PREVENCIÓN
        // ─────────────────────────────────────────
        {
            id: 'cadena-entrada-prevencion',
            titulo: 'Cadena Epidemiológica: Entrada y Prevención',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.75rem;">ESLABÓN 5 — VÍA DE ENTRADA AL HUÉSPED</h4>
                    <p style="margin: 0 0 0.75rem;">Vía por donde el agente ingresa al nuevo huésped:</p>
                    <div style="display: grid; gap: 0.4rem;">
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🫁 Respiratoria — inhalación</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🥛 Digestiva — ingestión</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🩹 Piel / Mucosas — heridas, mordeduras</div>
                        <div style="background: rgba(59,130,246,0.15); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">🤰 Transplacentaria — durante embarazo</div>
                    </div>
                </div>
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">ESLABÓN 6 — HUÉSPED SUSCEPTIBLE</h4>
                    <p style="margin: 0;">Persona sin inmunidad suficiente para resistir al agente. Su susceptibilidad depende de: edad, estado inmune, genética, nutrición.</p>
                </div>
                <h4 style="color: #10b981; margin: 1.5rem 0 0.75rem;">Cómo Romper la Cadena</h4>
                <div style="display: grid; gap: 0.5rem;">
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">🧼 Lavado de manos — interrumpe transmisión</div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">💉 Vacunación — protege al huésped</div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">😷 Cubrebocas — bloquea vía respiratoria</div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">🏥 Aislamiento — elimina el reservorio</div>
                    <div style="background: rgba(16,185,129,0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem;">💊 Tratamiento — elimina el agente</div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 15: SIGNOS CLÍNICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'signos-clinicos',
            titulo: 'Signos Clínicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(59,130,246,0.15); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">SIGNO CLÍNICO</h4>
                    <p style="margin: 0;">Manifestación <strong>OBJETIVA</strong> de la enfermedad que puede ser observada, medida y verificada por el médico o personal de salud, independientemente de lo que refiera el paciente.</p>
                </div>
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Ejemplos de Signos</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <div><strong>Fiebre</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Temperatura corporal elevada</p></div>
                        <span style="color: #ef4444; font-weight: 600;">&gt;37.5°C</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <div><strong>Taquicardia</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Frecuencia cardíaca acelerada</p></div>
                        <span style="color: #fb923c; font-weight: 600;">&gt;100 lpm</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <div><strong>Hipertensión</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Presión arterial elevada</p></div>
                        <span style="color: #8b5cf6; font-weight: 600;">&ge;140/90</span>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Ictericia</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Coloración amarillenta de piel y mucosas (bilirrubina elevada)</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Cianosis</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Coloración azulada por falta de oxígeno</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Edema</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Hinchazón por acumulación de líquido en tejidos</p>
                    </div>
                </div>
                <div style="background: rgba(59,130,246,0.1); border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <p style="margin: 0; color: #3b82f6; font-size: 0.9rem;">💡 El signo lo <strong>observa y mide el médico</strong>. No depende de lo que dice el paciente.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 16: SÍNTOMAS CLÍNICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'sintomas-clinicos',
            titulo: 'Síntomas Clínicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(239,68,68,0.15); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">SÍNTOMA CLÍNICO</h4>
                    <p style="margin: 0;">Manifestación <strong>SUBJETIVA</strong> de la enfermedad que solo el paciente puede percibir y describir. No puede ser medida directamente por el médico.</p>
                </div>
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Ejemplos de Síntomas</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Dolor</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación desagradable que solo siente el paciente</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Náuseas</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación de malestar gástrico con ganas de vomitar</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Mareo / Vértigo</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación de inestabilidad o que todo gira</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Fatiga / Astenia</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación de cansancio extremo sin esfuerzo aparente</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Prurito (comezón)</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación de picazón en piel o mucosas</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Cefalea</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Dolor de cabeza de diferente tipo e intensidad</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Disnea</strong><p style="margin: 0.2rem 0 0; color: #94a3b8; font-size: 0.9rem;">Sensación subjetiva de dificultad para respirar</p>
                    </div>
                </div>
                <div style="background: rgba(239,68,68,0.1); border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <p style="margin: 0; color: #ef4444; font-size: 0.9rem;">💡 El síntoma lo <strong>refiere el paciente</strong>. El médico no puede medirlo directamente.</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 17: SÍNDROMES CLÍNICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'sindromes-clinicos',
            titulo: 'Síndromes Clínicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">SÍNDROME CLÍNICO</h4>
                    <p style="margin: 0;">Conjunto de <strong>signos y síntomas</strong> que aparecen juntos y caracterizan una condición o enfermedad determinada. Un síndrome NO es una enfermedad específica.</p>
                </div>
                <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Ejemplos de Síndromes</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Síndrome Gripal</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Signos: fiebre, congestión | Síntomas: dolor muscular, malestar general, cefalea</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Síndrome Metabólico</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Obesidad abdominal + HTA + hiperglucemia + dislipidemia. Aumenta riesgo cardiovascular.</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Síndrome de Cushing</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Exceso de cortisol: cara de luna llena, joroba de búfalo, estrías, hipertensión</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">Síndrome Nefrótico</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #cbd5e1;">Proteinuria masiva + edema + hipoalbuminemia + hiperlipidemia</p>
                    </div>
                </div>
                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; margin-top: 1rem; text-align: center;">
                    <p style="margin: 0; color: #eab308; font-weight: 600;">SIGNO (objetivo) + SÍNTOMA (subjetivo) = SÍNDROME</p>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 18: AGENTES BIOLÓGICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'agentes-biologicos',
            titulo: 'Agentes Biológicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(239,68,68,0.1); border-left: 4px solid #ef4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #ef4444; margin: 0 0 0.5rem;">AGENTES BIOLÓGICOS</h4>
                    <p style="margin: 0;">Agentes vivos involucrados en la génesis de las <strong>enfermedades transmisibles</strong>. Incluyen hongos, parásitos, virus, bacterias y/o sus toxinas.</p>
                </div>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">🦠 Bacterias</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Microorganismos procariotas unicelulares.</p>
                        <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: #64748b;">E. coli, Salmonella, Mycobacterium tuberculosis, Streptococcus</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">🔬 Virus</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Partículas infecciosas acelulares que necesitan un huésped para replicarse.</p>
                        <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: #64748b;">SARS-CoV-2, Influenza, VIH, Hepatitis A/B/C, Dengue</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">🍄 Hongos</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Organismos eucariotas que causan micosis.</p>
                        <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: #64748b;">Candida albicans, Aspergillus, Tinea (tiña)</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong style="color: #a78bfa;">🪱 Parásitos</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Organismos que viven a expensas de otro ser vivo.</p>
                        <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: #64748b;">Plasmodium (malaria), Giardia, Taenia, Entamoeba</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 19: AGENTES QUÍMICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'agentes-quimicos',
            titulo: 'Agentes Químicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(139,92,246,0.15); border-left: 4px solid #8b5cf6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.5rem;">AGENTES QUÍMICOS</h4>
                    <p style="margin: 0;">Sustancias inertes involucradas en enfermedades <strong>no transmisibles</strong>. Incluyen: pesticidas, fármacos, ácidos, hidrocarburos, aditivos, metales pesados, drogas, etc.</p>
                </div>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Metales Pesados</strong>
                        <div style="display: grid; gap: 0.25rem; margin-top: 0.5rem; font-size: 0.9rem; color: #94a3b8;">
                            <div>⚫ <strong>Plomo:</strong> daño neurológico, anemia (niños muy vulnerables)</div>
                            <div>⚫ <strong>Mercurio:</strong> daño al SNC, enfermedad de Minamata</div>
                            <div>⚫ <strong>Arsénico:</strong> cáncer, lesiones cutáneas</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Pesticidas e Insecticidas</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Organofosforados y carbamatos: inhiben la acetilcolinesterasa → neurotoxicidad, intoxicación aguda</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Gases Tóxicos</strong>
                        <div style="display: grid; gap: 0.25rem; margin-top: 0.5rem; font-size: 0.9rem; color: #94a3b8;">
                            <div>⚫ <strong>CO (monóxido):</strong> asfixia química, muerte</div>
                            <div>⚫ <strong>Benceno:</strong> leucemia, aplasia medular</div>
                            <div>⚫ <strong>Formaldehído:</strong> irritante, cancerígeno</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>Fármacos (iatrogénico)</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Medicamentos en dosis tóxicas o con efectos adversos: hepatotoxicidad, nefrotoxicidad</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 20: AGENTES FÍSICOS (separado)
        // ─────────────────────────────────────────
        {
            id: 'agentes-fisicos',
            titulo: 'Agentes Físicos',
            tiempo: '2 min',
            completada: false,
            contenido: `
                <div style="background: rgba(59,130,246,0.15); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #3b82f6; margin: 0 0 0.5rem;">AGENTES FÍSICOS</h4>
                    <p style="margin: 0;">Formas de energía o condiciones físicas del ambiente que pueden causar daño al organismo. Involucrados en enfermedades <strong>no transmisibles</strong>.</p>
                </div>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>☢️ Radiación</strong>
                        <div style="font-size: 0.9rem; color: #94a3b8; margin-top: 0.3rem;">
                            <div>• <strong>Ionizante</strong> (rayos X, gamma): mutaciones, cáncer, síndrome de radiación</div>
                            <div>• <strong>No ionizante</strong> (UV, microondas): quemaduras, cataratas, cáncer de piel</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>🌡️ Temperatura Extrema</strong>
                        <div style="font-size: 0.9rem; color: #94a3b8; margin-top: 0.3rem;">
                            <div>• <strong>Calor:</strong> golpe de calor, deshidratación, quemaduras</div>
                            <div>• <strong>Frío:</strong> hipotermia, congelación, pie de trinchera</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>🔊 Ruido</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Exposición crónica &gt;85 dB → sordera ocupacional (hipoacusia neurosensorial)</p>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>📊 Presión Atmosférica</strong>
                        <div style="font-size: 0.9rem; color: #94a3b8; margin-top: 0.3rem;">
                            <div>• <strong>Baja presión:</strong> mal de montaña (soroche)</div>
                            <div>• <strong>Alta presión:</strong> enfermedad por descompresión (buceo)</div>
                        </div>
                    </div>
                    <div style="background: rgba(30,41,59,0.8); padding: 1rem; border-radius: 8px;">
                        <strong>💥 Traumatismos Mecánicos</strong>
                        <p style="margin: 0.3rem 0 0; font-size: 0.9rem; color: #94a3b8;">Golpes, caídas, accidentes → fracturas, contusiones, heridas, TEC</p>
                    </div>
                </div>
            `
        },

        // ─────────────────────────────────────────
        // LECCIÓN 21: AGENTES NUTRICIONALES
        // ─────────────────────────────────────────
        {
            id: 'agentes-nutricionales',
            titulo: 'Agentes Nutricionales',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h4 style="color: #10b981; margin: 0 0 0.5rem;">AGENTES NUTRICIONALES</h4>
                    <p style="margin: 0;">Son <strong style="color: #10b981;">deficiencias o excesos alimentarios</strong> que alteran el proceso salud-enfermedad. Pueden ser tanto por carencia como por sobreconsumo de nutrientes esenciales.</p>
                </div>

                <h3 style="color: #ef4444; margin-bottom: 0.75rem;">Deficiencias Nutricionales</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.75rem;">
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Proteínas</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;"> Kwashiorkor</span> (edema, piel descamada) y
                        <span style="color: #ef4444;"> Marasmo</span> (emaciación severa)
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Vitamina A</strong> <span style="color: #94a3b8;">→</span>
                        Ceguera nocturna, xeroftalmia
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Vitamina C</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Escorbuto</span> (sangrado de encías, heridas que no cicatrizan)
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Vitamina D</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Raquitismo</span> (niños), <span style="color: #ef4444;">osteomalacia</span> (adultos)
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Vitamina B12</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Anemia perniciosa</span>, daño neurológico
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Hierro</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Anemia ferropénica</span> (la más común en el mundo)
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Yodo</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Bocio</span>, cretinismo (en gestación), hipotiroidismo
                    </div>
                    <div style="background: rgba(239,68,68,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Ácido Fólico</strong> <span style="color: #94a3b8;">→</span>
                        <span style="color: #ef4444;">Anemia megaloblástica</span>, defectos del tubo neural (embarazo)
                    </div>
                </div>

                <h3 style="color: #fb923c; margin-bottom: 0.75rem;">Excesos Nutricionales</h3>
                <div style="display: grid; gap: 0.6rem; margin-bottom: 1.75rem;">
                    <div style="background: rgba(251,146,60,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Calorías</strong> <span style="color: #94a3b8;">→</span>
                        Obesidad, diabetes tipo 2, enfermedades cardiovasculares
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Sodio</strong> <span style="color: #94a3b8;">→</span>
                        Hipertensión arterial
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Grasas saturadas</strong> <span style="color: #94a3b8;">→</span>
                        Aterosclerosis, infarto, EVC
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Azúcares simples</strong> <span style="color: #94a3b8;">→</span>
                        Caries, diabetes tipo 2
                    </div>
                    <div style="background: rgba(251,146,60,0.1); padding: 0.85rem 1rem; border-radius: 8px;">
                        <strong>Purinas</strong> <span style="color: #94a3b8;">→</span>
                        Gota (hiperuricemia)
                    </div>
                </div>

                <div style="background: rgba(139,92,246,0.1); border-left: 4px solid #8b5cf6; padding: 1.25rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: #8b5cf6; margin: 0 0 0.75rem;">Prevención</h4>
                    <div style="display: grid; gap: 0.4rem; font-size: 0.95rem;">
                        <div>✅ Dieta balanceada y variada</div>
                        <div>✅ Fortificación de alimentos (sal yodada, harina con ácido fólico)</div>
                        <div>✅ Suplementación en grupos vulnerables (hierro en embarazo)</div>
                        <div>✅ Educación nutricional a la población</div>
                        <div>✅ Lactancia materna exclusiva los primeros 6 meses</div>
                    </div>
                </div>

                <div style="background: rgba(234,179,8,0.1); border-radius: 8px; padding: 1rem; text-align: center; margin-top: 1rem;">
                    <p style="margin: 0; color: #eab308; font-size: 0.9rem;">💡 <strong>¡Has completado el módulo! Realiza la evaluación para consolidar lo aprendido.</strong></p>
                </div>
            `
        }

    ]
};

console.log("✅ Módulo Conceptos de Salud cargado -", MODULO_CONCEPTOS_SALUD.lecciones.length, "lecciones");
