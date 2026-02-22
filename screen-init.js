// ============================================
// MEDIPREP SMART — INICIALIZADOR DE PANTALLAS
// Override showScreen para nuevas funciones
// ============================================
// Este archivo debe cargarse ÚLTIMO, después
// de todos los demás módulos.
// ============================================

(function() {
    // Guardar referencia al showScreen original
    const _originalShowScreen = window.showScreen;

    window.showScreen = function(screenId) {
        // Llamar al original primero
        if (_originalShowScreen) _originalShowScreen.call(this, screenId);

        // Acciones al abrir cada pantalla
        switch (screenId) {
            case 'dashboardScreen':
                if (typeof renderDashboard === 'function') renderDashboard();
                break;
            case 'glosarioScreen':
                if (typeof renderGlosario === 'function') renderGlosario();
                break;
            case 'flashcardsMenuScreen':
                if (typeof renderFlashcardMenu === 'function') renderFlashcardMenu();
                break;
            case 'srsScreen':
                if (typeof SRSSystem !== 'undefined' && typeof srsSessionCards !== 'undefined') {
                    if (srsSessionCards.length === 0 && typeof iniciarSRS === 'function') iniciarSRS();
                }
                break;
            case 'planEstudioScreen':
                if (typeof cargarPlanGuardado === 'function') cargarPlanGuardado();
                break;
            case 'pomodoroScreen':
                if (typeof updatePomodoroDisplay === 'function') {
                    updatePomodoroDisplay();
                    const totalMins = Math.floor((pomodoroTotalFocusSeconds || 0) / 60);
                    const tf = document.getElementById('pomodoroTotalFocus');
                    if (tf) tf.textContent = totalMins + ' min';
                    const se = document.getElementById('pomodoroSession');
                    if (se) se.textContent = pomodoroSession || 0;
                }
                break;
        }
    };

    console.log('✅ Screen-init cargado — Todos los módulos activos');
})();
