// ============================================
// JUEGO: SIGNOS VS SÍNTOMAS
// Banco de tarjetas — signos-sintomas-data.js
// ============================================

const SIGNOS_SINTOMAS_DATA = [

    // ── CARDIOVASCULAR ──────────────────────
    { termino: "Taquicardia", tipo: "signo", descripcion: "Frecuencia cardíaca mayor a 100 lpm, medible con estetoscopio o monitor.", categoria: "Cardiovascular" },
    { termino: "Bradicardia", tipo: "signo", descripcion: "Frecuencia cardíaca menor a 60 lpm, objetivamente medible.", categoria: "Cardiovascular" },
    { termino: "Palpitaciones", tipo: "sintoma", descripcion: "Sensación subjetiva de que el corazón late rápido, fuerte o de forma irregular.", categoria: "Cardiovascular" },
    { termino: "Hipertensión", tipo: "signo", descripcion: "Presión arterial ≥140/90 mmHg medida con esfigmomanómetro.", categoria: "Cardiovascular" },
    { termino: "Cianosis", tipo: "signo", descripcion: "Coloración azulada de piel y mucosas visible por el médico, indica hipoxia.", categoria: "Cardiovascular" },
    { termino: "Edema", tipo: "signo", descripcion: "Acumulación de líquido en tejidos, observable y medible (fóvea).", categoria: "Cardiovascular" },
    { termino: "Dolor precordial", tipo: "sintoma", descripcion: "Dolor en la región del pecho que solo el paciente percibe y describe.", categoria: "Cardiovascular" },
    { termino: "Pulso débil (filiforme)", tipo: "signo", descripcion: "Pulso débil y rápido palpable por el médico, indica bajo gasto cardíaco.", categoria: "Cardiovascular" },
    { termino: "Soplo cardíaco", tipo: "signo", descripcion: "Ruido anormal auscultado con estetoscopio sobre el corazón.", categoria: "Cardiovascular" },
    { termino: "Síncope", tipo: "signo", descripcion: "Pérdida transitoria de conciencia y tono muscular, objetivamente observable.", categoria: "Cardiovascular" },

    // ── RESPIRATORIO ────────────────────────
    { termino: "Disnea", tipo: "sintoma", descripcion: "Sensación subjetiva de dificultad para respirar o 'falta de aire'.", categoria: "Respiratorio" },
    { termino: "Taquipnea", tipo: "signo", descripcion: "Frecuencia respiratoria >20 rpm, contable por el observador.", categoria: "Respiratorio" },
    { termino: "Bradipnea", tipo: "signo", descripcion: "Frecuencia respiratoria <12 rpm, medible objetivamente.", categoria: "Respiratorio" },
    { termino: "Ortopnea", tipo: "sintoma", descripcion: "Dificultad para respirar al estar acostado, que mejora al sentarse.", categoria: "Respiratorio" },
    { termino: "Sibilancias", tipo: "signo", descripcion: "Sonido silbante auscultable durante la respiración, indica broncoespasmo.", categoria: "Respiratorio" },
    { termino: "Estridor", tipo: "signo", descripcion: "Ruido agudo audible en la inspiración por obstrucción de vía aérea superior.", categoria: "Respiratorio" },
    { termino: "Hemoptisis", tipo: "signo", descripcion: "Expectoración de sangre procedente de las vías respiratorias, visible.", categoria: "Respiratorio" },
    { termino: "Tos", tipo: "sintoma", descripcion: "Expulsión brusca de aire que el paciente percibe y refiere al médico.", categoria: "Respiratorio" },
    { termino: "Estertores crepitantes", tipo: "signo", descripcion: "Sonidos discontinuos auscultables en inspiración, como pisar nieve.", categoria: "Respiratorio" },
    { termino: "Apnea", tipo: "signo", descripcion: "Cese completo del flujo aéreo por ≥10 segundos, observable.", categoria: "Respiratorio" },

    // ── NEUROLÓGICO ─────────────────────────
    { termino: "Cefalea", tipo: "sintoma", descripcion: "Dolor de cabeza que solo el paciente siente y describe, de intensidad variable.", categoria: "Neurológico" },
    { termino: "Mareo/Vértigo", tipo: "sintoma", descripcion: "Sensación de giro o inestabilidad percibida subjetivamente por el paciente.", categoria: "Neurológico" },
    { termino: "Hemiparesia", tipo: "signo", descripcion: "Debilidad muscular en la mitad del cuerpo, objetivable en exploración.", categoria: "Neurológico" },
    { termino: "Afasia", tipo: "signo", descripcion: "Alteración del lenguaje observable y evaluable por el médico.", categoria: "Neurológico" },
    { termino: "Parestesias", tipo: "sintoma", descripcion: "Sensaciones de hormigueo o entumecimiento que solo el paciente percibe.", categoria: "Neurológico" },
    { termino: "Nistagmo", tipo: "signo", descripcion: "Movimientos involuntarios rítmicos de los ojos, observable por el médico.", categoria: "Neurológico" },
    { termino: "Rigidez de nuca", tipo: "signo", descripcion: "Resistencia a la flexión del cuello, signo de irritación meníngea.", categoria: "Neurológico" },
    { termino: "Signo de Babinski", tipo: "signo", descripcion: "Extensión del dedo gordo al estimular la planta del pie. Anormal en adultos.", categoria: "Neurológico" },
    { termino: "Confusión mental", tipo: "signo", descripcion: "Estado de desorientación y falta de claridad cognitiva, evaluable por el médico.", categoria: "Neurológico" },
    { termino: "Insomnio", tipo: "sintoma", descripcion: "Dificultad para conciliar o mantener el sueño, solo referida por el paciente.", categoria: "Neurológico" },

    // ── DIGESTIVO ───────────────────────────
    { termino: "Náuseas", tipo: "sintoma", descripcion: "Sensación de malestar gástrico con ganas de vomitar, solo referida por el paciente.", categoria: "Digestivo" },
    { termino: "Vómito", tipo: "signo", descripcion: "Expulsión del contenido gástrico por la boca, observable por el médico.", categoria: "Digestivo" },
    { termino: "Ictericia", tipo: "signo", descripcion: "Coloración amarillenta de piel, escleras y mucosas visible por el observador.", categoria: "Digestivo" },
    { termino: "Melena", tipo: "signo", descripcion: "Heces negras y alquitranadas por sangrado del tubo digestivo superior.", categoria: "Digestivo" },
    { termino: "Hematemesis", tipo: "signo", descripcion: "Vómito con sangre roja o en 'posos de café', observable.", categoria: "Digestivo" },
    { termino: "Dolor abdominal", tipo: "sintoma", descripcion: "Dolor en el abdomen percibido subjetivamente por el paciente.", categoria: "Digestivo" },
    { termino: "Hepatomegalia", tipo: "signo", descripcion: "Aumento del tamaño del hígado, detectable por palpación o imagen.", categoria: "Digestivo" },
    { termino: "Ascitis", tipo: "signo", descripcion: "Acumulación de líquido en la cavidad peritoneal, detectable clínicamente.", categoria: "Digestivo" },
    { termino: "Pirosis", tipo: "sintoma", descripcion: "Sensación de ardor retroesternal ('agruras') referida por el paciente.", categoria: "Digestivo" },
    { termino: "Disfagia", tipo: "sintoma", descripcion: "Dificultad para deglutir, percibida y referida por el paciente.", categoria: "Digestivo" },

    // ── SISTÉMICO / FIEBRE ──────────────────
    { termino: "Fiebre", tipo: "signo", descripcion: "Temperatura corporal >37.5°C medida con termómetro.", categoria: "Sistémico" },
    { termino: "Escalofríos", tipo: "sintoma", descripcion: "Sensación de frío con temblor percibida subjetivamente por el paciente.", categoria: "Sistémico" },
    { termino: "Astenia", tipo: "sintoma", descripcion: "Cansancio o fatiga generalizada que el paciente refiere.", categoria: "Sistémico" },
    { termino: "Adinamia", tipo: "sintoma", descripcion: "Falta de fuerza o energía para realizar actividades, referida por el paciente.", categoria: "Sistémico" },
    { termino: "Pérdida de peso", tipo: "signo", descripcion: "Disminución de masa corporal objetivable con báscula.", categoria: "Sistémico" },
    { termino: "Sudoración nocturna", tipo: "sintoma", descripcion: "Sudoración excesiva durante el sueño, referida por el paciente.", categoria: "Sistémico" },
    { termino: "Diaforesis", tipo: "signo", descripcion: "Sudoración profusa y visible, objetivable por el médico.", categoria: "Sistémico" },
    { termino: "Palidez", tipo: "signo", descripcion: "Disminución del color rosado de piel y mucosas, observable por el médico.", categoria: "Sistémico" },
    { termino: "Hipotensión", tipo: "signo", descripcion: "Presión arterial <90/60 mmHg, medible con esfigmomanómetro.", categoria: "Sistémico" },
    { termino: "Anorexia", tipo: "sintoma", descripcion: "Pérdida del apetito referida por el paciente.", categoria: "Sistémico" },

    // ── DERMATOLÓGICO ───────────────────────
    { termino: "Prurito", tipo: "sintoma", descripcion: "Sensación de picor o comezón que solo el paciente percibe.", categoria: "Dermatológico" },
    { termino: "Eritema", tipo: "signo", descripcion: "Enrojecimiento de la piel visible y objetivable por el médico.", categoria: "Dermatológico" },
    { termino: "Urticaria", tipo: "signo", descripcion: "Lesiones cutáneas elevadas, eritematosas y pruriginosas, visibles.", categoria: "Dermatológico" },
    { termino: "Petequias", tipo: "signo", descripcion: "Manchas rojas puntiformes en piel por sangrado capilar, visibles.", categoria: "Dermatológico" },
    { termino: "Equimosis", tipo: "signo", descripcion: "Hematoma subcutáneo ('moretón') visible, sin relieve.", categoria: "Dermatológico" },
    { termino: "Acrocianosis", tipo: "signo", descripcion: "Coloración azulada de manos y pies, observable en la exploración.", categoria: "Dermatológico" },
    { termino: "Exantema", tipo: "signo", descripcion: "Erupción cutánea generalizada visible y objetivable.", categoria: "Dermatológico" },
    { termino: "Ardor cutáneo", tipo: "sintoma", descripcion: "Sensación de quemón en la piel, percibida solo por el paciente.", categoria: "Dermatológico" },

    // ── MUSCULOESQUELÉTICO ──────────────────
    { termino: "Artralgia", tipo: "sintoma", descripcion: "Dolor en una articulación referido por el paciente, sin inflamación evidente.", categoria: "Musculoesquelético" },
    { termino: "Artritis", tipo: "signo", descripcion: "Inflamación articular (dolor + calor + edema + rubor), objetivable.", categoria: "Musculoesquelético" },
    { termino: "Mialgia", tipo: "sintoma", descripcion: "Dolor muscular percibido subjetivamente por el paciente.", categoria: "Musculoesquelético" },
    { termino: "Contractura muscular", tipo: "signo", descripcion: "Tensión o espasmo muscular palpable por el examinador.", categoria: "Musculoesquelético" },
    { termino: "Atrofia muscular", tipo: "signo", descripcion: "Disminución del volumen muscular objetivable por inspección y medición.", categoria: "Musculoesquelético" },
    { termino: "Crepitación articular", tipo: "signo", descripcion: "Ruido o sensación de roce en articulación, palpable o audible.", categoria: "Musculoesquelético" },

    // ── ENDOCRINO / METABÓLICO ───────────────
    { termino: "Polidipsia", tipo: "sintoma", descripcion: "Sed excesiva referida por el paciente, característica de diabetes.", categoria: "Endocrino" },
    { termino: "Poliuria", tipo: "signo", descripcion: "Excreción excesiva de orina >3L/día, medible objetivamente.", categoria: "Endocrino" },
    { termino: "Polifagia", tipo: "sintoma", descripcion: "Hambre exagerada percibida y referida por el paciente.", categoria: "Endocrino" },
    { termino: "Exoftalmos", tipo: "signo", descripcion: "Protrusión del globo ocular visible, asociada a hipertiroidismo.", categoria: "Endocrino" },
    { termino: "Bocio", tipo: "signo", descripcion: "Aumento visible y palpable del tamaño de la glándula tiroides.", categoria: "Endocrino" },
    { termino: "Hirsutismo", tipo: "signo", descripcion: "Vello corporal excesivo en mujer con patrón masculino, objetivable.", categoria: "Endocrino" },
    { termino: "Temblor", tipo: "signo", descripcion: "Movimiento oscilatorio involuntario visible, objetivable por el médico.", categoria: "Endocrino" },

    // ── UROLÓGICO / RENAL ───────────────────
    { termino: "Disuria", tipo: "sintoma", descripcion: "Dolor o ardor al orinar referido por el paciente.", categoria: "Urológico" },
    { termino: "Hematuria", tipo: "signo", descripcion: "Presencia de sangre en orina, visible o detectable con tira reactiva.", categoria: "Urológico" },
    { termino: "Oliguria", tipo: "signo", descripcion: "Disminución de la diuresis <400 mL/día, objetivable con balance hídrico.", categoria: "Urológico" },
    { termino: "Anuria", tipo: "signo", descripcion: "Ausencia total de producción de orina <100 mL/día.", categoria: "Urológico" },
    { termino: "Dolor lumbar", tipo: "sintoma", descripcion: "Dolor en región lumbar referido subjetivamente por el paciente.", categoria: "Urológico" },
    { termino: "Puño-percusión positiva", tipo: "signo", descripcion: "Dolor al percutir el ángulo costovertebral, signo de afección renal.", categoria: "Urológico" },

    // ── PSIQUIÁTRICO ────────────────────────
    { termino: "Ansiedad", tipo: "sintoma", descripcion: "Sensación de nerviosismo o preocupación excesiva referida por el paciente.", categoria: "Psiquiátrico" },
    { termino: "Alucinaciones", tipo: "signo", descripcion: "Percepciones sin estímulo real, objetivables en la conducta del paciente.", categoria: "Psiquiátrico" },
    { termino: "Agitación psicomotriz", tipo: "signo", descripcion: "Actividad motora excesiva y desordenada, objetivable por el observador.", categoria: "Psiquiátrico" },
    { termino: "Tristeza persistente", tipo: "sintoma", descripcion: "Estado de ánimo deprimido que el paciente refiere subjetivamente.", categoria: "Psiquiátrico" },
    { termino: "Ideas de suicidio", tipo: "sintoma", descripcion: "Pensamientos de hacerse daño referidos por el propio paciente.", categoria: "Psiquiátrico" },
    { termino: "Delirios", tipo: "signo", descripcion: "Creencias falsas y fijas objetivables en el discurso del paciente.", categoria: "Psiquiátrico" },

];

// Estadísticas del banco
const _signos = SIGNOS_SINTOMAS_DATA.filter(x => x.tipo === 'signo').length;
const _sintomas = SIGNOS_SINTOMAS_DATA.filter(x => x.tipo === 'sintoma').length;
console.log(`✅ Banco Signos vs Síntomas cargado: ${SIGNOS_SINTOMAS_DATA.length} tarjetas (${_signos} signos · ${_sintomas} síntomas)`);
