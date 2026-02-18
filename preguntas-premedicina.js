// ========================================
// PREGUNTAS: Premedicina — BANCO COMPLETO
// 108 preguntas con respuestas distribuidas
// ========================================

// ── SALUD PÚBLICA Y CONCEPTOS ────────────────────────────
const PREGUNTAS_SALUDPUBLICA = [
    {pregunta:"Según la OMS, la salud se define como:",opciones:["Completo bienestar físico, mental y social","Ausencia total de enfermedad","Buen funcionamiento de órganos vitales"],correcta:0,explicacion:"La OMS define salud como estado de completo bienestar físico, mental y social, no solo ausencia de enfermedad."},
    {pregunta:"En la tríada ecológica, el 'huésped' hace referencia a:",opciones:["El agente causal de la enfermedad","El organismo susceptible de enfermar","El ambiente donde vive el organismo"],correcta:1,explicacion:"El huésped es el ser vivo (humano o animal) que puede ser afectado por el agente causal."},
    {pregunta:"¿Cuál es un agente causal de tipo BIOLÓGICO?",opciones:["Arsénico en el agua","Radiación solar excesiva","Bacteria Mycobacterium tuberculosis"],correcta:2,explicacion:"Agentes biológicos son seres vivos: bacterias, virus, hongos, parásitos. El arsénico es químico y la radiación es físico."},
    {pregunta:"La prevención PRIMARIA tiene como objetivo:",opciones:["Evitar que la enfermedad ocurra","Rehabilitar al paciente enfermo","Detectar la enfermedad tempranamente"],correcta:0,explicacion:"Prevención primaria actúa antes de que aparezca la enfermedad. Ej: vacunas, educación en salud, saneamiento."},
    {pregunta:"El tamizaje neonatal es un ejemplo de prevención:",opciones:["Terciaria","Secundaria","Primaria"],correcta:1,explicacion:"Detección temprana = prevención secundaria: diagnosticar antes de que aparezcan síntomas."},
    {pregunta:"La INCIDENCIA mide:",opciones:["Todos los casos existentes en un momento","Solo los casos fatales de una enfermedad","Los casos NUEVOS que aparecen en un período"],correcta:2,explicacion:"Incidencia = casos nuevos / población en riesgo. Mide el riesgo de enfermar en un periodo."},
    {pregunta:"La PREVALENCIA mide:",opciones:["Todos los casos (nuevos y anteriores) en un momento dado","Solo los casos nuevos de una semana","El número de muertes por enfermedad"],correcta:0,explicacion:"Prevalencia = todos los casos existentes / población total. Mide la carga total de enfermedad."},
    {pregunta:"Un SIGNO clínico es:",opciones:["Lo que el paciente refiere sentir","Un hallazgo objetivo medible por el médico","Un dato subjetivo del paciente"],correcta:1,explicacion:"Signo = objetivo. El médico lo puede medir u observar: fiebre medida, ictericia, taquicardia al pulso."},
    {pregunta:"Un SÍNTOMA es:",opciones:["Lo que el médico observa directamente","Una medición de laboratorio","Una percepción subjetiva que describe el paciente"],correcta:2,explicacion:"Síntoma = subjetivo. Solo el paciente lo percibe y describe: dolor, mareo, náusea."},
    {pregunta:"La fiebre medida con termómetro es un:",opciones:["Signo","Síntoma","Síndrome"],correcta:0,explicacion:"La fiebre es medible objetivamente con termómetro → es un signo. 'Me siento con calentura' sería síntoma."},
    {pregunta:"El determinante de salud más modificable según Lalonde es:",opciones:["La genética","El estilo de vida","El sistema de salud"],correcta:1,explicacion:"El estilo de vida (alimentación, ejercicio, tabaco, alcohol) representa ~50% de los determinantes y es el más modificable."},
    {pregunta:"La vacunación como medida preventiva corresponde a:",opciones:["Prevención terciaria","Diagnóstico temprano","Prevención primaria"],correcta:2,explicacion:"Las vacunas previenen que la enfermedad aparezca = prevención primaria."},
    {pregunta:"¿Cuál es el vector del dengue?",opciones:["Aedes aegypti","Anopheles gambiae","Culex quinquefasciatus"],correcta:0,explicacion:"El Aedes aegypti es el mosquito transmisor del dengue, chikungunya y Zika. Anopheles transmite malaria."},
    {pregunta:"La mortalidad es el indicador que mide:",opciones:["El número de enfermos en una población","La frecuencia de muertes en una población","El costo de la atención médica"],correcta:1,explicacion:"Mortalidad = número de muertes / población × 1,000. Indica qué tan frecuente es la muerte en una comunidad."},
    {pregunta:"La rehabilitación de un paciente con fractura de cadera es prevención:",opciones:["Cuaternaria","Primaria","Terciaria"],correcta:2,explicacion:"Prevención terciaria busca reducir el daño, discapacidad y rehabilitar a quien ya tiene una enfermedad establecida."},
];

// ── BIOLOGÍA CELULAR ────────────────────────────────────
const PREGUNTAS_BIOLOGIA = [
    {pregunta:"La mitocondria es el orgánulo encargado de:",opciones:["Producir ATP mediante respiración aerobia","Sintetizar proteínas","Almacenar material genético"],correcta:0,explicacion:"La mitocondria es la 'central energética': genera ATP mediante la cadena respiratoria. Tiene su propio ADN."},
    {pregunta:"¿Qué orgánulo contiene el ADN principal de la célula?",opciones:["Ribosoma","Núcleo","Mitocondria"],correcta:1,explicacion:"El núcleo celular contiene el ADN organizado en cromosomas. Es el centro de control celular."},
    {pregunta:"Los ribosomas tienen como función principal:",opciones:["Producir energía (ATP)","Eliminar desechos celulares","Sintetizar proteínas (traducción del ARNm)"],correcta:2,explicacion:"Los ribosomas son donde ocurre la síntesis de proteínas (traducción). Pueden ser libres o adheridos al RER."},
    {pregunta:"¿Qué estructura da rigidez a células vegetales pero NO está en las animales?",opciones:["Pared celular de celulosa","Membrana plasmática","Vacuola central"],correcta:0,explicacion:"La pared celular de celulosa es exclusiva de células vegetales (y bacterias/hongos). Las células animales no la tienen."},
    {pregunta:"La fotosíntesis ocurre en:",opciones:["Mitocondrias","Cloroplastos","Ribosomas"],correcta:1,explicacion:"Los cloroplastos contienen clorofila y capturan energía solar para convertir CO₂ y agua en glucosa y O₂."},
    {pregunta:"La glucólisis produce directamente:",opciones:["6 CO₂ y agua","38 ATP y CO₂","2 ATP netos y 2 piruvatos"],correcta:2,explicacion:"Glucólisis en citoplasma: 1 glucosa → 2 piruvatos + 2 ATP netos + 2 NADH. No requiere oxígeno."},
    {pregunta:"La mitosis produce:",opciones:["2 células hijas genéticamente idénticas","4 células hijas con la mitad de cromosomas","Solo en células sexuales"],correcta:0,explicacion:"Mitosis: 1 célula 2n → 2 células 2n idénticas. Para crecimiento, reparación y reposición de tejidos."},
    {pregunta:"La meiosis produce:",opciones:["Células somáticas idénticas","Gametos con la mitad de cromosomas (n=23)","Solo proteínas estructurales"],correcta:1,explicacion:"Meiosis: 1 célula 2n → 4 gametos n. En humanos: 46 → 23 cromosomas. Genera variabilidad genética."},
    {pregunta:"En el ADN, la Adenina siempre se empareja con:",opciones:["Citosina","Guanina","Timina"],correcta:2,explicacion:"Reglas de Chargaff: A-T (2 puentes H), G-C (3 puentes H). En ARN, A se empareja con Uracilo."},
    {pregunta:"¿Cuántos pares de cromosomas tiene la célula humana somática?",opciones:["23 pares (46 cromosomas totales)","24 pares (48 cromosomas)","21 pares (42 cromosomas)"],correcta:0,explicacion:"Células somáticas humanas: 46 cromosomas = 23 pares homólogos (22 autosomas + 1 par sexual XX o XY)."},
    {pregunta:"El síndrome de Down es causado por:",opciones:["Monosomía del cromosoma X","Trisomía del cromosoma 21","Deleción del cromosoma 5"],correcta:1,explicacion:"Trisomía 21 = 3 copias del cromosoma 21 (47 cromosomas totales). Generalmente por no-disyunción en meiosis materna."},
    {pregunta:"Los lisosomas contienen principalmente:",opciones:["ADN y ribosomas","Glucógeno de reserva energética","Enzimas hidrolíticas para digestión celular"],correcta:2,explicacion:"Lisosomas son vesículas con enzimas digestivas que degradan macromoléculas, orgánulos dañados y patógenos."},
    {pregunta:"¿Cuál es la función del aparato de Golgi?",opciones:["Procesar, modificar y empaquetar proteínas para secretar","Producir energía aerobia","Sintetizar lípidos exclusivamente"],correcta:0,explicacion:"Aparato de Golgi recibe proteínas del RER, las modifica (glucosilación), clasifica y empaqueta en vesículas."},
    {pregunta:"Una célula eucariota se diferencia de una procariota en que:",opciones:["Las eucariotas son más pequeñas","Las eucariotas tienen núcleo definido con membrana nuclear","Solo las procariotas tienen ADN"],correcta:1,explicacion:"Eucariotas: núcleo con membrana nuclear + orgánulos membranosos. Procariotas: sin núcleo definido (ADN en nucleoide)."},
    {pregunta:"La respiración celular aerobia produce un máximo de:",opciones:["2 ATP por glucosa","100 ATP por glucosa","38 ATP por glucosa"],correcta:2,explicacion:"Respiración aerobia completa: glucólisis(2) + Krebs(2) + fosforilación oxidativa(~34) ≈ 36-38 ATP por glucosa."},
];

// ── QUÍMICA Y BIOQUÍMICA ─────────────────────────────────
const PREGUNTAS_QUIMICA = [
    {pregunta:"Los carbohidratos están compuestos principalmente por:",opciones:["Carbono, hidrógeno y oxígeno (CHO)","Carbono, hidrógeno y nitrógeno","Solo carbono e hidrógeno"],correcta:0,explicacion:"Carbohidratos = compuestos CHO. Fórmula general: (CH₂O)n. Glucosa: C₆H₁₂O₆."},
    {pregunta:"Los lípidos (grasas) son:",opciones:["Solubles en agua (hidrofílicos)","Insolubles en agua (hidrofóbicos)","Formados por aminoácidos"],correcta:1,explicacion:"Los lípidos son hidrofóbicos (repelen agua) por sus largas cadenas de hidrocarbonos no polares."},
    {pregunta:"Las proteínas están formadas por cadenas de:",opciones:["Glucosas unidas por enlaces glucosídicos","Ácidos grasos y glicerol","Aminoácidos unidos por enlaces peptídicos"],correcta:2,explicacion:"Proteínas = polímeros de aminoácidos unidos por enlaces peptídicos (entre grupo carboxilo y amino)."},
    {pregunta:"El pH neutro es igual a:",opciones:["7","0","14"],correcta:0,explicacion:"Escala de pH: 0-6 = ácido, 7 = neutro, 8-14 = básico. El agua pura tiene pH 7."},
    {pregunta:"El pH sanguíneo normal en humanos es:",opciones:["6.8 - 7.0","7.35 - 7.45","7.6 - 7.8"],correcta:1,explicacion:"Sangre arterial: pH 7.35-7.45 (ligeramente alcalino). pH < 7.35 = acidosis. pH > 7.45 = alcalosis."},
    {pregunta:"Las enzimas son catalizadores que:",opciones:["Se consumen durante la reacción química","Elevan la temperatura de la reacción","Aceleran reacciones sin consumirse ni alterar productos"],correcta:2,explicacion:"Enzimas = catalizadores biológicos proteicos. Disminuyen la energía de activación sin consumirse."},
    {pregunta:"El ATP almacena y transfiere:",opciones:["Energía química celular","Oxígeno a los tejidos","Información genética"],correcta:0,explicacion:"ATP es la 'moneda energética'. Al hidrolizarse (ATP → ADP + Pi) libera ~7.3 kcal que impulsan reacciones celulares."},
    {pregunta:"Los aminoácidos esenciales son:",opciones:["Los que el cuerpo produce en exceso","Los que deben obtenerse de la dieta porque el cuerpo no los sintetiza","Los únicos presentes en plantas"],correcta:1,explicacion:"Aminoácidos esenciales (9): histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano, valina."},
    {pregunta:"¿Cuántas kcal aporta 1 gramo de carbohidrato?",opciones:["9 kcal","7 kcal","4 kcal"],correcta:2,explicacion:"Valor calórico: carbohidratos = 4 kcal/g, proteínas = 4 kcal/g, lípidos = 9 kcal/g, alcohol = 7 kcal/g."},
    {pregunta:"¿Cuántas kcal aporta 1 gramo de grasa?",opciones:["9 kcal","4 kcal","2 kcal"],correcta:0,explicacion:"Grasas: 9 kcal/g, más del doble que carbohidratos y proteínas, por su alta densidad energética."},
    {pregunta:"La sacarosa es un disacárido formado por:",opciones:["Glucosa + galactosa","Glucosa + fructosa","Glucosa + glucosa"],correcta:1,explicacion:"Sacarosa (azúcar de mesa) = glucosa + fructosa. Lactosa = glucosa + galactosa. Maltosa = glucosa + glucosa."},
    {pregunta:"Las vitaminas liposolubles son:",opciones:["Vitamina C y complejo B","Solo vitamina C y D","Vitaminas A, D, E y K"],correcta:2,explicacion:"Vitaminas liposolubles (almacenadas en grasa): A, D, E, K. Hidrosolubles: C y complejo B (se excretan por orina)."},
    {pregunta:"¿Cuál es el producto final de la digestión de proteínas?",opciones:["Aminoácidos","Glicerol y ácidos grasos","Glucosa y fructosa"],correcta:0,explicacion:"Proteínas → péptidos → aminoácidos (por pepsina, tripsina, quimotripsina). Absorción en intestino delgado."},
    {pregunta:"Un ácido tiene pH:",opciones:["Mayor a 7","Menor a 7","Igual a 7"],correcta:1,explicacion:"pH < 7 = ácido (libera H⁺). pH = 7 = neutro. pH > 7 = básico (libera OH⁻)."},
    {pregunta:"¿Cuál es la función del hierro en el organismo?",opciones:["Transmisión de impulsos nerviosos","Formación de huesos y dientes","Parte de la hemoglobina para transportar oxígeno"],correcta:2,explicacion:"El hierro es el componente central del grupo hemo en la hemoglobina. Su déficit causa anemia ferropénica."},
];

// ── ANATOMÍA ─────────────────────────────────────────────
const PREGUNTAS_ANATOMIA = [
    {pregunta:"El corazón humano tiene:",opciones:["4 cavidades (2 aurículas y 2 ventrículos)","2 cavidades (1 aurícula y 1 ventrículo)","6 cavidades con válvulas"],correcta:0,explicacion:"Corazón = 4 cámaras: aurícula derecha, aurícula izquierda, ventrículo derecho, ventrículo izquierdo."},
    {pregunta:"¿Cuántos huesos tiene el esqueleto adulto humano?",opciones:["150 huesos","206 huesos","300 huesos"],correcta:1,explicacion:"Esqueleto adulto: ~206 huesos. Al nacer hay ~270-300 que se fusionan durante el desarrollo."},
    {pregunta:"El hueso más largo del cuerpo humano es:",opciones:["El radio","El húmero","El fémur"],correcta:2,explicacion:"El fémur (muslo) es el hueso más largo y resistente del cuerpo. Articula cadera con rodilla."},
    {pregunta:"La tráquea se bifurca en:",opciones:["Bronquios principales derecho e izquierdo","Bronquiolos terminales","Alvéolos directamente"],correcta:0,explicacion:"La tráquea se divide en la carina en dos bronquios principales. El derecho es más corto y vertical."},
    {pregunta:"El hígado está ubicado en el cuadrante abdominal:",opciones:["Inferior izquierdo","Superior derecho","Inferior derecho"],correcta:1,explicacion:"El hígado ocupa principalmente el cuadrante superior derecho del abdomen, debajo del diafragma."},
    {pregunta:"El páncreas tiene función:",opciones:["Solo digestiva (exocrina)","Solo hormonal (endocrina)","Mixta: exocrina (enzimas) y endocrina (insulina/glucagón)"],correcta:2,explicacion:"Páncreas exocrino: enzimas digestivas. Páncreas endocrino: islotes de Langerhans producen insulina y glucagón."},
    {pregunta:"Los riñones filtran la sangre produciendo:",opciones:["Orina","Bilis","Linfa"],correcta:0,explicacion:"Los riñones filtran ~180 L de sangre/día, produciendo ~1.5 L de orina. Regulan PA y electrolitos."},
    {pregunta:"¿Cuál es la función principal de los eritrocitos (glóbulos rojos)?",opciones:["Defensa inmune contra infecciones","Transportar oxígeno mediante hemoglobina","Producir factores de coagulación"],correcta:1,explicacion:"Eritrocitos tienen hemoglobina que transporta O₂ de pulmones a tejidos y CO₂ de regreso. Vida: ~120 días."},
    {pregunta:"Los leucocitos (glóbulos blancos) tienen función principal de:",opciones:["Transporte de oxígeno","Coagulación de la sangre","Defensa inmunológica"],correcta:2,explicacion:"Leucocitos = células inmunes: neutrófilos (fagocitosis), linfocitos (inmunidad adaptativa), monocitos, etc."},
    {pregunta:"El cerebelo tiene como función principal:",opciones:["Coordinar movimientos, equilibrio y postura","Iniciar movimientos voluntarios","Procesar emociones"],correcta:0,explicacion:"Cerebelo NO inicia movimientos, los COORDINA. Lesión cerebelosa → ataxia (pérdida de coordinación)."},
    {pregunta:"El lóbulo occipital del cerebro procesa principalmente:",opciones:["El lenguaje hablado","La información visual","Las emociones y la memoria"],correcta:1,explicacion:"Occipital = visión. Frontal = movimiento/personalidad. Temporal = audición/memoria. Parietal = sensaciones."},
    {pregunta:"La sinapsis es:",opciones:["La membrana que rodea al axón","El impulso eléctrico neuronal","La unión funcional entre dos neuronas"],correcta:2,explicacion:"Sinapsis = punto de comunicación entre neuronas. Puede ser química (neurotransmisores) o eléctrica."},
    {pregunta:"¿Qué estructura anatómica produce la insulina?",opciones:["Islotes de Langerhans del páncreas","Glándula suprarrenal","Hígado"],correcta:0,explicacion:"Las células beta de los islotes de Langerhans (páncreas endocrino) producen insulina en respuesta a la hiperglucemia."},
    {pregunta:"El intestino delgado tiene principalmente función de:",opciones:["Almacenamiento de heces","Absorción de nutrientes","Producción de bilis"],correcta:1,explicacion:"Intestino delgado (duodeno, yeyuno, íleon): principal sitio de digestión y absorción de nutrientes. Mide 6-7 metros."},
    {pregunta:"Las plaquetas (trombocitos) participan en:",opciones:["Transporte de CO₂","Producción de anticuerpos","Coagulación sanguínea y reparación vascular"],correcta:2,explicacion:"Las plaquetas se adhieren a zonas de lesión vascular e inician el proceso de coagulación para detener el sangrado."},
];

// ── FISIOLOGÍA ────────────────────────────────────────────
const PREGUNTAS_FISIOLOGIA = [
    {pregunta:"La frecuencia cardíaca normal en adultos en reposo es:",opciones:["60-100 latidos/min","40-60 latidos/min","110-130 latidos/min"],correcta:0,explicacion:"FC normal adulto: 60-100 lpm. Bradicardia < 60 lpm; taquicardia > 100 lpm."},
    {pregunta:"La presión arterial normal en adultos es:",opciones:["100/60 mmHg","120/80 mmHg","140/90 mmHg"],correcta:1,explicacion:"PA normal: 120/80 mmHg. Hipertensión: ≥140/90. Hipotensión: <90/60."},
    {pregunta:"El gasto cardíaco (GC) se calcula como:",opciones:["Frecuencia cardíaca ÷ Volumen sistólico","Presión arterial × Frecuencia respiratoria","Frecuencia cardíaca × Volumen sistólico"],correcta:2,explicacion:"GC = FC × VS. Normal en reposo: ~70 lpm × 70 mL = ~5 L/min. En ejercicio puede llegar a 25 L/min."},
    {pregunta:"¿Cuál es la frecuencia respiratoria normal en adultos?",opciones:["12-20 respiraciones/min","6-10 respiraciones/min","25-35 respiraciones/min"],correcta:0,explicacion:"FR normal adultos: 12-20 rpm. Taquipnea > 20 rpm. Bradipnea < 12 rpm."},
    {pregunta:"La temperatura corporal normal es aproximadamente:",opciones:["35.0 - 35.9 °C","36.0 - 37.5 °C","38.0 - 39.0 °C"],correcta:1,explicacion:"Temperatura normal: 36-37.5°C (axilar). Febrícula: 37.5-38°C. Fiebre: >38°C. Hipotermia: <35°C."},
    {pregunta:"La saturación de oxígeno (SpO₂) normal es:",opciones:["85-89%","70-80%","95-100%"],correcta:2,explicacion:"SpO₂ normal: 95-100%. Por debajo del 90% se considera hipoxemia significativa."},
    {pregunta:"El sistema nervioso simpático, ante una emergencia:",opciones:["Aumenta FC, dilata pupilas y libera glucosa (lucha o huida)","Disminuye la frecuencia cardíaca","Aumenta la digestión y secreciones gástricas"],correcta:0,explicacion:"Simpático = 'lucha o huida': ↑FC, ↑PA, dilata pupilas y bronquios, ↓digestión, libera glucosa. Mediado por noradrenalina."},
    {pregunta:"La insulina produce en el organismo:",opciones:["Aumento de la glucosa en sangre","Disminución de la glucemia (capta glucosa, forma glucógeno)","Destrucción directa de tejido adiposo"],correcta:1,explicacion:"Insulina: hormona anabólica que baja la glucemia facilitando captación de glucosa y síntesis de glucógeno y lípidos."},
    {pregunta:"La glucosa normal en ayuno en sangre es:",opciones:["30-50 mg/dL","150-200 mg/dL","70-100 mg/dL"],correcta:2,explicacion:"Glucemia normal ayuno: 70-100 mg/dL. Prediabetes: 100-125 mg/dL. Diabetes: ≥126 mg/dL (en dos tomas)."},
    {pregunta:"¿Qué es la homeostasis?",opciones:["La capacidad del organismo de mantener un ambiente interno estable","Una enfermedad del sistema inmune","El proceso de digestión de proteínas"],correcta:0,explicacion:"Homeostasis = mecanismos que mantienen constantes parámetros internos: temperatura, pH, glucemia, electrolitos, etc."},
    {pregunta:"El surfactante pulmonar evita:",opciones:["La entrada de bacterias a los alvéolos","El colapso de los alvéolos reduciendo la tensión superficial","La acumulación de CO₂ en los pulmones"],correcta:1,explicacion:"Surfactante (fosfolípidos de neumocitos tipo II) reduce la tensión superficial alveolar previniendo el colapso al exhalar."},
    {pregunta:"La digestión de proteínas comienza en:",opciones:["La boca con la ptialina","El duodeno exclusivamente","El estómago con la pepsina y el ácido clorhídrico"],correcta:2,explicacion:"Proteínas: digestión inicia en estómago (pepsina + HCl). Continúa en duodeno (tripsina, quimotripsina). Absorción en yeyuno."},
    {pregunta:"¿Qué hormona regula la reabsorción de agua en el riñón?",opciones:["Hormona antidiurética (ADH / vasopresina)","Insulina","Glucagón"],correcta:0,explicacion:"ADH (hipotálamo/hipófisis posterior) aumenta la reabsorción de agua en el túbulo colector renal."},
    {pregunta:"El hematocrito indica:",opciones:["La concentración de hemoglobina en sangre","El porcentaje de eritrocitos en el volumen total de sangre","El número de glóbulos blancos por mm³"],correcta:1,explicacion:"Hematocrito = % de eritrocitos en sangre total. Normal: Hombres 40-52%, Mujeres 36-48%. Bajo en anemia."},
    {pregunta:"La osmosis es el movimiento de:",opciones:["Solutos hacia mayor concentración","Proteínas contra gradiente de concentración","Agua a través de membrana semipermeable de menor a mayor concentración de solutos"],correcta:2,explicacion:"Osmosis: movimiento pasivo de agua por membrana semipermeable desde zona hiposmótica hacia hiperosmótica."},
];

// ── INMUNOLOGÍA ─────────────────────────────────────────
const PREGUNTAS_INMUNOLOGIA = [
    {pregunta:"La primera línea de defensa del organismo incluye:",opciones:["Piel, mucosas y sus secreciones (lisozima, moco)","Linfocitos T y B específicos","Solo anticuerpos IgG circulantes"],correcta:0,explicacion:"Barreras físicas y químicas: piel intacta, mucosas, cilios respiratorios, ácido gástrico, lisozima en saliva y lágrimas."},
    {pregunta:"Los neutrófilos son células que:",opciones:["Producen anticuerpos específicos","Fagocitan y destruyen bacterias rápidamente","Recuerdan infecciones pasadas"],correcta:1,explicacion:"Neutrófilos = primera línea celular del sistema innato. Fagocitos que llegan rápido al sitio de infección."},
    {pregunta:"La inmunidad ADAPTATIVA se caracteriza por:",opciones:["Ser inespecífica y sin memoria","Actuar en minutos ante cualquier patógeno","Especificidad y memoria inmunológica (base de las vacunas)"],correcta:2,explicacion:"Sistema adaptativo: específico (reconoce antígenos concretos) y con memoria. Linfocitos B y T."},
    {pregunta:"Los linfocitos B producen:",opciones:["Anticuerpos (inmunoglobulinas) específicos","Interferones antivirales","Macrófagos tisulares"],correcta:0,explicacion:"Linfocitos B → células plasmáticas que producen anticuerpos (IgG, IgM, IgA, IgE, IgD) específicos."},
    {pregunta:"¿Qué tipo de inmunoglobulina predomina en leche materna?",opciones:["IgE","IgA secretora","IgM"],correcta:1,explicacion:"La leche materna es rica en IgA secretora que protege al neonato en mucosas intestinales (inmunidad pasiva)."},
    {pregunta:"La anafilaxia es una reacción:",opciones:["Retardada mediada por células T","Solo a medicamentos intravenosos","Inmediata mediada por IgE (hipersensibilidad tipo I)"],correcta:2,explicacion:"Anafilaxia = hipersensibilidad tipo I: IgE en mastocitos → histamina → vasodilatación, broncoconstricción."},
    {pregunta:"¿Para qué sirve la fiebre en una infección?",opciones:["Inhibe el crecimiento bacteriano y potencia respuestas inmunes","Es siempre perjudicial","Solo indica mal pronóstico"],correcta:0,explicacion:"Fiebre moderada es beneficiosa: inhibe replicación bacteriana/viral, activa fagocitos y respuestas inmunes."},
    {pregunta:"Las vacunas funcionan generando:",opciones:["Inmunidad innata inespecífica","Memoria inmunológica adaptativa sin causar la enfermedad","Solo anticuerpos IgE"],correcta:1,explicacion:"Vacunas entrenan al sistema adaptativo generando células B y T de memoria sin causar enfermedad."},
];

// ── GENÉTICA ──────────────────────────────────────────────
const PREGUNTAS_GENETICA = [
    {pregunta:"¿Cuántos cromosomas tiene un gameto humano?",opciones:["46 cromosomas (diploide)","48 cromosomas","23 cromosomas (haploide)"],correcta:2,explicacion:"Gametos son haploides (n=23). Al fecundarse: 23 + 23 = 46 cromosomas (diploide)."},
    {pregunta:"La herencia autosómica dominante significa:",opciones:["Basta una copia del alelo mutante para expresar la enfermedad","Solo se manifiesta en hombres","Solo se hereda de la madre"],correcta:0,explicacion:"Autosómica dominante: 1 alelo mutante (heterocigoto) es suficiente. Ej: corea de Huntington, neurofibromatosis."},
    {pregunta:"La hemofilia es ligada al X. Los varones la padecen porque:",opciones:["Tienen doble copia del gen defectuoso","Solo tienen un cromosoma X, sin alelo normal que compense","Producen menos plaquetas que las mujeres"],correcta:1,explicacion:"Hemofilia ligada a X: varones (XY) con un X defectuoso padecen la enfermedad. Mujeres (XX) pueden ser portadoras."},
    {pregunta:"¿Qué es una mutación puntual?",opciones:["La pérdida de un cromosoma completo","Translocación de cromosomas completos","Cambio de un solo nucleótido en la secuencia del ADN"],correcta:2,explicacion:"Mutación puntual = sustitución de un nucleótido. Puede ser sinónima (mismo aminoácido) o de sentido erróneo."},
    {pregunta:"El síndrome de Turner (45,X0) afecta a:",opciones:["Mujeres con un solo cromosoma X (monosomía X)","Hombres con un X extra","Ambos sexos por igual"],correcta:0,explicacion:"Turner = monosomía X: fenotipo femenino con baja talla, cuello alado, amenorrea e infertilidad."},
];

// ── ENSAMBLAJE ───────────────────────────────────────────
const PREGUNTAS_PREMEDICINA = [
    ...PREGUNTAS_SALUDPUBLICA,
    ...PREGUNTAS_BIOLOGIA,
    ...PREGUNTAS_QUIMICA,
    ...PREGUNTAS_ANATOMIA,
    ...PREGUNTAS_FISIOLOGIA,
    ...PREGUNTAS_INMUNOLOGIA,
    ...PREGUNTAS_GENETICA,
];

console.log("✅ Premedicina cargado:", PREGUNTAS_PREMEDICINA.length, "preguntas");
