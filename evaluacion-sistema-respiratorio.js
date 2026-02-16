// ============================================
// EVALUACIÓN: SISTEMA RESPIRATORIO
// 60 preguntas — basadas en sistema-respiratorio.js
// Temas: Vías aéreas, Pulmones/Pleura,
//        Mecánica respiratoria, Volúmenes,
//        Intercambio gaseoso, Enfermedades
// ============================================

const EVALUACION_SISTEMA_RESPIRATORIO = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — ANATOMÍA VÍAS AÉREAS SUPERIORES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Las funciones de las fosas nasales al pasar el aire incluyen:",
        opciones: ["Solo conducir el aire hacia la faringe sin modificarlo", "Producir surfactante para los alvéolos", "Filtrar, calentar y humidificar el aire inspirado"],
        correcta: 2,
        explicacion: "Las fosas nasales acondicional el aire inspirado: lo FILTRAN (pelos y moco atrapan partículas), CALIENTAN (red vascular submucosa) y HUMIDIFICAN (moco). Esto protege las vías inferiores y los alvéolos de aire frío, seco y sucio."
    },
    {
        pregunta: "La epiglotis tiene la función de:",
        opciones: ["Producir los sonidos de la voz junto con las cuerdas vocales", "Producir moco para lubricar las vías aéreas", "Cubrir la laringe durante la deglución para evitar aspiración de alimentos"],
        correcta: 2,
        explicacion: "La epiglotis es un cartílago en forma de hoja que se cierra sobre la laringe durante la deglución, dirigiendo los alimentos hacia el esófago. Su falla causa aspiración (paso de alimentos a la vía aérea). Las cuerdas vocales propiamente están en la laringe."
    },
    {
        pregunta: "¿Por qué los cuerpos extraños inhalados tienden a alojarse en el bronquio derecho?",
        opciones: ["Es más corto, ancho y de trayecto más vertical que el izquierdo", "Tiene menos cartílago y más músculo liso", "Es más largo y estrecho que el izquierdo"],
        correcta: 0,
        explicacion: "El bronquio principal derecho es más corto (~2.5 cm), de mayor calibre y con ángulo más vertical respecto a la tráquea (~25°). El izquierdo es más largo y horizontal (~45°). Por geometría, los cuerpos extraños caen preferentemente al lado derecho al igual que las sondas mal colocadas."
    },
    {
        pregunta: "La tráquea está reforzada por anillos cartilaginosos en forma de C. ¿Por qué son incompletos por atrás?",
        opciones: ["Los anillos completos impedirían la ventilación mecánica con presión positiva", "Porque la tráquea no necesita soporte posterior al estar protegida por la columna", "Para permitir que el esófago se dilate al deglutir sin comprimir la tráquea"],
        correcta: 2,
        explicacion: "Los anillos traqueales son incompletos (en C) por la cara posterior donde existe una membrana fibromuscular (músculo traqueal). Esto permite que el esófago (adyacente por atrás) se dilate al pasar el bolo alimenticio sin ser comprimido por la tráquea rígida."
    },
    {
        pregunta: "La carina es:",
        opciones: ["El cartílago que sostiene las cuerdas vocales", "La bifurcación de la tráquea en los dos bronquios principales (nivel T4-T5)", "La válvula que separa la laringe de la tráquea"],
        correcta: 1,
        explicacion: "La carina es el punto de bifurcación de la tráquea en bronquio principal derecho e izquierdo, a nivel de T4-T5 (ángulo de Louis en la cara anterior). Es muy sensible (reflejo de tos intenso) y un punto de referencia en broncoscopía para verificar posición del tubo endotraqueal."
    },
    {
        pregunta: "Los bronquiolos terminales se diferencian de los bronquios porque:",
        opciones: ["Tienen más anillos cartilaginosos y son más rígidos", "Producen el surfactante pulmonar que recubre los alvéolos", "Carecen de cartílago y son los últimos de conducción (no realizan intercambio gaseoso)"],
        correcta: 2,
        explicacion: "Los bronquiolos (a diferencia de los bronquios) NO tienen cartílago — su diámetro es mantenido por la tensión elástica del parénquima pulmonar. Los bronquiolos TERMINALES son los últimos de conducción; los bronquiolos RESPIRATORIOS ya participan en el intercambio gaseoso."
    },
    {
        pregunta: "Los neumocitos tipo II producen surfactante. ¿Por qué es esencial este surfactante?",
        opciones: ["Actúa como antibiótico natural contra bacterias que llegan a los alvéolos", "Reduce la tensión superficial alveolar, evitando el colapso (atelectasia) de los alvéolos pequeños", "Proporciona O₂ extra a los alvéolos que carecen de irrigación"],
        correcta: 1,
        explicacion: "El surfactante (mezcla de fosfolípidos, principalmente DPPC) reduce la tensión superficial del líquido alveolar. Sin él, los alvéolos pequeños colapsarían (Ley de Laplace: a menor radio, mayor presión necesaria para mantenerlo abierto). Su déficit en prematuros causa el síndrome de dificultad respiratoria neonatal."
    },
    {
        pregunta: "Las células de Kupffer de los alvéolos pulmonares se llaman:",
        opciones: ["Células de Clara productoras de moco", "Macrófagos alveolares (células de polvo)", "Neumocitos tipo I (células planas del intercambio gaseoso)"],
        correcta: 1,
        explicacion: "Los macrófagos alveolares (histiocitos o 'células de polvo') son los macrófagos residentes del pulmón. Fagocitan partículas, bacterias y eritrocitos que llegan a los alvéolos. En la insuficiencia cardíaca izquierda con edema pulmonar, fagocitan eritrocitos → 'células de insuficiencia cardíaca' con hemosiderina."
    },
    {
        pregunta: "La laringe contiene las cuerdas vocales y su cartílago más prominente es:",
        opciones: ["El cartílago tiroides (nuez de Adán)", "El cartílago aritenoides", "El cartílago cricoides (el único cartílago completo en anillo)"],
        correcta: 0,
        explicacion: "El cartílago tiroides es el más grande de la laringe y forma la prominencia laríngea ('nuez de Adán'), más visible en hombres por efecto de la testosterona. El cartílago cricoides es el único completamente en forma de anillo, ubicado debajo del tiroides. La cricotirotomía de emergencia se realiza entre ambos."
    },
    {
        pregunta: "El árbol bronquial sigue el orden:",
        opciones: ["Tráquea → Bronquios segmentarios → Lobares → Principales → Bronquiolos", "Tráquea → Bronquios principales → Lobares → Segmentarios → Bronquiolos → Alvéolos", "Faringe → Tráquea → Bronquiolos → Bronquios → Alvéolos"],
        correcta: 1,
        explicacion: "El árbol bronquial va de mayor a menor: Tráquea → 2 Bronquios principales → 5 Bronquios lobares (3 derecho, 2 izquierdo) → 18 Bronquios segmentarios → Bronquiolos → Bronquiolos terminales → Bronquiolos respiratorios → Conductos alveolares → Alvéolos."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — PULMONES Y PLEURA (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El pulmón izquierdo tiene 2 lóbulos porque:",
        opciones: ["Hace espacio para el corazón (que ocupa parte del hemitórax izquierdo) con la língula", "Es más pequeño por tener menos irrigación sanguínea", "Sus bronquios son más cortos y no permiten más ramificaciones"],
        correcta: 0,
        explicacion: "El pulmón izquierdo tiene 2 lóbulos (superior e inferior) porque el corazón ocupa parte del espacio en el hemitórax izquierdo. Tiene una escotadura cardíaca y la língula (lengüeta del lóbulo superior) que es el equivalente anatómico del lóbulo medio derecho."
    },
    {
        pregunta: "El pulmón derecho tiene 3 lóbulos separados por:",
        opciones: ["Dos cisuras: la mayor (oblicua) y la menor (horizontal)", "Una sola cisura mayor oblicua", "Tres cisuras que separan exactamente cada lóbulo"],
        correcta: 0,
        explicacion: "El pulmón derecho tiene 3 lóbulos (superior, medio, inferior) y 2 cisuras: la cisura mayor u oblicua (separa inferior del resto) y la cisura menor u horizontal (separa superior del medio). El pulmón izquierdo tiene 2 lóbulos y 1 cisura (mayor/oblicua)."
    },
    {
        pregunta: "El espacio pleural normalmente contiene:",
        opciones: ["Aire para permitir el movimiento pulmonar sin fricción", "~10-20 mL de líquido pleural que actúa como lubricante", "Vacío absoluto que mantiene los pulmones expandidos"],
        correcta: 1,
        explicacion: "El espacio pleural contiene ~10-20 mL de líquido pleural (producido y reabsorbido por la pleura) que reduce la fricción durante los movimientos respiratorios. La presión negativa del espacio pleural es lo que mantiene los pulmones adheridos a la pared torácica y expandidos."
    },
    {
        pregunta: "El neumotórax espontáneo primario afecta principalmente a:",
        opciones: ["Jóvenes altos y delgados por rotura de bulas subpleurales", "Mujeres con endometriosis pleural", "Adultos mayores con EPOC avanzada"],
        correcta: 0,
        explicacion: "El neumotórax espontáneo primario (sin enfermedad pulmonar subyacente) ocurre en jóvenes altos y delgados (biotipo marfanoide), generalmente hombres de 20-30 años. Las bulas subpleurales apicales (zonas de menor perfusión) se rompen por el gradiente de presión mayor en los vértices pulmonares."
    },
    {
        pregunta: "El neumotórax a tensión es una emergencia porque:",
        opciones: ["El aire atrapado con mecanismo de válvula desplaza el mediastino y comprime el corazón", "Causa solo dificultad respiratoria leve y se resuelve espontáneamente", "Solo afecta al pulmón ipsilateral sin repercusión hemodinámica"],
        correcta: 0,
        explicacion: "En el neumotórax a tensión, cada inspiración introduce más aire al espacio pleural pero no puede salir (válvula unidireccional). La presión positiva desplaza el mediastino al lado contrario → comprime el pulmón sano + corazón + grandes vasos → colapso cardiovascular y muerte. Tratamiento inmediato: aguja en 2° EIC."
    },
    {
        pregunta: "La pleuritis causa dolor que característicamente:",
        opciones: ["Es constante y no cambia con los movimientos respiratorios", "Aumenta con la inspiración profunda y la tos (dolor pleurítico)", "Irradia al brazo izquierdo como el dolor cardíaco"],
        correcta: 1,
        explicacion: "El dolor pleurítico es característicamente 'punzante' y aumenta al inspirar profundo, toser o moverse porque la pleura inflamada roza contra la pared torácica. En reposo o con la respiración superficial disminuye. Es patognomónico de pleuritis, neumotórax o embolismo pulmonar."
    },
    {
        pregunta: "El derrame pleural es el acúmulo excesivo de líquido en el espacio pleural. Sus causas incluyen:",
        opciones: ["Insuficiencia cardíaca, cirrosis hepática, neoplasias y neumonía", "Solo el neumotórax no tratado que se convierte en líquido", "Solo infecciones bacterianas (empiema)"],
        correcta: 0,
        explicacion: "El derrame pleural tiene muchas causas: transudados (IC, cirrosis, síndrome nefrótico — por desequilibrio de presiones) y exudados (neumonía, TBC, neoplasias, embolia pulmonar — por inflamación/neoplasia). La distinción transudado/exudado se hace con los criterios de Light."
    },
    {
        pregunta: "Las células de la pleura visceral son:",
        opciones: ["Células mesoteliales que forman una monocapa plana", "Neumocitos tipo I y II, igual que los alvéolos", "Células endoteliales similares a los capilares pulmonares"],
        correcta: 0,
        explicacion: "Ambas hojas pleurales (visceral y parietal) están tapizadas por células mesoteliales, una monocapa de células aplanadas. El mesotelioma es el tumor maligno de estas células, muy asociado a exposición al asbesto (amianto)."
    },
    {
        pregunta: "El hemotórax se diferencia del neumotórax en que:",
        opciones: ["Son sinónimos del mismo proceso patológico", "El hemotórax contiene aire y el neumotórax contiene líquido", "El hemotórax contiene sangre en la cavidad pleural y el neumotórax contiene aire"],
        correcta: 2,
        explicacion: "Hemotórax: sangre en el espacio pleural (trauma, rotura de grandes vasos, coagulopatías). Neumotórax: aire en el espacio pleural. Pueden coexistir (hemoneumotórax) en traumas torácicos. Ambos colapsan el pulmón pero el hemotórax también causa anemia aguda."
    },
    {
        pregunta: "El pulmón derecho representa aproximadamente qué porcentaje de la capacidad pulmonar total:",
        opciones: ["75%", "55%", "35%"],
        correcta: 1,
        explicacion: "El pulmón derecho (3 lóbulos) es más voluminoso y representa ~55% de la capacidad pulmonar total, mientras que el izquierdo (2 lóbulos) representa ~45%. Esto es clínicamente importante en cirugía de resección pulmonar: una neumonectomía derecha tiene mayor impacto funcional."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — MECÁNICA RESPIRATORIA (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El músculo principal de la inspiración es:",
        opciones: ["Los escalenos", "Los intercostales externos", "El diafragma"],
        correcta: 2,
        explicacion: "El diafragma es el músculo principal de la inspiración: al contraerse, se aplana y desciende → ↑ volumen torácico → ↓ presión intrapulmonar → entra aire. Contribuye al 70-80% del trabajo respiratorio normal. Los intercostales externos y escalenos son músculos accesorios."
    },
    {
        pregunta: "La inspiración normal es un proceso ACTIVO porque:",
        opciones: ["Las vías aéreas deben dilatarse activamente para permitir el paso del aire", "Requiere contracción muscular (diafragma e intercostales) para crear presión negativa", "El corazón empuja activamente el aire hacia los pulmones"],
        correcta: 1,
        explicacion: "La inspiración es ACTIVA: requiere la contracción del diafragma (y músculos accesorios en esfuerzo) para aumentar el volumen torácico y generar presión negativa intrapulmonar que 'aspira' el aire. La espiración normal es PASIVA: la elasticidad pulmonar hace que los pulmones se retraigan sin contracción muscular."
    },
    {
        pregunta: "La espiración forzada (como al soplar fuerte) activa los músculos:",
        opciones: ["Diafragma y escalenos adicionales", "Esternocleidomastoideo y trapecio", "Intercostales internos y musculatura abdominal"],
        correcta: 2,
        explicacion: "La espiración forzada requiere contracción activa de: intercostales INTERNOS (deprimen las costillas) y músculos abdominales (empujan el diafragma hacia arriba). En EPOC los pacientes usan musculatura accesoria espiratoria constantemente por la hiperinflación."
    },
    {
        pregunta: "El volumen corriente (VC) es:",
        opciones: ["El volumen máximo que pueden contener los pulmones", "El volumen de aire que entra y sale en cada respiración normal (~500 mL)", "El volumen de aire que queda en los pulmones después de una espiración máxima"],
        correcta: 1,
        explicacion: "El volumen corriente (Tidal Volume) es el volumen de aire en cada respiración tranquila: ~500 mL en adultos. De estos, ~150 mL quedan en el espacio muerto anatómico (vías de conducción) y no participan en el intercambio gaseoso. Solo ~350 mL llegan efectivamente a los alvéolos."
    },
    {
        pregunta: "El volumen residual (VR) es el único que NO puede medirse con espirómetro porque:",
        opciones: ["Es demasiado pequeño para ser detectado por el equipo", "Está en el espacio muerto anatómico y no en los alvéolos", "Es el aire que queda en los pulmones tras espiración máxima y no puede ser exhalado"],
        correcta: 2,
        explicacion: "El VR (~1200 mL) es el aire que permanece en los pulmones incluso tras espiración máxima forzada, porque las vías aéreas pequeñas se cierran antes de vaciar totalmente los alvéolos. No puede ser exhalado → no puede medirse con espirómetro convencional (requiere dilución de He o pletismografía)."
    },
    {
        pregunta: "La Capacidad Vital (CV) equivale a:",
        opciones: ["VC + VRI + VRE (el máximo volumen que puede movilizarse en una respiración forzada)", "Solo el volumen corriente en reposo", "El volumen total de los pulmones incluyendo el volumen residual"],
        correcta: 0,
        explicacion: "CV = VC + VRI + VRE = ~4800 mL. Es el volumen máximo que puede movilizarse (inspiración máxima hasta espiración máxima). La Capacidad Pulmonar Total = CV + VR = ~6000 mL. La CV disminuye en enfermedades restrictivas (fibrosis, obesidad, cifoescoliosis)."
    },
    {
        pregunta: "El espacio muerto anatómico comprende:",
        opciones: ["Las vías de conducción (nariz, tráquea, bronquios) donde el aire no participa en intercambio gaseoso (~150 mL)", "Los alvéolos que no tienen capilares (no participan en intercambio)", "El volumen residual que queda en los pulmones"],
        correcta: 0,
        explicacion: "El espacio muerto anatómico (~150 mL) es el aire de las vías de conducción que no llega a los alvéolos → no participa en hematosis. En cada inspiración de 500 mL, solo 350 mL llegan a los alvéolos. El espacio muerto fisiológico incluye además alvéolos ventilados pero no perfundidos."
    },
    {
        pregunta: "La ventilación alveolar efectiva por minuto se calcula como:",
        opciones: ["FC × GC", "FR × VC", "FR × (VC - Espacio muerto) = FR × 350 mL/respiración"],
        correcta: 2,
        explicacion: "Ventilación alveolar = FR × (VC - VD) = 15 × (500-150) = 15 × 350 = 5250 mL/min. La ventilación minuto total es FR × VC = 15 × 500 = 7500 mL/min, pero 1/3 es desperdicio en espacio muerto. En taquipnea superficial, el espacio muerto reduce drásticamente la ventilación alveolar efectiva."
    },
    {
        pregunta: "La elasticidad pulmonar (recoil elástico) se refiere a:",
        opciones: ["La rigidez de los bronquios que mantiene el calibre de las vías aéreas", "La tendencia natural de los pulmones a colapsarse hacia adentro, que actúa como fuerza espiratoria pasiva", "La capacidad de los pulmones para expandirse durante la inspiración activa"],
        correcta: 1,
        explicacion: "Los pulmones tienen recoil elástico (tendencia al colapso) por las fibras elásticas del parénquima y la tensión superficial alveolar. Esta elasticidad es la fuerza motriz de la espiración pasiva. En el enfisema (EPOC), se destruyen fibras elásticas → ↓ recoil → hiperinflación + dificultad espiratoria."
    },
    {
        pregunta: "En una persona en reposo, la frecuencia respiratoria normal es:",
        opciones: ["25-30 respiraciones/min", "12-20 respiraciones/min", "8-10 respiraciones/min"],
        correcta: 1,
        explicacion: "FR normal adulto en reposo: 12-20 rpm. En niños es mayor (recién nacido: 40-60 rpm). Taquipnea: >20 rpm (fiebre, ansiedad, hipoxia, acidosis). Bradipnea: <12 rpm (opioides, daño neurológico central). La FR es el signo vital más sensible pero menos medido con precisión."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — INTERCAMBIO GASEOSO Y TRANSPORTE (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La hematosis es el proceso de:",
        opciones: ["Intercambio gaseoso entre los alvéolos y los capilares pulmonares", "Producción de eritrocitos en la médula ósea", "Transporte de CO₂ como bicarbonato en el plasma"],
        correcta: 0,
        explicacion: "La hematosis (intercambio gaseoso) ocurre en la membrana alveolocapilar por difusión simple: O₂ pasa del alveolo (pO₂=100 mmHg) a la sangre venosa (pO₂=40 mmHg); el CO₂ hace el recorrido inverso (capilares: pCO₂=46, alveolar: pCO₂=40). Todo por gradiente de presión parcial, sin gasto energético."
    },
    {
        pregunta: "La presión parcial de O₂ en el alveolo es de ~100 mmHg. La sangre venosa que llega tiene pO₂ de:",
        opciones: ["100 mmHg (igual que el alveolo)", "40 mmHg (mucho menor, lo que crea el gradiente para difusión)", "80 mmHg (ligeramente menor)"],
        correcta: 1,
        explicacion: "La sangre venosa que llega al pulmón desde los tejidos tiene pO₂≈40 mmHg (los tejidos consumieron O₂). El gradiente de 60 mmHg (100-40) impulsa la difusión de O₂ del alveolo a la sangre. Al salir del pulmón (sangre arterial), pO₂≈100 mmHg."
    },
    {
        pregunta: "El 98.5% del oxígeno en sangre se transporta:",
        opciones: ["Unido a la hemoglobina como oxihemoglobina (HbO₂)", "Disuelto en el plasma sanguíneo", "Como bicarbonato en los eritrocitos"],
        correcta: 0,
        explicacion: "El O₂ viaja 98.5% unido a la hemoglobina (oxihemoglobina, HbO₂) y solo 1.5% disuelto en plasma. La hemoglobina multiplica 70 veces la capacidad de transporte de O₂ respecto al plasma solo. Es por eso que la anemia tiene mayor impacto que se podría esperar."
    },
    {
        pregunta: "El CO₂ se transporta en sangre principalmente como:",
        opciones: ["Gas disuelto directamente en el plasma (~70%)", "Unido a hemoglobina (carbaminohemoglobina) en un 70%", "Bicarbonato (HCO₃⁻) disuelto en plasma (~70%)"],
        correcta: 2,
        explicacion: "El CO₂ viaja: 70% como HCO₃⁻ en plasma (CO₂+H₂O→H₂CO₃→H⁺+HCO₃⁻, reacción catalizada por anhidrasa carbónica eritrocitaria), 23% como carbaminohemoglobina y 7% disuelto. El bicarbonato es también el principal buffer del pH sanguíneo."
    },
    {
        pregunta: "El estímulo más potente para el centro respiratorio bulbar es:",
        opciones: ["El aumento de CO₂ (hipercapnia) que baja el pH del LCR", "La disminución de CO₂ por hiperventilación", "La disminución de O₂ (hipoxia)"],
        correcta: 0,
        explicacion: "↑ CO₂ → ↑ H₂CO₃ → ↓ pH del LCR → quimiorreceptores centrales (bulbo) detectan la acidosis → ↑ ventilación. El CO₂ es el regulador principal porque cruza la barrera hematoencefálica. La hipoxia actúa principalmente por quimiorreceptores PERIFÉRICOS (cuerpos carotídeos/aórticos) y es un estímulo secundario."
    },
    {
        pregunta: "La saturación de O₂ (SpO₂) normal medida por oxímetro de pulso es:",
        opciones: ["≥95%", "85-90%", "70-80%"],
        correcta: 0,
        explicacion: "SpO₂ normal: ≥95%. Entre 90-94%: hipoxemia leve. <90%: hipoxemia significativa que requiere suplemento de O₂. <88% en EPOC: criterio de oxigenoterapia crónica domiciliaria. El oxímetro mide el % de hemoglobina saturada de O₂ (no mide CO₂, ni distingue carboxihemoglobina)."
    },
    {
        pregunta: "La curva de disociación de la oxihemoglobina se desplaza hacia la derecha (menor afinidad por O₂) con:",
        opciones: ["Altitud elevada y anemia severa", "Alcalosis, hipotermia y baja pCO₂", "Acidosis, hipertermia, ↑ CO₂ y ↑ 2,3-BPG (efecto Bohr)"],
        correcta: 2,
        explicacion: "Efecto Bohr: en tejidos activos (↑ CO₂, ↑ temperatura, acidosis) la Hb libera O₂ más fácilmente (curva se desplaza a la derecha → ↓ afinidad). Esto es fisiológico: el músculo en ejercicio necesita más O₂ y crea estas condiciones. La curva se desplaza a la izquierda (↑ afinidad) con alcalosis, hipotermia."
    },
    {
        pregunta: "La insuficiencia respiratoria tipo I se caracteriza por:",
        opciones: ["Hipoxemia sin hipercapnia (↓ O₂ con CO₂ normal o bajo)", "Hipercapnia con hipoxemia (↑ CO₂ y ↓ O₂)", "Normoxemia con hipercapnia"],
        correcta: 0,
        explicacion: "IR tipo I (hipoxémica): ↓ pO₂ (<60 mmHg) con pCO₂ normal o ↓ (el paciente hiperventila para compensar). Causas: neumonía, edema pulmonar, SDRA. IR tipo II (hipercápnica/ventilatoria): ↓ pO₂ + ↑ pCO₂ (>50 mmHg) por hipoventilación. Causas: EPOC severo, depresión respiratoria."
    },
    {
        pregunta: "La anhidrasa carbónica eritrocitaria cataliza la reacción:",
        opciones: ["O₂ + Hb → HbO₂ (oxigenación de la hemoglobina)", "HCO₃⁻ → CO₂ + H₂O solo en los pulmones", "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (formación de bicarbonato)"],
        correcta: 2,
        explicacion: "La anhidrasa carbónica (AC) cataliza la hidratación del CO₂ en los eritrocitos → H₂CO₃ → H⁺ + HCO₃⁻. El HCO₃⁻ sale al plasma (intercambiador Cl⁻/HCO₃⁻). En los pulmones la reacción es inversa: HCO₃⁻ vuelve al eritrocito → AC → CO₂ que se exhala. Los inhibidores de AC (acetazolamida) se usan en el mal de altura."
    },
    {
        pregunta: "En la altitud elevada, el organismo se adapta mediante:",
        opciones: ["↓ frecuencia respiratoria para conservar CO₂", "↓ producción de 2,3-BPG para que la Hb retenga más O₂", "↑ eritropoyetina → más eritrocitos → mayor capacidad de transporte de O₂"],
        correcta: 2,
        explicacion: "Adaptación a la altitud (hipoxia hipobárica): ↑ FR y VC (hiperventilación), ↑ EPO renal → eritrocitosis (más Hb), ↑ 2,3-BPG (Hb libera O₂ más fácilmente), ↑ densidad capilar muscular, ↑ mioglobina. El proceso tarda semanas → 'aclimatación'. Los atletas de altura aprovechan la eritrocitosis."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — ENFERMEDADES RESPIRATORIAS I (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La diferencia fundamental entre EPOC y asma es:",
        opciones: ["El asma siempre se inicia en la infancia y el EPOC siempre en mayores de 65", "La obstrucción en EPOC es IRREVERSIBLE; en asma es episódica y REVERSIBLE con broncodilatadores", "El EPOC afecta solo a fumadores y el asma solo a alérgicos sin excepciones"],
        correcta: 1,
        explicacion: "Diferencia clave: EPOC → obstrucción IRREVERSIBLE (FEV1/FVC <0.70 post-broncodilatador). Asma → obstrucción episódica REVERSIBLE (>12% de mejora con broncodilatador). Ambas cursan con sibilancias y disnea, pero el mecanismo y pronóstico son diferentes."
    },
    {
        pregunta: "El EPOC se confirma con espirometría. El hallazgo característico es:",
        opciones: ["FEV1/FVC >0.80 (patrón restrictivo)", "FEV1/FVC <0.70 post-broncodilatador (patrón obstructivo irreversible)", "Capacidad vital aumentada >120% del predicho"],
        correcta: 1,
        explicacion: "EPOC: FEV1/FVC <0.70 post-broncodilatador (criterio GOLD). FEV1 = volumen espiratorio forzado en 1 segundo. La severidad del EPOC se clasifica por el % del FEV1 predicho: GOLD 1 (leve) ≥80%, GOLD 2 (moderado) 50-79%, GOLD 3 (grave) 30-49%, GOLD 4 (muy grave) <30%."
    },
    {
        pregunta: "El enfisema (componente del EPOC) se caracteriza por:",
        opciones: ["Destrucción de los tabiques alveolares → alvéolos grandes y funcionalmente ineficientes", "Fibrosis del parénquima pulmonar con pulmones rígidos y pequeños", "Inflamación y edema de la mucosa bronquial con exceso de moco"],
        correcta: 0,
        explicacion: "Enfisema: destrucción irreversible de los tabiques alveolares por la elastasa (liberada por neutrófilos y macrófagos activados por el humo). Resultado: alvéolos gigantes con ↓ superficie de intercambio + ↓ recoil elástico → hiperinflación + atrapamiento aéreo. El pulmón se vuelve como esponja rota."
    },
    {
        pregunta: "La bronquitis crónica se define clínicamente como:",
        opciones: ["Cualquier tos crónica de más de 4 semanas de duración", "Tos con expectoración presente solo en los meses de invierno", "Tos productiva (con moco) presente al menos 3 meses al año por 2 años consecutivos"],
        correcta: 2,
        explicacion: "Bronquitis crónica: definición CLÍNICA (no radiológica ni funcional): tos productiva ≥3 meses/año por ≥2 años consecutivos, descartando otras causas. Fisiopatología: hipertrofia de glándulas mucosas (índice de Reid >0.5) + metaplasia de células caliciformes → hipersecreción de moco."
    },
    {
        pregunta: "El asma se caracteriza por hiperreactividad bronquial. Sus desencadenantes incluyen:",
        opciones: ["Alérgenos, ejercicio, infecciones virales, frío, contaminantes, estrés emocional y AINE", "Solo el ejercicio físico intenso en personas previamente sanas", "Principalmente el tabaquismo crónico y la contaminación ambiental"],
        correcta: 0,
        explicacion: "El asma tiene múltiples desencadenantes (triggers): alérgenos (polvo, ácaros, pollen, mascotas), ejercicio (asma de esfuerzo), infecciones virales (rinovirus), aire frío, contaminantes, AINE/aspirina (asma de Samter), estrés. Cada paciente tiene sus propios triggers que debe identificar y evitar."
    },
    {
        pregunta: "El tratamiento de base (de mantenimiento) del asma persistente moderada-grave es:",
        opciones: ["Solo broncodilatadores de acción corta (SABA) a demanda", "Corticoides inhalados (ICS) ± broncodilatadores de larga duración (LABA)", "Antibióticos orales durante las exacerbaciones"],
        correcta: 1,
        explicacion: "El asma es una enfermedad inflamatoria crónica → el pilar del tratamiento es el antiinflamatorio: corticoides inhalados (ICS, ej. budesonida, fluticasona). Los LABA (salmeterol, formoterol) se añaden en paso 3-4. Los SABA (salbutamol) son solo de rescate. Los antibióticos solo si hay infección bacteriana confirmada."
    },
    {
        pregunta: "La neumonía lobar clásica por Streptococcus pneumoniae presenta:",
        opciones: ["Inicio gradual con tos seca, fiebre baja y malestar general", "Fiebre de bajo grado, tos seca persistente y sin afectación del estado general", "Inicio agudo con fiebre alta, escalofríos, tos productiva con esputo herrumbroso y dolor pleurítico"],
        correcta: 2,
        explicacion: "Neumonía típica por neumococo: inicio AGUDO con fiebre alta (>39°C), escalofríos, tos productiva con esputo herrumbroso (por hemoglobina degradada), dolor pleurítico. La neumonía 'atípica' (Mycoplasma, Legionella, Chlamydophila) tiene inicio más insidioso, síntomas sistémicos predominantes y esputo escaso."
    },
    {
        pregunta: "El diagnóstico de neumonía se confirma principalmente por:",
        opciones: ["Cultivo de sangre que siempre es positivo en la neumonía bacteriana", "Radiografía de tórax que muestra infiltrado o consolidación pulmonar", "Tomografía computarizada obligatoria en todos los casos"],
        correcta: 1,
        explicacion: "La Rx de tórax es el estándar diagnóstico de neumonía: muestra infiltrado (vidrio esmerilado, opacidad en parches) o consolidación (opacidad densa, broncograma aéreo). La hemocultivo solo es positiva en el 10-20% de las neumonías bacterianas. La TAC se reserva para casos complicados o dudosos."
    },
    {
        pregunta: "La tuberculosis pulmonar se transmite por:",
        opciones: ["Vía aérea (gotitas de Flügge) por tos, estornudos o habla del paciente bacilífero", "Agua contaminada con Mycobacterium tuberculosis", "Contacto directo con las lesiones cutáneas del enfermo"],
        correcta: 0,
        explicacion: "La TB se transmite por vía aérea (aerosoles de <5 µm que alcanzan los alvéolos). Un paciente bacilífero no tratado puede infectar a 10-15 personas/año. El riesgo aumenta con la convivencia prolongada en espacios cerrados mal ventilados. La máscara N95 (no quirúrgica) protege a los trabajadores de salud."
    },
    {
        pregunta: "El tratamiento de la tuberculosis pulmonar incluye el esquema RIPE por 6 meses:",
        opciones: ["Rifampicina, Ivermectina, Pirazinamida, Estreptomicina", "Rifampicina, Isoniazida, Pirazinamida, Etambutol", "Rifampicina, Isoniazida, Penicilina, Etambutol"],
        correcta: 1,
        explicacion: "Esquema RIPE: Rifampicina + Isoniazida + Pirazinamida + Etambutol × 2 meses (fase intensiva), seguido de Rifampicina + Isoniazida × 4 meses (fase de mantenimiento). Son necesarios 4 fármacos simultáneos para evitar resistencias. El abandono del tratamiento genera TB multirresistente (TB-MDR)."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — ENFERMEDADES RESPIRATORIAS II (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El síndrome de distrés respiratorio agudo (SDRA) se define por:",
        opciones: ["PaO₂/FiO₂ <300 + infiltrados bilaterales + origen no cardíaco", "FEV1/FVC <0.70 con hipoxemia leve", "Derrame pleural bilateral con insuficiencia cardíaca"],
        correcta: 0,
        explicacion: "SDRA (Criterios de Berlín): inicio agudo (<7 días), PaO₂/FiO₂ <300 (leve), <200 (moderado) o <100 (grave), infiltrados bilaterales en Rx/TC, no explicado por IC o sobrecarga de líquidos. Mortalidad: 30-45%. Causas: sepsis, neumonía grave, trauma, pancreatitis, COVID-19 grave."
    },
    {
        pregunta: "El signo característico del neumotórax en la radiografía de tórax es:",
        opciones: ["Opacidad difusa bilateral en 'vidrio esmerilado'", "Consolidación densa con broncograma aéreo", "Línea pleural visible separada de la pared torácica con ausencia de trama pulmonar periférica"],
        correcta: 2,
        explicacion: "En el neumotórax la Rx muestra: línea pleural (borde del pulmón colapsado) separada de la pared torácica, con zona hiperlúcida (negro) sin trama vascular entre ellos. El mediastino se desvía al lado contrario solo en neumotórax a tensión. En pequeños neumotórax (<15%) puede no verse en Rx estándar."
    },
    {
        pregunta: "La embolia pulmonar (TEP) es la obstrucción de la circulación pulmonar por:",
        opciones: ["Bacterias que invaden el parénquima pulmonar desde los capilares", "Moco espeso que obstruye las vías aéreas principales", "Trombo (generalmente de venas profundas de MMII) que migra a las arterias pulmonares"],
        correcta: 2,
        explicacion: "TEP: trombo de trombosis venosa profunda (TVP, generalmente de MMII) que se desprende y migra al corazón derecho → arteria pulmonar → obstrucción. Tríada de Virchow predispone a trombosis: estasis venosa, hipercoagulabilidad, lesión endotelial. Síntomas: disnea súbita, dolor pleurítico, hemoptisis."
    },
    {
        pregunta: "La hemoptisis (sangre al toser) es característica de:",
        opciones: ["El reflujo gastroesofágico y la laringitis crónica", "La bronquitis crónica simple y el asma leve", "La tuberculosis, bronquiectasias, neoplasias pulmonares y embolia pulmonar"],
        correcta: 2,
        explicacion: "Hemoptisis: expectoración de sangre. Causas principales: TB pulmonar (clásica), bronquiectasias, carcinoma broncogénico, absceso pulmonar, TEP, aspergiloma. La hemoptisis masiva (>600 mL/24h) es una emergencia con mortalidad del 80% sin tratamiento. Diferenciarlo de hematemesis (vómito de sangre)."
    },
    {
        pregunta: "El cáncer de pulmón más asociado al tabaquismo es:",
        opciones: ["Carcinoma de células escamosas y carcinoma de células pequeñas (microcítico)", "Mesotelioma pleural (asociado al asbesto)", "Adenocarcinoma (el más común en no fumadores)"],
        correcta: 0,
        explicacion: "El tabaco causa principalmente carcinoma de células escamosas (epidermoide) y carcinoma microcítico (de células pequeñas, el más agresivo y el que produce síndromes paraneoplásicos). El adenocarcinoma es el más común en general pero más frecuente en no fumadores y mujeres. El mesotelioma se asocia al asbesto."
    },
    {
        pregunta: "La fibrosis quística afecta al sistema respiratorio porque:",
        opciones: ["Causa hipertensión pulmonar primaria por oclusión vascular", "Destruye las fibras elásticas del parénquima como en el enfisema", "El defecto en la proteína CFTR produce moco espeso que obstruye las vías aéreas e infecta el pulmón crónicamente"],
        correcta: 2,
        explicacion: "Fibrosis quística: mutación en el gen CFTR (cromosoma 7) → canal Cl⁻ disfuncional → moco muy espeso y deshidratado → obstrucción de bronquios → infecciones recurrentes (Pseudomonas, Staph. aureus) → bronquiectasias → insuficiencia respiratoria. También afecta páncreas exocrino, hígado y aparato reproductivo."
    },
    {
        pregunta: "La apnea obstructiva del sueño (SAOS) se caracteriza por:",
        opciones: ["Hipoventilación central por fallo del centro respiratorio bulbar", "Broncoespasmo nocturno típico del asma cardíaca", "Colapso recurrente de la vía aérea superior durante el sueño → pausas respiratorias + hipoxia + despertares"],
        correcta: 2,
        explicacion: "SAOS: colapso de la faringe durante el sueño (obesidad, cuello grueso, amígdalas grandes, micrognatia) → apneas >10 seg → hipoxia → microdespertares → sueño no reparador, somnolencia diurna, ronquidos. Factores de riesgo: obesidad, hombre, cuello >43 cm. Tratamiento: CPAP, pérdida de peso."
    },
    {
        pregunta: "La hipertensión pulmonar primaria es peligrosa porque:",
        opciones: ["Provoca atelectasias masivas por colapso alveolar difuso", "Aumenta la postcarga del ventrículo derecho → cor pulmonale → insuficiencia cardíaca derecha", "Causa espasmo bronquial grave con broncoconstricción severa"],
        correcta: 1,
        explicacion: "Hipertensión pulmonar (HAP): PAP media >25 mmHg. El VD trabaja contra mayor resistencia → se hipertrofia (cor pulmonale) → dilata y falla → insuficiencia cardíaca derecha (distensión yugular, edemas, hepatomegalia, ascitis). La HAP primaria es rara, progresiva y de mal pronóstico sin tratamiento."
    },
    {
        pregunta: "Las bronquiectasias son:",
        opciones: ["Broncoconstricción reversible como en el asma", "Dilatación anormal e irreversible de los bronquios por destrucción de su pared", "Atrapamiento de aire en bronquiolos terminales por enfisema"],
        correcta: 1,
        explicacion: "Bronquiectasias: dilatación bronquial irreversible por destrucción de las capas muscular y elástica. Causas: infecciones recurrentes (TB, tos ferina), fibrosis quística, inmunodeficiencias, aspergilosis. Síntoma clave: tos productiva crónica con gran cantidad de esputo purulento (>30 mL/día). Diagnóstico: TC de alta resolución."
    },
    {
        pregunta: "La prevención primaria más importante de las enfermedades respiratorias crónicas es:",
        opciones: ["La vacunación anual contra la influenza y el neumococo", "Evitar el tabaquismo activo y pasivo, y controlar la contaminación del aire", "El uso de mucolíticos y broncodilatadores profilácticos desde la infancia"],
        correcta: 1,
        explicacion: "El tabaquismo es la causa del 90% del EPOC y del 85% del cáncer de pulmón. Evitarlo es la medida preventiva más importante. La contaminación del aire (interior y exterior) es la segunda causa. La vacunación es prevención de complicaciones infecciosas en pacientes de riesgo, no prevención primaria de la enfermedad crónica."
    }
];

console.log("✅ Evaluación Sistema Respiratorio cargada:", EVALUACION_SISTEMA_RESPIRATORIO.length, "preguntas");
