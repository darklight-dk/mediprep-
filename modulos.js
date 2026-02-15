// ============================================
// ÍNDICE DE MÓDULOS - MEDIPREP SMART
// ============================================
// Este archivo combina todos los módulos individuales

// Los módulos individuales se cargan desde /modulos/*.js
// y se combinan en el array MODULOS_PREMEDICINA

// IMPORTANTE: Asegúrate de que todos los archivos estén cargados en index.html ANTES de este archivo

const MODULOS_PREMEDICINA = [
    MODULO_CONCEPTOS_SALUD,      // modulos/conceptos-salud.js
    MODULO_PLANIMETRIA,          // modulos/planimetria.js
    MODULO_SISTEMA_NERVIOSO,     // modulos/sistema-nervioso.js
    MODULO_SISTEMA_ENDOCRINO,    // modulos/sistema-endocrino.js
    MODULO_BIOLOGIA_CELULAR      // modulos/biologia-celular.js
];

console.log("✅ Módulos de Premedicina cargados:", MODULOS_PREMEDICINA.length);
console.log("📚 Lecciones totales:", MODULOS_PREMEDICINA.reduce((sum, m) => sum + m.lecciones.length, 0));
