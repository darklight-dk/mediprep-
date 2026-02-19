// ============================================
// EVALUACIÓN CONAMAT — Ciencias de la Salud y Premedicina
// Basada en reactivos de repaso pp. 622-625 y 643-646
// Unidad 1: Proceso Salud-Enfermedad (21 reactivos)
// Unidad 2: Morfofisiología del cuerpo humano (32 reactivos)
// + Preguntas ampliadas del contenido de la guía
// ============================================

const EVALUACION_CONAMAT_UNIDAD1 = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — TERMINOLOGÍA (Reactivos oficiales)
    // ══════════════════════════════════════════
    {
        pregunta: "Fernando tiene problemas para hablar y entender lo que otras personas dicen, se le ha entumecido la cara y presenta dolor de cabeza súbito y grave. El flujo sanguíneo hacia su cerebro se ha interrumpido por un coágulo. La terminología para el padecimiento de Fernando es:",
        opciones: [
            "Homeostasis",
            "Paro cardíaco",
            "Accidente cerebrovascular"
        ],
        correcta: 2,
        explicacion: "Un accidente cerebrovascular ocurre cuando se interrumpe el flujo sanguíneo hacia el cerebro debido a una hemorragia o a un coágulo, causando síntomas neurológicos como los que presenta Fernando."
    },
    {
        pregunta: "La dilatación de las arterias y la relajación del corazón para permitir que la sangre ingrese hacia las aurículas se refiere a:",
        opciones: [
            "Sístoles",
            "Diástole",
            "Estrés"
        ],
        correcta: 1,
        explicacion: "La diástole es la dilatación de las arterias y relajación del corazón que permite que la sangre ingrese hacia las aurículas. La sístole es el movimiento contrario (contracción)."
    },
    {
        pregunta: "Ricardo ha enfermado debido a una infección estomacal, por lo que presenta fiebre, debilidad, diarrea y dolor intestinal. ¿A qué elemento de la tríada ecológica hace referencia la descripción anterior?",
        opciones: [
            "Agente",
            "Huésped",
            "Ambiente"
        ],
        correcta: 1,
        explicacion: "Ricardo es el HUÉSPED: el organismo vivo que aloja al agente patógeno y que puede verse afectado por él. La infección estomacal que lo aqueja proviene del agente (microorganismo) en un determinado ambiente."
    },
    {
        pregunta: "Emanuel ha experimentado un golpe de calor, debido a que en una ceremonia cívica escolar permaneció mucho tiempo de pie, expuesto directamente a los rayos del sol. ¿Qué tipo de agente se describe?",
        opciones: [
            "Físico",
            "Químico",
            "Biológico"
        ],
        correcta: 0,
        explicacion: "Los agentes físicos incluyen temperaturas extremas y radiación solar. El calor excesivo del sol es un agente físico que provocó el golpe de calor en Emanuel."
    },
    {
        pregunta: "El doctor Martínez explica que la infección que afecta a un paciente es provocada por un organismo unicelular, sin núcleo definido y que se reproduce rápidamente por medio de la fisión binaria, por lo que recomienda un tratamiento con antibióticos. ¿A qué tipo de agente se refiere el doctor?",
        opciones: [
            "Hongo",
            "Bacteria",
            "Virus"
        ],
        correcta: 1,
        explicacion: "Las bacterias son organismos microscópicos unicelulares SIN núcleo definido (procariotas) que se multiplican por fisión binaria. Los antibióticos son efectivos contra bacterias."
    },
    {
        pregunta: "De la siguiente lista, selecciona las enfermedades transmisibles: 1. Diabetes  2. Cáncer  3. Salmonelosis  4. Varicela  5. Hipertensión  6. Pie de atleta",
        opciones: [
            "1, 2 y 3",
            "2, 3 y 4",
            "3, 4 y 6"
        ],
        correcta: 2,
        explicacion: "Las enfermedades transmisibles son causadas por agentes patógenos (virus, bacterias, hongos): Salmonelosis (bacteria), Varicela (virus), Pie de atleta (hongo). Diabetes, cáncer e hipertensión son NO transmisibles."
    },
    {
        pregunta: "Sarahí comió quesadillas en la calle, cerca de un tiradero de basura con heces fecales de animales y humanos. Existe alta probabilidad de que Sarahí haya infectado con Salmonella typhi. ¿En qué etapa del desarrollo de la enfermedad se encuentra?",
        opciones: [
            "Prepatogénico",
            "Patogénico",
            "Resolución"
        ],
        correcta: 0,
        explicacion: "Sarahí estuvo expuesta al agente patógeno pero aún no presenta síntomas. Esto corresponde a la etapa PREPATOGÉNICA (de incubación), donde el individuo aparentemente está sano pero ya entró en contacto con el agente."
    },
    {
        pregunta: "Santiago asiste a consulta y explica que presenta fiebre, tos, dolor en las articulaciones y en la cabeza. ¿En qué etapa de la historia natural de la enfermedad se encuentra Santiago?",
        opciones: [
            "Prepatogénico",
            "Patogénico",
            "Resolución"
        ],
        correcta: 1,
        explicacion: "Santiago presenta síntomas característicos de la enfermedad: fiebre, tos, dolor. Esto corresponde a la etapa PATOGÉNICA, donde el agente causal provoca modificaciones bioquímicas y funcionales que evidencian los síntomas."
    },
    {
        pregunta: "Cristina debe realizar ejercicios respiratorios inflando globos y utilizando un espirómetro. ¿En qué etapa de la historia natural de la enfermedad se encuentra?",
        opciones: [
            "Horizonte clínico",
            "Resolución",
            "Incubación"
        ],
        correcta: 1,
        explicacion: "Los ejercicios respiratorios de rehabilitación corresponden a la etapa de RESOLUCIÓN. Cristina ya superó la fase clínica y está en proceso de recuperación con posibles secuelas respiratorias que requieren rehabilitación."
    },
    {
        pregunta: "De la siguiente lista de información obtenida durante la anamnesis, ¿cuáles corresponden a SIGNOS? 1. Náuseas  2. Fiebre de 39°C  3. Dolor de cabeza  4. Presión arterial 120/80mmHg  5. Oxigenación de 96%  6. Escalofríos",
        opciones: [
            "1, 3 y 6",
            "2, 4 y 5",
            "2, 4 y 6"
        ],
        correcta: 1,
        explicacion: "Los SIGNOS son objetivos y medibles por el médico: Fiebre de 39°C (termómetro), Presión arterial 120/80mmHg (baumanómetro), Oxigenación de 96% (oxímetro). Náuseas, dolor de cabeza y escalofríos son SÍNTOMAS (subjetivos, el paciente los refiere)."
    },
    {
        pregunta: "Carolina presenta ampollas rojizas que le dan comezón, fiebre, pérdida de apetito, dolor de cabeza, cansancio y sensación de malestar general. Lo anterior representa un caso de:",
        opciones: [
            "Signos de varicela",
            "Semiología",
            "Prepatogenia"
        ],
        correcta: 1,
        explicacion: "El conjunto de signos (ampollas, fiebre medida) y síntomas (comezón, pérdida de apetito, cansancio, malestar) que presenta Carolina es el objeto de estudio de la SEMIOLOGÍA CLÍNICA, que identifica y agrupa las manifestaciones patológicas."
    },
    {
        pregunta: "Relaciona la enfermedad con el agente causal: 1.Cólera  2.Enfermedad del sueño  3.Neumonía  4.Tifoidea | a. Streptococcus pneumoniae  b. Trypanosoma brucei  c. Vibrio cholerae  d. Salmonella typhi",
        opciones: [
            "1c, 2b, 3a, 4d",
            "1c, 2b, 3d, 4a",
            "1b, 2c, 3a, 4d"
        ],
        correcta: 0,
        explicacion: "Cólera → Vibrio cholerae; Enfermedad del sueño → Trypanosoma brucei (protozoo); Neumonía → Streptococcus pneumoniae (bacteria); Tifoidea → Salmonella typhi."
    },
    {
        pregunta: "Este tipo de muestras se requieren para análisis sanguíneos:",
        opciones: [
            "Urocultivos",
            "Hemocultivos",
            "Expectoración"
        ],
        correcta: 1,
        explicacion: "Los HEMOCULTIVOS requieren muestras sanguíneas y se utilizan para detectar presencia de bacterias aerobias, anaerobias y hongos en la sangre (bacteriemia)."
    },
    {
        pregunta: "En este nivel de prevención de la salud, se utilizan campañas informativas, se proporciona educación para la salud y se promueve la no automedicación:",
        opciones: [
            "Primario",
            "Secundario",
            "Terciario"
        ],
        correcta: 0,
        explicacion: "La prevención PRIMARIA se basa en la promoción de la salud mediante campañas informativas, educación para la salud y evitar la automedicación. Busca bloquear el contacto del individuo con el agente patógeno."
    },
    {
        pregunta: "Es el material u organismo que contiene parásitos u otros microorganismos, en un medio adecuado para sobrevivir y reproducirse, representando una fuente de infección para los organismos:",
        opciones: [
            "Huésped",
            "Comensal",
            "Reservorio"
        ],
        correcta: 2,
        explicacion: "El RESERVORIO es cualquier organismo o material que contiene parásitos u otros microorganismos, donde pueden sobrevivir y reproducirse, representando una fuente de infección para el huésped."
    },
    {
        pregunta: "Cuando un parásito invade a otro organismo, pero éste no manifiesta ningún síntoma; este último es un:",
        opciones: [
            "Enfermo",
            "Portador",
            "Patógeno"
        ],
        correcta: 1,
        explicacion: "La infección parasitaria se presenta cuando el hospedero presenta parásitos que no le provocan ninguna enfermedad, constituyéndose en un PORTADOR sano. La enfermedad parasitaria ocurre cuando sí hay sintomatología."
    },
    {
        pregunta: "En esta etapa del desarrollo de un medicamento, se realizan tamizajes y bioensayos:",
        opciones: [
            "Preclínico",
            "Clínico",
            "Ensayo"
        ],
        correcta: 0,
        explicacion: "Los estudios PRECLÍNICOS incluyen el tamizaje (detección de acciones farmacológicas específicas) y el bioensayo. Son técnicas cualitativas realizadas antes de la fase clínica, generalmente en animales."
    },
    {
        pregunta: "Relaciona los tipos de fármacos con el ejemplo correspondiente: 1.Analgésicos  2.Antialérgicos  3.Laxantes  4.Antipiréticos | A.Ciruelax  B.Ibuprofeno  C.Acetaminofén  D.Desloratadina",
        opciones: [
            "1C, 2D, 3A, 4B",
            "1C, 2A, 3D, 4B",
            "1D, 2A, 3B, 4C"
        ],
        correcta: 0,
        explicacion: "Analgésicos → Acetaminofén (alivia dolor); Antialérgicos → Desloratadina (antihistamínico); Laxantes → Ciruelax (aumenta movimiento intestinal); Antipiréticos → Ibuprofeno (reduce fiebre). También el ibuprofeno es analgésico/antipirético pero aquí la clave es 4B."
    },
    {
        pregunta: "En las siguientes opciones se muestran conductas de riesgo, EXCEPTO en:",
        opciones: [
            "Actividad sexual precoz",
            "Mala nutrición",
            "Obesidad"
        ],
        correcta: 2,
        explicacion: "La obesidad es el RESULTADO de una conducta de riesgo (mala nutrición, sedentarismo), no la conducta en sí. La actividad sexual precoz y la mala nutrición SÍ son conductas de riesgo que pueden llevar a problemas de salud."
    },
    {
        pregunta: "De la siguiente lista, selecciona las situaciones de emergencia: 1.Incendios  2.Sismos  3.Cefalea  4.Tineapedis  5.Tsunami  6.Anquilostomosis",
        opciones: [
            "2, 4 y 6",
            "1, 3 y 5",
            "1, 2 y 5"
        ],
        correcta: 2,
        explicacion: "Las situaciones de emergencia son sucesos no controlados con riesgo considerable: Incendios, Sismos y Tsunamis. La cefalea es un síntoma, Tineapedis y Anquilostomosis son enfermedades parasitarias."
    },
    {
        pregunta: "Un choque vehicular en una autopista que ocasiona muertes y heridos es un ejemplo de:",
        opciones: [
            "Desastre socio-natural",
            "Desastre antropológico",
            "Desastre urbano"
        ],
        correcta: 1,
        explicacion: "Los desastres ANTROPOLÓGICOS son causados por acción humana. Un accidente vehicular es un accidente provocado por imprevisión o incapacidad humana en el uso de la tecnología, clasificado como desastre antropológico y social."
    },

];

const EVALUACION_CONAMAT_UNIDAD2 = [

    // ══════════════════════════════════════════
    // BLOQUE 2 — MORFOFISIOLOGÍA (Reactivos oficiales)
    // ══════════════════════════════════════════
    {
        pregunta: "¿En cuál cavidad se ubica la vejiga urinaria?",
        opciones: [
            "Torácica",
            "Abdominal",
            "Pélvica"
        ],
        correcta: 2,
        explicacion: "La cavidad PÉLVICA se ubica debajo de la cavidad abdominal y contiene la vejiga urinaria, parte de los órganos del aparato reproductor como el útero y los ovarios."
    },
    {
        pregunta: "La posición _______ es la postura en la cual el individuo se encuentra de pie frente a un observador, con la cabeza _______, manteniendo la vista al frente con las extremidades _______ y ubicadas próximas al tronco con las palmas de la mano dirigidas hacia el frente.",
        opciones: [
            "Sagital – pendiente – recogidas",
            "Anatómica – erguida – pendientes",
            "Anatómica – erguida – recogidas"
        ],
        correcta: 1,
        explicacion: "La POSICIÓN ANATÓMICA: individuo de pie, frente al observador, cabeza erguida, vista al frente, extremidades superiores en posición PENDIENTE (colgando) con palmas hacia el frente, pies paralelos."
    },
    {
        pregunta: "La cavidad ventral comprende a las siguientes cavidades:",
        opciones: [
            "Vertebral y craneal",
            "Torácica, abdominal y pélvica",
            "Vertebral, craneal y torácica"
        ],
        correcta: 1,
        explicacion: "La cavidad VENTRAL comprende las cavidades torácica (pulmones y corazón), abdominal (estómago, intestinos, hígado, etc.) y pélvica (vejiga, órganos reproductores)."
    },
    {
        pregunta: "La siguiente imagen muestra al plano: [imagen de un plano horizontal que corta el cuerpo por la mitad]",
        opciones: [
            "Frontal",
            "Transversal",
            "Sagital"
        ],
        correcta: 1,
        explicacion: "El plano TRANSVERSAL (también llamado horizontal o axial) divide al cuerpo en mitad superior o cefálica y en la mitad inferior o caudal."
    },
    {
        pregunta: "¿Cuál es la descripción correcta de la ubicación del páncreas?",
        opciones: [
            "Se ubica en la parte posterior del estómago en la cavidad abdominal y en posición transversal, próximo a la línea media en la mitad cefálica y en la región sagital izquierda",
            "Se ubica en la parte anterior del estómago, cavidad abdominal y en posición transversal, superior a la línea media, en la mitad caudal",
            "Es un órgano medial, posterior al esternón, anterior a la columna vertebral cuyo eje se dirige hacia la derecha del plano sagital"
        ],
        correcta: 0,
        explicacion: "El páncreas se ubica en la parte POSTERIOR del estómago, en la cavidad abdominal, en posición transversal, próximo a la línea media (medial) en la mitad cefálica y en la región sagital izquierda."
    },
    {
        pregunta: "Nivel de organización estructural conformado por células similares con una función específica:",
        opciones: [
            "Celular",
            "Tisular",
            "Órgano"
        ],
        correcta: 1,
        explicacion: "El nivel TISULAR comprende la organización e interacción de células con morfología y fisiología similares que realizan una función común. El tejido está entre la célula y el órgano."
    },
    {
        pregunta: "Tejido formado por células con una alta concentración de sodio y potasio, capaces de conducir impulsos eléctricos:",
        opciones: [
            "Muscular",
            "Nervioso",
            "Conjuntivo"
        ],
        correcta: 1,
        explicacion: "El tejido NERVIOSO tiene como unidad estructural la neurona, cuyas funciones son recibir estímulos, transmitir sensaciones y percepciones mediante impulsos eléctricos (que dependen de los gradientes de Na⁺ y K⁺)."
    },
    {
        pregunta: "Tejido constituido por células que se contraen involuntariamente en movimientos lentos:",
        opciones: [
            "Muscular estriado",
            "Muscular liso",
            "Muscular cardíaco"
        ],
        correcta: 1,
        explicacion: "El tejido MUSCULAR LISO está formado por células que se contraen de manera INVOLUNTARIA, con movimientos lentos. Ejemplo: los músculos del intestino (peristaltismo)."
    },
    {
        pregunta: "Son las partes principales que constituyen a una neurona:",
        opciones: [
            "Dendritas, soma, núcleo y axón",
            "Pie, pseudópodo, cilios y flagelos",
            "Axón, dendrita, núcleo, pseudópodo y soma"
        ],
        correcta: 0,
        explicacion: "Las partes principales de la neurona son: DENDRITAS (reciben estímulos), SOMA o cuerpo celular (contiene el núcleo), AXÓN (conduce los impulsos) y PIE (terminal del axón). La opción A es la más completa y correcta."
    },
    {
        pregunta: "Órgano que actúa como reservorio temporal del bolo alimenticio y que consta de tres capas musculares: longitudinal, circular y oblicua:",
        opciones: [
            "Riñón",
            "Intestino",
            "Estómago"
        ],
        correcta: 2,
        explicacion: "El ESTÓMAGO forma parte del sistema digestivo, es un reservorio temporal del bolo alimenticio hasta que se procede a su tránsito hacia el intestino. Su pared gástrica tiene tres capas musculares: longitudinal, circular y oblicua."
    },
    {
        pregunta: "Prolongaciones de los bronquios asociados con vasos sanguíneos y nervios que penetran en los pulmones, cuyo diámetro aproximado es de 1mm:",
        opciones: [
            "Álveolos",
            "Bronquiolos",
            "Pleuras"
        ],
        correcta: 1,
        explicacion: "Los BRONQUIOLOS son las ramificaciones de los bronquios, de solo un milímetro de diámetro, que penetran en los pulmones junto con vasos sanguíneos y nervios. A su vez se dividen en alvéolos."
    },
    {
        pregunta: "Neurotransmisor responsable de la sinapsis neuronal:",
        opciones: [
            "Mielina",
            "Epinefrina",
            "Acetilcolina"
        ],
        correcta: 0,
        explicacion: "Según la guía CONAMAT, la MIELINA es el medio por el cual se transmiten los neurotransmisores en la sinapsis neuronal. La mielina recubre los axones y facilita la transmisión de impulsos. (Nota: en sentido estricto los principales neurotransmisores son acetilcolina, noradrenalina, etc.)"
    },
    {
        pregunta: "Regula funciones como el pensamiento abstracto, juicio, capacidad de concentración y actividades motoras:",
        opciones: [
            "Lóbulo frontal",
            "Lóbulo parietal",
            "Lóbulo occipital"
        ],
        correcta: 0,
        explicacion: "El LÓBULO FRONTAL comprende toda la parte delantera del cerebro. Desde aquí se regulan funciones como el pensamiento abstracto, juicio, capacidad de concentración y actividades motoras y asociativas."
    },
    {
        pregunta: "Glándula que produce las hormonas prolactina, GH y oxitocina, entre otras:",
        opciones: [
            "Suprarrenal",
            "Pineal",
            "Hipófisis"
        ],
        correcta: 2,
        explicacion: "La HIPÓFISIS (o glándula pituitaria) es la glándula maestra que produce: Hormona del Crecimiento (GH), Prolactina (PRL), Oxitocina, TSH, FSH, LH, ACTH, entre otras. Controla al resto de las glándulas."
    },
    {
        pregunta: "Producen enzimas digestivas y hormonas como la insulina y el glucagón:",
        opciones: [
            "Hipófisis",
            "Islotes de Langerhans",
            "Glándulas adrenales"
        ],
        correcta: 1,
        explicacion: "Los ISLOTES DE LANGERHANS son las glándulas pancreáticas que secretan enzimas digestivas y hormonas: insulina (células beta), glucagón (células alfa) y somatostatina (células delta)."
    },
    {
        pregunta: "Partes del corazón que impulsan la sangre hacia el cuerpo:",
        opciones: [
            "Aurículas",
            "Arterias",
            "Ventrículos"
        ],
        correcta: 2,
        explicacion: "Los VENTRÍCULOS son las cámaras inferiores del corazón que impulsan la sangre: el ventrículo derecho la envía a los pulmones, el izquierdo la impulsa hacia todo el cuerpo a través de la aorta."
    },
    {
        pregunta: "¿Cuál es el tipo sanguíneo del receptor universal en una transfusión sanguínea?",
        opciones: [
            "AB-",
            "AB+",
            "A+"
        ],
        correcta: 1,
        explicacion: "El tipo AB+ es el RECEPTOR UNIVERSAL porque puede recibir sangre de cualquier grupo. El donador universal es O-. AB+ puede recibir todos los tipos (O-, O+, A-, A+, B-, B+, AB-, AB+)."
    },
    {
        pregunta: "Los riñones humanos están formados por unidades celulares llamadas:",
        opciones: [
            "Nefrones",
            "Neuronas",
            "Axones"
        ],
        correcta: 0,
        explicacion: "La unidad anatomofuncional del riñón se llama NEFRONA (también escrito nefrón). Las nefronas regulan la concentración, el volumen y el pH de la sangre, eliminando sustancias de desecho formando la orina."
    },
    {
        pregunta: "Parte del oído interno que limita con el oído medio:",
        opciones: [
            "Huesecillos",
            "Yunque",
            "Ventana oval"
        ],
        correcta: 2,
        explicacion: "La VENTANA OVAL es la estructura que limita el oído medio con el oído interno. El estribo (último huesecillo del oído medio) se conecta directamente con la ventana oval para transmitir las vibraciones."
    },
    {
        pregunta: "Terminaciones nerviosas ubicadas en la zona profunda de la piel, en dedos de manos y pies, que detectan presiones y deformaciones de la piel:",
        opciones: [
            "Libres",
            "Corpúsculos de Meissner",
            "Corpúsculos de Paccini"
        ],
        correcta: 2,
        explicacion: "Los CORPÚSCULOS DE PACCINI están en la zona profunda de la piel, en los dedos de las manos y de los pies. Son poco abundantes y detectan presiones y deformaciones de la piel; sus estímulos duran poco."
    },
    {
        pregunta: "Órganos accesorios del aparato digestivo:",
        opciones: [
            "Estómago, páncreas y colon transverso",
            "Hígado y páncreas",
            "Apéndice e intestino delgado"
        ],
        correcta: 1,
        explicacion: "El HÍGADO y el PÁNCREAS son los principales órganos accesorios del aparato digestivo. El hígado produce bilis para emulsionar grasas; el páncreas produce enzimas digestivas (lipasa, amilasa, proteasas) y hormonas."
    },
    {
        pregunta: "Es la enzima que se encarga de descomponer a las proteínas en el aparato digestivo:",
        opciones: [
            "Lipasa",
            "Amilasa",
            "Pepsina"
        ],
        correcta: 2,
        explicacion: "La PEPSINA es la enzima producida por el estómago que descompone las proteínas. La lipasa descompone las grasas y la amilasa descompone el almidón (carbohidratos)."
    },
    {
        pregunta: "La función de este sistema es la de realizar el intercambio de oxígeno y de dióxido de carbono a través de la sangre:",
        opciones: [
            "Circulatorio",
            "Linfático",
            "Respiratorio"
        ],
        correcta: 2,
        explicacion: "El sistema RESPIRATORIO lleva a cabo el intercambio de gases: el O₂ del aire pasa a la sangre y el CO₂ de la sangre pasa al aire. Este intercambio ocurre específicamente en los alvéolos pulmonares."
    },
    {
        pregunta: "Sistema que permite percibir los estímulos del medio ambiente y generar una respuesta:",
        opciones: [
            "Endócrino",
            "Nervioso",
            "Circulatorio"
        ],
        correcta: 1,
        explicacion: "El sistema NERVIOSO percibe los cambios del interior y exterior del organismo a través de receptores (termorreceptores, electrorreceptores, fotorreceptores), los interpreta y genera respuestas adecuadas."
    },
    {
        pregunta: "Controla el funcionamiento del corazón, sistema respiratorio, reflejos de deglución, tos, hipo, parpadeo, etcétera:",
        opciones: [
            "Tálamo",
            "Hipotálamo",
            "Bulbo raquídeo"
        ],
        correcta: 2,
        explicacion: "El BULBO RAQUÍDEO contiene los centros cardíacos que regulan el funcionamiento del corazón, el sistema respiratorio, vasoconstricción, e interviene en los reflejos de deglución, tos, hipo, parpadeo y estornudo."
    },
    {
        pregunta: "Sus funciones permiten reconocer tamaño, forma, peso y textura; comprende los centros de control del área visual, lenguaje, inteligencia, memoria, juicio, etcétera:",
        opciones: [
            "Cerebro",
            "Hipotálamo",
            "Tálamo"
        ],
        correcta: 0,
        explicacion: "El CEREBRO permite reconocer tamaño, forma, peso, textura de los objetos, integra los estímulos sensitivos, y controla el área visual, auditiva, olfativa, gustativa, lenguaje, inteligencia, personalidad, memoria y juicio."
    },
    {
        pregunta: "Sistema que controla al organismo mediante hormonas:",
        opciones: [
            "Linfático",
            "Endócrino",
            "Circulatorio"
        ],
        correcta: 1,
        explicacion: "El sistema ENDÓCRINO está formado por glándulas que producen hormonas. Las hormonas participan junto con el sistema nervioso en la regulación y coordinación de las funciones del organismo."
    },
    {
        pregunta: "Glándula encargada de la producción de hormonas que regulan el aparato inmune:",
        opciones: [
            "Tiroides",
            "Timo",
            "Paratiroides"
        ],
        correcta: 1,
        explicacion: "El TIMO produce células linfoides que al madurar forman los linfocitos, y regula el aparato inmune por medio de diversas hormonas como timosina y timopoyetina."
    },
    {
        pregunta: "¿Qué parte del aparato reproductor masculino se corta en la vasectomía?",
        opciones: [
            "Conducto deferente",
            "Túbulos seminíferos",
            "Epidídimo"
        ],
        correcta: 0,
        explicacion: "En la vasectomía se cortan los CONDUCTOS DEFERENTES, que son los conductos que transportan los espermatozoides desde el epidídimo hacia las glándulas accesorias. Al cortarlos, el semen no contiene espermatozoides."
    },
    {
        pregunta: "Células del sistema circulatorio cuya función es la formación de coágulos:",
        opciones: [
            "Leucocitos",
            "Plasma",
            "Plaquetas"
        ],
        correcta: 2,
        explicacion: "Las PLAQUETAS (trombocitos) tienen la función de ayudar a la formación del coágulo cuando se rompen o lesionan los vasos sanguíneos, iniciando el proceso de coagulación para detener el sangrado."
    },
    {
        pregunta: "En promedio, ¿cuántos huesos forman el sistema óseo?",
        opciones: [
            "189",
            "206",
            "226"
        ],
        correcta: 1,
        explicacion: "El esqueleto adulto está constituido por 206 huesos, divididos en esqueleto axial (80 huesos) y esqueleto apendicular (126 huesos)."
    },
    {
        pregunta: "¿Cuál es el orden correcto de los huesos que forman la columna vertebral?",
        opciones: [
            "Cervicales, dorsales, lumbares, sacro y coxis",
            "Dorsales, cervicales, lumbares, sacro y coxis",
            "Cervicales, lumbares, dorsales, sacro y coxis"
        ],
        correcta: 0,
        explicacion: "La columna vertebral de arriba hacia abajo: 1. Cervicales (cuello), 2. Dorsales (tórax), 3. Lumbares (región lumbar), 4. Sacro, 5. Coxis."
    },

];

// Combinación de ambas unidades para examen completo
const EVALUACION_CONAMAT_COMPLETO = [
    ...EVALUACION_CONAMAT_UNIDAD1,
    ...EVALUACION_CONAMAT_UNIDAD2
];

if (typeof module !== 'undefined') {
    module.exports = { EVALUACION_CONAMAT_UNIDAD1, EVALUACION_CONAMAT_UNIDAD2, EVALUACION_CONAMAT_COMPLETO };
}
