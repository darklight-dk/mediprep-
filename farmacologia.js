const MODULO_FARMACOLOGIA = {
    id: 'farmacologia',
    titulo: 'Farmacología',
    descripcion: 'Fármaco, medicamento, farmacocinética, farmacodinamia y toxicología',
    icono: '💊',
    progreso: 0,
    lecciones: [
        {
            id: 'conceptos-basicos-farma',
            titulo: 'Conceptos Básicos de Farmacología',
            tiempo: '3 min', completada: false,
            contenido: `
                <div style="background:rgba(99,102,241,0.12);border-left:4px solid #818cf8;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#818cf8;margin:0 0 0.5rem;">¿Qué es la Farmacología?</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Es el estudio de las acciones y propiedades a través del cual los fármacos generan <strong>cambios en los procesos fisiológicos y bioquímicos</strong> de un organismo.</p>
                </div>
                <div style="display:grid;gap:.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(99,102,241,0.25);padding:.9rem 1rem;border-radius:10px;">
                        <strong style="color:#a5b4fc;">FÁRMACO</strong>
                        <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.88rem;">Toda sustancia utilizada para el <strong>tratamiento, prevención, curación o diagnóstico</strong> de una enfermedad. No incluye excipientes.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(99,102,241,0.25);padding:.9rem 1rem;border-radius:10px;">
                        <strong style="color:#a5b4fc;">MEDICAMENTO</strong>
                        <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.88rem;">Una o más sustancias activas (fármacos) <strong>combinadas con un excipiente</strong> para facilitar su administración. Ejemplo: una tableta = fármaco + excipiente.</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);padding:.9rem 1rem;border-radius:10px;">
                        <strong style="color:#f87171;">TOXICOLOGÍA</strong>
                        <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.88rem;">Estudia la manera en que los <strong>venenos naturales o sintéticos producen efectos nocivos</strong> en los organismos vivos. Se relaciona con sobredosis y envenenamiento.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(99,102,241,0.25);padding:.9rem 1rem;border-radius:10px;">
                        <strong style="color:#a5b4fc;">POSOLOGÍA</strong>
                        <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.88rem;">Rama que estudia la <strong>determinación de la dosis</strong> con base a las características del paciente, la patología y el fármaco.</p>
                    </div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#fbbf24;">💡 Diferencia clave Fármaco vs Medicamento:</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.86rem;">La aspirina (ácido acetilsalicílico) es el <strong>fármaco</strong>. La tableta blanca que compras en la farmacia es el <strong>medicamento</strong> (fármaco + almidón + otros excipientes).</p>
                </div>`
        },
        {
            id: 'farmacocinetica',
            titulo: 'Farmacocinética — LADME',
            tiempo: '4 min', completada: false,
            contenido: `
                <div style="background:rgba(16,185,129,0.12);border-left:4px solid #10b981;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#10b981;margin:0 0 0.5rem;">Farmacocinética</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Estudia la <strong>liberación, absorción, distribución, metabolismo y excreción</strong> del fármaco y sus metabolitos. Lo que el <em>organismo le hace al fármaco</em>.</p>
                    <p style="margin:.5rem 0 0;color:#6ee7b7;font-size:.82rem;font-weight:700;">Nemotecnia: <strong>L-A-D-M-E</strong></p>
                </div>
                <div style="display:grid;gap:.55rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(16,185,129,0.2);padding:.85rem 1rem;border-radius:10px;display:flex;gap:.75rem;align-items:flex-start;">
                        <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:900;color:#6ee7b7;font-size:.82rem;">L</div>
                        <div><strong style="color:#6ee7b7;">Liberación</strong><p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">El fármaco se desprende de su forma farmacéutica (tableta, cápsula, etc.).</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(16,185,129,0.2);padding:.85rem 1rem;border-radius:10px;display:flex;gap:.75rem;align-items:flex-start;">
                        <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:900;color:#6ee7b7;font-size:.82rem;">A</div>
                        <div><strong style="color:#6ee7b7;">Absorción</strong><p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Paso del fármaco al torrente sanguíneo. Vía oral, IV, sublingual, transdérmica.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(16,185,129,0.2);padding:.85rem 1rem;border-radius:10px;display:flex;gap:.75rem;align-items:flex-start;">
                        <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:900;color:#6ee7b7;font-size:.82rem;">D</div>
                        <div><strong style="color:#6ee7b7;">Distribución</strong><p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Transporte del fármaco por sangre hacia los tejidos y órganos diana.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(16,185,129,0.2);padding:.85rem 1rem;border-radius:10px;display:flex;gap:.75rem;align-items:flex-start;">
                        <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:900;color:#6ee7b7;font-size:.82rem;">M</div>
                        <div><strong style="color:#6ee7b7;">Metabolismo (Biotransformación)</strong><p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Transformación química del fármaco, principalmente en el <strong>hígado</strong>. Puede inactivarlo o activarlo.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(16,185,129,0.2);padding:.85rem 1rem;border-radius:10px;display:flex;gap:.75rem;align-items:flex-start;">
                        <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:900;color:#6ee7b7;font-size:.82rem;">E</div>
                        <div><strong style="color:#6ee7b7;">Excreción</strong><p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Eliminación del fármaco del organismo. Principalmente renal (orina). También biliar, pulmonar, sudor.</p></div>
                    </div>
                </div>
                <div style="background:rgba(56,189,248,0.08);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#7dd3fc;">Vías de administración más importantes:</strong>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-top:.5rem;font-size:.84rem;color:#cbd5e1;">
                        <div>💉 <strong>IV</strong> — absorción inmediata (100%)</div>
                        <div>🍬 <strong>Sublingual</strong> — rápida, evita primer paso</div>
                        <div>💊 <strong>Oral</strong> — más usada, efecto de primer paso</div>
                        <div>🩹 <strong>Transdérmica</strong> — lenta y sostenida</div>
                    </div>
                </div>`
        },
        {
            id: 'farmacodinamia',
            titulo: 'Farmacodinamia y Clasificación de Fármacos',
            tiempo: '4 min', completada: false,
            contenido: `
                <div style="background:rgba(168,85,247,0.12);border-left:4px solid #a855f7;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#a855f7;margin:0 0 0.5rem;">Farmacodinamia</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Estudia los <strong>mecanismos a través de los cuales los fármacos generan un cambio fisiológico o bioquímico</strong> en el organismo. Lo que el <em>fármaco le hace al organismo</em>.</p>
                </div>
                <h3 style="color:#a855f7;margin:1rem 0 .75rem;">Mecanismos de acción farmacológica</h3>
                <div style="display:grid;gap:.55rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(168,85,247,0.25);padding:.85rem 1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">Agonista</strong>
                        <p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Fármaco que se une al receptor y <strong>produce el efecto</strong> (activa el receptor). Ej: morfina en receptores opioides.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(168,85,247,0.25);padding:.85rem 1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">Antagonista</strong>
                        <p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Fármaco que se une al receptor pero <strong>NO produce efecto</strong>, bloquea la acción del agonista. Ej: naloxona bloquea los opioides.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(168,85,247,0.25);padding:.85rem 1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">Agonista parcial</strong>
                        <p style="margin:.2rem 0 0;color:#94a3b8;font-size:.85rem;">Activa el receptor pero con <strong>menor eficacia</strong> que el agonista completo. Puede actuar como antagonista si hay agonista total presente.</p>
                    </div>
                </div>
                <h3 style="color:#a855f7;margin:1rem 0 .75rem;">Grupos farmacológicos principales</h3>
                <div style="overflow-x:auto;margin-bottom:1rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:.83rem;">
                        <thead><tr style="background:rgba(168,85,247,0.2);">
                            <th style="padding:.55rem .7rem;text-align:left;color:#c4b5fd;border-bottom:1px solid rgba(168,85,247,0.3);">Grupo</th>
                            <th style="padding:.55rem .7rem;text-align:left;color:#c4b5fd;border-bottom:1px solid rgba(168,85,247,0.3);">Acción</th>
                            <th style="padding:.55rem .7rem;text-align:left;color:#c4b5fd;border-bottom:1px solid rgba(168,85,247,0.3);">Ejemplo</th>
                        </tr></thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:.55rem .7rem;color:#e2e8f0;">Analgésicos</td><td style="padding:.55rem .7rem;color:#94a3b8;">Alivio del dolor</td><td style="padding:.55rem .7rem;color:#94a3b8;">Paracetamol, ibuprofeno</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:.55rem .7rem;color:#e2e8f0;">Antibióticos</td><td style="padding:.55rem .7rem;color:#94a3b8;">Eliminan bacterias</td><td style="padding:.55rem .7rem;color:#94a3b8;">Amoxicilina, azitromicina</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:.55rem .7rem;color:#e2e8f0;">Antihipertensivos</td><td style="padding:.55rem .7rem;color:#94a3b8;">Reducen la TA</td><td style="padding:.55rem .7rem;color:#94a3b8;">Enalapril, amlodipino</td></tr>
                            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:.55rem .7rem;color:#e2e8f0;">Antiinflamatorios (AINE)</td><td style="padding:.55rem .7rem;color:#94a3b8;">Reducen inflamación</td><td style="padding:.55rem .7rem;color:#94a3b8;">Naproxeno, diclofenaco</td></tr>
                            <tr><td style="padding:.55rem .7rem;color:#e2e8f0;">Hipoglucemiantes</td><td style="padding:.55rem .7rem;color:#94a3b8;">Reducen glucosa</td><td style="padding:.55rem .7rem;color:#94a3b8;">Metformina, insulina</td></tr>
                        </tbody>
                    </table>
                </div>
                <div style="background:rgba(245,158,11,0.1);border-radius:10px;padding:.85rem 1rem;text-align:center;">
                    <p style="margin:0;color:#eab308;font-size:.9rem;">💡 <strong>¡Módulo completado! Realiza la evaluación.</strong></p>
                </div>`
        }
    ],
    evaluacion: [
        { pregunta: "La farmacocinética estudia:", opciones: ["Los mecanismos de acción del fármaco en el organismo","La liberación, absorción, distribución, metabolismo y excreción del fármaco","La determinación de la dosis correcta según el paciente","Los efectos nocivos de los venenos en el organismo"], correcta: 1, explicacion: "La farmacocinética estudia lo que el organismo le hace al fármaco: LADME (Liberación, Absorción, Distribución, Metabolismo, Excreción).", categoria: "Farmacología" },
        { pregunta: "La farmacodinamia estudia:", opciones: ["La absorción y distribución del fármaco","La dosificación correcta del medicamento","Los mecanismos a través de los cuales los fármacos generan cambios fisiológicos o bioquímicos","La eliminación del fármaco por vía renal"], correcta: 2, explicacion: "La farmacodinamia estudia lo que el fármaco le hace al organismo: sus mecanismos de acción, efectos y relación dosis-respuesta.", categoria: "Farmacología" },
        { pregunta: "Un FÁRMACO se define como:", opciones: ["Una sustancia combinada con excipientes para facilitar su administración","Toda sustancia utilizada para el tratamiento, prevención, curación o diagnóstico de una enfermedad","Un veneno natural que produce efectos nocivos","La forma farmacéutica lista para consumir"], correcta: 1, explicacion: "El fármaco es la sustancia activa con efecto terapéutico. El medicamento incluye al fármaco + excipientes.", categoria: "Farmacología" },
        { pregunta: "¿Cuál es la diferencia entre fármaco y medicamento?", opciones: ["Son sinónimos exactos","El fármaco incluye excipientes; el medicamento no","El medicamento es la sustancia activa + excipientes; el fármaco es solo la sustancia activa","El fármaco se aplica por vía IV; el medicamento por vía oral"], correcta: 2, explicacion: "Fármaco = sustancia activa. Medicamento = fármaco + excipientes (sustancias inertes que facilitan la administración).", categoria: "Farmacología" },
        { pregunta: "La posología es la rama de la farmacología que estudia:", opciones: ["Los mecanismos de absorción","La determinación de la dosis con base en el paciente, patología y fármaco","Los efectos adversos de los medicamentos","La excreción renal de los fármacos"], correcta: 1, explicacion: "La posología se centra en determinar la dosis adecuada considerando las características individuales del paciente, la enfermedad y las propiedades del fármaco.", categoria: "Farmacología" },
        { pregunta: "La toxicología es el estudio de:", opciones: ["Los fármacos que tratan enfermedades infecciosas","La manera en que los venenos naturales o sintéticos producen efectos nocivos en los organismos vivos","La síntesis de nuevos medicamentos","La farmacocinética de los analgésicos"], correcta: 1, explicacion: "La toxicología estudia los efectos dañinos de sustancias (venenos, tóxicos) sobre los organismos vivos, incluyendo sobredosis de fármacos.", categoria: "Farmacología" },
        { pregunta: "La nemotecnia LADME corresponde a:", opciones: ["Lisis, Adhesión, Difusión, Metabolismo, Excreción","Liberación, Absorción, Distribución, Metabolismo, Excreción","Ligando, Activación, Distribución, Mecanismo, Efecto","Liberación, Agonismo, Dosis, Membrana, Eliminación"], correcta: 1, explicacion: "LADME: Liberación, Absorción, Distribución, Metabolismo y Excreción. Resume los procesos farmacocinéticos.", categoria: "Farmacología" },
        { pregunta: "¿Cuál vía de administración tiene absorción del 100% (biodisponibilidad completa)?", opciones: ["Oral","Sublingual","Intravenosa (IV)","Transdérmica"], correcta: 2, explicacion: "La vía intravenosa tiene biodisponibilidad del 100% porque el fármaco llega directamente al torrente sanguíneo sin pasar por absorción.", categoria: "Farmacología" },
        { pregunta: "El metabolismo de la mayoría de los fármacos ocurre principalmente en:", opciones: ["Los riñones","El hígado","El intestino delgado","Los pulmones"], correcta: 1, explicacion: "El hígado es el principal órgano de biotransformación farmacológica. Contiene enzimas del citocromo P450 que metabolizan la mayoría de los fármacos.", categoria: "Farmacología" },
        { pregunta: "Un fármaco AGONISTA es aquel que:", opciones: ["Se une al receptor pero no produce efecto","Se une al receptor y produce una respuesta fisiológica","Bloquea el receptor impidiendo la acción del agonista","Reduce la afinidad del receptor por su ligando natural"], correcta: 1, explicacion: "El agonista se une al receptor y lo activa, produciendo el efecto farmacológico. Tiene afinidad y eficacia.", categoria: "Farmacología" },
        { pregunta: "Un fármaco ANTAGONISTA es aquel que:", opciones: ["Activa el receptor con mayor potencia que el agonista","Se une al receptor y produce un efecto opuesto","Se une al receptor sin producir efecto, bloqueando al agonista","Aumenta la síntesis de receptores"], correcta: 2, explicacion: "El antagonista tiene afinidad por el receptor pero no eficacia (no activa). Compite con el agonista y bloquea su acción.", categoria: "Farmacología" },
        { pregunta: "La naloxona, que revierte los efectos de los opioides, es un ejemplo de:", opciones: ["Agonista opioide","Antagonista opioide","Agonista parcial opioide","Agonista inverso"], correcta: 1, explicacion: "La naloxona es un antagonista de los receptores opioides μ. Desplaza a la morfina u otros opioides del receptor, revirtiendo su efecto.", categoria: "Farmacología" },
        { pregunta: "¿Cuál es la principal vía de excreción de los fármacos?", opciones: ["Biliar (heces)","Pulmonar (aire espirado)","Renal (orina)","Cutánea (sudor)"], correcta: 2, explicacion: "La vía renal es la principal vía de eliminación de fármacos y sus metabolitos. Por eso, en pacientes con insuficiencia renal se debe ajustar la dosis.", categoria: "Farmacología" },
        { pregunta: "El 'efecto de primer paso' ocurre cuando el fármaco administrado por vía oral:", opciones: ["Se absorbe directamente en el estómago","Es metabolizado en el hígado antes de llegar a la circulación sistémica","Provoca irritación gastrointestinal","Se distribuye rápidamente a los tejidos grasos"], correcta: 1, explicacion: "El efecto de primer paso hepático reduce la biodisponibilidad de muchos fármacos orales, ya que son metabolizados en el hígado antes de llegar a la circulación sistémica.", categoria: "Farmacología" },
        { pregunta: "Los antiinflamatorios no esteroideos (AINE) como el ibuprofeno actúan:", opciones: ["Bloqueando los receptores de histamina","Inhibiendo la enzima ciclooxigenasa (COX)","Activando los receptores opioides","Bloqueando los canales de calcio"], correcta: 1, explicacion: "Los AINE inhiben la ciclooxigenasa (COX-1 y COX-2), enzima responsable de la síntesis de prostaglandinas que median dolor, fiebre e inflamación.", categoria: "Farmacología" },
        { pregunta: "La metformina, usada en diabetes tipo 2, es un ejemplo de fármaco:", opciones: ["Analgésico","Antibiótico","Hipoglucemiante","Antihipertensivo"], correcta: 2, explicacion: "La metformina es el hipoglucemiante oral de primera línea en DM2. Reduce la glucosa principalmente inhibiendo la gluconeogénesis hepática.", categoria: "Farmacología" },
        { pregunta: "¿Cuál vía de administración evita el efecto de primer paso hepático?", opciones: ["Oral","Rectal exclusivamente","Sublingual","Intramuscular"], correcta: 2, explicacion: "La vía sublingual permite la absorción directa al torrente sanguíneo a través de las venas sublinguales, evitando el paso hepático. También lo evitan IV, transdérmica e inhalatoria.", categoria: "Farmacología" },
        { pregunta: "La amoxicilina es un ejemplo de:", opciones: ["Analgésico opioide","Antibiótico de amplio espectro","Antihipertensivo","Hipoglucemiante"], correcta: 1, explicacion: "La amoxicilina es un antibiótico de la familia de las penicilinas, activo contra bacterias grampositivas y algunas gramnegativas.", categoria: "Farmacología" },
        { pregunta: "¿Qué diferencia la farmacodinamia de la farmacocinética?", opciones: ["La farmacodinamia estudia la absorción; la farmacocinética el efecto","La farmacodinamia estudia lo que el fármaco hace al organismo; la farmacocinética lo que el organismo hace al fármaco","Son sinónimos","La farmacocinética estudia solo la excreción"], correcta: 1, explicacion: "Frase clave: Farmacocinética = lo que el organismo le hace al fármaco (LADME). Farmacodinamia = lo que el fármaco le hace al organismo (mecanismo de acción).", categoria: "Farmacología" },
        { pregunta: "Un excipiente en un medicamento es:", opciones: ["La sustancia activa con efecto terapéutico","Una sustancia inerte que facilita la administración del fármaco","Un metabolito del fármaco","Un antagonista del principio activo"], correcta: 1, explicacion: "Los excipientes son sustancias farmacológicamente inactivas que ayudan a formular el medicamento (aglutinantes, colorantes, saborizantes, conservadores).", categoria: "Farmacología" },
        { pregunta: "¿Cuál de los siguientes fármacos es analgésico antipirético NO antiinflamatorio?", opciones: ["Ibuprofeno","Naproxeno","Paracetamol (acetaminofén)","Diclofenaco"], correcta: 2, explicacion: "El paracetamol tiene efecto analgésico y antipirético pero no antiinflamatorio significativo, a diferencia de los AINE como ibuprofeno y naproxeno.", categoria: "Farmacología" }
    ]
};
console.log('✅ Módulo Farmacología cargado —', MODULO_FARMACOLOGIA.lecciones.length, 'lecciones,', MODULO_FARMACOLOGIA.evaluacion.length, 'preguntas');
