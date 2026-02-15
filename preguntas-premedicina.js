// ========================================
// PREGUNTAS: Premedicina
// ========================================

const PREGUNTAS_SALUDPUBLICA = [
    {pregunta:"Según la OMS, salud es:",opciones:["Ausencia de enfermedad","Completo bienestar físico, mental y social","Solo bienestar físico"],correcta:1,explicacion:"Definición OMS incluye tres dimensiones"},
    {pregunta:"En la tríada ecológica, el huésped es:",opciones:["El agente causal","La persona susceptible","El ambiente"],correcta:1,explicacion:"Huésped = organismo susceptible"},
    {pregunta:"Un agente biológico causal puede ser:",opciones:["Radiación","Bacteria","Estrés emocional"],correcta:1,explicacion:"Agentes biológicos: bacterias, virus, hongos, parásitos"},
    {pregunta:"El periodo prepatogénico ocurre:",opciones:["Durante síntomas","Antes de la enfermedad","Después de curar"],correcta:1,explicacion:"Pre = antes de que aparezca patología"},
    {pregunta:"La prevención primaria busca:",opciones:["Evitar que ocurra","Detectar temprano","Rehabilitar"],correcta:0,explicacion:"Primaria previene aparición inicial"},
    {pregunta:"Un signo es:",opciones:["Lo que siente el paciente","Lo que observa el médico","Una opinión"],correcta:1,explicacion:"Signo = dato objetivo medible"},
    {pregunta:"Un síntoma es:",opciones:["Medible","Lo que reporta el paciente","Visible siempre"],correcta:1,explicacion:"Síntoma = subjetivo del paciente"},
    {pregunta:"La fiebre es un:",opciones:["Síntoma","Signo","Síndrome"],correcta:1,explicacion:"Medible con termómetro = signo"},
    {pregunta:"Prevención secundaria incluye:",opciones:["Vacunación","Detección oportuna","Fisioterapia"],correcta:1,explicacion:"Secundaria detecta enfermedad temprano"},
    {pregunta:"Prevención terciaria es:",opciones:["Vacunar","Rehabilitar y evitar complicaciones","Promover salud"],correcta:1,explicacion:"Terciaria: rehabilitación post-enfermedad"},
    // [40 preguntas más de salud pública...]
];

const PREGUNTAS_BIOLOGIA = [
    {pregunta:"La mitocondria produce:",opciones:["Proteínas","ATP (energía)","ADN"],correcta:1,explicacion:"Mitocondria = central energética"},
    {pregunta:"El núcleo celular contiene:",opciones:["Energía","Material genético (ADN)","Solo agua"],correcta:1,explicacion:"Núcleo almacena ADN"},
    {pregunta:"Los ribosomas sintetizan:",opciones:["Lípidos","Proteínas","Carbohidratos"],correcta:1,explicacion:"Ribosomas = fábricas de proteínas"},
    {pregunta:"El retículo endoplasmático rugoso tiene:",opciones:["Mitocondrias","Ribosomas adheridos","Solo lípidos"],correcta:1,explicacion:"RER tiene ribosomas (rugoso)"},
    {pregunta:"El aparato de Golgi:",opciones:["Produce energía","Empaqueta y modifica proteínas","Almacena ADN"],correcta:1,explicacion:"Golgi modifica y empaqueta proteínas"},
    {pregunta:"Los lisosomas contienen:",opciones:["Enzimas digestivas","ADN","Glucosa"],correcta:0,explicacion:"Lisosomas = bolsas de enzimas digestivas"},
    {pregunta:"La pared celular está en:",opciones:["Células animales","Células vegetales","Solo bacterias"],correcta:1,explicacion:"Vegetales y bacterias tienen pared"},
    {pregunta:"Los cloroplastos realizan:",opciones:["Respiración","Fotosíntesis","Mitosis"],correcta:1,explicacion:"Cloroplastos capturan luz para fotosíntesis"},
    {pregunta:"En la glucólisis se producen:",opciones:["2 ATP","38 ATP","0 ATP"],correcta:0,explicacion:"Glucólisis produce 2 ATP netos"},
    {pregunta:"El ciclo de Krebs ocurre en:",opciones:["Citoplasma","Mitocondria","Núcleo"],correcta:1,explicacion:"Krebs en matriz mitocondrial"},
    // [40 preguntas más de biología...]
];

const PREGUNTAS_QUIMICA = [
    {pregunta:"Los carbohidratos están formados por:",opciones:["C, H, O","C, H, N","Solo C"],correcta:0,explicacion:"CHO son carbohidratos"},
    {pregunta:"Los lípidos son:",opciones:["Hidrofílicos","Hidrofóbicos (insolubles en agua)","Proteínas"],correcta:1,explicacion:"Lípidos repelen agua"},
    {pregunta:"Las proteínas están formadas por:",opciones:["Glucosas","Aminoácidos","Ácidos grasos"],correcta:1,explicacion:"Proteínas = cadenas de aminoácidos"},
    {pregunta:"Un enlace peptídico une:",opciones:["Glucosas","Aminoácidos","Nucleótidos"],correcta:1,explicacion:"Enlace peptídico conecta aminoácidos"},
    {pregunta:"El pH neutro es:",opciones:["7","0","14"],correcta:0,explicacion:"pH 7 = neutro"},
    {pregunta:"Un ácido tiene pH:",opciones:["Menor a 7","Mayor a 7","Igual a 7"],correcta:0,explicacion:"pH < 7 = ácido"},
    {pregunta:"Una base tiene pH:",opciones:["< 7","> 7","= 7"],correcta:1,explicacion:"pH > 7 = básico/alcalino"},
    {pregunta:"Los catalizadores:",opciones:["Se consumen","Aceleran reacciones sin consumirse","Detienen reacciones"],correcta:1,explicacion:"Catalizadores aceleran sin gastarse"},
    {pregunta:"Las enzimas son:",opciones:["Lípidos","Catalizadores biológicos (proteínas)","Carbohidratos"],correcta:1,explicacion:"Enzimas = proteínas catalizadoras"},
    {pregunta:"El ATP almacena:",opciones:["Proteínas","Energía química","Información genética"],correcta:1,explicacion:"ATP = moneda energética"},
    // [40 preguntas más de química...]
];

const PREGUNTAS_ANATOMIA = [
    {pregunta:"El corazón tiene:",opciones:["2 cavidades","4 cavidades","6 cavidades"],correcta:1,explicacion:"4 cavidades: 2 aurículas + 2 ventrículos"},
    {pregunta:"Los pulmones están en la cavidad:",opciones:["Abdominal","Torácica","Pélvica"],correcta:1,explicacion:"Pulmones en tórax"},
    {pregunta:"El fémur es:",opciones:["Músculo","El hueso más largo","Órgano"],correcta:1,explicacion:"Fémur = hueso más largo del cuerpo"},
    {pregunta:"La médula espinal está en:",opciones:["Cráneo","Columna vertebral","Fémur"],correcta:1,explicacion:"Columna protege médula espinal"},
    {pregunta:"El cerebro está en:",opciones:["Cavidad craneal","Tórax","Abdomen"],correcta:0,explicacion:"Cráneo protege cerebro"},
    {pregunta:"¿Cuántos huesos tiene el cuerpo humano adulto?",opciones:["106","206","306"],correcta:1,explicacion:"Adulto: ~206 huesos"},
    {pregunta:"La tráquea conduce aire hacia:",opciones:["Esófago","Bronquios","Estómago"],correcta:1,explicacion:"Tráquea → bronquios → pulmones"},
    {pregunta:"El hígado está en el cuadrante:",opciones:["Superior derecho","Inferior izquierdo","Superior izquierdo"],correcta:0,explicacion:"Hígado en cuadrante superior derecho"},
    {pregunta:"El páncreas produce:",opciones:["Bilis","Insulina y enzimas digestivas","Solo ácido"],correcta:1,explicacion:"Páncreas: insulina (endocrino) + enzimas (exocrino)"},
    {pregunta:"Los riñones filtran:",opciones:["Aire","Sangre","Comida"],correcta:1,explicacion:"Riñones filtran sangre → orina"},
    // [40 preguntas más de anatomía...]
];

const PREGUNTAS_FISIOLOGIA = [
    {pregunta:"La insulina es producida por:",opciones:["Hígado","Páncreas","Riñón"],correcta:1,explicacion:"Células beta del páncreas producen insulina"},
    {pregunta:"La presión arterial normal es aproximadamente:",opciones:["120/80 mmHg","80/120","100/100"],correcta:0,explicacion:"120/80 = sistólica/diastólica"},
    {pregunta:"La osmosis es movimiento de:",opciones:["Solutos","Agua","Proteínas"],correcta:1,explicacion:"Osmosis = paso de agua por membrana semipermeable"},
    {pregunta:"Un neurotransmisor es:",opciones:["Neurona","Sustancia química entre neuronas","Órgano"],correcta:1,explicacion:"Neurotransmisores comunican neuronas"},
    {pregunta:"Frecuencia cardíaca normal en reposo:",opciones:["60-100 lpm","30-50","120-150"],correcta:0,explicacion:"Normal: 60-100 latidos/minuto"},
    {pregunta:"La hemoglobina transporta:",opciones:["Glucosa","Oxígeno","Solo CO2"],correcta:1,explicacion:"Hemoglobina lleva O2 en glóbulos rojos"},
    {pregunta:"El glucagón:",opciones:["Baja glucosa","Sube glucosa en sangre","No afecta glucosa"],correcta:1,explicacion:"Glucagón aumenta glucosa sanguínea"},
    {pregunta:"La sinapsis ocurre entre:",opciones:["Huesos","Neuronas","Músculos solamente"],correcta:1,explicacion:"Sinapsis = comunicación neuronal"},
    {pregunta:"El sistema nervioso simpático:",opciones:["Relaja el cuerpo","Prepara para 'lucha o huida'","Solo duerme"],correcta:1,explicacion:"Simpático activa respuesta de estrés"},
    {pregunta:"El sistema parasimpático:",opciones:["Activa estrés","Relaja y 'descansa y digiere'","Solo músculos"],correcta:1,explicacion:"Parasimpático = relajación y digestión"},
    {pregunta:"Los glóbulos blancos (leucocitos) se encargan de:",opciones:["Transportar oxígeno","Defensa inmunológica","Coagulación"],correcta:1,explicacion:"Leucocitos = células de defensa del sistema inmune"},
    {pregunta:"Las plaquetas participan en:",opciones:["Transporte de O2","Coagulación sanguínea","Digestión"],correcta:1,explicacion:"Plaquetas forman coágulos y detienen hemorragias"},
    {pregunta:"La hormona del crecimiento (GH) es producida por:",opciones:["Hipófisis (pituitaria)","Tiroides","Páncreas"],correcta:0,explicacion:"La hipófisis anterior produce GH"},
    {pregunta:"La tiroxina (T4) es producida por:",opciones:["Páncreas","Glándula tiroides","Suprarrenales"],correcta:1,explicacion:"Tiroides produce T3 y T4 que regulan metabolismo"},
    {pregunta:"El cortisol es producido por:",opciones:["Páncreas","Glándulas suprarrenales","Tiroides"],correcta:1,explicacion:"Corteza suprarrenal produce cortisol (hormona del estrés)"},
    {pregunta:"La testosterona es producida principalmente en:",opciones:["Testículos","Próstata","Riñones"],correcta:0,explicacion:"Células de Leydig en testículos producen testosterona"},
    {pregunta:"Los estrógenos son producidos principalmente en:",opciones:["Útero","Ovarios","Tiroides"],correcta:1,explicacion:"Ovarios producen estrógenos (hormonas sexuales femeninas)"},
    {pregunta:"El surfactante pulmonar:",opciones:["Transporta oxígeno","Evita colapso de alveolos","Filtra aire"],correcta:1,explicacion:"Surfactante reduce tensión superficial en alveolos"},
    {pregunta:"La vasopresina (ADH) regula:",opciones:["Glucosa","Equilibrio de agua (retención hídrica)","Temperatura"],correcta:1,explicacion:"ADH aumenta reabsorción de agua en riñones"},
    {pregunta:"La aldosterona regula:",opciones:["Azúcar","Sodio y potasio","Calcio"],correcta:1,explicacion:"Aldosterona retiene Na+ y elimina K+"},
    {pregunta:"El reflejo rotuliano (de la rodilla) es:",opciones:["Voluntario","Reflejo espinal","Consciente"],correcta:1,explicacion:"Reflejo rotuliano es automático/espinal"},
    {pregunta:"La contracción muscular requiere:",opciones:["Solo agua","Calcio y ATP","Solo oxígeno"],correcta:1,explicacion:"Ca2+ inicia contracción, ATP proporciona energía"},
    {pregunta:"La sístole cardíaca es:",opciones:["Relajación","Contracción del corazón","Pausa"],correcta:1,explicacion:"Sístole = contracción que expulsa sangre"},
    {pregunta:"La diástole cardíaca es:",opciones:["Contracción","Relajación y llenado","Pausa completa"],correcta:1,explicacion:"Diástole = relajación, se llena de sangre"},
    {pregunta:"El nódulo sinusal (SA) es:",opciones:["Válvula","Marcapasos natural del corazón","Músculo"],correcta:1,explicacion:"Nódulo SA genera impulsos eléctricos cardíacos"},
    {pregunta:"La bilirrubina proviene de:",opciones:["Digestión de grasas","Degradación de hemoglobina","Síntesis de proteínas"],correcta:1,explicacion:"Bilirrubina resulta de degradar glóbulos rojos viejos"},
    {pregunta:"La bilis es producida por:",opciones:["Hígado","Vesícula biliar","Páncreas"],correcta:0,explicacion:"Hígado produce bilis, vesícula la almacena"},
    {pregunta:"La función principal de la bilis es:",opciones:["Digerir proteínas","Emulsificar grasas","Absorber agua"],correcta:1,explicacion:"Bilis emulsifica lípidos para su digestión"},
    {pregunta:"El filtrado glomerular ocurre en:",opciones:["Túbulos","Glomérulo del nefrón","Vejiga"],correcta:1,explicacion:"Glomérulo filtra sangre → forma orina primitiva"},
    {pregunta:"La reabsorción tubular recupera:",opciones:["Solo desechos","Agua, glucosa, iones útiles","Toxinas"],correcta:1,explicacion:"Túbulos reabsorben sustancias útiles de vuelta a sangre"},
    {pregunta:"El pH sanguíneo normal es aproximadamente:",opciones:["7.4","6.5","8.0"],correcta:0,explicacion:"pH sanguíneo: 7.35-7.45 (ligeramente alcalino)"},
    {pregunta:"La acidosis ocurre cuando el pH sanguíneo:",opciones:["Aumenta > 7.45","Disminuye < 7.35","Se mantiene en 7.4"],correcta:1,explicacion:"Acidosis = pH bajo (< 7.35)"},
    {pregunta:"La alcalosis ocurre cuando el pH sanguíneo:",opciones:["Aumenta > 7.45","Disminuye < 7.35","Es normal"],correcta:0,explicacion:"Alcalosis = pH alto (> 7.45)"},
    {pregunta:"Los pulmones regulan el pH mediante:",opciones:["Sudor","Eliminación de CO2","Orina solamente"],correcta:1,explicacion:"Pulmones eliminan CO2 para regular pH"},
    {pregunta:"Los riñones regulan el pH mediante:",opciones:["Respiración","Excreción de H+ y reabsorción de HCO3-","Solo sudor"],correcta:1,explicacion:"Riñones excretan ácidos y retienen bicarbonato"},
    {pregunta:"La homeostasis es:",opciones:["Enfermedad","Equilibrio interno del organismo","Movimiento"],correcta:1,explicacion:"Homeostasis mantiene condiciones internas estables"},
    {pregunta:"La termorregulación es controlada por:",opciones:["Corazón","Hipotálamo","Pulmones"],correcta:1,explicacion:"Hipotálamo regula temperatura corporal"},
    {pregunta:"Cuando hace frío, el cuerpo:",opciones:["Suda","Tirita para generar calor","No reacciona"],correcta:1,explicacion:"Tiritona = contracción muscular que produce calor"},
    {pregunta:"Cuando hace calor, el cuerpo:",opciones:["Tirita","Suda para enfriarse por evaporación","Deja de respirar"],correcta:1,explicacion:"Sudoración enfría por evaporación del agua"},
    {pregunta:"La inmunidad innata es:",opciones:["Específica y adquirida","Inespecífica y de nacimiento","Solo anticuerpos"],correcta:1,explicacion:"Inmunidad innata: barreras naturales (piel, fagocitos)"},
    {pregunta:"La inmunidad adaptativa es:",opciones:["Inespecífica","Específica y tiene memoria","Solo barreras físicas"],correcta:1,explicacion:"Adaptativa reconoce patógenos específicos y recuerda"},
    {pregunta:"Los linfocitos B producen:",opciones:["Fagocitos","Anticuerpos","Solo células T"],correcta:1,explicacion:"Linfocitos B fabrican anticuerpos (inmunoglobulinas)"},
    {pregunta:"Los linfocitos T:",opciones:["Producen anticuerpos","Destruyen células infectadas","Solo filtran sangre"],correcta:1,explicacion:"Células T atacan células infectadas o cancerosas"},
    {pregunta:"Una vacuna funciona por:",opciones:["Matar todos los gérmenes","Generar memoria inmunológica sin enfermedad","Curar la enfermedad"],correcta:1,explicacion:"Vacunas entrenan al sistema inmune sin causar enfermedad"},
    {pregunta:"El ciclo menstrual dura aproximadamente:",opciones:["7 días","28 días","60 días"],correcta:1,explicacion:"Ciclo menstrual promedio: ~28 días"},
    {pregunta:"La ovulación ocurre aproximadamente el día:",opciones:["1","14","28"],correcta:1,explicacion:"Ovulación típicamente a mitad del ciclo (~día 14)"},
    {pregunta:"La fecundación ocurre en:",opciones:["Útero","Trompas de Falopio","Ovario"],correcta:1,explicacion:"Óvulo se fecunda en trompa de Falopio"},
    {pregunta:"El embarazo dura aproximadamente:",opciones:["3 meses","9 meses (40 semanas)","12 meses"],correcta:1,explicacion:"Gestación humana: ~280 días (40 semanas)"},
    {pregunta:"La placenta permite:",opciones:["Respiración fetal","Intercambio madre-feto sin mezclar sangres","Digestión"],correcta:1,explicacion:"Placenta intercambia nutrientes/O2 sin mezclar sangres"},
    {pregunta:"El cordón umbilical contiene:",opciones:["1 arteria","2 arterias y 1 vena","Solo nervios"],correcta:1,explicacion:"Cordón: 2 arterias (llevan CO2) y 1 vena (trae O2)"},
    {pregunta:"La neurona está formada por:",opciones:["Solo axón","Soma, dendritas y axón","Solo dendritas"],correcta:1,explicacion:"Partes de neurona: cuerpo (soma), dendritas, axón"},
    {pregunta:"El axón conduce impulso:",opciones:["Hacia el soma","Desde el soma hacia fuera","No conduce"],correcta:1,explicacion:"Axón transmite señal desde el cuerpo celular"},
    {pregunta:"Las dendritas:",opciones:["Envían señales","Reciben señales de otras neuronas","Solo estructura"],correcta:1,explicacion:"Dendritas reciben información de otras células"},
    {pregunta:"La vaina de mielina:",opciones:["Ralentiza impulso","Acelera conducción del impulso nervioso","Bloquea impulso"],correcta:1,explicacion:"Mielina aísla y acelera transmisión nerviosa"},
    {pregunta:"La esclerosis múltiple afecta:",opciones:["Solo músculos","Vaina de mielina","Solo huesos"],correcta:1,explicacion:"EM destruye mielina, afectando conducción nerviosa"},
    {pregunta:"El potencial de acción es:",opciones:["Músculo relajado","Impulso eléctrico en neurona","Ausencia de señal"],correcta:1,explicacion:"Potencial de acción = señal eléctrica neuronal"},
    {pregunta:"La acetilcolina es:",opciones:["Hormona","Neurotransmisor","Vitamina"],correcta:1,explicacion:"Acetilcolina transmite señales en sinapsis"},
    {pregunta:"La dopamina es importante en:",opciones:["Solo digestión","Movimiento y recompensa","Solo respiración"],correcta:1,explicacion:"Dopamina regula movimiento, placer y motivación"},
    {pregunta:"La serotonina regula:",opciones:["Solo azúcar","Estado de ánimo y sueño","Solo presión"],correcta:1,explicacion:"Serotonina influye en humor, sueño y apetito"}
];

const PREGUNTAS_PREMEDICINA = [
    ...PREGUNTAS_SALUDPUBLICA,
    ...PREGUNTAS_BIOLOGIA,
    ...PREGUNTAS_QUIMICA,
    ...PREGUNTAS_ANATOMIA,
    ...PREGUNTAS_FISIOLOGIA,
];

console.log("✅ Premedicina cargado:", PREGUNTAS_PREMEDICINA.length, "preguntas");
