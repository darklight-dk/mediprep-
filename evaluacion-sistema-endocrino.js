// ============================================
// EVALUACIÓN: SISTEMA ENDOCRINO
// 60 preguntas — basadas en sistema-endocrino.js
// Temas: Hipotálamo/Hipófisis, Tiroides,
//        Paratiroides, Suprarrenales, Páncreas,
//        Gónadas, Otras glándulas, Diabetes,
//        Ciclo menstrual, Patologías endocrinas
// ============================================

const EVALUACION_SISTEMA_ENDOCRINO = [

    // ══════════════════════════════════════════
    // BLOQUE 1 — HIPOTÁLAMO E HIPÓFISIS (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Cuál es la función principal del hipotálamo en el sistema endocrino?",
        opciones: ["Producir insulina y glucagón", "Secretar directamente hormonas al torrente sanguíneo sin intermediarios", "Controlar la hipófisis mediante factores liberadores e inhibidores"],
        correcta: 2,
        explicacion: "El hipotálamo actúa como puente entre el SN y el sistema endocrino. Controla la hipófisis produciendo factores liberadores (RH) e inhibidores (IH) que regulan la secreción de hormonas hipofisarias."
    },
    {
        pregunta: "La 'glándula maestra' del sistema endocrino es:",
        opciones: ["Glándula pineal", "Hipotálamo", "Hipófisis (pituitaria)"],
        correcta: 2,
        explicacion: "La hipófisis es llamada 'glándula maestra' porque controla otras glándulas endocrinas mediante sus hormonas trópicas: TSH (tiroides), ACTH (suprarrenales), FSH/LH (gónadas), GH (crecimiento)."
    },
    {
        pregunta: "La adenohipófisis (lóbulo anterior) produce todas las siguientes EXCEPTO:",
        opciones: ["ADH y oxitocina", "FSH, LH y prolactina", "GH, TSH y ACTH"],
        correcta: 0,
        explicacion: "ADH (vasopresina) y oxitocina son producidas en el HIPOTÁLAMO y solo almacenadas/liberadas por la neurohipófisis (lóbulo posterior). La adenohipófisis produce GH, TSH, ACTH, FSH, LH, PRL y MSH."
    },
    {
        pregunta: "La neurohipófisis (lóbulo posterior de la hipófisis):",
        opciones: ["Es estimulada directamente por la sangre sin intervención del hipotálamo", "Produce y secreta GH y TSH", "Almacena y libera ADH y oxitocina sintetizadas en el hipotálamo"],
        correcta: 2,
        explicacion: "La neurohipófisis no produce hormonas propias. Almacena y libera ADH y oxitocina que viajan por los axones desde los núcleos supraóptico y paraventricular del hipotálamo."
    },
    {
        pregunta: "La hormona GnRH del hipotálamo estimula la liberación de:",
        opciones: ["GH y prolactina", "FSH y LH (gonadotropinas)", "TSH y ACTH"],
        correcta: 1,
        explicacion: "GnRH (Gonadotropin-Releasing Hormone) estimula la adenohipófisis para liberar FSH y LH, las gonadotropinas que controlan la función de testículos y ovarios."
    },
    {
        pregunta: "La ADH (vasopresina) tiene como función principal:",
        opciones: ["Estimular las contracciones uterinas durante el parto", "Regular la glucemia en ayuno", "Reabsorber agua en los túbulos colectores renales para concentrar la orina"],
        correcta: 2,
        explicacion: "ADH actúa en los túbulos colectores renales aumentando la permeabilidad al agua → reabsorción de agua → orina más concentrada → conserva el agua corporal. Su déficit causa diabetes insípida."
    },
    {
        pregunta: "La diabetes insípida se caracteriza por:",
        opciones: ["Aumento de la presión arterial y retención de sodio", "Poliuria con orina muy diluida por déficit de ADH", "Hiperglucemia y glucosuria"],
        correcta: 1,
        explicacion: "Sin ADH, el riñón no puede concentrar la orina → poliuria masiva (5-20 L/día de orina diluida) y polidipsia compensatoria. A diferencia de la diabetes mellitus, la glucemia es normal."
    },
    {
        pregunta: "La prolactina (PRL) hipofisaria es inhibida por:",
        opciones: ["TRH (tirotropina releasing hormone)", "Dopamina hipotalámica", "Estrógenos"],
        correcta: 1,
        explicacion: "La dopamina (también llamada factor inhibidor de prolactina, PIF) es el principal inhibidor de la prolactina. Por eso los fármacos que bloquean la dopamina (antipsicóticos) pueden causar hiperprolactinemia y galactorrea."
    },
    {
        pregunta: "La oxitocina es liberada por la neurohipófisis y tiene como efectos:",
        opciones: ["Contracciones uterinas durante el parto y eyección de leche", "Estimulación de la corteza suprarrenal y la tiroides", "Reabsorción de agua en el riñón y vasoconstricción"],
        correcta: 0,
        explicacion: "Oxitocina estimula la contracción del músculo uterino durante el parto (retroalimentación positiva) y la eyección de leche en la lactancia. También tiene funciones en el comportamiento social y el vínculo afectivo."
    },
    {
        pregunta: "El sistema de retroalimentación negativa hipotálamo-hipófisis-glándula diana funciona así:",
        opciones: ["La hormona final estimula más producción en el hipotálamo", "La hormona final inhibe al hipotálamo e hipófisis cuando ya hay suficiente", "El hipotálamo inhibe siempre a la hipófisis independientemente de los niveles hormonales"],
        correcta: 1,
        explicacion: "Retroalimentación negativa: cuando la hormona final (ej. T4 tiroidea) llega a niveles suficientes, inhibe la producción de TRH en hipotálamo y TSH en hipófisis → se autolimita la producción. Es el mecanismo homeostático principal del eje endocrino."
    },

    // ══════════════════════════════════════════
    // BLOQUE 2 — TIROIDES Y PARATIROIDES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "¿Qué mineral es imprescindible para la síntesis de T3 y T4?",
        opciones: ["Yodo", "Calcio", "Hierro"],
        correcta: 0,
        explicacion: "T3 (tres átomos de yodo) y T4 (cuatro átomos de yodo) requieren yodo para su síntesis. El déficit de yodo es la causa más común de hipotiroidismo y bocio a nivel mundial, por eso la sal yodada es una medida de salud pública."
    },
    {
        pregunta: "La calcitonina es producida por las células C de la tiroides. Su efecto sobre el calcio es:",
        opciones: ["Disminuye el calcio sérico inhibiendo osteoclastos", "Aumenta el calcio sérico estimulando osteoclastos", "No tiene efecto sobre el metabolismo óseo"],
        correcta: 0,
        explicacion: "Calcitonina ↓ calcemia: inhibe los osteoclastos (células que resorben hueso liberando calcio) y aumenta la excreción renal de Ca. Es antagonista de la PTH. Su uso clínico: hipercalcemia y osteoporosis."
    },
    {
        pregunta: "Los síntomas de hipertiroidismo incluyen todos los siguientes EXCEPTO:",
        opciones: ["Taquicardia y pérdida de peso", "Bradicardia, aumento de peso y estreñimiento", "Insomnio, sudoración y temblor"],
        correcta: 1,
        explicacion: "Los síntomas de HIPERTIROIDISMO son de aceleración del metabolismo: taquicardia, pérdida de peso, diarrea, insomnio, temblor, sudoración, nerviosismo. Bradicardia, aumento de peso y estreñimiento son síntomas de HIPOTIROIDISMO."
    },
    {
        pregunta: "La enfermedad de Graves-Basedow es:",
        opciones: ["Hipertiroidismo autoinmune con anticuerpos estimuladores del receptor de TSH + exoftalmos", "Tumor maligno de la tiroides que produce T3/T4 en exceso", "Hipotiroidismo autoinmune por destrucción de la glándula"],
        correcta: 0,
        explicacion: "Graves es la causa más común de hipertiroidismo. Anticuerpos anti-receptor de TSH (TRAB) estimulan continuamente la tiroides → hiperfunción. Tríada: hipertiroidismo + bocio difuso + exoftalmos (proptosis ocular por inflamación retroorbitaria)."
    },
    {
        pregunta: "El cretinismo es causado por:",
        opciones: ["Déficit de hormonas tiroideas durante el desarrollo fetal/neonatal", "Exceso de T3/T4 en el período fetal", "Exceso de GH en la infancia temprana"],
        correcta: 0,
        explicacion: "Las hormonas tiroideas son esenciales para la maduración del SNC fetal. Su déficit congénito (generalmente por déficit de yodo materno) causa cretinismo: retraso mental IRREVERSIBLE + talla baja + sordomudez. El tamiz neonatal lo detecta tempranamente."
    },
    {
        pregunta: "El bocio simple se produce principalmente por:",
        opciones: ["Exceso de yodo en la dieta", "Déficit de yodo → hipertrofia compensatoria de la tiroides", "Autoanticuerpos contra la tiroides"],
        correcta: 1,
        explicacion: "El bocio simple (no tóxico) ocurre cuando hay déficit de yodo. La tiroides no puede producir suficiente T3/T4 → ↑ TSH → estimulación continua de la glándula → hipertrofia (agrandamiento). La sal yodada previene este problema."
    },
    {
        pregunta: "La PTH (parathormona) actúa sobre el hueso, el riñón y el intestino. Su efecto neto es:",
        opciones: ["Aumentar el calcio sérico", "No tiene efecto sobre el calcio sérico, solo sobre el fósforo", "Disminuir el calcio sérico"],
        correcta: 0,
        explicacion: "PTH ↑ calcemia por triple mecanismo: 1) Activa osteoclastos → libera Ca del hueso. 2) ↑ reabsorción renal de Ca (↓ fosfato). 3) Activa vitamina D → ↑ absorción intestinal de Ca. Su antagonista es la calcitonina."
    },
    {
        pregunta: "El signo de Chvostek y el signo de Trousseau son indicadores de:",
        opciones: ["Hipocalcemia (tetania)", "Hipercalcemia", "Hiperglucemia severa"],
        correcta: 0,
        explicacion: "En hipocalcemia los nervios son hiperexcitables → tetania. Chvostek: espasmo facial al percutir el nervio facial. Trousseau: espasmo carpopedal al inflar el manguito >PAS 3 min. Causas: hipoparatiroidismo, déficit de vitamina D."
    },
    {
        pregunta: "La forma activa de la vitamina D que aumenta la absorción intestinal de calcio es:",
        opciones: ["Ergocalciferol (vitamina D2) de los alimentos", "Colecalciferol (vitamina D3) de la piel", "Calcitriol (1,25-dihidroxivitamina D3) activado en el riñón"],
        correcta: 2,
        explicacion: "La vitamina D3 (piel/dieta) se hidroxila en el hígado → 25-OH-D3, luego en el RIÑÓN → 1,25(OH)2-D3 = Calcitriol, la forma activa. La PTH estimula este último paso. La insuficiencia renal → ↓ calcitriol → hipocalcemia."
    },
    {
        pregunta: "El hiperparatiroidismo primario se manifiesta con la regla 'bones, stones, groans, moans':",
        opciones: ["HTA, hipopotasemia, poliuria y alcalosis metabólica", "Dolor óseo, litiasis renal, síntomas GI y depresión por hipercalcemia", "Hipocalcemia, tetania, convulsiones y osteomalacia"],
        correcta: 1,
        explicacion: "Hiperparatiroidismo primario → hipercalcemia → 'bones' (dolor óseo, fracturas), 'stones' (litiasis renal por hipercalciuria), 'groans' (náuseas, estreñimiento, úlceras), 'moans' (depresión, confusión). Causa: adenoma paratiroideo (80%)."
    },

    // ══════════════════════════════════════════
    // BLOQUE 3 — GLÁNDULAS SUPRARRENALES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La regla ABC de la corteza suprarrenal establece que la zona glomerular produce:",
        opciones: ["Andrógenos suprarrenales (DHEA)", "Cortisol (glucocorticoide)", "Aldosterona (mineralocorticoide)"],
        correcta: 2,
        explicacion: "Regla ABC: A=Zona Glomerular→Aldosterona, B=Zona Fascicular→cortisol (Beta/glucocorticoides), C=Zona Reticular→andrógenos (DHEA). La médula suprarrenal (no corteza) produce adrenalina y noradrenalina."
    },
    {
        pregunta: "La aldosterona es regulada principalmente por el sistema:",
        opciones: ["Glucagón-insulina pancreático", "Renina-Angiotensina-Aldosterona (RAA)", "Hipotálamo-hipófisis-suprarrenal (CRH-ACTH)"],
        correcta: 1,
        explicacion: "La aldosterona es regulada por el eje RAA: ↓ PA o ↓ Na⁺ → riñones liberan Renina → convierte Angiotensinógeno en Angio I → ECA la convierte en Angio II → estimula aldosterona → ↑ Na⁺ y H₂O → ↑ PA."
    },
    {
        pregunta: "El cortisol tiene todos los siguientes efectos EXCEPTO:",
        opciones: ["Aumento de la glucemia (gluconeogénesis)", "Efecto inmunosupresor y antiinflamatorio", "Estimulación del sistema inmune (más leucocitos activos)"],
        correcta: 2,
        explicacion: "El cortisol es inmunosupresor: ↓ linfocitos, ↓ citocinas, ↓ inflamación. Por eso los corticosteroides (prednisona) se usan como antiinflamatorios. El cortisol también hace gluconeogénesis (↑ glucemia), catabolismo proteico y redistribuye grasa."
    },
    {
        pregunta: "El síndrome de Cushing se caracteriza por la tríada:",
        opciones: ["Exoftalmos + bocio + taquicardia", "Cara de luna llena + joroba de búfalo + estrías moradas", "Hiperpigmentación + hipotensión + hipoglucemia"],
        correcta: 1,
        explicacion: "Cushing = exceso de cortisol. Tríada clásica: cara de luna (redistribución grasa facial), joroba de búfalo (depósito graso supraescapular) y estrías moradas (catabolismo dérmico). También HTA, hiperglucemia, osteoporosis e inmunosupresión."
    },
    {
        pregunta: "La causa más común del síndrome de Cushing iatrogénico es:",
        opciones: ["Tumor hipofisario productor de ACTH (enfermedad de Cushing)", "Adenoma suprarrenal autónomo productor de cortisol", "Uso prolongado de corticosteroides (prednisona, dexametasona)"],
        correcta: 2,
        explicacion: "El Cushing iatrogénico (por medicamentos) es la causa MÁS COMÚN en la práctica clínica. El uso crónico de corticoides para tratar asma, artritis, lupus, etc. produce todos los estigmas del Cushing. La causa endógena más frecuente es el adenoma hipofisario (enfermedad de Cushing)."
    },
    {
        pregunta: "La enfermedad de Addison se caracteriza por hiperpigmentación porque:",
        opciones: ["El déficit de cortisol → ↑ ACTH (comparte precursor con MSH) → estimula melanocitos", "La aldosterona produce directamente hiperpigmentación", "El exceso de cortisol estimula la producción de melanina"],
        correcta: 0,
        explicacion: "En Addison (insuficiencia suprarrenal) hay ↓ cortisol → falla la retroalimentación negativa → ↑ mucha ACTH hipofisaria. ACTH y MSH se producen del mismo precursor (POMC), por lo que el exceso de ACTH activa los receptores de MSH en la piel → hiperpigmentación en pliegues, encías y cicatrices."
    },
    {
        pregunta: "La crisis addisoniana es una emergencia médica que se presenta con:",
        opciones: ["Hipotensión severa, hipoglucemia, hiponatremia e hiperpotasemia", "HTA severa, hiperglucemia y cara de luna", "Taquicardia, sudoración y HTA paroxística"],
        correcta: 0,
        explicacion: "La crisis addisoniana (insuficiencia suprarrenal aguda) es potencialmente mortal: ↓ cortisol → hipoglucemia grave + shock → ↓ aldosterona → ↓ Na⁺ + ↑ K⁺ → hipotensión refractaria. Tratamiento inmediato: hidrocortisona IV + suero fisiológico + glucosa."
    },
    {
        pregunta: "La médula suprarrenal produce catecolaminas. La más abundante es:",
        opciones: ["Dopamina en condiciones de estrés severo", "Noradrenalina (80%) como principal neurotransmisor", "Adrenalina (Epinefrina) representando el 80% de la secreción"],
        correcta: 2,
        explicacion: "La médula suprarrenal produce: 80% adrenalina (epinefrina) y 20% noradrenalina. En el sistema nervioso simpático ocurre lo inverso: el principal neurotransmisor es la noradrenalina. La adrenalina es el tratamiento de elección en anafilaxia."
    },
    {
        pregunta: "El feocromocitoma es un tumor de la médula suprarrenal. Su tríada clásica es:",
        opciones: ["Cara de luna + estrías moradas + diabetes", "Cefalea pulsátil + sudoración profusa + palpitaciones con HTA paroxística", "Fatiga, hipotensión ortostática y pérdida de peso"],
        correcta: 1,
        explicacion: "El feocromocitoma libera catecolaminas en crisis → tríada: cefalea + sudoración + palpitaciones con HTA paroxística (puede llegar a 250/150 mmHg). Regla del 10: 10% bilateral, 10% maligno, 10% extraadrenal (paraganglioma)."
    },
    {
        pregunta: "El hiperaldosteronismo primario (síndrome de Conn) causa:",
        opciones: ["Hipoglucemia + hiponatremia + hiperpigmentación", "HTA resistente + hipopotasemia + alcalosis metabólica", "Hipotensión + hiperpotasemia + acidosis"],
        correcta: 1,
        explicacion: "Hiperaldosteronismo primario (adenoma suprarrenal): exceso de aldosterona → ↑ retención de Na⁺ (HTA) + ↑ excreción de K⁺ (hipopotasemia → debilidad muscular, calambres) + excreción de H⁺ (alcalosis metabólica). Causa más común de HTA secundaria endocrina."
    },

    // ══════════════════════════════════════════
    // BLOQUE 4 — PÁNCREAS ENDOCRINO Y DIABETES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Los islotes de Langerhans representan qué porcentaje del volumen pancreático:",
        opciones: ["1-2%", "30-40%", "15-20%"],
        correcta: 0,
        explicacion: "Los islotes de Langerhans representan solo el 1-2% del tejido pancreático, pero cumplen una función vital: regular la glucemia. El 98-99% restante es páncreas exocrino (produce jugo pancreático con enzimas digestivas)."
    },
    {
        pregunta: "Las células Beta de los islotes de Langerhans producen:",
        opciones: ["Glucagón (hormona hiperglucemiante)", "Insulina (única hormona hipoglucemiante)", "Somatostatina (inhibidora)"],
        correcta: 1,
        explicacion: "Las células Beta (60-80% de los islotes) producen insulina. La insulina es la ÚNICA hormona hipoglucemiante del cuerpo. Las células Alfa producen glucagón y las células Delta producen somatostatina."
    },
    {
        pregunta: "La insulina se libera principalmente en respuesta a:",
        opciones: ["Aumento de glucosa postprandial (después de comer)", "Hipoglucemia y ayuno prolongado", "Estimulación del sistema nervioso simpático"],
        correcta: 0,
        explicacion: "La insulina se libera cuando ↑ glucemia postprandial. Sus efectos: ↑ captación de glucosa en músculo/hígado/tejido adiposo, glucogénesis (almacena glucógeno), lipogénesis. También la estimulan: aminoácidos, hormonas incretinas (GLP-1) y el sistema parasimpático."
    },
    {
        pregunta: "El glucagón, producido por células Alfa, actúa durante el ayuno para:",
        opciones: ["Inhibir la producción de glucosa hepática", "Disminuir la glucemia almacenando glucosa como glucógeno", "Aumentar la glucemia mediante glucogenólisis y gluconeogénesis hepática"],
        correcta: 2,
        explicacion: "En ayuno (↓ glucemia) → las células Alfa liberan glucagón → actúa en el hígado: glucogenólisis (rompe glucógeno → libera glucosa) + gluconeogénesis (fabrica glucosa nueva). Es antagonista de la insulina y la principal hormona contrainsulinar."
    },
    {
        pregunta: "La diabetes mellitus tipo 1 se diferencia de la tipo 2 principalmente porque:",
        opciones: ["Es autoinmune con destrucción de células Beta y déficit absoluto de insulina desde jóvenes", "Responde bien a la metformina oral sin necesidad de insulina", "Afecta solo a adultos obesos mayores de 40 años"],
        correcta: 0,
        explicacion: "DM tipo 1: autoinmune, destruye células Beta → déficit absoluto de insulina. Inicio en niños/jóvenes (<30 años), generalmente delgados. Propensos a cetoacidosis diabética (CAD). REQUIERE insulina de por vida. DM tipo 2: resistencia a insulina, adultos, obesidad, responde a antidiabéticos orales."
    },
    {
        pregunta: "La cetoacidosis diabética (CAD) es característica de:",
        opciones: ["Diabetes mellitus tipo 1 por déficit absoluto de insulina", "Diabetes mellitus tipo 2 con hiperglucemia leve", "Hipoglucemia grave por sobredosis de insulina"],
        correcta: 0,
        explicacion: "Sin insulina (DM tipo 1), las células no pueden usar glucosa → usan grasas → ↑ ácidos grasos libres → hígado produce cetonas (acetoacetato, betahidroxibutirato) → acidosis metabólica grave (pH <7.3). Tríada: hiperglucemia + acidosis + cetonuria."
    },
    {
        pregunta: "La HbA1c mide el control glucémico de los últimos:",
        opciones: ["6-12 meses", "7 días", "2-3 meses (vida media del eritrocito)"],
        correcta: 2,
        explicacion: "La HbA1c (hemoglobina glucosilada) refleja el promedio de glucemia de los últimos 2-3 meses, correlacionado con la vida media del eritrocito (~120 días). Normal <5.7%, prediabetes 5.7-6.4%, diabetes ≥6.5%. Es el mejor indicador de control glucémico crónico."
    },
    {
        pregunta: "Las 3 'P' clásicas de la diabetes son:",
        opciones: ["Poliuria, polidipsia y polifagia", "Polifagia, pérdida de peso y palidez", "Poliuria, parestesias y pérdida de visión"],
        correcta: 0,
        explicacion: "Las 3P: Poliuria (glucosuria osmótica → arrastre de agua), Polidipsia (bebe mucho para compensar), Polifagia (come mucho porque la glucosa no entra a las células). En DM tipo 1 se agrega pérdida de peso (catabolismo de grasas y proteínas)."
    },
    {
        pregunta: "El criterio diagnóstico de diabetes mellitus con glucosa en ayuno es:",
        opciones: ["≥110 mg/dL en una sola medición", "≥200 mg/dL solo en medición aleatoria", "≥126 mg/dL en 2 ocasiones diferentes"],
        correcta: 2,
        explicacion: "Criterios ADA: 1) Glucosa en ayuno ≥126 mg/dL en 2 mediciones. 2) Glucosa 2h postcarga ≥200 mg/dL. 3) HbA1c ≥6.5%. 4) Glucosa aleatoria ≥200 mg/dL + síntomas clásicos. Solo el criterio 4 no requiere confirmación."
    },
    {
        pregunta: "La complicación crónica más común de la diabetes mellitus a nivel renal es:",
        opciones: ["Glomerulonefritis autoinmune", "Síndrome nefrótico por deposición de amiloide", "Nefropatía diabética (primera causa de IRC en países desarrollados)"],
        correcta: 2,
        explicacion: "La nefropatía diabética es la primera causa de insuficiencia renal crónica (IRC) en países desarrollados. Comienza con microalbuminuria → macroalbuminuria → IRC → diálisis. La hiperglucemia daña el glomérulo renal produciendo glomeruloesclerosis de Kimmelstiel-Wilson."
    },

    // ══════════════════════════════════════════
    // BLOQUE 5 — GÓNADAS Y CICLO MENSTRUAL (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "Las células de Leydig de los testículos, estimuladas por LH, producen:",
        opciones: ["FSH para la espermatogénesis", "Testosterona (principal andrógeno masculino)", "Inhibina y espermatozoides maduros"],
        correcta: 1,
        explicacion: "Las células de Leydig (intersticiales) producen testosterona estimuladas por LH. La testosterona promueve: espermatogénesis, caracteres sexuales secundarios masculinos, libido, masa muscular y cierre de epífisis óseas en pubertad."
    },
    {
        pregunta: "Las células de Sertoli, estimuladas por FSH, producen:",
        opciones: ["Testosterona en grandes cantidades", "Inhibina (inhibe FSH) y nutren a los espermátides en desarrollo", "LH para la retroalimentación positiva"],
        correcta: 1,
        explicacion: "Las células de Sertoli son las 'nodrizas' de los espermatozoides: nutren y protegen a los espermátides en desarrollo. Producen inhibina que inhibe FSH por retroalimentación negativa. También forman la barrera hematotesticular."
    },
    {
        pregunta: "Los estrógenos (estradiol) son producidos principalmente por:",
        opciones: ["Las células granulosas del folículo ovárico, estimuladas por FSH", "El endometrio durante la fase secretora", "El cuerpo lúteo post-ovulatorio"],
        correcta: 0,
        explicacion: "Las células granulosas del folículo ovárico producen estrógenos (principalmente estradiol) en respuesta a FSH. El pico de estradiol en la fase proliferativa desencadena el surge de LH → ovulación. El cuerpo lúteo produce principalmente progesterona."
    },
    {
        pregunta: "El pico de LH (surge de LH) a mitad del ciclo menstrual es responsable de:",
        opciones: ["La formación del cuerpo lúteo después de la ovulación", "El inicio de la menstruación", "La ovulación (liberación del óvulo)"],
        correcta: 2,
        explicacion: "El pico de LH (día 14) desencadena la ovulación. Es provocado por el aumento de estrógenos en la fase proliferativa (retroalimentación POSITIVA, excepcional en endocrinología). Después de la ovulación, el folículo se convierte en cuerpo lúteo."
    },
    {
        pregunta: "La progesterona es producida por el cuerpo lúteo y su función principal es:",
        opciones: ["Preparar el endometrio para la implantación del embrión (fase secretora)", "Estimular la proliferación endometrial en la primera mitad del ciclo", "Desencadenar la ovulación mediante retroalimentación positiva"],
        correcta: 0,
        explicacion: "La progesterona (cuerpo lúteo, segunda mitad del ciclo) transforma el endometrio en fase secretora: aumenta vascularización, secreciones y glucógeno → óptimo para implantación. También ↑ temperatura basal corporal (útil para detectar ovulación) y mantiene el embarazo."
    },
    {
        pregunta: "Si no hay implantación del embrión, ¿qué ocurre con el cuerpo lúteo?",
        opciones: ["Se mantiene activo indefinidamente produciendo progesterona", "Involuciona (cuerpo albicans) → ↓ progesterona y estrógenos → menstruación", "Se convierte en folículo para el siguiente ciclo"],
        correcta: 1,
        explicacion: "Sin implantación, la hCG no llega → el cuerpo lúteo involuciona hacia el día 28 → bajan progesterona y estrógenos → el endometrio pierde su soporte → menstruación. Si hay embarazo, la hCG (detectada en test) mantiene el cuerpo lúteo hasta que la placenta produce progesterona."
    },
    {
        pregunta: "El ciclo menstrual tiene una duración promedio de 28 días. La ovulación ocurre:",
        opciones: ["Al final del ciclo, en el día 26-28", "Al inicio del ciclo, en los días 1-5", "A mitad del ciclo, alrededor del día 14"],
        correcta: 2,
        explicacion: "La ovulación ocurre aproximadamente en el día 14 de un ciclo de 28 días, desencadenada por el surge de LH. La fase más variable es la folicular (puede durar 10-20 días). La fase lútea siempre dura ~14 días."
    },
    {
        pregunta: "La menopausia se produce por:",
        opciones: ["Disminución de FSH y LH hipofisarias", "Agotamiento de los folículos ováricos → ↓ estrógenos → ↑ FSH y LH compensatoria", "Hipoactividad del hipotálamo y la hipófisis"],
        correcta: 1,
        explicacion: "La menopausia ocurre cuando los ovarios se quedan sin folículos (~50 años). Sin folículos → ↓ estrógenos → falla la retroalimentación negativa → ↑ FSH y LH (pueden estar muy elevadas). Síntomas: bochornos, atrofia vaginal, osteoporosis, cambios de humor."
    },
    {
        pregunta: "La hormona hCG (gonadotropina coriónica humana) detectada en el test de embarazo:",
        opciones: ["Es producida por el trofoblasto del embrión implantado para mantener el cuerpo lúteo", "Estimula la ovulación en el ciclo siguiente", "Es producida por la hipófisis materna"],
        correcta: 0,
        explicacion: "La hCG es producida por el trofoblasto (tejido que forma la placenta) a partir del 8-10° día post-fecundación. Mantiene el cuerpo lúteo activo para que siga produciendo progesterona → sostiene el embarazo. Es la hormona que detectan los test de embarazo."
    },
    {
        pregunta: "Los andrógenos suprarrenales (DHEA) en las mujeres son responsables de:",
        opciones: ["La producción de leche durante la lactancia", "El vello púbico y axilar, y contribuyen a la libido", "El ciclo menstrual y la fertilidad"],
        correcta: 1,
        explicacion: "En mujeres, los andrógenos suprarrenales (DHEA, androstenediona) de la zona reticular son los responsables del vello púbico y axilar (pubarca) y contribuyen a la libido femenina. Los ovarios también producen pequeñas cantidades de andrógenos. Su exceso causa virilización."
    },

    // ══════════════════════════════════════════
    // BLOQUE 6 — OTRAS GLÁNDULAS Y CONCEPTOS GENERALES (10 preguntas)
    // ══════════════════════════════════════════
    {
        pregunta: "La glándula pineal produce melatonina principalmente:",
        opciones: ["Durante la noche en respuesta a la oscuridad", "Durante el día en respuesta a la luz solar intensa", "De forma constante sin variación circadiana"],
        correcta: 0,
        explicacion: "La melatonina se secreta en oscuridad (señal nocturna), regulada por la vía retinohipotalámica. Su función: señal circadiana de 'noche' → induce sueño, baja temperatura corporal. La luz artificial nocturna (pantallas) suprime la melatonina → insomnio."
    },
    {
        pregunta: "El péptido natriurético auricular (ANP) es liberado por el corazón cuando:",
        opciones: ["El nivel de aldosterona es bajo", "Hay hipotensión y bajo volumen plasmático", "Hay distensión auricular por sobrecarga de volumen"],
        correcta: 2,
        explicacion: "ANP es liberado por las aurículas cuando detectan distensión por sobrecarga de volumen. Efecto opuesto al sistema RAA: natriuresis (↑ excreción de Na⁺ y agua) → ↓ volemia → ↓ PA. Es un mecanismo compensatorio en insuficiencia cardíaca."
    },
    {
        pregunta: "La eritropoyetina (EPO) se produce en respuesta a:",
        opciones: ["Estímulo de la hipófisis mediante una trópica específica", "Exceso de eritrocitos en sangre", "Hipoxia (↓ O₂ tisular), principalmente en células peritubulares renales"],
        correcta: 2,
        explicacion: "Las células peritubulares renales detectan hipoxia y secretan EPO → actúa en la médula ósea estimulando la eritropoyesis → más eritrocitos → más capacidad de transporte de O₂. La insuficiencia renal crónica reduce la producción de EPO → anemia normo-normo."
    },
    {
        pregunta: "La leptina, producida por el tejido adiposo, señaliza al hipotálamo para:",
        opciones: ["Estimular la producción de insulina pancreática", "Aumentar el apetito cuando hay poca grasa corporal", "Inhibir el apetito (saciedad) cuando hay suficiente energía almacenada"],
        correcta: 2,
        explicacion: "La leptina es la hormona de la saciedad: más grasa → más leptina → hipotálamo recibe señal de 'suficiente energía' → inhibe NPY/AgRP → ↓ apetito + ↑ gasto energético. En obesidad hay 'resistencia a leptina' → el hipotálamo no responde → hiperfagia a pesar de tener grasa en exceso."
    },
    {
        pregunta: "Las hormonas esteroideas se caracterizan por:",
        opciones: ["Derivar del colesterol, ser liposolubles y actuar mediante receptores intranucleares", "Derivar de aminoácidos y tener vida media corta", "Ser hidrosolubles y actuar mediante receptores de membrana"],
        correcta: 0,
        explicacion: "Hormonas esteroideas (cortisol, aldosterona, estrógenos, progesterona, testosterona): derivan del colesterol, son liposolubles → cruzan la membrana celular → se unen a receptores intranucleares → modifican la transcripción de genes directamente. Efecto más lento pero más duradero."
    },
    {
        pregunta: "La insulina y la GH son ejemplos de hormonas:",
        opciones: ["Aminoacídicas como la adrenalina", "Esteroideas derivadas del colesterol", "Peptídicas/proteicas que actúan mediante receptores de membrana"],
        correcta: 2,
        explicacion: "Insulina y GH son hormonas peptídicas/proteicas: son hidrosolubles, no pueden cruzar la membrana celular → se unen a receptores de membrana → activan segundos mensajeros (AMPc, cascadas de quinasas) → efecto rápido pero más corto que las esteroideas."
    },
    {
        pregunta: "El timo produce timosina, importante para:",
        opciones: ["La producción de eritrocitos en la médula ósea", "La regulación del ciclo circadiano y el sueño", "La maduración de linfocitos T y la inmunidad celular"],
        correcta: 2,
        explicacion: "El timo es la glándula endocrina del sistema inmune: la timosina y timopoyetina maduran los linfocitos T (de timo, de ahí la 'T'). Su hipoplasia en el síndrome de DiGeorge (deleción 22q11) causa inmunodeficiencia celular grave. Involuciona en la pubertad."
    },
    {
        pregunta: "La renina, producida por el riñón, activa:",
        opciones: ["La eritropoyetina para estimular la producción de glóbulos rojos", "El eje RAA convirtiendo angiotensinógeno en angiotensina I", "Directamente la aldosterona en la corteza suprarrenal"],
        correcta: 1,
        explicacion: "La renina (proteasa) convierte el angiotensinógeno hepático en Angiotensina I → la ECA (enzima convertidora de angiotensina, en pulmones) la convierte en Angiotensina II → estimula aldosterona + vasoconstricción → ↑ PA. Los IECA bloquean este eje."
    },
    {
        pregunta: "¿Cuál es la diferencia entre una glándula endocrina y una exocrina?",
        opciones: ["Las endocrinas secretan por conductos y las exocrinas al torrente sanguíneo", "Las endocrinas secretan hormonas al torrente sanguíneo; las exocrinas secretan por conductos", "No hay diferencia funcional, solo de tamaño"],
        correcta: 1,
        explicacion: "Glándula endocrina: secreta hormonas directamente al torrente sanguíneo (sin conducto) → acción a distancia. Glándula exocrina: secreta por conductos hacia una superficie o cavidad. Ejemplos exocrinas: salivales, sudoríparas, pancreática exocrina. El páncreas es mixta: endocrino (islotes) y exocrino (acinos)."
    },
    {
        pregunta: "La hormona del crecimiento (GH) hipofisaria, en exceso durante la infancia, causa:",
        opciones: ["Cretinismo y retraso mental", "Gigantismo (si las epífisis están abiertas) o acromegalia (si están cerradas)", "Síndrome de Cushing por estimulación suprarrenal"],
        correcta: 1,
        explicacion: "Exceso de GH: si ocurre antes del cierre de epífisis (infancia/adolescencia) → GIGANTISMO (talla exagerada). Si ocurre en adultos (epífisis cerradas) → ACROMEGALIA: manos/pies/mandíbula grandes, rasgos toscos, visceromegalia. Causa: adenoma hipofisario productor de GH."
    }

];

console.log("✅ Evaluación Sistema Endocrino cargada:", EVALUACION_SISTEMA_ENDOCRINO.length, "preguntas");
