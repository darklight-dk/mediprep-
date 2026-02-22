// ============================================
// MEDIPREP SMART — HISTORIAL DE EXÁMENES
// ============================================

const ExamHistory = {
    save(tipo, score, correct, total, timeSeconds) {
        const history = this.getAll();
        history.push({
            id: Date.now(),
            tipo,
            score,
            correct,
            total,
            timeSeconds,
            fecha: new Date().toISOString()
        });
        // Mantener solo los últimos 30
        const trimmed = history.slice(-30);
        localStorage.setItem('mediprep_exam_history', JSON.stringify(trimmed));
    },
    getAll() {
        try { return JSON.parse(localStorage.getItem('mediprep_exam_history') || '[]'); }
        catch { return []; }
    },
    getLast(n = 10) {
        return this.getAll().slice(-n).reverse();
    },
    clear() {
        localStorage.setItem('mediprep_exam_history', '[]');
    }
};

// Parchear endQuiz para guardar historial automáticamente
window.addEventListener('load', () => {
    const _origEndQuiz = window.endQuiz;
    if (_origEndQuiz) {
        window.endQuiz = function() {
            _origEndQuiz.call(this);
            const total = currentQuestions.length;
            const score = Math.round((correctAnswers / total) * 100);
            const tipo = isExamMode ? 'Examen' : 'Quiz';
            const timeUsedSec = Math.floor((Date.now() - startTime) / 1000);
            ExamHistory.save(tipo, score, correctAnswers, total, timeUsedSec);
        };
    }
});

console.log('✅ Historial de Exámenes cargado');
