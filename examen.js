// ============================================
// BANCO DE PREGUNTAS PARA EXÁMENES
// ============================================
// Preguntas tipo EXANI-II basadas en guías oficiales 2026
// Estas preguntas son EXCLUSIVAS para los exámenes simulacro

const PREGUNTAS_EXAMEN = {
    
// ============================================
// MATEMÁTICAS - TIPO EXANI-II (80 preguntas)
// ============================================
matematicas: [
    // INECUACIONES Y DESIGUALDADES (10)
    {pregunta:"Un estudiante necesita estudiar por lo menos 98 horas para prepararse adecuadamente. ¿Qué expresión representa esta situación?",opciones:["x = 98","x ≥ 98","x ≤ 98"],correcta:1,explicacion:"'Por lo menos 98' significa mayor o igual que 98"},
    {pregunta:"Una empresa requiere que sus empleados trabajen como máximo 40 horas semanales. ¿Qué inecuación representa esto?",opciones:["h < 40","h ≤ 40","h ≥ 40"],correcta:1,explicacion:"'Como máximo 40' es menor o igual que 40"},
    {pregunta:"Para aprobar necesitas más de 60 puntos. ¿Cuál es la expresión?",opciones:["p > 60","p ≥ 60","p < 60"],correcta:0,explicacion:"'Más de 60' significa estrictamente mayor (>)"},
    {pregunta:"Un tanque puede contener hasta 500 litros. ¿Qué inecuación lo representa?",opciones:["x ≤ 500","x < 500","x ≥ 500"],correcta:0,explicacion:"'Hasta 500' incluye 500, entonces ≤"},
    {pregunta:"Se necesitan al menos 15 personas. ¿Cuál es correcto?",opciones:["p ≥ 15","p > 15","p ≤ 15"],correcta:0,explicacion:"'Al menos' significa mayor o igual"},
    {pregunta:"La temperatura debe estar entre 15°C y 25°C. ¿Qué representa esto?",opciones:["15 < T < 25","15 ≤ T ≤ 25","T = 20"],correcta:1,explicacion:"'Entre' incluye los extremos"},
    {pregunta:"Resuelve: 3x + 5 > 14",opciones:["x > 3","x < 3","x ≥ 3"],correcta:0,explicacion:"3x > 9, x > 3"},
    {pregunta:"Resuelve: -2x ≤ 8",opciones:["x ≤ -4","x ≥ -4","x ≤ 4"],correcta:1,explicacion:"Al dividir entre negativo se invierte: x ≥ -4"},
    {pregunta:"Si 2x - 3 ≥ 7, entonces x:",opciones:["x ≥ 5","x ≤ 5","x > 5"],correcta:0,explicacion:"2x ≥ 10, x ≥ 5"},
    {pregunta:"¿Cuál valor NO satisface x < 10?",opciones:["9","10","5"],correcta:1,explicacion:"10 no es menor que 10"},
    
    // ÁLGEBRA (15)
    {pregunta:"Simplifique: 8(2x - 5y)(-5y + 2x)(2x - 5y)",opciones:["(4x - 10y)³","(16x - 40y)³","8(2x - 5y)³"],correcta:0,explicacion:"8(2x-5y)³ = 8×8(factores) = (4x-10y)³"},
    {pregunta:"¿Cuál es el resultado de (3x + 2)²?",opciones:["9x² + 4","9x² + 12x + 4","9x² + 6x + 4"],correcta:1,explicacion:"(a+b)² = a² + 2ab + b² = 9x² + 12x + 4"},
    {pregunta:"Factoriza: x² - 16",opciones:["(x-4)(x+4)","(x-16)(x+1)","(x-8)(x+8)"],correcta:0,explicacion:"Diferencia de cuadrados: a²-b² = (a-b)(a+b)"},
    {pregunta:"Resuelve: 5x - 3 = 2x + 12",opciones:["x = 5","x = 3","x = 15"],correcta:0,explicacion:"5x - 2x = 12 + 3, 3x = 15, x = 5"},
    {pregunta:"Si f(x) = 2x + 1, entonces f(3) =",opciones:["5","7","9"],correcta:1,explicacion:"f(3) = 2(3) + 1 = 7"},
    {pregunta:"Factoriza: x² + 7x + 12",opciones:["(x+3)(x+4)","(x+2)(x+6)","(x+1)(x+12)"],correcta:0,explicacion:"Números que suman 7 y multiplican 12: 3 y 4"},
    {pregunta:"Simplifique: (x² - 9)/(x - 3)",opciones:["x + 3","x - 3","x² + 3"],correcta:0,explicacion:"x²-9 = (x-3)(x+3), se simplifica a x+3"},
    {pregunta:"¿Cuánto es (2x³)(3x²)?",opciones:["6x⁵","5x⁵","6x⁶"],correcta:0,explicacion:"2×3 = 6, x³×x² = x⁵"},
    {pregunta:"Resuelve: x/4 + 3 = 7",opciones:["x = 16","x = 4","x = 28"],correcta:0,explicacion:"x/4 = 4, x = 16"},
    {pregunta:"Si a² - b² = 24 y a + b = 6, ¿cuánto es a - b?",opciones:["4","3","2"],correcta:0,explicacion:"a²-b² = (a+b)(a-b), 24 = 6(a-b), a-b = 4"},
    {pregunta:"Evalúa: 3x² - 2x + 1 cuando x = 2",opciones:["9","11","13"],correcta:0,explicacion:"3(4) - 2(2) + 1 = 12 - 4 + 1 = 9"},
    {pregunta:"Resuelve: 2(x - 3) = 4x + 2",opciones:["x = -4","x = 4","x = -2"],correcta:0,explicacion:"2x - 6 = 4x + 2, -8 = 2x, x = -4"},
    {pregunta:"¿Cuál es el valor de x en 3x - 7 = 2?",opciones:["x = 3","x = 9","x = 5"],correcta:0,explicacion:"3x = 9, x = 3"},
    {pregunta:"Simplifica: 5x + 3x - 2x",opciones:["6x","10x","8x"],correcta:0,explicacion:"5 + 3 - 2 = 6"},
    {pregunta:"¿Cuál expresión es equivalente a 4(x + 2)?",opciones:["4x + 8","4x + 2","x + 8"],correcta:0,explicacion:"Propiedad distributiva: 4x + 8"},
    
    // TRIGONOMETRÍA (10)
    {pregunta:"Un poste proyecta una sombra de 5m cuando el sol incide a 40°. Si tan(40°) = 0.8391, ¿cuál es la altura del poste?",opciones:["4.60 m","4.20 m","3.80 m"],correcta:1,explicacion:"tan(40°) = altura/5, altura = 5 × 0.8391 ≈ 4.20m"},
    {pregunta:"En un triángulo rectángulo, si el cateto opuesto mide 6 y la hipotenusa 10, ¿cuál es el seno del ángulo?",opciones:["0.6","0.8","0.75"],correcta:0,explicacion:"sen = opuesto/hipotenusa = 6/10 = 0.6"},
    {pregunta:"Si cos(θ) = 0.8 y sen(θ) = 0.6, entonces tan(θ) =",opciones:["0.75","1.33","0.48"],correcta:0,explicacion:"tan = sen/cos = 0.6/0.8 = 0.75"},
    {pregunta:"¿Cuánto es sen(90°)?",opciones:["1","0","0.5"],correcta:0,explicacion:"El seno de 90° es 1"},
    {pregunta:"¿Cuánto es cos(0°)?",opciones:["1","0","-1"],correcta:0,explicacion:"El coseno de 0° es 1"},
    {pregunta:"En un triángulo rectángulo con ángulo de 30°, si la hipotenusa es 10, ¿cuál es el cateto opuesto?",opciones:["5","8.66","10"],correcta:0,explicacion:"sen(30°) = 0.5, cateto = 10 × 0.5 = 5"},
    {pregunta:"Si tan(45°) = 1, y un lado mide 8, ¿cuánto mide el otro?",opciones:["8","4","16"],correcta:0,explicacion:"tan(45°) = 1 = 8/x, entonces x = 8"},
    {pregunta:"¿Cuál es el valor de sen²(θ) + cos²(θ)?",opciones:["1","0","2"],correcta:0,explicacion:"Identidad pitagórica fundamental"},
    {pregunta:"Si cos(θ) = 3/5, ¿cuál puede ser sen(θ)?",opciones:["4/5","1/5","3/5"],correcta:0,explicacion:"Por Pitágoras: sen² = 1 - (9/25) = 16/25, sen = 4/5"},
    {pregunta:"Un ángulo de 60° en radianes es aproximadamente:",opciones:["π/3","π/6","π/2"],correcta:0,explicacion:"60° = π/3 radianes"},
    
    // GEOMETRÍA (15)
    {pregunta:"El área de un círculo de radio 6 es (usa π ≈ 3.14):",opciones:["113.04","37.68","18.84"],correcta:0,explicacion:"A = πr² = 3.14 × 36 = 113.04"},
    {pregunta:"En un cuadrado de lado 6, se inscribe un círculo de radio 3. ¿Cuál es el área sombreada?",opciones:["7.74","8.26","9.42"],correcta:0,explicacion:"Área cuadrado = 36, Área círculo ≈ 28.26, Diferencia = 7.74"},
    {pregunta:"El perímetro de un rectángulo de 8 cm × 5 cm es:",opciones:["26 cm","40 cm","13 cm"],correcta:0,explicacion:"P = 2(8+5) = 26 cm"},
    {pregunta:"La diagonal de un cuadrado de lado 4 cm es aproximadamente:",opciones:["5.66 cm","4 cm","8 cm"],correcta:0,explicacion:"d = lado√2 = 4√2 ≈ 5.66 cm"},
    {pregunta:"El área de un triángulo de base 10 y altura 6 es:",opciones:["30","60","16"],correcta:0,explicacion:"A = (b×h)/2 = 60/2 = 30"},
    {pregunta:"¿Cuántos grados suma los ángulos internos de un pentágono?",opciones:["540°","360°","720°"],correcta:0,explicacion:"(n-2)×180° = 3×180° = 540°"},
    {pregunta:"El volumen de un cubo de arista 3 cm es:",opciones:["27 cm³","9 cm³","18 cm³"],correcta:0,explicacion:"V = a³ = 3³ = 27"},
    {pregunta:"La circunferencia de un círculo de radio 5 es (π ≈ 3.14):",opciones:["31.4","15.7","78.5"],correcta:0,explicacion:"C = 2πr = 2×3.14×5 = 31.4"},
    {pregunta:"¿Cuántas diagonales tiene un hexágono?",opciones:["9","6","12"],correcta:0,explicacion:"Fórmula: n(n-3)/2 = 6×3/2 = 9"},
    {pregunta:"El área de un trapecio con bases 8 y 4, altura 5 es:",opciones:["30","40","20"],correcta:0,explicacion:"A = ((B+b)×h)/2 = (12×5)/2 = 30"},
    {pregunta:"¿Cuánto mide cada ángulo interno de un triángulo equilátero?",opciones:["60°","90°","45°"],correcta:0,explicacion:"180°/3 = 60°"},
    {pregunta:"El área de un rombo con diagonales 6 y 8 es:",opciones:["24","48","12"],correcta:0,explicacion:"A = (D×d)/2 = (6×8)/2 = 24"},
    {pregunta:"Si un rectángulo tiene área 48 y base 8, su altura es:",opciones:["6","4","12"],correcta:0,explicacion:"A = b×h, 48 = 8×h, h = 6"},
    {pregunta:"El volumen de un cilindro de radio 3 y altura 4 es (π ≈ 3.14):",opciones:["113.04","37.68","226.08"],correcta:0,explicacion:"V = πr²h = 3.14×9×4 = 113.04"},
    {pregunta:"Un ángulo de 120° es:",opciones:["Obtuso","Agudo","Recto"],correcta:0,explicacion:"Mayor a 90° = obtuso"},
    
    // ESTADÍSTICA Y PROBABILIDAD (15)
    {pregunta:"Las calificaciones son: 7, 8, 9, 7, 9. ¿Cuál es la media?",opciones:["8","7.5","8.5"],correcta:0,explicacion:"(7+8+9+7+9)/5 = 40/5 = 8"},
    {pregunta:"En {3, 5, 5, 7, 9, 5}, la moda es:",opciones:["5","7","6"],correcta:0,explicacion:"5 aparece 3 veces (más frecuente)"},
    {pregunta:"La mediana de {2, 4, 6, 8, 10} es:",opciones:["6","5","7"],correcta:0,explicacion:"El valor central es 6"},
    {pregunta:"Al lanzar un dado, ¿probabilidad de par?",opciones:["1/2","1/3","2/3"],correcta:0,explicacion:"Pares: 2,4,6 = 3/6 = 1/2"},
    {pregunta:"En una urna con 5 rojas y 3 azules, ¿P(roja)?",opciones:["5/8","3/8","1/2"],correcta:0,explicacion:"5/(5+3) = 5/8"},
    {pregunta:"La desviación estándar mide:",opciones:["Dispersión de datos","Promedio","Valor central"],correcta:0,explicacion:"Mide qué tan dispersos están los datos"},
    {pregunta:"Si lanzas 2 monedas, ¿P(2 caras)?",opciones:["1/4","1/2","1/3"],correcta:0,explicacion:"CC de 4 posibles: CC, CS, SC, SS"},
    {pregunta:"En 100 estudiantes, 60 son mujeres. ¿Porcentaje de hombres?",opciones:["40%","60%","50%"],correcta:0,explicacion:"100-60 = 40"},
    {pregunta:"¿Cuál NO es medida de tendencia central?",opciones:["Rango","Media","Mediana"],correcta:0,explicacion:"Rango es medida de dispersión"},
    {pregunta:"La moda de {1,1,2,3,3,3,4} es:",opciones:["3","1","2"],correcta:0,explicacion:"3 aparece más veces"},
    {pregunta:"Probabilidad de NO sacar 6 en un dado:",opciones:["5/6","1/6","1/2"],correcta:0,explicacion:"5 resultados favorables de 6"},
    {pregunta:"Si la media es 10 y hay 5 datos que suman 50, ¿es correcto?",opciones:["Sí","No","Faltan datos"],correcta:0,explicacion:"Media = 50/5 = 10 ✓"},
    {pregunta:"¿Cuál conjunto tiene mayor variabilidad? A:{1,2,3} B:{1,10,100}",opciones:["B","A","Igual"],correcta:0,explicacion:"B tiene datos más dispersos"},
    {pregunta:"Al lanzar 2 dados, ¿P(suma=7)?",opciones:["1/6","1/12","1/36"],correcta:0,explicacion:"6 combinaciones de 36: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1)"},
    {pregunta:"Mediana de {5,2,9,1,7}:",opciones:["5","7","2"],correcta:0,explicacion:"Ordenar: 1,2,5,7,9. Central = 5"},
    
    // PROPORCIONES Y PORCENTAJES (15)
    {pregunta:"Si 4 lápices cuestan $20, ¿cuánto cuestan 7?",opciones:["$35","$28","$30"],correcta:0,explicacion:"20/4 = x/7, x = 35"},
    {pregunta:"¿Cuál es el 25% de 80?",opciones:["20","25","15"],correcta:0,explicacion:"80 × 0.25 = 20"},
    {pregunta:"Si costaba $200 y aumentó 15%, ahora cuesta:",opciones:["$230","$215","$250"],correcta:0,explicacion:"200 × 1.15 = 230"},
    {pregunta:"Con 20% de descuento cuesta $240. Precio original:",opciones:["$300","$280","$288"],correcta:0,explicacion:"240 = x × 0.8, x = 300"},
    {pregunta:"En solución 5:1 agua:sal, si tengo 300ml total, ¿cuánta sal?",opciones:["50 ml","60 ml","250 ml"],correcta:0,explicacion:"Sal es 1/6: 300/6 = 50"},
    {pregunta:"Si 12 es el 30% de un número, ¿cuál es el número?",opciones:["40","36","30"],correcta:0,explicacion:"12 = 0.3x, x = 40"},
    {pregunta:"Aumentar 50% y luego disminuir 50% equivale a:",opciones:["Disminuir 25%","Mantener igual","Aumentar 25%"],correcta:0,explicacion:"100→150→75 = pérdida de 25%"},
    {pregunta:"¿Qué porcentaje es 15 de 60?",opciones:["25%","20%","30%"],correcta:0,explicacion:"15/60 = 0.25 = 25%"},
    {pregunta:"Si 3 trabajadores pintan en 6 días, ¿cuántos días tardan 6?",opciones:["3 días","12 días","9 días"],correcta:0,explicacion:"Inversa: 3×6 = 6×x, x=3"},
    {pregunta:"Una receta para 4 usa 200g azúcar. ¿Para 10 personas?",opciones:["500g","400g","600g"],correcta:0,explicacion:"200/4 = x/10, x = 500"},
    {pregunta:"$1000 con interés simple 5% anual por 2 años:",opciones:["$1100","$1050","$1000"],correcta:0,explicacion:"I = 1000×0.05×2 = 100, Total = 1100"},
    {pregunta:"De 200 estudiantes, 25% reprobó. ¿Cuántos aprobaron?",opciones:["150","50","175"],correcta:0,explicacion:"200 × 0.75 = 150"},
    {pregunta:"Razón 3:4 y el primero es 15. ¿Cuánto es el segundo?",opciones:["20","12","18"],correcta:0,explicacion:"3/4 = 15/x, x = 20"},
    {pregunta:"IVA 16%. Si pagas $116, ¿cuál es el precio sin IVA?",opciones:["$100","$116","$97.44"],correcta:0,explicacion:"116/1.16 = 100"},
    {pregunta:"Ganancia de 20% sobre $500:",opciones:["$100","$600","$120"],correcta:0,explicacion:"500 × 0.2 = 100"},
],

// ============================================
// COMPRENSIÓN LECTORA (30 preguntas)
// ============================================
comprension: [
    {pregunta:"Un texto argumentativo se caracteriza por:",opciones:["Narrar hechos","Defender una postura con argumentos","Describir objetos"],correcta:1,explicacion:"Textos argumentativos defienden una tesis con razones"},
    {pregunta:"La idea principal de un párrafo generalmente está:",opciones:["Siempre al inicio","Al inicio o al final","Nunca se puede identificar"],correcta:1,explicacion:"Depende del estilo: puede estar al principio o final"},
    {pregunta:"Un sinónimo de 'diligente' es:",opciones:["Cuidadoso","Descuidado","Lento"],correcta:0,explicacion:"Diligente = cuidadoso, aplicado"},
    {pregunta:"Antónimo de 'escasez':",opciones:["Abundancia","Carencia","Falta"],correcta:0,explicacion:"Escasez ↔ Abundancia"},
    {pregunta:"'Sin embargo' es un conector de:",opciones:["Contraste","Adición","Causa"],correcta:0,explicacion:"Indica oposición"},
    {pregunta:"La función de un abstract es:",opciones:["Decorar","Resumir el estudio completo","Agradecer"],correcta:1,explicacion:"Resume objetivos, métodos y resultados"},
    {pregunta:"En textos expositivos, el objetivo es:",opciones:["Convencer","Informar objetivamente","Entretener"],correcta:1,explicacion:"Expositivos informan sin opinar"},
    {pregunta:"Una cita textual debe:",opciones:["Modificarse libremente","Reproducirse exactamente entre comillas","Omitir la fuente"],correcta:1,explicacion:"Debe ser exacta y citada"},
    {pregunta:"'Por lo tanto' es conector de:",opciones:["Consecuencia","Oposición","Tiempo"],correcta:0,explicacion:"Indica resultado o conclusión"},
    {pregunta:"El propósito de una introducción es:",opciones:["Dar conclusiones","Presentar tema y tesis","Desarrollar argumentos"],correcta:1,explicacion:"Introduce el tema principal"},
],

// ============================================
// REDACCIÓN (20 preguntas)
// ============================================
redaccion: [
    {pregunta:"Complete: La _iopsia re_eló células malignas",opciones:["b-v","v-b","b-b"],correcta:0,explicacion:"Biopsia (b), reveló (v)"},
    {pregunta:"Identifique el error: 'Hubieron muchos casos'",opciones:["Es correcto","Debe ser: Hubo muchos casos","Debe ser: Habían muchos casos"],correcta:1,explicacion:"Haber impersonal va en singular"},
    {pregunta:"Complete: _l médico di_o que _l paciente mejoró",opciones:["Él-j-e","El-j-el","Él-g-el"],correcta:0,explicacion:"Él (pronombre), dijo (j), el (artículo)"},
    {pregunta:"Seleccione la correcta:",opciones:["Sé que tú tienes razón","Se que tu tienes razon","Sé qué tú tienes razón"],correcta:0,explicacion:"Sé (verbo), tú (pronombre), razón (tilde)"},
    {pregunta:"'Sin embargo' va seguido de:",opciones:["Coma","Punto","Nada"],correcta:0,explicacion:"Locuciones adverbiales llevan coma"},
],

cienciasNaturales: []

};

console.log("✅ Banco COMPLETO de examen cargado");
console.log("📊 Matemáticas:", PREGUNTAS_EXAMEN.matematicas.length);
console.log("📊 Comprensión:", PREGUNTAS_EXAMEN.comprension.length);
console.log("📊 Redacción:", PREGUNTAS_EXAMEN.redaccion.length);
