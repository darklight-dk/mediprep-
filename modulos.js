// ============================================
// ÍNDICE DE MÓDULOS - MEDIPREP SMART
// ============================================

const MODULOS_PREMEDICINA = [
    MODULO_CONCEPTOS_SALUD,           // conceptos-salud.js
    MODULO_PLANIMETRIA,               // planimetria.js
    MODULO_SISTEMA_NERVIOSO,          // sistema-nervioso.js
    MODULO_SISTEMA_ENDOCRINO,         // sistema-endocrino.js
    MODULO_BIOLOGIA_CELULAR,          // biologia-celular.js
    MODULO_SISTEMA_CARDIOVASCULAR,    // sistema-cardiovascular.js
    MODULO_SISTEMA_RESPIRATORIO,      // sistema-respiratorio.js
    MODULO_APARATO_DIGESTIVO,         // aparato-digestivo.js
];

console.log("✅ Módulos de Premedicina cargados:", MODULOS_PREMEDICINA.length);
console.log("📚 Lecciones totales:", MODULOS_PREMEDICINA.reduce((sum, m) => sum + m.lecciones.length, 0));
