// ========================================
// PREGUNTAS: Pensamiento Matemático
// CENEVAL EXANI-II — Temario oficial 2025
// Subárea Comprensión: Conexiones · Estimación · Sentido numérico
// Subárea Matematización: Desarrollo de usos · Lenguaje matemático · Resignificaciones
// ========================================

const PREGUNTAS_MATEMATICAS = [

// ══════════════════════════════════════════════
// CONEXIONES — Razones y proporciones
// ══════════════════════════════════════════════

{pregunta:"Si 3 enfermeras atienden 45 pacientes, ¿cuántas enfermeras se necesitan para atender 75 pacientes?",
opciones:["4","5","6","7"],
correcta:1,explicacion:"Regla de tres directa: 3/45 = x/75 → x = (3×75)/45 = 5 enfermeras."},

{pregunta:"En una solución, la razón medicamento:agua es 1:4. Si se necesitan 250 mL de solución total, ¿cuántos mL de medicamento se requieren?",
opciones:["25 mL","50 mL","62.5 mL","100 mL"],
correcta:1,explicacion:"La razón 1:4 significa que de cada 5 partes, 1 es medicamento. 250 ÷ 5 = 50 mL de medicamento."},

// ══════════════════════════════════════════════
// CONEXIONES — Interpretación gráfica de ecuaciones lineales
// ══════════════════════════════════════════════

{pregunta:"La gráfica de la ecuación y = 2x + 3 cruza el eje Y en el punto:",
opciones:["(0, 2)","(0, 3)","(3, 0)","(-3/2, 0)"],
correcta:1,explicacion:"En y = mx + b, la intersección con el eje Y ocurre cuando x = 0: y = 2(0) + 3 = 3. El punto es (0, 3)."},

{pregunta:"¿Cuál es la pendiente de la recta que pasa por los puntos (2, 5) y (6, 13)?",
opciones:["1","2","3","4"],
correcta:1,explicacion:"Pendiente m = (y₂ - y₁)/(x₂ - x₁) = (13 - 5)/(6 - 2) = 8/4 = 2."},

// ══════════════════════════════════════════════
// CONEXIONES — Ejes de simetría
// ══════════════════════════════════════════════

{pregunta:"¿Cuántos ejes de simetría tiene un cuadrado?",
opciones:["2","4","6","8"],
correcta:1,explicacion:"Un cuadrado tiene 4 ejes de simetría: 2 que pasan por los puntos medios de lados opuestos, y 2 que pasan por los vértices opuestos (diagonales)."},

{pregunta:"¿Cuál figura tiene infinitos ejes de simetría?",
opciones:["Triángulo equilátero","Rectángulo","Círculo","Hexágono regular"],
correcta:2,explicacion:"El círculo tiene infinitos ejes de simetría porque cualquier línea que pase por su centro divide la figura en dos partes simétricas iguales."},

// ══════════════════════════════════════════════
// CONEXIONES — Frecuencias y probabilidad clásica
// ══════════════════════════════════════════════

{pregunta:"En un grupo de 40 pacientes, 16 presentaron hipertensión. ¿Cuál es la frecuencia relativa de hipertensión?",
opciones:["0.20","0.40","0.45","0.16"],
correcta:1,explicacion:"Frecuencia relativa = frecuencia absoluta / total = 16/40 = 0.40 (40%)."},

{pregunta:"En una urna hay 5 bolas rojas, 3 azules y 2 verdes. ¿Cuál es la probabilidad clásica de sacar una bola roja?",
opciones:["1/5","1/2","3/10","1/3"],
correcta:1,explicacion:"P(roja) = casos favorables / casos totales = 5 / (5+3+2) = 5/10 = 1/2."},

{pregunta:"Al lanzar dos dados, ¿cuál es la probabilidad de obtener una suma de 7?",
opciones:["1/6","1/9","5/36","7/36"],
correcta:0,explicacion:"Pares que suman 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 casos. Total de resultados posibles: 36. P = 6/36 = 1/6."},

// ══════════════════════════════════════════════
// ESTIMACIÓN — Leyes de los exponentes
// ══════════════════════════════════════════════

{pregunta:"Simplifica: x³ · x⁴",
opciones:["x⁷","x¹²","x","x⁸"],
correcta:0,explicacion:"Ley de producto de potencias de igual base: x^m · x^n = x^(m+n). Entonces x³ · x⁴ = x^(3+4) = x⁷."},

{pregunta:"¿Cuánto es (2³)²?",
opciones:["2⁵","2⁶","2⁸","2¹²"],
correcta:1,explicacion:"Ley de potencia de una potencia: (x^m)^n = x^(m·n). (2³)² = 2^(3·2) = 2⁶ = 64."},

{pregunta:"Simplifica: x⁶ / x²",
opciones:["x⁴","x³","x⁸","x¹²"],
correcta:0,explicacion:"Ley de cociente de potencias: x^m / x^n = x^(m-n). x⁶ / x² = x^(6-2) = x⁴."},

{pregunta:"¿Cuánto vale 5⁰?",
opciones:["0","1","5","Indefinido"],
correcta:1,explicacion:"Cualquier número elevado a la potencia cero es igual a 1 (excepto 0⁰ que es indeterminado). 5⁰ = 1."},

// ══════════════════════════════════════════════
// ESTIMACIÓN — Porcentaje y unidades de medida
// ══════════════════════════════════════════════

{pregunta:"¿Cuál es el 15% de 200?",
opciones:["20","25","30","35"],
correcta:2,explicacion:"15% de 200 = (15/100) × 200 = 30."},

{pregunta:"Un medicamento costaba $80 y aumentó un 25%. ¿Cuánto cuesta ahora?",
opciones:["$90","$95","$100","$105"],
correcta:2,explicacion:"Incremento = 25% × 80 = 20. Precio nuevo = 80 + 20 = $100."},

{pregunta:"Un paciente pesa 85 kg. El médico necesita saber su peso en gramos para calcular la dosis exacta. ¿Cuántos gramos pesa?",
opciones:["850 g","8,500 g","85,000 g","850,000 g"],
correcta:2,explicacion:"1 kg = 1,000 g. Entonces 85 kg = 85 × 1,000 = 85,000 g. Importante en farmacología para cálculo de dosis."},

// ══════════════════════════════════════════════
// ESTIMACIÓN — Espacio muestral
// ══════════════════════════════════════════════

{pregunta:"Se lanza una moneda y un dado. ¿Cuántos resultados posibles hay en el espacio muestral?",
opciones:["6","8","12","16"],
correcta:2,explicacion:"Espacio muestral = combinaciones de cara/cruz (2) × resultados del dado (6) = 2 × 6 = 12 resultados posibles."},

{pregunta:"¿Qué es el espacio muestral en un experimento aleatorio?",
opciones:["El resultado más probable del experimento","El conjunto de todos los resultados posibles del experimento","Solo los resultados favorables al evento deseado","La diferencia entre resultados posibles y desfavorables"],
correcta:1,explicacion:"El espacio muestral (Ω) es el conjunto universal de todos los resultados posibles de un experimento aleatorio."},

// ══════════════════════════════════════════════
// SENTIDO NUMÉRICO — Inecuaciones y álgebra
// ══════════════════════════════════════════════

{pregunta:"Resuelve: 2x + 3 > 11",
opciones:["x > 3","x > 4","x > 7","x < 4"],
correcta:1,explicacion:"2x > 11 - 3 → 2x > 8 → x > 4."},

{pregunta:"Resuelve: -3x ≤ 12",
opciones:["x ≤ -4","x ≥ -4","x ≤ 4","x ≥ 4"],
correcta:1,explicacion:"Al dividir entre un número negativo se invierte la desigualdad: x ≥ 12/(-3) → x ≥ -4."},

{pregunta:"Simplifica: (x² - 9) / (x - 3)",
opciones:["x - 3","x + 3","x² + 3","x - 9"],
correcta:1,explicacion:"x² - 9 = (x+3)(x-3). Al dividir entre (x-3) se cancela ese factor: resultado = x + 3 (con x ≠ 3)."},

// ══════════════════════════════════════════════
// SENTIDO NUMÉRICO — Razones trigonométricas y área
// ══════════════════════════════════════════════

{pregunta:"En un triángulo rectángulo, el cateto opuesto = 3 y la hipotenusa = 5. ¿Cuánto vale sen θ?",
opciones:["3/4","3/5","4/5","5/3"],
correcta:1,explicacion:"sen θ = cateto opuesto / hipotenusa = 3/5 = 0.6."},

{pregunta:"cos(90°) = ?",
opciones:["1","-1","0","0.5"],
correcta:2,explicacion:"cos(90°) = 0. Es uno de los valores fundamentales de las razones trigonométricas."},

{pregunta:"Área de un triángulo de base 10 cm y altura 6 cm:",
opciones:["30 cm²","60 cm²","16 cm²","120 cm²"],
correcta:0,explicacion:"Área triángulo = (base × altura) / 2 = (10 × 6) / 2 = 30 cm²."},

// ══════════════════════════════════════════════
// SENTIDO NUMÉRICO — Media aritmética y desviación estándar
// ══════════════════════════════════════════════

{pregunta:"Media aritmética de: 4, 8, 6, 10, 7",
opciones:["6","7","8","9"],
correcta:1,explicacion:"Media = suma/cantidad = (4+8+6+10+7)/5 = 35/5 = 7."},

{pregunta:"Los siguientes datos representan presiones sistólicas (mmHg): 120, 120, 122, 118, 120. ¿Cuál es la moda?",
opciones:["118","119","120","122"],
correcta:2,explicacion:"La moda es el valor que más se repite. El 120 aparece 3 veces, más que cualquier otro valor."},

{pregunta:"¿Qué mide la desviación estándar en un conjunto de datos?",
opciones:["El valor central más representativo del conjunto","La diferencia entre el valor máximo y el mínimo","La dispersión o variabilidad de los datos respecto a su media","La suma de todos los datos dividida entre el número de elementos"],
correcta:2,explicacion:"La desviación estándar mide qué tan dispersos están los datos respecto a la media. Una desviación alta indica mayor variabilidad; una baja indica datos más agrupados cerca de la media."},

{pregunta:"Se tienen los datos: 2, 4, 4, 6. La media es 4. ¿Cuál es la varianza?",
opciones:["1","2","3","4"],
correcta:1,explicacion:"Varianza = promedio de cuadrados de desviaciones: [(2-4)²+(4-4)²+(4-4)²+(6-4)²]/4 = [4+0+0+4]/4 = 8/4 = 2. La desviación estándar sería √2 ≈ 1.41."},

// ══════════════════════════════════════════════
// MATEMATIZACIÓN — Lenguaje matemático: Polinomios
// ══════════════════════════════════════════════

{pregunta:"Factoriza: x² - 9",
opciones:["(x - 3)²","(x + 3)(x - 3)","(x - 9)(x + 1)","(x + 9)(x - 1)"],
correcta:1,explicacion:"x² - 9 es una diferencia de cuadrados: a² - b² = (a+b)(a-b). Entonces x² - 9 = (x+3)(x-3)."},

{pregunta:"Factoriza: x² + 5x + 6",
opciones:["(x + 2)(x + 3)","(x + 1)(x + 6)","(x - 2)(x - 3)","(x + 5)(x + 1)"],
correcta:0,explicacion:"Se buscan dos números que sumen 5 y multipliquen 6: son 2 y 3. Entonces x² + 5x + 6 = (x+2)(x+3)."},

{pregunta:"¿Cuál es el grado del polinomio 4x³ - 2x² + 7x - 1?",
opciones:["1","2","3","4"],
correcta:2,explicacion:"El grado de un polinomio es el mayor exponente de la variable. El término de mayor exponente es 4x³, por lo que el grado es 3."},

{pregunta:"Resuelve el sistema de ecuaciones:\nx + y = 10\n2x - y = 2",
opciones:["x = 3, y = 7","x = 4, y = 6","x = 5, y = 5","x = 6, y = 4"],
correcta:1,explicacion:"Suma ambas ecuaciones: 3x = 12 → x = 4. Sustituye en la primera: 4 + y = 10 → y = 6."},

{pregunta:"Resuelve el sistema:\nx + y + z = 6\nx - y + z = 2\n2x + y - z = 1",
opciones:["x=1, y=2, z=3","x=2, y=1, z=3","x=1, y=3, z=2","x=3, y=2, z=1"],
correcta:0,explicacion:"Ec1 + Ec2: 2x + 2z = 8 → x + z = 4. Ec1 + Ec3: 3x + 2y = 7. Resolviendo: x=1, z=3, y=2. Verificación: 1+2+3=6 ✓, 1-2+3=2 ✓, 2+2-3=1 ✓."},

// ══════════════════════════════════════════════
// MATEMATIZACIÓN — Desarrollo de usos: funciones cuadráticas
// ══════════════════════════════════════════════

{pregunta:"¿Cuál es el vértice de la parábola y = x² - 4x + 3?",
opciones:["(2, -1)","(-2, 1)","(2, 1)","(4, 3)"],
correcta:0,explicacion:"Vértice en x = -b/2a = -(-4)/2(1) = 2. y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1. Vértice: (2, -1)."},

{pregunta:"La función f(x) = x² - 6x + 5 abre hacia arriba. ¿En qué valores de x corta al eje horizontal (y=0)?",
opciones:["x = 1 y x = 5","x = -1 y x = -5","x = 2 y x = 3","x = 0 y x = 6"],
correcta:0,explicacion:"x² - 6x + 5 = 0 → (x-1)(x-5) = 0 → x = 1 y x = 5. Estos son los ceros o raíces de la función cuadrática."},

{pregunta:"¿Cuál es la forma general de una ecuación de segundo grado (cuadrática)?",
opciones:["y = mx + b","ax² + bx + c = 0","ax³ + bx² + cx + d = 0","y = a/x"],
correcta:1,explicacion:"La ecuación cuadrática (segundo grado) tiene la forma general ax² + bx + c = 0, donde a ≠ 0."},

// ══════════════════════════════════════════════
// MATEMATIZACIÓN — Medidas de tendencia central y dispersión
// ══════════════════════════════════════════════

{pregunta:"Datos: 3, 7, 5, 9, 6. ¿Cuál es la mediana?",
opciones:["5","6","7","8"],
correcta:1,explicacion:"Ordenados: 3, 5, 6, 7, 9. La mediana es el valor central (posición 3): 6."},

{pregunta:"Un estudiante obtuvo estas calificaciones: 7, 9, 8, 10, 6, 9. ¿Cuál es el rango (dispersión máxima)?",
opciones:["3","4","5","6"],
correcta:1,explicacion:"Rango = valor máximo - valor mínimo = 10 - 6 = 4. El rango es la medida de dispersión más sencilla."},

// ══════════════════════════════════════════════
// MATEMATIZACIÓN — Resignificaciones: Variación lineal tabular y medidas de posición
// ══════════════════════════════════════════════

{pregunta:"La siguiente tabla muestra la relación entre horas de estudio (x) y calificación (y):\n\nx: 1  2  3  4\ny: 6  8  10  12\n\n¿Cuánto aumenta y por cada hora adicional de estudio?",
opciones:["1 punto","2 puntos","3 puntos","4 puntos"],
correcta:1,explicacion:"La diferencia entre valores de y es constante: 8-6=2, 10-8=2, 12-10=2. Es una variación lineal con pendiente 2 (aumenta 2 puntos por hora)."},

{pregunta:"En la tabla anterior (x: 1,2,3,4 → y: 6,8,10,12), ¿cuál sería la calificación esperada con 6 horas de estudio?",
opciones:["14","16","18","20"],
correcta:1,explicacion:"La ecuación lineal es y = 2x + 4. Para x=6: y = 2(6)+4 = 12+4 = 16."},

{pregunta:"En un grupo de 100 estudiantes, una persona está en el percentil 85. ¿Qué significa esto?",
opciones:["Obtuvo 85 puntos en el examen","Su calificación supera a la del 85% del grupo","Es el estudiante número 85 de la lista","Respondió correctamente el 85% de las preguntas"],
correcta:1,explicacion:"El percentil 85 significa que ese estudiante obtuvo un puntaje mayor que el 85% de los demás participantes. Es una medida de posición relativa."},

{pregunta:"¿Qué divide a un conjunto de datos ordenados en cuatro partes iguales?",
opciones:["Los percentiles","Los deciles","Los cuartiles","Las frecuencias"],
correcta:2,explicacion:"Los cuartiles (Q1, Q2, Q3) dividen los datos en cuatro partes iguales. Los deciles los dividen en 10 partes, y los percentiles en 100 partes."},

{pregunta:"Los deciles dividen un conjunto de datos ordenados en:",
opciones:["4 partes iguales","10 partes iguales","100 partes iguales","2 partes iguales"],
correcta:1,explicacion:"Los deciles son las 9 medidas de posición que dividen los datos en 10 partes iguales. El D5 (quinto decil) equivale a la mediana."},

];

console.log("✅ Pensamiento Matemático EXANI-II:", PREGUNTAS_MATEMATICAS.length, "preguntas");
