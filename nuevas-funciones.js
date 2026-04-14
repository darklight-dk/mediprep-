// Actualizar badge SRS en home
    function updateNewFeaturesBadges() {
        // SRS due count
        const srsData = JSON.parse(localStorage.getItem('mediprep_srs_cards') || '[]');
        const now = new Date();
        const due = srsData.filter(c => new Date(c.nextReview) <= now).length;
        const badge = document.getElementById('srsDueBadge');
        if (badge) {
            badge.textContent = due > 0 ? due + ' hoy' : '✓ Al día';
            badge.style.background = due > 0 ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)';
            badge.style.color = due > 0 ? '#fca5a5' : '#6ee7b7';
        }
    }

    // Círculo SVG manejado por pomodoro.js

    window.addEventListener('load', () => {
        setTimeout(updateNewFeaturesBadges, 500);
    });