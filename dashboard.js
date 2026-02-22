// ============================================
// MEDIPREP SMART — DASHBOARD DE ANALÍTICAS
// ============================================

function renderDashboard() {
    const stats = AchievementSystem.getStats();
    const history = ExamHistory.getLast(10);
    const wrongBank = WrongAnswersBank.getAll();
    const srsStats = SRSSystem.getStats();
    const correct = stats.correct || 0;
    const total = stats.totalAnswered || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Calcular tendencia (últimos 5 exámenes)
    const trend = history.slice(0, 5).map(h => h.score);
    const avgTrend = trend.length > 0 ? Math.round(trend.reduce((a,b) => a+b, 0) / trend.length) : 0;

    // Categorías de incorrectas para radar
    const catMap = {};
    wrongBank.forEach(q => {
        const cat = q.categoria || 'general';
        catMap[cat] = (catMap[cat] || 0) + 1;
    });
    const topCats = Object.entries(catMap).sort((a,b) => b[1]-a[1]).slice(0, 5);

    const dashEl = document.getElementById('dashboardContent');
    if (!dashEl) return;

    dashEl.innerHTML = `
    <!-- ── MÉTRICAS PRINCIPALES ── -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.75rem;margin-bottom:1.5rem;">
        <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#6ee7b7;font-weight:700;margin-bottom:0.3rem;">✅ CORRECTAS</div>
            <div style="font-size:2rem;font-weight:900;color:#10b981;">${correct.toLocaleString()}</div>
        </div>
        <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#a5b4fc;font-weight:700;margin-bottom:0.3rem;">🎯 PRECISIÓN</div>
            <div style="font-size:2rem;font-weight:900;color:#6366f1;">${accuracy}%</div>
        </div>
        <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#fcd34d;font-weight:700;margin-bottom:0.3rem;">🔥 RACHA MÁX</div>
            <div style="font-size:2rem;font-weight:900;color:#f59e0b;">${stats.maxStreak || 0}</div>
        </div>
        <div style="background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:14px;padding:1.1rem;">
            <div style="font-size:0.7rem;color:#7dd3fc;font-weight:700;margin-bottom:0.3rem;">🧠 SRS HOY</div>
            <div style="font-size:2rem;font-weight:900;color:#38bdf8;">${srsStats.due}</div>
        </div>
    </div>

    <!-- ── HISTORIAL DE EXÁMENES ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">📈 Últimos Resultados</div>
        ${history.length === 0 ? '<div style="text-align:center;color:#475569;padding:1rem;font-size:0.85rem;">Aún no hay exámenes registrados.<br>¡Haz tu primer simulacro!</div>' :
        `<div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${history.slice(0,6).map(h => {
                const d = new Date(h.fecha);
                const dateStr = `${d.getDate()}/${d.getMonth()+1}`;
                const color = h.score >= 80 ? '#10b981' : h.score >= 60 ? '#f59e0b' : '#ef4444';
                const min = Math.floor(h.timeSeconds/60);
                const sec = h.timeSeconds % 60;
                return `<div style="display:flex;align-items:center;gap:0.75rem;background:rgba(255,255,255,0.03);border-radius:10px;padding:0.6rem 0.85rem;">
                    <div style="font-size:0.7rem;color:#64748b;width:32px;flex-shrink:0;">${dateStr}</div>
                    <div style="flex:1;background:rgba(100,116,139,0.15);border-radius:4px;height:8px;overflow:hidden;">
                        <div style="height:100%;width:${h.score}%;background:${color};border-radius:4px;transition:width 0.6s;"></div>
                    </div>
                    <div style="font-weight:800;color:${color};font-size:0.9rem;width:38px;text-align:right;">${h.score}%</div>
                    <div style="font-size:0.7rem;color:#475569;width:36px;">${min}:${String(sec).padStart(2,'0')}</div>
                </div>`;
            }).join('')}
        </div>`}
        ${history.length > 0 && avgTrend > 0 ? `<div style="margin-top:0.75rem;padding:0.6rem 0.85rem;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;font-size:0.78rem;color:#a5b4fc;"><strong>Promedio reciente:</strong> ${avgTrend}%</div>` : ''}
    </div>

    <!-- ── ÁREAS DÉBILES ── -->
    ${topCats.length > 0 ? `
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">⚠️ Áreas a Reforzar</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${topCats.map(([cat, count], i) => {
                const max = topCats[0][1];
                const pct = Math.round((count / max) * 100);
                const colors = ['#ef4444','#fb923c','#f59e0b','#84cc16','#14b8a6'];
                const col = colors[i] || '#94a3b8';
                return `<div style="display:flex;align-items:center;gap:0.75rem;">
                    <div style="font-size:0.8rem;color:#94a3b8;width:120px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cat}</div>
                    <div style="flex:1;background:rgba(100,116,139,0.15);border-radius:4px;height:10px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:${col};border-radius:4px;"></div>
                    </div>
                    <div style="font-weight:700;color:${col};font-size:0.8rem;width:24px;">${count}</div>
                </div>`;
            }).join('')}
        </div>
    </div>` : ''}

    <!-- ── SRS STATS ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:1rem;">🧠 Repetición Espaciada</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;">
            <div style="text-align:center;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#6366f1;">${srsStats.total}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Tarjetas</div>
            </div>
            <div style="text-align:center;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#f59e0b;">${srsStats.due}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Pendientes</div>
            </div>
            <div style="text-align:center;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:10px;padding:0.75rem;">
                <div style="font-size:1.4rem;font-weight:800;color:#10b981;">${srsStats.mastered}</div>
                <div style="font-size:0.65rem;color:#64748b;font-weight:600;">Dominadas</div>
            </div>
        </div>
        ${srsStats.due > 0 ? `<button onclick="iniciarSRS()" style="width:100%;margin-top:0.75rem;padding:0.8rem;background:linear-gradient(135deg,#6366f1,#4338ca);border:none;border-radius:10px;color:white;font-weight:700;cursor:pointer;font-size:0.9rem;">Repasar ${srsStats.due} tarjeta${srsStats.due !== 1 ? 's' : ''} ahora →</button>` : ''}
    </div>

    <!-- ── RESUMEN GLOBAL ── -->
    <div style="background:rgba(13,17,31,0.8);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:0.75rem;">📊 Resumen Global</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.9rem;">
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Total respondidas</span><span style="color:#f1f5f9;font-weight:700;">${total.toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Correctas</span><span style="color:#10b981;font-weight:700;">${correct.toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Incorrectas</span><span style="color:#ef4444;font-weight:700;">${(total - correct).toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Precisión global</span><span style="color:#6366f1;font-weight:700;">${accuracy}%</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Exámenes completados</span><span style="color:#f59e0b;font-weight:700;">${history.length}</span></div>
            <div style="display:flex;justify-content:space-between;color:#94a3b8;"><span>Logros desbloqueados</span><span style="color:#fcd34d;font-weight:700;">${AchievementSystem._getUnlocked().length} / ${typeof ACHIEVEMENTS !== 'undefined' ? ACHIEVEMENTS.length : '?'}</span></div>
        </div>
    </div>`;
}

console.log('✅ Dashboard cargado');
