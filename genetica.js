const MODULO_GENETICA = {
    id: 'genetica',
    titulo: 'Genética y Leyes de Mendel',
    descripcion: 'Conceptos de herencia, genotipos, fenotipos y leyes de Mendel',
    icono: '🧬',
    progreso: 0,
    lecciones: [
        {
            id: 'conceptos-genetica',
            titulo: 'Conceptos Fundamentales de Genética',
            tiempo: '4 min', completada: false,
            contenido: `
                <div style="background:rgba(16,185,129,0.12);border-left:4px solid #10b981;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#10b981;margin:0 0 .4rem;">¿Qué es la Genética?</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.9rem;">Rama de la biología encargada del estudio de la <strong>herencia y los mecanismos de transmisión y expresión de los genes</strong> de generación en generación.</p>
                </div>
                <div style="display:grid;gap:.55rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.22);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#6ee7b7;">GEN</strong>
                        <p style="margin:.25rem 0 0;color:#94a3b8;font-size:.86rem;">Unidad básica de la herencia. Segmento de ADN que codifica para una proteína o ARN funcional. Cada gen ocupa un <strong>locus</strong> específico en un cromosoma.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.22);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#6ee7b7;">ALELO</strong>
                        <p style="margin:.25rem 0 0;color:#94a3b8;font-size:.86rem;">Cada una de las formas alternativas en que puede presentarse un gen. Ejemplo: para el color de ojos, los alelos pueden ser "marrón" (dominante) o "azul" (recesivo).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.22);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#6ee7b7;">CROMOSOMA</strong>
                        <p style="margin:.25rem 0 0;color:#94a3b8;font-size:.86rem;">Estructuras altamente organizadas por condensación del ADN y proteínas (histonas). Son portadores de los genes. Humanos tienen <strong>46 cromosomas</strong> (23 pares).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1px solid rgba(16,185,129,0.22);border-radius:10px;padding:.85rem 1rem;">
                        <strong style="color:#6ee7b7;">LOCUS</strong>
                        <p style="margin:.25rem 0 0;color:#94a3b8;font-size:.86rem;">Ubicación física y específica de un gen dentro de un cromosoma. Los genes alélicos ocupan el mismo locus en cromosomas homólogos.</p>
                    </div>
                </div>
                <div style="background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.2);border-radius:12px;padding:1rem;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;">
                        <div>
                            <strong style="color:#7dd3fc;">GENOTIPO</strong>
                            <p style="margin:.2rem 0 0;color:#94a3b8;font-size:.84rem;">Constitución genética del individuo. <strong>No es perceptible a la vista</strong> (los alelos internos). Ej: AA, Aa, aa</p>
                        </div>
                        <div>
                            <strong style="color:#7dd3fc;">FENOTIPO</strong>
                            <p style="margin:.2rem 0 0;color:#94a3b8;font-size:.84rem;"><strong>Características físicas observables</strong> del individuo. Resultado de la interacción genotipo + ambiente.</p>
                        </div>
                    </div>
                </div>`
        },
        {
            id: 'tipos-genotipo',
            titulo: 'Tipos de Genotipo e Hibridación',
            tiempo: '3 min', completada: false,
            contenido: `
                <h3 style="color:#a855f7;margin:0 0 .75rem;">Tipos de Genotipo</h3>
                <div style="display:grid;gap:.55rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(168,85,247,0.35);border-radius:12px;padding:1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem;">
                            <strong style="color:#c4b5fd;font-size:.95rem;">HOMOCIGOTO DOMINANTE</strong>
                            <span style="background:rgba(168,85,247,0.2);color:#c4b5fd;padding:.15rem .55rem;border-radius:20px;font-size:.72rem;font-weight:800;font-family:monospace;">AA</span>
                        </div>
                        <p style="margin:0;color:#94a3b8;font-size:.86rem;">Par de alelos dominantes iguales. Expresa el carácter dominante. Ejemplo: AA = semilla amarilla en guisantes de Mendel.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(99,102,241,0.35);border-radius:12px;padding:1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem;">
                            <strong style="color:#a5b4fc;font-size:.95rem;">HOMOCIGOTO RECESIVO</strong>
                            <span style="background:rgba(99,102,241,0.2);color:#a5b4fc;padding:.15rem .55rem;border-radius:20px;font-size:.72rem;font-weight:800;font-family:monospace;">aa</span>
                        </div>
                        <p style="margin:0;color:#94a3b8;font-size:.86rem;">Par de alelos recesivos iguales. Solo expresa el carácter recesivo cuando están ambos presentes. Ejemplo: aa = semilla verde.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(56,189,248,0.35);border-radius:12px;padding:1rem;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem;">
                            <strong style="color:#7dd3fc;font-size:.95rem;">HETEROCIGOTO (Híbrido)</strong>
                            <span style="background:rgba(56,189,248,0.2);color:#7dd3fc;padding:.15rem .55rem;border-radius:20px;font-size:.72rem;font-weight:800;font-family:monospace;">Aa</span>
                        </div>
                        <p style="margin:0;color:#94a3b8;font-size:.86rem;">Par de alelos diferentes. El alelo dominante (A) enmascara al recesivo. El fenotipo es dominante, pero <strong>porta</strong> el alelo recesivo.</p>
                    </div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);border-radius:12px;padding:1rem;margin-bottom:.75rem;">
                    <strong style="color:#fbbf24;">HÍBRIDO vs HETEROCIGOTO</strong>
                    <p style="margin:.3rem 0 0;color:#cbd5e1;font-size:.86rem;"><strong>Heterocigoto (Aa):</strong> tiene dos alelos diferentes del mismo gen, en la misma especie.<br>
                    <strong>Híbrido:</strong> organismo formado a partir de la cruza de dos padres de <strong>diferente especie</strong>. Ej: mula (caballo × burro).</p>
                </div>
                <div style="background:rgba(16,185,129,0.1);border-radius:10px;padding:.85rem 1rem;">
                    <strong style="color:#6ee7b7;">💡 Para el EXANI: Cuadro de Punnett</strong>
                    <div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:2px;margin-top:.55rem;font-size:.85rem;text-align:center;max-width:200px;">
                        <div style="padding:.3rem;"></div>
                        <div style="padding:.3rem;color:#6ee7b7;font-weight:700;">A</div>
                        <div style="padding:.3rem;color:#6ee7b7;font-weight:700;">a</div>
                        <div style="padding:.3rem;color:#6ee7b7;font-weight:700;">A</div>
                        <div style="padding:.3rem;background:rgba(16,185,129,0.2);border-radius:4px;color:#e2e8f0;">AA</div>
                        <div style="padding:.3rem;background:rgba(16,185,129,0.15);border-radius:4px;color:#e2e8f0;">Aa</div>
                        <div style="padding:.3rem;color:#6ee7b7;font-weight:700;">a</div>
                        <div style="padding:.3rem;background:rgba(16,185,129,0.15);border-radius:4px;color:#e2e8f0;">Aa</div>
                        <div style="padding:.3rem;background:rgba(239,68,68,0.15);border-radius:4px;color:#fca5a5;">aa</div>
                    </div>
                    <p style="margin:.5rem 0 0;color:#94a3b8;font-size:.8rem;">Cruza Aa × Aa: 1AA : 2Aa : 1aa (genotipo) → 3 dominante : 1 recesivo (fenotipo)</p>
                </div>`
        },
        {
            id: 'leyes-mendel',
            titulo: 'Las 3 Leyes de Mendel',
            tiempo: '4 min', completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:8px;margin-bottom:1rem;">
                    <h4 style="color:#fb923c;margin:0 0 .4rem;">Gregor Mendel (1822–1884)</h4>
                    <p style="margin:0;color:#e2e8f0;font-size:.88rem;">Monje austriaco que realizó experimentos con guisantes (<em>Pisum sativum</em>) y estableció las bases de la herencia genética. Sus 3 leyes fundamentales.</p>
                </div>
                <div style="display:grid;gap:.7rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(99,102,241,0.35);border-radius:12px;padding:1.1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(99,102,241,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#a5b4fc;">1°</div>
                            <strong style="color:#a5b4fc;">Primera Ley — Principio de Uniformidad</strong>
                        </div>
                        <p style="margin:0;color:#cbd5e1;font-size:.86rem;line-height:1.6;">Al cruzar dos individuos <strong>homocigotos puros</strong> (AA × aa), toda la F1 presenta el <strong>mismo fenotipo</strong> (Aa = fenotipo dominante). La generación filial 1 es uniforme.</p>
                        <div style="background:rgba(99,102,241,0.1);border-radius:6px;padding:.45rem .6rem;margin-top:.5rem;">
                            <span style="font-size:.8rem;color:#a5b4fc;">AA × aa → <strong>100% Aa</strong> (todos fenotipo dominante)</span>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(16,185,129,0.35);border-radius:12px;padding:1.1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#6ee7b7;">2°</div>
                            <strong style="color:#6ee7b7;">Segunda Ley — Principio de Segregación</strong>
                        </div>
                        <p style="margin:0;color:#cbd5e1;font-size:.86rem;line-height:1.6;">Al cruzar los <strong>híbridos F1</strong> (Aa × Aa), los alelos se <strong>separan</strong> durante la formación de gametos. Resultado en F2: <strong>3 dominante : 1 recesivo</strong>.</p>
                        <div style="background:rgba(16,185,129,0.1);border-radius:6px;padding:.45rem .6rem;margin-top:.5rem;">
                            <span style="font-size:.8rem;color:#6ee7b7;">Aa × Aa → <strong>1AA : 2Aa : 1aa</strong> → proporción fenotípica <strong>3:1</strong></span>
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.9);border:1.5px solid rgba(251,146,60,0.35);border-radius:12px;padding:1.1rem;">
                        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem;">
                            <div style="width:32px;height:32px;border-radius:8px;background:rgba(251,146,60,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;color:#fbbf24;">3°</div>
                            <strong style="color:#fbbf24;">Tercera Ley — Principio de Distribución Independiente</strong>
                        </div>
                        <p style="margin:0;color:#cbd5e1;font-size:.86rem;line-height:1.6;">Los alelos de genes en <strong>diferentes cromosomas</strong> se distribuyen de forma <strong>independiente</strong> durante la formación de gametos. Se aplica a dihíbridos. Resultado F2: <strong>9:3:3:1</strong>.</p>
                        <div style="background:rgba(251,146,60,0.1);border-radius:6px;padding:.45rem .6rem;margin-top:.5rem;">
                            <span style="font-size:.8rem;color:#fbbf24;">AaBb × AaBb → proporción fenotípica <strong>9:3:3:1</strong></span>
                        </div>
                    </div>
                </div>
                <div style="background:rgba(245,158,11,0.1);border-radius:10px;padding:.85rem 1rem;text-align:center;">
                    <p style="margin:0;color:#eab308;">💡 <strong>¡Módulo completado! Realiza la evaluación.</strong></p>
                </div>`
        }
    ],
    evaluacion: [
        { pregunta: "La genética es la rama de la biología que estudia:", opciones: ["La estructura del ADN exclusivamente","La herencia y los mecanismos de transmisión y expresión de los genes","Las mutaciones cromosómicas únicamente","La síntesis de proteínas"], correcta: 1, explicacion: "La genética estudia la herencia, es decir, cómo los caracteres se transmiten de padres a hijos, y los mecanismos moleculares de expresión génica.", categoria: "Genética" },
        { pregunta: "Un ALELO es:", opciones: ["La ubicación de un gen en el cromosoma","La unidad básica de la herencia","Cada una de las formas alternativas en que puede presentarse un gen","El conjunto de cromosomas del individuo"], correcta: 2, explicacion: "Los alelos son las diferentes versiones de un mismo gen. Por ejemplo, el gen del color de ojos tiene alelos como marrón (B) y azul (b).", categoria: "Genética" },
        { pregunta: "El GENOTIPO se define como:", opciones: ["Las características físicas observables del individuo","La constitución genética del individuo, no perceptible a la vista","El fenotipo más el ambiente","El número de cromosomas del individuo"], correcta: 1, explicacion: "El genotipo es la información genética interna del individuo (sus alelos). No se ve directamente, a diferencia del fenotipo.", categoria: "Genética" },
        { pregunta: "El FENOTIPO es:", opciones: ["Los genes que el individuo posee","La secuencia de ADN del organismo","El conjunto de características físicas observables del individuo","Solo los genes dominantes expresados"], correcta: 2, explicacion: "El fenotipo es la expresión visible del genotipo (color de piel, altura, tipo de sangre). Resulta de la interacción genotipo + factores ambientales.", categoria: "Genética" },
        { pregunta: "Un individuo HOMOCIGOTO DOMINANTE tiene genotipo:", opciones: ["aa","Aa","AA","AaAA"], correcta: 2, explicacion: "Homocigoto dominante = par de alelos dominantes iguales (AA). Expresa el carácter dominante y no porta el alelo recesivo.", categoria: "Genética" },
        { pregunta: "Un individuo HETEROCIGOTO tiene genotipo:", opciones: ["AA","aa","Aa","AABB"], correcta: 2, explicacion: "El heterocigoto (Aa) tiene dos alelos diferentes para un mismo gen. Expresa el fenotipo dominante pero porta el alelo recesivo.", categoria: "Genética" },
        { pregunta: "El LOCUS genético es:", opciones: ["La forma alternativa de un gen","La ubicación física específica de un gen en un cromosoma","El par de alelos de un individuo","La proteína codificada por un gen"], correcta: 1, explicacion: "El locus es la posición precisa que ocupa un gen en el mapa del cromosoma. Los alelos ocupan el mismo locus en cromosomas homólogos.", categoria: "Genética" },
        { pregunta: "La Primera Ley de Mendel (Principio de Uniformidad) establece que:", opciones: ["En F2 la proporción fenotípica es 3:1","Al cruzar dos homocigotos puros, toda la F1 presenta el mismo fenotipo dominante","Los alelos se separan independientemente","Los genes en diferentes cromosomas se distribuyen libremente"], correcta: 1, explicacion: "Al cruzar AA × aa, toda la F1 es Aa (heterocigota) y presenta fenotipo dominante: 100% de uniformidad.", categoria: "Genética" },
        { pregunta: "La Segunda Ley de Mendel (Principio de Segregación) establece que:", opciones: ["Toda la F1 es idéntica","Los alelos se separan al formarse los gametos; en F2 la proporción es 3:1","Los genes en cromosomas distintos se distribuyen independientemente","No existe dominancia entre alelos"], correcta: 1, explicacion: "Los dos alelos de un gen se separan durante la meiosis (formación de gametos). Cruza F1×F1 (Aa×Aa): 1AA:2Aa:1aa → proporción fenotípica 3 dominante:1 recesivo.", categoria: "Genética" },
        { pregunta: "La proporción fenotípica en F2 de un cruzamiento monohíbrido (Aa × Aa) es:", opciones: ["1:1","1:2:1","3:1","9:3:3:1"], correcta: 2, explicacion: "Aa × Aa → 1AA:2Aa:1aa en genotipo. Fenotipo: 3 con carácter dominante (AA + 2Aa) : 1 con carácter recesivo (aa). Proporción 3:1.", categoria: "Genética" },
        { pregunta: "La Tercera Ley de Mendel establece que:", opciones: ["Los alelos dominantes siempre se expresan","Los genes ubicados en diferentes cromosomas se distribuyen de forma independiente","La F1 siempre es uniforme","Los genes ligados al sexo tienen herencia especial"], correcta: 1, explicacion: "El principio de distribución independiente aplica a genes en cromosomas no homólogos. Cada par de alelos se distribuye independientemente de los demás durante la meiosis.", categoria: "Genética" },
        { pregunta: "La proporción fenotípica en F2 de un cruzamiento dihíbrido (AaBb × AaBb) es:", opciones: ["3:1","1:2:1","9:3:3:1","1:1:1:1"], correcta: 2, explicacion: "El cruzamiento dihíbrido AaBb × AaBb produce en F2 la proporción 9:3:3:1 (9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb), según la Tercera Ley de Mendel.", categoria: "Genética" },
        { pregunta: "Un HÍBRIDO en genética es:", opciones: ["Un individuo homocigoto dominante","Un individuo heterocigoto para un gen","Un organismo formado por la cruza de dos padres de diferente especie","Un individuo con mutación cromosómica"], correcta: 2, explicacion: "El híbrido resulta de la cruza entre individuos de diferentes especies (ej: mula = caballo × burro). No confundir con heterocigoto, que es una cruza dentro de la misma especie.", categoria: "Genética" },
        { pregunta: "Los cromosomas humanos normales son:", opciones: ["23 cromosomas (haploides)","46 cromosomas organizados en 23 pares","48 cromosomas en 24 pares","44 autosomas más 2 sexuales"], correcta: 1, explicacion: "Los humanos tienen 46 cromosomas (2n=46): 44 autosomas (22 pares) + 2 cromosomas sexuales (XX en mujeres, XY en hombres).", categoria: "Genética" },
        { pregunta: "Si en un cruzamiento monohíbrido de F1 (Aa × Aa) nacen 100 individuos, ¿cuántos aproximadamente expresarán el fenotipo recesivo?", opciones: ["0 individuos","25 individuos","50 individuos","75 individuos"], correcta: 1, explicacion: "La proporción fenotípica Aa×Aa es 3:1. De 100 individuos: 75 fenotipo dominante y 25 fenotipo recesivo (aa).", categoria: "Genética" },
        { pregunta: "¿Cuál de los siguientes genotipos corresponde a un homocigoto recesivo?", opciones: ["BB","Bb","bB","bb"], correcta: 3, explicacion: "El homocigoto recesivo tiene los dos alelos recesivos (bb). Solo expresa el carácter recesivo cuando ambos alelos son iguales y recesivos.", categoria: "Genética" },
        { pregunta: "En la Primera Ley de Mendel, al cruzar plantas de semilla amarilla pura (AA) con semilla verde pura (aa), la generación F1 es:", opciones: ["100% aa (verde)","50% AA y 50% aa","100% Aa (amarilla — fenotipo dominante)","50% Aa y 50% aa"], correcta: 2, explicacion: "AA × aa → 100% Aa. Toda la F1 es heterocigota y presenta fenotipo dominante (amarilla). Esto es la uniformidad de la F1.", categoria: "Genética" },
        { pregunta: "¿Qué son los cromosomas HOMÓLOGOS?", opciones: ["Cromosomas idénticos de células clónicas","Cromosomas del mismo par que tienen la misma longitud y posición de genes, pero pueden tener diferentes alelos","Cromosomas sexuales únicamente","Cromosomas que han sufrido crossing over"], correcta: 1, explicacion: "Los cromosomas homólogos son pares de cromosomas (uno materno y uno paterno) con los mismos genes en los mismos loci, aunque pueden tener diferentes alelos.", categoria: "Genética" },
        { pregunta: "La meiosis es importante para la genética mendeliana porque:", opciones: ["Replica el ADN sin separar los cromosomas","Separa los alelos en gametos haploides, permitiendo la combinación al fecundarse","Produce células somáticas diploides","Solo ocurre en organismos unicelulares"], correcta: 1, explicacion: "Durante la meiosis, los cromosomas homólogos (y sus alelos) se segregan en gametos haploides. Esto es el fundamento de la Segunda y Tercera Ley de Mendel.", categoria: "Genética" },
        { pregunta: "¿Qué nombre reciben los descendientes de la primera generación filial en experimentos de Mendel?", opciones: ["Generación parental (P)","Primera generación filial (F1)","Segunda generación filial (F2)","Generación de retrocruzamiento"], correcta: 1, explicacion: "La nomenclatura mendeliana: P = generación parental (progenitores puros), F1 = primera generación filial (hijos), F2 = segunda generación filial (nietos).", categoria: "Genética" }
    ]
};
console.log('✅ Módulo Genética cargado —', MODULO_GENETICA.lecciones.length, 'lecciones,', MODULO_GENETICA.evaluacion.length, 'preguntas');
