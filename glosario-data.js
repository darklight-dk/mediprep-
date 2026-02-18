// ============================================
// GLOSARIO MÉDICO — MEDIPREP SMART
// 100+ términos organizados por categoría
// ============================================

const GLOSARIO_DATA = [

// ── PLANIMETRÍA Y ANATOMÍA ──────────────────────────
{ id:'g1', termino:'Plano Sagital', categoria:'Planimetría', icono:'📐',
  definicion:'Divide el cuerpo en partes derecha e izquierda. Si pasa exactamente por la línea media se llama plano mediosagital.',
  ejemplo:'Una tomografía lateral del cráneo es una vista en plano sagital.' },

{ id:'g2', termino:'Plano Coronal (Frontal)', categoria:'Planimetría', icono:'📐',
  definicion:'Divide el cuerpo en partes anterior (ventral) y posterior (dorsal).',
  ejemplo:'Una vista de frente de la columna vertebral es una imagen en plano coronal.' },

{ id:'g3', termino:'Plano Transversal (Axial)', categoria:'Planimetría', icono:'📐',
  definicion:'Divide el cuerpo en partes superior (craneal) e inferior (caudal). Es perpendicular al eje longitudinal.',
  ejemplo:'Las imágenes de TAC abdominal se obtienen en plano transversal.' },

{ id:'g4', termino:'Anterior / Ventral', categoria:'Planimetría', icono:'🧭',
  definicion:'Hacia la cara delantera del cuerpo.',
  ejemplo:'El esternón es anterior a los pulmones.' },

{ id:'g5', termino:'Posterior / Dorsal', categoria:'Planimetría', icono:'🧭',
  definicion:'Hacia la cara trasera del cuerpo.',
  ejemplo:'La columna vertebral es posterior al corazón.' },

{ id:'g6', termino:'Medial', categoria:'Planimetría', icono:'🧭',
  definicion:'Más cercano a la línea media del cuerpo.',
  ejemplo:'El cúbito es medial al radio en el antebrazo.' },

{ id:'g7', termino:'Lateral', categoria:'Planimetría', icono:'🧭',
  definicion:'Más alejado de la línea media del cuerpo.',
  ejemplo:'Los pulmones son laterales al corazón.' },

{ id:'g8', termino:'Proximal', categoria:'Planimetría', icono:'🧭',
  definicion:'Más cerca del origen o raíz de un miembro o estructura.',
  ejemplo:'El codo es proximal a la muñeca.' },

{ id:'g9', termino:'Distal', categoria:'Planimetría', icono:'🧭',
  definicion:'Más lejos del origen o raíz de un miembro.',
  ejemplo:'Los dedos son distales al codo.' },

{ id:'g10', termino:'Superficial', categoria:'Planimetría', icono:'🧭',
  definicion:'Cerca de la superficie corporal.',
  ejemplo:'La piel es superficial a los músculos.' },

{ id:'g11', termino:'Profundo', categoria:'Planimetría', icono:'🧭',
  definicion:'Alejado de la superficie corporal.',
  ejemplo:'Los huesos son profundos a los músculos.' },

{ id:'g12', termino:'Ipsilateral', categoria:'Planimetría', icono:'🧭',
  definicion:'Del mismo lado del cuerpo.',
  ejemplo:'El ojo derecho y el oído derecho son ipsilaterales.' },

{ id:'g13', termino:'Contralateral', categoria:'Planimetría', icono:'🧭',
  definicion:'Del lado opuesto del cuerpo.',
  ejemplo:'En lesiones del haz corticoespinal la debilidad es contralateral.' },

// ── SISTEMA NERVIOSO ──────────────────────────────────
{ id:'g14', termino:'Neurona', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Unidad funcional del sistema nervioso. Recibe, integra y transmite señales eléctricas. Consta de soma, dendritas y axón.',
  ejemplo:'Las neuronas motoras envían señales desde la médula espinal a los músculos.' },

{ id:'g15', termino:'Potencial de Acción', categoria:'Sistema Nervioso', icono:'⚡',
  definicion:'Cambio rápido y reversible en el potencial de membrana de una neurona. Ley de "todo o nada". Depende de canales de Na⁺ y K⁺.',
  ejemplo:'Un potencial de acción recorre el axón del nervio ciático hasta el pie.' },

{ id:'g16', termino:'Sinapsis', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Unión funcional entre dos neuronas. Puede ser eléctrica (uniones en hendidura) o química (neurotransmisores).',
  ejemplo:'La dopamina actúa en sinapsis del sistema mesolímbico relacionadas con el placer.' },

{ id:'g17', termino:'Neurotransmisor', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Molécula química liberada en la sinapsis que transmite señales entre neuronas. Ejemplos: acetilcolina, dopamina, serotonina, GABA.',
  ejemplo:'La serotonina baja está asociada con depresión.' },

{ id:'g18', termino:'Sistema Nervioso Simpático', categoria:'Sistema Nervioso', icono:'⚡',
  definicion:'División del SNA que activa la respuesta "lucha o huida": aumenta FC, dilata pupilas, inhibe digestión, libera glucosa.',
  ejemplo:'Frente a un peligro, el simpático acelera el corazón y dilata las pupilas.' },

{ id:'g19', termino:'Sistema Nervioso Parasimpático', categoria:'Sistema Nervioso', icono:'😴',
  definicion:'División del SNA que promueve el "reposo y digestión": baja FC, aumenta peristaltismo, contrae pupilas. Mediado por acetilcolina.',
  ejemplo:'Después de comer, el parasimpático estimula la digestión.' },

{ id:'g20', termino:'Córtex Cerebral', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Capa externa del cerebro con 4 lóbulos: frontal (movimiento y personalidad), parietal (sensación), temporal (audición y memoria) y occipital (visión).',
  ejemplo:'El lóbulo occipital procesa toda la información visual.' },

{ id:'g21', termino:'Cerebelo', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Coordina movimientos finos, equilibrio y postura. No inicia movimientos pero los ajusta. Situado en fosa craneal posterior.',
  ejemplo:'Una lesión cerebelosa produce ataxia (falta de coordinación al caminar).' },

{ id:'g22', termino:'Médula Espinal', categoria:'Sistema Nervioso', icono:'🧠',
  definicion:'Cordón nervioso dentro de la columna vertebral. Transmite señales entre el cerebro y el cuerpo. Tiene sustancia gris (centro) y blanca (exterior).',
  ejemplo:'Una lesión medular a nivel C4 puede causar cuadriplejía.' },

// ── SISTEMA CARDIOVASCULAR ────────────────────────────
{ id:'g23', termino:'Miocardio', categoria:'Sistema Cardiovascular', icono:'❤️',
  definicion:'Músculo cardíaco. Contiene cardiomiocitos interconectados por discos intercalares. Se contrae en sincronía gracias a las uniones tipo gap.',
  ejemplo:'El infarto de miocardio es la muerte de células cardíacas por falta de oxígeno.' },

{ id:'g24', termino:'Nodo Sinusal (SA)', categoria:'Sistema Cardiovascular', icono:'❤️',
  definicion:'Marcapasos natural del corazón. Ubicado en aurícula derecha. Genera impulsos eléctricos a 60-100 lat/min que inician cada latido.',
  ejemplo:'La bradicardia ocurre cuando el nodo SA genera menos de 60 impulsos por minuto.' },

{ id:'g25', termino:'Sístole', categoria:'Sistema Cardiovascular', icono:'❤️',
  definicion:'Fase de contracción ventricular. El corazón expulsa sangre hacia la aorta (ventrículo izquierdo) y arteria pulmonar (ventrículo derecho).',
  ejemplo:'La presión sistólica es la presión arterial durante la sístole. Normal: 120 mmHg.' },

{ id:'g26', termino:'Diástole', categoria:'Sistema Cardiovascular', icono:'❤️',
  definicion:'Fase de relajación y llenado ventricular. El corazón se llena de sangre proveniente de las aurículas.',
  ejemplo:'La presión diastólica normal es 80 mmHg.' },

{ id:'g27', termino:'Gasto Cardíaco', categoria:'Sistema Cardiovascular', icono:'📊',
  definicion:'Volumen de sangre que el corazón bombea por minuto. GC = Volumen Sistólico × Frecuencia Cardíaca. Normal: 5 L/min en reposo.',
  ejemplo:'Durante el ejercicio el gasto cardíaco puede aumentar hasta 25 L/min.' },

{ id:'g28', termino:'Circulación Mayor (Sistémica)', categoria:'Sistema Cardiovascular', icono:'🔄',
  definicion:'Lleva sangre oxigenada desde el ventrículo izquierdo a todo el cuerpo y regresa sangre desoxigenada a la aurícula derecha.',
  ejemplo:'La aorta es la arteria principal de la circulación mayor.' },

{ id:'g29', termino:'Circulación Menor (Pulmonar)', categoria:'Sistema Cardiovascular', icono:'🔄',
  definicion:'Lleva sangre desoxigenada del ventrículo derecho a los pulmones y regresa sangre oxigenada a la aurícula izquierda.',
  ejemplo:'Las venas pulmonares (única venas que llevan sangre oxigenada) pertenecen a la circulación menor.' },

{ id:'g30', termino:'Hipertensión Arterial', categoria:'Sistema Cardiovascular', icono:'🩸',
  definicion:'Presión arterial ≥140/90 mmHg de forma persistente. Factor de riesgo mayor para ECV, infarto, insuficiencia renal.',
  ejemplo:'Un paciente con PA 160/100 mmHg tiene hipertensión grado 2.' },

// ── SISTEMA RESPIRATORIO ──────────────────────────────
{ id:'g31', termino:'Alvéolo', categoria:'Sistema Respiratorio', icono:'🫁',
  definicion:'Saco de aire microscópico al final de los bronquiolos donde ocurre el intercambio gaseoso. Rodeado por capilares pulmonares.',
  ejemplo:'El enfisema destruye las paredes alveolares, reduciendo el área de intercambio gaseoso.' },

{ id:'g32', termino:'Hematosis', categoria:'Sistema Respiratorio', icono:'🫁',
  definicion:'Intercambio gaseoso en los alvéolos: O₂ pasa de los alvéolos a la sangre y CO₂ pasa de la sangre a los alvéolos.',
  ejemplo:'La hematosis ocurre por difusión pasiva siguiendo gradientes de presión parcial.' },

{ id:'g33', termino:'Volumen Tidal (VT)', categoria:'Sistema Respiratorio', icono:'📊',
  definicion:'Volumen de aire que entra o sale en cada respiración normal en reposo. Aprox. 500 mL en adultos.',
  ejemplo:'En ejercicio intenso el volumen tidal puede aumentar hasta 3 veces el valor en reposo.' },

{ id:'g34', termino:'Capacidad Vital (CV)', categoria:'Sistema Respiratorio', icono:'📊',
  definicion:'Máximo volumen de aire que puede exhalar tras una inspiración máxima. CV = VT + VRI + VRE. ~4.5 L en hombres adultos.',
  ejemplo:'La CV se mide con espirometría para evaluar función pulmonar.' },

{ id:'g35', termino:'Surfactante Pulmonar', categoria:'Sistema Respiratorio', icono:'🫁',
  definicion:'Mezcla de fosfolípidos (principalmente DPPC) producida por neumocitos tipo II. Reduce la tensión superficial alveolar evitando el colapso.',
  ejemplo:'Los bebés prematuros carecen de surfactante, causando síndrome de dificultad respiratoria.' },

{ id:'g36', termino:'Diafragma', categoria:'Sistema Respiratorio', icono:'🫁',
  definicion:'Principal músculo de la respiración. Al contraerse se aplana y aumenta el volumen torácico generando presión negativa que jala el aire.',
  ejemplo:'La parálisis del nervio frénico (C3-C5) causa parálisis del diafragma.' },

{ id:'g37', termino:'Hipoxia', categoria:'Sistema Respiratorio', icono:'⚠️',
  definicion:'Reducción del O₂ disponible en tejidos. Puede ser hipoxémica (↓PaO₂), anémica (↓Hb), isquémica (↓flujo) o histotóxica (cianuro).',
  ejemplo:'En altitudes elevadas la hipoxia hipobárica causa mal de montaña.' },

// ── SISTEMA ENDOCRINO ─────────────────────────────────
{ id:'g38', termino:'Hormona', categoria:'Sistema Endocrino', icono:'⚗️',
  definicion:'Molécula mensajera producida por glándulas endocrinas, liberada al torrente sanguíneo y que actúa sobre células diana específicas.',
  ejemplo:'La insulina es una hormona producida por el páncreas que regula la glucemia.' },

{ id:'g39', termino:'Retroalimentación Negativa', categoria:'Sistema Endocrino', icono:'🔄',
  definicion:'Mecanismo donde el producto final inhibe su propia producción. Mantiene la homeostasis hormonal. Ej: cortisol inhibe al eje HHA.',
  ejemplo:'T3/T4 elevadas inhiben TRH y TSH, regulando la producción tiroidea.' },

{ id:'g40', termino:'Insulina', categoria:'Sistema Endocrino', icono:'⚗️',
  definicion:'Hormona peptídica pancreática (células β). Reduce la glucemia facilitando captación de glucosa, síntesis de glucógeno y lípidos. Anabólica.',
  ejemplo:'En la DM tipo 1 hay destrucción autoinmune de células β que produce déficit absoluto de insulina.' },

{ id:'g41', termino:'Glucagón', categoria:'Sistema Endocrino', icono:'⚗️',
  definicion:'Hormona pancreática (células α). Aumenta glucemia mediante glucogenólisis y gluconeogénesis. Opuesta a insulina.',
  ejemplo:'En hipoglucemia el glucagón es secretado para elevar la glucosa sanguínea.' },

{ id:'g42', termino:'Cortisol', categoria:'Sistema Endocrino', icono:'⚗️',
  definicion:'Glucocorticoide producido en corteza suprarrenal. Aumenta glucemia, es antiinflamatorio, inmunosupresor. Responde al estrés.',
  ejemplo:'El síndrome de Cushing resulta del exceso crónico de cortisol.' },

{ id:'g43', termino:'Hormona del Crecimiento (GH)', categoria:'Sistema Endocrino', icono:'📈',
  definicion:'Producida por la hipófisis anterior. Estimula crecimiento óseo y muscular, moviliza grasas, antagoniza insulina. Liberación mayor en sueño.',
  ejemplo:'El déficit de GH en niños causa talla baja, el exceso produce gigantismo.' },

{ id:'g44', termino:'Tiroides', categoria:'Sistema Endocrino', icono:'⚗️',
  definicion:'Glándula en cuello que produce T3 y T4 (regulan metabolismo basal) y calcitonina (baja el calcio). Controlada por TSH hipofisaria.',
  ejemplo:'El hipotiroidismo causa bradicardia, aumento de peso, fatiga y piel seca.' },

// ── APARATO DIGESTIVO ─────────────────────────────────
{ id:'g45', termino:'Peristaltismo', categoria:'Aparato Digestivo', icono:'🔄',
  definicion:'Contracciones musculares rítmicas coordinadas del tracto GI que propulsan el bolo alimenticio. Reguladas por el sistema nervioso entérico.',
  ejemplo:'La morfina inhibe el peristaltismo, causando estreñimiento.' },

{ id:'g46', termino:'Enzimas Pancreáticas', categoria:'Aparato Digestivo', icono:'⚗️',
  definicion:'Lipasa (grasas), amilasa (almidón), tripsina y quimotripsina (proteínas). Se secretan como zimógenos inactivos y se activan en duodeno.',
  ejemplo:'En la pancreatitis aguda la lipasa y amilasa séricas se elevan marcadamente.' },

{ id:'g47', termino:'Bilis', categoria:'Aparato Digestivo', icono:'💛',
  definicion:'Producida por el hígado, almacenada en vesícula biliar. Emulsifica grasas para facilitar digestión. Contiene sales biliares, bilirrubina y colesterol.',
  ejemplo:'Los cálculos biliares (colelitiasis) se forman principalmente de colesterol cristalizado.' },

{ id:'g48', termino:'Microvellosidades (borde en cepillo)', categoria:'Aparato Digestivo', icono:'🔬',
  definicion:'Proyecciones del polo apical de los enterocitos del intestino delgado que aumentan hasta 600x el área de absorción. Contienen enzimas digestivas.',
  ejemplo:'En la enfermedad celíaca, el gluten destruye las vellosidades causando malabsorción.' },

{ id:'g49', termino:'Hígado', categoria:'Aparato Digestivo', icono:'🫀',
  definicion:'Glándula más grande del cuerpo. Funciones: metabolismo de glucosa, síntesis de proteínas plasmáticas (albumina, factores coagulación), detoxificación, producción de bilis.',
  ejemplo:'La cirrosis hepatica reduce la síntesis de factores de coagulación causando tendencia hemorrágica.' },

// ── BIOLOGÍA CELULAR ──────────────────────────────────
{ id:'g50', termino:'Membrana Plasmática', categoria:'Biología Celular', icono:'🔬',
  definicion:'Bicapa de fosfolípidos con proteínas integrales y periféricas. Semipermeable. Regula el paso de sustancias. Contiene colesterol que da fluidez.',
  ejemplo:'Los canales de Na⁺ y K⁺ en la membrana neuronal son proteínas integrales.' },

{ id:'g51', termino:'Mitocondria', categoria:'Biología Celular', icono:'⚡',
  definicion:'Orgánulo productor de ATP mediante respiración celular aerobia. Tiene membrana interna (crestas) y externa. Contiene su propio ADN.',
  ejemplo:'Las células musculares tienen miles de mitocondrias por su alta demanda energética.' },

{ id:'g52', termino:'Núcleo Celular', categoria:'Biología Celular', icono:'🔬',
  definicion:'Centro de control celular. Contiene el ADN organizado en cromosomas. Rodeado por envoltura nuclear con poros. Contiene el nucléolo.',
  ejemplo:'El núcleo celular coordina la expresión génica y la replicación del ADN.' },

{ id:'g53', termino:'Ribosoma', categoria:'Biología Celular', icono:'🔬',
  definicion:'Orgánulo sin membrana donde ocurre la síntesis de proteínas (traducción del ARNm). Compuesto de ARNr y proteínas. Libres o unidos al RE rugoso.',
  ejemplo:'Los antibióticos como la estreptomicina actúan bloqueando ribosomas bacterianos.' },

{ id:'g54', termino:'Retículo Endoplásmico Rugoso (RER)', categoria:'Biología Celular', icono:'🔬',
  definicion:'Sistema de membranas con ribosomas. Sintetiza y procesa proteínas destinadas a exportar o a la membrana celular. Agrega azúcares (glucosilación).',
  ejemplo:'Las células plasmáticas tienen RER abundante para sintetizar anticuerpos.' },

{ id:'g55', termino:'ADN (Ácido Desoxirribonucleico)', categoria:'Biología Celular', icono:'🧬',
  definicion:'Molécula que contiene la información genética. Doble hélice antiparalela. Bases: Adenina-Timina y Guanina-Citosina. 23 pares de cromosomas en humanos.',
  ejemplo:'La PCR amplifica segmentos específicos de ADN para diagnóstico molecular.' },

{ id:'g56', termino:'Mitosis', categoria:'Biología Celular', icono:'🔬',
  definicion:'División celular que produce 2 células hijas genéticamente idénticas a la célula madre. Fases: profase, metafase, anafase, telofase. Para crecimiento y reparación.',
  ejemplo:'Las células de la piel se dividen por mitosis aproximadamente cada 2 semanas.' },

{ id:'g57', termino:'Meiosis', categoria:'Biología Celular', icono:'🔬',
  definicion:'División celular que produce 4 gametos (óvulos o espermatozoides) con la mitad de cromosomas (n=23). Permite la variabilidad genética mediante el cruce.',
  ejemplo:'Errores en la meiosis causan trisomías como el síndrome de Down (trisomía 21).' },

// ── CARBOHIDRATOS Y BIOQUÍMICA ────────────────────────
{ id:'g58', termino:'Monosacárido', categoria:'Bioquímica', icono:'🍬',
  definicion:'Carbohidrato más simple, no hidrolizable. Unidad básica. Ejemplos: glucosa, fructosa, galactosa (C6H12O6). Fórmula general: (CH₂O)n.',
  ejemplo:'La glucosa es el principal monosacárido en sangre (glucemia normal: 70-100 mg/dL).' },

{ id:'g59', termino:'Disacárido', categoria:'Bioquímica', icono:'🍬',
  definicion:'Dos monosacáridos unidos por enlace glucosídico. Sacarosa (glucosa+fructosa), lactosa (glucosa+galactosa), maltosa (glucosa+glucosa).',
  ejemplo:'La intolerancia a la lactosa ocurre por déficit de lactasa intestinal.' },

{ id:'g60', termino:'Polisacárido', categoria:'Bioquímica', icono:'🍬',
  definicion:'Muchos monosacáridos unidos. Almidón y glucógeno (reserva energética), celulosa (estructura vegetal). Glucógeno se almacena en hígado y músculo.',
  ejemplo:'El hígado puede almacenar ~100g de glucógeno, músculo ~400g.' },

{ id:'g61', termino:'Glucólisis', categoria:'Bioquímica', icono:'⚡',
  definicion:'Vía metabólica que degrada glucosa → 2 piruvatos en el citoplasma. Produce 2 ATP netos. Puede ocurrir con o sin oxígeno.',
  ejemplo:'Las células cancerosas prefieren la glucólisis aunque haya oxígeno (efecto Warburg).' },

{ id:'g62', termino:'Ciclo de Krebs', categoria:'Bioquímica', icono:'🔄',
  definicion:'Ciclo mitocondrial que oxida el acetil-CoA produciendo CO₂, NADH y FADH₂. Genera 2 ATP directos. Pieza central del metabolismo aerobio.',
  ejemplo:'El Ciclo de Krebs también suministra precursores para síntesis de aminoácidos y ácidos grasos.' },

// ── CONCEPTOS CLÍNICOS ────────────────────────────────
{ id:'g63', termino:'Signo Vital', categoria:'Conceptos Clínicos', icono:'🩺',
  definicion:'Medición objetiva de funciones básicas: temperatura, frecuencia cardíaca, frecuencia respiratoria, presión arterial y saturación O₂.',
  ejemplo:'Valores normales: T° 36-37.5°C, FC 60-100 lpm, FR 12-20 rpm, PA 120/80 mmHg.' },

{ id:'g64', termino:'Fiebre', categoria:'Conceptos Clínicos', icono:'🌡️',
  definicion:'Temperatura corporal >38°C. Mediada por pirógenos (IL-1, TNF, PGE₂). Signo de infección, inflamación o neoplasia. Escalofríos = vasocontricción para subir temperatura.',
  ejemplo:'En niños, la fiebre >40°C puede causar convulsiones febriles.' },

{ id:'g65', termino:'Taquicardia', categoria:'Conceptos Clínicos', icono:'❤️',
  definicion:'Frecuencia cardíaca >100 latidos por minuto. Puede ser sinusal (fisiológica: ejercicio, fiebre, estrés) o patológica (arritmias).',
  ejemplo:'Una FC de 130 lpm en reposo requiere evaluación cardiológica.' },

{ id:'g66', termino:'Bradicardia', categoria:'Conceptos Clínicos', icono:'❤️',
  definicion:'Frecuencia cardíaca <60 latidos por minuto. Puede ser normal en atletas o indicar bloqueo cardíaco, hipotiroidismo o exceso de beta-bloqueadores.',
  ejemplo:'Un maratonista puede tener FC de 45 lpm en reposo sin patología.' },

{ id:'g67', termino:'Hipotensión', categoria:'Conceptos Clínicos', icono:'🩸',
  definicion:'Presión arterial <90/60 mmHg. Causa mareo, síncope. Puede indicar deshidratación, shock, sepsis. Hipotensión ortostática al ponerse de pie.',
  ejemplo:'En shock séptico la hipotensión no responde a líquidos intravenosos.' },

{ id:'g68', termino:'Cianosis', categoria:'Conceptos Clínicos', icono:'🔵',
  definicion:'Coloración azulada de piel y mucosas por exceso de hemoglobina desoxigenada (>5g/dL). Central (hipoxemia) vs periférica (vasoconstricción).',
  ejemplo:'La cianosis perioral en un bebé indica cardiopatía congénita cianótica hasta demostrar lo contrario.' },

{ id:'g69', termino:'Edema', categoria:'Conceptos Clínicos', icono:'💧',
  definicion:'Acumulación anormal de líquido en el espacio intersticial. Causas: hipoalbuminemia, HTA, insuficiencia cardíaca, obstrucción linfática.',
  ejemplo:'El edema maleolar bilateral en un paciente con disnea sugiere insuficiencia cardíaca.' },

{ id:'g70', termino:'Dolor Referido', categoria:'Conceptos Clínicos', icono:'📍',
  definicion:'Dolor percibido en un lugar diferente al origen. Ocurre por convergencia de fibras aferentes en el asta dorsal medular.',
  ejemplo:'El dolor de infarto de miocardio se refiere al brazo izquierdo y mandíbula.' },

{ id:'g71', termino:'Ictericia', categoria:'Conceptos Clínicos', icono:'🟡',
  definicion:'Coloración amarilla de piel y escleróticas por acumulación de bilirrubina (>2mg/dL en sangre). Pre-hepática, hepática o post-hepática.',
  ejemplo:'La ictericia neonatal fisiológica aparece al 2-3 día y resuelve en 1 semana.' },

{ id:'g72', termino:'Shock', categoria:'Conceptos Clínicos', icono:'⚠️',
  definicion:'Estado de hipoperfusión tisular crítica. Tipos: hipovolémico (hemorragia), distributivo (séptico/anafiláctico), cardiogénico, obstructivo.',
  ejemplo:'El shock anafiláctico requiere adrenalina IM inmediata como primera línea.' },

{ id:'g73', termino:'Inflamación', categoria:'Conceptos Clínicos', icono:'🔴',
  definicion:'Respuesta protectora ante lesión o infección. Signos cardinales de Celsius: calor, rubor, tumor (edema), dolor + pérdida de función (Galeno).',
  ejemplo:'La artritis reumatoide es una inflamación crónica sistémica autoinmune.' },

{ id:'g74', termino:'Homeostasis', categoria:'Conceptos Salud', icono:'⚖️',
  definicion:'Capacidad del organismo de mantener un ambiente interno estable (temperatura, pH, glucemia, etc.) mediante mecanismos de retroalimentación.',
  ejemplo:'La homeostasis del pH sanguíneo lo mantiene entre 7.35-7.45.' },

{ id:'g75', termino:'Epidemiología', categoria:'Conceptos Salud', icono:'📊',
  definicion:'Ciencia que estudia la distribución, frecuencia y determinantes de las enfermedades en poblaciones. Base de la medicina preventiva y salud pública.',
  ejemplo:'La epidemiología identificó la relación entre tabaco y cáncer de pulmón.' },

{ id:'g76', termino:'Incidencia', categoria:'Conceptos Salud', icono:'📊',
  definicion:'Número de NUEVOS casos de una enfermedad en una población durante un periodo. Mide el riesgo de enfermar. Incidencia = casos nuevos/población en riesgo × 100.',
  ejemplo:'La incidencia de COVID-19 fue de 50 por 100,000 habitantes la semana pasada.' },

{ id:'g77', termino:'Prevalencia', categoria:'Conceptos Salud', icono:'📊',
  definicion:'Proporción de TODOS los casos (nuevos y antiguos) en una población en un momento dado. Mide la carga de enfermedad.',
  ejemplo:'La prevalencia de diabetes tipo 2 en México es aproximadamente 15% de adultos.' },

{ id:'g78', termino:'Profilaxis', categoria:'Conceptos Salud', icono:'🛡️',
  definicion:'Medida preventiva para evitar una enfermedad. Puede ser primaria (evitar la enfermedad), secundaria (detección temprana) o terciaria (rehabilitación).',
  ejemplo:'La vacuna de la hepatitis B es una profilaxis primaria contra esa infección.' },

{ id:'g79', termino:'Diagnóstico Diferencial', categoria:'Conceptos Clínicos', icono:'🩺',
  definicion:'Lista de posibles enfermedades que pueden explicar los síntomas y signos del paciente. Se descarta paulatinamente hasta llegar al diagnóstico definitivo.',
  ejemplo:'Ante dolor de pecho el diagnóstico diferencial incluye: IAM, angina, disección aórtica, neumotórax, embolia pulmonar.' },

{ id:'g80', termino:'Patogénesis', categoria:'Conceptos Clínicos', icono:'🔬',
  definicion:'Mecanismos biológicos por los que una enfermedad se desarrolla y progresa. Explica cómo los agentes causales producen daño tisular.',
  ejemplo:'La patogénesis del DM2 incluye resistencia a insulina + disfunción progresiva de células β.' },

{ id:'g81', termino:'Enzima', categoria:'Bioquímica', icono:'⚗️',
  definicion:'Proteína catalizadora biológica que aumenta la velocidad de reacciones sin consumirse. Tiene sitio activo específico (clave-cerradura). Reguladas por temperatura y pH.',
  ejemplo:'La catalasa descompone H₂O₂ → H₂O + O₂ para proteger las células del daño oxidativo.' },

{ id:'g82', termino:'pH Sanguíneo', categoria:'Conceptos Clínicos', icono:'🧪',
  definicion:'Medida de acidez/alcalinidad de la sangre. Rango normal: 7.35-7.45. Menor de 7.35 = acidosis. Mayor de 7.45 = alcalosis. Regulado por pulmones y riñones.',
  ejemplo:'En el ejercicio intenso se produce lactato que baja el pH causando acidosis metabólica.' },

{ id:'g83', termino:'Sistema Inmune Innato', categoria:'Inmunología', icono:'🛡️',
  definicion:'Primera línea de defensa, no específica. Actúa en minutos. Incluye: barreras físicas, neutrófilos, macrófagos, células NK, complemento. No tiene memoria.',
  ejemplo:'Los neutrófilos son los primeros en llegar a un sitio de infección bacteriana.' },

{ id:'g84', termino:'Sistema Inmune Adaptativo', categoria:'Inmunología', icono:'🛡️',
  definicion:'Respuesta específica contra antígenos. Actúa en días. Tiene memoria inmunológica. Involucra linfocitos B (anticuerpos) y T (celular).',
  ejemplo:'Después de la vacunación, el sistema adaptativo genera memoria que dura años.' },

{ id:'g85', termino:'Anticuerpo (Inmunoglobulina)', categoria:'Inmunología', icono:'🔬',
  definicion:'Proteína en forma de Y producida por linfocitos B/plasmocitos. Se une específicamente a un antígeno para neutralizarlo o marcarlo para su destrucción.',
  ejemplo:'Los anticuerpos IgE están elevados en alergias y enfermedades parasitarias.' },
];

// Obtener todas las categorías únicas
const GLOSARIO_CATEGORIAS = [...new Set(GLOSARIO_DATA.map(t => t.categoria))].sort();

console.log(`✅ Glosario cargado: ${GLOSARIO_DATA.length} términos en ${GLOSARIO_CATEGORIAS.length} categorías`);
