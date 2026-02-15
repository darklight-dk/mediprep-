const MODULO_SISTEMA_ENDOCRINO = {
        id: 'sistema-endocrino',
        titulo: 'Sistema Endocrino',
        descripcion: 'Hormonas, glándulas y regulación',
        icono: '⚗️',
        progreso: 0,
        lecciones: [
            {
                id: 'glandulas-endocrinas',
                titulo: 'Glándulas Endocrinas Principales',
                tiempo: '3 min',
                completada: false,
                contenido: `
                    <h3 style="color: #8b5cf6; margin-bottom: 1rem;">Sistema Endocrino</h3>
                    <p>Sistema de glándulas que producen <strong>hormonas</strong> para regular funciones corporales.</p>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #8b5cf6;">Hipotálamo</h4>
                        <p>Regula temperatura, hambre, sed y sueño</p>
                    </div>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #8b5cf6;">Hipófisis (Pituitaria)</h4>
                        <p>Glándula maestra, controla otras glándulas</p>
                    </div>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #8b5cf6;">Tiroides</h4>
                        <p>Regula metabolismo (T3, T4)</p>
                    </div>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #8b5cf6;">Páncreas</h4>
                        <p>Produce insulina y glucagón (regula glucosa)</p>
                    </div>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #8b5cf6;">Suprarrenales (Adrenales)</h4>
                        <p>Producen adrenalina y cortisol (estrés)</p>
                    </div>
                `
            }
        ]
};
console.log("✅ Módulo Sistema Endocrino cargado");
