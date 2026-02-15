const MODULO_BIOLOGIA_CELULAR = {
        id: 'biologia-celular',
        titulo: 'Biología Celular',
        descripcion: 'Estructura celular, organelos y ciclo celular',
        icono: '🔬',
        progreso: 0,
        lecciones: [
            {
                id: 'celula-estructura',
                titulo: 'Estructura de la Célula',
                tiempo: '3 min',
                completada: false,
                contenido: `
                    <h3 style="color: #8b5cf6; margin-bottom: 1rem;">La Célula</h3>
                    <p>Unidad básica de la vida. Todos los seres vivos están formados por células.</p>
                    
                    <h4 style="color: #a78bfa; margin: 2rem 0 1rem;">Organelos Principales</h4>
                    
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Núcleo:</strong> Contiene ADN, controla la célula
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Mitocondria:</strong> Produce energía (ATP)
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Ribosomas:</strong> Sintetizan proteínas
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Retículo Endoplasmático:</strong> Transporte y síntesis
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Aparato de Golgi:</strong> Empaqueta y modifica proteínas
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Lisosomas:</strong> Digestión celular
                    </div>
                    <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <strong>Membrana plasmática:</strong> Límite celular, controla entrada/salida
                    </div>
                `
            }
        ]
};
console.log("✅ Módulo Biología Celular cargado");
