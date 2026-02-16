// ============================================
// EVALUACIÓN: SISTEMA CARDIOVASCULAR
// 60 preguntas — basadas en sistema-cardiovascular.js
// Temas: Anatomía cardíaca, Ciclo cardíaco,
//        Circulación mayor/menor, Presión arterial,
//        Sangre y componentes, Enfermedades CV
// ============================================

const EVALUACION_SISTEMA_CARDIOVASCULAR = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — ANATOMÍA DEL CORAZÓN (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuántas cavidades tiene el corazón?",
        opciones: ["2 (una aurícula y un ventrículo)", "3 (2 aurículas y 1 ventrículo)", "4 (2 aurículas y 2 ventrículos)"],
        correcta: 2,
        explicacion: "El corazón tiene 4 cavidades: aurícula derecha, ventrículo derecho, aurícula izquierda y ventrículo izquierdo. Las aurículas reciben sangre; los ventrículos la bombean."
    },
    {
        pregunta: "La capa muscular del corazón responsable de la contracción se llama:",
        opciones: ["Endocardio", "Pericardio", "Miocardio"],
        correcta: 2,
        explicacion: "El miocardio es la capa muscular media formada por cardiomiocitos (músculo cardíaco estriado involuntario). Es la responsable de la contracción. El pericardio lo rodea externamente y el endocardio lo reviste internamente."
    },
    {
        pregunta: "El pericardio es:",
        opciones: ["El saco fibroseroso que rodea al corazón", "La capa muscular que produce las contracciones", "La capa interna que está en contacto con la sangre"],
        correcta: 0,
        explicacion: "El pericardio es el saco fibroseroso que rodea y protege al corazón. Tiene hoja parietal (externa) y visceral (epicardio, interna). Entre ellas existe líquido pericárdico que reduce la fricción durante los latidos."
    },
    {
        pregunta: "La válvula que separa la aurícula derecha del ventrículo derecho es:",
        opciones: ["Válvula pulmonar", "Válvula mitral (bicúspide)", "Válvula tricúspide"],
        correcta: 2,
        explicacion: "La válvula tricúspide (3 valvas) está entre aurícula y ventrículo DERECHOS. La mitral o bicúspide (2 valvas) está entre aurícula y ventrículo IZQUIERDOS. Mnemotecnia: TPMA de derecha a izquierda."
    },
    {
        pregunta: "La válvula mitral o bicúspide separa:",
        opciones: ["Ventrículo izquierdo de la aorta", "Aurícula izquierda del ventrículo izquierdo", "Ventrículo derecho de la arteria pulmonar"],
        correcta: 1,
        explicacion: "La válvula mitral (bicúspide, 2 valvas) separa la aurícula izquierda del ventrículo izquierdo. Es la más frecuentemente afectada por la fiebre reumática, produciendo estenosis mitral."
    },
    {
        pregunta: "¿Qué válvula controla el paso del ventrículo izquierdo a la aorta?",
        opciones: ["Válvula pulmonar", "Válvula tricúspide", "Válvula aórtica"],
        correcta: 2,
        explicacion: "La válvula aórtica (semilunar) controla la salida del ventrículo izquierdo hacia la aorta. La válvula pulmonar (semilunar) controla la salida del ventrículo derecho hacia la arteria pulmonar."
    },
    {
        pregunta: "¿Qué cavidad cardíaca tiene la pared más gruesa y por qué?",
        opciones: ["Ventrículo derecho, porque bombea a los pulmones", "Ventrículo izquierdo, porque bombea sangre a todo el cuerpo contra más resistencia", "Aurícula derecha, porque recibe más sangre"],
        correcta: 1,
        explicacion: "El ventrículo izquierdo tiene la pared más gruesa (~1.2 cm) porque debe generar la presión suficiente para enviar sangre a todo el organismo (circulación sistémica). El ventrículo derecho solo bombea a los pulmones (circulación menor, menor resistencia)."
    },
    {
        pregunta: "Las células que forman el músculo cardíaco se llaman:",
        opciones: ["Osteoclastos", "Cardiomiocitos", "Neuronas"],
        correcta: 1,
        explicacion: "Los cardiomiocitos son las células del miocardio. Se diferencian del músculo esquelético en que: son involuntarios, tienen un solo núcleo central, están interconectados por discos intercalares y tienen automatismo propio."
    },
    {
        pregunta: "¿Qué es el nodo sinusal (nodo SA)?",
        opciones: ["El marcapasos natural del corazón que inicia el impulso eléctrico", "La capa que recubre el interior de las cavidades cardíacas", "Una válvula que regula el flujo entre aurículas y ventrículos"],
        correcta: 0,
        explicacion: "El nodo sinoauricular (SA), ubicado en la aurícula derecha, es el marcapasos natural del corazón. Genera espontáneamente ~75 impulsos/min que se propagan por el sistema de conducción (nodo AV → haz de His → fibras de Purkinje) para coordinar la contracción."
    },
    {
        pregunta: "La mnemotecnia TPMA describe el orden de las válvulas cardíacas de derecha a izquierda:",
        opciones: ["Tricúspide, Pericárdica, Mitral, Aórtica", "Tricúspide, Pulmonar, Mitral, Aórtica", "Transversa, Pulmonar, Mitral, Anterior"],
        correcta: 1,
        explicacion: "TPMA: Tricúspide (entre AD y VD), Pulmonar (entre VD y arteria pulmonar), Mitral (entre AI y VI), Aórtica (entre VI y aorta). Las dos primeras son del lado derecho; las dos últimas del lado izquierdo."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — CICLO CARDÍACO Y GASTO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El primer ruido cardíaco (S1, 'lub') corresponde al cierre de:",
        opciones: ["Válvulas mitral y tricúspide al inicio de la sístole ventricular", "Válvulas aórtica y pulmonar al inicio de la diástole", "Válvulas mitral y aórtica al final de la sístole"],
        correcta: 0,
        explicacion: "S1 ('lub') = cierre de válvulas AV (Mitral y Tricúspide) al inicio de la sístole ventricular. S2 ('dub') = cierre de válvulas semilunares (Aórtica y Pulmonar) al inicio de la diástole."
    },
    {
        pregunta: "El gasto cardíaco normal en reposo es aproximadamente:",
        opciones: ["5 L/min", "2 L/min", "12 L/min"],
        correcta: 0,
        explicacion: "GC = FC × VS = 75 lpm × 70 mL = ~5 L/min en reposo. En ejercicio intenso puede llegar a 20-25 L/min. El corazón bombea el equivalente de todo el volumen sanguíneo cada minuto."
    },
    {
        pregunta: "La fórmula del gasto cardíaco es:",
        opciones: ["GC = PA / RVP", "GC = FC × VS (Frecuencia Cardíaca × Volumen Sistólico)", "GC = PA × FC"],
        correcta: 1,
        explicacion: "GC (L/min) = FC (latidos/min) × VS (mL/latido). Cualquier factor que aumente la FC o el VS (como el ejercicio, la adrenalina o la sobrecarga de volumen) aumenta el gasto cardíaco."
    },
    {
        pregunta: "La Ley de Frank-Starling establece que:",
        opciones: ["A mayor volumen de llenado ventricular (precarga), mayor es la fuerza de contracción", "A mayor frecuencia cardíaca, menor volumen sistólico", "A mayor resistencia vascular, mayor gasto cardíaco"],
        correcta: 0,
        explicacion: "Ley de Frank-Starling: cuanto más se llena el ventrículo durante la diástole (mayor precarga), más se estiran los cardiomiocitos y mayor es la fuerza de contracción siguiente. El corazón bombea lo que recibe."
    },
    {
        pregunta: "La fracción de eyección normal del ventrículo izquierdo es:",
        opciones: ["55-70%", "30-40%", "80-90%"],
        correcta: 0,
        explicacion: "La fracción de eyección (FE) = VS/VDF × 100. Normal: 55-70%. Indica qué porcentaje del volumen diastólico final se eyecta en cada latido. FE <40% define insuficiencia cardíaca con FE reducida."
    },
    {
        pregunta: "La precarga cardíaca se define como:",
        opciones: ["La resistencia que vence el corazón al expulsar la sangre", "El volumen de sangre que llena el ventrículo al final de la diástole", "La presión arterial media del circuito sistémico"],
        correcta: 1,
        explicacion: "Precarga = volumen al final de la diástole (VFD). Representa el 'estiramiento' del miocardio antes de contraerse. Mayor precarga (más llenado) → mayor contracción (Frank-Starling). La poscarga es la resistencia que el ventrículo debe vencer para eyectar."
    },
    {
        pregunta: "El tercer ruido cardíaco (S3) en un adulto mayor de 40 años indica:",
        opciones: ["Disfunción ventricular / inicio de insuficiencia cardíaca", "Hipertrofia ventricular por HTA crónica", "Es normal, igual que en niños y jóvenes"],
        correcta: 0,
        explicacion: "S3 es normal en niños y jóvenes (<30 años). En adultos mayores de 40 años es PATOLÓGICO e indica disfunción ventricular diastólica o sistólica (insuficiencia cardíaca con ventrículo dilatado y rígido)."
    },
    {
        pregunta: "Durante la diástole ventricular:",
        opciones: ["Los ventrículos se relajan y se llenan de sangre; las válvulas AV están abiertas", "Los ventrículos se contraen y eyectan la sangre", "Las válvulas semilunares están abiertas para permitir el llenado"],
        correcta: 0,
        explicacion: "Diástole ventricular: ventrículos se relajan → presión ventricular cae por debajo de la auricular → válvulas AV (mitral y tricúspide) se abren → sangre fluye hacia los ventrículos. Las válvulas semilunares están cerradas. Es la fase más larga del ciclo (~0.4 s)."
    },
    {
        pregunta: "El volumen sistólico normal en reposo es aproximadamente:",
        opciones: ["150 mL por latido", "30 mL por latido", "70 mL por latido"],
        correcta: 2,
        explicacion: "El volumen sistólico (VS) normal es ~70 mL/latido en reposo. Multiplicado por la FC (~75 lpm) da el gasto cardíaco de ~5 L/min. El VS puede aumentar con el entrenamiento físico y disminuye en insuficiencia cardíaca."
    },
    {
        pregunta: "El S4 (cuarto ruido cardíaco) es:",
        opciones: ["Normal en atletas de alto rendimiento", "Siempre patológico; indica ventrículo rígido (HTA, hipertrofia)", "Normal en adultos sanos mayores de 50 años"],
        correcta: 1,
        explicacion: "S4 es siempre PATOLÓGICO. Ocurre cuando la aurícula se contrae contra un ventrículo rígido (no distensible) al final de la diástole. Causas: HTA crónica, hipertrofia ventricular izquierda, cardiopatía isquémica."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — CIRCULACIÓN MAYOR Y MENOR (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La circulación pulmonar (menor) lleva sangre:",
        opciones: ["De la aurícula derecha directamente a los pulmones", "Del ventrículo izquierdo a todo el cuerpo y regresa a la aurícula derecha", "Del ventrículo derecho a los pulmones y regresa oxigenada a la aurícula izquierda"],
        correcta: 2,
        explicacion: "Circulación menor/pulmonar: VD → arteria pulmonar → capilares pulmonares (hematosis: CO₂ por O₂) → venas pulmonares → AI. La sangre DESOXIGENADA sale del corazón derecho y regresa OXIGENADA al corazón izquierdo."
    },
    {
        pregunta: "Las venas pulmonares son una excepción porque transportan:",
        opciones: ["Sangre con alto contenido de CO₂ desde los pulmones", "Sangre oxigenada desde los pulmones hacia la aurícula izquierda", "Sangre desoxigenada como todas las venas"],
        correcta: 1,
        explicacion: "Regla general: arterias llevan sangre oxigenada, venas llevan desoxigenada. EXCEPCIÓN: las 4 venas pulmonares llevan sangre OXIGENADA de los pulmones a la aurícula izquierda. La arteria pulmonar lleva sangre DESOXIGENADA del corazón a los pulmones."
    },
    {
        pregunta: "La circulación sistémica (mayor) comienza en:",
        opciones: ["La aurícula derecha y termina en el ventrículo derecho", "La aurícula izquierda y termina en el ventrículo izquierdo", "El ventrículo izquierdo y termina en la aurícula derecha vía venas cavas"],
        correcta: 2,
        explicacion: "Circulación mayor/sistémica: VI → aorta → arterias sistémicas → capilares (intercambio O₂/CO₂ en tejidos) → vénulas → venas → vena cava superior e inferior → AD. Lleva O₂ a todos los órganos."
    },
    {
        pregunta: "¿Qué tipo de vaso regula la resistencia vascular periférica?",
        opciones: ["Los capilares, porque tienen paredes de una sola capa", "Las arteriolas, mediante vasoconstricción y vasodilatación", "Las venas cavas, por su gran capacidad de volumen"],
        correcta: 1,
        explicacion: "Las arteriolas son los vasos de resistencia: al contraerse (vasoconstricción) aumentan la RVP y la PA; al dilatarse la disminuyen. Los capilares son los vasos de intercambio y las venas son vasos de capacitancia (reservorio)."
    },
    {
        pregunta: "Los capilares son los vasos más importantes funcionalmente porque:",
        opciones: ["Tienen la mayor presión de todos los vasos", "Contienen la mayoría del volumen sanguíneo total", "Es donde ocurre el intercambio de O₂, CO₂, nutrientes y desechos entre sangre y tejidos"],
        correcta: 2,
        explicacion: "Los capilares son vasos microscópicos de una sola capa de endotelio. Su pared delgada permite la difusión de O₂, CO₂, glucosa, aminoácidos, agua y desechos metabólicos entre la sangre y los tejidos. Son los vasos de intercambio."
    },
    {
        pregunta: "Las venas se diferencian de las arterias principalmente en que:",
        opciones: ["Las venas tienen paredes más delgadas, válvulas para evitar reflujo y contienen ~70% del volumen sanguíneo", "Las venas no tienen válvulas y su presión es mayor que en arterias", "Las venas tienen paredes más gruesas y mayor presión"],
        correcta: 0,
        explicacion: "Venas: paredes más delgadas (menor musculatura), válvulas unidireccionales (especialmente en extremidades inferiores para vencer la gravedad), baja presión y contienen el 70% del volumen sanguíneo total (son el reservorio sanguíneo)."
    },
    {
        pregunta: "¿Qué arteria es la más grande del cuerpo?",
        opciones: ["Aorta", "Arteria coronaria izquierda", "Arteria pulmonar"],
        correcta: 0,
        explicacion: "La aorta es la arteria más grande del organismo. Sale del ventrículo izquierdo y distribuye sangre oxigenada a todo el cuerpo a través de sus ramas: arco aórtico (cabeza/brazos), aorta torácica y aorta abdominal (órganos/piernas)."
    },
    {
        pregunta: "La circulación coronaria irrigan al:",
        opciones: ["Cerebro y médula espinal", "Pulmón derecho e izquierdo", "Músculo cardíaco (miocardio)"],
        correcta: 2,
        explicacion: "Las arterias coronarias derecha e izquierda nacen de la aorta ascendente, justo encima de la válvula aórtica. Irrigan el miocardio. Su obstrucción causa angina de pecho o infarto de miocardio. Se llenan durante la DIÁSTOLE (no durante la sístole)."
    },
    {
        pregunta: "El retorno venoso al corazón se facilita por:",
        opciones: ["La vasoconstricción de las arteriolas", "Las válvulas venosas, la contracción muscular y la presión negativa torácica", "La presión arterial sistémica que 'empuja' la sangre"],
        correcta: 1,
        explicacion: "El retorno venoso se ayuda de: 1) Válvulas venosas (evitan reflujo). 2) Bomba muscular (contracción de músculos de las piernas comprime venas). 3) Presión negativa intratorácica (con la inspiración, el tórax 'aspira' sangre hacia el corazón). 4) Bomba auricular."
    },
    {
        pregunta: "La bifurcación de la aorta en las arterias ilíacas ocurre a nivel de:",
        opciones: ["C7 (vértebra cervical)", "L4 (cuarta vértebra lumbar)", "T4 (carina)"],
        correcta: 1,
        explicacion: "La aorta abdominal se bifurca en las dos arterias ilíacas comunes a nivel de L4. La carina (T4) es la bifurcación de la tráquea. El conocimiento de estos puntos de referencia es esencial en anatomía quirúrgica y radiológica."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — PRESIÓN ARTERIAL Y REGULACIÓN (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La presión arterial normal según las guías actuales es:",
        opciones: ["< 120/80 mmHg", "< 140/90 mmHg", "< 130/85 mmHg"],
        correcta: 0,
        explicacion: "PA normal: <120/80 mmHg. PA elevada: 120-129/<80. HTA estadio 1: 130-139/80-89. HTA estadio 2: ≥140/90. Crisis hipertensiva: >180/120. El valor sistólico refleja la presión de eyección; el diastólico, la resistencia vascular en reposo."
    },
    {
        pregunta: "La fórmula de la presión arterial es:",
        opciones: ["PA = GC + RVP", "PA = GC × RVP (Gasto Cardíaco × Resistencia Vascular Periférica)", "PA = FC / VS"],
        correcta: 1,
        explicacion: "PA = GC × RVP. Para subir la PA se puede aumentar el GC (más FC o más VS) o la RVP (vasoconstricción arteriolar). Los antihipertensivos actúan reduciendo el GC (betabloqueadores) o la RVP (vasodilatadores, IECA, calcioantagonistas)."
    },
    {
        pregunta: "El principal estímulo para liberar renina desde el riñón es:",
        opciones: ["Disminución de la PA, del volumen plasmático o del Na⁺ en túbulo distal", "Aumento de la PA y del volumen plasmático", "Aumento de la aldosterona circulante"],
        correcta: 0,
        explicacion: "La renina se libera del aparato yuxtaglomerular cuando: ↓ PA renal, ↓ volumen plasmático, ↓ Na⁺ en mácula densa o estimulación simpática (betarreceptores). Inicia el eje RAA → angiotensina II → aldosterona → retención de Na⁺ y agua → ↑ PA."
    },
    {
        pregunta: "La crisis hipertensiva se define como una PA mayor de:",
        opciones: ["160/100 mmHg en dos tomas", "140/90 mmHg con síntomas", ">180/120 mmHg con o sin daño a órgano diana"],
        correcta: 2,
        explicacion: "Crisis hipertensiva: PA >180/120 mmHg. Si hay daño a órgano diana (cerebro, corazón, riñón, retina) = emergencia hipertensiva (tratar en minutos). Sin daño = urgencia hipertensiva (tratar en horas con medicación oral)."
    },
    {
        pregunta: "¿Cuál de los siguientes es un factor de riesgo cardiovascular MODIFICABLE?",
        opciones: ["Tabaquismo", "Edad mayor de 65 años", "Sexo masculino"],
        correcta: 0,
        explicacion: "Factores MODIFICABLES: tabaquismo, HTA, dislipidemia, diabetes, obesidad, sedentarismo, estrés. Factores NO MODIFICABLES: edad, sexo masculino, herencia genética, antecedentes familiares de ECV precoz. Los modificables son el objetivo de la prevención cardiovascular."
    },
    {
        pregunta: "La presión de pulso (PP) es:",
        opciones: ["La diferencia entre la presión sistólica y la diastólica (PP = PAS - PAD)", "La presión arterial diastólica dividida entre la sistólica", "La presión promedio durante todo el ciclo cardíaco"],
        correcta: 0,
        explicacion: "Presión de pulso = PAS - PAD. Normal: 30-50 mmHg. PP amplia (>60) sugiere: rigidez arterial, regurgitación aórtica. PP estrecha (<25) sugiere: taponamiento cardíaco, estenosis aórtica grave o shock. Es un marcador de la rigidez arterial."
    },
    {
        pregunta: "La presión arterial media (PAM) se calcula aproximadamente como:",
        opciones: ["PAM = PAS - PAD", "PAM = (PAS + PAD) / 2", "PAM = PAD + 1/3 (PAS - PAD)"],
        correcta: 2,
        explicacion: "PAM ≈ PAD + 1/3 × PP (presión de pulso). Refleja la presión de perfusión media de los órganos. Normal: 70-100 mmHg. En shock, mantener PAM ≥65 es el objetivo terapéutico para preservar la perfusión de órganos vitales."
    },
    {
        pregunta: "Los barorreceptores carotídeos detectan cambios de presión y responden:",
        opciones: ["Disminuyendo la FC y la vasoconstricción cuando detectan ↑ PA (reflejo barorreceptor)", "Aumentando la FC cuando la PA sube (sin compensación)", "Aumentando la PA cuando la PA ya es alta"],
        correcta: 0,
        explicacion: "El reflejo barorreceptor es el principal regulador rápido de la PA: ↑ PA → barorreceptores en cayado aórtico y seno carotídeo se activan → inhiben simpático y activan parasimpático → ↓ FC y vasodilatación → ↓ PA. Es un sistema de retroalimentación negativa inmediata."
    },
    {
        pregunta: "La HTA se clasifica como 'secundaria' cuando:",
        opciones: ["El paciente tiene más de 2 factores de riesgo", "No responde a más de 3 antihipertensivos", "Tiene una causa identificable (enfermedad renal, hiperaldosteronismo, feocromocitoma)"],
        correcta: 2,
        explicacion: "HTA secundaria (5-10%): tiene causa identificable. Principales: enfermedad renal crónica, hiperaldosteronismo primario (síndrome de Conn), feocromocitoma, síndrome de Cushing, coartación de aorta, apnea obstructiva del sueño. HTA esencial/primaria (90-95%): causa multifactorial desconocida."
    },
    {
        pregunta: "La presión arterial diastólica refleja principalmente:",
        opciones: ["La fuerza de contracción del ventrículo izquierdo", "El volumen de sangre eyectado por latido", "La resistencia vascular periférica cuando el corazón está en diástole (relajado)"],
        correcta: 2,
        explicacion: "La PA diastólica refleja la resistencia vascular periférica (tono arteriolar) cuando el corazón no está bombeando. La PA sistólica refleja la fuerza de contracción ventricular. La HTA diastólica aislada es menos común y más característica de adultos jóvenes."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — SANGRE Y COMPONENTES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El volumen sanguíneo total en un adulto promedio es aproximadamente:",
        opciones: ["8 litros", "5 litros", "3 litros"],
        correcta: 1,
        explicacion: "Un adulto tiene ~5 litros de sangre (4.5-5.5 L según peso y sexo). La pérdida de >15% (750 mL) produce shock hipovolémico clase I; >30% (1500 mL) es shock clase III que requiere transfusión urgente."
    },
    {
        pregunta: "Los eritrocitos adultos no tienen núcleo. Esto les permite:",
        opciones: ["Reproducirse más rápidamente en la médula ósea", "Tener más espacio para hemoglobina y deformarse para pasar por capilares estrechos", "Producir ATP por vía aeróbica en la mitocondria"],
        correcta: 1,
        explicacion: "Los eritrocitos maduros carecen de núcleo y mitocondrias, lo que maximiza el espacio para la hemoglobina (~270 millones/eritrocito) y les da su forma bicóncava flexible. Producen ATP solo por glucólisis anaeróbica. Vida media: 120 días."
    },
    {
        pregunta: "La hemoglobina en cada eritrocito transporta O₂. Un gramo de hemoglobina transporta:",
        opciones: ["1.34 mL de O₂", "3.5 mL de O₂", "0.5 mL de O₂"],
        correcta: 0,
        explicacion: "Un gramo de hemoglobina transporta 1.34 mL de O₂ cuando está completamente saturada. Con una Hb normal de 15 g/dL y 5 L de sangre, la capacidad de transporte de O₂ es ~1000 mL. La anemia reduce drásticamente esta capacidad."
    },
    {
        pregunta: "El grupo sanguíneo O negativo es llamado 'donador universal' porque:",
        opciones: ["Sus glóbulos rojos son más pequeños y compatibles con cualquier grupo", "Puede recibir cualquier tipo de sangre sin reacciones", "No tiene antígenos A, B ni factor Rh, por lo que no provoca reacción inmune en ningún receptor"],
        correcta: 2,
        explicacion: "O negativo: sin antígenos A ni B (no activa Anti-A ni Anti-B) y sin factor Rh (no activa anti-Rh). Por eso puede donarse a cualquier persona en emergencias sin necesidad de tipificación. Sin embargo, el O- solo puede RECIBIR de O-."
    },
    {
        pregunta: "El grupo sanguíneo AB positivo es llamado 'receptor universal' porque:",
        opciones: ["No tiene anticuerpos contra ningún grupo sanguíneo ABO ni Rh", "Puede donar sangre a todos los grupos sin causar reacciones", "Tiene el mayor número de antígenos en sus glóbulos rojos"],
        correcta: 0,
        explicacion: "AB positivo: tiene antígenos A y B (no produce Anti-A ni Anti-B) y tiene el factor Rh (no produce anti-Rh). Por lo tanto, no rechaza ningún tipo de glóbulo rojo transfundido → receptor universal. Pero solo puede DONAR a AB+."
    },
    {
        pregunta: "Las plaquetas (trombocitos) son fragmentos de:",
        opciones: ["Eritrocitos viejos que se fragmentan al final de su vida", "Megacariocitos de la médula ósea roja", "Monocitos diferenciados en tejidos periféricos"],
        correcta: 1,
        explicacion: "Las plaquetas son fragmentos citoplasmáticos de megacariocitos (células gigantes de la médula ósea). No tienen núcleo. Normal: 150,000-400,000/µL. <100,000 = trombocitopenia; <20,000 = riesgo de sangrado espontáneo. Vida media: 7-10 días."
    },
    {
        pregunta: "La hemostasia primaria involucra:",
        opciones: ["La cascada de coagulación y la formación de fibrina", "La lisis del coágulo por la plasmina (fibrinólisis)", "La adhesión y agregación plaquetaria para formar el tapón plaquetario"],
        correcta: 2,
        explicacion: "Hemostasia primaria: lesión vascular → vasoconstricción → adhesión de plaquetas al colágeno (mediada por el factor de Von Willebrand) → activación plaquetaria → agregación → tapón plaquetario (coágulo blanco). La hemostasia secundaria (cascada de coagulación) lo consolida con fibrina."
    },
    {
        pregunta: "El neutrofilos es el leucocito más abundante en sangre periférica (50-70%). Su función principal es:",
        opciones: ["Producir anticuerpos contra patógenos", "Fagocitar bacterias como primera línea de defensa", "Presentar antígenos a los linfocitos T"],
        correcta: 1,
        explicacion: "Los neutrófilos son los 'soldados de primera línea' del sistema inmune innato. Fagocitan y matan bacterias mediante degranulación (lisozima, MPO) y explosión oxidativa. Son los primeros en llegar al sitio de infección. Su ↑ en sangre (neutrofilia) indica infección bacteriana."
    },
    {
        pregunta: "La anemia se define como:",
        opciones: ["Disminución de la hemoglobina o eritrocitos por debajo de los valores normales", "Aumento excesivo de los eritrocitos en sangre", "Disminución del número de leucocitos en sangre"],
        correcta: 0,
        explicacion: "Anemia: Hb <13 g/dL en hombres, <12 g/dL en mujeres (OMS). Causa ↓ capacidad de transporte de O₂ → hipoxia tisular → fatiga, palidez, disnea, taquicardia compensatoria. Clasificación: microcítica (↓ hierro), normocítica (sangrado agudo, ERC) o macrocítica (déficit B12/folato)."
    },
    {
        pregunta: "El factor Rh positivo significa que el eritrocito:",
        opciones: ["Su pH es más básico que el de los eritrocitos Rh negativo", "Tiene el antígeno D en su superficie (~85% de la población)", "Tiene los antígenos A y B en su superficie"],
        correcta: 1,
        explicacion: "El factor Rh (Rhesus) es el antígeno D. Rh+ (~85%): tiene el antígeno D. Rh- (~15%): no lo tiene. Si una madre Rh- lleva un feto Rh+, puede sensibilizarse → anticuerpos anti-D → en siguientes embarazos puede causar eritroblastosis fetal (enfermedad hemolítica del recién nacido)."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — ENFERMEDADES CARDIOVASCULARES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Las enfermedades cardiovasculares representan qué porcentaje de todas las muertes mundiales:",
        opciones: ["32%", "15%", "50%"],
        correcta: 0,
        explicacion: "Según la OMS, las enfermedades cardiovasculares son la principal causa de muerte en el mundo, representando el 32% de todas las defunciones globales (~17.9 millones de muertes/año). La mayoría son infartos y ACV, prevenibles con control de factores de riesgo."
    },
    {
        pregunta: "El infarto agudo de miocardio (IAM) ocurre cuando:",
        opciones: ["El pericardio se inflama y comprime el corazón", "El corazón late demasiado rápido (taquicardia ventricular)", "Una arteria coronaria se ocluye → isquemia → necrosis del miocardio"],
        correcta: 2,
        explicacion: "IAM: oclusión aguda de una arteria coronaria (generalmente trombo sobre placa aterosclerótica rota) → isquemia → necrosis miocárdica irreversible. Síntoma cardinal: dolor opresivo precordial irradiado a brazo izquierdo/mandíbula/espalda. Diagnóstico: ECG + troponinas elevadas."
    },
    {
        pregunta: "La diferencia entre angina estable e inestable es:",
        opciones: ["La angina inestable solo se presenta en mujeres mayores de 60 años", "La angina estable causa necrosis miocárdica y la inestable no", "La angina estable aparece solo con esfuerzo y cede con reposo; la inestable aparece en reposo y es más grave"],
        correcta: 2,
        explicacion: "Angina estable: dolor por isquemia transitoria con esfuerzo, cede con reposo o nitroglicerina, placa estable. Angina inestable: dolor en reposo, de mayor duración, por placa inestable con trombo parcial → riesgo alto de progresar a IAM. Ambas NO tienen necrosis (eso es IAM)."
    },
    {
        pregunta: "La aterosclerosis es:",
        opciones: ["Dilatación patológica de las arterias por debilidad de la pared", "Inflamación del pericardio por infección viral", "Acumulación de placas lipídicas (ateromas) en la íntima arterial que estrecha el lumen"],
        correcta: 2,
        explicacion: "Aterosclerosis: proceso crónico inflamatorio donde el LDL oxidado se deposita en la íntima arterial formando ateromas (células espumosas, núcleo lipídico, cápsula fibrosa). Estrecha el lumen → isquemia. Si la placa se rompe → trombo agudo → IAM o ACV."
    },
    {
        pregunta: "Los síntomas FAST del accidente cerebrovascular (ACV) son:",
        opciones: ["Face (asimetría), Arm (debilidad), Speech (dificultad al hablar), Time (tiempo=cerebro)", "Fatigue, Anxiety, Shock, Tachycardia", "Fever, Angina, Stroke, Tiredness"],
        correcta: 0,
        explicacion: "FAST es la mnemotecnia para reconocer el ACV: Face (asimetría facial al sonreír), Arm (debilidad/entumecimiento de un brazo), Speech (habla arrastrada o incomprensible), Time (llamar al 112 inmediatamente — 'el tiempo es cerebro'). Cada minuto sin tratamiento se pierden 1.9 millones de neuronas."
    },
    {
        pregunta: "La insuficiencia cardíaca (IC) se define como:",
        opciones: ["La inflamación del músculo cardíaco por virus o bacterias", "Un infarto de miocardio sin elevación del ST", "La incapacidad del corazón de bombear suficiente sangre para satisfacer las necesidades metabólicas del organismo"],
        correcta: 2,
        explicacion: "IC: el corazón no puede mantener un gasto adecuado para los requerimientos metabólicos, o solo puede hacerlo a presiones de llenado elevadas. Síntomas: disnea de esfuerzo, ortopnea (disnea al acostarse), edema en miembros inferiores, fatiga. Causas principales: HTA y cardiopatía isquémica."
    },
    {
        pregunta: "La fibrilación ventricular es:",
        opciones: ["Una arritmia benigna que se resuelve espontáneamente", "Una arritmia crónica que se maneja con anticoagulantes", "Una arritmia mortal que requiere desfibrilación eléctrica inmediata (DEA)"],
        correcta: 2,
        explicacion: "La FV es una arritmia letal donde el ventrículo se contrae de forma caótica y no coordina → gasto cardíaco = 0 → muerte en 4-6 minutos sin tratamiento. El único tratamiento efectivo es la desfibrilación eléctrica inmediata (DEA). La RCP gana tiempo mientras llega el DEA."
    },
    {
        pregunta: "El dejar de fumar reduce el riesgo cardiovascular en:",
        opciones: ["Solo mejora el riesgo pulmonar, no el cardiovascular", "50% al año de dejar de fumar", "5-10% al cabo de 10 años"],
        correcta: 1,
        explicacion: "El riesgo de IAM disminuye un 50% al año de dejar de fumar, y a los 15 años el riesgo es similar al de un no fumador. El tabaco daña el endotelio, favorece la aterosclerosis, aumenta la trombosis y la HTA. Es el factor de riesgo modificable más importante."
    },
    {
        pregunta: "La marcapasos natural del corazón es el nodo sinusal (SA). ¿Qué pasa si falla?",
        opciones: ["El corazón se detiene inmediatamente y sin posibilidad de reiniciarse", "El nodo AV u otros centros de automatismo más lentos toman el control (ritmo de escape)", "Las válvulas cardíacas asumen la función de marcar el ritmo"],
        correcta: 1,
        explicacion: "El corazón tiene automatismo en cascada. Si el nodo SA falla, el nodo AV asume a ~40-60 lpm (ritmo nodal de escape). Si también falla, el sistema de His-Purkinje marca a ~20-40 lpm (ritmo idioventricular). Por eso el corazón no se para inmediatamente, aunque el ritmo es más lento e ineficiente."
    },
    {
        pregunta: "La prevención cardiovascular primaria incluye:",
        opciones: ["Rehabilitación cardíaca después de un IAM", "Control de factores de riesgo antes de que ocurra el evento cardiovascular", "Implantación de stent coronario en pacientes de alto riesgo"],
        correcta: 1,
        explicacion: "Prevención primaria = evitar el PRIMER evento cardiovascular: control de HTA/diabetes/dislipidemia, dejar de fumar, ejercicio 150 min/sem, dieta mediterránea, peso saludable. Prevención secundaria = evitar que se REPITA en pacientes que ya tuvieron un evento (IAM, ACV, etc.)."
    }

];

console.log("✅ Evaluación Sistema Cardiovascular cargada:", EVALUACION_SISTEMA_CARDIOVASCULAR.length, "preguntas");
