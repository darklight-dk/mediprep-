// ============================================
// MÓDULO: APARATO DIGESTIVO
// Contenido EXANI-II Premedicina
// ============================================

const MODULO_APARATO_DIGESTIVO = {
    id: 'aparato-digestivo',
    titulo: 'Aparato Digestivo',
    descripcion: 'Órganos, digestión, absorción y patologías digestivas',
    icono: '🫄',
    progreso: 0,
    lecciones: [

        {
            id: 'cavidad-oral-esofago',
            titulo: 'Boca, Faringe y Esófago',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">El Aparato Digestivo</h4>
                    <p style="margin:0;line-height:1.6;">Tubo de ~9 metros desde la boca hasta el ano. Función: ingestión → digestión → absorción → eliminación de nutrientes. Se complementa con glándulas anexas (hígado, páncreas, vesícula biliar).</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Cavidad Oral (Boca)</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(251,146,60,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">Dientes</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Dentición primaria: 20 dientes. Definitiva: 32 dientes (incluye 4 muelas del juicio). Tipos: incisivos (cortar), caninos (desgarrar), premolares y molares (triturar).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(251,146,60,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">Lengua</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Músculo estriado voluntario. Funciones: masticación, deglución, fonación y gusto. Contiene las papilas gustativas (dulce, salado, ácido, amargo y umami).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(251,146,60,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">Glándulas Salivales</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Parótidas (más grandes, afectadas en paperas), submandibulares y sublinguales. Producen ~1.5 L/día de saliva. Contienen <strong>amilasa salival</strong> (ptialina) que inicia digestión de carbohidratos.</p>
                    </div>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Faringe y Esófago</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.9rem;border-radius:10px;border:1px solid rgba(251,146,60,0.15);">
                        <strong style="color:#fdba74;">Faringe</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Cruce entre vía aérea y digestiva. Deglución: proceso reflejo donde la epiglotis cierra la laringe para dirigir el bolo al esófago.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.9rem;border-radius:10px;border:1px solid rgba(251,146,60,0.15);">
                        <strong style="color:#fdba74;">Esófago</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Tubo muscular de ~25 cm. Conecta faringe con estómago. Solo conduce el bolo mediante <strong>peristaltismo</strong>. No digiere ni absorbe. Tiene esfínter esofágico superior e inferior (cardia). El RGE ocurre por incompetencia del esfínter inferior.</p>
                    </div>
                </div>
                <div style="background:rgba(251,146,60,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#fdba74;font-size:0.88rem;">💡 La digestión de carbohidratos comienza en la <strong>boca</strong> (amilasa salival). Las proteínas y grasas comienzan a digerirse en el estómago e intestino delgado respectivamente.</p>
                </div>
            `
        },

        {
            id: 'estomago',
            titulo: 'El Estómago',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">Estómago</h4>
                    <p style="margin:0;line-height:1.6;">Órgano muscular en forma de J. Capacidad: ~1.5 L (puede distenderse hasta 4 L). Funciones: almacenar, mezclar y comenzar la digestión química de proteínas.</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Regiones del estómago</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.8rem;border-radius:10px;text-align:center;">
                        <strong style="color:#fdba74;">Cardias</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.82rem;">Entrada desde esófago. Esfínter que evita reflujo.</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.8rem;border-radius:10px;text-align:center;">
                        <strong style="color:#fdba74;">Fundus</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.82rem;">Cúpula superior. Almacena gas (¡el que "erupta"!).</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.8rem;border-radius:10px;text-align:center;">
                        <strong style="color:#fdba74;">Cuerpo</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.82rem;">Porción principal. Producción de HCl y pepsina.</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.8rem;border-radius:10px;text-align:center;">
                        <strong style="color:#fdba74;">Píloro</strong>
                        <p style="margin:0.3rem 0 0;color:#94a3b8;font-size:0.82rem;">Salida al duodeno. Regula el vaciamiento gástrico.</p>
                    </div>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Jugo Gástrico</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:0.85rem;border-radius:8px;">
                        <strong style="color:#fca5a5;">HCl (Ácido Clorhídrico)</strong> — células parietales (oxínticas)
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">pH gástrico: 1.5-2. Activa el pepsinógeno → pepsina. Mata bacterias. Desnaturaliza proteínas. La bomba H⁺/K⁺-ATPasa lo produce (blanco de los IBP: omeprazol).</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #fb923c;padding:0.85rem;border-radius:8px;">
                        <strong style="color:#fdba74;">Pepsina</strong> — células principales
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Principal proteasa gástrica. Se produce como pepsinógeno (inactivo) y el HCl lo activa. Inicia la digestión de proteínas en el estómago.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #10b981;padding:0.85rem;border-radius:8px;">
                        <strong style="color:#6ee7b7;">Factor Intrínseco</strong> — células parietales
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Esencial para absorción de vitamina B12. Su falta (gastritis atrófica autoinmune) causa <strong>anemia perniciosa</strong>.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #94a3b8;padding:0.85rem;border-radius:8px;">
                        <strong style="color:#e2e8f0;">Moco</strong> — células mucosas
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Protege la mucosa del HCl y de la autoclisis. Cuando el moco falla → úlcera péptica.</p>
                    </div>
                </div>

                <div style="background:rgba(251,146,60,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#fdba74;font-size:0.88rem;">💡 El <em>quimo</em> es la mezcla semilíquida que el estómago envía al duodeno. El vaciamiento gástrico tarda ~2-4 h para carbohidratos, 4-5 h para proteínas y hasta 5-6 h para grasas.</p>
                </div>
            `
        },

        {
            id: 'intestino-delgado',
            titulo: 'Intestino Delgado: Digestión y Absorción',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">El intestino delgado</h4>
                    <p style="margin:0;line-height:1.6;">Tubo de 6-7 metros. Es el sitio principal de <strong>digestión y absorción</strong> de nutrientes. Superficie aumentada por: válvulas conniventes, vellosidades y microvellosidades (ribete en cepillo). Superficie total: ~200 m²</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Las 3 porciones</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">1. Duodeno (~25 cm)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Recibe el quimo del estómago + bilis (vesícula) + jugo pancreático. Sitio más importante de digestión química. Contiene la ampolla de Vater (desembocadura del colédoco y conducto pancreático).</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">2. Yeyuno (~2.5 m)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Principal sitio de <strong>absorción</strong> de nutrientes: glucosa, aminoácidos, ácidos grasos, vitaminas liposolubles (A, D, E, K) e hidrosolubles.</p>
                    </div>
                    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fdba74;">3. Íleon (~3.5 m)</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Absorción de vitamina B12 (con factor intrínseco) y sales biliares. Tiene las placas de Peyer (tejido linfoide → inmunidad intestinal). Termina en la válvula ileocecal.</p>
                    </div>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Enzimas digestivas clave</h3>
                <div style="overflow-x:auto;margin-bottom:1.25rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
                        <tr style="background:rgba(251,146,60,0.2);">
                            <th style="padding:0.55rem;text-align:left;color:#fdba74;border:1px solid rgba(251,146,60,0.2);">Enzima</th>
                            <th style="padding:0.55rem;color:#fdba74;border:1px solid rgba(251,146,60,0.2);">Origen</th>
                            <th style="padding:0.55rem;color:#fdba74;border:1px solid rgba(251,146,60,0.2);">Sustrato → Producto</th>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Amilasa salival</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Parótida</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Almidón → maltosa</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Pepsina</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Estómago</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Proteínas → polipéptidos</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Amilasa pancreática</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Páncreas</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Almidón → maltosa</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Lipasa pancreática</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Páncreas</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Grasas → ác. grasos + glicerol</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.6);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Tripsina / Quimotripsina</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Páncreas</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Proteínas → aminoácidos</td>
                        </tr>
                        <tr style="background:rgba(30,41,59,0.4);">
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Lactasa / Sacarasa / Maltasa</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);text-align:center;">Ribete en cepillo</td>
                            <td style="padding:0.55rem;border:1px solid rgba(100,116,139,0.2);">Disacáridos → monosacáridos</td>
                        </tr>
                    </table>
                </div>
                <div style="background:rgba(251,146,60,0.08);border-radius:8px;padding:0.85rem;">
                    <p style="margin:0;color:#fdba74;font-size:0.88rem;">💡 Intolerancia a la lactosa = falta de <strong>lactasa</strong>. La lactosa no digerida fermenta en el intestino → gases, distensión y diarrea osmótica.</p>
                </div>
            `
        },

        {
            id: 'higado-pancreas',
            titulo: 'Hígado, Vesícula y Páncreas',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <h3 style="color:#fb923c;margin-bottom:0.75rem;">🫀 Hígado</h3>
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1rem;border-radius:10px;margin-bottom:1rem;">
                    <p style="margin:0;line-height:1.6;font-size:0.92rem;">Glándula más grande del cuerpo (~1.5 kg). Ubicado en hipocondrio derecho. Recibe sangre de 2 fuentes: arteria hepática (20%, oxigenada) y vena porta (80%, rica en nutrientes del intestino).</p>
                </div>
                <h4 style="color:#fdba74;margin-bottom:0.5rem;">Funciones del hígado</h4>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.75rem;border-radius:8px;font-size:0.9rem;border-left:2px solid #fb923c;">🟠 <strong>Metabolismo:</strong> glucogenogénesis/glucogenólisis, síntesis de proteínas (albúmina, factores de coagulación), metabolismo lipídico y de aminoácidos</div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.75rem;border-radius:8px;font-size:0.9rem;border-left:2px solid #fb923c;">🟠 <strong>Producción de bilis:</strong> 600-1000 mL/día. La bilis emulsifica grasas para facilitar la acción de la lipasa</div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.75rem;border-radius:8px;font-size:0.9rem;border-left:2px solid #fb923c;">🟠 <strong>Detoxificación:</strong> alcohol, medicamentos, amoniaco (→ urea). Metabolismo de primera paso</div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.75rem;border-radius:8px;font-size:0.9rem;border-left:2px solid #fb923c;">🟠 <strong>Almacenamiento:</strong> glucógeno, vitaminas A, D, B12, hierro (ferritina)</div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.75rem;border-radius:8px;font-size:0.9rem;border-left:2px solid #fb923c;">🟠 <strong>Inmunidad:</strong> células de Kupffer (macrófagos hepáticos) fagocitan bacterias de la sangre portal</div>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">🫙 Vesícula Biliar</h3>
                <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(251,146,60,0.2);padding:0.9rem;border-radius:10px;margin-bottom:1.5rem;">
                    <p style="margin:0;color:#cbd5e1;font-size:0.9rem;line-height:1.55;">Almacena y concentra la bilis entre comidas. Cuando llega grasa al duodeno, la <strong>colecistoquinina (CCK)</strong> estimula su contracción para liberar bilis al duodeno. Los cálculos biliares (colelitiasis) causan cólico biliar — clásico en mujeres obesas con las "4 F": <em>Fat, Female, Forty, Fertile</em>.</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">🫀 Páncreas</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#34d399;margin:0 0 0.5rem;">Función Exocrina (99%)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            Produce jugo pancreático (~1.5 L/día)<br>
                            pH alcalino (bicarbonato) neutraliza el quimo ácido<br>
                            Enzimas: amilasa, lipasa, tripsina, quimotripsina, elastasa
                        </div>
                    </div>
                    <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#818cf8;margin:0 0 0.5rem;">Función Endocrina (1%)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            Islotes de Langerhans:<br>
                            🔵 Célula Beta → <strong>Insulina</strong> (↓ glucosa)<br>
                            🔴 Célula Alfa → <strong>Glucagón</strong> (↑ glucosa)<br>
                            ⚪ Célula Delta → Somatostatina
                        </div>
                    </div>
                </div>
                <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.85rem;border-radius:8px;">
                    <p style="margin:0;color:#fca5a5;font-size:0.88rem;">⚠️ <strong>Pancreatitis aguda:</strong> inflamación grave del páncreas (causas: alcohol + cálculos biliares = 80%). Signo de Cullen (equimosis periumbilical) y Grey-Turner (en flancos). Enzimas elevadas: amilasa y lipasa séricas.</p>
                </div>
            `
        },

        {
            id: 'intestino-grueso',
            titulo: 'Intestino Grueso y Defecación',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">Intestino Grueso</h4>
                    <p style="margin:0;line-height:1.6;">Mide ~1.5 m de largo. Mayor diámetro que el delgado. Funciones principales: absorción de agua y electrolitos, formación y eliminación de heces, síntesis de vitaminas por la flora bacteriana.</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Segmentos del intestino grueso</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;border:1px solid rgba(251,146,60,0.15);font-size:0.9rem;">
                        <strong style="color:#fdba74;">Ciego</strong> — primer segmento. Tiene el <strong>apéndice vermiforme</strong> (tejido linfoide; su inflamación = apendicitis)
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;border:1px solid rgba(251,146,60,0.15);font-size:0.9rem;">
                        <strong style="color:#fdba74;">Colon</strong> — ascendente → transverso → descendente → sigmoideo. Principal sitio de absorción de agua. Las bacterias fermentan la fibra → producen gases y vitamina K, B12.
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;border:1px solid rgba(251,146,60,0.15);font-size:0.9rem;">
                        <strong style="color:#fdba74;">Recto</strong> — almacena las heces hasta la defecación (15-20 cm)
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;border:1px solid rgba(251,146,60,0.15);font-size:0.9rem;">
                        <strong style="color:#fdba74;">Canal Anal</strong> — 2 esfínteres: interno (músculo liso, involuntario) y externo (estriado, voluntario)
                    </div>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Flora intestinal (Microbiota)</h3>
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);padding:1rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0;color:#cbd5e1;font-size:0.9rem;line-height:1.6;">El intestino grueso contiene ~100 billones de bacterias (principalmente Bacteroides y Firmicutes). Funciones: fermentar fibra, sintetizar vitamina K y B12, proteger contra patógenos, modular el sistema inmune. Los antibióticos pueden alterar esta flora → diarrea por <em>C. difficile</em>.</p>
                </div>

                <h3 style="color:#fb923c;margin-bottom:0.75rem;">Principales patologías</h3>
                <div style="display:grid;gap:0.5rem;">
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fca5a5;">Apendicitis</strong> — dolor que migra de periumbilical a FID (punto de McBurney), signo de Blumberg +, fiebre
                    </div>
                    <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fca5a5;">Cáncer colorrectal</strong> — 3ra causa de cáncer. FDR: edad >50, dieta alta en grasas/baja en fibra, pólipos, colitis ulcerosa. Cribado: colonoscopia
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #f97316;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fdba74;">Enfermedad de Crohn</strong> — inflamación transmural de cualquier segmento GI. "Empedrado", fisuras, skip lesions
                    </div>
                    <div style="background:rgba(251,146,60,0.08);border-left:3px solid #f97316;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#fdba74;">Colitis Ulcerosa</strong> — afecta solo mucosa del colon, desde el recto hacia arriba. Continua (sin skip). Sangrado rectal
                    </div>
                    <div style="background:rgba(100,116,139,0.1);border-left:3px solid #64748b;padding:0.8rem;border-radius:8px;font-size:0.88rem;">
                        <strong style="color:#94a3b8;">Hemorroides</strong> — varices del plexo hemorroidal. Internas (sin dolor) vs externas (dolorosas). FDR: estreñimiento, embarazo, sedentarismo
                    </div>
                </div>
            `
        },

        {
            id: 'patologias-digestivas',
            titulo: 'Patologías Digestivas Esenciales',
            tiempo: '3 min',
            completada: false,
            contenido: `
                <div style="background:rgba(251,146,60,0.12);border-left:4px solid #fb923c;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <p style="margin:0;line-height:1.6;">Las enfermedades digestivas afectan al 40% de la población mundial. Muchas son prevenibles con alimentación adecuada, higiene y control de factores de riesgo.</p>
                </div>

                <div style="display:grid;gap:0.75rem;margin-bottom:1rem;">

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #ef4444;padding:1rem;border-radius:10px;">
                        <strong style="color:#fca5a5;">🔴 Úlcera Péptica</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Lesión en mucosa gástrica o duodenal. Causas: <em>Helicobacter pylori</em> (70-80%, bacteria gramnegativa espiralada), AINES (inhiben prostaglandinas protectoras), estrés. Síntoma: dolor epigástrico. Úlcera gástrica: dolor que aumenta con comida. Duodenal: dolor que calma con comida y aparece de noche. Tratamiento: IBP + erradicación de H. pylori (amoxicilina + claritromicina).</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #f97316;padding:1rem;border-radius:10px;">
                        <strong style="color:#fdba74;">🟠 Reflujo Gastroesofágico (RGE)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Retorno del contenido gástrico al esófago por incompetencia del esfínter esofágico inferior. Síntomas: pirosis (acidez), regurgitación, tos crónica. Complicación: esófago de Barrett (metaplasia → riesgo de adenocarcinoma). Tratamiento: cambios de estilo de vida + IBP.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #eab308;padding:1rem;border-radius:10px;">
                        <strong style="color:#fde68a;">🟡 Cirrosis Hepática</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Fibrosis hepática irreversible con pérdida de la arquitectura normal. Causas: alcohol (1ra), hepatitis B y C crónica, HGNA. Complicaciones: hipertensión portal → varices esofágicas, ascitis, encefalopatía hepática, hepatocarcinoma. Signos: arañas vasculares, eritema palmar, ictericia, ginecomastia.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #8b5cf6;padding:1rem;border-radius:10px;">
                        <strong style="color:#c4b5fd;">🟣 Hepatitis Viral</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;"><strong>VHA y VHE:</strong> transmisión fecal-oral (agua/alimentos), NO cronifica. <strong>VHB, VHC y VHD:</strong> transmisión parenteral/sexual. VHB y VHC pueden cronificar → cirrosis → hepatocarcinoma. VHB tiene vacuna disponible. VHC tiene tratamiento curativo con antivirales directos.</p>
                    </div>

                    <div style="background:rgba(30,41,59,0.85);border-left:3px solid #06b6d4;padding:1rem;border-radius:10px;">
                        <strong style="color:#67e8f9;">🔵 Síndrome de Intestino Irritable (SII)</strong>
                        <p style="margin:0.4rem 0 0;color:#cbd5e1;font-size:0.88rem;line-height:1.55;">Trastorno funcional (sin lesión orgánica). Dolor abdominal + alteración del ritmo intestinal (diarrea, estreñimiento o mixto). Prevalencia: 10-15% de la población. Más frecuente en mujeres. Tratamiento: dieta, manejo del estrés, antiespasmódicos.</p>
                    </div>
                </div>

                <div style="background:rgba(251,146,60,0.08);border-left:4px solid #fb923c;padding:1rem;border-radius:10px;">
                    <h4 style="color:#fb923c;margin:0 0 0.5rem;">Prevención digestiva</h4>
                    <div style="display:grid;gap:0.3rem;font-size:0.88rem;color:#cbd5e1;">
                        <div>✅ Dieta rica en fibra, frutas y verduras</div>
                        <div>✅ Hidratación adecuada (1.5-2 L de agua/día)</div>
                        <div>✅ Evitar alcohol en exceso (hepatotóxico)</div>
                        <div>✅ Lavado de manos y agua potable (previene VHA, cólera)</div>
                        <div>✅ Colonoscopia de cribado después de los 50 años</div>
                        <div>✅ Vacunación contra VHA y VHB</div>
                    </div>
                </div>
            `
        }
    ]
};

console.log("✅ Aparato Digestivo cargado:", MODULO_APARATO_DIGESTIVO.lecciones.length, "lecciones,", MODULO_APARATO_DIGESTIVO.evaluacion.length, "preguntas");
