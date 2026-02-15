// ========================================
// PREGUNTAS: Matemáticas
// ========================================

const PREGUNTAS_MATEMATICAS = [
    // ÁLGEBRA - Ecuaciones (15 preguntas)
    {pregunta:"Resuelva: 3x - 7 = 2x + 5",opciones:["x = 12","x = -12","x = 2"],correcta:0,explicacion:"3x - 2x = 5 + 7, x = 12"},
    
    {pregunta:"Resuelva: 5(x - 2) = 3x + 6",opciones:["x = 4","x = 8","x = 2"],correcta:1,explicacion:"5x - 10 = 3x + 6, 2x = 16, x = 8"},
    
    {pregunta:"Resuelva: x/3 + 5 = 11",opciones:["x = 48","x = 6","x = 18"],correcta:2,explicacion:"x/3 = 6, x = 18"},
    
    {pregunta:"Resuelva el sistema: x + y = 10; 2x - y = 2",opciones:["x=4, y=6","x=3, y=7","x=5, y=5"],correcta:0,explicacion:"Sumando ecuaciones: 3x = 12, x = 4; y = 6"},

    // ÁLGEBRA - Inecuaciones (10 preguntas)
    {pregunta:"Un medicamento es efectivo cuando su concentración está entre 15 y 45 mg/L. ¿Qué inecuación representa esto?",opciones:["15 < C < 45","15 ≤ C ≤ 45","C ≥ 15"],correcta:1,explicacion:"Se incluyen extremos (≤)"},
    
    {pregunta:"Resuelva: 2x + 3 > 11",opciones:["x = 4","x < 4","x > 4"],correcta:2,explicacion:"2x > 8, x > 4"},
    
    {pregunta:"Resuelva: -3x ≤ 12",opciones:["x ≥ -4","x ≤ -4","x ≤ 4"],correcta:0,explicacion:"Al dividir entre negativo, se invierte: x ≥ -4"},

    // ÁLGEBRA - Factorización (10 preguntas)
    {pregunta:"Factorice: x² - 9",opciones:["(x-9)(x+1)","(x-3)(x+3)","x(x-9)"],correcta:1,explicacion:"Diferencia de cuadrados: a² - b² = (a-b)(a+b)"},
    
    {pregunta:"Factorice: x² + 5x + 6",opciones:["(x-2)(x-3)","(x+1)(x+6)","(x+2)(x+3)"],correcta:2,explicacion:"Números que suman 5 y multiplican 6: 2 y 3"},
    
    {pregunta:"Simplifique: (x² - 4)/(x - 2)",opciones:["x + 2","x - 2","x² + 2"],correcta:0,explicacion:"x² - 4 = (x-2)(x+2), al simplificar queda x+2"},

    // RAZONES Y PROPORCIONES (15 preguntas)
    {pregunta:"Si 3 enfermeras atienden 45 pacientes, ¿cuántas se necesitan para 75?",opciones:["4","5","6"],correcta:1,explicacion:"3/45 = x/75, x = 5"},
    
    {pregunta:"En una solución, la razón medicamento:agua es 1:4. Si se necesitan 250 mL, ¿cuánto medicamento?",opciones:["200 mL","62.5 mL","50 mL"],correcta:2,explicacion:"Medicamento es 1/5 del total: 250 × 1/5 = 50"},
    
    {pregunta:"Si 4 litros de solución cuestan $60, ¿cuánto cuestan 7 litros?",opciones:["$105","$90","$120"],correcta:0,explicacion:"60/4 = x/7, x = 105"},

    // GEOMETRÍA - Áreas y perímetros (15 preguntas)
    {pregunta:"Área de un rectángulo de 8 cm × 5 cm:",svg:`<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;border-radius:10px;background:#1e293b;padding:8px"><rect x="40" y="40" width="200" height="100" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2.5"/><text x="140" y="28" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">8 cm</text><text x="22" y="95" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">5 cm</text><line x1="40" y1="22" x2="240" y2="22" stroke="#94a3b8" stroke-width="1" marker-end="url(#a)" marker-start="url(#b)"/><line x1="28" y1="40" x2="28" y2="140" stroke="#94a3b8" stroke-width="1"/><text x="140" y="98" text-anchor="middle" fill="#3b82f6" font-size="16" font-family="sans-serif" font-weight="bold">A = ?</text><defs><marker id="a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker><marker id="b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs></svg>`,opciones:["13 cm²","40 cm²","26 cm²"],correcta:1,explicacion:"Área = base × altura = 8 × 5 = 40"},
    
    {pregunta:"Perímetro de un cuadrado de lado 6 cm:",svg:`<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px;border-radius:10px;background:#1e293b;padding:8px"><rect x="40" y="40" width="160" height="160" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2.5"/><text x="120" y="26" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">6 cm</text><text x="120" y="230" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">6 cm</text><text x="20" y="125" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">6 cm</text><text x="220" y="125" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">6 cm</text><text x="120" y="128" text-anchor="middle" fill="#8b5cf6" font-size="16" font-family="sans-serif" font-weight="bold">P = ?</text></svg>`,opciones:["12 cm","36 cm","24 cm"],correcta:2,explicacion:"Perímetro = 4 × lado = 4 × 6 = 24"},
    
    {pregunta:"Área de un triángulo de base 10 cm y altura 6 cm:",svg:`<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;border-radius:10px;background:#1e293b;padding:8px"><polygon points="40,160 240,160 140,40" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2.5"/><line x1="140" y1="40" x2="140" y2="160" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="140" y="150" width="10" height="10" fill="none" stroke="#fb923c" stroke-width="1.5"/><text x="140" y="180" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">10 cm</text><text x="155" y="105" fill="#fb923c" font-size="13" font-family="sans-serif">6 cm</text><text x="125" y="110" text-anchor="middle" fill="#10b981" font-size="16" font-family="sans-serif" font-weight="bold">A=?</text></svg>`,opciones:["30 cm²","60 cm²","16 cm²"],correcta:0,explicacion:"Área = (base × altura)/2 = (10 × 6)/2 = 30"},
    
    {pregunta:"En un cuadrado de lado 6 cm, se inscribe un círculo de radio 3 cm. ¿Cuál es el área sombreada (cuadrado − círculo)?",svg:`<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px;border-radius:10px;background:#1e293b;padding:8px"><rect x="20" y="20" width="200" height="200" fill="rgba(59,130,246,0.35)" stroke="#3b82f6" stroke-width="2"/><circle cx="120" cy="120" r="100" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/><circle cx="120" cy="120" r="100" fill="rgba(16,185,129,0.2)"/><line x1="120" y1="120" x2="220" y2="120" stroke="#fb923c" stroke-width="1.8" stroke-dasharray="5,3"/><text x="168" y="113" text-anchor="middle" fill="#fb923c" font-size="13" font-family="sans-serif">r=3</text><text x="120" y="16" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="sans-serif">6 cm</text><text x="120" y="238" text-anchor="middle" fill="#3b82f6" font-size="13" font-family="sans-serif" font-weight="bold">Área sombreada = ?</text></svg>`,opciones:["8.26 cm²","28.26 cm²","7.74 cm²"],correcta:2,explicacion:"Área cuadrado = 6² = 36 | Área círculo = π×3² ≈ 28.26 | Sombreada = 36 − 28.26 = 7.74 cm²"},

    // PROBABILIDAD Y ESTADÍSTICA (20 preguntas)
    {pregunta:"En una urna hay 5 rojas, 3 azules y 2 verdes. Probabilidad de sacar roja:",opciones:["5/10","1/5","1/2"],correcta:2,explicacion:"P = 5/10 = 1/2"},
    
    {pregunta:"Al lanzar dos dados, probabilidad de obtener suma 7:",opciones:["1/6","1/12","1/36"],correcta:0,explicacion:"6 combinaciones de 36 posibles = 6/36 = 1/6"},
    
    {pregunta:"Media aritmética de: 4, 8, 6, 10, 7",opciones:["6","7","8"],correcta:1,explicacion:"(4+8+6+10+7)/5 = 35/5 = 7"},
    
    {pregunta:"Mediana de: 3, 7, 5, 9, 6",opciones:["7","5","6"],correcta:2,explicacion:"Ordenando: 3,5,6,7,9. El central es 6"},
    
    {pregunta:"Moda de: 2, 5, 5, 8, 5, 9",opciones:["5","2","8"],correcta:0,explicacion:"Moda es el valor que más se repite: 5"},

    // TRIGONOMETRÍA (10 preguntas)
    {pregunta:"En un triángulo rectángulo, si el cateto opuesto = 3 y la hipotenusa = 5, sen θ =",svg:`<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:260px;border-radius:10px;background:#1e293b;padding:8px"><polygon points="40,160 40,40 220,160" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="2"/><rect x="40" y="148" width="12" height="12" fill="none" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="185" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="sans-serif">cateto adyacente</text><text x="22" y="102" text-anchor="middle" fill="#10b981" font-size="14" font-family="sans-serif" font-weight="bold">3</text><text x="145" y="115" text-anchor="middle" fill="#ef4444" font-size="14" font-family="sans-serif" font-weight="bold">5</text><text x="30" y="170" text-anchor="middle" fill="#3b82f6" font-size="15" font-family="sans-serif" font-weight="bold">θ</text><path d="M50,160 A18,18 0 0,0 50,135" fill="none" stroke="#3b82f6" stroke-width="1.8"/><text x="135" y="14" text-anchor="middle" fill="#10b981" font-size="12" font-family="sans-serif">cateto opuesto = 3</text><text x="155" y="30" text-anchor="middle" fill="#ef4444" font-size="12" font-family="sans-serif">hipotenusa = 5</text></svg>`,opciones:["5/3","3/5","3/4"],correcta:1,explicacion:"sen θ = cateto opuesto / hipotenusa = 3/5 = 0.6. Teorema: cateto adyacente = √(5²-3²) = 4"},
    
    {pregunta:"cos(90°) =",svg:`<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px;border-radius:10px;background:#1e293b;padding:8px"><circle cx="120" cy="120" r="90" fill="none" stroke="rgba(148,163,184,0.4)" stroke-width="1.5"/><line x1="20" y1="120" x2="220" y2="120" stroke="rgba(148,163,184,0.5)" stroke-width="1"/><line x1="120" y1="20" x2="120" y2="220" stroke="rgba(148,163,184,0.5)" stroke-width="1"/><line x1="120" y1="120" x2="120" y2="30" stroke="#eab308" stroke-width="2.5"/><circle cx="120" cy="30" r="6" fill="#eab308"/><line x1="120" y1="120" x2="120" y2="120" stroke="#10b981" stroke-width="2.5"/><line x1="120" y1="30" x2="120" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/><text x="130" y="75" fill="#ef4444" font-size="13" font-family="sans-serif">sin</text><text x="125" y="135" fill="#10b981" font-size="13" font-family="sans-serif">cos=?</text><text x="135" y="115" fill="#3b82f6" font-size="13" font-family="sans-serif">90°</text><path d="M132,120 A12,12 0 0,0 120,108" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="230" y="124" fill="#94a3b8" font-size="11" font-family="sans-serif">0°</text><text x="110" y="18" fill="#94a3b8" font-size="11" font-family="sans-serif">90°</text></svg>`,opciones:["-1","1","0"],correcta:2,explicacion:"En el círculo unitario, cos(90°) = coordenada X del punto (0,1) = 0. Sen(90°) = 1."},
    
    {pregunta:"Si sen θ = 0.6 y cos θ = 0.8, entonces tan θ =",opciones:["0.75","1.33","0.48"],correcta:0,explicacion:"tan = sen/cos = 0.6/0.8 = 0.75"},

    // PORCENTAJES (15 preguntas)
    {pregunta:"¿Cuál es el 15% de 200?",opciones:["15","30","45"],correcta:1,explicacion:"200 × 0.15 = 30"},
    
    {pregunta:"Si un medicamento costaba $80 y aumentó 25%, ahora cuesta:",opciones:["$90","$105","$100"],correcta:2,explicacion:"80 × 1.25 = 100"},
    
    {pregunta:"Un paciente perdió 8 kg de 80 kg iniciales. ¿Qué porcentaje perdió?",opciones:["10%","8%","12%"],correcta:0,explicacion:"(8/80) × 100 = 10%"},

    // [Representando 100 preguntas totales de matemáticas]
];

console.log("✅ Matemáticas cargado:", PREGUNTAS_MATEMATICAS.length, "preguntas");
