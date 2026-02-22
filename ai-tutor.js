// ══════════════════════════════════════════════════════
//  MEDIPREP — NEXUS AI TUTOR 🤖
//  Tutor médico real powered by Claude API
//  v1.0 — Mega Update
// ══════════════════════════════════════════════════════

const AITutor = {

  messages: [],
  isLoading: false,

  // System prompt with full medical context
  systemPrompt: `Eres Nexus, el tutor de IA de MediPrep — una app de preparación para el EXANI-II de medicina (CENEVAL, México). Eres un médico virtual experto, brillante, y pedagógico.

Tu especialidad: EXANI-II cubre 7 módulos — Planimetría, Sistema Nervioso, Sistema Cardiovascular, Sistema Respiratorio, Sistema Endocrino, Aparato Digestivo y Biología Celular/Bioquímica.

Reglas de oro:
- Responde SIEMPRE en español, de forma clara y concisa para estudiantes de premedicina
- Usa emojis médicos estratégicamente para hacer el contenido memorable 🫀🧠🫁
- Cuando expliques conceptos, usa analogías simples y memorables
- Si te preguntan sobre una pregunta de examen, explica el razonamiento, no solo la respuesta
- Sé motivador pero realista
- Máximo 300 palabras por respuesta a menos que se pida más detalle
- Usa formato con bullets cuando ayude a la comprensión

Información del estudiante (se provee dinámicamente en el primer mensaje).`,

  getStudentContext() {
    const stats = (window.AchievementSystem && window.AchievementSystem.getStats()) || {};
    const wrong  = (window.WrongAnswersBank  && window.WrongAnswersBank.getAll())  || [];
    const weakCategories = {};
    wrong.forEach(q => {
      weakCategories[q.categoria || 'General'] = (weakCategories[q.categoria || 'General'] || 0) + 1;
    });
    const weakList = Object.entries(weakCategories)
      .sort((a,b) => b[1]-a[1])
      .slice(0,3)
      .map(([cat, n]) => `${cat} (${n} errores)`)
      .join(', ');

    const acc = stats.totalAnswered > 0
      ? Math.round((stats.correct / stats.totalAnswered) * 100)
      : 0;

    return `[Contexto del estudiante]
- Preguntas respondidas: ${stats.totalAnswered || 0}
- Precisión global: ${acc}%
- Racha actual: ${stats.currentStreak || 0}
- Áreas débiles: ${weakList || 'Sin datos aún'}
- Incorrectas pendientes: ${wrong.length}`;
  },

  // ── RENDER SCREEN ──────────────────────────────────
  render() {
    const container = document.getElementById('aiTutorContent');
    if (!container) return;

    if (this.messages.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:2rem 0 1rem;">
          <div style="font-size:3rem;margin-bottom:.5rem;filter:drop-shadow(0 0 20px rgba(99,102,241,0.5));">🤖</div>
          <div style="font-family:var(--font-d);font-size:1.25rem;font-weight:800;margin-bottom:.3rem;">Nexus AI</div>
          <div style="font-size:.8rem;color:var(--text-3);margin-bottom:1.5rem;">Tu tutor médico personal</div>

          <div style="display:flex;flex-direction:column;gap:.45rem;text-align:left;">
            ${this._quickButtons().map(q => `
              <button onclick="AITutor.sendQuick('${q.prompt.replace(/'/g,"\\'")}', '${q.label.replace(/'/g,"\\'")}');"
                style="padding:.75rem 1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.2);background:rgba(99,102,241,0.07);color:var(--text-2);font-size:.82rem;font-weight:500;cursor:pointer;text-align:left;transition:all .18s;"
                onmouseover="this.style.borderColor='rgba(99,102,241,0.5)';this.style.background='rgba(99,102,241,0.12)'"
                onmouseout="this.style.borderColor='rgba(99,102,241,0.2)';this.style.background='rgba(99,102,241,0.07)'">
                ${q.icon} ${q.label}
              </button>
            `).join('')}
          </div>
        </div>`;
    } else {
      container.innerHTML = this.messages.map(m => this._renderBubble(m)).join('');
      if (this.isLoading) {
        container.innerHTML += `
          <div style="display:flex;gap:.75rem;padding:.5rem 0;animation:fadeIn .3s ease;">
            <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--indigo),var(--violet));display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;">🤖</div>
            <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:14px 14px 14px 4px;padding:.7rem 1rem;display:flex;align-items:center;gap:.4rem;">
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--indigo-l);animation:typingDot 1s infinite .0s;"></span>
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--indigo-l);animation:typingDot 1s infinite .2s;"></span>
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--indigo-l);animation:typingDot 1s infinite .4s;"></span>
            </div>
          </div>`;
      }
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 50);
    }
  },

  _quickButtons() {
    const wrong = (window.WrongAnswersBank && window.WrongAnswersBank.getAll()) || [];
    const hasWrong = wrong.length > 0;
    return [
      { icon: '📋', label: 'Explícame mis puntos débiles', prompt: 'Analiza mis áreas débiles y dame un plan para mejorar' },
      { icon: '🧠', label: 'Genera una pregunta de práctica', prompt: 'Dame una pregunta tipo EXANI-II de los temas más importantes, con opciones A, B, C, D y luego la respuesta correcta explicada' },
      { icon: '🗺️', label: '¿Por dónde empiezo hoy?', prompt: '¿Qué tema debería estudiar hoy para maximizar mi preparación para el EXANI-II?' },
      ...(hasWrong ? [{ icon: '❌', label: `Explica mi última respuesta incorrecta`, prompt: `Tengo ${wrong.length} respuestas incorrectas. Explícame en detalle la que más se me ha repetido` }] : []),
      { icon: '⚡', label: 'Tip rápido para el EXANI-II', prompt: 'Dame el tip más valioso que conoces sobre cómo aprobar el EXANI-II' },
    ];
  },

  _renderBubble(msg) {
    const isUser = msg.role === 'user';
    return `
      <div style="display:flex;gap:.75rem;padding:.35rem 0;${isUser ? 'flex-direction:row-reverse;' : ''}animation:fadeIn .3s ease;">
        ${!isUser ? `<div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--indigo),var(--violet));display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;align-self:flex-end;">🤖</div>` : ''}
        <div style="max-width:82%;background:${isUser ? 'rgba(99,102,241,0.18)' : 'rgba(20,25,45,0.9)'};border:1px solid ${isUser ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.07)'};border-radius:${isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px'};padding:.75rem 1rem;font-size:.84rem;color:var(--text);line-height:1.6;white-space:pre-wrap;word-break:break-word;">
          ${this._formatMessage(msg.content)}
        </div>
      </div>`;
  },

  _formatMessage(text) {
    // Bold **text**, bullet •, code `code`
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:.1em .3em;border-radius:4px;font-family:var(--mono);font-size:.85em;">$1</code>')
      .replace(/^[-•]\s(.+)/gm, '<span style="display:block;padding-left:.5em;">• $1</span>');
  },

  // ── SEND MESSAGE ───────────────────────────────────
  async sendQuick(prompt, label) {
    // Show as if user typed it
    const input = document.getElementById('aiTutorInput');
    if (input) input.value = label;
    await this.send(prompt);
  },

  async send(textOverride) {
    const input = document.getElementById('aiTutorInput');
    const text  = textOverride || (input && input.value.trim());
    if (!text || this.isLoading) return;
    if (input) input.value = '';

    // First message: inject student context
    const userContent = this.messages.length === 0
      ? `${this.getStudentContext()}\n\nMi pregunta: ${text}`
      : text;

    this.messages.push({ role: 'user', content: userContent });
    this.isLoading = true;
    this.render();

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: this.systemPrompt,
          messages: this.messages
        })
      });

      const data = await response.json();
      const reply = data.content && data.content[0] && data.content[0].text
        ? data.content[0].text
        : 'Lo siento, no pude procesar tu pregunta. Intenta de nuevo.';

      this.messages.push({ role: 'assistant', content: reply });
    } catch (err) {
      this.messages.push({ role: 'assistant', content: '⚠️ Error de conexión. Verifica tu internet e intenta de nuevo.' });
    }

    this.isLoading = false;
    this.render();
  },

  // ── CLEAR ─────────────────────────────────────────
  clear() {
    this.messages = [];
    this.render();
  },

  handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      AITutor.send();
    }
  }
};
