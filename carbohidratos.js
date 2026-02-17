const CARBOHIDRATOS = {
    id: 'carbohidratos',
    titulo: 'Carbohidratos',
    icono: '🍞',
    descripcion: 'Bioquímica de carbohidratos: estructura, clasificación y metabolismo',
    color: '#f59e0b',
    
    lecciones: [
        {
            id: 1,
            titulo: 'Introducción a los Carbohidratos',
            tiempo: '6 min',
            completada: false,
            contenido: `
                <h1>🍞 Introducción a los Carbohidratos</h1>
                
                <h2>¿Qué son los Carbohidratos?</h2>
                <p>Los <strong>carbohidratos</strong> (también llamados glúcidos o sacáridos) son compuestos orgánicos formados por <strong>carbono (C), hidrógeno (H) y oxígeno (O)</strong>. Son la principal fuente de energía para el organismo.</p>
                
                <div class="dato-clave">
                    <h3>📌 Fórmula General</h3>
                    <p><strong>(CH₂O)ₙ</strong> donde n ≥ 3</p>
                    <p>Esta fórmula indica que por cada carbono hay dos hidrógenos y un oxígeno, como si fueran "hidratos de carbono".</p>
                </div>
                
                <h2>Características Generales</h2>
                <ul>
                    <li><strong>Hidrofílicos:</strong> Se disuelven bien en agua debido a sus grupos hidroxilo (-OH)</li>
                    <li><strong>Energéticos:</strong> Aportan 4 kcal por gramo</li>
                    <li><strong>Abundantes:</strong> Son las moléculas orgánicas más abundantes en la naturaleza</li>
                    <li><strong>Versátiles:</strong> Tienen funciones energéticas, estructurales y de reconocimiento celular</li>
                </ul>
                
                <h2>Clasificación General</h2>
                <p>Los carbohidratos se clasifican según el número de unidades básicas (monómeros):</p>
                
                <div class="concepto">
                    <h3>1️⃣ Monosacáridos (1 unidad)</h3>
                    <p>La unidad básica, no se pueden hidrolizar a moléculas más simples.</p>
                    <p><em>Ejemplos:</em> Glucosa, fructuosa, galactosa, ribosa</p>
                </div>
                
                <div class="concepto">
                    <h3>2️⃣ Disacáridos (2 unidades)</h3>
                    <p>Formados por la unión de dos monosacáridos mediante un enlace glucosídico.</p>
                    <p><em>Ejemplos:</em> Sacarosa, lactosa, maltosa</p>
                </div>
                
                <div class="concepto">
                    <h3>3️⃣ Oligosacáridos (3-10 unidades)</h3>
                    <p>Cadenas cortas de monosacáridos, importantes en reconocimiento celular.</p>
                    <p><em>Ejemplos:</em> Rafinosa, estaquiosa</p>
                </div>
                
                <div class="concepto">
                    <h3>4️⃣ Polisacáridos (>10 unidades)</h3>
                    <p>Polímeros largos de monosacáridos con funciones de reserva o estructurales.</p>
                    <p><em>Ejemplos:</em> Almidón, glucógeno, celulosa</p>
                </div>
                
                <h2>Importancia Biológica</h2>
                <div class="nota-importante">
                    <p><strong>💡 Los carbohidratos son esenciales para:</strong></p>
                    <ul>
                        <li>Obtención rápida de energía (glucosa)</li>
                        <li>Almacenamiento energético (glucógeno en animales, almidón en plantas)</li>
                        <li>Estructura celular (celulosa en plantas, quitina en hongos)</li>
                        <li>Comunicación celular (glucoproteínas, glucolípidos)</li>
                        <li>Síntesis de ácidos nucleicos (ribosa, desoxirribosa)</li>
                    </ul>
                </div>
                
                <h2>Grupos Funcionales</h2>
                <p>Los carbohidratos contienen dos grupos funcionales principales:</p>
                
                <div class="ejemplo">
                    <h3>🔸 Grupo Carbonilo (C=O)</h3>
                    <p>Puede estar en dos posiciones:</p>
                    <ul>
                        <li><strong>Aldehído (C1):</strong> Forma <em>aldosas</em> (ej: glucosa)</li>
                        <li><strong>Cetona (C2):</strong> Forma <em>cetosas</em> (ej: fructuosa)</li>
                    </ul>
                </div>
                
                <div class="ejemplo">
                    <h3>🔸 Grupos Hidroxilo (-OH)</h3>
                    <p>Múltiples grupos OH hacen a los carbohidratos solubles en agua y reactivos.</p>
                </div>
                
                <h2>Carbohidratos en la Dieta</h2>
                <p>Los carbohidratos deben representar el <strong>50-60% de las calorías diarias</strong>. Se dividen en:</p>
                
                <table>
                    <tr>
                        <th>Tipo</th>
                        <th>Características</th>
                        <th>Fuentes</th>
                    </tr>
                    <tr>
                        <td><strong>Simples</strong></td>
                        <td>Absorción rápida, sabor dulce</td>
                        <td>Frutas, miel, azúcar</td>
                    </tr>
                    <tr>
                        <td><strong>Complejos</strong></td>
                        <td>Absorción lenta, sin sabor dulce</td>
                        <td>Cereales, legumbres, tubérculos</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> Los carbohidratos complejos son preferibles porque proporcionan energía sostenida y contienen fibra.</p>
                </div>
            `
        },
        
        {
            id: 2,
            titulo: 'Monosacáridos - Estructura y Clasificación',
            tiempo: '7 min',
            completada: false,
            contenido: `
                <h1>🔬 Monosacáridos - Estructura y Clasificación</h1>
                
                <h2>Definición</h2>
                <p>Los <strong>monosacáridos</strong> son los carbohidratos más simples. Son las unidades básicas que no pueden hidrolizarse en moléculas más pequeñas.</p>
                
                <div class="dato-clave">
                    <h3>📌 Características Principales</h3>
                    <ul>
                        <li>Sólidos cristalinos, blancos y solubles en agua</li>
                        <li>Sabor dulce</li>
                        <li>Fórmula general: (CH₂O)ₙ donde n = 3-7</li>
                        <li>Pueden ciclarse formando anillos</li>
                    </ul>
                </div>
                
                <h2>Clasificación según Número de Carbonos</h2>
                
                <div class="concepto">
                    <h3>3 carbonos - TRIOSAS</h3>
                    <p>Los monosacáridos más simples.</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul>
                        <li><em>Gliceraldehído</em> (aldosa)</li>
                        <li><em>Dihidroxiacetona</em> (cetosa)</li>
                    </ul>
                    <p>Son intermediarios metabólicos importantes en la glucólisis.</p>
                </div>
                
                <div class="concepto">
                    <h3>4 carbonos - TETROSAS</h3>
                    <p><strong>Ejemplo:</strong> Eritrosa (aldosa)</p>
                    <p>Rara en forma libre, importante en vías metabólicas.</p>
                </div>
                
                <div class="concepto">
                    <h3>5 carbonos - PENTOSAS ⭐</h3>
                    <p>Muy importantes biológicamente.</p>
                    <p><strong>Ejemplos clave:</strong></p>
                    <ul>
                        <li><em>Ribosa:</em> Forma parte del ARN</li>
                        <li><em>2-Desoxirribosa:</em> Forma parte del ADN</li>
                        <li><em>Ribulosa:</em> Participa en la fotosíntesis</li>
                    </ul>
                </div>
                
                <div class="concepto">
                    <h3>6 carbonos - HEXOSAS ⭐⭐⭐</h3>
                    <p>¡Las más importantes!</p>
                    <p><strong>Ejemplos principales:</strong></p>
                    <ul>
                        <li><em>Glucosa:</em> Principal fuente de energía</li>
                        <li><em>Fructuosa:</em> Azúcar de las frutas</li>
                        <li><em>Galactosa:</em> Componente de la lactosa</li>
                        <li><em>Manosa:</em> Importante en glucoproteínas</li>
                    </ul>
                </div>
                
                <div class="concepto">
                    <h3>7 carbonos - HEPTOSAS</h3>
                    <p><strong>Ejemplo:</strong> Sedoheptulosa</p>
                    <p>Intermediario en la vía de las pentosas fosfato.</p>
                </div>
                
                <h2>Clasificación según Grupo Funcional</h2>
                
                <div class="ejemplo">
                    <h3>🔸 ALDOSAS</h3>
                    <p>Contienen un grupo <strong>aldehído</strong> (C=O) en el carbono 1.</p>
                    <p><strong>Nomenclatura:</strong> Si tiene 6 carbonos → <em>aldo</em>hexosa</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul>
                        <li>Glucosa (aldohexosa)</li>
                        <li>Ribosa (aldopentosa)</li>
                        <li>Gliceraldehído (aldotriosa)</li>
                    </ul>
                </div>
                
                <div class="ejemplo">
                    <h3>🔸 CETOSAS</h3>
                    <p>Contienen un grupo <strong>cetona</strong> (C=O) en el carbono 2.</p>
                    <p><strong>Nomenclatura:</strong> Si tiene 6 carbonos → <em>ceto</em>hexosa</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul>
                        <li>Fructuosa (cetohexosa)</li>
                        <li>Ribulosa (cetopentosa)</li>
                        <li>Dihidroxiacetona (cetotriosa)</li>
                    </ul>
                </div>
                
                <h2>Isomería en Monosacáridos</h2>
                
                <div class="nota-importante">
                    <h3>💡 Tipos de Isómeros</h3>
                    
                    <p><strong>1. Isomería estructural:</strong></p>
                    <p>Misma fórmula molecular pero diferente estructura.</p>
                    <p><em>Ejemplo:</em> Glucosa (aldosa) vs Fructuosa (cetosa) → Ambas C₆H₁₂O₆</p>
                    
                    <p><strong>2. Estereoisomería (quiralidad):</strong></p>
                    <p>Diferentes disposiciones espaciales de los grupos -OH.</p>
                    <p>Los monosacáridos tienen carbonos <em>asimétricos</em> (quirales).</p>
                    
                    <p><strong>3. Serie D y L:</strong></p>
                    <ul>
                        <li><strong>Serie D:</strong> -OH del carbono asimétrico más alejado del carbonilo está a la DERECHA</li>
                        <li><strong>Serie L:</strong> -OH del carbono asimétrico más alejado del carbonilo está a la IZQUIERDA</li>
                    </ul>
                    <p>⚠️ En la naturaleza predominan los monosacáridos de la serie <strong>D</strong>.</p>
                </div>
                
                <h2>Representaciones Estructurales</h2>
                
                <div class="concepto">
                    <h3>📐 Proyección de Fischer</h3>
                    <p>Representación lineal donde:</p>
                    <ul>
                        <li>La cadena de carbonos se dibuja vertical</li>
                        <li>Los grupos que salen del plano están a los lados</li>
                        <li>El grupo más oxidado (carbonilo) se coloca arriba</li>
                    </ul>
                    <p><strong>Uso:</strong> Útil para comparar configuraciones</p>
                </div>
                
                <div class="concepto">
                    <h3>🔄 Proyección de Haworth (cíclica)</h3>
                    <p>Representación del anillo formado por ciclación.</p>
                    <ul>
                        <li>Los monosacáridos en solución forman anillos</li>
                        <li>Pentosas forman anillos de 5 miembros (furanosas)</li>
                        <li>Hexosas forman anillos de 6 miembros (piranosas)</li>
                    </ul>
                    <p><strong>Uso:</strong> Representa la forma real en la que existen los azúcares</p>
                </div>
                
                <h2>Anomería: α y β</h2>
                <p>Al ciclarse, el carbono carbonílico se convierte en un nuevo centro quiral llamado <strong>carbono anomérico</strong>:</p>
                
                <table>
                    <tr>
                        <th>Anómero</th>
                        <th>Posición -OH</th>
                        <th>Ejemplo</th>
                    </tr>
                    <tr>
                        <td><strong>α (alfa)</strong></td>
                        <td>-OH hacia ABAJO</td>
                        <td>α-D-glucosa</td>
                    </tr>
                    <tr>
                        <td><strong>β (beta)</strong></td>
                        <td>-OH hacia ARRIBA</td>
                        <td>β-D-glucosa</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Mutarrotación:</strong> En solución, los anómeros α y β están en equilibrio dinámico.</p>
                </div>
            `
        },
        
        {
            id: 3,
            titulo: 'Monosacáridos Importantes',
            tiempo: '8 min',
            completada: false,
            contenido: `
                <h1>⭐ Monosacáridos Importantes</h1>
                
                <h2>D-Glucosa (Dextrosa)</h2>
                
                <div class="dato-clave">
                    <h3>🍯 El Azúcar de la Sangre</h3>
                    <p><strong>Fórmula:</strong> C₆H₁₂O₆</p>
                    <p><strong>Tipo:</strong> Aldohexosa</p>
                    <p><strong>Sabor:</strong> Dulce moderado</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Es el monosacárido <strong>más importante</strong> en biología</li>
                    <li>Principal fuente de energía para las células</li>
                    <li>Concentración normal en sangre: <strong>70-110 mg/dL</strong></li>
                    <li>Atraviesa la barrera hematoencefálica (energía para el cerebro)</li>
                    <li>En solución, 36% forma α y 64% forma β</li>
                </ul>
                
                <h3>Funciones Biológicas</h3>
                <div class="concepto">
                    <p><strong>1. Energía inmediata:</strong></p>
                    <p>Se oxida en la glucólisis produciendo ATP (respiración celular)</p>
                    
                    <p><strong>2. Reserva energética:</strong></p>
                    <p>Se almacena como glucógeno (animales) o almidón (plantas)</p>
                    
                    <p><strong>3. Precursor biosintético:</strong></p>
                    <p>Se usa para sintetizar aminoácidos, lípidos y otros compuestos</p>
                    
                    <p><strong>4. Componente estructural:</strong></p>
                    <p>Forma parte de glucolípidos y glucoproteínas</p>
                </div>
                
                <h3>Origen</h3>
                <ul>
                    <li><strong>Alimentos:</strong> Frutas, miel, hidrólisis de almidón</li>
                    <li><strong>Digestión:</strong> De disacáridos y polisacáridos</li>
                    <li><strong>Gluconeogénesis:</strong> Síntesis a partir de aminoácidos, lactato o glicerol</li>
                </ul>
                
                <div class="nota-importante">
                    <p>⚠️ <strong>Diabetes Mellitus:</strong> Enfermedad donde la glucosa en sangre está elevada debido a deficiencia de insulina o resistencia a ella.</p>
                </div>
                
                <hr>
                
                <h2>D-Fructuosa (Levulosa)</h2>
                
                <div class="dato-clave">
                    <h3>🍓 El Azúcar de las Frutas</h3>
                    <p><strong>Fórmula:</strong> C₆H₁₂O₆</p>
                    <p><strong>Tipo:</strong> Cetohexosa</p>
                    <p><strong>Sabor:</strong> El más dulce de todos (1.7× glucosa)</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Es una <strong>cetosa</strong> (grupo cetona en C2)</li>
                    <li>Isómero de la glucosa (misma fórmula, diferente estructura)</li>
                    <li>Forma anillos de 5 miembros (furanosa) y 6 miembros (piranosa)</li>
                    <li>Más soluble en agua que la glucosa</li>
                </ul>
                
                <h3>Fuentes Naturales</h3>
                <ul>
                    <li><strong>Frutas:</strong> Especialmente manzanas, peras, uvas</li>
                    <li><strong>Miel:</strong> 40% fructuosa</li>
                    <li><strong>Sacarosa:</strong> Se libera al hidrolizar azúcar de mesa</li>
                    <li><strong>Jarabe de maíz de alta fructuosa (JMAF):</strong> Usado en bebidas</li>
                </ul>
                
                <h3>Metabolismo</h3>
                <div class="concepto">
                    <p><strong>Absorción:</strong></p>
                    <p>Se absorbe más lento que la glucosa (no requiere insulina inicialmente)</p>
                    
                    <p><strong>Conversión:</strong></p>
                    <p>En el hígado se convierte en glucosa, glucógeno o ácidos grasos</p>
                    
                    <p><strong>Índice glucémico:</strong></p>
                    <p>Bajo (19) comparado con glucosa (100)</p>
                </div>
                
                <div class="nota-importante">
                    <p>⚠️ <strong>Consumo excesivo:</strong> El exceso de fructuosa (especialmente JMAF) se asocia con hígado graso, resistencia a insulina y obesidad.</p>
                </div>
                
                <hr>
                
                <h2>D-Galactosa</h2>
                
                <div class="dato-clave">
                    <h3>🥛 El Azúcar de la Leche</h3>
                    <p><strong>Fórmula:</strong> C₆H₁₂O₆</p>
                    <p><strong>Tipo:</strong> Aldohexosa</p>
                    <p><strong>Sabor:</strong> Dulce (0.6× glucosa)</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li><strong>Epímero</strong> de la glucosa (difiere solo en la posición del -OH en C4)</li>
                    <li>Raramente libre en la naturaleza</li>
                    <li>Componente de la lactosa (azúcar de la leche)</li>
                </ul>
                
                <h3>Funciones Biológicas</h3>
                <div class="concepto">
                    <p><strong>1. Glucolípidos cerebrales:</strong></p>
                    <p>Componente esencial en el desarrollo del sistema nervioso</p>
                    
                    <p><strong>2. Glucoproteínas:</strong></p>
                    <p>Forma parte de proteínas de membrana</p>
                    
                    <p><strong>3. Lactosa:</strong></p>
                    <p>Forma disacárido con glucosa en la leche materna</p>
                </div>
                
                <h3>Metabolismo</h3>
                <p>La galactosa se convierte en glucosa mediante la <strong>vía de Leloir</strong>:</p>
                <p>Galactosa → Galactosa-1-fosfato → Glucosa-1-fosfato → Glucosa</p>
                
                <div class="nota-importante">
                    <p>⚠️ <strong>Galactosemia:</strong> Enfermedad genética donde falta una enzima de la vía de Leloir. La galactosa se acumula causando daño hepático, cataratas y retraso mental.</p>
                </div>
                
                <hr>
                
                <h2>D-Ribosa y 2-Desoxirribosa</h2>
                
                <div class="dato-clave">
                    <h3>🧬 Los Azúcares de los Ácidos Nucleicos</h3>
                    <p><strong>Fórmula Ribosa:</strong> C₅H₁₀O₅</p>
                    <p><strong>Fórmula Desoxirribosa:</strong> C₅H₁₀O₄</p>
                    <p><strong>Tipo:</strong> Aldopentosas</p>
                </div>
                
                <h3>D-Ribosa</h3>
                <ul>
                    <li>Componente del <strong>ARN</strong> (ácido ribonucleico)</li>
                    <li>Forma parte del <strong>ATP, NAD, FAD, CoA</strong> (coenzimas)</li>
                    <li>Forma anillos de 5 miembros (β-D-ribofuranosa)</li>
                </ul>
                
                <h3>2-Desoxirribosa</h3>
                <ul>
                    <li>Componente del <strong>ADN</strong> (ácido desoxirribonucleico)</li>
                    <li>Le falta un -OH en el carbono 2 (de ahí "desoxi")</li>
                    <li>Esta diferencia hace al ADN más estable que el ARN</li>
                </ul>
                
                <div class="concepto">
                    <h3>Diferencia Clave</h3>
                    <table>
                        <tr>
                            <th>Ribosa</th>
                            <th>Diferencia</th>
                            <th>Desoxirribosa</th>
                        </tr>
                        <tr>
                            <td>C2 tiene -OH</td>
                            <td>→</td>
                            <td>C2 tiene -H</td>
                        </tr>
                        <tr>
                            <td>ARN</td>
                            <td></td>
                            <td>ADN</td>
                        </tr>
                        <tr>
                            <td>Menos estable</td>
                            <td></td>
                            <td>Más estable</td>
                        </tr>
                    </table>
                </div>
                
                <hr>
                
                <h2>Otros Monosacáridos Importantes</h2>
                
                <div class="ejemplo">
                    <h3>🔸 D-Manosa</h3>
                    <ul>
                        <li>Aldohexosa, epímero de la glucosa en C2</li>
                        <li>Componente de glucoproteínas</li>
                        <li>Importante en el sistema inmune</li>
                    </ul>
                </div>
                
                <div class="ejemplo">
                    <h3>🔸 Xilosa</h3>
                    <ul>
                        <li>Aldopentosa</li>
                        <li>Componente de xilano (hemicelulosa)</li>
                        <li>Se usa como edulcorante (xilitol)</li>
                    </ul>
                </div>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> Todos los monosacáridos importantes en humanos son de la serie D.</p>
                </div>
            `
        },
        
        {
            id: 4,
            titulo: 'Disacáridos',
            tiempo: '7 min',
            completada: false,
            contenido: `
                <h1>🔗 Disacáridos</h1>
                
                <h2>Definición y Formación</h2>
                <p>Los <strong>disacáridos</strong> son carbohidratos formados por la unión de <strong>dos monosacáridos</strong> mediante un enlace glucosídico.</p>
                
                <div class="dato-clave">
                    <h3>📌 Enlace Glucosídico</h3>
                    <p>Es un enlace <strong>covalente</strong> que se forma por una reacción de <em>condensación</em> (deshidratación) entre dos grupos -OH.</p>
                    <p><strong>Reacción:</strong></p>
                    <p>Monosacárido 1 + Monosacárido 2 → Disacárido + H₂O</p>
                    <p><strong>Nomenclatura:</strong> Se nombra según los carbonos unidos, ej: enlace α(1→4)</p>
                </div>
                
                <h2>Características Generales</h2>
                <ul>
                    <li>Sólidos cristalinos, blancos y dulces</li>
                    <li>Solubles en agua</li>
                    <li>Se hidrolizan (rompen) en dos monosacáridos</li>
                    <li>Algunos son reductores y otros no</li>
                </ul>
                
                <hr>
                
                <h2>Sacarosa (Azúcar de Mesa)</h2>
                
                <div class="dato-clave">
                    <h3>🍭 El Disacárido más Común</h3>
                    <p><strong>Composición:</strong> α-D-Glucosa + β-D-Fructuosa</p>
                    <p><strong>Enlace:</strong> α(1→2) glucosídico</p>
                    <p><strong>Fórmula:</strong> C₁₂H₂₂O₁₁</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>¡El azúcar de mesa!</li>
                    <li>Abundante en caña de azúcar (20%) y remolacha (17%)</li>
                    <li>Muy dulce (referencia de dulzor = 1.0)</li>
                    <li><strong>NO es reductor</strong> (ambos carbonos anoméricos están en el enlace)</li>
                </ul>
                
                <h3>Fuentes Naturales</h3>
                <div class="concepto">
                    <ul>
                        <li><strong>Caña de azúcar:</strong> Principal fuente comercial</li>
                        <li><strong>Remolacha azucarera:</strong> Segunda fuente comercial</li>
                        <li><strong>Frutas:</strong> Piña, mango, plátano</li>
                        <li><strong>Miel:</strong> Pequeñas cantidades</li>
                    </ul>
                </div>
                
                <h3>Hidrólisis</h3>
                <p>La enzima <strong>sacarasa</strong> (invertasa) hidroliza la sacarosa:</p>
                <p><em>Sacarosa + H₂O → Glucosa + Fructuosa</em></p>
                
                <div class="nota-importante">
                    <p><strong>Azúcar invertido:</strong> Mezcla equimolar de glucosa y fructuosa obtenida por hidrólisis. Es más dulce que la sacarosa y no cristaliza (usado en repostería).</p>
                </div>
                
                <hr>
                
                <h2>Lactosa (Azúcar de la Leche)</h2>
                
                <div class="dato-clave">
                    <h3>🥛 El Disacárido de los Mamíferos</h3>
                    <p><strong>Composición:</strong> β-D-Galactosa + β-D-Glucosa</p>
                    <p><strong>Enlace:</strong> β(1→4) glucosídico</p>
                    <p><strong>Fórmula:</strong> C₁₂H₂₂O₁₁</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Único carbohidrato de origen animal</li>
                    <li>Presente en la leche de mamíferos (4-7% en humanos)</li>
                    <li>Menos dulce que la sacarosa (0.4×)</li>
                    <li><strong>SÍ es reductor</strong> (carbono anomérico libre en glucosa)</li>
                </ul>
                
                <h3>Fuentes</h3>
                <div class="concepto">
                    <ul>
                        <li><strong>Leche materna:</strong> 7%</li>
                        <li><strong>Leche de vaca:</strong> 4-5%</li>
                        <li><strong>Productos lácteos:</strong> Yogur, queso (cantidades variables)</li>
                    </ul>
                </div>
                
                <h3>Digestión</h3>
                <p>La enzima <strong>lactasa</strong> (β-galactosidasa) hidroliza la lactosa en el intestino delgado:</p>
                <p><em>Lactosa + H₂O → Galactosa + Glucosa</em></p>
                
                <div class="nota-importante">
                    <h3>⚠️ Intolerancia a la Lactosa</h3>
                    <p>Condición donde hay <strong>deficiencia de lactasa</strong>. La lactosa no digerida pasa al colon donde es fermentada por bacterias.</p>
                    <p><strong>Síntomas:</strong></p>
                    <ul>
                        <li>Distensión abdominal</li>
                        <li>Gases y flatulencia</li>
                        <li>Diarrea</li>
                        <li>Dolor abdominal</li>
                    </ul>
                    <p><strong>Prevalencia:</strong> 65-70% de la población mundial (especialmente asiáticos, africanos y latinos)</p>
                </div>
                
                <hr>
                
                <h2>Maltosa (Azúcar de Malta)</h2>
                
                <div class="dato-clave">
                    <h3>🌾 El Disacárido del Almidón</h3>
                    <p><strong>Composición:</strong> α-D-Glucosa + α-D-Glucosa</p>
                    <p><strong>Enlace:</strong> α(1→4) glucosídico</p>
                    <p><strong>Fórmula:</strong> C₁₂H₂₂O₁₁</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Formada por <strong>dos glucosas</strong></li>
                    <li>Producto de la hidrólisis parcial del almidón</li>
                    <li>Menos dulce que la sacarosa (0.3×)</li>
                    <li><strong>SÍ es reductor</strong> (un carbono anomérico libre)</li>
                </ul>
                
                <h3>Fuentes</h3>
                <div class="concepto">
                    <ul>
                        <li><strong>Malta:</strong> Cebada germinada (proceso de malteo)</li>
                        <li><strong>Cerveza:</strong> Producto de fermentación</li>
                        <li><strong>Digestión:</strong> Hidrólisis de almidón por amilasa salival y pancreática</li>
                        <li><strong>Jarabes:</strong> Jarabes de glucosa comerciales</li>
                    </ul>
                </div>
                
                <h3>Digestión</h3>
                <p>La enzima <strong>maltasa</strong> hidroliza la maltosa:</p>
                <p><em>Maltosa + H₂O → Glucosa + Glucosa</em></p>
                
                <hr>
                
                <h2>Otros Disacáridos</h2>
                
                <div class="ejemplo">
                    <h3>🔸 Celobiosa</h3>
                    <p><strong>Composición:</strong> β-D-Glucosa + β-D-Glucosa</p>
                    <p><strong>Enlace:</strong> β(1→4)</p>
                    <ul>
                        <li>Unidad repetitiva de la celulosa</li>
                        <li>Los humanos NO podemos digerirla (no tenemos celulasa)</li>
                        <li>Los rumiantes sí (bacterias simbióticas)</li>
                    </ul>
                </div>
                
                <div class="ejemplo">
                    <h3>🔸 Trehalosa</h3>
                    <p><strong>Composición:</strong> α-D-Glucosa + α-D-Glucosa</p>
                    <p><strong>Enlace:</strong> α(1→1)</p>
                    <ul>
                        <li>Presente en hongos e insectos</li>
                        <li>NO es reductor (ambos anoméricos en el enlace)</li>
                        <li>Protege contra estrés (deshidratación, congelación)</li>
                    </ul>
                </div>
                
                <h2>Tabla Comparativa</h2>
                <table>
                    <tr>
                        <th>Disacárido</th>
                        <th>Monosacáridos</th>
                        <th>Enlace</th>
                        <th>Reductor</th>
                        <th>Fuente</th>
                    </tr>
                    <tr>
                        <td><strong>Sacarosa</strong></td>
                        <td>Glucosa + Fructuosa</td>
                        <td>α(1→2)</td>
                        <td>NO</td>
                        <td>Caña, remolacha</td>
                    </tr>
                    <tr>
                        <td><strong>Lactosa</strong></td>
                        <td>Galactosa + Glucosa</td>
                        <td>β(1→4)</td>
                        <td>SÍ</td>
                        <td>Leche</td>
                    </tr>
                    <tr>
                        <td><strong>Maltosa</strong></td>
                        <td>Glucosa + Glucosa</td>
                        <td>α(1→4)</td>
                        <td>SÍ</td>
                        <td>Malta, almidón</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Azúcar reductor:</strong> Es aquel que tiene un grupo carbonilo libre (aldehído o cetona) capaz de reducir reactivos como el reactivo de Benedict.</p>
                </div>
            `
        },
        
        {
            id: 5,
            titulo: 'Polisacáridos - Almidón y Glucógeno',
            tiempo: '7 min',
            completada: false,
            contenido: `
                <h1>🌾 Polisacáridos de Reserva</h1>
                
                <h2>¿Qué son los Polisacáridos?</h2>
                <p>Los <strong>polisacáridos</strong> son polímeros formados por la unión de <strong>más de 10 monosacáridos</strong> mediante enlaces glucosídicos.</p>
                
                <div class="dato-clave">
                    <h3>📌 Características Generales</h3>
                    <ul>
                        <li>Pueden contener cientos o miles de unidades</li>
                        <li>NO tienen sabor dulce</li>
                        <li>Insolubles o poco solubles en agua</li>
                        <li>NO son reductores</li>
                        <li>Funciones: <strong>reserva energética</strong> o <strong>estructural</strong></li>
                    </ul>
                </div>
                
                <h2>Clasificación</h2>
                <div class="concepto">
                    <p><strong>1. Homopolisacáridos:</strong> Formados por un solo tipo de monosacárido</p>
                    <p><em>Ejemplos:</em> Almidón, glucógeno, celulosa (todos de glucosa)</p>
                    
                    <p><strong>2. Heteropolisacáridos:</strong> Formados por diferentes monosacáridos</p>
                    <p><em>Ejemplos:</em> Ácido hialurónico, heparina, pectina</p>
                </div>
                
                <hr>
                
                <h2>Almidón (Amilum)</h2>
                
                <div class="dato-clave">
                    <h3>🌾 La Reserva Energética de las Plantas</h3>
                    <p><strong>Composición:</strong> Polímero de α-D-Glucosa</p>
                    <p><strong>Peso molecular:</strong> 50,000 - varios millones de daltons</p>
                    <p><strong>Localización:</strong> Gránulos en cloroplastos y amiloplastos</p>
                </div>
                
                <h3>Estructura</h3>
                <p>El almidón es una mezcla de dos polisacáridos:</p>
                
                <div class="concepto">
                    <h3>1️⃣ Amilosa (20-30%)</h3>
                    <ul>
                        <li>Cadena <strong>lineal</strong> de glucosas</li>
                        <li>Enlaces α(1→4) glucosídicos</li>
                        <li>250-300 unidades de glucosa</li>
                        <li>Forma <strong>hélice</strong> en solución</li>
                        <li>Se tiñe de <strong>azul</strong> con yodo (prueba de almidón)</li>
                    </ul>
                </div>
                
                <div class="concepto">
                    <h3>2️⃣ Amilopectina (70-80%)</h3>
                    <ul>
                        <li>Cadena <strong>ramificada</strong></li>
                        <li>Enlaces α(1→4) en cadenas lineales</li>
                        <li>Enlaces α(1→6) en puntos de ramificación (cada 24-30 glucosas)</li>
                        <li>Hasta 10,000 unidades de glucosa</li>
                        <li>Forma <strong>estructuras arborescentes</strong></li>
                        <li>Se tiñe de <strong>rojo-violeta</strong> con yodo</li>
                    </ul>
                </div>
                
                <h3>Fuentes Alimentarias</h3>
                <table>
                    <tr>
                        <th>Categoría</th>
                        <th>Alimentos</th>
                        <th>% Almidón</th>
                    </tr>
                    <tr>
                        <td><strong>Cereales</strong></td>
                        <td>Arroz, trigo, maíz, avena</td>
                        <td>60-75%</td>
                    </tr>
                    <tr>
                        <td><strong>Tubérculos</strong></td>
                        <td>Papa, camote, yuca</td>
                        <td>15-25%</td>
                    </tr>
                    <tr>
                        <td><strong>Leguminosas</strong></td>
                        <td>Frijol, lenteja, garbanzo</td>
                        <td>40-50%</td>
                    </tr>
                </table>
                
                <h3>Digestión del Almidón</h3>
                <div class="nota-importante">
                    <p><strong>Paso 1 - Boca:</strong></p>
                    <p><em>Amilasa salival (ptialina)</em> inicia la hidrólisis</p>
                    <p>Almidón → Dextrinas → Maltosa</p>
                    
                    <p><strong>Paso 2 - Estómago:</strong></p>
                    <p>La amilasa salival se inactiva por el pH ácido</p>
                    
                    <p><strong>Paso 3 - Intestino delgado:</strong></p>
                    <p><em>Amilasa pancreática</em> continúa la digestión</p>
                    <p>Dextrinas → Maltosa + Maltotriosa</p>
                    
                    <p><strong>Paso 4 - Borde en cepillo:</strong></p>
                    <p><em>Maltasa, isomaltasa</em> completan la digestión</p>
                    <p>Maltosa → Glucosa (absorbida)</p>
                </div>
                
                <hr>
                
                <h2>Glucógeno</h2>
                
                <div class="dato-clave">
                    <h3>🥩 La Reserva Energética Animal</h3>
                    <p><strong>Composición:</strong> Polímero de α-D-Glucosa</p>
                    <p><strong>Peso molecular:</strong> 1-4 millones de daltons</p>
                    <p><strong>Localización:</strong> Hígado (10%) y músculo esquelético (1-2%)</p>
                </div>
                
                <h3>Estructura</h3>
                <ul>
                    <li>Similar a la <strong>amilopectina</strong> pero MÁS ramificado</li>
                    <li>Enlaces α(1→4) en cadenas</li>
                    <li>Enlaces α(1→6) cada 8-12 glucosas (más frecuentes)</li>
                    <li>Hasta 50,000 unidades de glucosa</li>
                    <li>Forma de <strong>"árbol muy ramificado"</strong></li>
                </ul>
                
                <h3>Localización y Función</h3>
                
                <div class="concepto">
                    <h3>🔸 Glucógeno Hepático</h3>
                    <p><strong>Ubicación:</strong> Hígado (100-120 g en adultos)</p>
                    <p><strong>Función:</strong> Mantener la <strong>glucemia</strong> (glucosa en sangre)</p>
                    <p><strong>Liberación:</strong> Entre comidas y durante ayuno</p>
                    <p><strong>Regulación:</strong> Glucagón (moviliza) e insulina (almacena)</p>
                </div>
                
                <div class="concepto">
                    <h3>🔸 Glucógeno Muscular</h3>
                    <p><strong>Ubicación:</strong> Músculo esquelético (300-400 g en adultos)</p>
                    <p><strong>Función:</strong> Energía para la <strong>contracción muscular</strong></p>
                    <p><strong>Uso:</strong> Solo durante ejercicio (NO sale del músculo)</p>
                    <p><strong>Regulación:</strong> Adrenalina (moviliza), insulina (almacena)</p>
                </div>
                
                <h3>Metabolismo del Glucógeno</h3>
                
                <div class="nota-importante">
                    <h3>🔄 Glucogénesis (Síntesis)</h3>
                    <p>Ocurre después de comer (estado postprandial):</p>
                    <p>Glucosa → Glucosa-6-P → Glucosa-1-P → UDP-Glucosa → <strong>GLUCÓGENO</strong></p>
                    <p><strong>Enzima clave:</strong> Glucógeno sintasa</p>
                    <p><strong>Estímulo:</strong> Insulina (alta glucosa en sangre)</p>
                    
                    <h3>⚡ Glucogenólisis (Degradación)</h3>
                    <p>Ocurre en ayuno o ejercicio:</p>
                    <p><strong>GLUCÓGENO</strong> → Glucosa-1-P → Glucosa-6-P → Glucosa (hígado) o Piruvato (músculo)</p>
                    <p><strong>Enzima clave:</strong> Glucógeno fosforilasa</p>
                    <p><strong>Estímulo:</strong> Glucagón (hígado) o adrenalina (músculo)</p>
                </div>
                
                <h3>Importancia de las Ramificaciones</h3>
                <div class="concepto">
                    <p><strong>¿Por qué el glucógeno es tan ramificado?</strong></p>
                    <ul>
                        <li>✅ <strong>Liberación rápida:</strong> Muchos extremos no reductores permiten movilización simultánea</li>
                        <li>✅ <strong>Compacto:</strong> Ocupa menos espacio que cadenas lineales</li>
                        <li>✅ <strong>Solubilidad:</strong> Más ramificaciones = más grupos -OH = mejor solubilidad</li>
                    </ul>
                </div>
                
                <h3>Enfermedades por Almacenamiento de Glucógeno</h3>
                <div class="nota-importante">
                    <p>⚠️ <strong>Glucogenosis:</strong> Grupo de enfermedades genéticas donde hay defectos en enzimas del metabolismo del glucógeno.</p>
                    
                    <p><strong>Tipo I (Enfermedad de Von Gierke):</strong></p>
                    <p>Deficiencia de glucosa-6-fosfatasa → No se libera glucosa del hígado → Hipoglucemia severa</p>
                    
                    <p><strong>Tipo V (Enfermedad de McArdle):</strong></p>
                    <p>Deficiencia de fosforilasa muscular → No se degrada glucógeno muscular → Calambres y debilidad</p>
                </div>
                
                <h2>Comparación: Almidón vs Glucógeno</h2>
                <table>
                    <tr>
                        <th>Característica</th>
                        <th>Almidón</th>
                        <th>Glucógeno</th>
                    </tr>
                    <tr>
                        <td><strong>Organismo</strong></td>
                        <td>Plantas</td>
                        <td>Animales, hongos</td>
                    </tr>
                    <tr>
                        <td><strong>Ramificación</strong></td>
                        <td>Moderada (cada 24-30)</td>
                        <td>Alta (cada 8-12)</td>
                    </tr>
                    <tr>
                        <td><strong>Localización</strong></td>
                        <td>Cloroplastos</td>
                        <td>Hígado, músculo</td>
                    </tr>
                    <tr>
                        <td><strong>Tamaño</strong></td>
                        <td>Hasta 10,000 glucosas</td>
                        <td>Hasta 50,000 glucosas</td>
                    </tr>
                    <tr>
                        <td><strong>Solubilidad</strong></td>
                        <td>Insoluble</td>
                        <td>Parcialmente soluble</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> Tanto almidón como glucógeno son polímeros de α-glucosa con enlaces α(1→4) y α(1→6). La diferencia está en el grado de ramificación.</p>
                </div>
            `
        },
        
        {
            id: 6,
            titulo: 'Polisacáridos Estructurales',
            tiempo: '6 min',
            completada: false,
            contenido: `
                <h1>🏗️ Polisacáridos Estructurales</h1>
                
                <h2>Celulosa</h2>
                
                <div class="dato-clave">
                    <h3>🌿 El Polisacárido Más Abundante del Planeta</h3>
                    <p><strong>Composición:</strong> Polímero de β-D-Glucosa</p>
                    <p><strong>Enlaces:</strong> β(1→4) glucosídicos</p>
                    <p><strong>Tamaño:</strong> 3,000-14,000 unidades de glucosa</p>
                </div>
                
                <h3>Estructura</h3>
                <ul>
                    <li>Cadenas <strong>lineales</strong> de β-glucosa (NO ramificadas)</li>
                    <li>Las cadenas se orientan en forma <strong>antiparalela</strong></li>
                    <li>Puentes de hidrógeno entre cadenas forman <strong>microfibrillas</strong></li>
                    <li>Altamente organizada = muy <strong>resistente</strong></li>
                </ul>
                
                <div class="concepto">
                    <h3>🔬 Diferencia Clave: α vs β Enlace</h3>
                    <p><strong>Almidón/Glucógeno:</strong> Enlaces α(1→4) → Hélice flexible → Digerible</p>
                    <p><strong>Celulosa:</strong> Enlaces β(1→4) → Cadena extendida → NO digerible por humanos</p>
                    <p>⚠️ Los humanos NO tenemos la enzima <em>celulasa</em> para romper enlaces β(1→4)</p>
                </div>
                
                <h3>Localización y Función</h3>
                <div class="concepto">
                    <p><strong>En Plantas:</strong></p>
                    <ul>
                        <li>Principal componente de la <strong>pared celular</strong> (40-50%)</li>
                        <li>Proporciona rigidez y resistencia</li>
                        <li>Permite crecimiento vertical de las plantas</li>
                    </ul>
                    
                    <p><strong>Aplicaciones Industriales:</strong></p>
                    <ul>
                        <li><strong>Papel:</strong> Pulpa de celulosa de árboles</li>
                        <li><strong>Textiles:</strong> Algodón (90% celulosa), lino, cáñamo</li>
                        <li><strong>Biocombustibles:</strong> Etanol celulósico</li>
                        <li><strong>Derivados:</strong> Celofán, rayón, acetato de celulosa</li>
                    </ul>
                </div>
                
                <h3>Fibra Dietética</h3>
                <div class="nota-importante">
                    <p><strong>💡 La Celulosa como Fibra</strong></p>
                    <p>Aunque no la digerimos, la celulosa es crucial como <strong>fibra dietética</strong>:</p>
                    <ul>
                        <li>✅ Aumenta el volumen fecal</li>
                        <li>✅ Estimula peristaltismo intestinal</li>
                        <li>✅ Previene estreñimiento</li>
                        <li>✅ Reduce absorción de colesterol</li>
                        <li>✅ Controla glucemia (retrasa absorción de glucosa)</li>
                        <li>✅ Alimenta microbiota intestinal (fermentación parcial)</li>
                    </ul>
                    <p><strong>Fuentes:</strong> Verduras, frutas (cáscara), granos enteros, legumbres</p>
                </div>
                
                <h3>Digestión por Rumiantes</h3>
                <p>Los <strong>rumiantes</strong> (vacas, ovejas, cabras) SÍ pueden digerir celulosa gracias a:</p>
                <ul>
                    <li><strong>Bacterias simbióticas</strong> en el rumen que producen celulasa</li>
                    <li>Sistema digestivo especializado (4 estómagos)</li>
                    <li>Fermentación bacteriana → Ácidos grasos de cadena corta (energía)</li>
                </ul>
                
                <hr>
                
                <h2>Quitina</h2>
                
                <div class="dato-clave">
                    <h3>🦐 El Segundo Polisacárido Más Abundante</h3>
                    <p><strong>Composición:</strong> Polímero de N-acetilglucosamina</p>
                    <p><strong>Enlaces:</strong> β(1→4) glucosídicos</p>
                    <p><strong>Similar a:</strong> Celulosa (pero con grupo acetamida)</p>
                </div>
                
                <h3>Estructura</h3>
                <ul>
                    <li>Similar a la celulosa pero más <strong>resistente</strong></li>
                    <li>Cada glucosa tiene un grupo <strong>-NHCOCH₃</strong> en C2</li>
                    <li>Forma microfibrillas con puentes de hidrógeno</li>
                    <li>Puede mineralizarse con CaCO₃ (muy duro)</li>
                </ul>
                
                <h3>Localización</h3>
                <div class="concepto">
                    <p><strong>Artrópodos:</strong></p>
                    <ul>
                        <li>Exoesqueleto de <strong>insectos</strong> (cucarachas, escarabajos)</li>
                        <li>Caparazón de <strong>crustáceos</strong> (cangrejos, camarones)</li>
                        <li>Quelíceros de <strong>arácnidos</strong> (arañas, escorpiones)</li>
                    </ul>
                    
                    <p><strong>Hongos:</strong></p>
                    <ul>
                        <li>Pared celular de la mayoría de los hongos</li>
                        <li>Reemplaza a la celulosa (hongos no tienen celulosa)</li>
                    </ul>
                </div>
                
                <h3>Funciones</h3>
                <ul>
                    <li>✅ <strong>Protección:</strong> Barrera física contra depredadores</li>
                    <li>✅ <strong>Soporte:</strong> Mantiene forma del organismo</li>
                    <li>✅ <strong>Impermeabilización:</strong> Previene pérdida de agua</li>
                </ul>
                
                <h3>Aplicaciones</h3>
                <div class="concepto">
                    <ul>
                        <li><strong>Medicina:</strong> Suturas quirúrgicas biodegradables</li>
                        <li><strong>Farmacia:</strong> Encapsulación de medicamentos</li>
                        <li><strong>Agricultura:</strong> Recubrimientos de semillas</li>
                        <li><strong>Cosmética:</strong> Hidratantes y cremas</li>
                        <li><strong>Tratamiento de agua:</strong> Quelante de metales pesados</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>Hemicelulosa</h2>
                
                <div class="dato-clave">
                    <h3>🌾 Componente de la Pared Vegetal</h3>
                    <p><strong>Composición:</strong> Heteropolisacárido (varios azúcares)</p>
                    <p><strong>Componentes:</strong> Xilosa, manosa, galactosa, glucosa, arabinosa</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Cadenas ramificadas más <strong>cortas</strong> que celulosa</li>
                    <li>Se asocia con celulosa en la pared celular</li>
                    <li>Más fácil de hidrolizar que la celulosa</li>
                    <li>Soluble en álcali</li>
                </ul>
                
                <h3>Función</h3>
                <p>Junto con celulosa y pectina, forma la <strong>matriz de la pared celular</strong> vegetal:</p>
                <ul>
                    <li>Celulosa: Fibras de resistencia</li>
                    <li>Hemicelulosa: Unión entre fibras de celulosa</li>
                    <li>Pectina: Cemento que une todo</li>
                </ul>
                
                <hr>
                
                <h2>Pectina</h2>
                
                <div class="dato-clave">
                    <h3>🍎 El Gelificante Natural</h3>
                    <p><strong>Composición:</strong> Polímero de ácido galacturónico</p>
                    <p><strong>Localización:</strong> Pared celular y lámina media de plantas</p>
                </div>
                
                <h3>Características</h3>
                <ul>
                    <li>Polímero <strong>ácido</strong> (grupos carboxilo -COOH)</li>
                    <li>Muy <strong>hidrofilica</strong> (absorbe agua)</li>
                    <li>Forma <strong>geles</strong> en presencia de azúcar y ácido</li>
                </ul>
                
                <h3>Funciones</h3>
                <div class="concepto">
                    <p><strong>En Plantas:</strong></p>
                    <ul>
                        <li>Cementa células vegetales entre sí</li>
                        <li>Controla porosidad de la pared celular</li>
                        <li>Regula crecimiento celular</li>
                    </ul>
                    
                    <p><strong>En Alimentación:</strong></p>
                    <ul>
                        <li>Gelificante en mermeladas y jaleas</li>
                        <li>Estabilizante en jugos y lácteos</li>
                        <li>Espesante en salsas</li>
                    </ul>
                    
                    <p><strong>En Salud:</strong></p>
                    <ul>
                        <li>Fibra soluble (reduce colesterol)</li>
                        <li>Prebiótico (alimenta bacterias beneficiosas)</li>
                        <li>Regula tránsito intestinal</li>
                    </ul>
                </div>
                
                <h3>Fuentes</h3>
                <p>Rica en: Manzana, cítricos (cáscara), membrillo, grosella, remolacha</p>
                
                <hr>
                
                <h2>Tabla Comparativa</h2>
                <table>
                    <tr>
                        <th>Polisacárido</th>
                        <th>Monómero</th>
                        <th>Enlace</th>
                        <th>Organismo</th>
                        <th>Función</th>
                    </tr>
                    <tr>
                        <td><strong>Celulosa</strong></td>
                        <td>β-Glucosa</td>
                        <td>β(1→4)</td>
                        <td>Plantas</td>
                        <td>Estructural</td>
                    </tr>
                    <tr>
                        <td><strong>Quitina</strong></td>
                        <td>N-acetilglucosamina</td>
                        <td>β(1→4)</td>
                        <td>Artrópodos, hongos</td>
                        <td>Estructural</td>
                    </tr>
                    <tr>
                        <td><strong>Hemicelulosa</strong></td>
                        <td>Varios</td>
                        <td>Mixtos</td>
                        <td>Plantas</td>
                        <td>Estructural</td>
                    </tr>
                    <tr>
                        <td><strong>Pectina</strong></td>
                        <td>Ác. galacturónico</td>
                        <td>α(1→4)</td>
                        <td>Plantas</td>
                        <td>Cemento celular</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> Los polisacáridos estructurales tienen enlaces β(1→4) que los humanos NO podemos digerir, pero sirven como fibra dietética esencial.</p>
                </div>
            `
        },
        
        {
            id: 7,
            titulo: 'Metabolismo de Carbohidratos',
            tiempo: '9 min',
            completada: false,
            contenido: `
                <h1>⚡ Metabolismo de Carbohidratos</h1>
                
                <h2>Visión General</h2>
                <p>El <strong>metabolismo de carbohidratos</strong> incluye todas las vías bioquímicas de síntesis, degradación e interconversión de carbohidratos en el organismo.</p>
                
                <div class="dato-clave">
                    <h3>📌 Vías Metabólicas Principales</h3>
                    <ul>
                        <li><strong>Glucólisis:</strong> Degradación de glucosa → energía</li>
                        <li><strong>Gluconeogénesis:</strong> Síntesis de glucosa</li>
                        <li><strong>Glucogenogénesis:</strong> Síntesis de glucógeno</li>
                        <li><strong>Glucogenólisis:</strong> Degradación de glucógeno</li>
                        <li><strong>Vía de pentosas fosfato:</strong> Produce NADPH y ribosa</li>
                        <li><strong>Ciclo de Krebs:</strong> Oxidación completa → CO₂ + H₂O</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>1. Glucólisis</h2>
                
                <div class="dato-clave">
                    <h3>🔥 La Vía Central del Catabolismo de Glucosa</h3>
                    <p><strong>Localización:</strong> Citoplasma</p>
                    <p><strong>Reacción global:</strong> Glucosa + 2 NAD⁺ + 2 ADP + 2 Pi → 2 Piruvato + 2 NADH + 2 ATP + 2 H₂O</p>
                    <p><strong>Balance neto:</strong> +2 ATP, +2 NADH por glucosa</p>
                </div>
                
                <h3>Fases de la Glucólisis</h3>
                
                <div class="concepto">
                    <h3>⬇️ Fase de Inversión (consume ATP)</h3>
                    <p>Pasos 1-5: Se <strong>invierte energía</strong> para preparar la glucosa</p>
                    <ul>
                        <li><strong>Paso 1:</strong> Glucosa → Glucosa-6-P (usa ATP)</li>
                        <li><em>Enzima:</em> Hexoquinasa (irreversible)</li>
                        <li><strong>Paso 3:</strong> Fructosa-6-P → Fructosa-1,6-bifosfato (usa ATP)</li>
                        <li><em>Enzima:</em> Fosfofructoquinasa-1 (PFK-1) ⭐ <em>paso limitante</em></li>
                        <li><strong>Paso 5:</strong> Fructosa-1,6-biP → 2 Gliceraldehído-3-P</li>
                    </ul>
                    <p><strong>Costo:</strong> -2 ATP</p>
                </div>
                
                <div class="concepto">
                    <h3>⬆️ Fase de Beneficio (genera ATP)</h3>
                    <p>Pasos 6-10: Se <strong>produce energía</strong></p>
                    <ul>
                        <li><strong>Paso 6-7:</strong> Gliceraldehído-3-P → 1,3-Bisfosfoglicerato → 3-Fosfoglicerato</li>
                        <li><em>Genera:</em> 1 NADH + 1 ATP (×2 = 2 NADH + 2 ATP)</li>
                        <li><strong>Paso 10:</strong> Fosfoenolpiruvato → <strong>Piruvato</strong></li>
                        <li><em>Enzima:</em> Piruvato quinasa (irreversible)</li>
                        <li><em>Genera:</em> 1 ATP (×2 = 2 ATP)</li>
                    </ul>
                    <p><strong>Beneficio:</strong> +4 ATP, +2 NADH</p>
                </div>
                
                <div class="nota-importante">
                    <h3>🎯 Enzimas Reguladoras (Puntos de Control)</h3>
                    <p><strong>1. Hexoquinasa:</strong></p>
                    <ul>
                        <li>Inhibe: Glucosa-6-P (producto)</li>
                        <li>Atrapa glucosa dentro de la célula</li>
                    </ul>
                    
                    <p><strong>2. Fosfofructoquinasa-1 (PFK-1) ⭐:</strong></p>
                    <ul>
                        <li><strong>Paso limitante</strong> de la glucólisis</li>
                        <li>Activa: AMP, ADP, F-2,6-BP</li>
                        <li>Inhibe: ATP, citrato</li>
                    </ul>
                    
                    <p><strong>3. Piruvato quinasa:</strong></p>
                    <ul>
                        <li>Activa: F-1,6-BP (feedforward)</li>
                        <li>Inhibe: ATP, acetil-CoA, alanina</li>
                    </ul>
                </div>
                
                <h3>Destino del Piruvato</h3>
                <div class="concepto">
                    <p><strong>Con Oxígeno (aeróbico):</strong></p>
                    <p>Piruvato → Acetil-CoA → Ciclo de Krebs → 38 ATP totales</p>
                    
                    <p><strong>Sin Oxígeno (anaeróbico):</strong></p>
                    <p>Piruvato → <strong>Lactato</strong> (músculo) o <strong>Etanol</strong> (levaduras)</p>
                    <p><em>Regenera NAD⁺ para continuar glucólisis</em></p>
                </div>
                
                <hr>
                
                <h2>2. Gluconeogénesis</h2>
                
                <div class="dato-clave">
                    <h3>🔄 Síntesis de Nueva Glucosa</h3>
                    <p><strong>Localización:</strong> Hígado (90%), riñón (10%)</p>
                    <p><strong>Función:</strong> Mantener glucemia en ayuno prolongado</p>
                    <p><strong>Precursores:</strong> Lactato, aminoácidos, glicerol</p>
                </div>
                
                <h3>¿Cuándo Ocurre?</h3>
                <ul>
                    <li>Ayuno > 8 horas</li>
                    <li>Durante el sueño</li>
                    <li>Ejercicio prolongado</li>
                    <li>Dieta baja en carbohidratos</li>
                </ul>
                
                <h3>Ruta</h3>
                <p>Es <strong>casi lo opuesto</strong> a la glucólisis, pero con enzimas diferentes en los pasos irreversibles:</p>
                
                <div class="concepto">
                    <p><strong>Paso 1:</strong> Piruvato → Oxalacetato → Fosfoenolpiruvato</p>
                    <p><em>Enzimas:</em> Piruvato carboxilasa + PEPCK</p>
                    
                    <p><strong>Paso 2:</strong> Fructosa-1,6-BP → Fructosa-6-P</p>
                    <p><em>Enzima:</em> Fructosa-1,6-bisfosfatasa</p>
                    
                    <p><strong>Paso 3:</strong> Glucosa-6-P → <strong>Glucosa</strong></p>
                    <p><em>Enzima:</em> Glucosa-6-fosfatasa (solo en hígado y riñón)</p>
                </div>
                
                <div class="nota-importante">
                    <h3>⚠️ Costo Energético</h3>
                    <p>Hacer glucosa a partir de piruvato cuesta <strong>6 ATP</strong></p>
                    <p>La glucólisis solo genera 2 ATP → Balance neto: -4 ATP</p>
                    <p>⚡ Pero vale la pena: El cerebro NECESITA glucosa (120 g/día)</p>
                </div>
                
                <h3>Regulación</h3>
                <table>
                    <tr>
                        <th>Condición</th>
                        <th>Señal</th>
                        <th>Efecto</th>
                    </tr>
                    <tr>
                        <td><strong>Ayuno</strong></td>
                        <td>↑ Glucagón</td>
                        <td>↑ Gluconeogénesis</td>
                    </tr>
                    <tr>
                        <td><strong>Fed (postprandial)</strong></td>
                        <td>↑ Insulina</td>
                        <td>↓ Gluconeogénesis</td>
                    </tr>
                    <tr>
                        <td><strong>Ejercicio</strong></td>
                        <td>↑ AMP, ↓ ATP</td>
                        <td>↑ Glucólisis, ↓ Gluconeogénesis</td>
                    </tr>
                </table>
                
                <hr>
                
                <h2>3. Metabolismo del Glucógeno</h2>
                
                <h3>Glucogenogénesis (Síntesis)</h3>
                <div class="dato-clave">
                    <p><strong>Cuándo:</strong> Después de comer (alta glucosa)</p>
                    <p><strong>Estímulo:</strong> Insulina</p>
                    <p><strong>Localización:</strong> Hígado, músculo</p>
                </div>
                
                <div class="concepto">
                    <p><strong>Pasos:</strong></p>
                    <p>1. Glucosa → Glucosa-6-P (hexoquinasa)</p>
                    <p>2. Glucosa-6-P → Glucosa-1-P (fosfoglucomutasa)</p>
                    <p>3. Glucosa-1-P + UTP → <strong>UDP-Glucosa</strong> (activada)</p>
                    <p>4. UDP-Glucosa → <strong>GLUCÓGENO</strong> (glucógeno sintasa)</p>
                    <p>5. Ramificaciones cada 8-12 glucosas (enzima ramificante)</p>
                    
                    <p><strong>Enzima clave:</strong> Glucógeno sintasa</p>
                    <p><em>Activada por:</em> Insulina, glucosa-6-P</p>
                    <p><em>Inactivada por:</em> Adrenalina, glucagón (fosforilación)</p>
                </div>
                
                <h3>Glucogenólisis (Degradación)</h3>
                <div class="dato-clave">
                    <p><strong>Cuándo:</strong> Ayuno, ejercicio</p>
                    <p><strong>Estímulo:</strong> Glucagón (hígado), Adrenalina (músculo)</p>
                    <p><strong>Función:</strong> Liberar glucosa para mantener glucemia</p>
                </div>
                
                <div class="concepto">
                    <p><strong>Pasos:</strong></p>
                    <p>1. <strong>GLUCÓGENO</strong> → Glucosa-1-P (glucógeno fosforilasa)</p>
                    <p>2. Glucosa-1-P → Glucosa-6-P (fosfoglucomutasa)</p>
                    <p>3. Glucosa-6-P → <strong>Glucosa</strong> (glucosa-6-fosfatasa, solo hígado)</p>
                    
                    <p><strong>Enzima clave:</strong> Glucógeno fosforilasa</p>
                    <p><em>Activada por:</em> Adrenalina, glucagón, AMP, Ca²⁺</p>
                    <p><em>Inactivada por:</em> Insulina, ATP, glucosa-6-P</p>
                </div>
                
                <div class="nota-importante">
                    <h3>⚠️ Diferencia Músculo vs Hígado</h3>
                    <p><strong>Hígado:</strong></p>
                    <ul>
                        <li>Tiene glucosa-6-fosfatasa</li>
                        <li>Puede liberar glucosa a la sangre</li>
                        <li>Función: Mantener glucemia</li>
                    </ul>
                    
                    <p><strong>Músculo:</strong></p>
                    <ul>
                        <li>NO tiene glucosa-6-fosfatasa</li>
                        <li>Glucosa-6-P se queda en el músculo</li>
                        <li>Función: Energía para contracción muscular</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>4. Vía de las Pentosas Fosfato</h2>
                
                <div class="dato-clave">
                    <h3>🔬 Vía Alternativa de Oxidación de Glucosa</h3>
                    <p><strong>Localización:</strong> Citoplasma</p>
                    <p><strong>Función:</strong> Producir NADPH y ribosa-5-P</p>
                    <p><strong>NO produce ATP</strong></p>
                </div>
                
                <h3>Productos y Funciones</h3>
                <div class="concepto">
                    <p><strong>1. NADPH:</strong></p>
                    <ul>
                        <li>Poder reductor para <strong>biosíntesis</strong> (ácidos grasos, colesterol)</li>
                        <li>Defensa antioxidante (regenera glutatión reducido)</li>
                        <li>Esencial en eritrocitos (protege de estrés oxidativo)</li>
                    </ul>
                    
                    <p><strong>2. Ribosa-5-P:</strong></p>
                    <ul>
                        <li>Precursor de <strong>nucleótidos</strong> (ADN, ARN)</li>
                        <li>Esencial para síntesis de ATP, NAD, FAD, CoA</li>
                    </ul>
                </div>
                
                <h3>Importancia Clínica</h3>
                <div class="nota-importante">
                    <p><strong>Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD):</strong></p>
                    <ul>
                        <li>Enfermedad genética ligada al cromosoma X</li>
                        <li>↓ NADPH → ↓ Glutatión reducido</li>
                        <li>Eritrocitos vulnerables a estrés oxidativo</li>
                        <li><strong>Síntomas:</strong> Anemia hemolítica (al comer habas, ciertos medicamentos)</li>
                        <li>Protección contra malaria (ventaja evolutiva)</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>Integración Metabólica</h2>
                
                <div class="concepto">
                    <h3>Estado Postprandial (Fed)</h3>
                    <p><strong>Señal:</strong> ↑ Insulina</p>
                    <ul>
                        <li>↑ Glucólisis</li>
                        <li>↑ Glucogenogénesis</li>
                        <li>↑ Lipogénesis</li>
                        <li>↓ Gluconeogénesis</li>
                        <li>↓ Glucogenólisis</li>
                    </ul>
                </div>
                
                <div class="concepto">
                    <h3>Estado de Ayuno</h3>
                    <p><strong>Señal:</strong> ↑ Glucagón</p>
                    <ul>
                        <li>↑ Glucogenólisis (primeras 12h)</li>
                        <li>↑ Gluconeogénesis (después de 12h)</li>
                        <li>↑ Lipólisis</li>
                        <li>↑ Cetogénesis</li>
                        <li>↓ Glucólisis</li>
                        <li>↓ Glucogenogénesis</li>
                    </ul>
                </div>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> El metabolismo de carbohidratos está finamente regulado por hormonas (insulina, glucagón) para mantener la glucemia entre 70-110 mg/dL.</p>
                </div>
            `
        },
        
        {
            id: 8,
            titulo: 'Funciones Biológicas de los Carbohidratos',
            tiempo: '6 min',
            completada: false,
            contenido: `
                <h1>🎯 Funciones Biológicas de los Carbohidratos</h1>
                
                <h2>1. Función Energética ⚡</h2>
                
                <div class="dato-clave">
                    <h3>🔥 Principal Fuente de Energía</h3>
                    <p>Los carbohidratos aportan <strong>4 kcal/gramo</strong></p>
                    <p>Son la fuente de energía <strong>más rápida y eficiente</strong></p>
                </div>
                
                <h3>Energía Inmediata: Glucosa</h3>
                <div class="concepto">
                    <ul>
                        <li>El cerebro consume <strong>120 g de glucosa/día</strong> (60% del total)</li>
                        <li>Eritrocitos dependen 100% de glucosa (no tienen mitocondrias)</li>
                        <li>Músculo en ejercicio intenso usa principalmente glucosa</li>
                        <li>ATP se genera en <strong>minutos</strong> (vs horas para lípidos)</li>
                    </ul>
                </div>
                
                <h3>Reserva Energética: Glucógeno</h3>
                <div class="concepto">
                    <p><strong>Hígado:</strong></p>
                    <ul>
                        <li>Almacena 100-120 g de glucógeno</li>
                        <li>Mantiene glucemia entre comidas</li>
                        <li>Se agota en 12-24 horas de ayuno</li>
                    </ul>
                    
                    <p><strong>Músculo:</strong></p>
                    <ul>
                        <li>Almacena 300-400 g de glucógeno</li>
                        <li>Energía para contracción muscular</li>
                        <li>Se agota en 60-90 min de ejercicio intenso</li>
                    </ul>
                </div>
                
                <div class="nota-importante">
                    <p>💡 <strong>Ventaja evolutiva:</strong> Los carbohidratos se movilizan MÁS RÁPIDO que las grasas. Crucial para reacciones de "lucha o huida".</p>
                </div>
                
                <hr>
                
                <h2>2. Función Estructural 🏗️</h2>
                
                <h3>En Plantas</h3>
                <div class="concepto">
                    <p><strong>Celulosa:</strong></p>
                    <ul>
                        <li>Componente principal de la <strong>pared celular</strong> (40-50%)</li>
                        <li>Proporciona rigidez y resistencia</li>
                        <li>Permite crecimiento vertical</li>
                        <li>El compuesto orgánico más abundante del planeta</li>
                    </ul>
                    
                    <p><strong>Hemicelulosa y Pectina:</strong></p>
                    <ul>
                        <li>Completan la matriz de la pared celular</li>
                        <li>Dan flexibilidad y adhesión entre células</li>
                    </ul>
                </div>
                
                <h3>En Animales</h3>
                <div class="concepto">
                    <p><strong>Quitina:</strong></p>
                    <ul>
                        <li><strong>Exoesqueleto</strong> de artrópodos (insectos, crustáceos)</li>
                        <li>Pared celular de hongos</li>
                        <li>Protección y soporte mecánico</li>
                    </ul>
                    
                    <p><strong>Ácido Hialurónico:</strong></p>
                    <ul>
                        <li>Componente de la <strong>matriz extracelular</strong></li>
                        <li>Lubricante de articulaciones</li>
                        <li>Hidratación de tejidos (retiene agua)</li>
                        <li>Presente en humor vítreo del ojo</li>
                    </ul>
                    
                    <p><strong>Condroitín Sulfato:</strong></p>
                    <ul>
                        <li>Componente del <strong>cartílago</strong></li>
                        <li>Resistencia a la compresión</li>
                        <li>Usado en suplementos para osteoartritis</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>3. Función de Reconocimiento Celular 🔐</h2>
                
                <div class="dato-clave">
                    <h3>🎯 El "Código de Barras" Celular</h3>
                    <p>Los carbohidratos en la superficie celular actúan como <strong>marcadores de identidad</strong></p>
                </div>
                
                <h3>Glucoproteínas</h3>
                <div class="concepto">
                    <p>Proteínas con cadenas de carbohidratos unidas:</p>
                    <ul>
                        <li><strong>Antígenos de grupos sanguíneos</strong> (A, B, O)</li>
                        <li>Receptores de superficie celular</li>
                        <li>Anticuerpos (inmunoglobulinas)</li>
                        <li>Hormonas (FSH, LH, hCG)</li>
                    </ul>
                </div>
                
                <h3>Glucolípidos</h3>
                <div class="concepto">
                    <p>Lípidos con carbohidratos:</p>
                    <ul>
                        <li>Componentes de la <strong>membrana plasmática</strong></li>
                        <li>Formación de glucocálix (capa externa)</li>
                        <li>Reconocimiento célula-célula</li>
                        <li>Receptores para virus y toxinas</li>
                    </ul>
                </div>
                
                <div class="ejemplo">
                    <h3>🩸 Grupos Sanguíneos ABO</h3>
                    <p>Determinados por carbohidratos en eritrocitos:</p>
                    <ul>
                        <li><strong>Tipo O:</strong> Antígeno H (básico, solo fucosa)</li>
                        <li><strong>Tipo A:</strong> Antígeno H + N-acetilgalactosamina</li>
                        <li><strong>Tipo B:</strong> Antígeno H + Galactosa</li>
                        <li><strong>Tipo AB:</strong> Ambos antígenos A y B</li>
                    </ul>
                    <p>Las diferencias son SOLO en los <strong>carbohidratos terminales</strong></p>
                </div>
                
                <hr>
                
                <h2>4. Precursores Biosintéticos 🧬</h2>
                
                <h3>Síntesis de Ácidos Nucleicos</h3>
                <div class="concepto">
                    <p><strong>Ribosa y Desoxirribosa:</strong></p>
                    <ul>
                        <li>Esqueleto de ARN y ADN</li>
                        <li>Componente de ATP, NAD, FAD, CoA</li>
                        <li>Producidas en la vía de pentosas fosfato</li>
                    </ul>
                </div>
                
                <h3>Síntesis de Aminoácidos</h3>
                <div class="concepto">
                    <p>Varios aminoácidos NO esenciales se sintetizan a partir de intermediarios de la glucólisis:</p>
                    <ul>
                        <li><strong>3-Fosfoglicerato</strong> → Serina, Glicina, Cisteína</li>
                        <li><strong>Piruvato</strong> → Alanina</li>
                        <li><strong>Oxalacetato</strong> (Krebs) → Aspartato, Asparagina</li>
                        <li><strong>α-Cetoglutarato</strong> (Krebs) → Glutamato, Glutamina, Prolina</li>
                    </ul>
                </div>
                
                <h3>Síntesis de Lípidos</h3>
                <div class="concepto">
                    <p>El exceso de glucosa se convierte en <strong>ácidos grasos</strong>:</p>
                    <ul>
                        <li>Glucosa → Acetil-CoA → Ácidos grasos</li>
                        <li>Glicerol-3-fosfato (de glucólisis) → Esqueleto de triacilglicéridos</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>5. Función Protectora 🛡️</h2>
                
                <h3>Mucopolisacáridos (Glucosaminoglucanos)</h3>
                <div class="concepto">
                    <p><strong>Ácido Hialurónico:</strong></p>
                    <ul>
                        <li>Lubricante en articulaciones</li>
                        <li>Amortiguador en disco intervertebral</li>
                        <li>Protege córnea y humor vítreo</li>
                    </ul>
                    
                    <p><strong>Heparina:</strong></p>
                    <ul>
                        <li><strong>Anticoagulante</strong> natural</li>
                        <li>Evita trombosis</li>
                        <li>Usado clínicamente en cirugía</li>
                    </ul>
                    
                    <p><strong>Queratán Sulfato:</strong></p>
                    <ul>
                        <li>Componente de la <strong>córnea</strong></li>
                        <li>Transparencia del ojo</li>
                        <li>Resistencia mecánica</li>
                    </ul>
                </div>
                
                <h3>Moco y Secreciones</h3>
                <div class="concepto">
                    <ul>
                        <li>Las <strong>glucoproteínas del moco</strong> protegen epitelios</li>
                        <li>Barrera contra patógenos y ácidos</li>
                        <li>Presentes en tracto respiratorio, digestivo, reproductivo</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>6. Regulación de la Expresión Génica 📖</h2>
                
                <div class="concepto">
                    <p><strong>Glucosilación de Proteínas:</strong></p>
                    <ul>
                        <li>Modifica la <strong>actividad</strong> de proteínas</li>
                        <li>Controla localización celular</li>
                        <li>Afecta estabilidad y vida media</li>
                        <li>Regula señalización celular</li>
                    </ul>
                    
                    <p><strong>O-GlcNAc:</strong></p>
                    <ul>
                        <li>N-acetilglucosamina unida a proteínas nucleares y citoplásmicas</li>
                        <li>Compite con fosforilación</li>
                        <li>Regula transcripción, traducción, señalización</li>
                        <li>Sensor del estado metabólico celular</li>
                    </ul>
                </div>
                
                <hr>
                
                <h2>7. Fibra Dietética 🥦</h2>
                
                <div class="dato-clave">
                    <h3>🌾 Beneficios de la Fibra</h3>
                    <p>Aunque NO se digiere, la fibra es <strong>esencial</strong> para la salud</p>
                </div>
                
                <h3>Tipos de Fibra</h3>
                <div class="concepto">
                    <p><strong>Fibra Insoluble:</strong> Celulosa, hemicelulosa, lignina</p>
                    <ul>
                        <li>✅ Aumenta volumen fecal</li>
                        <li>✅ Acelera tránsito intestinal</li>
                        <li>✅ Previene estreñimiento</li>
                        <li>✅ Reduce riesgo de cáncer colorrectal</li>
                    </ul>
                    
                    <p><strong>Fibra Soluble:</strong> Pectina, β-glucanos, inulina</p>
                    <ul>
                        <li>✅ Reduce colesterol LDL</li>
                        <li>✅ Controla glucemia</li>
                        <li>✅ Alimenta microbiota (prebiótico)</li>
                        <li>✅ Aumenta saciedad</li>
                    </ul>
                </div>
                
                <h3>Recomendaciones</h3>
                <p><strong>Ingesta diaria recomendada:</strong> 25-30 gramos</p>
                <p><strong>Fuentes:</strong> Verduras, frutas, granos enteros, legumbres, frutos secos</p>
                
                <hr>
                
                <h2>Resumen de Funciones</h2>
                <table>
                    <tr>
                        <th>Función</th>
                        <th>Carbohidrato</th>
                        <th>Ejemplo</th>
                    </tr>
                    <tr>
                        <td><strong>Energética</strong></td>
                        <td>Glucosa, glucógeno</td>
                        <td>ATP en glucólisis</td>
                    </tr>
                    <tr>
                        <td><strong>Reserva</strong></td>
                        <td>Glucógeno, almidón</td>
                        <td>Hígado, músculo</td>
                    </tr>
                    <tr>
                        <td><strong>Estructural</strong></td>
                        <td>Celulosa, quitina</td>
                        <td>Pared celular, exoesqueleto</td>
                    </tr>
                    <tr>
                        <td><strong>Reconocimiento</strong></td>
                        <td>Glucoproteínas</td>
                        <td>Grupos sanguíneos</td>
                    </tr>
                    <tr>
                        <td><strong>Precursor</strong></td>
                        <td>Ribosa</td>
                        <td>ARN, ADN</td>
                    </tr>
                    <tr>
                        <td><strong>Protectora</strong></td>
                        <td>Ácido hialurónico</td>
                        <td>Líquido sinovial</td>
                    </tr>
                    <tr>
                        <td><strong>Fibra</strong></td>
                        <td>Celulosa, pectina</td>
                        <td>Salud digestiva</td>
                    </tr>
                </table>
                
                <div class="recordatorio">
                    <p>💡 <strong>Recuerda:</strong> Los carbohidratos NO solo son "azúcar y energía". Tienen roles estructurales, de señalización y regulación fundamentales para la vida.</p>
                </div>
            `
        }
    ]
};

// Registrar el módulo globalmente
if (typeof window !== 'undefined') {
    window.CARBOHIDRATOS = CARBOHIDRATOS;
}
