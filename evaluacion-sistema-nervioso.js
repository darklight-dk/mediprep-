// ============================================
// EVALUACIÓN: SISTEMA NERVIOSO
// 60 preguntas — basadas en sistema-nervioso.js
// Temas: Encéfalo, Médula Espinal, SNP, Meninges/LCR,
//        Funciones, Neurona, Tipos Neuronas,
//        Potencial de Acción y Sinapsis
// ============================================

const EVALUACION_SISTEMA_NERVIOSO = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — ENCÉFALO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuáles son las tres partes principales del encéfalo?",
        opciones: [
            "Cerebro, cerebelo y tronco encefálico",
            "Tálamo, hipotálamo y mesencéfalo",
            "Corteza, subcorteza y tronco"
        ],
        correcta: 0,
        explicacion: "El encéfalo se divide en tres partes: CEREBRO (telencéfalo + diencéfalo), CEREBELO y TRONCO ENCEFÁLICO (mesencéfalo, puente y bulbo)."
    },
    {
        pregunta: "El área de Broca, encargada de la PRODUCCIÓN del lenguaje, se localiza en el lóbulo:",
        opciones: [
            "Temporal",
            "Frontal",
            "Parietal"
        ],
        correcta: 1,
        explicacion: "El área de Broca está en el lóbulo FRONTAL (giro frontal inferior). Lesión → afasia de Broca (entiende pero no puede hablar). El área de Wernicke (comprensión) está en el temporal."
    },
    {
        pregunta: "El hipotálamo regula principalmente:",
        opciones: [
            "El movimiento voluntario y la coordinación",
            "La recepción y transmisión de señales sensoriales al córtex",
            "La homeostasis: temperatura, hambre, sed, sueño y ciclos hormonales"
        ],
        correcta: 2,
        explicacion: "El HIPOTÁLAMO es el centro de homeostasis del encéfalo. Regula temperatura corporal, hambre, sed, sueño, ciclos hormonales y el SNA. También controla la hipófisis."
    },
    {
        pregunta: "La función principal del cerebelo es:",
        opciones: [
            "Coordinar movimientos voluntarios, equilibrio y aprendizaje motor",
            "Controlar la respiración y la frecuencia cardíaca",
            "Procesar estímulos visuales y auditivos"
        ],
        correcta: 0,
        explicacion: "El CEREBELO coordina movimientos voluntarios (precisión, suavidad), equilibrio y postura, y es esencial para el aprendizaje motor. Lesión → ataxia."
    },
    {
        pregunta: "Una lesión del bulbo raquídeo es particularmente grave porque controla:",
        opciones: [
            "El lenguaje y la memoria",
            "Funciones vitales: frecuencia cardíaca, respiración y deglución",
            "La coordinación y el equilibrio"
        ],
        correcta: 1,
        explicacion: "El BULBO RAQUÍDEO contiene los centros vitales automáticos (FC, respiración, deglución, vómito). Una lesión aquí puede ser incompatible con la vida."
    },
    {
        pregunta: "Un paciente que entiende el lenguaje perfectamente pero no puede articular palabras tiene lesión en:",
        opciones: [
            "Área de Wernicke (temporal)",
            "Lóbulo parietal",
            "Área de Broca (frontal)"
        ],
        correcta: 2,
        explicacion: "Afasia de BROCA = lesión en área de Broca (lóbulo frontal). El paciente ENTIENDE pero no puede PRODUCIR lenguaje fluido. Afasia de Wernicke = no comprende."
    },
    {
        pregunta: "El tálamo funciona principalmente como:",
        opciones: [
            "Estación de relevo sensorial: toda la información sensorial pasa por él antes de llegar al córtex",
            "Centro de coordinación del movimiento",
            "Centro de regulación hormonal"
        ],
        correcta: 0,
        explicacion: "El TÁLAMO es el principal centro de relevo (relay) del encéfalo. Toda la información sensorial (excepto el olfato) pasa por él antes de llegar a la corteza cerebral."
    },
    {
        pregunta: "El mesencéfalo forma parte del:",
        opciones: [
            "Cerebelo",
            "Tronco encefálico",
            "Diencéfalo"
        ],
        correcta: 1,
        explicacion: "El TRONCO ENCEFÁLICO se compone de: MESENCÉFALO (arriba) + PROTUBERANCIA/PUENTE (medio) + BULBO RAQUÍDEO (abajo). El mesencéfalo media reflejos visuales y auditivos."
    },
    {
        pregunta: "El lóbulo occipital se especializa en:",
        opciones: [
            "Control del movimiento voluntario",
            "Audición y lenguaje",
            "Procesamiento visual"
        ],
        correcta: 2,
        explicacion: "El LÓBULO OCCIPITAL procesa toda la información VISUAL. La corteza visual primaria está aquí. Una lesión puede causar ceguera cortical aunque los ojos estén sanos."
    },
    {
        pregunta: "El cuerpo calloso conecta:",
        opciones: [
            "Los hemisferios derecho e izquierdo del cerebro",
            "El cerebro con el cerebelo",
            "El encéfalo con la médula espinal"
        ],
        correcta: 0,
        explicacion: "El CUERPO CALLOSO es la comisura más grande del cerebro. Conecta los dos hemisferios cerebrales permitiendo la comunicación entre ellos."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — MÉDULA ESPINAL (7 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Hasta qué nivel vertebral llega normalmente la médula espinal en el adulto?",
        opciones: [
            "L4–L5",
            "L1–L2",
            "T12–L1"
        ],
        correcta: 1,
        explicacion: "En el adulto la médula espinal termina en L1–L2 (cono medular). Por debajo solo están las raíces nerviosas lumbosacras formando la 'cola de caballo' (cauda equina)."
    },
    {
        pregunta: "Las astas ANTERIORES de la médula espinal contienen principalmente:",
        opciones: [
            "Neuronas sensitivas",
            "Fibras del sistema autónomo sensitivo",
            "Neuronas motoras somáticas"
        ],
        correcta: 2,
        explicacion: "ASTA ANTERIOR (ventral) = neuronas MOTORAS. ASTA POSTERIOR (dorsal) = neuronas SENSITIVAS. Regla: anterior = acción (motor), posterior = percepción (sensitivo)."
    },
    {
        pregunta: "La sustancia BLANCA de la médula espinal está formada por:",
        opciones: [
            "Axones mielinizados que forman tractos ascendentes y descendentes",
            "Cuerpos neuronales y sinapsis",
            "Células gliales y LCR"
        ],
        correcta: 0,
        explicacion: "Sustancia BLANCA = axones mielinizados (la mielina da el color blanco). Contiene tractos ascendentes (sensitivos hacia el encéfalo) y descendentes (motores hacia los músculos)."
    },
    {
        pregunta: "Una lesión medular cervical alta (C3-C5) puede causar:",
        opciones: [
            "Solo pérdida sensitiva en los brazos",
            "Parálisis del diafragma con insuficiencia respiratoria",
            "Paraplejia (parálisis de piernas únicamente)"
        ],
        correcta: 1,
        explicacion: "C3-C5 inervan el diafragma (nervio frénico). Una lesión aquí → parálisis diafragmática → el paciente no puede respirar por sí solo. Por eso las lesiones cervicales altas son tan críticas."
    },
    {
        pregunta: "¿Cuántos pares de nervios espinales existen en total?",
        opciones: [
            "24 pares",
            "36 pares",
            "31 pares"
        ],
        correcta: 2,
        explicacion: "31 pares: 8 cervicales + 12 torácicos + 5 lumbares + 5 sacros + 1 coccígeo = 31 pares de nervios espinales."
    },
    {
        pregunta: "En el arco reflejo simple, el centro integrador se encuentra en:",
        opciones: [
            "La médula espinal",
            "El cerebelo",
            "La corteza cerebral frontal"
        ],
        correcta: 0,
        explicacion: "En el arco reflejo spinal, la integración ocurre en la MÉDULA ESPINAL sin necesidad de llegar al encéfalo. Por eso los reflejos son tan rápidos — el estímulo no sube hasta el cerebro."
    },
    {
        pregunta: "La 'cola de caballo' (cauda equina) se forma porque:",
        opciones: [
            "El encéfalo envía fibras hacia la pelvis",
            "Las raíces nerviosas L2-S5 descienden verticalmente tras el fin de la médula",
            "La médula espinal se ramifica en el sacro"
        ],
        correcta: 1,
        explicacion: "Después de L1-L2 (fin de la médula), las raíces nerviosas lumbosacras continúan descendiendo verticalmente por el canal medular formando la 'cola de caballo'. La punción lumbar se realiza aquí (L3-L4) con seguridad."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — SNP Y SNA (8 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuántos pares de nervios craneales existen?",
        opciones: [
            "10 pares",
            "14 pares",
            "12 pares"
        ],
        correcta: 2,
        explicacion: "Existen 12 pares de nervios craneales (I al XII). Emergen directamente del encéfalo o tronco encefálico, no de la médula espinal."
    },
    {
        pregunta: "El nervio vago (X par craneal) es fundamental porque:",
        opciones: [
            "Media el control parasimpático de corazón, pulmones y tracto gastrointestinal",
            "Controla el movimiento de la lengua",
            "Es el principal nervio sensitivo de la cara"
        ],
        correcta: 0,
        explicacion: "El NERVIO VAGO (X) es el nervio parasimpático principal. Inerva corazón (↓FC), pulmones (broncoconstricción) y todo el tubo digestivo hasta el colon transverso."
    },
    {
        pregunta: "El sistema simpático se activa en situaciones de estrés y produce:",
        opciones: [
            "Disminución de FC, miosis y aumento de la digestión",
            "Aumento de FC, midriasis, broncodilatación y disminución de la digestión",
            "Disminución de glucosa y somnolencia"
        ],
        correcta: 1,
        explicacion: "Simpático = 'fight or flight': ↑FC, ↑PA, midriasis (pupila grande), broncodilatación, ↑glucosa, ↓digestión. Neurotransmisor: NORADRENALINA."
    },
    {
        pregunta: "El neurotransmisor principal del sistema PARASIMPÁTICO es:",
        opciones: [
            "Dopamina",
            "Noradrenalina",
            "Acetilcolina"
        ],
        correcta: 2,
        explicacion: "El parasimpático usa ACETILCOLINA como neurotransmisor. El simpático usa noradrenalina (salvo en las glándulas sudoríparas que usan acetilcolina)."
    },
    {
        pregunta: "Las fibras AFERENTES del SNP llevan información:",
        opciones: [
            "Desde los receptores sensoriales hacia el SNC",
            "Desde el SNC hacia los músculos",
            "Entre diferentes partes del SNC"
        ],
        correcta: 0,
        explicacion: "AFERENTE = hacia el SNC (de la periferia al centro). EFERENTE = desde el SNC hacia la periferia. A de Aferente = Arriba (hacia el centro)."
    },
    {
        pregunta: "El 'segundo cerebro' que regula el tracto gastrointestinal de forma autónoma es el sistema nervioso:",
        opciones: [
            "Simpático",
            "Entérico",
            "Parasimpático"
        ],
        correcta: 1,
        explicacion: "El sistema nervioso ENTÉRICO es el 'segundo cerebro'. Regula la motilidad, secreción y absorción intestinal de forma independiente. Contiene ~500 millones de neuronas."
    },
    {
        pregunta: "El nervio trigémino (V par craneal) se encarga de:",
        opciones: [
            "Movimiento ocular y reflejo pupilar",
            "Audición y equilibrio",
            "Sensación facial y músculos de la masticación"
        ],
        correcta: 2,
        explicacion: "El trigémino (V) tiene función SENSITIVA (sensación de toda la cara) y MOTORA (músculos de la masticación). La neuralgia del trigémino causa dolor facial severo."
    },
    {
        pregunta: "La midriasis (dilatación pupilar) es un efecto del sistema nervioso:",
        opciones: [
            "Simpático",
            "Entérico",
            "Parasimpático"
        ],
        correcta: 0,
        explicacion: "SIMPÁTICO → MIDRIASIS (pupila dilatada). PARASIMPÁTICO → MIOSIS (pupila contraída). El III par craneal (oculomotor) media la miosis parasimpática — su compresión causa midriasis."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — MENINGES Y LCR (7 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El orden correcto de las meninges de afuera hacia adentro es:",
        opciones: [
            "Piamadre → Aracnoides → Duramadre",
            "Duramadre → Aracnoides → Piamadre",
            "Aracnoides → Duramadre → Piamadre"
        ],
        correcta: 1,
        explicacion: "De afuera a adentro: DURAMADRE (más externa y resistente) → ARACNOIDES (media) → PIAMADRE (más interna, adherida al tejido nervioso). DAP."
    },
    {
        pregunta: "El LCR circula principalmente en el espacio:",
        opciones: [
            "Subdural (entre duramadre y aracnoides)",
            "Epidural (sobre la duramadre)",
            "Subaracnoideo (entre aracnoides y piamadre)"
        ],
        correcta: 2,
        explicacion: "El LCR circula en el ESPACIO SUBARACNOIDEO, entre la aracnoides y la piamadre. También circula por los ventrículos cerebrales. Es aquí donde se realiza la punción lumbar."
    },
    {
        pregunta: "¿Dónde se produce el líquido cefalorraquídeo?",
        opciones: [
            "En los plexos coroideos de los ventrículos cerebrales",
            "En la piamadre directamente",
            "En los senos venosos de la duramadre"
        ],
        correcta: 0,
        explicacion: "El LCR es producido por los PLEXOS COROIDEOS en los ventrículos cerebrales (~500 mL/día). Solo circulan ~150 mL en todo momento."
    },
    {
        pregunta: "La anestesia EPIDURAL se aplica en el espacio:",
        opciones: [
            "Subdural",
            "Epidural (entre la vértebra y la duramadre)",
            "Subaracnoideo"
        ],
        correcta: 1,
        explicacion: "La anestesia EPIDURAL se inyecta en el espacio epidural (entre el periostio vertebral y la duramadre). La raquídea (intratecal) se inyecta en el espacio subaracnoideo."
    },
    {
        pregunta: "En meningitis BACTERIANA el LCR típicamente muestra:",
        opciones: [
            "LCR claro, glucosa normal, pocos linfocitos",
            "LCR hemático, proteínas normales",
            "LCR turbio, proteínas aumentadas, glucosa disminuida, muchos neutrófilos"
        ],
        correcta: 2,
        explicacion: "Meningitis BACTERIANA: LCR turbio + ↑proteínas + ↓glucosa + ↑neutrófilos. Viral: LCR claro + proteínas ligeramente ↑ + glucosa normal + ↑linfocitos."
    },
    {
        pregunta: "La piamadre se distingue de las otras meninges porque:",
        opciones: [
            "Es la más interna, altamente vascularizada y se adhiere al tejido nervioso",
            "Es completamente avascular",
            "Es la más gruesa y resistente de las tres capas"
        ],
        correcta: 0,
        explicacion: "La PIAMADRE es la capa más interna, delgada y muy vascularizada. Se adhiere directamente a la superficie del encéfalo y médula, siguiendo todos sus surcos."
    },
    {
        pregunta: "La punción lumbar se realiza en el espacio subaracnoideo entre:",
        opciones: [
            "L1 y L2, donde termina la médula",
            "L3 y L4, debajo del fin de la médula espinal",
            "T12 y L1 para mayor seguridad"
        ],
        correcta: 1,
        explicacion: "La punción lumbar se realiza en L3-L4 (o L4-L5) porque la médula ya terminó en L1-L2. Solo quedan las raíces de la cola de caballo que se desplazan sin dañarse."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — ESTRUCTURA DE LA NEURONA (8 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuál es la función principal de las DENDRITAS?",
        opciones: [
            "Conducir el impulso nervioso hacia otras células",
            "Producir neurotransmisores",
            "Recibir señales de otras neuronas y llevarlas al soma"
        ],
        correcta: 2,
        explicacion: "Las DENDRITAS RECIBEN señales (input) de otras neuronas y las llevan al soma. El AXÓN ENVÍA señales (output). Regla: Dendritas = input, Axón = output."
    },
    {
        pregunta: "Los cuerpos de Nissl en el soma neuronal corresponden a:",
        opciones: [
            "Retículo endoplasmático rugoso (RER) — síntesis de proteínas",
            "Mitocondrias especializadas",
            "Vesículas sinápticas"
        ],
        correcta: 0,
        explicacion: "Los CUERPOS DE NISSL son acumulaciones de RER (retículo endoplasmático rugoso) en el soma. Son la fábrica de proteínas de la neurona. Desaparecen en lesión axonal (cromatólisis)."
    },
    {
        pregunta: "El CONO AXÓNICO (zona de inicio del impulso) es importante porque:",
        opciones: [
            "Almacena los neurotransmisores",
            "Es donde se inicia el potencial de acción",
            "Recibe la mayor parte de las señales sinápticas"
        ],
        correcta: 1,
        explicacion: "El CONO AXÓNICO (unión axosomática) es la zona de mayor densidad de canales de Na⁺ voltaje-dependientes. Es donde se INICIA el potencial de acción si se alcanza el umbral."
    },
    {
        pregunta: "En el SNC, la mielina es producida por:",
        opciones: [
            "Células de Schwann",
            "Astrocitos",
            "Oligodendrocitos"
        ],
        correcta: 2,
        explicacion: "OLIGODENDROCITOS producen mielina en el SNC (cada uno puede mielinizar varios axones). CÉLULAS DE SCHWANN producen mielina en el SNP (cada una mieliniza un solo axón)."
    },
    {
        pregunta: "Los nódulos de Ranvier permiten:",
        opciones: [
            "La conducción saltatoria del impulso nervioso, aumentando su velocidad",
            "La sinapsis entre dos neuronas",
            "El almacenamiento de neurotransmisores"
        ],
        correcta: 0,
        explicacion: "Los NÓDULOS DE RANVIER son los espacios sin mielina entre los segmentos mielinizados. Permiten la CONDUCCIÓN SALTATORIA: el impulso 'salta' de nodo a nodo, siendo mucho más rápido."
    },
    {
        pregunta: "La Esclerosis Múltiple afecta principalmente:",
        opciones: [
            "Los cuerpos celulares de las neuronas motoras",
            "La vaina de mielina en el SNC, enlenteciendo o bloqueando la conducción",
            "Las sinapsis neuromusculares"
        ],
        correcta: 1,
        explicacion: "La Esclerosis Múltiple es una enfermedad autoinmune que destruye la MIELINA del SNC (oligodendrocitos). Sin mielina, la conducción se ralentiza o bloquea, causando debilidad, visión doble, etc."
    },
    {
        pregunta: "Las neuronas del adulto son principalmente postmitóticas, lo que significa que:",
        opciones: [
            "Pueden dividirse pero solo en condiciones especiales",
            "Se regeneran completamente en 6 meses",
            "No se dividen ni se regeneran fácilmente tras una lesión grave"
        ],
        correcta: 2,
        explicacion: "Las neuronas son POSTMITÓTICAS: no se dividen en el adulto. Por eso las lesiones cerebrales son tan graves — las neuronas muertas no se reemplazan. Sin embargo, el cerebro tiene cierta neuroplasticidad."
    },
    {
        pregunta: "Los botones terminales del axón contienen:",
        opciones: [
            "Vesículas sinápticas con neurotransmisores",
            "Mitocondrias únicamente",
            "Los cuerpos de Nissl para síntesis proteica"
        ],
        correcta: 0,
        explicacion: "Los BOTONES TERMINALES contienen vesículas sinápticas llenas de neurotransmisores. Cuando llega el potencial de acción, el Ca²⁺ dispara la fusión de vesículas con la membrana y libera el neurotransmisor."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — TIPOS DE NEURONAS (6 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Las neuronas pseudounipolares son características de:",
        opciones: [
            "La retina y la mucosa olfatoria",
            "Los ganglios de la raíz dorsal (sensitivas del SNP)",
            "La corteza cerebral motora"
        ],
        correcta: 1,
        explicacion: "Las PSEUDOUNIPOLARES están en los ganglios de la raíz DORSAL. Transmiten sensaciones de dolor, temperatura y tacto desde la piel al SNC. Son el prototipo de neurona sensitiva del SNP."
    },
    {
        pregunta: "Las interneuronas representan aproximadamente ___% de todas las neuronas:",
        opciones: [
            "40%",
            "60%",
            "99%"
        ],
        correcta: 2,
        explicacion: "Las INTERNEURONAS (asociativas) representan el 99% de todas las neuronas. Son las que procesan e integran la información dentro del SNC. Las sensitivas y motoras son solo el 1%."
    },
    {
        pregunta: "Las neuronas BIPOLARES son características de:",
        opciones: [
            "Retina, mucosa olfatoria y ganglio espiral coclear",
            "Ganglios autonómicos del SNP",
            "Médula espinal y corteza motora"
        ],
        correcta: 0,
        explicacion: "Las BIPOLARES tienen un axón y una dendrita. Se encuentran en órganos sensoriales especializados: RETINA (bastones y conos), mucosa OLFATORIA y ganglio vestibulococlear."
    },
    {
        pregunta: "Las células de la GLÍA a diferencia de las neuronas:",
        opciones: [
            "Pueden generar potenciales de acción",
            "Sí pueden dividirse (son mitóticas) y apoyan a las neuronas",
            "Transmiten señales eléctricas directamente"
        ],
        correcta: 1,
        explicacion: "Las células de la GLÍA (astrocitos, oligodendrocitos, microglía, células de Schwann) SÍ se dividen. Son ~10x más numerosas que las neuronas. Las apoyan, nutren y protegen pero no generan potenciales de acción."
    },
    {
        pregunta: "Las neuronas MOTORAS son morfológicamente:",
        opciones: [
            "Bipolares, con un axón corto",
            "Pseudounipolares, en los ganglios dorsales",
            "Multipolares, con un axón largo y múltiples dendritas"
        ],
        correcta: 2,
        explicacion: "Las neuronas MOTORAS son típicamente MULTIPOLARES: un axón muy largo (hasta 1 metro en la motoneurona que inerva el pie) y múltiples dendritas para recibir muchas sinapsis."
    },
    {
        pregunta: "Los ASTROCITOS cumplen la función de:",
        opciones: [
            "Soporte estructural, nutrición neuronal y formar la barrera hematoencefálica",
            "Eliminar patógenos del SNC (fagocitosis)",
            "Producir mielina en el SNC"
        ],
        correcta: 0,
        explicacion: "Los ASTROCITOS son las células gliales más abundantes. Dan soporte estructural, nutren neuronas, regulan el ambiente iónico y forman parte de la barrera hematoencefálica. Los OLIGODENDROCITOS hacen mielina; la MICROGLÍA fagocita."
    },

    // ══════════════════════════════════════════
    // BLOQUE 7 — POTENCIAL DE ACCIÓN Y SINAPSIS (14 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El potencial de membrana en REPOSO de la neurona es aproximadamente:",
        opciones: [
            "+30 mV",
            "-70 mV",
            "0 mV"
        ],
        correcta: 1,
        explicacion: "En reposo, el interior de la neurona tiene un potencial de -70 mV (negativo respecto al exterior). Mantenido por la bomba Na⁺/K⁺ ATPasa."
    },
    {
        pregunta: "La DESPOLARIZACIÓN ocurre cuando:",
        opciones: [
            "El K⁺ sale masivamente de la célula",
            "La bomba Na⁺/K⁺ trabaja más rápido",
            "El Na⁺ entra masivamente, llevando el potencial hacia +30 mV"
        ],
        correcta: 2,
        explicacion: "DESPOLARIZACIÓN: se abren los canales de Na⁺ voltaje-dependientes → Na⁺ entra masivamente → el potencial sube de -70 mV hasta +30 mV."
    },
    {
        pregunta: "La REPOLARIZACIÓN en el potencial de acción es causada por:",
        opciones: [
            "Salida de K⁺ a través de canales voltaje-dependientes",
            "Entrada de Na⁺ nuevamente",
            "Activación de la bomba Na⁺/K⁺"
        ],
        correcta: 0,
        explicacion: "REPOLARIZACIÓN: los canales de Na⁺ se inactivan y se abren canales de K⁺ → K⁺ sale → el potencial regresa hacia -70 mV."
    },
    {
        pregunta: "El período refractario ABSOLUTO significa que:",
        opciones: [
            "La neurona puede dispararse con un estímulo más fuerte",
            "La neurona no puede generar ningún potencial de acción sin importar la intensidad del estímulo",
            "La neurona necesita más tiempo de lo normal para dispararse"
        ],
        correcta: 1,
        explicacion: "En el período refractario ABSOLUTO los canales de Na⁺ están inactivados — la neurona NO PUEDE dispararse con ningún estímulo. Esto garantiza que el impulso viaje en una sola dirección."
    },
    {
        pregunta: "La bomba Na⁺/K⁺ ATPasa mantiene el potencial de reposo sacando ___Na⁺ y metiendo ___K⁺:",
        opciones: [
            "2 Na⁺ / 3 K⁺",
            "1 Na⁺ / 1 K⁺",
            "3 Na⁺ / 2 K⁺"
        ],
        correcta: 2,
        explicacion: "La bomba Na⁺/K⁺ saca 3 Na⁺ y mete 2 K⁺ por cada ciclo, gastando ATP. Esto mantiene la concentración: alta de K⁺ adentro y alta de Na⁺ afuera."
    },
    {
        pregunta: "La conducción saltatoria es MÁS RÁPIDA que la conducción continua porque:",
        opciones: [
            "Los nódulos de Ranvier permiten que el impulso salte de nodo a nodo",
            "La mielina amplifica el potencial de acción",
            "Los axones mielinizados tienen más canales de Na⁺"
        ],
        correcta: 0,
        explicacion: "En la conducción SALTATORIA el potencial 'salta' de nodo de Ranvier en nodo de Ranvier (de zona sin mielina en zona sin mielina), sin recorrer toda la membrana. Esto la hace mucho más veloz y eficiente."
    },
    {
        pregunta: "En la sinapsis química, el Ca²⁺ cumple la función de:",
        opciones: [
            "Abrir los canales de Na⁺ postsinápticos",
            "Desencadenar la fusión de vesículas y liberar neurotransmisores",
            "Inactivar el potencial de acción presináptico"
        ],
        correcta: 1,
        explicacion: "El Ca²⁺ es el mensajero clave de la exocitosis sináptica. El potencial de acción abre canales de Ca²⁺ voltaje-dependientes → Ca²⁺ entra → vesículas se fusionan → liberan neurotransmisores."
    },
    {
        pregunta: "La DOPAMINA está especialmente relacionada con:",
        opciones: [
            "La inhibición principal del SNC",
            "El control del sueño y la temperatura",
            "El sistema de recompensa y el control motor (↓ en Parkinson)"
        ],
        correcta: 2,
        explicacion: "La DOPAMINA media el sistema de recompensa (nucleus accumbens) y el control motor (sustancia negra). La enfermedad de Parkinson se caracteriza por pérdida de neuronas dopaminérgicas en la sustancia negra."
    },
    {
        pregunta: "El GABA es el principal neurotransmisor:",
        opciones: [
            "Inhibidor del SNC",
            "Excitador del SNC",
            "De la placa neuromuscular"
        ],
        correcta: 0,
        explicacion: "GABA (ácido gamma-aminobutírico) es el principal INHIBIDOR del SNC. Abre canales de Cl⁻ → hiperpolarización. Las benzodiacepinas y el alcohol potencian al GABA."
    },
    {
        pregunta: "La SEROTONINA disminuida se asocia con:",
        opciones: [
            "La enfermedad de Parkinson",
            "Los trastornos depresivos y de ansiedad",
            "La miastenia gravis"
        ],
        correcta: 1,
        explicacion: "La SEROTONINA regula el estado de ánimo, sueño, apetito y conducta. Su deficiencia se asocia con DEPRESIÓN y ansiedad. Los antidepresivos ISRS aumentan la serotonina disponible."
    },
    {
        pregunta: "El GLUTAMATO es el principal neurotransmisor:",
        opciones: [
            "Inhibidor del SNC",
            "Del sistema nervioso autónomo simpático",
            "Excitador del SNC, también implicado en memoria y aprendizaje"
        ],
        correcta: 2,
        explicacion: "El GLUTAMATO es el principal EXCITADOR del SNC. Es fundamental para la memoria y el aprendizaje (plasticidad sináptica, potenciación a largo plazo). En exceso puede ser neurotóxico (excitotoxicidad)."
    },
    {
        pregunta: "La ACETILCOLINA es el neurotransmisor de:",
        opciones: [
            "La unión neuromuscular, el parasimpático y las sinapsis colinérgicas del SNC",
            "Únicamente el sistema nervioso autónomo simpático",
            "El sistema límbico y el control emocional"
        ],
        correcta: 0,
        explicacion: "La ACETILCOLINA actúa en: unión NEUROMUSCULAR (contrae músculo esquelético), sistema PARASIMPÁTICO, y en el SNC (memoria, atención). La miastenia gravis ataca sus receptores."
    },
    {
        pregunta: "La sinapsis ELÉCTRICA (gap junctions) se caracteriza por:",
        opciones: [
            "Ser más lenta pero más específica que la química",
            "Transferir corriente eléctrica directamente sin neurotransmisores, siendo más rápida",
            "Requerir la entrada de Ca²⁺ para funcionar"
        ],
        correcta: 1,
        explicacion: "La sinapsis ELÉCTRICA transmite la señal directamente a través de gap junctions (canales entre células). Es MÁS RÁPIDA pero menos modulable que la química. Presente en corazón y músculo liso."
    },
    {
        pregunta: "La hiperpolarización postsináptica ocurre cuando el neurotransmisor:",
        opciones: [
            "Abre canales de Na⁺, haciendo el interior más positivo",
            "Bloquea todos los canales iónicos",
            "Abre canales de Cl⁻ o K⁺, haciendo el interior más negativo"
        ],
        correcta: 2,
        explicacion: "La hiperpolarización (PPSI = potencial postsináptico inhibidor) ocurre cuando se abren canales de Cl⁻ (entra) o K⁺ (sale), haciendo el interior más negativo. Esto INHIBE la neurona, alejándola del umbral."
    }

];

console.log("✅ Evaluación Sistema Nervioso cargada:", EVALUACION_SISTEMA_NERVIOSO.length, "preguntas");
