// ============================================================
// JUEGO: DIAGNÓSTICO CLÍNICO
// diagnosticos-data.js — Casos con signos vitales completos
// ============================================================
// Valores normales de referencia:
//   Temperatura:     36.5 – 37.5 °C
//   Frec. Cardíaca:  60 – 100 lpm
//   Frec. Resp.:     12 – 20 rpm
//   Presión Arterial: <120/80 mmHg (normal)
//   Glucosa (ayuno): 70 – 100 mg/dL
//   SpO₂:           95 – 100 %

const DIAGNOSTICOS_DATA = [

    // ── INFECCIOSAS ─────────────────────────────────────────
    {
        id: 1,
        categoria: "Infeccioso",
        paciente: "Mujer de 28 años acude por malestar general de 3 días. Refiere tos productiva con expectoración amarillenta y dolor pleurítico.",
        vitales: {
            temperatura: { valor: "39.2°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "112 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "26 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "105/70 mmHg", estado: "baja-normal", color: "#eab308" },
            glucosa: { valor: "95 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "91%", estado: "baja", color: "#ef4444" }
        },
        clave: "Fiebre + taquipnea + SpO₂↓ + tos productiva",
        opciones: ["Neumonía", "Bronquitis crónica", "Tuberculosis", "Insuficiencia cardíaca"],
        correcta: 0,
        explicacion: "La tríada de fiebre (39.2°C), taquipnea (26 rpm) e hipoxemia (SpO₂ 91%) con tos productiva y dolor pleurítico es característica de NEUMONÍA adquirida en la comunidad. La SpO₂ baja indica consolidación pulmonar que impide la oxigenación."
    },
    {
        id: 2,
        categoria: "Infeccioso",
        paciente: "Hombre de 45 años con fiebre de 5 días, escalofríos intensos, rigidez de nuca y fotofobia. Refiere cefalea 10/10.",
        vitales: {
            temperatura: { valor: "40.1°C", estado: "muy alta", color: "#ef4444" },
            frecCardiaca: { valor: "124 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "22 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "100/65 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "61 mg/dL", estado: "baja", color: "#f97316" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Fiebre alta + rigidez de nuca + cefalea + glucosa LCR baja",
        opciones: ["Meningitis bacteriana", "Migraña severa", "Encefalitis viral", "Accidente cerebrovascular"],
        correcta: 0,
        explicacion: "Fiebre muy alta (40.1°C), rigidez de nuca, fotofobia y cefalea explosiva configuran la tríada clásica de MENINGITIS BACTERIANA. La glucosa baja (61 mg/dL) refleja el consumo de glucosa por las bacterias en el LCR. Es una emergencia."
    },
    {
        id: 3,
        categoria: "Infeccioso",
        paciente: "Niña de 8 años con fiebre súbita de 2 días, dolor de garganta intenso y dificultad para comer. No tiene tos.",
        vitales: {
            temperatura: { valor: "38.9°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "108 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "100/65 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Fiebre + odinofagia + SIN tos → origen bacteriano",
        opciones: ["Faringoamigdalitis estreptocócica", "Mononucleosis infecciosa", "Resfriado común", "Epiglotitis"],
        correcta: 0,
        explicacion: "Fiebre (38.9°C), odinofagia intensa y AUSENCIA de tos es la presentación clásica de FARINGOAMIGDALITIS ESTREPTOCÓCICA (Streptococcus pyogenes). La tos presente orienta a virus; su ausencia orienta a bacteria. SpO₂ y FR normales descartan compromiso respiratorio bajo."
    },

    // ── METABÓLICO / ENDOCRINO ───────────────────────────────
    {
        id: 4,
        categoria: "Metabólico",
        paciente: "Mujer de 55 años diabética tipo 2, encontrada confusa en su casa. Su familia refiere que no comió desde ayer y se inyectó insulina.",
        vitales: {
            temperatura: { valor: "36.8°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "118 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "105/70 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "38 mg/dL", estado: "muy baja", color: "#ef4444" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Glucosa 38 mg/dL + confusión + taquicardia compensadora",
        opciones: ["Hipoglucemia severa", "Cetoacidosis diabética", "ACV isquémico", "Hipotiroidismo"],
        correcta: 0,
        explicacion: "Glucosa de 38 mg/dL (normal: 70-100) en una diabética que tomó insulina sin comer = HIPOGLUCEMIA SEVERA. La taquicardia (118 lpm) es la respuesta adrenérgica compensadora. La confusión ocurre porque el cerebro depende exclusivamente de glucosa. Tratamiento: glucosa IV o glucagón IM urgente."
    },
    {
        id: 5,
        categoria: "Metabólico",
        paciente: "Hombre de 32 años con diabetes tipo 1. Lleva 3 días con náuseas, vómitos y dolor abdominal. Aliento con olor a frutas.",
        vitales: {
            temperatura: { valor: "37.8°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "128 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "28 rpm", estado: "muy alta", color: "#ef4444" },
            presionArterial: { valor: "95/60 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "420 mg/dL", estado: "muy alta", color: "#ef4444" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Glucosa >300 + respiración de Kussmaul + aliento cetónico",
        opciones: ["Cetoacidosis diabética", "Estado hiperglucémico hiperosmolar", "Pancreatitis aguda", "Gastroenteritis"],
        correcta: 0,
        explicacion: "Glucosa 420 mg/dL + taquipnea severa (28 rpm = respiración de Kussmaul, compensando la acidosis metabólica) + aliento a frutas (cetonas) + hipotensión por deshidratación = CETOACIDOSIS DIABÉTICA (CAD). Emergencia endocrina. Requiere insulina IV + hidratación + corrección electrolítica."
    },
    {
        id: 6,
        categoria: "Metabólico",
        paciente: "Mujer de 62 años obesa con polidipsia, poliuria y visión borrosa de 2 semanas. Sin dolor abdominal ni vómitos.",
        vitales: {
            temperatura: { valor: "37.1°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "102 lpm", estado: "leve", color: "#eab308" },
            frecResp: { valor: "17 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "145/92 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "380 mg/dL", estado: "muy alta", color: "#ef4444" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Glucosa alta + sin cetosis + polidipsia/poliuria + obesidad",
        opciones: ["Diabetes mellitus tipo 2 descontrolada", "Cetoacidosis diabética", "Diabetes insípida", "Síndrome de Cushing"],
        correcta: 0,
        explicacion: "Glucosa 380 mg/dL, polidipsia, poliuria y visión borrosa sin cetoacidosis (FR y pH normales, sin aliento cetónico) en mujer obesa = DIABETES MELLITUS TIPO 2 DESCONTROLADA. La HTA asociada es común. Sin cetosis porque aún produce algo de insulina (a diferencia del T1)."
    },

    // ── CARDIOVASCULAR ───────────────────────────────────────
    {
        id: 7,
        categoria: "Cardiovascular",
        paciente: "Hombre de 58 años con dolor precordial opresivo que irradia al brazo izquierdo y mandíbula, de 45 minutos de evolución. Diaforesis profusa.",
        vitales: {
            temperatura: { valor: "36.9°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "98 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "158/98 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "112 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "93%", estado: "baja", color: "#ef4444" }
        },
        clave: "Dolor precordial + irradiación + diaforesis + SpO₂↓",
        opciones: ["Infarto agudo de miocardio", "Angina estable", "Disección aórtica", "Reflujo gastroesofágico"],
        correcta: 0,
        explicacion: "Dolor precordial opresivo >20 min con irradiación a brazo y mandíbula + diaforesis + SpO₂ 93% = INFARTO AGUDO DE MIOCARDIO (IAM). La SpO₂ baja indica falla de bomba. Diferencia clave: la angina cede con reposo/nitratos en <20 min; el IAM NO cede. Emergencia: activar código infarto."
    },
    {
        id: 8,
        categoria: "Cardiovascular",
        paciente: "Mujer de 70 años hipertensa que llega con cefalea pulsátil intensa, visión borrosa y epistaxis. Sin déficit neurológico focal.",
        vitales: {
            temperatura: { valor: "36.7°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "88 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "210/120 mmHg", estado: "crisis", color: "#ef4444" },
            glucosa: { valor: "98 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "PA >180/120 + síntomas + SIN daño a órgano blanco",
        opciones: ["Urgencia hipertensiva", "Emergencia hipertensiva", "Accidente cerebrovascular", "Feocromocitoma"],
        correcta: 0,
        explicacion: "PA 210/120 mmHg con síntomas (cefalea, epistaxis) pero SIN daño a órgano blanco (sin déficit neurológico, sin falla renal aguda, sin edema pulmonar) = URGENCIA HIPERTENSIVA. Si hubiera daño a órgano blanco sería EMERGENCIA hipertensiva y requeriría hospitalización con antihipertensivos IV."
    },

    // ── RESPIRATORIO ─────────────────────────────────────────
    {
        id: 9,
        categoria: "Respiratorio",
        paciente: "Hombre de 67 años fumador de 40 años. Acude por disnea progresiva, tos crónica y sibilancias. Refiere que sus dedos se han 'ensanchado' con los años.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "88 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "24 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "130/82 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "92 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "88%", estado: "muy baja", color: "#ef4444" }
        },
        clave: "Fumador + SpO₂ 88% crónica + taquipnea + dedos en palillo",
        opciones: ["EPOC (Enfermedad Pulmonar Obstructiva Crónica)", "Asma bronquial", "Fibrosis pulmonar", "Insuficiencia cardíaca congestiva"],
        correcta: 0,
        explicacion: "Fumador crónico + disnea progresiva + sibilancias + SpO₂ 88% + dedos en palillo de tambor (hipocratismo digital por hipoxia crónica) = EPOC. Diferencia del asma: EPOC es irreversible, en mayores fumadores; el asma es reversible, alérgica. La SpO₂ crónicamente baja indica daño estructural permanente."
    },
    {
        id: 10,
        categoria: "Respiratorio",
        paciente: "Joven de 19 años alérgico, llega con disnea súbita, sibilancias audibles y opresión torácica tras exposición a gatos. Previamente sano.",
        vitales: {
            temperatura: { valor: "36.8°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "116 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "30 rpm", estado: "muy alta", color: "#ef4444" },
            presionArterial: { valor: "118/76 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "90 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "89%", estado: "baja", color: "#ef4444" }
        },
        clave: "Joven + desencadenante alérgico + broncoespasmo reversible",
        opciones: ["Crisis asmática", "EPOC exacerbado", "Anafilaxia", "Tromboembolismo pulmonar"],
        correcta: 0,
        explicacion: "Joven alérgico con disnea súbita, sibilancias y SpO₂ 89% tras exposición a desencadenante específico (gatos) = CRISIS ASMÁTICA. El asma es reversible con broncodilatadores. La diferencia clave con anafilaxia: en asma no hay urticaria, angioedema ni hipotensión. Tratamiento: salbutamol inhalado."
    },

    // ── CHOQUE / SEPSIS ──────────────────────────────────────
    {
        id: 11,
        categoria: "Urgencias",
        paciente: "Mujer de 78 años, residente de asilo. Fiebre de 3 días, confusión aguda, no orina. Familiares la encuentran letárgica.",
        vitales: {
            temperatura: { valor: "39.8°C", estado: "muy alta", color: "#ef4444" },
            frecCardiaca: { valor: "138 lpm", estado: "muy alta", color: "#ef4444" },
            frecResp: { valor: "26 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "82/50 mmHg", estado: "muy baja", color: "#ef4444" },
            glucosa: { valor: "185 mg/dL", estado: "alta", color: "#f97316" },
            spo2: { valor: "90%", estado: "baja", color: "#ef4444" }
        },
        clave: "Todos los vitales alterados + foco infeccioso + hipotensión",
        opciones: ["Choque séptico", "Choque cardiogénico", "Choque hipovolémico", "Choque anafiláctico"],
        correcta: 0,
        explicacion: "Infección (fiebre 39.8°C) + hipotensión (PA 82/50) + taquicardia + taquipnea + disfunción orgánica (confusión, anuria) = CHOQUE SÉPTICO (sepsis con hipotensión que no responde a fluidos). Es la forma más grave de sepsis. Mortalidad >40%. Requiere antibióticos IV + vasopresores + reanimación hídrica urgente."
    },
    {
        id: 12,
        categoria: "Urgencias",
        paciente: "Hombre de 24 años picado por abeja hace 10 minutos. Ronchas en todo el cuerpo, labios hinchados, voz ronca y mareo intenso.",
        vitales: {
            temperatura: { valor: "36.5°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "132 lpm", estado: "muy alta", color: "#ef4444" },
            frecResp: { valor: "28 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "78/48 mmHg", estado: "colapso", color: "#ef4444" },
            glucosa: { valor: "96 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "88%", estado: "muy baja", color: "#ef4444" }
        },
        clave: "Desencadenante + urticaria + angioedema + colapso vascular",
        opciones: ["Anafilaxia", "Choque séptico", "Crisis asmática severa", "Síncope vasovagal"],
        correcta: 0,
        explicacion: "Exposición al alérgeno (picadura) + urticaria generalizada + angioedema (labios) + estridor (voz ronca = obstrucción alta) + colapso hemodinámico (PA 78/48) = ANAFILAXIA. Sin temperatura elevada (diferencia con sepsis). Tratamiento: ADRENALINA IM 0.3mg inmediata. Es la única emergencia donde el primer medicamento es adrenalina."
    },

    // ── NEUROLÓGICO ─────────────────────────────────────────
    {
        id: 13,
        categoria: "Neurológico",
        paciente: "Mujer de 65 años hipertensa. Esposo llama al 911 porque de repente no puede hablar y tiene el lado derecho del cuerpo sin moverse. Inicio hace 1 hora.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "88 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "185/105 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "102 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Déficit neurológico focal súbito + HTA + ventana terapéutica",
        opciones: ["Accidente cerebrovascular (ACV) isquémico", "Hipoglucemia", "Crisis epiléptica", "Parálisis de Bell"],
        correcta: 0,
        explicacion: "Inicio SÚBITO de afasia (no habla) + hemiparesia derecha en hipertensa = ACV ISQUÉMICO. Vital: la glucosa normal descarta hipoglucemia (que imita ACV). PA alta es reactiva al ACV. Ventana terapéutica para trombólisis: 4.5 horas. Mnemotecnia FAST: Face-Arm-Speech-Time. ¡Emergencia tiempo-dependiente!"
    },

    // ── RENAL ────────────────────────────────────────────────
    {
        id: 14,
        categoria: "Renal",
        paciente: "Hombre de 50 años con cólico renal intenso en flanco derecho, náuseas e imposibilidad de encontrar posición cómoda. Orina con leve coloración rosada.",
        vitales: {
            temperatura: { valor: "37.3°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "104 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "148/88 mmHg", estado: "alta", color: "#eab308" },
            glucosa: { valor: "94 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Dolor cólico en flanco + hematuria + inquietud",
        opciones: ["Cólico nefróutico (litiasis renal)", "Apendicitis aguda", "Aneurisma aórtico abdominal", "Infección urinaria alta"],
        correcta: 0,
        explicacion: "Dolor tipo cólico en flanco (ondulante, sin posición de alivio), hematuria (orina rosada) e inquietud extrema = CÓLICO NEFROURÍTICO por LITIASIS RENAL (cálculo en uréter). La taquicardia y HTA son por el dolor. Diferencia con pielonefritis: sin fiebre >38°C. Tratamiento: analgesia potente + hidratación."
    },

    // ── DIGESTIVO ────────────────────────────────────────────
    {
        id: 15,
        categoria: "Digestivo",
        paciente: "Hombre de 42 años con dolor abdominal en fosa ilíaca derecha de 12 horas, inicio periumbilical que migró. Náuseas y fiebre baja. Rebote positivo.",
        vitales: {
            temperatura: { valor: "38.3°C", estado: "alta", color: "#f97316" },
            frecCardiaca: { valor: "102 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "122/78 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "99 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Dolor periumbilical → FID + rebote + fiebre baja",
        opciones: ["Apendicitis aguda", "Cólico renal derecho", "Hernia inguinal incarcerada", "Enfermedad de Crohn"],
        correcta: 0,
        explicacion: "Dolor que MIGRA de periumbilical a fosa ilíaca derecha (FID) + signo de rebote (irritación peritoneal) + fiebre moderada (38.3°C) = APENDICITIS AGUDA. Signo de McBurney positivo en FID. La glucosa y SpO₂ normales ayudan a descartar otras causas. Tratamiento: apendicectomía quirúrgica urgente."
    },

    // ── ENDOCRINO ─────────────────────────────────────────────
    {
        id: 16,
        categoria: "Endocrino",
        paciente: "Mujer de 35 años con nerviosismo, palpitaciones, pérdida de peso de 8 kg en 2 meses, intolerancia al calor y ojos saltones. Come mucho pero adelgaza.",
        vitales: {
            temperatura: { valor: "37.9°C", estado: "leve alta", color: "#eab308" },
            frecCardiaca: { valor: "118 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "148/72 mmHg", estado: "presión de pulso amplia", color: "#f97316" },
            glucosa: { valor: "105 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Taquicardia + pérdida de peso + exoftalmos + intolerancia al calor",
        opciones: ["Hipertiroidismo (Graves)", "Feocromocitoma", "Diabetes mellitus tipo 1", "Linfoma de Hodgkin"],
        correcta: 0,
        explicacion: "Taquicardia, pérdida de peso con apetito aumentado, nerviosismo, intolerancia al calor y EXOFTALMOS (ojos saltones) = ENFERMEDAD DE GRAVES (hipertiroidismo autoinmune). La presión de pulso amplia (PA sistólica alta, diastólica baja) es típica por el hipermetabolismo. Tratamiento: antitiroideos, yodo radiactivo o cirugía."
    },
    {
        id: 17,
        categoria: "Endocrino",
        paciente: "Hombre de 52 años con fatiga extrema, aumento de peso, intolerancia al frío, estreñimiento y piel seca. Refiere que 'todo lo hace más lento'.",
        vitales: {
            temperatura: { valor: "35.8°C", estado: "baja", color: "#3b82f6" },
            frecCardiaca: { valor: "52 lpm", estado: "baja", color: "#3b82f6" },
            frecResp: { valor: "13 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "138/88 mmHg", estado: "leve alta", color: "#eab308" },
            glucosa: { valor: "108 mg/dL", estado: "normal-alto", color: "#eab308" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Bradicardia + hipotermia + enlentecimiento general",
        opciones: ["Hipotiroidismo", "Insuficiencia suprarrenal", "Depresión mayor", "Enfermedad de Addison"],
        correcta: 0,
        explicacion: "Bradicardia (52 lpm), hipotermia (35.8°C), fatiga, intolerancia al frío, estreñimiento y piel seca = HIPOTIROIDISMO. Todo funciona 'lento' porque falta hormona tiroidea que regula el metabolismo basal. Contrario al hipertiroidismo. Tratamiento: levotiroxina oral de por vida."
    },
    {
        id: 18,
        categoria: "Endocrino",
        paciente: "Mujer de 40 años obesa con estrías moradas en abdomen, cara 'de luna llena', joroba en la nuca e hirsutismo. Hematomas espontáneos frecuentes.",
        vitales: {
            temperatura: { valor: "37.1°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "82 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "17 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "162/98 mmHg", estado: "alta", color: "#ef4444" },
            glucosa: { valor: "178 mg/dL", estado: "alta", color: "#f97316" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Estrías moradas + cara luna + joroba + HTA + hiperglucemia",
        opciones: ["Síndrome de Cushing", "Obesidad mórbida", "Síndrome de ovario poliquístico", "Hipotiroidismo"],
        correcta: 0,
        explicacion: "Estrías moradas (por exceso de cortisol), cara de luna llena, joroba de búfalo, hirsutismo, HTA e hiperglucemia = SÍNDROME DE CUSHING (exceso de cortisol). El cortisol en exceso causa redistribución de grasa, hiperglucemia e inmunosupresión. Causa más común: uso crónico de esteroides."
    },

    // ── HEMATOLÓGICO ──────────────────────────────────────────
    {
        id: 19,
        categoria: "Hematológico",
        paciente: "Mujer de 25 años con palidez, fatiga al mínimo esfuerzo, taquicardia en reposo y uñas en forma de cuchara (coiloniquia). Menstruaciones abundantes.",
        vitales: {
            temperatura: { valor: "36.6°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "108 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "100/65 mmHg", estado: "normal-baja", color: "#eab308" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "95%", estado: "normal-bajo", color: "#eab308" }
        },
        clave: "Palidez + taquicardia compensadora + coiloniquia + menorragia",
        opciones: ["Anemia ferropénica", "Anemia hemolítica", "Leucemia aguda", "Talasemia"],
        correcta: 0,
        explicacion: "Palidez, fatiga, taquicardia compensadora (el corazón late más rápido para compensar menos oxígeno), coiloniquia (uñas en cuchara, signo clásico) y menorragia = ANEMIA FERROPÉNICA (por déficit de hierro). Es la anemia más común en mujeres en edad reproductiva. Tratamiento: hierro oral + tratar la causa."
    },
    {
        id: 20,
        categoria: "Hematológico",
        paciente: "Hombre de 68 años con fiebre de 3 semanas, sudoración nocturna, pérdida de peso y ganglios del cuello grandes e indoloros. Sin infección evidente.",
        vitales: {
            temperatura: { valor: "38.6°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "96 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "128/80 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "94 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Síntomas B: fiebre + sudoración nocturna + pérdida de peso + adenopatía",
        opciones: ["Linfoma de Hodgkin", "Tuberculosis ganglionar", "Mononucleosis infecciosa", "Leucemia linfocítica crónica"],
        correcta: 0,
        explicacion: "Fiebre >38°C, sudoración nocturna y pérdida >10% del peso ('Síntomas B') + adenopatía cervical indolora en adulto mayor = LINFOMA DE HODGKIN. Los ganglios indoloros diferencian del linfoma infeccioso. Diagnóstico confirmado con biopsia ganglionar que muestra células de Reed-Sternberg."
    },

    // ── GINECOLÓGICO ──────────────────────────────────────────
    {
        id: 21,
        categoria: "Ginecológico",
        paciente: "Mujer de 26 años embarazada de 8 semanas con dolor abdominal bajo derecho intenso, sangrado vaginal leve y mareo. Prueba de embarazo positiva.",
        vitales: {
            temperatura: { valor: "36.9°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "122 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "88/56 mmHg", estado: "muy baja", color: "#ef4444" },
            glucosa: { valor: "92 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Embarazo + dolor unilateral + hipotensión + taquicardia = abdomen quirúrgico",
        opciones: ["Embarazo ectópico roto", "Aborto espontáneo", "Apendicitis aguda", "Quiste ovárico torcido"],
        correcta: 0,
        explicacion: "Embarazo temprano + dolor abdominal unilateral + hemorragia vaginal + hipotensión (88/56) y taquicardia (122) = EMBARAZO ECTÓPICO ROTO. La hipotensión indica sangrado interno masivo. Es una emergencia quirúrgica. Mnemotecnia: 'triada de Fallopio': amenorrea, dolor, hemorragia."
    },
    {
        id: 22,
        categoria: "Ginecológico",
        paciente: "Mujer de 32 años con fiebre, dolor pélvico bilateral, flujo vaginal purulento y dolor al movilizar el cuello uterino en la exploración. Activa sexualmente.",
        vitales: {
            temperatura: { valor: "38.8°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "104 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "19 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "118/74 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "90 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Fiebre + dolor pélvico + flujo purulento + signo de chandelier",
        opciones: ["Enfermedad inflamatoria pélvica", "Apendicitis aguda", "Embarazo ectópico", "Endometriosis"],
        correcta: 0,
        explicacion: "Fiebre, dolor pélvico bilateral, flujo purulento y 'signo de Chandelier' (dolor intenso al movilizar el cérvix) = ENFERMEDAD INFLAMATORIA PÉLVICA (EIP). Causada por Chlamydia o Gonorrea. Complicación grave: absceso tuboovárico. Tratamiento: antibióticos de amplio espectro (ceftriaxona + doxiciclina)."
    },

    // ── PEDIÁTRICO ────────────────────────────────────────────
    {
        id: 23,
        categoria: "Pediátrico",
        paciente: "Niño de 2 años con fiebre de 40°C de inicio súbito, llanto inconsolable, rigidez de nuca y manchas rojas que no desaparecen al presionar con un vaso.",
        vitales: {
            temperatura: { valor: "40.3°C", estado: "muy alta", color: "#ef4444" },
            frecCardiaca: { valor: "148 lpm", estado: "muy alta", color: "#ef4444" },
            frecResp: { valor: "32 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "80/50 mmHg", estado: "muy baja", color: "#ef4444" },
            glucosa: { valor: "58 mg/dL", estado: "baja", color: "#f97316" },
            spo2: { valor: "91%", estado: "baja", color: "#ef4444" }
        },
        clave: "Fiebre + petequias no blanqueables + rigidez de nuca = emergencia",
        opciones: ["Meningococcemia con púrpura", "Varicela", "Fiebre reumática", "Sepsis por Haemophilus"],
        correcta: 0,
        explicacion: "Fiebre alta + petequias/púrpura NO blanqueables (test del vaso negativo) + rigidez de nuca + inestabilidad hemodinámica = MENINGOCOCCEMIA CON PÚRPURA FULMINANTE. Las manchas no blanqueables = sangrado subcutáneo por coagulación intravascular. Mortalidad >50% sin tratamiento inmediato. Penicilina IV urgente."
    },
    {
        id: 24,
        categoria: "Pediátrico",
        paciente: "Niño de 5 años con tos perruna característica (como foca), ronquera y estridor inspiratorio que empeoró de noche. Sin fiebre alta. Previamente sano.",
        vitales: {
            temperatura: { valor: "37.8°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "112 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "28 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "95/62 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "93%", estado: "baja", color: "#f97316" }
        },
        clave: "Tos perruna + estridor + ronquera + peor de noche en niño pequeño",
        opciones: ["Crup viral (laringotraqueobronquitis)", "Epiglotitis", "Cuerpo extraño en vía aérea", "Asma infantil"],
        correcta: 0,
        explicacion: "Tos 'perruna' (ladrido de foca), ronquera y estridor INSPIRATORIO que empeora de noche en niño de 1-5 años = CRUP VIRAL (parainfluenza). El estridor inspiratorio indica obstrucción de la vía aérea superior. Diferencia con epiglotitis: crup tiene tos perruna; epiglotitis tiene posición de trípode, babeo y NO tose. Tratamiento: dexametasona + adrenalina nebulizada."
    },
    {
        id: 25,
        categoria: "Pediátrico",
        paciente: "Lactante de 3 meses con llanto agudo, piernas flexionadas sobre el abdomen, vómito en proyectil y masa palpable en hemiabdomen derecho. Heces en 'jalea de grosella'.",
        vitales: {
            temperatura: { valor: "37.2°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "138 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "30 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "78/48 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "72 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "95%", estado: "normal", color: "#10b981" }
        },
        clave: "Lactante + dolor cólico + heces en jalea + masa abdominal",
        opciones: ["Intususcepción intestinal", "Estenosis pilórica", "Vólvulo intestinal", "Cólico del lactante"],
        correcta: 0,
        explicacion: "Tríada clásica: dolor abdominal cólico (piernas al pecho), heces en 'jalea de grosella' (moco con sangre) y masa palpable en abdomen = INTUSUSCEPCIÓN INTESTINAL (telescopaje del intestino sobre sí mismo). Emergencia pediátrica. Tratamiento: enema de reducción con bario o cirugía."
    },

    // ── TRAUMATOLOGÍA ─────────────────────────────────────────
    {
        id: 26,
        categoria: "Traumatología",
        paciente: "Motociclista de 28 años tras accidente. Dolor intenso en muslo derecho, deformidad visible, acortamiento del miembro y rotación externa. Gran hematoma local.",
        vitales: {
            temperatura: { valor: "36.8°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "118 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "98/62 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "142 mg/dL", estado: "alta estrés", color: "#eab308" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Deformidad + acortamiento + hematoma + hipotensión por pérdida sanguínea",
        opciones: ["Fractura de fémur con choque hemorrágico", "Luxación de cadera", "Fractura de pelvis", "Trombosis venosa profunda"],
        correcta: 0,
        explicacion: "Deformidad, acortamiento y rotación externa del muslo + hipotensión = FRACTURA DE FÉMUR con inicio de choque hemorrágico. El fémur puede acumular 1-2 litros de sangre internamente. La glucosa elevada es por estrés. La taquicardia e hipotensión son señales de alarma. Inmovilizar y transfundir urgente."
    },
    {
        id: 27,
        categoria: "Traumatología",
        paciente: "Ciclista de 22 años caído en pecho. Dolor torácico unilateral izquierdo que aumenta con la respiración, disminución de ruidos respiratorios izquierdos y desviación traqueal derecha.",
        vitales: {
            temperatura: { valor: "36.7°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "128 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "32 rpm", estado: "muy alta", color: "#ef4444" },
            presionArterial: { valor: "85/55 mmHg", estado: "muy baja", color: "#ef4444" },
            glucosa: { valor: "96 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "82%", estado: "crítica", color: "#ef4444" }
        },
        clave: "Trauma + ausencia de ruidos + desviación traqueal + colapso hemodinámico",
        opciones: ["Neumotórax a tensión", "Hemotórax masivo", "Taponamiento cardíaco", "Contusión pulmonar"],
        correcta: 0,
        explicacion: "Trauma torácico + ausencia de ruidos en hemitórax + DESVIACIÓN TRAQUEAL contralateral + hipotensión + SpO₂ 82% = NEUMOTÓRAX A TENSIÓN. El aire atrapado desplaza el mediastino, comprime el corazón sano y colapsa la circulación. Es LA emergencia respiratoria más letal. Tratamiento: descompresión con aguja en 2° espacio intercostal, línea medioclavicular INMEDIATA."
    },

    // ── DERMATOLÓGICO ─────────────────────────────────────────
    {
        id: 28,
        categoria: "Dermatológico",
        paciente: "Hombre de 55 años diabético con lesión en pie derecho: negro, sin dolor, bordes bien definidos, piel fría alrededor y pulso pedio ausente. Huele mal.",
        vitales: {
            temperatura: { valor: "37.4°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "88 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "17 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "148/90 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "290 mg/dL", estado: "muy alta", color: "#ef4444" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Diabético + lesión negra indolora + pulso ausente = tejido muerto",
        opciones: ["Gangrena seca del pie diabético", "Celulitis necrosante", "Melanoma maligno", "Insuficiencia venosa"],
        correcta: 0,
        explicacion: "Diabético con glucosa 290 + lesión negra INDOLORA (neuropatía diabética elimina el dolor) + piel fría + pulso pedio ausente (isquemia) = GANGRENA SECA DEL PIE DIABÉTICO. Indolora por neuropatía periférica. El olor es necrosis tisular. Tratamiento: revascularización si es posible, amputación si no."
    },
    {
        id: 29,
        categoria: "Dermatológico",
        paciente: "Mujer de 45 años con erupción en mariposa en mejillas y nariz, artritis en manos, fotosensibilidad y caída de cabello. Fiebre baja recurrente.",
        vitales: {
            temperatura: { valor: "38.1°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "94 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "135/82 mmHg", estado: "normal-alto", color: "#eab308" },
            glucosa: { valor: "92 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Rash malar + artritis + fotosensibilidad + alopecia + fiebre",
        opciones: ["Lupus eritematoso sistémico (LES)", "Rosácea", "Dermatomiositis", "Artritis reumatoide"],
        correcta: 0,
        explicacion: "Rash en 'alas de mariposa' (malar), artritis, fotosensibilidad y alopecia en mujer joven = LUPUS ERITEMATOSO SISTÉMICO (LES). Enfermedad autoinmune que afecta múltiples órganos. Diagnóstico por criterios SLICC: se necesitan ≥4 criterios. Más común en mujeres 15-45 años. Marcador: ANA positivo, anti-dsDNA."
    },

    // ── PSIQUIÁTRICO/NEUROLÓGICO ──────────────────────────────
    {
        id: 30,
        categoria: "Neurológico",
        paciente: "Hombre de 70 años, fumador, que al despertarse no puede mover brazo derecho ni hablar con claridad. Los síntomas comenzaron hace 4 horas y ya mejoraron un 50%.",
        vitales: {
            temperatura: { valor: "36.8°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "76 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "175/95 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "108 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Déficit neurológico focal que MEJORA espontáneamente en <24h",
        opciones: ["Ataque isquémico transitorio (AIT)", "ACV isquémico establecido", "Hipoglucemia", "Crisis epiléptica focal"],
        correcta: 0,
        explicacion: "Déficit neurológico focal (hemiparesia + afasia) que REVIERTE espontáneamente en <24 horas = ATAQUE ISQUÉMICO TRANSITORIO (AIT). Aunque mejora, es una EMERGENCIA porque el 10-15% presenta ACV en 48h. Diferencia con ACV: en AIT no hay lesión permanente en imagen. Requiere antiagregación urgente y estudio de la causa."
    },
    {
        id: 31,
        categoria: "Neurológico",
        paciente: "Hombre de 35 años con cefalea 'en trueno' de inicio súbito e intensidad 10/10, vómitos en proyectil y fotofobia. Refiere que nunca había tenido un dolor así.",
        vitales: {
            temperatura: { valor: "37.5°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "64 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "168/98 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "100 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Cefalea en trueno de inicio súbito = hemorragia hasta demostrar lo contrario",
        opciones: ["Hemorragia subaracnoidea", "Migraña con aura", "Meningitis viral", "Hipertensión maligna"],
        correcta: 0,
        explicacion: "Cefalea 'en trueno' (la peor de la vida, inicio en segundos) + vómito en proyectil + fotofobia SIN fiebre alta = HEMORRAGIA SUBARACNOIDEA (HSA) hasta que se demuestre lo contrario. Causada por rotura de aneurisma. La bradicardia con HTA es reflejo de Cushing por hipertensión intracraneal. TAC urgente, si negativo → punción lumbar."
    },
    {
        id: 32,
        categoria: "Neurológico",
        paciente: "Mujer de 30 años con episodios de movimientos involuntarios en brazo derecho que se propagan al resto del cuerpo, pérdida de consciencia y confusión post-episodio de 20 min.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "102 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "138/86 mmHg", estado: "normal-alto", color: "#eab308" },
            glucosa: { valor: "96 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Movimientos que se propagan + pérdida de consciencia + confusión post-ictal",
        opciones: ["Epilepsia focal con generalización secundaria", "Síncope vasovagal", "AIT motor", "Psicosis aguda"],
        correcta: 0,
        explicacion: "Inicio focal (brazo derecho) que se GENERALIZA + pérdida de consciencia + confusión post-ictal (estado de Parálisis de Todd) = EPILEPSIA FOCAL CON GENERALIZACIÓN SECUNDARIA. La progresión focal→general (Marchetti epiléptica) confirma inicio cortical. La confusión post-ictal diferencia de síncope (recuperación rápida). Tratamiento: antiepilépticos."
    },

    // ── GASTROENTEROLÓGICO ────────────────────────────────────
    {
        id: 33,
        categoria: "Digestivo",
        paciente: "Hombre de 48 años con dolor epigástrico intenso irradiado 'en cinturón' hacia la espalda, náuseas, vómito y antecedente de consumo excesivo de alcohol.",
        vitales: {
            temperatura: { valor: "38.4°C", estado: "alta", color: "#f97316" },
            frecCardiaca: { valor: "116 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "102/65 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "188 mg/dL", estado: "alta", color: "#f97316" },
            spo2: { valor: "94%", estado: "baja", color: "#f97316" }
        },
        clave: "Dolor epigástrico en cinturón + alcohol + hiperglucemia + SpO₂↓",
        opciones: ["Pancreatitis aguda", "Úlcera péptica perforada", "Colecistitis aguda", "Infarto de miocardio"],
        correcta: 0,
        explicacion: "Dolor epigástrico 'en cinturón' irradiado a la espalda + alcoholismo + hiperglucemia (páncreas endocrino afectado) + SpO₂ baja (derrame pleural) = PANCREATITIS AGUDA. Causas más comunes: alcohol y cálculos biliares (ABCD). La amilasa y lipasa estarán muy elevadas. Tratamiento: reposo pancreático, hidratación IV intensa, analgesia."
    },
    {
        id: 34,
        categoria: "Digestivo",
        paciente: "Mujer de 45 años obesa con dolor cólico en hipocondrio derecho que aparece 30 min después de comer grasas, irradiado al hombro derecho, náuseas y vómito.",
        vitales: {
            temperatura: { valor: "37.6°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "98 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "130/82 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "102 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Mujer obesa + dolor postprandial derecho + irradiación al hombro",
        opciones: ["Cólico biliar por colelitiasis", "Pancreatitis aguda", "Apendicitis aguda", "Hernia hiatal"],
        correcta: 0,
        explicacion: "Mujer, obesa, 40+ años (4 F's: Female, Fat, Forty, Fertile), dolor en hipocondrio derecho 30-60 min post-ingesta de grasas, irradiado a hombro derecho (frénico) = CÓLICO BILIAR POR COLELITIASIS (cálculos en vesícula). Si hubiera fiebre alta y Murphy positivo = colecistitis. Tratamiento: colecistectomía laparoscópica."
    },
    {
        id: 35,
        categoria: "Digestivo",
        paciente: "Hombre de 60 años con hematemesis masiva (vómito con sangre roja brillante), hipotensión, palidez y antecedente de cirrosis hepática por alcohol. Abdomen distendido.",
        vitales: {
            temperatura: { valor: "36.9°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "138 lpm", estado: "muy alta", color: "#ef4444" },
            frecResp: { valor: "24 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "75/45 mmHg", estado: "colapso", color: "#ef4444" },
            glucosa: { valor: "62 mg/dL", estado: "baja", color: "#f97316" },
            spo2: { valor: "90%", estado: "baja", color: "#ef4444" }
        },
        clave: "Cirrosis + hematemesis masiva + colapso hemodinámico",
        opciones: ["Sangrado por varices esofágicas", "Úlcera péptica sangrante", "Síndrome de Mallory-Weiss", "Cáncer gástrico sangrante"],
        correcta: 0,
        explicacion: "Cirrosis hepática + hematemesis masiva de sangre ROJA BRILLANTE + colapso hemodinámico + glucosa baja (el hígado cirrótico no puede gluconeogénesis) + ascitis = SANGRADO POR VARICES ESOFÁGICAS. La hipertensión portal (cirrosis) dilata las venas del esófago hasta romperse. Mortalidad 20-30% por episodio. Urgencia: terlipresina + endoscopia + banda."
    },

    // ── INFECTOLOGÍA AVANZADA ─────────────────────────────────
    {
        id: 36,
        categoria: "Infeccioso",
        paciente: "Hombre de 35 años con fiebre de 3 semanas, tos seca, pérdida de peso, sudoración nocturna y hemoptisis leve. Vive en zona de alta prevalencia y trabaja con hacinamiento.",
        vitales: {
            temperatura: { valor: "38.5°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "98 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "118/74 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "91 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "92%", estado: "baja", color: "#f97316" }
        },
        clave: "Síntomas B + hemoptisis + SpO₂↓ + zona endémica + curso crónico",
        opciones: ["Tuberculosis pulmonar", "Neumonía bacteriana", "Linfoma pulmonar", "Histoplasmosis"],
        correcta: 0,
        explicacion: "Fiebre >3 semanas, tos, hemoptisis, sudoración nocturna, pérdida de peso + SpO₂ 92% + factores de riesgo (hacinamiento, zona endémica) = TUBERCULOSIS PULMONAR. Curso CRÓNICO diferencia de neumonía (aguda). Diagnóstico: BAAR en esputo + cultivo + PPD/IGRA. Tratamiento: RIPE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) por 6 meses."
    },
    {
        id: 37,
        categoria: "Infeccioso",
        paciente: "Mujer de 29 años VIH positivo sin tratamiento con fiebre, tos seca progresiva, disnea de esfuerzo y SpO₂ que cae al caminar. CD4 reportado en 85 células/mm³.",
        vitales: {
            temperatura: { valor: "38.7°C", estado: "alta", color: "#ef4444" },
            frecCardiaca: { valor: "108 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "26 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "112/70 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "86 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "88%", estado: "muy baja", color: "#ef4444" }
        },
        clave: "VIH + CD4<200 + tos seca + hipoxemia = infección oportunista",
        opciones: ["Neumonía por Pneumocystis jirovecii (PCP)", "Tuberculosis miliar", "Neumonía bacteriana", "Toxoplasmosis pulmonar"],
        correcta: 0,
        explicacion: "VIH con CD4 85 (muy bajo, normal >500) + tos SECA + hipoxemia severa (SpO₂ 88%) = NEUMONÍA POR P. JIROVECII (PCP), infección oportunista más común en SIDA. Cuando CD4 <200: riesgo de PCP. Hallazgo clásico: opacidades en vidrio esmerilado bilaterales en Rx tórax. Tratamiento: Trimetoprim-Sulfametoxazol (TMP-SMX) a dosis alta + esteroides."
    },
    {
        id: 38,
        categoria: "Infeccioso",
        paciente: "Turista de 24 años que regresa de viaje a zona tropical con fiebre periódica cada 48 horas, escalofríos intensos, sudoración profusa, cefalea y esplenomegalia.",
        vitales: {
            temperatura: { valor: "40.5°C", estado: "muy alta", color: "#ef4444" },
            frecCardiaca: { valor: "122 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "105/65 mmHg", estado: "normal-baja", color: "#eab308" },
            glucosa: { valor: "68 mg/dL", estado: "baja", color: "#f97316" },
            spo2: { valor: "94%", estado: "normal-baja", color: "#eab308" }
        },
        clave: "Fiebre periódica + escalofríos + viaje tropical + esplenomegalia",
        opciones: ["Malaria (paludismo)", "Dengue", "Fiebre tifoidea", "Leptospirosis"],
        correcta: 0,
        explicacion: "Fiebre PERIÓDICA cada 48h (Plasmodium vivax) con ciclos fiebre-escalofrío-sudoración + esplenomegalia + glucosa baja (el parásito consume glucosa) + viaje a zona tropical = MALARIA (paludismo). El ciclo febril corresponde a la lisis de glóbulos rojos por el Plasmodium. Diagnóstico: gota gruesa/frotis. Tratamiento: cloroquina o artemisina según especie."
    },

    // ── CARDIOVASCULAR AVANZADO ───────────────────────────────
    {
        id: 39,
        categoria: "Cardiovascular",
        paciente: "Mujer de 72 años con disnea progresiva, ortopnea (no puede acostarse), edema en ambas piernas hasta las rodillas y crepitantes en bases pulmonares.",
        vitales: {
            temperatura: { valor: "36.7°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "98 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "26 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "158/96 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "108 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "88%", estado: "muy baja", color: "#ef4444" }
        },
        clave: "Ortopnea + edema bilateral + crepitantes + SpO₂↓ en hipertensa",
        opciones: ["Insuficiencia cardíaca congestiva descompensada", "EPOC exacerbado", "Síndrome nefrótico", "Cirrosis hepática"],
        correcta: 0,
        explicacion: "Ortopnea (disnea al acostarse por redistribución de líquidos), edema bilateral simétrico, crepitantes basales (edema pulmonar) y SpO₂ 88% en hipertensa crónica = INSUFICIENCIA CARDÍACA CONGESTIVA (ICC) DESCOMPENSADA. El corazón no puede bombear suficiente sangre; el líquido se acumula en pulmones (falla izquierda) y piernas (falla derecha). Tratamiento: furosemida IV + reducir poscarga."
    },
    {
        id: 40,
        categoria: "Cardiovascular",
        paciente: "Hombre de 60 años con dolor torácico desgarrante que irradia a la espalda entre los hombros, inicio súbito. Hipertenso crónico mal controlado. PA en brazo derecho 180/110 y en izquierdo 145/90.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "92 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "180/110 mmHg", estado: "muy alta", color: "#ef4444" },
            glucosa: { valor: "110 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Dolor desgarrante + irradiación posterior + diferencia de PA entre brazos",
        opciones: ["Disección aórtica aguda", "Infarto agudo de miocardio", "Tromboembolismo pulmonar", "Pericarditis aguda"],
        correcta: 0,
        explicacion: "Dolor DESGARRANTE (no opresivo) irradiado entre omóplatos + diferencia de PA entre brazos (la disección compromete distintas arterias) + HTA severa = DISECCIÓN AÓRTICA AGUDA. Diferencia clave del IAM: dolor es máximo al inicio (no progresivo), sin elevación de troponinas. Tratamiento: control estricto de PA + cirugía urgente."
    },

    // ── UROLÓGICO AVANZADO ────────────────────────────────────
    {
        id: 41,
        categoria: "Renal",
        paciente: "Hombre de 65 años con fiebre alta, escalofríos, dolor en flanco derecho, disuria y orina turbia. Puño-percusión positiva en región lumbar derecha.",
        vitales: {
            temperatura: { valor: "39.5°C", estado: "muy alta", color: "#ef4444" },
            frecCardiaca: { valor: "114 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "22 rpm", estado: "leve alta", color: "#eab308" },
            presionArterial: { valor: "108/68 mmHg", estado: "normal-baja", color: "#eab308" },
            glucosa: { valor: "148 mg/dL", estado: "alta", color: "#f97316" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Fiebre alta + dolor en flanco + disuria + puño-percusión positiva",
        opciones: ["Pielonefritis aguda", "Cólico nefróutico", "Prostatitis aguda", "Absceso renal"],
        correcta: 0,
        explicacion: "Fiebre alta, escalofríos, dolor en flanco + PUÑO-PERCUSIÓN POSITIVA (signo de Giordano) + disuria + orina turbia = PIELONEFRITIS AGUDA (infección del riñón). Diferencia con cólico renal: la pielonefritis tiene fiebre alta, el cólico no. La glucosa alta puede ser por estrés o diabetes subyacente. Tratamiento: fluoroquinolonas o cefalosporinas IV."
    },
    {
        id: 42,
        categoria: "Renal",
        paciente: "Hombre de 72 años con dificultad para orinar, chorro débil, nicturia 5-6 veces, sensación de vaciado incompleto y globo vesical palpable. PSA reportado elevado.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "76 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "148/88 mmHg", estado: "leve alta", color: "#eab308" },
            glucosa: { valor: "104 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Anciano + síntomas obstructivos urinarios + globo vesical + PSA elevado",
        opciones: ["Hiperplasia prostática benigna con retención", "Cáncer de próstata", "Estenosis uretral", "Vejiga neurógena"],
        correcta: 0,
        explicacion: "Hombre >60 años con síntomas del tracto urinario bajo (STUI): nicturia, chorro débil, vaciado incompleto + globo vesical (retención urinaria aguda) = HIPERPLASIA PROSTÁTICA BENIGNA (HPB) con retención. El PSA elevado requiere descarte de cáncer, pero la HPB es más común a esta edad. Tratamiento inmediato: sondaje uretral para descomprimir vejiga."
    },

    // ── METABÓLICO AVANZADO ───────────────────────────────────
    {
        id: 43,
        categoria: "Metabólico",
        paciente: "Mujer de 68 años en reposo total post-cirugía de cadera. Presenta dolor e inflamación súbita en pantorrilla derecha con signo de Homans positivo.",
        vitales: {
            temperatura: { valor: "37.4°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "96 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "132/82 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "112 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Post-cirugía + inmovilización + dolor/calor en pantorrilla + Homans +",
        opciones: ["Trombosis venosa profunda (TVP)", "Tromboflebitis superficial", "Celulitis", "Rotura de quiste de Baker"],
        correcta: 0,
        explicacion: "Inmovilización post-quirúrgica + dolor, calor y edema en pantorrilla + signo de Homans positivo (dolor al dorsiflexionar el pie) = TROMBOSIS VENOSA PROFUNDA (TVP). Tríada de Virchow: estasis venosa + lesión endotelial + hipercoagulabilidad. El peligro principal: el trombo puede desprenderse y causar TROMBOEMBOLISMO PULMONAR. Tratamiento: heparina → anticoagulación oral."
    },
    {
        id: 44,
        categoria: "Urgencias",
        paciente: "Hombre de 42 años con dolor torácico pleurítico súbito, disnea, taquicardia y antecedente de vuelo de 14 horas hace 2 días. Sin trauma previo.",
        vitales: {
            temperatura: { valor: "37.3°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "122 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "28 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "108/70 mmHg", estado: "normal-baja", color: "#eab308" },
            glucosa: { valor: "98 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "87%", estado: "muy baja", color: "#ef4444" }
        },
        clave: "Vuelo largo + dolor pleurítico + taquicardia + SpO₂ 87% sin causa aparente",
        opciones: ["Tromboembolismo pulmonar (TEP)", "Neumotórax espontáneo", "Crisis asmática", "Pericarditis aguda"],
        correcta: 0,
        explicacion: "Viaje largo en avión (inmovilización + deshidratación = TVP) + dolor pleurítico súbito + SpO₂ 87% + taquicardia SIN fiebre ni trauma = TROMBOEMBOLISMO PULMONAR (TEP). La escala de Wells ayuda a calcular la probabilidad. El ECG muestra S1Q3T3. Diagnóstico: angioTAC de tórax. Tratamiento: heparina inmediata + anticoagulación."
    },
    {
        id: 45,
        categoria: "Urgencias",
        paciente: "Mujer de 55 años con dolor abdominal difuso de inicio súbito, abdomen duro 'en tabla', posición fetal, sin ruidos intestinales. Antecedente de úlcera péptica.",
        vitales: {
            temperatura: { valor: "37.8°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "118 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "24 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "100/65 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "128 mg/dL", estado: "alta estrés", color: "#eab308" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Abdomen en tabla + silencio intestinal + posición antiálgica = peritonitis",
        opciones: ["Perforación de úlcera péptica", "Pancreatitis aguda", "Obstrucción intestinal", "Isquemia mesentérica"],
        correcta: 0,
        explicacion: "Abdomen en tabla (rigidez muscular involuntaria por irritación peritoneal), silencio intestinal, posición fetal + antecedente de úlcera = PERFORACIÓN DE ÚLCERA PÉPTICA. El contenido gástrico se derrama en el peritoneo → peritonitis química. La Rx de abdomen en pie muestra aire libre bajo el diafragma. Emergencia quirúrgica: cirugía en <6 horas."
    },

    // ── REUMATOLÓGICO ─────────────────────────────────────────
    {
        id: 46,
        categoria: "Reumatológico",
        paciente: "Hombre de 45 años obeso con dolor e inflamación aguda en el dedo gordo del pie izquierdo de aparición nocturna. Consume mucha carne roja y cerveza. Primer episodio.",
        vitales: {
            temperatura: { valor: "37.8°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "86 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "145/90 mmHg", estado: "alta", color: "#eab308" },
            glucosa: { valor: "118 mg/dL", estado: "normal-alto", color: "#eab308" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Hombre obeso + dolor nocturno en primer dedo + alcohol + dieta rica en purinas",
        opciones: ["Gota aguda (artritis gotosa)", "Artritis séptica", "Artritis reumatoide", "Celulitis del pie"],
        correcta: 0,
        explicacion: "Hombre, obeso, consumidor de alcohol y carne roja + dolor nocturno agudo en el PRIMER dedo del pie (podagra) = GOTA AGUDA. El ácido úrico (de las purinas de la carne/cerveza) cristaliza en las articulaciones. Es la artritis más dolorosa. Diagnóstico: cristales de urato en líquido sinovial. Tratamiento agudo: colchicina o AINES + hielo."
    },
    {
        id: 47,
        categoria: "Reumatológico",
        paciente: "Mujer de 40 años con rigidez matutina de manos >1 hora, inflamación simétrica en articulaciones de dedos (MCF e IFP), fatiga y nódulos en codos.",
        vitales: {
            temperatura: { valor: "37.9°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "90 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "17 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "120/76 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Rigidez matutina >1h + artritis simétrica MCF/IFP + nódulos reumatoides",
        opciones: ["Artritis reumatoide", "Osteoartritis", "Lupus eritematoso", "Artritis psoriásica"],
        correcta: 0,
        explicacion: "Rigidez matutina >1 hora (criterio clave), artritis SIMÉTRICA en MCF e IFP (no la IFD como en osteoartritis), nódulos reumatoides en codos y fatiga = ARTRITIS REUMATOIDE (AR). Marcadores: Factor Reumatoide (FR) y anti-CCP. Diferencia de osteoartritis: la AR es inflamatoria/autoinmune, la OA es degenerativa y afecta la IFD. Tratamiento: metotrexato."
    },

    // ── OBSTÉTRICO ────────────────────────────────────────────
    {
        id: 48,
        categoria: "Ginecológico",
        paciente: "Embarazada de 34 semanas con cefalea intensa, visión borrosa, edema en manos y cara, y presión arterial de 165/108 mmHg. Refiere dolor en barra epigástrica.",
        vitales: {
            temperatura: { valor: "37.1°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "96 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "20 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "165/108 mmHg", estado: "crisis", color: "#ef4444" },
            glucosa: { valor: "98 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Embarazo + HTA grave + cefalea + visión borrosa + dolor epigástrico",
        opciones: ["Preeclampsia severa", "Hipertensión gestacional", "Eclampsia", "Síndrome HELLP"],
        correcta: 0,
        explicacion: "Embarazo >20 semanas + PA ≥160/110 + cefalea + visión borrosa + dolor en barra epigástrica (hígado) = PREECLAMPSIA SEVERA. Si convulsiona → eclampsia. El dolor epigástrico indica daño hepático. Tratamiento: sulfato de magnesio (previene convulsiones) + antihipertensivos + parto si >34 semanas o inestabilidad materna."
    },

    // ── TOXICOLÓGICO ──────────────────────────────────────────
    {
        id: 49,
        categoria: "Urgencias",
        paciente: "Joven de 20 años encontrado inconsciente por sus amigos en fiesta. Pupilas puntiformes (mióticas), bradipnea severa, cianosis peribucal. Jeringas cerca.",
        vitales: {
            temperatura: { valor: "35.2°C", estado: "baja", color: "#3b82f6" },
            frecCardiaca: { valor: "52 lpm", estado: "baja", color: "#3b82f6" },
            frecResp: { valor: "6 rpm", estado: "crítica", color: "#ef4444" },
            presionArterial: { valor: "80/50 mmHg", estado: "colapso", color: "#ef4444" },
            glucosa: { valor: "94 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "72%", estado: "crítica", color: "#ef4444" }
        },
        clave: "Tríada opiácea: miosis + bradipnea + coma + contexto de drogas",
        opciones: ["Intoxicación por opioides", "Intoxicación por benzodiacepinas", "Coma hipoglucémico", "Intoxicación por alcohol"],
        correcta: 0,
        explicacion: "TRÍADA CLÁSICA DE OPIOIDES: miosis (pupilas puntiformes), bradipnea severa (6 rpm = paro inminente) y coma + SpO₂ 72% + hipotermia = INTOXICACIÓN POR OPIOIDES (heroína/fentanilo). La glucosa normal descarta hipoglucemia. Tratamiento INMEDIATO: NALOXONA IV/IM (antídoto específico) + ventilación asistida. Diferencia de benzodiacepinas: estas no causan miosis."
    },
    {
        id: 50,
        categoria: "Urgencias",
        paciente: "Niño de 4 años que ingirió pastillas del botiquín de casa hace 30 minutos. Presenta salivación excesiva, lagrimeo, broncoespasmo, bradicardia y defecación involuntaria.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "44 lpm", estado: "muy baja", color: "#ef4444" },
            frecResp: { valor: "32 rpm", estado: "alta", color: "#ef4444" },
            presionArterial: { valor: "75/48 mmHg", estado: "colapso", color: "#ef4444" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "86%", estado: "crítica", color: "#ef4444" }
        },
        clave: "SLUDGE: Salivación+Lagrimeo+Orina+Defecación+GI+Emesis + bradicardia",
        opciones: ["Intoxicación por organofosforados/anticolinesterásicos", "Intoxicación por atropina", "Reacción alérgica severa", "Sepsis"],
        correcta: 0,
        explicacion: "SLUDGE (acrónimo colinérgico): Salivación, Lagrimeo, Urinación, Defecación, GI espasmos, Emesis + bradicardia + broncoespasmo = INTOXICACIÓN COLINÉRGICA por organofosforados o insecticidas. El exceso de acetilcolina estimula todos los receptores. Antídoto: ATROPINA IV (bloquea receptores muscarínicos) + pralidoxima. Mnemotecnia DUMBELS."
    },

    // ── ORTOPÉDICO ────────────────────────────────────────────
    {
        id: 51,
        categoria: "Traumatología",
        paciente: "Mujer de 75 años que cayó al intentar levantarse de la cama. Dolor en cadera derecha, miembro inferior derecho en rotación externa y acortado. No puede caminar.",
        vitales: {
            temperatura: { valor: "36.9°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "104 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "138/82 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "96 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Anciana + caída + rotación externa + acortamiento = cadera rota",
        opciones: ["Fractura de cadera (cuello femoral)", "Luxación de cadera", "Fractura de pelvis", "Contusión de cadera"],
        correcta: 0,
        explicacion: "Anciana (osteoporosis) + trauma mínimo + miembro en ROTACIÓN EXTERNA y ACORTADO + incapacidad funcional = FRACTURA DE CADERA (cuello femoral). Es la fractura más común en ancianos con osteoporosis. El riesgo de inmovilización prolongada (TVP, neumonía, úlceras) es mayor que la cirugía. Tratamiento: cirugía en <24-48h (prótesis o fijación)."
    },
    {
        id: 52,
        categoria: "Traumatología",
        paciente: "Jugador de fútbol de 20 años con rodilla derecha inflamada tras recibir golpe lateral. Refiere 'crujido' al momento del impacto, inestabilidad al caminar y prueba de cajón anterior positiva.",
        vitales: {
            temperatura: { valor: "36.7°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "80 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "118/72 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "90 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "99%", estado: "normal", color: "#10b981" }
        },
        clave: "Deportista + golpe lateral + crujido + cajón anterior positivo",
        opciones: ["Ruptura del ligamento cruzado anterior (LCA)", "Fractura de rótula", "Luxación de rodilla", "Lesión de menisco"],
        correcta: 0,
        explicacion: "Deportista + mecanismo de pivote/golpe lateral + 'pop' audible + hemartrosis (inflamación rápida) + PRUEBA DEL CAJÓN ANTERIOR POSITIVA (tibia se desplaza hacia adelante sin resistencia) = RUPTURA DEL LIGAMENTO CRUZADO ANTERIOR (LCA). Es la lesión ligamentosa más común en deportistas. Diagnóstico confirmado con RMN. Tratamiento: reconstrucción quirúrgica."
    },

    // ── PSIQUIÁTRICO ──────────────────────────────────────────
    {
        id: 53,
        categoria: "Psiquiátrico",
        paciente: "Hombre de 28 años traído por familia por comportamiento extraño: euforia extrema, no duerme hace 3 días, gasta dinero sin control, habla sin parar y siente que tiene poderes especiales.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "108 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "130/78 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "98 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "99%", estado: "normal", color: "#10b981" }
        },
        clave: "Euforia + insomnio sin cansancio + grandiosidad + impulsividad",
        opciones: ["Episodio maníaco (Trastorno bipolar)", "Esquizofrenia", "Intoxicación por cocaína", "Trastorno límite de personalidad"],
        correcta: 0,
        explicacion: "Euforia, insomnio sin cansancio (≥3 días), grandiosidad, logorrea (habla sin parar), gastos impulsivos = EPISODIO MANÍACO del TRASTORNO BIPOLAR. Los signos vitales normales y glucosa normal ayudan a descartar causa orgánica (hipoglucemia, intoxicación). Diferencia con esquizofrenia: la manía tiene pensamiento acelerado pero coherente, no desorganizado. Tratamiento: litio + antipsicótico."
    },
    {
        id: 54,
        categoria: "Psiquiátrico",
        paciente: "Mujer de 22 años con palpitaciones, sudoración, temblor, sensación de muerte inminente, sin causa aparente, que duró 10 minutos y cedió sola. Ha tenido 4 episodios similares este mes.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "118 lpm", estado: "alta", color: "#ef4444" },
            frecResp: { valor: "24 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "148/92 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "96 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "98%", estado: "normal", color: "#10b981" }
        },
        clave: "Episodios súbitos de miedo intenso + síntomas físicos + resolución espontánea",
        opciones: ["Trastorno de pánico", "Arritmia cardíaca", "Feocromocitoma", "Hipertiroidismo"],
        correcta: 0,
        explicacion: "Episodios súbitos de palpitaciones, sudoración, miedo a morir que CEDEN SOLOS en <10-30 min, recurrentes = TRASTORNO DE PÁNICO. Los signos vitales elevados son por la descarga adrenérgica del pánico, no por cardiopatía. La clave: episodios completos y repetidos sin causa orgánica. Descartar: feocromocitoma (episódico pero con HTA sostenida), arritmia (ECG). Tratamiento: ISRS + TCC."
    },

    // ── OFTALMOLÓGICO ─────────────────────────────────────────
    {
        id: 55,
        categoria: "Urgencias",
        paciente: "Hombre de 65 años diabético con pérdida de visión indolora súbita en ojo derecho 'como si bajaran una cortina'. Sin dolor ni ojo rojo.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "78 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "16 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "152/92 mmHg", estado: "alta", color: "#f97316" },
            glucosa: { valor: "198 mg/dL", estado: "alta", color: "#f97316" },
            spo2: { valor: "97%", estado: "normal", color: "#10b981" }
        },
        clave: "Pérdida de visión indolora súbita unilateral como 'cortina'",
        opciones: ["Desprendimiento de retina", "Glaucoma agudo", "Oclusión de arteria central de la retina", "Neuritis óptica"],
        correcta: 0,
        explicacion: "Pérdida de visión INDOLORA, UNILATERAL, SÚBITA, 'en cortina' en diabético hipertenso = DESPRENDIMIENTO DE RETINA. La diabetes y HTA son factores de riesgo por retinopatía. Sin dolor ni ojo rojo (diferencia con glaucoma agudo que tiene dolor y ojo rojo). Emergencia oftalmológica: cirugía láser/criopexia en horas para preservar visión central."
    },

    // ── RESPIRATORIO AVANZADO ─────────────────────────────────
    {
        id: 56,
        categoria: "Respiratorio",
        paciente: "Hombre de 38 años delgado y alto con dolor torácico derecho súbito y disnea de inicio mientras estaba sentado. Sin trauma. Primera vez.",
        vitales: {
            temperatura: { valor: "36.8°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "104 lpm", estado: "leve alta", color: "#eab308" },
            frecResp: { valor: "22 rpm", estado: "alta", color: "#eab308" },
            presionArterial: { valor: "118/74 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "88 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "92%", estado: "baja", color: "#f97316" }
        },
        clave: "Hombre alto delgado + dolor pleurítico súbito + SpO₂↓ sin trauma",
        opciones: ["Neumotórax espontáneo primario", "Tromboembolismo pulmonar", "Pleuritis", "Infarto de miocardio"],
        correcta: 0,
        explicacion: "Hombre JOVEN, ALTO y DELGADO (biotipo marfanoide) + dolor pleurítico unilateral súbito + SpO₂ 92% sin trauma ni enfermedad previa = NEUMOTÓRAX ESPONTÁNEO PRIMARIO. Las bullas apicales se rompen espontáneamente. Sin desviación traqueal (no es a tensión). Tratamiento: observación si pequeño (<20%), aspiración o tubo de drenaje si grande o sintomático."
    },
    {
        id: 57,
        categoria: "Respiratorio",
        paciente: "Mujer de 50 años con disnea progresiva de 6 meses, tos seca, sin fiebre. Trabaja como minera. RX: infiltrados reticulonodulares difusos. Sin respuesta a antibióticos.",
        vitales: {
            temperatura: { valor: "37.0°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "88 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "24 rpm", estado: "alta", color: "#f97316" },
            presionArterial: { valor: "128/80 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "94 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "89%", estado: "baja", color: "#ef4444" }
        },
        clave: "Trabajadora minera + disnea crónica + infiltrados + sin respuesta a ATB",
        opciones: ["Silicosis (neumoconiosis)", "Fibrosis pulmonar idiopática", "Sarcoidosis", "Tuberculosis pulmonar"],
        correcta: 0,
        explicacion: "Trabajadora minera (exposición a sílice) + disnea crónica progresiva + infiltrados reticulonodulares SIN infección = SILICOSIS (neumoconiosis por sílice). La ausencia de respuesta a antibióticos y el antecedente laboral son claves. No es infecciosa, es inflamatoria por partículas. Otras neumoconiosis: asbestosis (asbesto), antracosis (carbón). No tiene cura; tratamiento: sintomático."
    },

    // ── DIGESTIVO AVANZADO ────────────────────────────────────
    {
        id: 58,
        categoria: "Digestivo",
        paciente: "Hombre de 55 años con heces negras alquitranadas (melena), náuseas y dolor epigástrico tipo 'hambre' que mejora al comer. Toma ibuprofeno diario por artritis.",
        vitales: {
            temperatura: { valor: "36.9°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "108 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "19 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "105/68 mmHg", estado: "baja", color: "#ef4444" },
            glucosa: { valor: "90 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "AINES + melena + dolor epigástrico que mejora comiendo + hipotensión",
        opciones: ["Úlcera péptica sangrante", "Cáncer gástrico", "Varices esofágicas", "Diverticulosis"],
        correcta: 0,
        explicacion: "AINES (ibuprofeno daña la mucosa gástrica) + melena (sangre digerida = sangrado alto) + dolor epigástrico que mejora al comer (úlcera duodenal típica) + hipotensión por sangrado = ÚLCERA PÉPTICA SANGRANTE. La melena es negra y alquitranada porque la sangre se digiere al pasar por el intestino. Urgencia: endoscopia + inhibidores de bomba de protones IV."
    },
    {
        id: 59,
        categoria: "Digestivo",
        paciente: "Mujer de 70 años con distensión abdominal, náuseas, vómito fecaloide, sin gases ni heces por 3 días y ruidos intestinales en 'lucha' (metálicos).",
        vitales: {
            temperatura: { valor: "37.6°C", estado: "leve", color: "#eab308" },
            frecCardiaca: { valor: "112 lpm", estado: "alta", color: "#f97316" },
            frecResp: { valor: "22 rpm", estado: "alta", color: "#eab308" },
            presionArterial: { valor: "108/70 mmHg", estado: "normal-baja", color: "#eab308" },
            glucosa: { valor: "104 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "95%", estado: "normal", color: "#10b981" }
        },
        clave: "Ausencia de gases + distensión + vómito fecaloide + ruidos metálicos",
        opciones: ["Obstrucción intestinal mecánica", "Íleo paralítico", "Vólvulo sigmoide", "Estreñimiento severo"],
        correcta: 0,
        explicacion: "Ausencia de gases y heces (obstipación), distensión abdominal progresiva, vómito fecaloide (intestino tan lleno que refluja heces) y ruidos 'en lucha' (peristaltismo tratando de vencer el obstáculo) = OBSTRUCCIÓN INTESTINAL MECÁNICA. Diferencia con íleo paralítico: el íleo tiene SILENCIO intestinal, la obstrucción tiene ruidos aumentados. Tratamiento: cirugía."
    },
    {
        id: 60,
        categoria: "Digestivo",
        paciente: "Hombre de 62 años con pérdida de peso de 12 kg en 3 meses, disfagia progresiva primero a sólidos y luego a líquidos, sin dolor. Fumador y bebedor de 30 años.",
        vitales: {
            temperatura: { valor: "37.2°C", estado: "normal", color: "#10b981" },
            frecCardiaca: { valor: "86 lpm", estado: "normal", color: "#10b981" },
            frecResp: { valor: "18 rpm", estado: "normal", color: "#10b981" },
            presionArterial: { valor: "128/78 mmHg", estado: "normal", color: "#10b981" },
            glucosa: { valor: "98 mg/dL", estado: "normal", color: "#10b981" },
            spo2: { valor: "96%", estado: "normal", color: "#10b981" }
        },
        clave: "Disfagia progresiva + pérdida de peso + tabaco + alcohol = alarma de cáncer",
        opciones: ["Cáncer de esófago", "Acalasia", "Esofagitis por reflujo", "Cuerpo extraño esofágico"],
        correcta: 0,
        explicacion: "Disfagia PROGRESIVA (sólidos → luego líquidos), pérdida de peso significativa (12 kg) SIN dolor + tabaco y alcohol (factores de riesgo) en hombre mayor = CÁNCER DE ESÓFAGO. La progresión sólidos→líquidos indica obstrucción mecánica creciente. La disfagia solo a sólidos que no progresa puede ser esofagitis. Diagnóstico: endoscopia + biopsia. Pronóstico: depende del estadio."
    },

];

// Estadísticas actualizadas
const _cats = [...new Set(DIAGNOSTICOS_DATA.map(x => x.categoria))];
console.log(`✅ Diagnósticos Clínicos: ${DIAGNOSTICOS_DATA.length} casos en ${_cats.length} categorías: ${_cats.join(', ')}`);
