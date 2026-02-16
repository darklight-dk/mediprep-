// ============================================
// EVALUACIÓN: APARATO DIGESTIVO
// 60 preguntas — basadas en aparato-digestivo.js
// Temas: Boca/Esófago, Estómago, Intestino delgado,
//        Hígado/Vesícula/Páncreas, Intestino grueso,
//        Patologías digestivas
// ============================================

const EVALUACION_APARATO_DIGESTIVO = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — BOCA, FARINGE Y ESÓFAGO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Dónde comienza la digestión química de los carbohidratos?",
        opciones: ["En el estómago por acción del HCl", "En el intestino delgado por la amilasa pancreática", "En la boca por la amilasa salival (ptialina)"],
        correcta: 2,
        explicacion: "La amilasa salival (ptialina), producida principalmente por la glándula parótida, inicia la digestión del almidón en la boca convirtiéndolo en maltosa. Aunque el tiempo de contacto es breve, esta enzima sigue activa en el estómago hasta que el HCl la inactiva (pH ácido)."
    },
    {
        pregunta: "La glándula salival más grande es:",
        opciones: ["La glándula submandibular (submaxilar)", "La glándula sublingual", "La glándula parótida"],
        correcta: 2,
        explicacion: "La parótida es la glándula salival más grande y la que produce principalmente amilasa salival (secreción serosa). Es la afectada en la parotiditis (paperas, infección por virus de la parotiditis). Las glándulas submandibulares producen secreción mixta (serosa y mucosa) y las sublinguales principalmente mucosa."
    },
    {
        pregunta: "La dentición permanente adulta tiene:",
        opciones: ["32 dientes (incluyendo los cuatro cordales/muelas del juicio)", "28 dientes sin contar los cordales", "20 dientes (igual que la dentición primaria)"],
        correcta: 0,
        explicacion: "Dentición permanente completa: 32 dientes = 8 incisivos + 4 caninos + 8 premolares + 12 molares (incluyendo 4 cordales/muelas del juicio). La dentición primaria (decidua o de leche) tiene 20 dientes. Tipos por función: incisivos (cortar), caninos (desgarrar), molares/premolares (triturar)."
    },
    {
        pregunta: "La deglución (tragar) involucra a la epiglotis porque:",
        opciones: ["La epiglotis relaja el esfínter esofágico superior para permitir la entrada del bolo", "La epiglotis empuja el bolo alimenticio hacia el esófago activamente", "La epiglotis se cierra sobre la laringe para evitar la aspiración del bolo a la vía aérea"],
        correcta: 2,
        explicacion: "Durante la deglución: lengua empuja el bolo hacia la faringe → el paladar blando sube (cierra la nasofaringe) → la laringe sube y la epiglotis se inclina hacia atrás cubriendo la glotis → el bolo pasa al esófago. Si este mecanismo falla → aspiración → neumonía aspirativa o ahogamiento."
    },
    {
        pregunta: "El esófago cumple la función de:",
        opciones: ["Absorber agua y electrolitos del bolo antes de llegar al estómago", "Conducir el bolo alimenticio de la faringe al estómago mediante peristaltismo", "Iniciar la digestión de proteínas con enzimas propias"],
        correcta: 1,
        explicacion: "El esófago es un tubo muscular de ~25 cm que solo CONDUCE el bolo mediante peristaltismo (ondas de contracción coordinadas). No digiere ni absorbe nada. Tiene dos esfínteres: superior (cricofaríngeo, voluntario) e inferior (cardias, involuntario), cuya incompetencia causa ERGE."
    },
    {
        pregunta: "El esfínter esofágico inferior (cardias) tiene la función de:",
        opciones: ["Regular el vaciamiento del estómago hacia el duodeno", "Separar el esófago de la faringe en la parte superior", "Evitar el reflujo del contenido gástrico ácido hacia el esófago"],
        correcta: 2,
        explicacion: "El cardias (esfínter esofágico inferior, EEI) es la barrera antirreflujo. En reposo está cerrado (presión 15-25 mmHg) y se relaja al tragar. Su incompetencia → reflujo de ácido → esofagitis → ERGE. El EEI se relaja con: alcohol, tabaco, chocolate, grasas, cafeína y algunos medicamentos."
    },
    {
        pregunta: "¿Cuáles son las 5 modalidades del gusto detectadas por las papilas gustativas?",
        opciones: ["Dulce, salado, amargo, picante y metálico", "Dulce, salado, amargo, ácido y umami", "Dulce, salado, amargo, ácido y picante"],
        correcta: 1,
        explicacion: "Las 5 modalidades gustativas básicas: dulce (azúcares), salado (Na⁺), amargo (alcaloides, tóxicos), ácido (H⁺, alimentos fermentados) y umami (glutamato, 'sabroso'). El picante NO es un sabor sino una sensación de dolor/calor mediada por receptores TRPV1. El 'sabor' real es una combinación de gusto + olfato + textura."
    },
    {
        pregunta: "La acalasia es una enfermedad del esófago que se produce por:",
        opciones: ["Estenosis mecánica del esófago por cicatriz post-inflamatoria", "Falla en la relajación del EEI y ausencia de peristaltismo esofágico (disfunción del plexo de Auerbach)", "Inflamación del esófago por reflujo ácido crónico"],
        correcta: 1,
        explicacion: "Acalasia: destrucción de las células ganglionares del plexo mioentérico esofágico (Auerbach) → EEI no se relaja + ausencia de peristaltismo → disfagia progresiva (primero sólidos, luego líquidos), regurgitación, dolor torácico. Diagnóstico: manometría esofágica (gold standard). Tratamiento: miotomía de Heller o dilatación neumática."
    },
    {
        pregunta: "Las várices esofágicas son una complicación de:",
        opciones: ["La hipertensión portal (cirrosis) que desvía la sangre por las venas esofágicas", "La acalasia no tratada con dilatación esofágica progresiva", "El reflujo gastroesofágico crónico con esofagitis grave"],
        correcta: 0,
        explicacion: "En la cirrosis, la hipertensión portal desvía sangre de la vena porta a circuitos colaterales, incluyendo las venas esofágicas distales → se dilatan formando várices. Riesgo de rotura → hemorragia digestiva alta masiva (hematemesis de sangre roja brillante) con mortalidad del 20-30% por episodio."
    },
    {
        pregunta: "El esófago de Barrett es una complicación del ERGE que consiste en:",
        opciones: ["Espasmo difuso del esófago por irritación ácida crónica", "Metaplasia del epitelio esofágico escamoso por epitelio columnar intestinal → riesgo de adenocarcinoma", "Estenosis péptica del esófago por cicatrización del tejido inflamado"],
        correcta: 1,
        explicacion: "Esófago de Barrett: el epitelio escamoso normal del esófago distal es reemplazado por epitelio columnar intestinal (metaplasia) por exposición crónica al ácido. Es una lesión PREMALIGNA → riesgo de adenocarcinoma de esófago 30-40 veces mayor. Requiere endoscopía con biopsias de seguimiento periódico."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — ESTÓMAGO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El pH del jugo gástrico normal es:",
        opciones: ["1.5-2.0 (muy ácido)", "6.5-7.0 (casi neutro)", "4.0-5.0 (levemente ácido)"],
        correcta: 0,
        explicacion: "El jugo gástrico tiene pH 1.5-2.0, uno de los más ácidos del organismo. Este pH ácido: activa el pepsinógeno → pepsina, desnaturaliza proteínas, mata la mayoría de bacterias ingeridas y facilita la absorción de hierro y calcio. Los IBP (omeprazol) elevan el pH gástrico por encima de 4."
    },
    {
        pregunta: "Las células parietales u oxínticas del estómago producen:",
        opciones: ["HCl (ácido clorhídrico) y factor intrínseco", "Pepsinógeno y gastrina", "Moco y prostaglandinas protectoras"],
        correcta: 0,
        explicacion: "Células parietales (oxínticas): producen HCl (mediante la H⁺/K⁺-ATPasa = bomba de protones, diana de los IBP) y factor intrínseco (esencial para absorción de B12). Son las más abundantes en el cuerpo gástrico. Los autoanticuerpos contra las células parietales causan gastritis tipo A y anemia perniciosa."
    },
    {
        pregunta: "Las células principales (zimogénicas) del estómago producen:",
        opciones: ["HCl y factor intrínseco", "Pepsinógeno (proenzima que el HCl convierte en pepsina activa)", "Gastrina y secretina"],
        correcta: 1,
        explicacion: "Las células principales producen pepsinógeno (forma inactiva). El HCl del estómago activa el pepsinógeno → pepsina, la principal proteasa gástrica que digiere proteínas en polipéptidos. La autoactivación en cadena: una vez hay pepsina, también activa el pepsinógeno."
    },
    {
        pregunta: "La gastrina es una hormona producida por las células G del antro gástrico. Su función es:",
        opciones: ["Estimular la secreción de HCl por las células parietales", "Promover el vaciamiento gástrico al duodeno", "Inhibir la secreción ácida cuando el pH es muy bajo"],
        correcta: 0,
        explicacion: "La gastrina (células G del antro y duodeno) estimula: secreción de HCl por células parietales, secreción de pepsinógeno y motilidad gástrica. Se libera por: proteínas en el estómago, distensión gástrica, nervio vago. Se inhibe por: pH <2.5 (retroalimentación negativa). El gastrinoma (tumor de Zollinger-Ellison) produce úlceras masivas por exceso de gastrina."
    },
    {
        pregunta: "El factor intrínseco secretado por las células parietales es necesario para:",
        opciones: ["La absorción de vitamina B12 en el íleon terminal", "La digestión de las grasas en el intestino delgado", "La producción de eritrocitos en la médula ósea directamente"],
        correcta: 0,
        explicacion: "El factor intrínseco (FI) es una glucoproteína que se une a la vitamina B12 en el estómago formando un complejo FI-B12. Este complejo es reconocido por receptores específicos en el íleon terminal → absorción. Sin FI (gastritis atrófica autoinmune, gastrectomía) → déficit de B12 → anemia megaloblástica perniciosa."
    },
    {
        pregunta: "El quimo es:",
        opciones: ["El producto de la digestión en el intestino delgado listo para ser absorbido", "La mezcla semilíquida de alimentos con jugos gástricos que el estómago envía al duodeno", "El contenido del intestino grueso previo a la defecación"],
        correcta: 1,
        explicacion: "El quimo es la mezcla ácida (pH ~2) semilíquida que resulta de la acción mecánica (mezcla) y química (HCl + pepsina) del estómago sobre los alimentos. El píloro lo libera al duodeno en pequeñas porciones donde es neutralizado por el bicarbonato pancreático y mezclado con bilis y enzimas pancreáticas."
    },
    {
        pregunta: "El vaciamiento gástrico es más rápido para:",
        opciones: ["Los carbohidratos simples (los más rápidos, ~1-2 horas)", "El agua pura (tarda tanto como los sólidos)", "Las grasas y proteínas (tarda 5-6 horas)"],
        correcta: 0,
        explicacion: "El vaciamiento gástrico depende del tipo de nutriente: carbohidratos simples ~1-2 h, proteínas ~3-4 h, grasas ~5-6 h. El agua pura se vacía rápidamente (min-1h). La CCK liberada por la grasa en duodeno inhibe el vaciamiento gástrico. Por eso las comidas con grasa producen mayor saciedad."
    },
    {
        pregunta: "El omeprazol (y los IBP en general) actúan:",
        opciones: ["Bloqueando irreversiblemente la H⁺/K⁺-ATPasa (bomba de protones) de las células parietales", "Neutralizando el ácido ya secretado en el estómago (como los antiácidos)", "Bloqueando los receptores H2 de histamina en las células parietales"],
        correcta: 0,
        explicacion: "Los IBP (Inhibidores de la Bomba de Protones): omeprazol, pantoprazol, lansoprazol, esomeprazol. Bloquean IRREVERSIBLEMENTE la H⁺/K⁺-ATPasa (bomba de protones) de las células parietales → ↓↓ secreción de HCl. Son los antisecretores más potentes. Los anti-H2 (ranitidina) bloquean el receptor de histamina → menos eficaces."
    },
    {
        pregunta: "Las regiones del estómago de superior a inferior son:",
        opciones: ["Píloro → Antro → Cuerpo → Fundus → Cardias", "Cuerpo → Fundus → Antro → Píloro", "Cardias → Fundus → Cuerpo → Antro → Píloro"],
        correcta: 2,
        explicacion: "Anatomía del estómago: Cardias (entrada desde esófago) → Fundus (cúpula superior, almacena gas) → Cuerpo (porción principal, produce HCl y pepsina) → Antro (produce gastrina) → Píloro (salida controlada al duodeno). Las células G (gastrina) predominan en el antro; las células parietales en el fundus/cuerpo."
    },
    {
        pregunta: "La úlcera gástrica duele principalmente:",
        opciones: ["Solo durante el ejercicio físico intenso", "Con los alimentos o poco después de comer (los alimentos estimulan ácido que contacta la úlcera)", "En ayunas o de noche, calmando con los alimentos (patrón duodenal)"],
        correcta: 1,
        explicacion: "Patrón del dolor: Úlcera GÁSTRICA → dolor que EMPEORA con la comida (los alimentos estimulan la secreción ácida que toca la úlcera). Úlcera DUODENAL → dolor que CALMA con la comida (los alimentos tamponan el ácido) y aparece 2-3 horas después o de madrugada. Regla: 'Gastric=Got worse with food; Duodenal=Decreases with food'."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — INTESTINO DELGADO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La superficie de absorción del intestino delgado es de ~200 m² gracias a:",
        opciones: ["La circulación portal que 'aspira' los nutrientes activamente", "Solo su longitud de 6-7 metros", "Válvulas conniventes + vellosidades + microvellosidades (ribete en cepillo)"],
        correcta: 2,
        explicacion: "La superficie intestinal se amplifica por tres niveles: 1) Válvulas conniventes (pliegues de la mucosa) → ×3, 2) Vellosidades (proyecciones de la mucosa) → ×10, 3) Microvellosidades del ribete en cepillo → ×20. El total: ~200 m² (¡casi una cancha de tenis!). Sin estas estructuras, el intestino delgado necesitaría kilómetros para la misma absorción."
    },
    {
        pregunta: "La ampolla de Vater en el duodeno es donde:",
        opciones: ["Se absorbe la vitamina B12 unida al factor intrínseco", "Desemboca el conducto colédoco (bilis) y el conducto pancreático principal (Wirsung)", "El estómago se comunica con el duodeno a través del píloro"],
        correcta: 1,
        explicacion: "La ampolla de Vater (papila mayor) está en la cara posteromedial de la 2ª porción duodenal. Es donde convergen el colédoco (bilis del hígado/vesícula) y el conducto de Wirsung (jugo pancreático). El esfínter de Oddi controla el flujo hacia el duodeno. Los cálculos impactados aquí causan ictericia + pancreatitis simultáneamente."
    },
    {
        pregunta: "La lactasa, la sacarasa y la maltasa son enzimas del ribete en cepillo del intestino delgado que:",
        opciones: ["Digieren proteínas en aminoácidos para su absorción", "Emulsifican las grasas para facilitar la acción de la lipasa", "Hidrolizan disacáridos en monosacáridos (glucosa, galactosa, fructosa) para su absorción"],
        correcta: 2,
        explicacion: "Las disacaridasas del ribete en cepillo completan la digestión de carbohidratos: Lactasa (lactosa → glucosa + galactosa), Sacarasa (sacarosa → glucosa + fructosa), Maltasa (maltosa → glucosa + glucosa). Solo los MONOSACÁRIDOS se absorben. La deficiencia de lactasa causa intolerancia a la lactosa."
    },
    {
        pregunta: "Las placas de Peyer son formaciones de tejido linfoide ubicadas en:",
        opciones: ["El duodeno, donde producen las enzimas digestivas", "El íleon terminal, donde muestrean antígenos luminales para la respuesta inmune intestinal", "El colon, donde forman parte de la barrera contra bacterias fecales"],
        correcta: 1,
        explicacion: "Las placas de Peyer son acúmulos de tejido linfoide en la submucosa del íleon (predominantemente). Las células M de su superficie 'muestrean' antígenos del lumen intestinal → respuesta inmune mucosa (IgA secretora). Son importantes en la inmunidad intestinal y la puerta de entrada de algunos patógenos (Salmonella typhi)."
    },
    {
        pregunta: "La vitamina B12 se absorbe específicamente en:",
        opciones: ["El duodeno, donde actúa el jugo pancreático que facilita su absorción", "El yeyuno, junto con las otras vitaminas hidrosolubles", "El íleon terminal, mediante receptores específicos para el complejo B12-factor intrínseco"],
        correcta: 2,
        explicacion: "La B12 (cobalamina) debe unirse al factor intrínseco (FI, secretado por células parietales gástricas) → complejo B12-FI que viaja hasta el íleon terminal → receptores cubilinα reconocen el complejo → absorción. Por eso tanto la gastrectomía (sin FI) como la ileectomía causan déficit de B12."
    },
    {
        pregunta: "Las vitaminas liposolubles (A, D, E, K) se absorben principalmente en:",
        opciones: ["El yeyuno, empaquetadas en micelas con sales biliares", "El colon, por la flora bacteriana que las sintetiza", "El estómago, disueltas en las grasas del bolo alimenticio"],
        correcta: 0,
        explicacion: "Las vitaminas liposolubles (ADEK) son insolubles en agua → necesitan ser empaquetadas en micelas (formadas por sales biliares + fosfolípidos) para ser solubilizadas y absorbidas. La absorción ocurre principalmente en el yeyuno. La malabsorción de grasas (esteatorrea) causa déficit de vitaminas liposolubles."
    },
    {
        pregunta: "La celiaquía (enfermedad celíaca) es:",
        opciones: ["Una enteropatía autoinmune por sensibilidad al gluten que destruye las vellosidades del intestino delgado", "Una infección intestinal crónica por Giardia lamblia", "Una intolerancia a la lactosa severa con inflamación del colon"],
        correcta: 0,
        explicacion: "Celiaquía: respuesta inmune anormal (autoinmune + hipersensibilidad) al gluten (proteína del trigo, cebada, centeno) → inflamación + atrofia de vellosidades del intestino delgado → malabsorción global. Marcadores: anti-transglutaminasa IgA, anti-endomisio. Tratamiento: dieta sin gluten de por vida. Asociada a HLA-DQ2/DQ8."
    },
    {
        pregunta: "El síndrome de malabsorción intestinal se caracteriza por:",
        opciones: ["Dolor abdominal cólico con sangre en las heces sin pérdida de peso", "Estreñimiento crónico con heces duras y secas", "Esteatorrea (heces grasosas que flotan), diarrea crónica, pérdida de peso y déficit nutricional"],
        correcta: 2,
        explicacion: "Malabsorción: falla en la absorción de nutrientes → esteatorrea (heces oleosas, fétidas, difíciles de lavar, flotan), diarrea crónica, pérdida de peso, anemia (déficit hierro/B12/folato), déficit de vitaminas liposolubles (ADEK), hipoproteinemia (edemas). Causas: celiaquía, EPOC, resección intestinal, insuficiencia pancreática."
    },
    {
        pregunta: "La hormona secretina se libera desde el duodeno cuando llega quimo ácido. Su función es:",
        opciones: ["Inhibir la motilidad intestinal para prolongar el tiempo de absorción", "Estimular el páncreas para secretar bicarbonato y neutralizar el quimo ácido", "Estimular la contracción de la vesícula biliar para liberar bilis"],
        correcta: 1,
        explicacion: "La secretina (células S del duodeno) se libera cuando el pH duodenal baja (<4.5) por el quimo ácido gástrico. Estimula la secreción de jugo pancreático rico en bicarbonato (HCO₃⁻) → neutraliza el quimo → sube pH → óptimo para enzimas pancreáticas (pH 7-8). La CCK estimula las enzimas pancreáticas y la contracción biliar."
    },
    {
        pregunta: "El duodeno, yeyuno e íleon se distinguen porque:",
        opciones: ["Son idénticos histológicamente y funcionalmente sin diferencias", "El duodeno recibe bilis y jugo pancreático; el yeyuno absorbe la mayoría de nutrientes; el íleon absorbe B12 y sales biliares", "Solo el duodeno tiene vellosidades; el yeyuno e íleon son lisos"],
        correcta: 1,
        explicacion: "Duodeno (~25 cm): recibe quimo + bilis + jugo pancreático; tiene glándulas de Brunner (moco alcalino). Yeyuno (~2.5 m): máxima absorción de nutrientes (glucosa, AA, vitaminas). Íleon (~3.5 m): absorción de B12, sales biliares; válvula ileocecal; placas de Peyer. La circulación enterohepática recicla las sales biliares entre íleon e hígado."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — HÍGADO, VESÍCULA Y PÁNCREAS (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "El hígado recibe sangre de dos fuentes porque:",
        opciones: ["El 80% viene de la vena porta (sangre rica en nutrientes del intestino) y el 20% de la arteria hepática (oxigenada)", "Necesita doble irrigación para su gran metabolismo", "El 80% es sangre arterial y el 20% venosa, al revés que otros órganos"],
        correcta: 0,
        explicacion: "Doble irrigación hepática: vena porta (80%, sangre venosa rica en nutrientes absorbidos por el intestino, aminoácidos, glucosa, toxinas) + arteria hepática (20%, sangre arterial oxigenada). Esta disposición permite al hígado procesar todos los nutrientes absorbidos ANTES de que lleguen a la circulación sistémica (metabolismo de 'primer paso')."
    },
    {
        pregunta: "El efecto de 'primer paso' hepático significa que:",
        opciones: ["El hígado almacena el primer nutriente que llega después de cada comida", "Los fármacos y nutrientes orales son metabolizados por el hígado antes de alcanzar la circulación sistémica", "El hígado produce bilis solo durante las primeras horas del día"],
        correcta: 1,
        explicacion: "Metabolismo de primer paso: sustancias absorbidas en el intestino → vena porta → hígado → METABOLISMO antes de llegar a la circulación sistémica. Por eso algunos fármacos orales tienen menor biodisponibilidad que los IV (ej. lidocaína no se usa por vía oral). La nitroglicerina sublingual evita el primer paso."
    },
    {
        pregunta: "La albumina sérica es producida exclusivamente por el hígado. Su función principal es:",
        opciones: ["Mantener la presión oncótica del plasma y transportar sustancias (fármacos, hormonas, ácidos grasos)", "Transportar O₂ en la sangre como la hemoglobina", "Actuar como anticuerpo contra infecciones bacterianas"],
        correcta: 0,
        explicacion: "La albúmina (producida por hepatocitos) es la proteína plasmática más abundante (~3.5-5 g/dL). Funciones: mantiene la presión oncótica (evita la salida de agua al intersticio), transporta: bilirrubina, ácidos grasos, hormonas tiroideas, calcio, fármacos. Cirrosis/desnutrición → ↓ albúmina → edemas y ascitis."
    },
    {
        pregunta: "La bilis contiene principalmente:",
        opciones: ["Bicarbonato para neutralizar el quimo ácido del estómago", "Enzimas digestivas activas como la lipasa y amilasa", "Sales biliares, colesterol, fosfolípidos, bilirrubina y agua"],
        correcta: 2,
        explicacion: "La bilis NO tiene enzimas digestivas. Contiene: sales biliares (emulsifican grasas), colesterol, fosfolípidos (lecitina), bilirrubina (producto del catabolismo de la hemoglobina), agua y electrolitos. La bilis emulsifica las grasas → micro-gotitas → mayor superficie para la lipasa pancreática. Se produce ~600-1000 mL/día."
    },
    {
        pregunta: "La ictericia aparece cuando la bilirrubina sérica supera:",
        opciones: ["2-3 mg/dL (umbral de visibilidad en escleras y piel)", "10 mg/dL (solo en hepatitis graves)", "0.5 mg/dL (límite normal)"],
        correcta: 0,
        explicacion: "La bilirrubina normal es 0.2-1.0 mg/dL. La ictericia (coloración amarilla de piel y mucosas) se hace clínicamente visible cuando supera 2-3 mg/dL. Primero se detecta en las ESCLERAS (más sensible por el colágeno que tiene afinidad por bilirrubina). Puede ser pre-hepática (hemólisis), hepática (hepatitis, cirrosis) o post-hepática (obstrucción biliar)."
    },
    {
        pregunta: "La vesícula biliar se contrae para liberar bilis cuando:",
        opciones: ["Llega grasa y proteína al duodeno → liberación de CCK → contracción vesicular", "El estómago está vacío (en ayuno)", "La bilirrubina aumenta en sangre por encima de 1 mg/dL"],
        correcta: 0,
        explicacion: "La CCK (colecistoquinina, células I del duodeno) se libera por grasas y proteínas en el duodeno → estimula: contracción de la vesícula biliar + relajación del esfínter de Oddi → bilis fluye al duodeno. En ayuno, la vesícula almacena y concentra la bilis (hasta 10 veces la concentración hepática)."
    },
    {
        pregunta: "Las '4F' de la colelitiasis (cálculos biliares) son factores de riesgo: Fat, Female, Forty, Fertile. Significa:",
        opciones: ["Solo aplica a mujeres con enfermedad inflamatoria intestinal", "Delgadas, masculinas, menores de 40 y sin hijos tienen mayor riesgo", "Obesas, mujeres, mayores de 40 años y con múltiples embarazos tienen mayor riesgo de cálculos de colesterol"],
        correcta: 2,
        explicacion: "Las 4F: Fat (obesidad → ↑ síntesis de colesterol biliar), Female (estrógenos → ↑ colesterol biliar, ↓ motilidad vesicular), Forty (>40 años, riesgo acumulado), Fertile (embarazo → progesterona reduce motilidad vesicular → estasis → cristalización). Los cálculos de colesterol son el 75-80% de todos los cálculos biliares."
    },
    {
        pregunta: "La pancreatitis aguda se manifiesta con dolor:",
        opciones: ["Epigástrico intenso de inicio brusco, irradiado en 'faja' a la espalda, que se alivia al inclinarse hacia adelante", "Cólico en hipocondrio derecho que irradia al hombro derecho", "Periumbilical que migra a FID (similar al apendicular)"],
        correcta: 0,
        explicacion: "Pancreatitis aguda: dolor epigástrico o periumbilical intenso ('en puñalada') de inicio brusco, irradiado en cinturón/faja hacia la espalda (por la localización retroperitoneal del páncreas), que se alivia al inclinarse hacia adelante. Causas: alcohol (causa más común en hombres) y colelitiasis (más común en mujeres). Diagnóstico: amilasa y lipasa >3× normal."
    },
    {
        pregunta: "El signo de Cullen (equimosis periumbilical) en la pancreatitis aguda indica:",
        opciones: ["Inflamación del peritoneo por peritonitis bacteriana", "Compresión de la vena porta con hipertensión portal", "Pancreatitis grave hemorrágica con sangrado retroperitoneal que diseca hacia el ombligo"],
        correcta: 2,
        explicacion: "Signo de Cullen (equimosis periumbilical azul-verdosa) y signo de Grey-Turner (equimosis en los flancos) son signos de PANCREATITIS NECROSANTE HEMORRÁGICA grave. La sangre del espacio retroperitoneal diseca los planos fasciales y llega al tejido subcutáneo periumbilical (Cullen) o a los flancos (Grey-Turner). Indican muy mal pronóstico."
    },
    {
        pregunta: "El hígado graso no alcohólico (NAFLD/HGNA) está principalmente asociado a:",
        opciones: ["Consumo de alcohol moderado en personas predispuestas", "Infección crónica por virus de la hepatitis C", "Síndrome metabólico: obesidad, resistencia a insulina, diabetes tipo 2, dislipidemia"],
        correcta: 2,
        explicacion: "El HGNA (Hígado Graso No Alcohólico) es la hepatopatía más común en países occidentales (25-30% de la población). Asociada al síndrome metabólico: obesidad visceral, resistencia a la insulina (con o sin DM tipo 2), triglicéridos altos, HDL bajo, HTA. Puede progresar a NASH (esteatohepatitis) → fibrosis → cirrosis → hepatocarcinoma."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — INTESTINO GRUESO (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La principal función del intestino grueso es:",
        opciones: ["Producción de enzimas digestivas y hormonas", "Absorción de agua y electrolitos → formación y almacenamiento de heces", "Digestión y absorción de nutrientes como el intestino delgado"],
        correcta: 1,
        explicacion: "El intestino grueso (1.5 m) no digiere ni absorbe nutrientes en cantidad significativa. Su función: reabsorbe agua (el quimo entra como líquido y las heces son semisólidas) y electrolitos (Na⁺, Cl⁻), almacena las heces en el recto hasta la defecación. La flora bacteriana fermenta la fibra y sintetiza vitamina K y algunas vitaminas B."
    },
    {
        pregunta: "La válvula ileocecal cumple la función de:",
        opciones: ["Controlar el vaciamiento del estómago hacia el intestino delgado", "Separar el íleon del ciego e impedir el reflujo de contenido colónico al intestino delgado", "Controlar la defecación junto con el esfínter anal externo"],
        correcta: 1,
        explicacion: "La válvula ileocecal (de Bauhin) es la unión entre el íleon y el ciego (primer segmento del intestino grueso). Actúa como válvula unidireccional: permite el paso del quimo del intestino delgado al grueso, pero impide el reflujo del contenido colónico (cargado de bacterias fecales) hacia el intestino delgado."
    },
    {
        pregunta: "El apéndice vermiforme está unido al:",
        opciones: ["Ciego, en la fosa ilíaca derecha", "Colon sigmoide, antes del recto", "Recto, en la porción final del colon"],
        correcta: 0,
        explicacion: "El apéndice vermiforme (8-10 cm) se une al ciego, en la fosa ilíaca derecha. Histológicamente tiene abundante tejido linfoide (función inmune). Su obstrucción por fecalito → apendicitis: dolor que comienza periumbilical y migra a la fosa ilíaca derecha (punto de McBurney), fiebre, náuseas, signo de Blumberg (+)."
    },
    {
        pregunta: "El punto de McBurney se localiza en:",
        opciones: ["El epigastrio, entre el ombligo y el proceso xifoides", "El tercio medio entre el ombligo y la espina ilíaca anterosuperior derecha", "El tercio externo entre el ombligo y la espina ilíaca anterosuperior derecha"],
        correcta: 2,
        explicacion: "El punto de McBurney está en la unión del tercio externo con los dos tercios internos de una línea trazada del ombligo a la espina ilíaca anterosuperior derecha. Es el punto de máxima sensibilidad en la apendicitis aguda. El signo de Blumberg (rebote) es positivo cuando hay irritación peritoneal."
    },
    {
        pregunta: "La microbiota intestinal (flora bacteriana) del colon tiene funciones de:",
        opciones: ["Fermentar fibra → ácidos grasos de cadena corta, sintetizar vitamina K, proteger contra patógenos y modular el sistema inmune", "Digerir proteínas y grasas que el intestino delgado no pudo absorber", "Producir enzimas digestivas para compensar la deficiencia pancreática exocrina"],
        correcta: 0,
        explicacion: "La microbiota colónica (~100 billones de bacterias, principalmente Bacteroides, Firmicutes, Bifidobacterium) fermentan la fibra → ácidos grasos de cadena corta (butirato, propionato: energía para colonocitos), sintetizan vitamina K (coagulación) y algunas vitaminas B, protegen contra patógenos (efecto barrera), modulan el sistema inmune. Los antibióticos alteran este equilibrio → disbiosis → Clostridium difficile."
    },
    {
        pregunta: "La enfermedad de Crohn se diferencia de la colitis ulcerosa (CU) en que:",
        opciones: ["La CU puede afectar cualquier segmento del tubo digestivo de forma discontinua", "La enfermedad de Crohn es transmural y puede afectar cualquier segmento GI con lesiones discontinuas (skip lesions), fístulas y granulomas", "Ambas son idénticas histológicamente y solo difieren en la localización"],
        correcta: 1,
        explicacion: "Crohn vs CU: Crohn = transmural (todas las capas), cualquier segmento del tubo digestivo (de boca a ano), lesiones discontinuas (skip lesions), granulomas no caseificantes, fístulas/abscesos, mesenterio afectado. CU = solo mucosa/submucosa, SOLO el colon, siempre comienza en recto y se extiende de forma CONTINUA hacia proximal, sin granulomas."
    },
    {
        pregunta: "Las hemorroides internas se diferencian de las externas porque:",
        opciones: ["Las internas son siempre más dolorosas que las externas", "Las externas solo se tratan quirúrgicamente y las internas solo médicamente", "Las internas no duelen (no tienen inervación somática) y sangran; las externas son dolorosas (inervación somática)"],
        correcta: 2,
        explicacion: "Hemorroides internas: por encima de la línea pectínea → mucosa rectal (inervación visceral = insensible al dolor) → sangrado rojo brillante al defecar sin dolor. Hemorroides externas: por debajo de la línea pectínea → piel anal (inervación somática = muy sensible) → dolorosas, especialmente al trombosarse. Ambas se tratan con fibra, hidratación y evitar esfuerzo."
    },
    {
        pregunta: "El síntoma de alarma en el cáncer colorrectal que NO debe ignorarse es:",
        opciones: ["Estreñimiento ocasional sin sangre en pacientes jóvenes", "Cambio del hábito intestinal + sangre en heces + pérdida de peso + anemia en >50 años", "Gases y distensión abdominal postprandial sin otros síntomas"],
        correcta: 1,
        explicacion: "Síntomas de alarma del CCR: cambio del hábito intestinal (diarrea/estreñimiento nuevo), sangre en heces (roja o negra), pérdida de peso involuntaria, anemia ferropénica sin causa evidente, masa abdominal palpable, tenesmo rectal. Especialmente en >50 años o con antecedentes familiares de CCR/pólipos. Requiere colonoscopia urgente."
    },
    {
        pregunta: "El cribado (screening) del cáncer colorrectal se recomienda a partir de:",
        opciones: ["50 años en promedio (o antes si hay factores de riesgo) con colonoscopia o test de sangre oculta", "65 años, ya que antes el riesgo es mínimo", "30 años en toda la población"],
        correcta: 0,
        explicacion: "El CCR es la 2da-3ra causa de muerte por cáncer en países occidentales. Cribado estándar desde los 50 años: colonoscopia cada 10 años (gold standard) o test de sangre oculta en heces anual. Inicio más temprano (40-45 años o 10 años antes del familiar más joven afectado) si hay: CCR familiar, pólipos adenomatosos, EII crónica, Lynch/FAP."
    },
    {
        pregunta: "La colitis pseudomembranosa causada por C. difficile aparece principalmente:",
        opciones: ["En viajeros que consumen agua contaminada en países en desarrollo", "Tras el uso de antibióticos que destruyen la microbiota normal, permitiendo la sobrecrecimiento de C. difficile", "En pacientes con inmunodeficiencia primaria sin tratamiento antibiótico"],
        correcta: 1,
        explicacion: "C. difficile: bacteria anaerobia que produce toxinas A y B. Coloniza el colon cuando los antibióticos (especialmente clindamicina, cefalosporinas, fluoroquinolonas) eliminan la flora normal protectora → sobrecrecimiento → diarrea profusa, colitis, megacolon tóxico. Tratamiento: vancomicina o fidaxomicina oral. Recidivante y difícil de tratar."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — PATOLOGÍAS DIGESTIVAS (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Helicobacter pylori causa úlcera péptica principalmente porque:",
        opciones: ["Destruye la capa de moco protectora con ureasa y estimula la inflamación → la mucosa queda expuesta al ácido", "Produce toxinas que destruyen directamente las células parietales productoras de HCl", "Bloquea los receptores de histamina aumentando la secreción ácida crónicamente"],
        correcta: 0,
        explicacion: "H. pylori (bacteria gram-negativa espiral) usa la ureasa para convertir urea en amoniaco → alcaliniza su entorno → sobrevive en el ácido → coloniza la mucosa. Produce: citotoxinas (CagA, VacA) que dañan directamente el epitelio, inflamación crónica que destruye la capa mucosa protectora → úlcera. Afecta al 70-80% de úlceras duodenales y al 50-70% de las gástricas."
    },
    {
        pregunta: "El tratamiento de erradicación del H. pylori estándar (triple terapia) incluye:",
        opciones: ["Solo un IBP en dosis doble por 8 semanas", "Un antibiótico + antiácidos + ranitidina por 30 días", "Dos antibióticos + un IBP por 10-14 días"],
        correcta: 2,
        explicacion: "Triple terapia estándar: IBP (omeprazol/pantoprazol) + amoxicilina + claritromicina × 10-14 días. La resistencia a claritromicina es creciente → en zonas de alta resistencia se usa cuádruple terapia (+ bismuto o metronidazol). La confirmación de erradicación se hace 4-8 semanas post-tratamiento con test de urea en aliento o antígeno en heces."
    },
    {
        pregunta: "La cirrosis hepática se define como:",
        opciones: ["Esteatosis hepática (acumulación de grasa) que puede revertirse con dieta", "Inflamación aguda del hígado con hepatocitos dañados pero parénquima preservado", "Fibrosis hepática difusa irreversible con nódulos de regeneración que distorsionan la arquitectura"],
        correcta: 2,
        explicacion: "Cirrosis: estadio final de múltiples enfermedades hepáticas crónicas. Fibrosis difusa IRREVERSIBLE con formación de nódulos de regeneración → distorsión de la arquitectura → disfunción hepática + hipertensión portal. Causas principales: alcohol (1ª), VHC (2ª), VHB (3ª), HGNA (emergente). El hígado cirrótico NO puede regenerarse (a diferencia del hígado normal)."
  },
    {
        pregunta: "La encefalopatía hepática en la cirrosis se produce por:",
        opciones: ["Sangrado de várices esofágicas que reduce el O₂ al cerebro", "Reducción del flujo sanguíneo cerebral por hipertensión portal", "Acumulación de amoniaco (y otras toxinas) que el hígado disfuncional no puede metabolizar → disfunción neurológica"],
        correcta: 2,
        explicacion: "Encefalopatía hepática: el hígado cirrótico no convierte el NH₃ (amoniaco) en urea → acumulación en sangre → cruza la BHE → disfunción astrocítica → alteración de la neurotransmisión. Clínica: desde confusión/asterixis (flapping tremor) hasta coma. Precipitantes: sangrado GI, infección, estreñimiento, diuréticos. Tratamiento: lactulosa, rifaximina."
    },
    {
        pregunta: "Las hepatitis virales A y E se diferencian de B, C y D porque:",
        opciones: ["Las A y E se transmiten por vía fecal-oral y NUNCA cronifican; las B, C y D son parenterales y pueden cronificar", "Las A y E solo afectan al hígado; las B, C y D también afectan riñones y corazón", "Las A y E son más graves y siempre cronifican"],
        correcta: 0,
        explicacion: "VHA y VHE: transmisión fecal-oral (agua/alimentos contaminados), infección aguda autolimitada, NUNCA cronifican. VHB, VHC y VHD: transmisión parenteral/sexual. VHB cronifica en 5-10% adultos (90% en neonatos). VHC cronifica en 75-85% → cirrosis en 20-30% a los 20 años. El VHD solo infecta a portadores de VHB (virus defectivo)."
    },
    {
        pregunta: "La ascitis en la cirrosis se produce principalmente por:",
        opciones: ["Inflamación directa del peritoneo por las toxinas del hígado cirrótico", "Aumento de la producción de líquido biliar que se acumula en el peritoneo", "Hipertensión portal + hipoalbuminemia + retención de Na⁺ → trasudado de líquido a la cavidad peritoneal"],
        correcta: 2,
        explicacion: "Ascitis en cirrosis: mecanismo multifactorial: ↑ presión portal (hipertensión portal) → trasudado hacia peritoneo; ↓ albúmina → ↓ presión oncótica → líquido sale a los intersticios; activación del eje RAA → retención de Na⁺ y agua. El SAAG (gradiente albúmina suero-ascitis) ≥1.1 confirma hipertensión portal como causa."
    },
    {
        pregunta: "La peritonitis bacteriana espontánea (PBE) es una complicación grave de la ascitis cirrótica. Se diagnostica con:",
        opciones: ["Cultivo de biopsia hepática con más de 1000 células/mL", "Proteína C reactiva >10 mg/dL en sangre periférica", "Líquido ascítico con PMN >250/mm³ (con o sin cultivo positivo)"],
        correcta: 2,
        explicacion: "PBE: infección bacteriana del líquido ascítico sin causa intraabdominal aparente (translocación bacteriana). Diagnóstico: paracentesis diagnóstica → PMN >250/mm³ en líquido ascítico (incluso sin cultivo positivo en el 40%). Germen más común: E. coli. Mortalidad sin tratamiento: >50%. Profilaxis: norfloxacina/ciprofloxacina en cirróticos de alto riesgo."
    },
    {
        pregunta: "El síndrome de intestino irritable (SII) se diferencia de la enfermedad de Crohn porque:",
        opciones: ["El SII solo afecta al intestino delgado y la enfermedad de Crohn solo al colon", "El SII es un trastorno FUNCIONAL (sin lesión orgánica), con dolor abdominal + alteración del hábito intestinal, sin marcadores inflamatorios elevados", "El SII tiene lesiones orgánicas visibles en la endoscopia y mayor sangrado rectal"],
        correcta: 1,
        explicacion: "SII (Síndrome de Intestino Irritable): trastorno FUNCIONAL (no hay lesión orgánica visible en endoscopia ni marcadores inflamatorios elevados). Criterios de Roma IV: dolor abdominal recurrente ≥1día/semana × 3 meses, asociado a cambio en hábito deposicional o consistencia de heces. Es el trastorno GI funcional más frecuente (10-15% de la población)."
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un factor de riesgo de cáncer gástrico?",
        opciones: ["Infección por H. pylori y gastritis atrófica crónica", "Consumo habitual de probióticos y dieta rica en fibra", "Dieta alta en sal/nitratos, tabaquismo y antecedentes familiares"],
        correcta: 1,
        explicacion: "Factores de riesgo de cáncer gástrico: H. pylori (principal, especialmente cepa CagA+), gastritis atrófica crónica, metaplasia intestinal, dieta alta en sal/carnes procesadas/nitratos, tabaquismo, alcohol, grupo sanguíneo A, gastrectomía previa, antecedentes familiares. Los probióticos y la fibra son PROTECTORES, no factores de riesgo."
    },
    {
        pregunta: "La pancreatitis crónica, a diferencia de la aguda, se caracteriza por:",
        opciones: ["Resolución completa sin secuelas tras cada episodio", "Daño irreversible del parénquima pancreático con fibrosis → insuficiencia exocrina y endocrina crónica", "Siempre cursa con amilasa y lipasa muy elevadas en sangre"],
        correcta: 1,
        explicacion: "Pancreatitis crónica: inflamación recurrente → fibrosis progresiva e IRREVERSIBLE del páncreas → insuficiencia exocrina (↓ enzimas → malabsorción de grasas, esteatorrea) + insuficiencia endocrina (↓ insulina → diabetes pancreopriva). Causa más común: alcoholismo crónico. En la PA crónica establecida las enzimas pueden ser NORMALES porque ya no queda parénquima funcionante."
    }

];

console.log("✅ Evaluación Aparato Digestivo cargada:", EVALUACION_APARATO_DIGESTIVO.length, "preguntas");
