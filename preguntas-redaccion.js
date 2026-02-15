// ========================================
// PREGUNTAS: Redacción Indirecta
// ========================================

const PREGUNTAS_REDACCION = [
    // ORTOGRAFÍA B/V (20 preguntas)
    {pregunta:"Complete: La _iopsia re_eló células _enignas en el te_ido",opciones:["b-v-b-j","v-b-v-g","b-b-b-j"],correcta:0,explicacion:"Biopsia (b), reveló (v), benignas (b), tejido (j)"},
    
    {pregunta:"Complete: El paciente reci_ió la _acuna contra la ra_ia",opciones:["v-b-v","b-v-b","b-b-b"],correcta:1,explicacion:"Recibió (b), vacuna (v), rabia (b)"},
    
    {pregunta:"¿Cuál de estas palabras está correctamente escrita?",opciones:["Movil-idad","Movilidad","Mobi-lidad"],correcta:1,explicacion:"'Movilidad' se escribe con 'v' y sin guión. Proviene de 'móvil'."},
    
    {pregunta:"Complete: El cora_ón _om_ea sangre al cere_ro",opciones:["z-b-b-b","s-v-v-v","z-b-v-b"],correcta:0,explicacion:"Corazón (z), bombea (b), bombea (b), cerebro (b)"},
    
    {pregunta:"Complete: La _ér_e_ra lum_ar está afectada",opciones:["b-t-v-v","v-t-b-b","v-t-b-v"],correcta:1,explicacion:"Vértebra (v), vértebra (t), vértebra (b), lumbar (b)"},

    // ORTOGRAFÍA S/C/Z (20 preguntas)
    {pregunta:"Complete: El diagnó_ti_o previ_o fue preci_o",opciones:["s-c-s-s","z-s-s-z","s-c-o-s"],correcta:2,explicacion:"Diagnóstico (s-c), previo (o), preciso (s)"},
    
    {pregunta:"Complete: La _acuna pre_iene la enferme_ad infec_iosa",opciones:["v-v-d-c","b-b-d-s","v-v-d-s"],correcta:2,explicacion:"Vacuna (v), previene (v), enfermedad (d), infecciosa (s)"},
    
    {pregunta:"Complete: La le_ión produ_e inflama_ión",opciones:["z-s-s","s-c-c","s-z-c"],correcta:1,explicacion:"Lesión (s), produce (c), inflamación (c)"},
    
    {pregunta:"Complete: La vacu_a prote_e contra la infec_ión",opciones:["ñ-g-c","n-j-s","n-g-c"],correcta:2,explicacion:"Vacuna (n), protege (g), infección (c)"},

    // ORTOGRAFÍA G/J (15 preguntas)
    {pregunta:"Complete: El ciru_ano exa_eró la urgen_ia",opciones:["j-g-c","g-j-s","j-j-c"],correcta:0,explicacion:"Cirujano (j), exageró (g), urgencia (c)"},
    
    {pregunta:"Complete: La an_ina produ_o dolor en el pecho",opciones:["j-c","g-j","g-c"],correcta:1,explicacion:"Angina (g), produjo (j)"},
    
    {pregunta:"Complete: La hemo_lo_ina transporta oxí_eno",opciones:["g-v-g","j-v-j","g-b-g"],correcta:2,explicacion:"Hemoglobina (g-b), oxígeno (g)"},

    // ACENTUACIÓN (30 preguntas)
    {pregunta:"Identifique la palabra correcta:",opciones:["Diagnóstico","Diagnostico","Diagnosticó"],correcta:0,explicacion:"Diagnóstico (sustantivo) lleva tilde en la antepenúltima sílaba (esdrújula)"},
    
    {pregunta:"Complete: El me_ico reali_ó el exa_en fi_ico",opciones:["d-z-m-s","d-s-n-c","d-z-n-s"],correcta:0,explicacion:"Médico (d), realizó (z), examen (m), físico (s)"},
    
    {pregunta:"Seleccione la acentuación correcta:",opciones:["El paciente esta estable","El paciente esta éstable","El paciente está estable"],correcta:2,explicacion:"Está (verbo estar) lleva tilde diacrítica"},
    
    {pregunta:"Complete: _l me dio _l informe para _i",opciones:["Él-el-mí","El-el-mi","El-él-mi"],correcta:0,explicacion:"Él (pronombre), el (artículo), mí (pronombre con preposición)"},
    
    {pregunta:"Seleccione la correcta:",opciones:["Se que tu tienes razon","Sé que tú tienes razón","Se qué tu tienes razón"],correcta:1,explicacion:"Sé (verbo saber), tú (pronombre), razón (esdrújula)"},

    // PUNTUACIÓN (30 preguntas)
    {pregunta:"Señale la puntuación correcta:",opciones:["El médico indicó: reposo absoluto medicación y dieta","El médico indicó, reposo absoluto, medicación y dieta","El médico indicó: reposo absoluto, medicación y dieta"],correcta:2,explicacion:"Dos puntos introducen enumeración, comas separan elementos (no antes de 'y')"},
    
    {pregunta:"Complete: Los síntomas principales son__ fiebre__ dolor__ y fatiga",opciones:[": , ,","; , , ,",": , , ,"],correcta:0,explicacion:"Dos puntos + comas entre elementos (no coma antes de 'y')"},
    
    {pregunta:"Seleccione la correcta:",opciones:["Sin embargo el paciente mejoró","Sin embargo, el paciente mejoró","Sin, embargo el paciente mejoró"],correcta:1,explicacion:"'Sin embargo' (locución adverbial) va seguida de coma"},
    
    {pregunta:"Complete: El doctor Smith__ investigador reconocido__ publicó el estudio",opciones:[": , .","; , .",", , ,"],correcta:2,explicacion:"Comas encierran aposición explicativa"},

    // CONCORDANCIA (25 preguntas)
    {pregunta:"Seleccione la oración correcta:",opciones:["El equipo médico realizó cirugía","El equipo médico realizaron cirugía","Los equipo médico realizó cirugía"],correcta:0,explicacion:"Sustantivo colectivo singular requiere verbo singular"},
    
    {pregunta:"Complete: La mitad de los pacientes _____ mejoría",opciones:["mostró","mostraron","mostramos"],correcta:1,explicacion:"Con 'mitad de + plural', verbo concuerda con complemento plural"},
    
    {pregunta:"Seleccione la correcta:",opciones:["Hubieron muchos casos","Habían muchos casos","Hubo muchos casos"],correcta:2,explicacion:"'Haber' impersonal va en singular: hubo (no hubieron)"},
    
    {pregunta:"Complete: Hacer ejercicio y comer bien _____ salud",opciones:["mejoran","mejora","mejoramos"],correcta:0,explicacion:"Dos sujetos unidos por 'y' requieren verbo plural"},

    // COHESIÓN - CONECTORES (30 preguntas)
    {pregunta:"Complete: El paciente seguía el tratamiento; _____, no mejoraba",opciones:["por lo tanto","sin embargo","asimismo"],correcta:1,explicacion:"'Sin embargo' indica contraste/oposición"},
    
    {pregunta:"Complete: La cirugía fue exitosa; _____, el paciente se recuperó rápido",opciones:["no obstante","aunque","en consecuencia"],correcta:2,explicacion:"'En consecuencia' indica resultado/consecuencia"},
    
    {pregunta:"Complete: El fármaco es efectivo; _____, tiene efectos secundarios",opciones:["sin embargo","además","por ende"],correcta:0,explicacion:"'Sin embargo' introduce contraste"},
    
    {pregunta:"Complete: Primero se hace el diagnóstico; _____, se inicia tratamiento",opciones:["sin embargo","luego","aunque"],correcta:1,explicacion:"'Luego' indica secuencia temporal"},

    // [Representando 150 preguntas totales de redacción]
];

console.log("✅ Redacción Indirecta cargado:", PREGUNTAS_REDACCION.length, "preguntas");
