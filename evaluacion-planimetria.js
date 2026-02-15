// ============================================
// EVALUACIÓN: PLANIMETRÍA ANATÓMICA
// 55 preguntas — basadas en planimetria.js
// Temas: Posición estándar, Planos anatómicos,
//        Ejes y movimientos, Términos direccionales,
//        Términos de proximidad, Cavidades corporales
// ============================================

const EVALUACION_PLANIMETRIA = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — POSICIÓN ANATÓMICA ESTÁNDAR (8)
    // ══════════════════════════════════════════
    {
        pregunta: "La posición anatómica estándar se describe como:",
        opciones: [
            "Persona acostada boca arriba con brazos a los lados",
            "Persona de pie, mirando al frente, brazos a los lados con palmas hacia adelante y pies juntos",
            "Persona sentada con las manos sobre las rodillas"
        ],
        correcta: 1,
        explicacion: "Posición anatómica estándar: bipedestación (de pie), mirando al frente, brazos extendidos a los lados con palmas en supinación (hacia adelante), pies juntos y paralelos."
    },
    {
        pregunta: "¿Por qué es fundamental la posición anatómica estándar?",
        opciones: [
            "Porque es la posición más cómoda para el paciente",
            "Porque permite comunicación precisa y universal entre profesionales de salud",
            "Porque facilita la aplicación de medicamentos intravenosos"
        ],
        correcta: 1,
        explicacion: "Sin esta referencia, términos como 'arriba', 'abajo', 'adelante' serían ambiguos según la posición del paciente. La posición estándar garantiza comunicación universal entre médicos de todo el mundo."
    },
    {
        pregunta: "En la posición anatómica estándar, las palmas de las manos están orientadas:",
        opciones: [
            "Hacia los muslos",
            "Hacia atrás (pronación)",
            "Hacia adelante (supinación)"
        ],
        correcta: 2,
        explicacion: "Las palmas apuntan hacia adelante (supinación). Esto es fundamental porque cambia la orientación de los términos medial/lateral en el antebrazo."
    },
    {
        pregunta: "La posición de decúbito PRONO es:",
        opciones: [
            "Acostado boca arriba (de espaldas)",
            "Acostado boca abajo",
            "Acostado sobre un costado"
        ],
        correcta: 1,
        explicacion: "Decúbito prono = boca abajo. Decúbito supino = boca arriba. Decúbito lateral = sobre el costado."
    },
    {
        pregunta: "La posición de decúbito SUPINO es:",
        opciones: [
            "Acostado boca arriba",
            "Acostado boca abajo",
            "Sentado con las piernas elevadas"
        ],
        correcta: 0,
        explicacion: "Decúbito supino = de espaldas, boca arriba. Es la posición más común para exploración física y cirugía abdominal."
    },
    {
        pregunta: "¿Las descripciones anatómicas se asumen en posición estándar aunque el paciente esté acostado?",
        opciones: [
            "No, cambian según la posición real del paciente",
            "Solo cuando el paciente está en decúbito supino",
            "Sí, siempre se asume la posición estándar independientemente de la posición real"
        ],
        correcta: 2,
        explicacion: "SIEMPRE se asume la posición anatómica estándar, independientemente de cómo esté el paciente. Eso hace la comunicación consistente y universal."
    },
    {
        pregunta: "La bipedestación se refiere a:",
        opciones: [
            "Acostado con dos almohadas",
            "De pie, en posición vertical",
            "Sentado con los pies apoyados"
        ],
        correcta: 1,
        explicacion: "Bipedestación = posición erecta sobre dos pies. Es la base de la posición anatómica estándar."
    },
    {
        pregunta: "La sedestación en anatomía se refiere a:",
        opciones: [
            "Posición de pie con sedación",
            "Posición sentada",
            "Decúbito lateral"
        ],
        correcta: 1,
        explicacion: "Sedestación = posición sentada. Es una posición derivada de la posición estándar usada en exploración clínica."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — PLANOS ANATÓMICOS (12)
    // ══════════════════════════════════════════
    {
        pregunta: "El plano SAGITAL divide el cuerpo en:",
        opciones: [
            "Superior e inferior",
            "Anterior y posterior",
            "Derecho e izquierdo"
        ],
        correcta: 2,
        explicacion: "El plano sagital (o mediano) divide el cuerpo en mitades derecha e izquierda. Corre verticalmente de adelante hacia atrás."
    },
    {
        pregunta: "El plano CORONAL (frontal) divide el cuerpo en:",
        opciones: [
            "Derecho e izquierdo",
            "Anterior (ventral) y posterior (dorsal)",
            "Superior e inferior"
        ],
        correcta: 1,
        explicacion: "El plano coronal divide en parte ANTERIOR (frente/ventral) y POSTERIOR (espalda/dorsal). Su nombre viene de 'corona', pues corre paralelo a la frente."
    },
    {
        pregunta: "El plano TRANSVERSAL (horizontal) divide el cuerpo en:",
        opciones: [
            "Derecho e izquierdo",
            "Anterior y posterior",
            "Superior (craneal) e inferior (caudal)"
        ],
        correcta: 2,
        explicacion: "El plano transversal (axial u horizontal) divide en parte SUPERIOR (arriba/craneal) e INFERIOR (abajo/caudal). Es el plano que usan TAC y resonancias magnéticas."
    },
    {
        pregunta: "Un corte tomográfico (TAC) típico es paralelo al plano:",
        opciones: [
            "Sagital",
            "Coronal",
            "Transversal (axial)"
        ],
        correcta: 2,
        explicacion: "Las imágenes de TAC estándar son cortes TRANSVERSALES (axiales). Por eso se llaman imágenes axiales. También pueden hacerse cortes coronales y sagitales con reconstrucción."
    },
    {
        pregunta: "El plano sagital MEDIO se diferencia de un plano parasagital porque:",
        opciones: [
            "El sagital medio divide el cuerpo en mitades exactamente simétricas; los parasagitales son paralelos pero descentrados",
            "El sagital medio es horizontal y el parasagital es vertical",
            "No hay diferencia, son el mismo plano"
        ],
        correcta: 0,
        explicacion: "El plano sagital medio (o mediosagital) pasa exactamente por la línea media del cuerpo dividiéndolo en mitades iguales. Los parasagitales son paralelos pero no pasan por el centro."
    },
    {
        pregunta: "¿Qué plano separa la cara anterior del abdomen de la columna vertebral?",
        opciones: [
            "Plano sagital",
            "Plano transversal",
            "Plano coronal"
        ],
        correcta: 2,
        explicacion: "El plano CORONAL separa la parte anterior del cuerpo de la posterior. En el abdomen, separaría la pared anterior de la columna vertebral (posterior)."
    },
    {
        pregunta: "Un plano que NO es paralelo a ninguno de los tres planos principales se llama:",
        opciones: [
            "Plano medial",
            "Plano oblicuo",
            "Plano transverso"
        ],
        correcta: 1,
        explicacion: "Los planos OBLICUOS son aquellos que no son paralelos a los planos sagital, coronal ni transversal. Se usan en imagen médica cuando una estructura no está alineada con los planos estándar."
    },
    {
        pregunta: "La mnemotecnia SCT para los planos anatómicos significa:",
        opciones: [
            "Superior-Caudal-Transversal",
            "Sagital (D/I) · Coronal (A/P) · Transversal (Sup/Inf)",
            "Superficial-Central-Terminal"
        ],
        correcta: 1,
        explicacion: "SCT: Sagital divide en Derecho/Izquierdo · Coronal divide en Anterior/Posterior · Transversal divide en Superior/Inferior."
    },
    {
        pregunta: "El eje que es perpendicular al plano sagital es el eje:",
        opciones: [
            "Longitudinal",
            "Anteroposterior",
            "Mediolateral"
        ],
        correcta: 2,
        explicacion: "El eje MEDIOLATERAL (de un lado al otro) es perpendicular al plano sagital. Sobre este eje ocurren movimientos de flexión y extensión."
    },
    {
        pregunta: "Sobre el eje LONGITUDINAL (vertical) ocurre el movimiento de:",
        opciones: [
            "Flexión y extensión",
            "Abducción y aducción",
            "Rotación"
        ],
        correcta: 2,
        explicacion: "El eje longitudinal corre de arriba hacia abajo y es perpendicular al plano transversal. Sobre este eje ocurren movimientos de ROTACIÓN (girar la cabeza, rotación interna/externa)."
    },
    {
        pregunta: "La abducción del hombro ocurre en el plano:",
        opciones: [
            "Sagital, sobre el eje mediolateral",
            "Coronal, sobre el eje anteroposterior",
            "Transversal, sobre el eje longitudinal"
        ],
        correcta: 1,
        explicacion: "La ABDUCCIÓN (alejar el brazo del cuerpo lateralmente) ocurre en el plano CORONAL, sobre el eje ANTEROPOSTERIOR."
    },
    {
        pregunta: "La flexión del codo ocurre en el plano:",
        opciones: [
            "Sagital, sobre el eje mediolateral",
            "Coronal, sobre el eje anteroposterior",
            "Transversal, sobre el eje longitudinal"
        ],
        correcta: 0,
        explicacion: "La FLEXIÓN del codo ocurre en el plano SAGITAL, sobre el eje MEDIOLATERAL. El mismo plano que la extensión."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — MOVIMIENTOS ARTICULARES (7)
    // ══════════════════════════════════════════
    {
        pregunta: "La FLEXIÓN articular se define como:",
        opciones: [
            "Aumentar el ángulo entre dos huesos",
            "Disminuir el ángulo entre dos huesos",
            "Girar un segmento sobre su propio eje"
        ],
        correcta: 1,
        explicacion: "FLEXIÓN = disminuye el ángulo articular. Por ejemplo, doblar el codo reduce el ángulo entre el antebrazo y el brazo."
    },
    {
        pregunta: "La ABDUCCIÓN es el movimiento que:",
        opciones: [
            "Acerca el segmento a la línea media",
            "Aleja el segmento de la línea media",
            "Rota el segmento medialmente"
        ],
        correcta: 1,
        explicacion: "ABDUCCIÓN = alejarse de la línea media. AB-ducción = alejarse. Opuesto: AD-ducción = acercarse (a la línea media)."
    },
    {
        pregunta: "La PRONACIÓN del antebrazo resulta en:",
        opciones: [
            "Palma mirando hacia arriba",
            "Palma mirando hacia abajo",
            "Flexión del codo a 90°"
        ],
        correcta: 1,
        explicacion: "PRONACIÓN = girar el antebrazo de modo que la palma quede hacia abajo. SUPINACIÓN = palma hacia arriba (como sosteniendo una sopa)."
    },
    {
        pregunta: "La CIRCUNDUCCIÓN es:",
        opciones: [
            "Un giro de 360° sobre el eje longitudinal",
            "La combinación de flexión, extensión, abducción y aducción en secuencia",
            "El movimiento exclusivo de la rodilla"
        ],
        correcta: 1,
        explicacion: "CIRCUNDUCCIÓN = combinación secuencial de flexión + abducción + extensión + aducción. Traza un cono. Posible en hombro, cadera y muñeca."
    },
    {
        pregunta: "Elevar el talón del suelo manteniendo los dedos apoyados es un ejemplo de:",
        opciones: [
            "Dorsiflexión",
            "Flexión plantar",
            "Inversión"
        ],
        correcta: 1,
        explicacion: "FLEXIÓN PLANTAR = apuntar los dedos del pie hacia abajo (como en puntillas). DORSIFLEXIÓN = acercar el dorso del pie a la pierna."
    },
    {
        pregunta: "La rotación INTERNA del hombro dirige la palma:",
        opciones: [
            "Hacia afuera del cuerpo",
            "Hacia el cuerpo / hacia atrás",
            "Hacia arriba"
        ],
        correcta: 1,
        explicacion: "Rotación INTERNA (medial) gira el hueso hacia la línea media. En el hombro, lleva la palma hacia el cuerpo. Rotación EXTERNA (lateral) lleva la palma hacia afuera."
    },
    {
        pregunta: "¿Cuál movimiento tiene como opuesto la extensión?",
        opciones: [
            "Abducción",
            "Rotación",
            "Flexión"
        ],
        correcta: 2,
        explicacion: "FLEXIÓN y EXTENSIÓN son movimientos opuestos que ocurren en el plano sagital sobre el eje mediolateral. Flexión disminuye el ángulo; extensión lo aumenta."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — TÉRMINOS DIRECCIONALES (12)
    // ══════════════════════════════════════════
    {
        pregunta: "El término SUPERIOR (craneal) significa:",
        opciones: [
            "Hacia los pies",
            "Hacia la cabeza / arriba",
            "Hacia la espalda"
        ],
        correcta: 1,
        explicacion: "SUPERIOR (craneal/cefálico) = hacia la cabeza o arriba. El corazón es SUPERIOR al hígado."
    },
    {
        pregunta: "El término INFERIOR (caudal) significa:",
        opciones: [
            "Hacia la cabeza",
            "Hacia el frente",
            "Hacia los pies / abajo"
        ],
        correcta: 2,
        explicacion: "INFERIOR (caudal) = hacia los pies o abajo. El estómago es INFERIOR al corazón."
    },
    {
        pregunta: "ANTERIOR (ventral) significa:",
        opciones: [
            "Hacia la espalda",
            "Hacia el frente del cuerpo",
            "Hacia la cabeza"
        ],
        correcta: 1,
        explicacion: "ANTERIOR (ventral) = hacia el frente. El esternón es ANTERIOR a la columna vertebral."
    },
    {
        pregunta: "POSTERIOR (dorsal) significa:",
        opciones: [
            "Hacia el frente",
            "Hacia los pies",
            "Hacia la espalda"
        ],
        correcta: 2,
        explicacion: "POSTERIOR (dorsal) = hacia la espalda. La columna vertebral es POSTERIOR al esternón."
    },
    {
        pregunta: "MEDIAL significa:",
        opciones: [
            "Alejado de la línea media del cuerpo",
            "Hacia la línea media del cuerpo",
            "Hacia los pies"
        ],
        correcta: 1,
        explicacion: "MEDIAL = hacia la línea media. La nariz es MEDIAL a los ojos. Los incisivos son MEDIALES a los molares."
    },
    {
        pregunta: "LATERAL significa:",
        opciones: [
            "Hacia la línea media",
            "Alejado de la línea media",
            "Hacia el frente"
        ],
        correcta: 1,
        explicacion: "LATERAL = alejado de la línea media. Los oídos son LATERALES a la nariz. El pulgar es LATERAL al meñique."
    },
    {
        pregunta: "El esternón es _____ a la columna vertebral:",
        opciones: [
            "Superior",
            "Posterior",
            "Anterior"
        ],
        correcta: 2,
        explicacion: "El esternón está en la parte ANTERIOR (frente) del tórax, mientras que la columna está en la parte POSTERIOR (espalda). Esternón es ANTERIOR a la columna."
    },
    {
        pregunta: "El corazón es _____ al estómago:",
        opciones: [
            "Inferior",
            "Superior",
            "Lateral"
        ],
        correcta: 1,
        explicacion: "El corazón está más arriba (en el tórax) que el estómago (en el abdomen). Por tanto, el corazón es SUPERIOR al estómago."
    },
    {
        pregunta: "La nariz es _____ a los ojos:",
        opciones: [
            "Lateral",
            "Posterior",
            "Medial"
        ],
        correcta: 2,
        explicacion: "La nariz está en la línea media del rostro, mientras que los ojos están a los lados. La nariz es MEDIAL a los ojos."
    },
    {
        pregunta: "El pulgar (dedo 1) es _____ al meñique (dedo 5):",
        opciones: [
            "Medial",
            "Lateral",
            "Posterior"
        ],
        correcta: 1,
        explicacion: "Con las palmas hacia adelante (posición estándar), el pulgar está más alejado de la línea media que el meñique. El pulgar es LATERAL al meñique."
    },
    {
        pregunta: "Los términos superior/inferior, anterior/posterior y medial/lateral son:",
        opciones: [
            "Términos absolutos que no cambian según la referencia",
            "Términos relativos que dependen de la estructura que se compara",
            "Solo aplicables en el tronco, no en extremidades"
        ],
        correcta: 1,
        explicacion: "Son términos RELATIVOS. El corazón es superior al hígado, pero inferior a los pulmones. Siempre depende de qué estructuras se comparan entre sí."
    },
    {
        pregunta: "El diafragma es _____ al corazón y _____ al hígado:",
        opciones: [
            "Superior / Superior",
            "Inferior / Superior",
            "Anterior / Posterior"
        ],
        correcta: 1,
        explicacion: "El diafragma está debajo del corazón (INFERIOR al corazón) y encima del hígado (SUPERIOR al hígado). Esto ilustra perfectamente la relatividad de los términos."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — TÉRMINOS DE PROXIMIDAD (10)
    // ══════════════════════════════════════════
    {
        pregunta: "PROXIMAL significa:",
        opciones: [
            "Cerca de la superficie del cuerpo",
            "Cerca del punto de unión con el tronco",
            "Del mismo lado del cuerpo"
        ],
        correcta: 1,
        explicacion: "PROXIMAL = cerca del punto de unión con el tronco. El hombro es PROXIMAL al codo; el codo es PROXIMAL a la muñeca."
    },
    {
        pregunta: "DISTAL significa:",
        opciones: [
            "Lejos del punto de unión con el tronco",
            "Hacia la línea media",
            "Cerca de la superficie"
        ],
        correcta: 0,
        explicacion: "DISTAL = lejos del punto de unión. Los dedos son DISTALES a la muñeca. La muñeca es DISTAL al codo."
    },
    {
        pregunta: "El hombro es _____ al codo:",
        opciones: [
            "Distal",
            "Proximal",
            "Contralateral"
        ],
        correcta: 1,
        explicacion: "El hombro está más cerca del tronco que el codo → el hombro es PROXIMAL al codo. El codo, a su vez, es PROXIMAL a la muñeca."
    },
    {
        pregunta: "Los dedos de la mano son _____ a la muñeca:",
        opciones: [
            "Proximales",
            "Contralaterales",
            "Distales"
        ],
        correcta: 2,
        explicacion: "Los dedos están más lejos del tronco que la muñeca → los dedos son DISTALES a la muñeca."
    },
    {
        pregunta: "SUPERFICIAL significa:",
        opciones: [
            "Lejos de la superficie del cuerpo",
            "Cerca de la superficie del cuerpo",
            "Cerca del punto de origen en el tronco"
        ],
        correcta: 1,
        explicacion: "SUPERFICIAL = cerca de la superficie corporal. La piel es SUPERFICIAL al músculo; el músculo es SUPERFICIAL al hueso."
    },
    {
        pregunta: "La piel es _____ al músculo; el hueso es _____ al músculo:",
        opciones: [
            "Superficial / Profundo",
            "Profunda / Superficial",
            "Proximal / Distal"
        ],
        correcta: 0,
        explicacion: "Piel → músculo → hueso (de afuera hacia adentro). Piel es SUPERFICIAL al músculo; hueso es PROFUNDO al músculo."
    },
    {
        pregunta: "IPSILATERAL significa:",
        opciones: [
            "Del lado opuesto del cuerpo",
            "Del mismo lado del cuerpo",
            "Lejos del punto de origen"
        ],
        correcta: 1,
        explicacion: "IPSILATERAL = del mismo lado. El brazo derecho es IPSILATERAL a la pierna derecha. Opuesto: CONTRALATERAL = lado opuesto."
    },
    {
        pregunta: "En neurología, si el daño en el hemisferio izquierdo causa parálisis en el lado derecho, se dice que es una parálisis:",
        opciones: [
            "Ipsilateral",
            "Proximal",
            "Contralateral"
        ],
        correcta: 2,
        explicacion: "El sistema nervioso central tiene control CONTRALATERAL: el hemisferio izquierdo controla el lado DERECHO del cuerpo. Una lesión izquierda → parálisis contralateral (derecha)."
    },
    {
        pregunta: "Los términos proximal/distal se usan principalmente para describir:",
        opciones: [
            "Las cavidades corporales",
            "Las extremidades (brazos y piernas)",
            "Las capas del tórax"
        ],
        correcta: 1,
        explicacion: "PROXIMAL/DISTAL se usa principalmente para EXTREMIDADES, describiendo la distancia al tronco. Para capas de tejido se usan superficial/profundo."
    },
    {
        pregunta: "El tendón de Aquiles en el talón es _____ a la rodilla:",
        opciones: [
            "Proximal",
            "Distal",
            "Ipsilateral"
        ],
        correcta: 1,
        explicacion: "El talón está más lejos del tronco que la rodilla → el talón/tendón de Aquiles es DISTAL a la rodilla."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — CAVIDADES CORPORALES (6)
    // ══════════════════════════════════════════
    {
        pregunta: "Las dos grandes cavidades corporales son:",
        opciones: [
            "Torácica y abdominal",
            "Dorsal (posterior) y ventral (anterior)",
            "Craneal y vertebral"
        ],
        correcta: 1,
        explicacion: "Las dos grandes cavidades son la DORSAL (posterior) que incluye la craneal + vertebral, y la VENTRAL (anterior) que incluye la torácica + abdominopélvica."
    },
    {
        pregunta: "¿Qué órgano se encuentra en la cavidad craneal?",
        opciones: [
            "Médula espinal",
            "Encéfalo (cerebro, cerebelo y tallo cerebral)",
            "Corazón"
        ],
        correcta: 1,
        explicacion: "La cavidad CRANEAL está formada por el cráneo y contiene el ENCÉFALO (cerebro, cerebelo y tallo cerebral). La médula espinal está en la cavidad vertebral."
    },
    {
        pregunta: "El mediastino es:",
        opciones: [
            "La membrana que recubre los pulmones",
            "El espacio central de la cavidad torácica, entre los dos pulmones",
            "La parte inferior de la cavidad abdominal"
        ],
        correcta: 1,
        explicacion: "El MEDIASTINO es el espacio central de la cavidad torácica, entre los dos pulmones. Contiene el corazón, grandes vasos, esófago, tráquea y nervio frénico."
    },
    {
        pregunta: "¿Qué membrana recubre los pulmones y la cavidad torácica?",
        opciones: [
            "Pericardio",
            "Peritoneo",
            "Pleura"
        ],
        correcta: 2,
        explicacion: "La PLEURA es la membrana serosa de doble capa que recubre los pulmones (pleura visceral) y la pared torácica (pleura parietal). El pericardio rodea el corazón; el peritoneo rodea los órganos abdominales."
    },
    {
        pregunta: "La vejiga urinaria y el útero se encuentran en la cavidad:",
        opciones: [
            "Abdominal",
            "Pélvica",
            "Torácica"
        ],
        correcta: 1,
        explicacion: "La cavidad PÉLVICA (parte inferior de la abdominopélvica) contiene vejiga urinaria, útero, ovarios, próstata y recto."
    },
    {
        pregunta: "¿Qué membrana recubre los órganos abdominales?",
        opciones: [
            "Pleura",
            "Meninges",
            "Peritoneo"
        ],
        correcta: 2,
        explicacion: "El PERITONEO es la membrana serosa que reviste la cavidad abdominal y la mayoría de sus órganos. Los órganos cubiertos por peritoneo se llaman INTRAPERITONEALES."
    }

];

console.log("✅ Evaluación Planimetría Anatómica cargada:", EVALUACION_PLANIMETRIA.length, "preguntas");
