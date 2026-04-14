// ═══════════════════════════════════════════════════════════════
// MEDIPREP — SIMULACRO PREMEDICINA EXANI-II VOL. 1
// 48 preguntas con explicaciones completas
// Soporte de imágenes por pregunta
// ═══════════════════════════════════════════════════════════════

var SIMULACRO_PREMEDICINA_V1 = {
    id: 'simulacro-premed-v1',
    titulo: 'Simulacro Premedicina Vol. 1',
    subtitulo: 'EXANI-II CENEVAL · 48 preguntas',
    total: 48,
    tiempo: 96, // minutos (2 min/pregunta)
    preguntas: [
        { n:1, imagen:null,
          pregunta:'La dermatitis en la piel ocasionada por el contacto constante con los productos y emisiones en una gasolinera es provocada por un agente causal de tipo:',
          opciones:['Físico','Biológico','Químico'], correcta:2,
          exp_correcta:'Los hidrocarburos y solventes de las gasolineras son sustancias químicas que al entrar en contacto prolongado con la piel provocan dermatitis por contacto (irritante o alérgica).',
          exp_incorrectas:['Los agentes físicos son formas de energía: calor, ruido, radiación ionizante, vibraciones. No son sustancias.','Los agentes biológicos son seres vivos o sus derivados: bacterias, virus, hongos, parásitos. Los combustibles no son organismos vivos.'] },

        { n:2, imagen:null,
          pregunta:'¿Cuál es la definición de historia natural de la enfermedad emitida por la OPS?',
          opciones:['Intervalo en que el agente infeccioso se transfiere a un huésped susceptible','Momento en que el padecimiento inicia sus manifestaciones','Curso de afección desde el inicio hasta su resolución'], correcta:2,
          exp_correcta:'La OPS define la Historia Natural de la Enfermedad como el curso de una afección desde su inicio hasta su resolución, sin intervención médica. Incluye los periodos prepatogénico, patogénico y de resolución.',
          exp_incorrectas:['Eso describe el periodo de transmisibilidad o la cadena epidemiológica, no la definición completa de HNE.','Eso corresponde solo al inicio del período patogénico (período clínico), no a la definición completa.'] },

        { n:3, imagen:null,
          pregunta:'Un individuo que después de haber recibido una transfusión sanguínea positiva a hepatitis C contagia a un familiar cercano. De acuerdo a lo anterior, el individuo se encuentra en el periodo __________ de la historia natural de la enfermedad.',
          opciones:['de infección','de convalecencia','Prepatogénico'], correcta:0,
          exp_correcta:'El período de infección (también llamado patogénico temprano) es cuando ya hay multiplicación del agente en el huésped y existe capacidad de contagiar a otros, aunque el individuo puede no tener síntomas todavía.',
          exp_incorrectas:['El período de convalecencia es la etapa de recuperación posterior a la enfermedad aguda; el individuo está sanando y normalmente ya no es tan contagioso.','En el período prepatogénico el huésped está sano, el agente no ha entrado al organismo. No puede contagiar porque no tiene el agente.'] },

        { n:4, imagen:null,
          pregunta:'¿A qué nivel de prevención corresponde el lavado de manos para prevenir la salmonelosis?',
          opciones:['Terciaria','Secundaria','Primaria'], correcta:2,
          exp_correcta:'La prevención primaria actúa ANTES de que ocurra la enfermedad en personas sanas. El lavado de manos elimina el agente causal antes del contagio, evitando que la persona enferme.',
          exp_incorrectas:['La prevención terciaria se aplica cuando ya hubo enfermedad establecida; busca evitar secuelas, discapacidad o muerte (rehabilitación).','La prevención secundaria se aplica cuando ya inició la enfermedad: diagnóstico temprano, tamizaje y tratamiento oportuno para evitar complicaciones.'] },

        { n:5, imagen:null,
          pregunta:'De acuerdo con la Organización Mundial de la Salud, la definición de salud es el estado:',
          opciones:['De completo bienestar físico, mental, y social y no solamente la ausencia de afecciones o enfermedades','De un organismo que es capaz de ejercer normalmente todas sus funciones incluidas psíquicas y que no tienen ninguna manifestación clínica o analítica de enfermedad','Variable fisiológico ecológico de equilibrio y adaptación de todas las potencialidades humanas, biológicas, psicológicas, y sociales frente a su ambiente'], correcta:0,
          exp_correcta:'Definición oficial de la OMS (1948, aún vigente): "La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades." Es la definición más integral y la que el EXANI-II siempre evalúa.',
          exp_incorrectas:['Esta visión es funcionalista y biologicista; no es la definición oficial de la OMS. No incluye la dimensión social del bienestar.','Esta es una visión ecológica y adaptativa de la salud (modelo ecológico), pero no es la definición oficial de la OMS.'] },

        { n:6, imagen:null,
          pregunta:'¿Cuál de las definiciones corresponde a enfermedad emitida por la OMS?',
          opciones:['Desviación del estado fisiológico por causas generalmente conocidas cuya evolución es previsible','Conjunto de síntomas y signos que se asocian a un tipo de padecimiento particular','Cambio, perturbación, o daño en la forma o la función de un órgano o de la estructura anatómica'], correcta:0,
          exp_correcta:'La OMS define la enfermedad como la "Alteración o desviación del estado fisiológico en una o varias partes del cuerpo, por causas en general conocidas, manifestada por síntomas y signos característicos, y cuya evolución es más o menos previsible."',
          exp_incorrectas:['Eso define a un SÍNDROME: conjunto de síntomas y signos que se presentan juntos en un patrón reconocible, pero sin causa única identificada.','Eso describe más bien una lesión orgánica o trastorno morfológico; es muy amplio y no es la definición oficial de enfermedad.'] },

        { n:7, imagen:null,
          pregunta:'¿Cuál es un elemento de la triada ecológica?',
          opciones:['Síntoma','Medio ambiente','Salud'], correcta:1,
          exp_correcta:'La triada ecológica (modelo de Leavell y Clark) está formada por tres elementos: AGENTE (factor causal), HUÉSPED (individuo susceptible) y MEDIO AMBIENTE (condiciones externas). El equilibrio entre los tres determina salud; el desequilibrio causa enfermedad.',
          exp_incorrectas:['El síntoma es una manifestación subjetiva de enfermedad (lo que siente el paciente). No es un componente de la triada ecológica.','La salud es el RESULTADO del equilibrio de la triada, no uno de sus componentes.'] },

        { n:8, imagen:null,
          pregunta:'El Plasmodium requiere que los mosquitos del género Anopheles funcionen como un hábitat en donde puedan crecer y reproducirse para que tenga la capacidad de provocar enfermedad. ¿A qué eslabón de la cadena epidemiológica hace referencia el ejemplo?',
          opciones:['Reservorio','Agente','Puerta de entrada'], correcta:0,
          exp_correcta:'El RESERVORIO es el lugar (vivo o inerte) donde el agente vive, se multiplica y del cual depende para sobrevivir. El mosquito Anopheles es el reservorio del Plasmodium y también su vector. El agente causal de la malaria es el propio Plasmodium.',
          exp_incorrectas:['El AGENTE es el Plasmodium (el parásito que causa la malaria), no el mosquito.','La PUERTA DE ENTRADA es el sitio del cuerpo por donde ingresa el agente al nuevo huésped: en este caso la piel al ser picado por el mosquito.'] },

        { n:9, imagen:null,
          pregunta:'De acuerdo con los términos anatómicos direccionales, las costillas guardan una posición __________ y __________ en la región del tórax:',
          opciones:['Anterior - lateral','Medial - distal','Superior - proximal'], correcta:0,
          exp_correcta:'Las costillas se ubican en la parte ANTERIOR (hacia el frente del cuerpo) y LATERAL (hacia los costados) del tórax, formando la caja torácica que protege los órganos internos.',
          exp_incorrectas:['MEDIAL significa hacia la línea media del cuerpo (hacia el centro); DISTAL significa lejos del punto de inserción (se usa para miembros). Ninguno describe bien la posición de las costillas.','SUPERIOR describe ubicación hacia arriba; PROXIMAL describe cercanía al punto de origen (se usa para miembros). No son los términos apropiados para las costillas.'] },

        { n:10, imagen:null,
          pregunta:'Es un componente del sistema nervioso periférico:',
          opciones:['Médula espinal','Nervio espinal','Cerebro'], correcta:1,
          exp_correcta:'Los NERVIOS ESPINALES (31 pares) pertenecen al Sistema Nervioso Periférico (SNP). Son las estructuras que conectan la médula espinal con el resto del cuerpo para llevar información sensorial y motora.',
          exp_incorrectas:['La médula espinal pertenece al Sistema Nervioso CENTRAL (SNC), junto con el encéfalo. Está protegida dentro de la columna vertebral.','El cerebro (encéfalo) es el órgano principal del SNC. Junto con la médula espinal y el cerebelo forman el SNC.'] },

        { n:11, imagen:null,
          pregunta:'Es una función básica que realiza el sistema nervioso:',
          opciones:['Transformar la energía de los estímulos en señales eléctricas','Segregar hormonas para la regulación de diferentes procesos metabólicos','Detectar movimientos, giros, o aceleraciones para mantener el equilibrio'], correcta:0,
          exp_correcta:'Una función básica del SN es la TRANSDUCCIÓN: convertir diferentes tipos de energía del ambiente (luz, sonido, temperatura, presión) en señales eléctricas (potenciales de acción) que el cerebro puede interpretar.',
          exp_incorrectas:['La segregación de hormonas es la función principal del SISTEMA ENDOCRINO (hipófisis, tiroides, suprarrenales, etc.). El SN puede estimular glándulas pero no segrega hormonas directamente.','Detectar movimientos y aceleraciones es función del APARATO VESTIBULAR (en el oído interno), que forma parte del sentido del equilibrio, no una función básica general del SN.'] },

        { n:12, imagen:null,
          pregunta:'¿Qué función realiza la hormona insulina?',
          opciones:['Mantener el equilibrio de glucosa en la sangre','Estimular la utilización del oxígeno','Regular la producción de oxitocina'], correcta:0,
          exp_correcta:'La insulina (secretada por las células β del páncreas) facilita la entrada de glucosa a las células (principalmente músculo y tejido adiposo), reduciendo la glucemia. Es la hormona hipoglucemiante por excelencia.',
          exp_incorrectas:['La utilización de oxígeno ocurre en la respiración celular (cadena de transporte de electrones en las mitocondrias). Las hormonas tiroideas aumentan el metabolismo y el consumo de O₂, no la insulina.','La oxitocina se produce en el hipotálamo y es liberada por la neurohipófisis. La insulina no regula su producción.'] },

        { n:13, imagen:null,
          pregunta:'¿Qué dato clínico corresponde a un síntoma?',
          opciones:['Adinamia','Fiebre','Taquicardia'], correcta:0,
          exp_correcta:'SÍNTOMA: manifestación SUBJETIVA que solo el paciente percibe y describe. La ADINAMIA (sensación de debilidad extrema/falta de fuerzas) no se puede medir externamente; solo el paciente la siente y la reporta.',
          exp_incorrectas:['La FIEBRE es un SIGNO: se mide objetivamente con termómetro (temperatura ≥38°C). Lo puede medir el médico independientemente de lo que diga el paciente.','La TAQUICARDIA es un SIGNO: se mide contando los latidos por minuto (>100 lpm). Es objetivamente medible y verificable.'] },

        { n:14, imagen:null,
          pregunta:'Un paciente adulto acude a una consulta con los siguientes signos: tensión arterial de 140/90 mmHg, temperatura de 37°C, y frecuencia respiratoria de 20/min. ¿Cuál de los siguientes corresponde a un parámetro fuera de la normalidad?',
          opciones:['Tensión arterial','Temperatura','Frecuencia respiratoria'], correcta:0,
          exp_correcta:'TA 140/90 mmHg corresponde a HIPERTENSIÓN ETAPA 2 (normal: <120/80 mmHg). Es el único valor anormal del caso clínico.',
          exp_incorrectas:['37°C es la TEMPERATURA NORMAL (rango 36.5–37.5°C oral). No hay fiebre ni hipotermia.','20 respiraciones/min está dentro del rango NORMAL para adultos (12–20 rpm). Está en el límite superior pero dentro de la normalidad.'] },

        { n:15, imagen:'pendiente-planos-anatomicos.jpg',
          pregunta:'Relacione el plano anatómico con su representación:\n1. Transversal  /  2. Frontal  /  3. Sagital',
          opciones:['1b, 2a, 3c','1c, 2b, 3a','1a, 2b, 3c'], correcta:2,
          exp_correcta:'• Plano TRANSVERSAL (horizontal/axial): divide el cuerpo en parte superior e inferior.\n• Plano FRONTAL (coronal): divide el cuerpo en parte anterior y posterior.\n• Plano SAGITAL: divide el cuerpo en mitades derecha e izquierda.',
          exp_incorrectas:['Asignación incorrecta de imágenes. El transversal no corresponde a la imagen b.','Asignación incorrecta. Revisa las imágenes: transversal = horizontal, frontal = divide frente/atrás, sagital = divide izq/der.'] },

        { n:16, imagen:null,
          pregunta:'¿Cuál es una estructura del sistema linfático?',
          opciones:['Médula ósea','Suprarrenal','Paratiroides'], correcta:0,
          exp_correcta:'La MÉDULA ÓSEA es un órgano linfoide PRIMARIO donde se producen y maduran los linfocitos B (linfopoyesis B). Los otros órganos linfoides incluyen: timo, ganglios linfáticos, bazo, amígdalas, placas de Peyer.',
          exp_incorrectas:['Las SUPRARRENALES (glándulas adrenales) pertenecen al sistema ENDOCRINO. Producen cortisol (corteza) y adrenalina/noradrenalina (médula suprarrenal).','Las PARATIROIDES son glándulas endocrinas que secretan PTH (hormona paratiroidea) para regular el calcio y fósforo en sangre.'] },

        { n:17, imagen:null,
          pregunta:'Identifique el hueso largo situado en la parte posterior y externa de la pierna.',
          opciones:['Falange','Húmero','Peroné'], correcta:2,
          exp_correcta:'El PERONÉ (fíbula) es el hueso delgado que se ubica en la parte LATERAL (externa) de la pierna, paralelo a la tibia. No soporta el peso corporal principal pero proporciona estabilidad al tobillo.',
          exp_incorrectas:['Las FALANGES son huesos pequeños y cortos de los dedos (tanto de manos como de pies). No son huesos largos de la pierna.','El HÚMERO es el hueso largo del BRAZO (entre el hombro y el codo). No está en la pierna.'] },

        { n:18, imagen:null,
          pregunta:'¿Cuál es un vaso sanguíneo que posee valvas y tiene mayor capacidad elástica?',
          opciones:['Capilar','Vena','Arteria'], correcta:1,
          exp_correcta:'Las VENAS poseen VÁLVULAS (valvas) que impiden el retroceso de la sangre (especialmente en las extremidades inferiores contra la gravedad). Son más distensibles y elásticas que las arterias en cuanto a capacidad de almacenamiento (contienen ~65% de la sangre del cuerpo).',
          exp_incorrectas:['Los CAPILARES son los vasos más pequeños (una sola capa de células endoteliales). No tienen válvulas ni paredes musculares.','Las ARTERIAS tienen paredes musculares y elásticas muy gruesas para resistir la presión sistólica, pero NO tienen válvulas (excepto las válvulas semilunares en la salida del corazón).'] },

        { n:19, imagen:null,
          pregunta:'Es la estructura del aparato digestivo cuya función es absorber lípidos, carbohidratos, y calcio:',
          opciones:['Estómago','Intestino delgado','Páncreas'], correcta:1,
          exp_correcta:'El INTESTINO DELGADO (especialmente duodeno y yeyuno) es el principal sitio de absorción de nutrientes. Sus microvellosidades (borde en cepillo) aumentan enormemente el área de absorción. Absorbe lípidos (quilomicrones), carbohidratos (glucosa, fructosa), calcio, vitaminas y aminoácidos.',
          exp_incorrectas:['El ESTÓMAGO tiene función principalmente QUÍMICA (ácido clorhídrico, pepsina que digiere proteínas) y MECÁNICA (trituración). Absorbe muy poco: algo de agua, alcohol y aspirina.','El PÁNCREAS produce ENZIMAS digestivas (amilasa, lipasa, proteasas) y hormonas (insulina, glucagón), pero no absorbe nutrientes.'] },

        { n:20, imagen:null,
          pregunta:'¿A qué etapa del proceso digestivo corresponde la producción y liberación de enzimas para la degradación de grasas?',
          opciones:['Absorción','Mezclado','Secreción'], correcta:2,
          exp_correcta:'La SECRECIÓN digestiva es el proceso mediante el cual las glándulas del tubo digestivo (glándulas salivales, estomacales, páncreas, hígado) producen y liberan sustancias al lumen. La lipasa pancreática (secretada por el páncreas) degrada las grasas.',
          exp_incorrectas:['La ABSORCIÓN es el paso de los nutrientes ya digeridos desde el lumen intestinal hacia la sangre o linfa. No involucra producción de enzimas.','El MEZCLADO (o digestión mecánica) es el proceso físico de batido y trituración de los alimentos (peristalsis, segmentación). No produce enzimas.'] },

        { n:21, imagen:null,
          pregunta:'¿Qué célula pertenece al sistema inmunológico?',
          opciones:['Leucocito','Trombocito','Astrocito'], correcta:0,
          exp_correcta:'Los LEUCOCITOS (glóbulos blancos) son las células del sistema inmunológico. Incluyen: neutrófilos, eosinófilos, basófilos (granulocitos) y linfocitos, monocitos (agranulocitos). Detectan y destruyen patógenos.',
          exp_incorrectas:['Los TROMBOCITOS (plaquetas) son fragmentos celulares (no células completas) encargados de la HEMOSTASIA (coagulación). No forman parte del sistema inmune propiamente.','Los ASTROCITOS son células de GLÍA del sistema nervioso central. Proveen soporte nutricional y estructural a las neuronas. No son células inmunes.'] },

        { n:22, imagen:null,
          pregunta:'¿Qué células efectúan la producción de anticuerpos en la respuesta inmune humoral?',
          opciones:['Linfocitos T','Linfocitos B','Macrófagos'], correcta:1,
          exp_correcta:'Los LINFOCITOS B, al ser activados por un antígeno, se diferencian en CÉLULAS PLASMÁTICAS que secretan anticuerpos (inmunoglobulinas). La inmunidad HUMORAL (basada en anticuerpos en el "humor"/líquido corporal) es mediada por linfocitos B.',
          exp_incorrectas:['Los LINFOCITOS T son responsables de la inmunidad CELULAR. Los T citotóxicos (CD8+) destruyen células infectadas; los T helper (CD4+) coordinan la respuesta inmune. No producen anticuerpos.','Los MACRÓFAGOS son células presentadoras de antígenos (fagocitan patógenos, procesan y presentan antígenos a los linfocitos T). No producen anticuerpos.'] },

        { n:23, imagen:null,
          pregunta:'¿Cuál es la estructura del aparato digestivo responsable de absorber la mayor parte de nutrientes?',
          opciones:['Intestino delgado','Intestino grueso','Estómago'], correcta:0,
          exp_correcta:'El INTESTINO DELGADO (6-7 metros de largo) es el principal órgano de absorción. Sus vellosidades intestinales y microvellosidades (borde en cepillo) multiplican el área absortiva hasta ~250 m². Absorbe aminoácidos, glucosa, lípidos, vitaminas, minerales y agua.',
          exp_incorrectas:['El INTESTINO GRUESO (colon) absorbe principalmente AGUA, electrolitos y vitaminas producidas por la flora bacteriana (K, B12). Forma y almacena las heces. No absorbe la mayoría de nutrientes.','El ESTÓMAGO absorbe muy poco. Su principal función es la digestión química (HCl, pepsina) y mecánica. Solo absorbe alcohol, agua y algunos fármacos.'] },

        { n:24, imagen:null,
          pregunta:'Los __________ son células de respuesta inmunitaria contra ciertas bacterias y parásitos y liberan sustancias químicas como histamina, heparina, y citocina:',
          opciones:['Mastocitos','Astrocitos','Trombocitos'], correcta:0,
          exp_correcta:'Los MASTOCITOS (células cebadas) se encuentran en tejidos conectivos y mucosas. Contienen gránulos con histamina, heparina y citocinas. Se activan en respuesta a parásitos y en reacciones alérgicas (hipersensibilidad tipo I).',
          exp_incorrectas:['Los ASTROCITOS son células del sistema nervioso (astroglia). Dan soporte a las neuronas, regulan el microambiente cerebral y forman parte de la barrera hematoencefálica. No son células inmunes.','Los TROMBOCITOS (plaquetas) participan en la coagulación. Aunque liberan algunas citocinas al activarse, no son células inmunes especializadas y no liberan histamina.'] },

        { n:25, imagen:null,
          pregunta:'¿Cuál de las siguientes células del sistema inmunológico participa en la respuesta de tipo humoral?',
          opciones:['Linfocito B','Leucocito','Linfocito T'], correcta:0,
          exp_correcta:'La respuesta inmune HUMORAL (mediada por anticuerpos en fluidos corporales) es ejecutada por los LINFOCITOS B, que se convierten en células plasmáticas productoras de inmunoglobulinas (IgG, IgM, IgA, IgE, IgD).',
          exp_incorrectas:['El término "leucocito" es genérico (glóbulo blanco). Incluye tanto linfocitos T como B y otras células. No es específico de la respuesta humoral.','Los LINFOCITOS T participan en la inmunidad CELULAR (T citotóxicos, T helper, T reguladores). Aunque los T helper (CD4+) ayudan a activar los linfocitos B, no producen anticuerpos directamente.'] },

        { n:26, imagen:null,
          pregunta:'¿Cuál es la capa más gruesa de la piel que tiene folículos pilosos, nervios, así como numerosas glándulas sebáceas y sudoríparas?',
          opciones:['Epidermis','Hipodermis','Dermis'], correcta:2,
          exp_correcta:'La DERMIS es la capa media e intermedia de la piel. Es la más GRUESA y está formada por tejido conectivo denso. Contiene: folículos pilosos, glándulas sebáceas, glándulas sudoríparas, terminaciones nerviosas, vasos sanguíneos y linfáticos.',
          exp_incorrectas:['La EPIDERMIS es la capa más SUPERFICIAL de la piel. Está compuesta por epitelio estratificado con queratina. No tiene vasos sanguíneos ni nervios directamente (avascular).','La HIPODERMIS (tejido subcutáneo) es la capa más PROFUNDA. Está compuesta principalmente por tejido adiposo (grasa) que aísla y amortiga. Tiene menos anexos que la dermis.'] },

        { n:27, imagen:null,
          pregunta:'¿Cuáles son los vasos sanguíneos con paredes musculares fuertes que transportan sangre oxigenada?',
          opciones:['Capilares','Vénulas','Arterias'], correcta:2,
          exp_correcta:'Las ARTERIAS tienen paredes gruesas con tres capas: íntima, media (con músculo liso y elastina) y adventicia. Transportan sangre oxigenada DESDE el corazón hacia los tejidos (excepto las arterias pulmonares que llevan sangre desoxigenada al pulmón).',
          exp_incorrectas:['Los CAPILARES tienen paredes de una sola capa de células endoteliales. Son el sitio del intercambio de gases y nutrientes. No tienen músculo en sus paredes.','Las VÉNULAS son vasos pequeños que recogen la sangre DESOXIGENADA de los capilares y la dirigen hacia las venas. Sus paredes son delgadas.'] },

        { n:28, imagen:null,
          pregunta:'Indique cuáles son las estructuras anatómicas encargadas de bombear la sangre desde el corazón hacia la fase de eyección:',
          opciones:['Cavidades cardíacas','Arterias coronarias','Válvulas cardíacas'], correcta:0,
          exp_correcta:'Los VENTRÍCULOS (cavidades inferiores del corazón) son los encargados de BOMBEAR la sangre en la fase de eyección: el ventrículo derecho hacia los pulmones (circulación pulmonar) y el ventrículo izquierdo hacia el resto del cuerpo (circulación sistémica).',
          exp_incorrectas:['Las ARTERIAS CORONARIAS (derecha e izquierda) son vasos que irriga el propio músculo cardíaco (miocardio) con sangre oxigenada. No bombean sangre, sino que la reciben.','Las VÁLVULAS CARDÍACAS (mitral, tricúspide, aórtica, pulmonar) son "puertas" que dirigen el flujo unidireccional de sangre. Evitan el reflujo pero no realizan el bombeo.'] },

        { n:29, imagen:null,
          pregunta:'¿Qué tipo de solución se encuentra en el espacio extracelular?',
          opciones:['Hiperosmolar','Isoosmolar','Hipoosmolar'], correcta:1,
          exp_correcta:'⚠️ NOTA: La respuesta fisiológicamente correcta es B) ISOOSMOLAR. El líquido extracelular (LEC) tiene una osmolalidad de ~290 mOsm/kg, igual que el líquido intracelular en condiciones normales de equilibrio osmótico. El archivo de respuestas original indicaba "Hiperosmolar" pero esto es un error — el LEC normal es ISOOSMOLAR.',
          exp_incorrectas:['HIPEROSMOLAR significa mayor concentración de solutos que la normal (>295 mOsm/kg). Esto ocurriría en deshidratación severa, no en condiciones normales. ⚠️ La guía original marcó esta como correcta por error.','HIPOOSMOLAR significa menor concentración de solutos (<280 mOsm/kg). Ocurre en intoxicación hídrica o hiponatremia.'] },

        { n:30, imagen:null,
          pregunta:'¿Cuál es el organelo encargado de la biosíntesis de ribosomas a partir de los componentes de ARN?',
          opciones:['Aparato de Golgi','Lisosoma','Nucleolo'], correcta:2,
          exp_correcta:'El NUCLÉOLO es una estructura dentro del núcleo celular (no tiene membrana propia). Es el sitio donde se sintetiza el ARN ribosomal (ARNr) y se ensamblan los ribosomas antes de ser exportados al citoplasma.',
          exp_incorrectas:['El APARATO DE GOLGI recibe proteínas del retículo endoplasmático, las modifica (glucosilación, sulfatación), empaca y distribuye hacia su destino (lisosomas, membrana plasmática o secreción).','Los LISOSOMAS contienen enzimas hidrolíticas ácidas para la digestión intracelular (autofagia, heterofagia). Se forman a partir del aparato de Golgi.'] },

        { n:31, imagen:null,
          pregunta:'Es un ejemplo de reacción metabólica de tipo anabólico:',
          opciones:['Glucólisis','Fotosíntesis','Digestión'], correcta:1,
          exp_correcta:'El ANABOLISMO construye moléculas complejas a partir de moléculas simples (requiere energía). La FOTOSÍNTESIS sintetiza glucosa (molécula compleja) a partir de CO₂ + H₂O + energía luminosa. Es la reacción anabólica por excelencia.',
          exp_incorrectas:['La GLUCÓLISIS es CATABÓLICA: descompone glucosa (molécula compleja) en piruvato (moléculas simples) liberando energía (ATP y NADH). Es degradación, no síntesis.','La DIGESTIÓN es CATABÓLICA: descompone macromoléculas complejas (proteínas, lípidos, carbohidratos) en moléculas simples (aminoácidos, ácidos grasos, glucosa) mediante hidrólisis enzimática.'] },

        { n:32, imagen:null,
          pregunta:'Es un producto que se obtiene en el ciclo de Krebs cuando se desprende la coenzima A a través de la fosforilación:',
          opciones:['Succinato','Fumarato','Malato'], correcta:0,
          exp_correcta:'En el ciclo de Krebs, el SUCCINIL-CoA es convertido a SUCCINATO cuando la coenzima A (CoA) se desprende. Esta reacción es catalizada por la succinil-CoA sintetasa y genera GTP (o ATP) por fosforilación a nivel de sustrato.',
          exp_incorrectas:['El FUMARATO es el siguiente paso: el succinato se convierte en fumarato por la succínico deshidrogenasa (que también reduce FAD a FADH₂).','El MALATO viene después del fumarato: la fumarasa cataliza la hidratación de fumarato a malato.'] },

        { n:33, imagen:null,
          pregunta:'Es una alteración autosómica recesiva ligada al cromosoma X:',
          opciones:['Síndrome de Down','Hemofilia','Síndrome de Turner'], correcta:1,
          exp_correcta:'La HEMOFILIA (A: déficit factor VIII, B: déficit factor IX) es un trastorno recesivo ligado al cromosoma X. Los varones (XY) la padecen con un solo alelo afectado; las mujeres (XX) necesitan dos alelos recesivos para padecerla y suelen ser portadoras.',
          exp_incorrectas:['El SÍNDROME DE DOWN es una TRISOMÍA del cromosoma 21 (47,XX+21 o 47,XY+21). Es un error numérico de los autosomas, no está ligado al cromosoma X.','El SÍNDROME DE TURNER (45,X0) es una MONOSOMÍA del cromosoma sexual X. Las mujeres solo tienen un cromosoma X en lugar de dos. No es recesiva ligada al X sino una aneuploidía.'] },

        { n:34, imagen:null,
          pregunta:'Un compuesto químico heterocíclico formado por nitrógeno y un anillo simple se nombra como:',
          opciones:['ADN','Base pirimídica','ARN'], correcta:1,
          exp_correcta:'Las BASES PIRIMÍDICAS tienen un solo anillo heterocíclico con nitrógeno. Son: CITOSINA (C), TIMINA (T) y URACILO (U). Las bases PÚRICAS (adenina y guanina) tienen DOBLE anillo. Pirimidina = anillo simple.',
          exp_incorrectas:['El ADN (ácido desoxirribonucleico) es un POLÍMERO de doble hélice formado por nucleótidos (base + desoxirribosa + fosfato). No es un compuesto de anillo simple.','El ARN (ácido ribonucleico) es un polímero de cadena simple con nucleótidos (base + ribosa + fosfato). Tampoco es el nombre de un solo tipo de anillo.'] },

        { n:35, imagen:null,
          pregunta:'¿Cuál es una característica morfológica de los parásitos?',
          opciones:['Tienen una forma vegetativa llamada trofozoíto','Tienen una pared celular constituida por quitina','Son capaces de formar colonias levaduriformes'], correcta:0,
          exp_correcta:'Los PARÁSITOS PROTOZOARIOS tienen una forma vegetativa activa llamada TROFOZOÍTO: es la fase en que el parásito se alimenta, crece y se reproduce. Ejemplos: trofozoíto de Giardia, de Entamoeba histolytica, de Plasmodium.',
          exp_incorrectas:['La pared celular de QUITINA es característica de los HONGOS (también de algunos artrópodos). Los protozoos no tienen pared celular.','Las COLONIAS LEVADURIFORMES son una forma de crecimiento de los HONGOS unicelulares (levaduras). No aplica a parásitos protozoos.'] },

        { n:36, imagen:null,
          pregunta:'Son los medicamentos utilizados para los síntomas de las alergias:',
          opciones:['Antiespasmódicos','Antihistamínicos','Analgésicos'], correcta:1,
          exp_correcta:'Los ANTIHISTAMÍNICOS bloquean los receptores H1 de histamina, contrarrestando sus efectos (prurito, rinorrea, urticaria, estornudos). Son el tratamiento de primera línea para reacciones alérgicas. Ej: loratadina, cetirizina, difenhidramina.',
          exp_incorrectas:['Los ANTIESPASMÓDICOS relajan el músculo liso del tracto digestivo o urinario (para tratar cólicos, dolor abdominal, espasmos). No tratan alergias.','Los ANALGÉSICOS reducen el DOLOR (paracetamol, AINE, opioides). Aunque algunos AINE tienen efecto antiinflamatorio leve, no son el tratamiento principal de las alergias.'] },

        { n:37, imagen:null,
          pregunta:'¿Cuál es la vía de administración contraindicada en un paciente con presencia de úlcera gástrica?',
          opciones:['Sublingual','Subcutánea','Oral'], correcta:2,
          exp_correcta:'La vía ORAL está contraindicada en úlcera gástrica porque el fármaco (especialmente AINE, esteroides, aspirina) tiene contacto DIRECTO con la mucosa gástrica ulcerada, irritándola y empeorando la lesión. Se prefieren vías alternativas.',
          exp_incorrectas:['La vía SUBLINGUAL absorbe el fármaco por las venas debajo de la lengua hacia circulación general, sin pasar por el estómago. No lesiona la mucosa gástrica.','La vía SUBCUTÁNEA (bajo la piel) inyecta el fármaco en el tejido subcutáneo. No tiene contacto con el estómago.'] },

        { n:38, imagen:null,
          pregunta:'Es un ejemplo del estudio de la farmacodinamia:',
          opciones:['El volumen de distribución de un antiinflamatorio posterior a su aplicación','El conjunto de reacciones adversas provocadas por un agente antineoplásico','La vida media de un tranquilizante depresor del sistema nervioso central'], correcta:1,
          exp_correcta:'La FARMACODINAMIA estudia LO QUE EL FÁRMACO LE HACE AL ORGANISMO: mecanismos de acción, efectos terapéuticos, reacciones adversas y tóxicas. Las REACCIONES ADVERSAS de un antineoplásico son el resultado del efecto del fármaco sobre el organismo.',
          exp_incorrectas:['El VOLUMEN DE DISTRIBUCIÓN es un parámetro FARMACOCINÉTICO (cómo se distribuye el fármaco por el organismo). LADME = farmacocinética.','La VIDA MEDIA (t½) es también un parámetro FARMACOCINÉTICO: tiempo que tarda en reducirse a la mitad la concentración plasmática del fármaco.'] },

        { n:39, imagen:null,
          pregunta:'Estar formado por __________ corresponde a una característica morfofuncional de un aparato:',
          opciones:['Tejidos que en conjunto conforman una unidad funcional','Estructuras tisulares diversas que proceden de la misma estirpe','Unidades anatómicas con distinto tejido pero con función común'], correcta:2,
          exp_correcta:'Un APARATO está formado por estructuras anatómicas de DISTINTO origen y tejido que trabajan juntas para una FUNCIÓN COMÚN. Ej: Aparato Digestivo (boca, esófago, estómago, intestino, hígado, páncreas = tejidos distintos con función digestiva común).',
          exp_incorrectas:['Eso define a un ÓRGANO: conjunto de tejidos que forman una unidad anatómica y funcional específica.','Eso define a un SISTEMA: conjunto de órganos formados por el MISMO tipo de tejido (misma estirpe). Ej: Sistema óseo = solo tejido óseo; Sistema muscular = solo músculo.'] },

        { n:40, imagen:null,
          pregunta:'¿Cuál es la característica de los glúcidos?',
          opciones:['Pueden formarse por un solo monosacárido','Pueden incluir en su formación al fosfato','Están formados por unidades denominadas nucleótidos'], correcta:0,
          exp_correcta:'Los GLÚCIDOS (carbohidratos) tienen como unidad básica al MONOSACÁRIDO. Un glúcido puede estar formado por un solo monosacárido (glucosa, fructosa) = monosacárido; dos = disacárido (sacarosa); muchos = polisacárido (almidón, glucógeno, celulosa).',
          exp_incorrectas:['El FOSFATO forma parte de los NUCLEÓTIDOS (ATP, NAD+, ADN, ARN) y de los FOSFOLÍPIDOS. No es un componente típico de los glúcidos.','Los NUCLEÓTIDOS (base nitrogenada + azúcar + fosfato) son las unidades de los ÁCIDOS NUCLEICOS (ADN y ARN), no de los carbohidratos.'] },

        { n:41, imagen:null,
          pregunta:'De manera general, los lípidos son biomoléculas saponificables...',
          opciones:['Integradas por una proporción aproximada de un átomo de carbono por cada molécula de agua','Formadas por carbono, hidrógeno y oxígeno con azufre y fósforo en menor proporción','Constituidas por amino y un grupo carboxilo que se unen por enlaces peptídicos'], correcta:1,
          exp_correcta:'Los LÍPIDOS están formados principalmente por C, H y O (con S y P en algunos como fosfolípidos y sulfolípidos). Son INSOLUBLES en agua (hidrofóbicos) y solubles en solventes orgánicos. La proporción C:H es mayor a la de los carbohidratos (que tienen relación 1:2:1 de C:H:O).',
          exp_incorrectas:['La proporción de un átomo de C por cada molécula de agua (1:2:1 de C:H:O) es característica de los CARBOHIDRATOS (hidrato de carbono), no de los lípidos.','Los grupos AMINO (–NH₂) y CARBOXILO (–COOH) unidos por ENLACES PEPTÍDICOS definen a las PROTEÍNAS (polipéptidos). No son lípidos.'] },

        { n:42, imagen:null,
          pregunta:'¿Qué proteína es la encargada de la contractilidad muscular?',
          opciones:['Miosina','Colágeno','Queratina'], correcta:0,
          exp_correcta:'La MIOSINA es la proteína motora que, al interactuar con la ACTINA, produce la contracción muscular. Los filamentos gruesos de miosina "caminan" sobre los filamentos delgados de actina usando la energía del ATP (modelo del filamento deslizante).',
          exp_incorrectas:['El COLÁGENO es la proteína estructural más abundante del cuerpo. Proporciona resistencia a la tracción en piel, tendones, ligamentos y huesos. No es proteína contráctil.','La QUERATINA es una proteína fibrosa que da dureza y resistencia a la epidermis, cabello, uñas y cuernos. No es proteína contráctil.'] },

        { n:43, imagen:null,
          pregunta:'¿Qué vitamina participa en la síntesis de serotonina y epinefrina?',
          opciones:['Colina','Piridoxina','Ácido fólico'], correcta:1,
          exp_correcta:'La PIRIDOXINA (Vitamina B6) es cofactor de las descarboxilasas de aminoácidos que sintetizan neurotransmisores: convierte 5-HTP en SEROTONINA y DOPA en DOPAMINA y EPINEFRINA (adrenalina). También interviene en la síntesis de GABA.',
          exp_incorrectas:['La COLINA es un nutriente esencial para la síntesis de ACETILCOLINA (neurotransmisor colinérgico) y de fosfolípidos de membrana (lecitina). No participa en la síntesis de serotonina ni epinefrina.','El ÁCIDO FÓLICO (B9) participa en la síntesis y reparación del ADN, formación de eritrocitos y desarrollo del tubo neural. No es cofactor directo en la síntesis de serotonina ni epinefrina.'] },

        { n:44, imagen:null,
          pregunta:'¿Cuál es el organelo celular encargado de procesos como la respiración celular y producción de energía?',
          opciones:['Retículo endoplasmático liso','Mitocondria','Aparato de Golgi'], correcta:1,
          exp_correcta:'La MITOCONDRIA es la "central energética" de la célula. Realiza el CICLO DE KREBS, la CADENA DE TRANSPORTE DE ELECTRONES y la FOSFORILACIÓN OXIDATIVA, produciendo la mayor parte del ATP celular (36–38 ATP por glucosa). Tiene su propio ADN (ADNmt).',
          exp_incorrectas:['El RETÍCULO ENDOPLASMÁTICO LISO (REL) se encarga de la síntesis de lípidos y esteroides, el metabolismo de glucógeno y la detoxificación (en hepatocitos). No produce energía directamente.','El APARATO DE GOLGI recibe proteínas del retículo endoplasmático rugoso, las modifica (añade carbohidratos, sulfatos), las clasifica y las empaca en vesículas para su destino.'] },

        { n:45, imagen:null,
          pregunta:'Identifique el tipo celular que pertenece al sistema inmune:',
          opciones:['Eritrocito','Astrocito','Mastocito'], correcta:2,
          exp_correcta:'El MASTOCITO (célula cebada) pertenece al sistema inmune. Se localiza en tejidos conectivos y mucosas. Libera mediadores inflamatorios (histamina, heparina, leucotrienos, citocinas) en respuesta a alérgenos e infecciones parasitarias.',
          exp_incorrectas:['El ERITROCITO (glóbulo rojo) transporta hemoglobina y oxígeno. No tiene núcleo en su forma madura. Es la célula sanguínea más abundante pero no forma parte del sistema inmune.','El ASTROCITO es la célula glial más abundante del SNC. Nutre neuronas, forma la barrera hematoencefálica, regula la sinapsis. No es célula inmune (aunque puede activarse en neuroinflmación).'] },

        { n:46, imagen:null,
          pregunta:'¿Cuál es la conformación general de los lípidos?',
          opciones:['Moléculas de tipo hidrofóbico, insolubles en agua y con glicerol','Biopolímeros de aminoácidos unidos por un enlace de tipo peptídico','Biomoléculas orgánicas con hidrogeno y oxígeno en una relación de dos a uno'], correcta:0,
          exp_correcta:'Los LÍPIDOS son moléculas de carácter HIDROFÓBICO (temen al agua) e INSOLUBLES en agua, solubles en solventes orgánicos. Muchos lípidos (triglicéridos, fosfolípidos) contienen GLICEROL como esqueleto. Esta hidrofobicidad les permite formar membranas biológicas y almacenar energía.',
          exp_incorrectas:['Los biopolímeros de aminoácidos unidos por ENLACES PEPTÍDICOS definen a las PROTEÍNAS (polipéptidos). No son lípidos.','La relación H:O de 2:1 (o C:H:O en relación Cn(H₂O)n) es característica de los CARBOHIDRATOS. Los lípidos tienen proporcionalmente mucho más hidrógeno y menos oxígeno.'] },

        { n:47, imagen:null,
          pregunta:'¿Cuál de las siguientes opciones corresponde a una de las funciones del sistema nervioso?',
          opciones:['Activar a los organelos mediante sustancias hormonales','Proveer de movimiento a las partes articuladas del cuerpo','Controlar el funcionamiento de los órganos mediante estímulos'], correcta:2,
          exp_correcta:'El SN CONTROLA Y COORDINA el funcionamiento de todos los órganos y sistemas mediante señales eléctricas (potenciales de acción) y neurotransmisores, permitiendo una respuesta rápida e integrada del organismo.',
          exp_incorrectas:['Activar procesos celulares mediante HORMONAS es la función del SISTEMA ENDOCRINO. Las hormonas viajan por sangre y actúan sobre células diana a distancia (acción más lenta que el SN).','PROVEER DE MOVIMIENTO a partes articuladas es función del SISTEMA MÚSCULO-ESQUELÉTICO. El SN envía señales para que el músculo se contraiga, pero el movimiento en sí lo genera el aparato locomotor.'] },

        { n:48, imagen:null,
          pregunta:'¿Qué órgano se encarga del almacenamiento, trituración, mezcla y propulsión del bolo alimenticio?',
          opciones:['Estómago','Intestino delgado','Cavidad oral'], correcta:0,
          exp_correcta:'El ESTÓMAGO realiza cuatro funciones mecánicas: ALMACENA el bolo alimenticio (capacidad ~1-2L), lo TRITURA mediante contracciones musculares, lo MEZCLA con jugos gástricos (ácido clorhídrico y pepsina) y lo PROPULSA hacia el duodeno como quimo.',
          exp_incorrectas:['El INTESTINO DELGADO recibe el quimo del estómago y realiza la ABSORCIÓN de nutrientes. Su función principal es absortiva y digestiva química final, no de almacenamiento o trituración.','La CAVIDAD ORAL inicia la digestión (masticación e insalivación) formando el bolo alimenticio, pero no almacena ni propulsa el quimo.'] },
    ]
};

console.log('✅ Simulacro Premedicina V1 cargado —', SIMULACRO_PREMEDICINA_V1.preguntas.length, 'preguntas');
