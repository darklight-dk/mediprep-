// ============================================
// ÍNDICE DE PREGUNTAS - MEDIPREP SMART
// CENEVAL EXANI-II — Alineado al temario oficial 2025
// ============================================
// Carga DESPUÉS de:
//   preguntas-comprension.js
//   preguntas-redaccion.js
//   preguntas-matematicas.js
//   preguntas-premedicina.js

const PREGUNTAS = {
    comprension: typeof PREGUNTAS_COMPRENSION !== 'undefined' ? PREGUNTAS_COMPRENSION : [],
    redaccion:   typeof PREGUNTAS_REDACCION   !== 'undefined' ? PREGUNTAS_REDACCION   : [],
    matematicas: typeof PREGUNTAS_MATEMATICAS !== 'undefined' ? PREGUNTAS_MATEMATICAS : [],
    medicina:    typeof PREGUNTAS_PREMEDICINA !== 'undefined' ? PREGUNTAS_PREMEDICINA : []
};

// PREGUNTAS_EXAMEN — alias requerido por app.js para los simulacros
// Las matemáticas del examen oficial usan el mismo banco
const PREGUNTAS_EXAMEN = {
    matematicas: PREGUNTAS.matematicas
};

console.log("✅ BANCO COMPLETO CARGADO — EXANI-II 2025");
console.log("📖 Comprensión:", PREGUNTAS.comprension.length, "preguntas");
console.log("✍️  Redacción:",   PREGUNTAS.redaccion.length,   "preguntas");
console.log("🔢 Matemáticas:", PREGUNTAS.matematicas.length, "preguntas");
console.log("🏥 Medicina:",    PREGUNTAS.medicina.length,    "preguntas");
console.log("🎯 TOTAL:",       PREGUNTAS.comprension.length + PREGUNTAS.redaccion.length + PREGUNTAS.matematicas.length + PREGUNTAS.medicina.length, "preguntas");
