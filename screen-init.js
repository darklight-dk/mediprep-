// ============================================
// MEDIPREP SMART — INICIALIZADOR DE PANTALLAS v3
// Debe cargarse después de app.js.
// ============================================

(function() {

    function tryCargarModulos() {
        if (typeof cargarModulos === 'function' && typeof MODULOS_PREMEDICINA !== 'undefined') {
            cargarModulos();
        }
    }

    function tryRenderUAEMEX() {
        if (typeof renderUAEMEXScreen === 'function') {
            renderUAEMEXScreen();
        } else {
            // uaemex.js puede cargar tarde, reintentar
            var n = 0;
            var t = setInterval(function() {
                n++;
                if (typeof renderUAEMEXScreen === 'function') {
                    clearInterval(t);
                    renderUAEMEXScreen();
                } else if (n >= 15) {
                    clearInterval(t);
                }
            }, 150);
        }
    }

    var _orig = window.showScreen;

    window.showScreen = function(screenId) {
        if (_orig) _orig.call(this, screenId);

        switch (screenId) {

            case 'clasesScreen':
                tryCargarModulos();
                break;

            case 'simuladoresScreen':
                if (typeof renderSimuladoresLobby === 'function') renderSimuladoresLobby();
                break;

            case 'uaemexScreen':
                tryRenderUAEMEX();
                break;

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
                    var tf = document.getElementById('pomodoroTotalFocus');
                    var se = document.getElementById('pomodoroSession');
                    if (tf) tf.textContent = Math.floor((pomodoroTotalFocusSeconds || 0) / 60) + ' min';
                    if (se) se.textContent = pomodoroSession || 0;
                }
                if (typeof renderPomoSettings === 'function') renderPomoSettings();
                break;
        }
    };

    // También llamar cargarModulos en window load como respaldo
    window.addEventListener('load', function() {
        tryCargarModulos();
    });

    console.log('✅ Screen-init v3 cargado');
})();
