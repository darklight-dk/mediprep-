// ══════════════════════════════════════════════════════════════
// ACCESO ÚNICO — Guía manual de preguntas reales
// Fuente: Examen UAEH + Temario oficial CENEVAL Premedicina 2025
// ══════════════════════════════════════════════════════════════

const ACCESO_UNICO = {

    // ──────────────────────────────────────────────────────────
    // SUBÁREA 1: SALUD PÚBLICA Y MEDICINA COMUNITARIA
    // Temas: Concepto salud/enfermedad, Tríada ecológica,
    //        Historia natural, Signos y síntomas
    // ──────────────────────────────────────────────────────────
    saludPublica: {
        id: 'saludPublica',
        titulo: 'Salud Pública y Medicina Comunitaria',
        emoji: '🏥',
        color: '#06b6d4',
        colorBg: 'rgba(6,182,212,.12)',
        colorBorder: 'rgba(6,182,212,.25)',
        reactivos: 10,
        preguntas: [
            {
                id: 'sp-01',
                pregunta: 'Un paciente presenta temperatura 36.6 °C, presión arterial de 140/95 mmHg y frecuencia cardiaca de 60/min. Identifique el dato clínico que se encuentra fuera de parámetros normales.',
                opciones: ['Temperatura', 'Frecuencia cardiaca', 'Presión arterial'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. La temperatura corporal normal se ubica entre 36.5 y 37 °C.',
                    'Incorrecta. La frecuencia cardiaca normal se ubica entre 60 y 100 latidos por minuto.',
                    'Correcta. Se considera presión normal aquella ubicada por debajo de 130/90 mmHg. 140/95 mmHg indica hipertensión.'
                ],
                fuente: 'CENEVAL oficial',
                tema: 'Signos y síntomas'
            },
            {
                id: 'sp-02',
                pregunta: '¿Cuáles son los tres elementos que conforman la tríada ecológica?',
                opciones: ['Agente, huésped y ambiente', 'Bacteria, virus y parásito', 'Prevención, diagnóstico y tratamiento'],
                correcta: 0,
                explicaciones: [
                    'Correcta. La tríada ecológica está formada por: agente causal, huésped susceptible y ambiente (entorno).',
                    'Incorrecta. Estas son categorías de agentes causales, no los componentes de la tríada.',
                    'Incorrecta. Estos corresponden a niveles de atención médica, no a la tríada ecológica.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Tríada ecológica'
            },
            {
                id: 'sp-03',
                pregunta: '¿En qué periodo de la historia natural de la enfermedad (modelo Leavell y Clark) se aplica la prevención primaria?',
                opciones: ['Periodo patogénico temprano', 'Periodo prepatogénico', 'Periodo de secuelas'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. En el periodo patogénico temprano se aplica la prevención secundaria (diagnóstico precoz).',
                    'Correcta. La prevención primaria actúa en el periodo prepatogénico, antes de que el agente entre en contacto con el huésped.',
                    'Incorrecta. En el periodo de secuelas se aplica prevención terciaria (rehabilitación).'
                ],
                fuente: 'Leavell y Clark',
                tema: 'Historia natural de la enfermedad'
            },
            {
                id: 'sp-04',
                pregunta: 'Según la OMS, ¿cómo se define la salud?',
                opciones: [
                    'Ausencia de enfermedad o padecimiento físico',
                    'Estado de completo bienestar físico, mental y social',
                    'Capacidad de realizar actividades cotidianas sin limitaciones'
                ],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Esta es una definición reduccionista que la OMS superó en 1948.',
                    'Correcta. La OMS define salud como "un estado de completo bienestar físico, mental y social, y no solamente la ausencia de enfermedad o dolencia".',
                    'Incorrecta. Aunque relacionada, no es la definición oficial de la OMS.'
                ],
                fuente: 'OMS 2025',
                tema: 'Concepto de salud y enfermedad'
            },
            {
                id: 'sp-05',
                pregunta: '¿Cuál es la diferencia entre signo y síntoma?',
                opciones: [
                    'El signo es subjetivo; el síntoma es objetivo',
                    'El signo es objetivo y medible; el síntoma es subjetivo y referido por el paciente',
                    'Ambos términos son sinónimos en medicina clínica'
                ],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Es al revés: el signo es objetivo y el síntoma subjetivo.',
                    'Correcta. El signo es observable y medible por el clínico (ej: fiebre medida). El síntoma lo refiere el paciente y no es directamente medible (ej: dolor).',
                    'Incorrecta. Tienen significados distintos y bien diferenciados en semiología.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Signos y síntomas'
            },
        ]
    },

    // ──────────────────────────────────────────────────────────
    // SUBÁREA 2: ANATOMÍA Y FISIOLOGÍA
    // Temas: Sistemas, aparatos, planos anatómicos
    // ──────────────────────────────────────────────────────────
    anatomia: {
        id: 'anatomia',
        titulo: 'Anatomía y Fisiología',
        emoji: '🫀',
        color: '#ec4899',
        colorBg: 'rgba(236,72,153,.12)',
        colorBorder: 'rgba(236,72,153,.25)',
        reactivos: 18,
        preguntas: [
            {
                id: 'an-01',
                pregunta: 'Relacione las capas de la piel con su representación (Capa: 1.Dermis, 2.Epidermis, 3.Hipodermis → Representación: a) superior con folículos salientes, b) media fibrosa, c) inferior adiposa).',
                opciones: ['1a, 2c, 3b', '1b, 2a, 3c', '1c, 2a, 3b'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. La dermis no es la capa superior donde emergen los folículos pilosos.',
                    'Correcta. La epidermis (2) es la capa más superficial (a), la dermis (1) es la capa media fibrosa (b), y la hipodermis (3) es la capa profunda adiposa (c).',
                    'Incorrecta. La hipodermis no corresponde a la representación superficial.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Sistema tegumentario',
                svgKey: 'capas-piel'
            },
            {
                id: 'an-02',
                pregunta: 'Identifique el hueso largo situado en la parte medial del antebrazo.',
                opciones: ['Radio', 'Cúbito', 'Húmero'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. El radio es el hueso lateral del antebrazo (lado del pulgar).',
                    'Correcta. El cúbito (ulna) es el hueso medial del antebrazo, articulado con el húmero en el codo mediante la articulación troclear.',
                    'Incorrecta. El húmero es el hueso del brazo (porción superior), no del antebrazo.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Sistema musculoesquelético'
            },
            {
                id: 'an-03',
                pregunta: '¿Cuál es el vaso sanguíneo que se encarga de transportar la sangre oxigenada desde el corazón hacia el cuerpo?',
                opciones: ['Capilar', 'Vena', 'Arteria'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. Los capilares son vasos microscópicos de intercambio entre la sangre y los tejidos.',
                    'Incorrecta. Las venas conducen sangre desoxigenada de regreso al corazón (excepto las venas pulmonares).',
                    'Correcta. Las arterias transportan sangre oxigenada desde el corazón hacia los tejidos. La arteria principal es la aorta.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Aparato cardiovascular'
            },
            {
                id: 'an-04',
                pregunta: '¿Qué función le corresponde al intestino delgado?',
                opciones: ['Almacenamiento de bilis', 'Producción de glucagón', 'Digestión y absorción de nutrientes'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. La bilis se almacena en la vesícula biliar y se produce en el hígado.',
                    'Incorrecta. El glucagón es producido por las células alfa de los islotes de Langerhans en el páncreas.',
                    'Correcta. El intestino delgado (duodeno, yeyuno e íleon) es el principal sitio de digestión química y absorción de nutrientes.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Sistema endócrino y aparato digestivo'
            },
            {
                id: 'an-05',
                pregunta: '¿Cuál es el órgano que forma parte de la estructura del sistema linfático?',
                opciones: ['Cuerpo pineal', 'Médula espinal', 'Bazo'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. El cuerpo pineal es una glándula del sistema endócrino que produce melatonina.',
                    'Incorrecta. La médula espinal forma parte del sistema nervioso central.',
                    'Correcta. El bazo es el órgano linfoide más grande; filtra la sangre, destruye eritrocitos viejos y participa en la respuesta inmune.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Sistemas inmunológico y linfático'
            },
            {
                id: 'an-06',
                pregunta: '¿Qué plano anatómico divide al cuerpo en mitad derecha e izquierda?',
                opciones: ['Plano coronal (frontal)', 'Plano sagital medio', 'Plano transversal (axial)'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. El plano coronal divide el cuerpo en parte anterior (ventral) y posterior (dorsal).',
                    'Correcta. El plano sagital medio (o mediosagital) divide el cuerpo en dos mitades simétricas: derecha e izquierda.',
                    'Incorrecta. El plano transversal divide el cuerpo en mitad superior e inferior.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Planos anatómicos'
            },
        ]
    },

    // ──────────────────────────────────────────────────────────
    // SUBÁREA 3: BIOLOGÍA CELULAR Y MICROBIOLOGÍA
    // Temas: Estructura celular, Metabolismo, Genética, Microbiología
    // ──────────────────────────────────────────────────────────
    biologiaCelular: {
        id: 'biologiaCelular',
        titulo: 'Biología Celular y Microbiología',
        emoji: '🔬',
        color: '#10b981',
        colorBg: 'rgba(16,185,129,.12)',
        colorBorder: 'rgba(16,185,129,.25)',
        reactivos: 10,
        preguntas: [
            {
                id: 'bc-01',
                pregunta: '¿Qué organelo celular es responsable de la síntesis de proteínas?',
                opciones: ['Mitocondria', 'Ribosoma', 'Aparato de Golgi'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. La mitocondria es el organelo de la respiración celular y producción de ATP.',
                    'Correcta. Los ribosomas son los organelos encargados de la síntesis de proteínas mediante la traducción del ARN mensajero.',
                    'Incorrecta. El aparato de Golgi modifica, empaqueta y distribuye proteínas, pero no las sintetiza.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Organelos celulares'
            },
            {
                id: 'bc-02',
                pregunta: '¿En qué etapa de la respiración celular se produce la mayor cantidad de ATP?',
                opciones: ['Glucólisis', 'Ciclo de Krebs', 'Cadena de transporte de electrones (fosforilación oxidativa)'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. La glucólisis produce solo 2 ATP netos por molécula de glucosa.',
                    'Incorrecta. El ciclo de Krebs produce directamente 2 ATP, aunque genera NADH y FADH₂ que luego se aprovechan.',
                    'Correcta. La cadena de transporte de electrones (fosforilación oxidativa) produce aproximadamente 32-34 ATP por molécula de glucosa.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Metabolismo y respiración celular'
            },
            {
                id: 'bc-03',
                pregunta: 'Un individuo con síndrome de Down presenta 47 cromosomas en lugar de 46. ¿Cuál es el mecanismo genético responsable?',
                opciones: ['Mutación puntual', 'Trisomía 21 por no disyunción', 'Deleción cromosómica'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Una mutación puntual afecta una sola base nitrogenada, no el número de cromosomas.',
                    'Correcta. El síndrome de Down se produce por trisomía del cromosoma 21, resultado de una no disyunción (falla en la separación cromosómica) durante la meiosis.',
                    'Incorrecta. La deleción implica pérdida de material genético, no ganancia de un cromosoma adicional.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Genética y mecanismos de la herencia'
            },
            {
                id: 'bc-04',
                pregunta: '¿Cuál es la característica que distingue a los virus de las bacterias?',
                opciones: [
                    'Los virus tienen membrana plasmática y las bacterias no',
                    'Los virus son acelulares y no tienen metabolismo propio; las bacterias son células procariotas',
                    'Las bacterias son más pequeñas que los virus'
                ],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Los virus no tienen membrana plasmática; las bacterias sí la tienen.',
                    'Correcta. Los virus son agentes acelulares que requieren una célula huésped para replicarse. Las bacterias son organismos procariotas unicelulares con metabolismo propio.',
                    'Incorrecta. Los virus (20-300 nm) son generalmente más pequeños que las bacterias (1-10 μm).'
                ],
                fuente: 'Murray 2017',
                tema: 'Microbiología y parasitología médica'
            },
        ]
    },

    // ──────────────────────────────────────────────────────────
    // SUBÁREA 4: BIOQUÍMICA, BIOLOGÍA MOLECULAR Y FARMACOLOGÍA
    // Temas: Transporte membranal, Biomoléculas, Farmacología
    // ──────────────────────────────────────────────────────────
    bioquimica: {
        id: 'bioquimica',
        titulo: 'Bioquímica, Biología Molecular y Farmacología',
        emoji: '⚗️',
        color: '#a855f7',
        colorBg: 'rgba(168,85,247,.12)',
        colorBorder: 'rgba(168,85,247,.25)',
        reactivos: 10,
        preguntas: [
            {
                id: 'bq-01',
                pregunta: '¿Qué tipo de solución representa el esquema donde la concentración de solutos es igual dentro y fuera de la célula?',
                opciones: ['Hipertónica', 'Hipotónica', 'Isotónica'],
                correcta: 2,
                explicaciones: [
                    'Incorrecta. Una solución hipertónica tiene mayor concentración de solutos fuera de la célula; el agua sale y la célula se coge (crenación).',
                    'Incorrecta. Una solución hipotónica tiene menor concentración de solutos fuera; el agua entra y la célula puede lisarse.',
                    'Correcta. En una solución isotónica la concentración de solutos es igual en ambos lados de la membrana; no hay movimiento neto de agua y la célula mantiene su forma.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Transporte membranal',
                svgKey: 'isotonica'
            },
            {
                id: 'bq-02',
                pregunta: 'Son los medicamentos utilizados para tratar los síntomas de las alergias.',
                opciones: ['Antiespasmódicos', 'Antihistamínicos', 'Analgésicos'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Los antiespasmódicos relajan el músculo liso para tratar espasmos gastrointestinales o urinarios.',
                    'Correcta. Los antihistamínicos bloquean los receptores H1 de histamina, reduciendo síntomas alérgicos como prurito, rinorrea y urticaria.',
                    'Incorrecta. Los analgésicos se usan para el control del dolor, no específicamente para alergias.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Farmacología'
            },
            {
                id: 'bq-03',
                pregunta: 'Se desea dar un fármaco a un paciente que presenta colitis ulcerosa. ¿Cuál es la vía contraindicada?',
                opciones: ['Intravenosa', 'Rectal', 'Tópica'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. La vía intravenosa administra el fármaco directo al torrente sanguíneo, sin contacto con el colon.',
                    'Correcta. La vía rectal introduce el fármaco directamente en el colon, lo que podría irritar o agravar la colitis ulcerosa, una inflamación de la mucosa del colon.',
                    'Incorrecta. La vía tópica aplica el fármaco sobre la piel u otras superficies externas, sin contacto con el colon.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Farmacología'
            },
            {
                id: 'bq-04',
                pregunta: '¿Cuál es un ejemplo del objeto de estudio que corresponde a la farmacocinética?',
                opciones: [
                    'Efectos secundarios de los antivirales',
                    'Excreción del paracetamol por vía renal',
                    'Modificación de canales iónicos por antidepresivos'
                ],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. Los efectos secundarios corresponden a la farmacodinamia (mecanismo de acción e efectos del fármaco en el organismo).',
                    'Correcta. La farmacocinética estudia lo que el organismo hace con el fármaco: absorción, distribución, metabolismo y excreción (ADME). La excreción renal del paracetamol es un ejemplo claro.',
                    'Incorrecta. La modificación de canales iónicos es un mecanismo de acción, objeto de la farmacodinamia.'
                ],
                fuente: 'ExamenUAEH',
                tema: 'Farmacología'
            },
            {
                id: 'bq-05',
                pregunta: '¿Qué tipo de transporte membranal no requiere gasto de energía (ATP)?',
                opciones: ['Transporte activo primario', 'Difusión simple', 'Bomba sodio-potasio'],
                correcta: 1,
                explicaciones: [
                    'Incorrecta. El transporte activo primario consume ATP directamente para mover sustancias contra su gradiente.',
                    'Correcta. La difusión simple es un transporte pasivo que mueve sustancias a favor de su gradiente de concentración sin requerir energía.',
                    'Incorrecta. La bomba Na⁺/K⁺ es el ejemplo clásico de transporte activo que usa ATP.'
                ],
                fuente: 'Guía CENEVAL',
                tema: 'Transporte membranal'
            },
        ]
    }
};

// Helper: total preguntas
const ACCESO_TOTAL = Object.values(ACCESO_UNICO)
    .reduce((sum, cat) => sum + cat.preguntas.length, 0);

console.log(`✅ Acceso Único cargado: ${ACCESO_TOTAL} preguntas en ${Object.keys(ACCESO_UNICO).length} subáreas`);
