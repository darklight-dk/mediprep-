// ============================================
// EVALUACIÓN: CONCEPTOS FUNDAMENTALES DE SALUD
// 60 preguntas — basadas en conceptos-salud.js
// Temas: Salud/Enfermedad, Modelos, Homeostasis,
//        Tríada Ecológica, Cadena Epidemiológica,
//        Historia Natural, Niveles de Prevención,
//        Signos Vitales, Signos/Síntomas/Síndromes,
//        Agentes (Biológico/Químico/Físico/Nutricional)
// ============================================

const EVALUACION_CONCEPTOS_SALUD = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — SALUD Y ENFERMEDAD (8 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Según la OMS, la salud se define como:",
        opciones: [
            "Estado de completo bienestar físico, mental y social",
            "Ausencia de enfermedades o afecciones",
            "Equilibrio entre el cuerpo y el ambiente"
        ],
        correcta: 0,
        explicacion: "La OMS define salud como 'estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades'."
    },
    {
        pregunta: "La enfermedad se define como:",
        opciones: [
            "Ausencia de bienestar social",
            "Alteración del estado fisiológico con síntomas y signos característicos y evolución previsible",
            "Desequilibrio entre el agente y el huésped"
        ],
        correcta: 1,
        explicacion: "Enfermedad = alteración o desviación del estado fisiológico en una o varias partes del cuerpo, con causas conocidas, síntomas/signos y evolución previsible."
    },
    {
        pregunta: "El modelo que relaciona el proceso salud/enfermedad con fuerzas divinas o espíritus es:",
        opciones: [
            "Modelo Sanitarista",
            "Modelo Social",
            "Modelo Mágico Religioso"
        ],
        correcta: 2,
        explicacion: "El modelo mágico religioso atribuye el proceso salud/enfermedad a fuerzas divinas o espíritus benignos y malignos."
    },
    {
        pregunta: "El modelo que considera que el proceso salud/enfermedad depende de las condiciones medioambientales (salubres e insalubres) es:",
        opciones: [
            "Modelo Sanitarista",
            "Modelo Unicausal",
            "Modelo Geográfico"
        ],
        correcta: 0,
        explicacion: "El modelo sanitarista atribuye el proceso salud/enfermedad a las condiciones medioambientales, salubres e insalubres."
    },
    {
        pregunta: "El modelo que explica el proceso salud/enfermedad mediante una red de causalidad con factores de riesgo es:",
        opciones: [
            "Modelo Multicausal",
            "Modelo Epidemiológico",
            "Modelo Histórico Social"
        ],
        correcta: 1,
        explicacion: "El modelo epidemiológico usa una red de causalidad donde se identifican factores de riesgo, aunados al modelo multicausal."
    },
    {
        pregunta: "El modelo unicausal establece que el proceso salud/enfermedad depende de:",
        opciones: [
            "El contexto histórico y cultural del individuo",
            "Dos o más factores causales simultáneos",
            "Un solo agente o factor causal y la respuesta del individuo"
        ],
        correcta: 2,
        explicacion: "El modelo unicausal = un solo agente causal + respuesta del individuo. Diferente al multicausal que requiere 2 o más factores."
    },
    {
        pregunta: "El modelo que ve el proceso salud/enfermedad como un producto de inversión y consumo es:",
        opciones: [
            "Modelo Económico",
            "Modelo Social",
            "Modelo Geográfico"
        ],
        correcta: 0,
        explicacion: "El modelo económico entiende el proceso salud/enfermedad como un producto de inversión y consumo."
    },
    {
        pregunta: "¿Qué modelo considera el contexto histórico, cultura, nivel socioeconómico y ambiente social?",
        opciones: [
            "Modelo Epidemiológico",
            "Modelo Histórico Social",
            "Modelo Multicausal"
        ],
        correcta: 1,
        explicacion: "El modelo histórico social integra el contexto histórico, cultura, nivel socioeconómico y ambiente social del individuo."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — HOMEOSTASIS (5 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La homeostasis se define como:",
        opciones: [
            "La capacidad del cuerpo de eliminar agentes infecciosos",
            "El proceso de adaptación del huésped al ambiente",
            "Condición de equilibrio en el medio interno por interrelación de procesos de regulación corporal"
        ],
        correcta: 2,
        explicacion: "Homeostasis = condición de equilibrio o balance en el medio interno gracias a la continua interrelación de los múltiples procesos de regulación corporal."
    },
    {
        pregunta: "La retroalimentación negativa:",
        opciones: [
            "Mantiene una variable cerca de su punto de equilibrio, anulando o inhibiendo la respuesta inicial",
            "Amplifica una señal fisiológica en la misma dirección",
            "Genera una respuesta inmune ante un antígeno"
        ],
        correcta: 0,
        explicacion: "Retroalimentación negativa = mecanismo que INHIBE o ANULA la respuesta inicial para mantener el equilibrio."
    },
    {
        pregunta: "Un ejemplo de retroalimentación NEGATIVA es:",
        opciones: [
            "Las contracciones del parto que aumentan la oxitocina",
            "La glucosa elevada que estimula insulina y esta baja la glucosa",
            "La coagulación sanguínea en cadena"
        ],
        correcta: 1,
        explicacion: "Glucosa sube → insulina actúa → glucosa baja → se inhibe insulina. Es retroalimentación negativa porque regresa al equilibrio."
    },
    {
        pregunta: "La retroalimentación positiva se caracteriza por:",
        opciones: [
            "Inhibir una respuesta para volver al equilibrio",
            "Activar el sistema inmune ante infecciones",
            "Autoamplificación: un cambio fisiológico conduce a otro mayor en la misma dirección"
        ],
        correcta: 2,
        explicacion: "Retroalimentación positiva = autoamplificación de una señal donde el cambio conduce a otro aún mayor en la misma dirección."
    },
    {
        pregunta: "Las contracciones del parto que incrementan la liberación de oxitocina son un ejemplo de:",
        opciones: [
            "Retroalimentación positiva",
            "Homeostasis",
            "Retroalimentación negativa"
        ],
        correcta: 0,
        explicacion: "Las contracciones activan más oxitocina → más contracciones → hasta el parto. Esto es retroalimentación positiva (se amplifica hasta el evento final)."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — TRÍADA ECOLÓGICA (8 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Los componentes de la tríada ecológica son:",
        opciones: [
            "Agente, Reservorio y Huésped",
            "Agente, Huésped y Ambiente",
            "Bacteria, Virus y Hongo"
        ],
        correcta: 1,
        explicacion: "La tríada ecológica = AGENTE + HUÉSPED + AMBIENTE. Estos tres elementos interactúan para determinar la presencia o ausencia de enfermedad."
    },
    {
        pregunta: "El AGENTE en la tríada ecológica se define como:",
        opciones: [
            "Ser vivo susceptible que aloja al microorganismo",
            "Conjunto de factores donde interactúan agente y huésped",
            "Factor biológico o no biológico cuya presencia/ausencia es esencial para la enfermedad en el huésped"
        ],
        correcta: 2,
        explicacion: "Agente = factor biológico o no biológico cuya presencia, excesiva o relativa ausencia, es esencial para la ocurrencia de la enfermedad en el huésped."
    },
    {
        pregunta: "El HUÉSPED en la tríada ecológica es:",
        opciones: [
            "Ser vivo susceptible que permite el alojamiento y subsistencia del agente causal",
            "El lugar donde vive y se reproduce el microorganismo",
            "El conjunto de factores del medio ambiente"
        ],
        correcta: 0,
        explicacion: "Huésped = ser vivo susceptible que permite el alojamiento y subsistencia de un agente causal para el desarrollo de la enfermedad."
    },
    {
        pregunta: "Los agentes biológicos se caracterizan por:",
        opciones: [
            "Ser inertes e involucrados en enfermedades no transmisibles",
            "Ser agentes vivos: hongos, parásitos, virus y bacterias involucrados en enfermedades transmisibles",
            "Incluir pesticidas, fármacos y metales pesados"
        ],
        correcta: 1,
        explicacion: "Agentes biológicos = AGENTES VIVOS (hongos, parásitos, virus, bacterias y sus toxinas) → enfermedades TRANSMISIBLES."
    },
    {
        pregunta: "Los agentes NO biológicos generan:",
        opciones: [
            "Enfermedades transmisibles como la tuberculosis",
            "Infecciones parasitarias y micoticas",
            "Enfermedades no transmisibles, e incluyen agentes químicos y físicos"
        ],
        correcta: 2,
        explicacion: "Agentes no biológicos = agentes INERTES (químicos y físicos) → enfermedades NO TRANSMISIBLES."
    },
    {
        pregunta: "¿Cuáles son ejemplos de AGENTES QUÍMICOS?",
        opciones: [
            "Pesticidas, fármacos, ácidos, metales pesados y drogas",
            "Virus, bacterias y hongos",
            "Temperatura, presiones y radiación"
        ],
        correcta: 0,
        explicacion: "Agentes químicos = pesticidas, fármacos, ácidos, hidrocarburos, aditivos, metales pesados, drogas, etc."
    },
    {
        pregunta: "¿Cuáles son ejemplos de AGENTES FÍSICOS?",
        opciones: [
            "Pesticidas y metales pesados",
            "Temperatura, presiones, radiación y fuerza mecánica",
            "Bacterias y parásitos"
        ],
        correcta: 1,
        explicacion: "Agentes físicos = temperatura, presiones, radiación, fuerza mecánica, cualquier fuente de energía, etc."
    },
    {
        pregunta: "El AMBIENTE en la tríada ecológica involucra:",
        opciones: [
            "Solo el ambiente físico como temperatura y clima",
            "Únicamente el nivel socioeconómico",
            "Ambientes físicos, biológicos y sociales donde interactúan agente y huésped"
        ],
        correcta: 2,
        explicacion: "Ambiente = conjunto de factores donde interactúan el agente causal y el huésped, involucrando ambientes físicos, biológicos y sociales."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — CADENA EPIDEMIOLÓGICA (7 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuál es la estrategia clave para detener una epidemia según la cadena epidemiológica?",
        opciones: [
            "Romper cualquier eslabón de la cadena",
            "Eliminar todos los agentes biológicos",
            "Aumentar la resistencia del ambiente"
        ],
        correcta: 0,
        explicacion: "Romper CUALQUIER eslabón de la cadena interrumpe la transmisión. No es necesario eliminar el agente; basta con interrumpir en cualquier punto."
    },
    {
        pregunta: "El RESERVORIO es:",
        opciones: [
            "La vía por donde el agente entra al huésped",
            "El lugar donde el agente vive, se reproduce y del cual depende para sobrevivir",
            "El mecanismo por el que el agente sale del huésped"
        ],
        correcta: 1,
        explicacion: "Reservorio = lugar donde el agente vive y se multiplica. Puede ser humano (portador), animal (zoonosis) o ambiental (suelo, agua)."
    },
    {
        pregunta: "La rabia (transmitida por mordedura de perro) tiene como reservorio:",
        opciones: [
            "Reservorio ambiental (suelo)",
            "Reservorio humano",
            "Reservorio animal (zoonosis)"
        ],
        correcta: 2,
        explicacion: "Rabia = zoonosis. Su reservorio es animal (principalmente perros, murciélagos). Es un ejemplo clásico de reservorio animal."
    },
    {
        pregunta: "La transmisión DIRECTA se caracteriza por:",
        opciones: [
            "Contacto físico inmediato persona a persona sin intermediario",
            "Pasar por vectores como mosquitos o garrapatas",
            "Transmitirse a través del agua o alimentos contaminados"
        ],
        correcta: 0,
        explicacion: "Transmisión directa = contacto físico inmediato entre el reservorio y el huésped susceptible, sin intermediarios."
    },
    {
        pregunta: "¿Cuál de las siguientes es una medida que ROMPE la cadena epidemiológica?",
        opciones: [
            "Aumentar la temperatura ambiental",
            "Vacunación del huésped susceptible",
            "Reducir el número de hospitales"
        ],
        correcta: 1,
        explicacion: "La vacunación protege al huésped susceptible (eslabón 6), rompiendo la cadena. También sirven: lavado de manos, aislamiento, cubrebocas, tratamiento."
    },
    {
        pregunta: "El tétanos, cuyo agente (Clostridium tetani) vive en el suelo, tiene como tipo de reservorio:",
        opciones: [
            "Reservorio humano",
            "Reservorio animal",
            "Reservorio ambiental"
        ],
        correcta: 2,
        explicacion: "El tétanos tiene reservorio ambiental (suelo). El agente vive en el suelo y entra al huésped por heridas contaminadas."
    },
    {
        pregunta: "Los fómites (objetos contaminados) son parte de la transmisión:",
        opciones: [
            "Indirecta",
            "Directa",
            "Vertical"
        ],
        correcta: 0,
        explicacion: "Los fómites son objetos que actúan como vehículo intermediario → transmisión INDIRECTA. Ej: jeringas, ropa, superficies."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — HISTORIA NATURAL DE LA ENFERMEDAD (8 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La historia natural de la enfermedad se define como:",
        opciones: [
            "El proceso de diagnóstico y tratamiento de una enfermedad",
            "El curso de la enfermedad desde el inicio hasta su resolución, sin intervención médica",
            "La evolución de una epidemia en una población"
        ],
        correcta: 1,
        explicacion: "HNE = curso de la enfermedad desde el inicio hasta su resolución, EN AUSENCIA de intervención médica."
    },
    {
        pregunta: "¿Cuáles son los períodos de la historia natural de la enfermedad?",
        opciones: [
            "Período clínico y período subclínico",
            "Período de incubación y período de contagio",
            "Período prepatogénico y período patogénico"
        ],
        correcta: 2,
        explicacion: "La HNE tiene 2 períodos: 1) Prepatogénico (antes de la enfermedad) y 2) Patogénico (durante la enfermedad)."
    },
    {
        pregunta: "El período PREPATOGÉNICO se caracteriza por:",
        opciones: [
            "Interacción de los factores de la tríada ecológica en armonía, sin estímulo eficaz",
            "Presencia de signos y síntomas específicos de la enfermedad",
            "Cambios bioquímicos y celulares visibles"
        ],
        correcta: 0,
        explicacion: "Período prepatogénico = ANTES de la enfermedad. Los factores de la tríada interactúan en armonía pero sin estímulo eficaz que cause la enfermedad."
    },
    {
        pregunta: "El horizonte clínico divide:",
        opciones: [
            "El período prepatogénico del patogénico",
            "La etapa subclínica de la etapa clínica",
            "La convalecencia de la resolución"
        ],
        correcta: 1,
        explicacion: "El horizonte clínico es la línea que separa la etapa SUBCLÍNICA (sin síntomas) de la etapa CLÍNICA (con síntomas) dentro del período patogénico."
    },
    {
        pregunta: "La etapa SUBCLÍNICA del período patogénico se caracteriza por:",
        opciones: [
            "Presencia de signos y síntomas prodrómicos",
            "Recuperación de la enfermedad",
            "Cambios bioquímicos, celulares y tisulares SIN presencia de signos/síntomas"
        ],
        correcta: 2,
        explicacion: "Etapa subclínica = ya hay cambios bioquímicos, celulares y tisulares, pero el paciente NO siente nada aún. Está por debajo del horizonte clínico."
    },
    {
        pregunta: "La etapa CLÍNICA del período patogénico se define por:",
        opciones: [
            "Presencia de signos y síntomas prodrómicos y/o específicos",
            "Solo cambios bioquímicos sin manifestaciones visibles",
            "Ausencia total de manifestaciones"
        ],
        correcta: 0,
        explicacion: "Etapa clínica = aparecen signos (objetivos) y síntomas (subjetivos) prodrómicos y/o específicos de la enfermedad."
    },
    {
        pregunta: "La CONVALECENCIA es:",
        opciones: [
            "El inicio de los síntomas específicos",
            "Fase previa a la resolución donde se recupera la fuerza tras la enfermedad",
            "El período sin síntomas antes de la enfermedad"
        ],
        correcta: 1,
        explicacion: "Convalecencia = fase que PRECEDE a la resolución. El paciente intenta recuperar fuerzas y permite suponer cómo terminará (resolución)."
    },
    {
        pregunta: "La RESOLUCIÓN de la enfermedad puede terminar en:",
        opciones: [
            "Solo cura total o muerte",
            "Solo secuelas o estado crónico",
            "Cura total, estado crónico, secuelas/discapacidad o muerte"
        ],
        correcta: 2,
        explicacion: "La resolución puede tener 4 desenlaces: cura total, estado crónico, secuelas/discapacidad, o muerte."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — NIVELES DE PREVENCIÓN (7 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿En qué período se enfoca la prevención PRIMARIA?",
        opciones: [
            "Período prepatogénico",
            "Período patogénico",
            "Fase de resolución"
        ],
        correcta: 0,
        explicacion: "Prevención primaria → período PREPATOGÉNICO (antes de la enfermedad). Se actúa antes de que ocurra."
    },
    {
        pregunta: "Las acciones de la prevención PRIMARIA son:",
        opciones: [
            "Diagnóstico precoz y tratamiento inmediato",
            "Fomento de la salud y protección específica",
            "Rehabilitación física y psicológica"
        ],
        correcta: 1,
        explicacion: "Prevención primaria = FOMENTO de la salud + PROTECCIÓN específica (vacunas, saneamiento, educación en salud)."
    },
    {
        pregunta: "La prevención SECUNDARIA se enfoca en el período:",
        opciones: [
            "Prepatogénico únicamente",
            "De resolución y rehabilitación",
            "Patogénico (diagnóstico precoz, tratamiento y limitación del daño)"
        ],
        correcta: 2,
        explicacion: "Prevención secundaria → período PATOGÉNICO. Busca detectar y tratar la enfermedad en etapas tempranas y limitar el daño."
    },
    {
        pregunta: "¿Qué comprende la prevención SECUNDARIA?",
        opciones: [
            "Diagnóstico precoz, tratamiento inmediato y limitación del daño",
            "Rehabilitación física, psicológica y social",
            "Vacunación y saneamiento ambiental"
        ],
        correcta: 0,
        explicacion: "Prevención secundaria = diagnóstico PRECOZ + tratamiento INMEDIATO + limitación del daño. Todo dentro del período patogénico."
    },
    {
        pregunta: "La prevención TERCIARIA consiste en:",
        opciones: [
            "Diagnóstico precoz y limitación del daño",
            "Rehabilitación física, psicológica y social",
            "Vacunación y educación en salud"
        ],
        correcta: 1,
        explicacion: "Prevención terciaria = REHABILITACIÓN física, psicológica y social. Es la última etapa, cuando la enfermedad ya generó daño."
    },
    {
        pregunta: "Instalar un programa de tamizaje neonatal para detectar hipotiroidismo congénito es un ejemplo de prevención:",
        opciones: [
            "Primaria",
            "Terciaria",
            "Secundaria"
        ],
        correcta: 2,
        explicacion: "El tamizaje (screening) es diagnóstico PRECOZ = prevención secundaria, aunque el bebé no tenga síntomas aún."
    },
    {
        pregunta: "La fisioterapia para un paciente que sufrió un accidente cerebrovascular es prevención:",
        opciones: [
            "Terciaria",
            "Primaria",
            "Secundaria"
        ],
        correcta: 0,
        explicacion: "La fisioterapia post-EVC es REHABILITACIÓN = prevención TERCIARIA. La enfermedad ya causó daño y se busca recuperar funciones."
    },

    // ══════════════════════════════════════════
    // BLOQUE 7 — SIGNOS VITALES (5 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La temperatura corporal normal en el adulto es:",
        opciones: [
            "35.0°C – 36.0°C",
            "36.5°C – 37.5°C",
            "38.0°C – 39.0°C"
        ],
        correcta: 1,
        explicacion: "Temperatura normal = 36.5°C a 37.5°C. Por encima de 37.5°C = fiebre. Por debajo de 35°C = hipotermia."
    },
    {
        pregunta: "Se considera TAQUICARDIA cuando la frecuencia cardíaca es:",
        opciones: [
            "Menor de 60 lpm",
            "Igual a 80 lpm",
            "Mayor de 100 lpm"
        ],
        correcta: 2,
        explicacion: "FC normal = 60-100 lpm. Taquicardia = >100 lpm. Bradicardia = <60 lpm."
    },
    {
        pregunta: "La frecuencia respiratoria normal en adulto es:",
        opciones: [
            "12–20 rpm",
            "20–30 rpm",
            "8–12 rpm"
        ],
        correcta: 0,
        explicacion: "FR normal = 12 a 20 respiraciones por minuto. >20 = taquipnea. <12 = bradipnea."
    },
    {
        pregunta: "Se considera HIPERTENSIÓN ARTERIAL cuando la presión es mayor o igual a:",
        opciones: [
            "120/80 mmHg",
            "140/90 mmHg",
            "100/60 mmHg"
        ],
        correcta: 1,
        explicacion: "HTA = PA ≥140/90 mmHg. La PA normal es 120/80. Hipotensión = <90/60 mmHg."
    },
    {
        pregunta: "Un paciente con temperatura de 38.2°C presenta:",
        opciones: [
            "Hipotermia",
            "Temperatura normal",
            "Fiebre"
        ],
        correcta: 2,
        explicacion: "38.2°C > 37.5°C = FIEBRE. La temperatura normal es 36.5-37.5°C."
    },

    // ══════════════════════════════════════════
    // BLOQUE 8 — SIGNOS, SÍNTOMAS Y SÍNDROMES (6 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Un SIGNO clínico es:",
        opciones: [
            "Manifestación objetiva que puede ser observada y medida por el médico",
            "Manifestación subjetiva que solo el paciente puede percibir",
            "Conjunto de signos y síntomas que caracterizan una condición"
        ],
        correcta: 0,
        explicacion: "SIGNO = OBJETIVO. Lo mide y observa el médico. Ej: fiebre, ictericia, cianosis, edema."
    },
    {
        pregunta: "Un SÍNTOMA clínico es:",
        opciones: [
            "Manifestación objetiva medible por el médico",
            "Manifestación subjetiva que solo el paciente percibe y describe",
            "Conjunto de signos que caracterizan una enfermedad"
        ],
        correcta: 1,
        explicacion: "SÍNTOMA = SUBJETIVO. Solo el paciente lo siente. Ej: dolor, náuseas, mareo, fatiga, comezón."
    },
    {
        pregunta: "La ictericia (coloración amarillenta de piel y mucosas) es un ejemplo de:",
        opciones: [
            "Síntoma",
            "Síndrome",
            "Signo"
        ],
        correcta: 2,
        explicacion: "Ictericia es un SIGNO porque puede ser OBSERVADA y medida (bilirrubina elevada). No requiere que el paciente lo reporte."
    },
    {
        pregunta: "El dolor es un ejemplo de:",
        opciones: [
            "Síntoma",
            "Síndrome",
            "Signo"
        ],
        correcta: 0,
        explicacion: "El dolor es un SÍNTOMA porque es SUBJETIVO: solo el paciente lo siente y describe. El médico no puede medirlo directamente."
    },
    {
        pregunta: "Un SÍNDROME se define como:",
        opciones: [
            "Una sola manifestación objetiva de enfermedad",
            "Conjunto de signos y síntomas que aparecen juntos y caracterizan una condición específica",
            "Período inicial de una enfermedad infecciosa"
        ],
        correcta: 1,
        explicacion: "SÍNDROME = CONJUNTO de signos + síntomas que aparecen juntos. Un síndrome NO es una enfermedad específica por sí solo."
    },
    {
        pregunta: "La combinación de obesidad abdominal, hipertensión, hiperglucemia y dislipidemia caracteriza al:",
        opciones: [
            "Síndrome gripal",
            "Síndrome de Cushing",
            "Síndrome metabólico"
        ],
        correcta: 2,
        explicacion: "Síndrome metabólico = obesidad abdominal + HTA + hiperglucemia + dislipidemia. Aumenta el riesgo cardiovascular."
    },

    // ══════════════════════════════════════════
    // BLOQUE 9 — AGENTES BIOLÓGICOS (3 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El Plasmodium (causante de la malaria) es un agente:",
        opciones: [
            "Biológico (parásito)",
            "Químico",
            "Físico"
        ],
        correcta: 0,
        explicacion: "Plasmodium es un parásito protozoario → agente BIOLÓGICO. Los agentes biológicos incluyen hongos, parásitos, virus y bacterias."
    },
    {
        pregunta: "Los agentes biológicos producen enfermedades:",
        opciones: [
            "No transmisibles como el cáncer",
            "Transmisibles como tuberculosis, dengue o candidiasis",
            "Solo enfermedades crónicas"
        ],
        correcta: 1,
        explicacion: "Agentes BIOLÓGICOS → enfermedades TRANSMISIBLES. Son agentes vivos: bacterias, virus, hongos, parásitos y sus toxinas."
    },
    {
        pregunta: "La Candida albicans causante de la candidiasis es un agente biológico del tipo:",
        opciones: [
            "Bacteria",
            "Virus",
            "Hongo"
        ],
        correcta: 2,
        explicacion: "Candida albicans es un HONGO. Los hongos forman parte de los agentes biológicos junto con bacterias, virus y parásitos."
    },

    // ══════════════════════════════════════════
    // BLOQUE 10 — AGENTES FÍSICOS Y QUÍMICOS (4 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La exposición crónica a ruido mayor de 85 dB puede causar:",
        opciones: [
            "Hipoacusia neurosensorial (sordera ocupacional)",
            "Síndrome metabólico",
            "Anemia ferropénica"
        ],
        correcta: 0,
        explicacion: "Ruido >85 dB de forma crónica → daño coclear → hipoacusia neurosensorial (sordera ocupacional). Es un agente FÍSICO."
    },
    {
        pregunta: "La intoxicación por plomo (saturnismo) es causada por un agente:",
        opciones: [
            "Biológico",
            "Químico (metal pesado)",
            "Físico"
        ],
        correcta: 1,
        explicacion: "El plomo es un METAL PESADO → agente QUÍMICO. Causa daño neurológico y anemia, especialmente grave en niños."
    },
    {
        pregunta: "La radiación ionizante (rayos X, rayos gamma) puede causar:",
        opciones: [
            "Zoonosis y enfermedades transmisibles",
            "Deficiencias nutricionales",
            "Mutaciones, cáncer y síndrome de radiación aguda"
        ],
        correcta: 2,
        explicacion: "Radiación ionizante = agente FÍSICO. Puede causar mutaciones, cáncer y síndrome de radiación aguda por daño al ADN."
    },
    {
        pregunta: "Los organofosforados (insecticidas) actúan inhibiendo la acetilcolinesterasa. Son un tipo de agente:",
        opciones: [
            "Químico (pesticida)",
            "Biológico",
            "Físico"
        ],
        correcta: 0,
        explicacion: "Los organofosforados son PESTICIDAS → agentes QUÍMICOS. Inhiben la acetilcolinesterasa causando neurotoxicidad y crisis colinérgicas."
    },

    // ══════════════════════════════════════════
    // BLOQUE 11 — AGENTES NUTRICIONALES (9 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La deficiencia de Vitamina C produce:",
        opciones: [
            "Raquitismo",
            "Escorbuto (sangrado de encías, heridas que no cicatrizan)",
            "Anemia perniciosa"
        ],
        correcta: 1,
        explicacion: "Déficit de vitamina C → ESCORBUTO: sangrado de encías, heridas que no cicatrizan, petequias. Histórico en marineros."
    },
    {
        pregunta: "El raquitismo en niños es causado por deficiencia de:",
        opciones: [
            "Vitamina A",
            "Hierro",
            "Vitamina D"
        ],
        correcta: 2,
        explicacion: "Déficit de vitamina D → RAQUITISMO en niños (huesos blandos, deformidades). En adultos se llama OSTEOMALACIA."
    },
    {
        pregunta: "La anemia ferropénica es causada por deficiencia de:",
        opciones: [
            "Hierro",
            "Vitamina B12",
            "Yodo"
        ],
        correcta: 0,
        explicacion: "Deficiencia de HIERRO → anemia FERROPÉNICA. Es la deficiencia nutricional más común en el mundo."
    },
    {
        pregunta: "El bocio y el cretinismo (en gestación) son consecuencia de la deficiencia de:",
        opciones: [
            "Calcio",
            "Yodo",
            "Vitamina A"
        ],
        correcta: 1,
        explicacion: "Déficit de YODO → bocio, hipotiroidismo y cretinismo (si ocurre en la gestación). Por eso se usa sal yodada."
    },
    {
        pregunta: "El kwashiorkor se caracteriza por edema y es consecuencia de deficiencia de:",
        opciones: [
            "Vitaminas del complejo B",
            "Hierro y zinc",
            "Proteínas"
        ],
        correcta: 2,
        explicacion: "Kwashiorkor = deficiencia de PROTEÍNAS con edema característico (por hipoalbuminemia). El marasmo es la forma seca/emaciación."
    },
    {
        pregunta: "La deficiencia de ácido fólico durante el embarazo puede causar:",
        opciones: [
            "Defectos del tubo neural y anemia megaloblástica",
            "Raquitismo fetal",
            "Cretinismo y bocio congénito"
        ],
        correcta: 0,
        explicacion: "Déficit de ácido fólico en embarazo → defectos del TUBO NEURAL (espina bífida, anencefalia) + anemia megaloblástica."
    },
    {
        pregunta: "El exceso de sodio en la dieta se asocia con:",
        opciones: [
            "Diabetes tipo 2",
            "Hipertensión arterial",
            "Gota (hiperuricemia)"
        ],
        correcta: 1,
        explicacion: "Exceso de SODIO → retención de líquidos → HIPERTENSIÓN arterial. Reducir sal es una intervención clave en hipertensos."
    },
    {
        pregunta: "El exceso de purinas en la dieta puede producir:",
        opciones: [
            "Aterosclerosis",
            "Diabetes tipo 2",
            "Gota (hiperuricemia)"
        ],
        correcta: 2,
        explicacion: "Exceso de PURINAS (vísceras, mariscos, carnes rojas) → ácido úrico elevado → GOTA (artritis por cristales de urato)."
    },
    {
        pregunta: "¿Cuál es una medida preventiva clave contra las deficiencias nutricionales a nivel poblacional?",
        opciones: [
            "Fortificación de alimentos: sal yodada, harina con ácido fólico",
            "Evitar el consumo de sal",
            "Restricción calórica en todos los grupos"
        ],
        correcta: 0,
        explicacion: "La FORTIFICACIÓN de alimentos (sal yodada para prevenir bocio; harina con ácido fólico para defectos del tubo neural) es una estrategia de salud pública masiva."
    }

];

console.log("✅ Evaluación Conceptos de Salud cargada:", EVALUACION_CONCEPTOS_SALUD.length, "preguntas");
