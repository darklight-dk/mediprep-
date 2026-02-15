// ============================================
// ÍNDICE DE PREGUNTAS - MEDIPREP SMART
// ============================================
// Este archivo une todas las preguntas de los
// archivos separados en un solo objeto PREGUNTAS

// IMPORTANTE: Cargar ANTES de este archivo:
// preguntas-comprension.js
// preguntas-redaccion.js
// preguntas-matematicas.js
// preguntas-premedicina.js

const PREGUNTAS = {
    comprension: PREGUNTAS_COMPRENSION,
    redaccion:   PREGUNTAS_REDACCION,
    matematicas: PREGUNTAS_MATEMATICAS,
    medicina:    PREGUNTAS_PREMEDICINA
};

console.log("✅ BANCO COMPLETO CARGADO");
console.log("📊 Comprensión:",  PREGUNTAS.comprension.length);
console.log("📊 Redacción:",    PREGUNTAS.redaccion.length);
console.log("📊 Matemáticas:",  PREGUNTAS.matematicas.length);
console.log("📊 Medicina:",     PREGUNTAS.medicina.length);
console.log("🎯 TOTAL:", PREGUNTAS.comprension.length + PREGUNTAS.redaccion.length + PREGUNTAS.matematicas.length + PREGUNTAS.medicina.length);
