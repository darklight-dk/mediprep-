// ============================================
// MÓDULO: CARBOHIDRATOS — Estilo visual correcto
// ============================================

const CARBOHIDRATOS = {
    id: 'carbohidratos',
    titulo: 'Carbohidratos',
    descripcion: 'Estructura, clasificación, metabolismo y funciones biológicas',
    icono: '🍞',
    progreso: 0,
    lecciones: [

        {
            id: 'intro-carbohidratos',
            titulo: 'Introducción a los Carbohidratos',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <div style="background:rgba(245,158,11,0.12);border-left:4px solid #f59e0b;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#f59e0b;margin:0 0 0.5rem;">¿Qué son los Carbohidratos?</h4>
                    <p style="margin:0;line-height:1.6;">Compuestos orgánicos formados por <strong>C, H y O</strong>. Principal fuente de energía. Fórmula general: <strong style="color:#fcd34d;">(CH₂O)ₙ  donde n ≥ 3</strong>. Son de carácter <strong>hidrofílico</strong>.</p>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Características Generales</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">💧 Hidrofílicos</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Sus grupos -OH forman puentes de hidrógeno con el agua → alta solubilidad.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">⚡ Energéticos — 4 kcal/gramo</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Fuente más rápida y eficiente. Deben representar <strong>50-60%</strong> de las calorías diarias.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">🌿 Más abundantes de la naturaleza</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Celulosa y almidón son los compuestos orgánicos más abundantes del planeta.</p>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Clasificación por Número de Unidades</h3>
                <div style="display:grid;gap:0.55rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.4);padding:0.9rem;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#fbbf24;">Monosacáridos</strong><p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Glucosa, fructuosa, galactosa</p></div>
                        <span style="background:rgba(245,158,11,0.25);color:#fcd34d;padding:0.25rem 0.75rem;border-radius:20px;font-size:0.8rem;font-weight:700;white-space:nowrap;">1 unidad</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.25);padding:0.9rem;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#fcd34d;">Disacáridos</strong><p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Sacarosa, lactosa, maltosa</p></div>
                        <span style="background:rgba(245,158,11,0.15);color:#f59e0b;padding:0.25rem 0.75rem;border-radius:20px;font-size:0.8rem;font-weight:700;white-space:nowrap;">2 unidades</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#fcd34d;">Oligosacáridos</strong><p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Rafinosa, estaquiosa</p></div>
                        <span style="background:rgba(245,158,11,0.1);color:#f59e0b;padding:0.25rem 0.75rem;border-radius:20px;font-size:0.8rem;font-weight:700;white-space:nowrap;">3–10</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                        <div><strong style="color:#fcd34d;">Polisacáridos</strong><p style="margin:0.2rem 0 0;color:#94a3b8;font-size:0.85rem;">Almidón, glucógeno, celulosa</p></div>
                        <span style="background:rgba(245,158,11,0.1);color:#f59e0b;padding:0.25rem 0.75rem;border-radius:20px;font-size:0.8rem;font-weight:700;white-space:nowrap;">&gt;10</span>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Grupos Funcionales</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <div style="font-size:1.5rem;margin-bottom:0.4rem;">🔶</div>
                        <strong style="color:#fcd34d;">Carbonilo (C=O)</strong>
                        <p style="color:#94a3b8;font-size:0.82rem;margin:0.4rem 0 0;line-height:1.5;">En C1 → <strong style="color:#fbbf24;">Aldehído</strong> = Aldosa<br>En C2 → <strong style="color:#fbbf24;">Cetona</strong> = Cetosa</p>
                    </div>
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <div style="font-size:1.5rem;margin-bottom:0.4rem;">💧</div>
                        <strong style="color:#fcd34d;">Hidroxilo (-OH)</strong>
                        <p style="color:#94a3b8;font-size:0.82rem;margin:0.4rem 0 0;line-height:1.5;">Múltiples grupos<br>Dan solubilidad y reactividad</p>
                    </div>
                </div>

                <div style="background:rgba(245,158,11,0.08);border-radius:10px;padding:1rem;">
                    <p style="margin:0;color:#fcd34d;font-size:0.88rem;">💡 <strong>Recuerda:</strong> Los carbohidratos tienen funciones energéticas, estructurales, de reconocimiento celular y como precursores biosintéticos.</p>
                </div>
            `
        },

        {
            id: 'monosacáridos-estructura',
            titulo: 'Monosacáridos — Estructura y Clasificación',
            tiempo: '5 min',
            completada: false,
            contenido: `
                <div style="background:rgba(245,158,11,0.12);border-left:4px solid #f59e0b;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#f59e0b;margin:0 0 0.5rem;">Monosacáridos</h4>
                    <p style="margin:0;line-height:1.6;">Unidades básicas que <strong>no se pueden hidrolizar</strong> en moléculas más simples. Sólidos cristalinos, blancos, dulces y solubles en agua. Fórmula: (CH₂O)ₙ donde <strong style="color:#fcd34d;">n = 3–7</strong>.</p>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Clasificación por Número de Carbonos</h3>
                <div style="display:grid;gap:0.55rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#fcd34d;">Triosas (3C)</strong> — Gliceraldehído, Dihidroxiacetona</span>
                        <span style="color:#94a3b8;font-size:0.8rem;">Glucólisis</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#fcd34d;">Tetrosas (4C)</strong> — Eritrosa</span>
                        <span style="color:#94a3b8;font-size:0.8rem;">Vía pentosas</span>
                    </div>
                    <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#fbbf24;">Pentosas (5C)</strong> — Ribosa, Desoxirribosa ⭐</span>
                        <strong style="color:#f59e0b;font-size:0.8rem;">ARN / ADN</strong>
                    </div>
                    <div style="background:rgba(245,158,11,0.2);border:1px solid rgba(245,158,11,0.5);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.9rem;">
                        <span><strong style="color:#fbbf24;">Hexosas (6C)</strong> — Glucosa, Fructuosa, Galactosa ⭐⭐⭐</span>
                        <strong style="color:#fbbf24;font-size:0.8rem;">¡Las más importantes!</strong>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Aldosas vs Cetosas</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">🔶 ALDOSAS</h4>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.7;">
                            Carbonilo en <strong style="color:#fbbf24;">C1</strong> (aldehído)<br>
                            Glucosa (aldohexosa)<br>
                            Ribosa (aldopentosa)<br>
                            Galactosa (aldohexosa)
                        </div>
                    </div>
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">🔷 CETOSAS</h4>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.7;">
                            Carbonilo en <strong style="color:#fbbf24;">C2</strong> (cetona)<br>
                            Fructuosa (cetohexosa)<br>
                            Ribulosa (cetopentosa)<br>
                            Dihidroxiacetona (cetotriosa)
                        </div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Serie D y L</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#6ee7b7;">Serie D ✅</strong>
                        <p style="color:#cbd5e1;font-size:0.85rem;margin:0.4rem 0 0;">-OH del C asimétrico más alejado a la <strong style="color:#6ee7b7;">DERECHA</strong>. Predomina en la naturaleza.</p>
                    </div>
                    <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#fca5a5;">Serie L</strong>
                        <p style="color:#94a3b8;font-size:0.85rem;margin:0.4rem 0 0;">-OH a la <strong style="color:#fca5a5;">IZQUIERDA</strong>. Rara en organismos vivos.</p>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Anomería α y β</h3>
                <div style="background:rgba(245,158,11,0.08);border-radius:10px;padding:1rem;margin-bottom:1rem;">
                    <p style="color:#cbd5e1;font-size:0.9rem;margin:0 0 0.75rem;">Al ciclarse, el C carbonílico → <strong style="color:#fcd34d;">carbono anomérico</strong>:</p>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;">
                        <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);padding:0.75rem;border-radius:8px;text-align:center;font-size:0.88rem;">
                            <strong style="color:#fca5a5;">α (alfa)</strong>
                            <p style="color:#94a3b8;margin:0.3rem 0 0;">-OH anomérico hacia <strong style="color:#f87171;">ABAJO</strong></p>
                        </div>
                        <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);padding:0.75rem;border-radius:8px;text-align:center;font-size:0.88rem;">
                            <strong style="color:#6ee7b7;">β (beta)</strong>
                            <p style="color:#94a3b8;margin:0.3rem 0 0;">-OH anomérico hacia <strong style="color:#6ee7b7;">ARRIBA</strong></p>
                        </div>
                    </div>
                </div>

                <div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:0.9rem;">
                    <p style="margin:0;color:#fcd34d;font-size:0.88rem;">💡 <strong>Mutarrotación:</strong> En solución, los anómeros α y β están en equilibrio dinámico. En glucosa: 36% α y 64% β.</p>
                </div>
            `
        },

        {
            id: 'monosacáridos-importantes',
            titulo: 'Monosacáridos Importantes',
            tiempo: '5 min',
            completada: false,
            contenido: `
                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Las 3 Hexosas Principales</h3>
                <div style="display:grid;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.4);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🍯 D-Glucosa (Dextrosa)</strong>
                            <span style="background:rgba(245,158,11,0.25);color:#fcd34d;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">ALDOHEXOSA</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 Principal fuente de energía celular<br>
                            🔸 Glucemia normal: <strong style="color:#fcd34d;">70–110 mg/dL</strong><br>
                            🔸 El cerebro consume <strong>120 g/día</strong><br>
                            🔸 Se almacena como glucógeno (animales) o almidón (plantas)
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.25);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🍓 D-Fructuosa (Levulosa)</strong>
                            <span style="background:rgba(245,158,11,0.2);color:#fcd34d;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">CETOHEXOSA</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 El más dulce: <strong style="color:#fcd34d;">1.7× la glucosa</strong><br>
                            🔸 Azúcar de frutas y miel (40%)<br>
                            🔸 Bajo índice glucémico (IG = 19)<br>
                            🔸 Isómero de glucosa: misma fórmula C₆H₁₂O₆, diferente estructura
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🥛 D-Galactosa</strong>
                            <span style="background:rgba(245,158,11,0.15);color:#f59e0b;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">ALDOHEXOSA</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 Epímero de glucosa en <strong style="color:#fcd34d;">C4</strong><br>
                            🔸 Componente de la lactosa (azúcar de la leche)<br>
                            🔸 Esencial en glucolípidos cerebrales<br>
                            🔸 Se convierte en glucosa por la <strong>vía de Leloir</strong>
                        </div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Las Pentosas del ADN y ARN 🧬</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#a5b4fc;">Ribosa</strong>
                        <p style="color:#cbd5e1;font-size:0.85rem;margin:0.4rem 0 0;line-height:1.6;">Componente del <strong style="color:#a5b4fc;">ARN</strong>, ATP, NAD, FAD, CoA.<br>Tiene <strong>-OH en C2</strong></p>
                    </div>
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#6ee7b7;">2-Desoxirribosa</strong>
                        <p style="color:#cbd5e1;font-size:0.85rem;margin:0.4rem 0 0;line-height:1.6;">Componente del <strong style="color:#6ee7b7;">ADN</strong>.<br>Le falta -OH en C2 → <strong>más estable</strong></p>
                    </div>
                </div>

                <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:1rem;border-radius:8px;margin-bottom:0.75rem;">
                    <strong style="color:#fca5a5;">⚠️ Galactosemia</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Deficiencia de enzimas de la vía de Leloir. Galactosa se acumula → <strong>cataratas, daño hepático, retraso mental</strong>. Tratamiento: dieta sin galactosa.</p>
                </div>
                <div style="background:rgba(251,146,60,0.08);border-left:3px solid #f97316;padding:1rem;border-radius:8px;">
                    <strong style="color:#fdba74;">⚠️ Diabetes Mellitus</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Glucemia ≥ 126 mg/dL en ayunas = diagnóstico. Tipo 1: falta insulina. Tipo 2: resistencia a insulina.</p>
                </div>
            `
        },

        {
            id: 'disacáridos',
            titulo: 'Disacáridos',
            tiempo: '5 min',
            completada: false,
            contenido: `
                <div style="background:rgba(245,158,11,0.12);border-left:4px solid #f59e0b;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#f59e0b;margin:0 0 0.5rem;">Enlace Glucosídico</h4>
                    <p style="margin:0;line-height:1.6;">Unión covalente entre dos monosacáridos por <strong>reacción de condensación</strong> (se libera H₂O). Se rompe por hidrólisis. Se nombra según los C unidos: ej. α(1→4).</p>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Los 3 Disacáridos Principales</h3>
                <div style="display:grid;gap:0.85rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.4);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🍭 Sacarosa — Azúcar de Mesa</strong>
                            <span style="background:rgba(239,68,68,0.2);color:#fca5a5;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">NO REDUCTOR</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 <strong style="color:#fcd34d;">Glucosa α(1→2) Fructuosa</strong><br>
                            🔸 Fuente: caña de azúcar (20%) y remolacha (17%)<br>
                            🔸 Hidrólisis por: <strong>Sacarasa (invertasa)</strong><br>
                            🔸 No reductor: ambos C anoméricos están en el enlace
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.25);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🥛 Lactosa — Azúcar de la Leche</strong>
                            <span style="background:rgba(16,185,129,0.2);color:#6ee7b7;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">REDUCTOR ✓</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 <strong style="color:#fcd34d;">Galactosa β(1→4) Glucosa</strong><br>
                            🔸 Único azúcar de origen animal. Leche materna: 7%<br>
                            🔸 Hidrólisis por: <strong>Lactasa (β-galactosidasa)</strong><br>
                            🔸 Reductor: glucosa tiene C anomérico libre
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:1.1rem;border-radius:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
                            <strong style="color:#fbbf24;font-size:1rem;">🌾 Maltosa — Azúcar de Malta</strong>
                            <span style="background:rgba(16,185,129,0.2);color:#6ee7b7;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:700;">REDUCTOR ✓</span>
                        </div>
                        <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                            🔸 <strong style="color:#fcd34d;">Glucosa α(1→4) Glucosa</strong><br>
                            🔸 Hidrólisis parcial del almidón. Presente en malta y cerveza<br>
                            🔸 Hidrólisis por: <strong>Maltasa</strong><br>
                            🔸 Reductor: un C anomérico libre
                        </div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Tabla Comparativa</h3>
                <div style="overflow-x:auto;margin-bottom:1.25rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
                        <thead>
                            <tr style="background:rgba(245,158,11,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Disacárido</th>
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Composición</th>
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Enlace</th>
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Reductor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);">
                                <td style="padding:0.6rem;color:#fbbf24;font-weight:600;">Sacarosa</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">Glc + Fru</td>
                                <td style="padding:0.6rem;color:#94a3b8;text-align:center;">α(1→2)</td>
                                <td style="padding:0.6rem;text-align:center;color:#fca5a5;font-weight:700;">NO ❌</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);background:rgba(30,41,59,0.4);">
                                <td style="padding:0.6rem;color:#fbbf24;font-weight:600;">Lactosa</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">Gal + Glc</td>
                                <td style="padding:0.6rem;color:#94a3b8;text-align:center;">β(1→4)</td>
                                <td style="padding:0.6rem;text-align:center;color:#6ee7b7;font-weight:700;">SÍ ✅</td>
                            </tr>
                            <tr>
                                <td style="padding:0.6rem;color:#fbbf24;font-weight:600;">Maltosa</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">Glc + Glc</td>
                                <td style="padding:0.6rem;color:#94a3b8;text-align:center;">α(1→4)</td>
                                <td style="padding:0.6rem;text-align:center;color:#6ee7b7;font-weight:700;">SÍ ✅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:1rem;border-radius:8px;">
                    <strong style="color:#fca5a5;">⚠️ Intolerancia a la Lactosa</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;">Afecta al <strong>65-70% de adultos</strong>. Deficiencia de lactasa → la lactosa no digerida es fermentada por bacterias. <strong>Síntomas:</strong> distensión, gases, diarrea, dolor abdominal.</p>
                </div>
            `
        },

        {
            id: 'polisacáridos-reserva',
            titulo: 'Polisacáridos de Reserva',
            tiempo: '5 min',
            completada: false,
            contenido: `
                <div style="background:rgba(245,158,11,0.12);border-left:4px solid #f59e0b;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#f59e0b;margin:0 0 0.5rem;">Polisacáridos</h4>
                    <p style="margin:0;line-height:1.6;">Polímeros de <strong>más de 10 monosacáridos</strong>. Sin sabor dulce, insolubles, no reductores. Pueden ser <strong>de reserva</strong> (almidón, glucógeno) o <strong>estructurales</strong> (celulosa, quitina).</p>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🌾 Almidón — Reserva Vegetal</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">Amilosa (20-30%)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            📏 Cadena <strong style="color:#fbbf24;">LINEAL</strong><br>
                            🔗 Solo enlaces α(1→4)<br>
                            🌀 Forma <strong>hélice</strong> en solución<br>
                            🔵 Con yodo: <strong style="color:#818cf8;">AZUL</strong>
                        </div>
                    </div>
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">Amilopectina (70-80%)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            🌳 Cadena <strong style="color:#fbbf24;">RAMIFICADA</strong><br>
                            🔗 α(1→4) + α(1→6)<br>
                            📐 Rama cada 24-30 glucosas<br>
                            🔴 Con yodo: <strong style="color:#f87171;">ROJO-VIOLETA</strong>
                        </div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🥩 Glucógeno — Reserva Animal</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#6ee7b7;margin:0 0 0.5rem;">Hígado (100-120 g)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            🎯 Mantiene la <strong style="color:#6ee7b7;">glucemia</strong><br>
                            🩸 Libera glucosa a sangre<br>
                            🔑 Glucagón lo degrada<br>
                            ⏱️ Se agota en 12-24h ayuno
                        </div>
                    </div>
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#6ee7b7;margin:0 0 0.5rem;">Músculo (300-400 g)</h4>
                        <div style="color:#cbd5e1;font-size:0.85rem;line-height:1.7;">
                            💪 Solo para <strong style="color:#6ee7b7;">contracción</strong><br>
                            🚫 No sale del músculo*<br>
                            🔑 Adrenalina lo degrada<br>
                            ⏱️ Se agota en 60-90 min
                        </div>
                    </div>
                </div>
                <p style="color:#94a3b8;font-size:0.8rem;margin:-0.75rem 0 1.25rem;">*Sin glucosa-6-fosfatasa → no puede liberar glucosa libre a la sangre.</p>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Almidón vs Glucógeno</h3>
                <div style="overflow-x:auto;margin-bottom:1.25rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
                        <thead>
                            <tr style="background:rgba(245,158,11,0.2);">
                                <th style="padding:0.6rem;text-align:left;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Característica</th>
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Almidón</th>
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Glucógeno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);">
                                <td style="padding:0.6rem;color:#94a3b8;">Organismo</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">🌿 Plantas</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">🐾 Animales</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);background:rgba(30,41,59,0.4);">
                                <td style="padding:0.6rem;color:#94a3b8;">Ramificación</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">Cada 24-30</td>
                                <td style="padding:0.6rem;color:#fbbf24;text-align:center;font-weight:600;">Cada 8-12 ↑</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);">
                                <td style="padding:0.6rem;color:#94a3b8;">Tamaño</td>
                                <td style="padding:0.6rem;color:#cbd5e1;text-align:center;">~10,000 glc</td>
                                <td style="padding:0.6rem;color:#fbbf24;text-align:center;font-weight:600;">~50,000 glc</td>
                            </tr>
                            <tr>
                                <td style="padding:0.6rem;color:#94a3b8;">Monómero</td>
                                <td style="padding:0.6rem;color:#6ee7b7;text-align:center;">α-Glucosa</td>
                                <td style="padding:0.6rem;color:#6ee7b7;text-align:center;">α-Glucosa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:1rem;border-radius:8px;">
                    <strong style="color:#fca5a5;">⚠️ Glucogenosis (enfermedades hereditarias)</strong>
                    <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.88rem;"><strong>Von Gierke (tipo I):</strong> Sin glucosa-6-fosfatasa → hipoglucemia severa.<br><strong>McArdle (tipo V):</strong> Sin fosforilasa muscular → calambres con ejercicio.</p>
                </div>
            `
        },

        {
            id: 'polisacáridos-estructurales',
            titulo: 'Polisacáridos Estructurales',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🌿 Celulosa — El Más Abundante del Planeta</h3>
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1.1rem;border-radius:12px;margin-bottom:1.25rem;">
                    <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                        🔗 Polímero de <strong style="color:#6ee7b7;">β-D-Glucosa</strong> con enlaces <strong style="color:#6ee7b7;">β(1→4)</strong><br>
                        📏 Cadenas lineales antiparalelas → microfibrillas muy resistentes<br>
                        🧱 Principal componente de la <strong>pared celular vegetal</strong> (40-50%)<br>
                        ❌ Humanos <strong style="color:#f87171;">NO tenemos celulasa</strong> → no la digerimos → es fibra
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">¿Por qué almidón sí y celulosa no?</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#fcd34d;">🌾 Almidón</strong>
                        <p style="color:#94a3b8;font-size:0.85rem;margin:0.4rem 0 0;line-height:1.6;">Enlace <strong style="color:#fbbf24;">α(1→4)</strong><br>→ Hélice flexible<br>→ <span style="color:#6ee7b7;">Digerible ✅</span></p>
                    </div>
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;text-align:center;">
                        <strong style="color:#6ee7b7;">🌿 Celulosa</strong>
                        <p style="color:#94a3b8;font-size:0.85rem;margin:0.4rem 0 0;line-height:1.6;">Enlace <strong style="color:#6ee7b7;">β(1→4)</strong><br>→ Cadena extendida rígida<br>→ <span style="color:#f87171;">No digerible ❌</span></p>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🦐 Quitina</h3>
                <div style="display:grid;gap:0.6rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">Estructura</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Polímero de <strong>N-acetilglucosamina</strong> con enlaces β(1→4). Similar a celulosa pero más resistente.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">Dónde se encuentra</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">🦀 <strong>Exoesqueleto</strong> de artrópodos (insectos, crustáceos, arácnidos). 🍄 <strong>Pared celular</strong> de hongos.</p>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:0.9rem;border-radius:10px;">
                        <strong style="color:#fcd34d;">Aplicaciones clínicas</strong>
                        <p style="margin:0.3rem 0 0;color:#cbd5e1;font-size:0.9rem;">Suturas biodegradables, encapsulación de fármacos, tratamiento de agua, cosmética.</p>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Fibra Dietética</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem;">
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">Fibra Insoluble</h4>
                        <div style="color:#cbd5e1;font-size:0.82rem;line-height:1.7;">
                            Celulosa, hemicelulosa<br>
                            ✅ ↑ Volumen fecal<br>
                            ✅ Previene estreñimiento<br>
                            ✅ ↓ Riesgo cáncer colon
                        </div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.2);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">Fibra Soluble</h4>
                        <div style="color:#cbd5e1;font-size:0.82rem;line-height:1.7;">
                            Pectina, β-glucanos<br>
                            ✅ ↓ Colesterol LDL<br>
                            ✅ Controla glucemia<br>
                            ✅ Prebiótico (microbiota)
                        </div>
                    </div>
                </div>

                <div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:0.9rem;">
                    <p style="margin:0;color:#fcd34d;font-size:0.88rem;">💡 <strong>Recomendación diaria:</strong> 25-30 g de fibra. Los rumiantes SÍ digieren celulosa gracias a bacterias simbióticas en el rumen.</p>
                </div>
            `
        },

        {
            id: 'metabolismo-glucosa',
            titulo: 'Metabolismo de Carbohidratos',
            tiempo: '6 min',
            completada: false,
            contenido: `
                <div style="background:rgba(245,158,11,0.12);border-left:4px solid #f59e0b;padding:1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                    <h4 style="color:#f59e0b;margin:0 0 0.5rem;">Regulación Metabólica</h4>
                    <p style="margin:0;line-height:1.6;"><strong>Insulina</strong> (estado fed) y <strong>glucagón</strong> (ayuno) regulan finamente el metabolismo para mantener glucemia <strong style="color:#fcd34d;">70-110 mg/dL</strong>.</p>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">⚡ Glucólisis</h3>
                <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;margin-bottom:1.25rem;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.6rem;flex-wrap:wrap;gap:0.4rem;">
                        <span style="color:#94a3b8;font-size:0.85rem;">📍 Citoplasma | Sin O₂ requerido</span>
                        <span style="background:rgba(16,185,129,0.2);color:#6ee7b7;padding:0.2rem 0.7rem;border-radius:20px;font-size:0.8rem;font-weight:700;">Neto: +2 ATP +2 NADH</span>
                    </div>
                    <div style="color:#cbd5e1;font-size:0.88rem;margin-bottom:0.75rem;">
                        Glucosa <span style="color:#f87171;">(-2 ATP)</span> → Fructosa-1,6-BP → 2× Piruvato <span style="color:#6ee7b7;">(+4 ATP)</span>
                    </div>
                    <div style="display:grid;gap:0.5rem;">
                        <div style="background:rgba(30,41,59,0.85);padding:0.6rem 0.85rem;border-radius:8px;font-size:0.85rem;display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.3rem;">
                            <span style="color:#fcd34d;font-weight:600;">⭐ Paso limitante: PFK-1</span>
                            <span style="color:#94a3b8;">Activa: AMP | Inhibe: ATP, citrato</span>
                        </div>
                        <div style="background:rgba(16,185,129,0.08);border-left:3px solid #10b981;padding:0.6rem 0.85rem;border-radius:8px;font-size:0.85rem;color:#cbd5e1;">
                            🌬️ <strong>Aeróbico:</strong> Piruvato → Acetil-CoA → Krebs → <strong style="color:#6ee7b7;">~30-32 ATP totales</strong>
                        </div>
                        <div style="background:rgba(245,158,11,0.08);border-left:3px solid #f59e0b;padding:0.6rem 0.85rem;border-radius:8px;font-size:0.85rem;color:#cbd5e1;">
                            🏃 <strong>Anaeróbico:</strong> Piruvato → <strong style="color:#fbbf24;">Lactato</strong> (músculo) / <strong style="color:#fbbf24;">Etanol</strong> (levaduras)
                        </div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🔄 Gluconeogénesis — Síntesis de Glucosa</h3>
                <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);padding:1rem;border-radius:12px;margin-bottom:1.25rem;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.6rem;flex-wrap:wrap;gap:0.4rem;">
                        <span style="color:#a5b4fc;font-size:0.88rem;font-weight:600;">📍 Hígado (90%) + Riñón (10%)</span>
                        <span style="background:rgba(239,68,68,0.2);color:#fca5a5;padding:0.2rem 0.7rem;border-radius:20px;font-size:0.8rem;">Costo: 6 ATP</span>
                    </div>
                    <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                        🔸 Activa en ayuno &gt;8h, ejercicio prolongado, dieta cetogénica<br>
                        🔸 Precursores: <strong style="color:#a5b4fc;">Lactato, aminoácidos, glicerol</strong><br>
                        🔸 Enzimas únicas: PEPCK, Fructosa-1,6-bisfosfatasa, G-6-fosfatasa<br>
                        🔸 Estimulada por <strong>glucagón</strong>, inhibida por insulina
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🔬 Vía de las Pentosas Fosfato</h3>
                <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;margin-bottom:1.25rem;">
                    <div style="color:#cbd5e1;font-size:0.88rem;line-height:1.8;">
                        🔸 <strong>No produce ATP</strong>. Produce <strong style="color:#6ee7b7;">NADPH</strong> y <strong style="color:#6ee7b7;">Ribosa-5-P</strong><br>
                        🔸 NADPH: biosíntesis de lípidos y defensa antioxidante (glutatión)<br>
                        🔸 Ribosa-5-P: precursor de nucleótidos (ADN, ARN, ATP, NAD, FAD)
                    </div>
                    <div style="margin-top:0.75rem;background:rgba(239,68,68,0.08);border-left:3px solid #ef4444;padding:0.75rem;border-radius:8px;font-size:0.85rem;">
                        <strong style="color:#fca5a5;">⚠️ Deficiencia de G6PD:</strong> <span style="color:#cbd5e1;"> ↓NADPH → eritrocitos vulnerables al estrés oxidativo → <strong>anemia hemolítica</strong>. Desencadenada por habas o ciertos medicamentos.</span>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Regulación Hormonal</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                    <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#6ee7b7;margin:0 0 0.5rem;">🍽️ Insulina (Fed)</h4>
                        <div style="color:#cbd5e1;font-size:0.83rem;line-height:1.8;">
                            ↑ Glucólisis<br>
                            ↑ Glucogenogénesis<br>
                            ↑ Lipogénesis<br>
                            ↓ Gluconeogénesis<br>
                            ↓ Glucogenólisis
                        </div>
                    </div>
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:1rem;border-radius:12px;">
                        <h4 style="color:#fcd34d;margin:0 0 0.5rem;">🏃 Glucagón (Ayuno)</h4>
                        <div style="color:#cbd5e1;font-size:0.83rem;line-height:1.8;">
                            ↑ Glucogenólisis<br>
                            ↑ Gluconeogénesis<br>
                            ↑ Lipólisis<br>
                            ↑ Cetogénesis<br>
                            ↓ Glucólisis
                        </div>
                    </div>
                </div>
            `
        },

        {
            id: 'funciones-glucoconjugados',
            titulo: 'Funciones y Glucoconjugados',
            tiempo: '4 min',
            completada: false,
            contenido: `
                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Funciones Biológicas de los Carbohidratos</h3>
                <div style="display:grid;gap:0.55rem;margin-bottom:1.5rem;">
                    <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);padding:0.9rem;border-radius:10px;display:flex;align-items:center;gap:0.85rem;">
                        <span style="font-size:1.5rem;flex-shrink:0;">⚡</span>
                        <div><strong style="color:#fcd34d;">Energética</strong><p style="margin:0.15rem 0 0;color:#94a3b8;font-size:0.85rem;">Glucosa → 4 kcal/g. Glucógeno y almidón como reserva.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;align-items:center;gap:0.85rem;">
                        <span style="font-size:1.5rem;flex-shrink:0;">🏗️</span>
                        <div><strong style="color:#fcd34d;">Estructural</strong><p style="margin:0.15rem 0 0;color:#94a3b8;font-size:0.85rem;">Celulosa (pared vegetal), quitina (exoesqueleto), ácido hialurónico (matriz extracelular).</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;align-items:center;gap:0.85rem;">
                        <span style="font-size:1.5rem;flex-shrink:0;">🔐</span>
                        <div><strong style="color:#fcd34d;">Reconocimiento Celular</strong><p style="margin:0.15rem 0 0;color:#94a3b8;font-size:0.85rem;">Glucoproteínas y glucolípidos de membrana. Grupos sanguíneos ABO.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;align-items:center;gap:0.85rem;">
                        <span style="font-size:1.5rem;flex-shrink:0;">🧬</span>
                        <div><strong style="color:#fcd34d;">Precursor Biosintético</strong><p style="margin:0.15rem 0 0;color:#94a3b8;font-size:0.85rem;">Ribosa → ácidos nucleicos. Piruvato → aminoácidos. Acetil-CoA → lípidos.</p></div>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);border:1px solid rgba(245,158,11,0.15);padding:0.9rem;border-radius:10px;display:flex;align-items:center;gap:0.85rem;">
                        <span style="font-size:1.5rem;flex-shrink:0;">🛡️</span>
                        <div><strong style="color:#fcd34d;">Protectora</strong><p style="margin:0.15rem 0 0;color:#94a3b8;font-size:0.85rem;">Heparina (anticoagulante), moco (barrera epitelial), ác. hialurónico (articulaciones).</p></div>
                    </div>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">🩸 Grupos Sanguíneos ABO</h3>
                <div style="overflow-x:auto;margin-bottom:1.25rem;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
                        <thead>
                            <tr style="background:rgba(245,158,11,0.2);">
                                <th style="padding:0.6rem;text-align:center;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Tipo</th>
                                <th style="padding:0.6rem;text-align:left;color:#fcd34d;border-bottom:2px solid rgba(245,158,11,0.4);">Carbohidrato terminal en eritrocito</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);">
                                <td style="padding:0.6rem;text-align:center;font-weight:700;color:#fbbf24;">O</td>
                                <td style="padding:0.6rem;color:#cbd5e1;">Solo antígeno H (fucosa) — base de todos</td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);background:rgba(30,41,59,0.4);">
                                <td style="padding:0.6rem;text-align:center;font-weight:700;color:#fbbf24;">A</td>
                                <td style="padding:0.6rem;color:#cbd5e1;">Antígeno H + <strong style="color:#fcd34d;">N-acetilgalactosamina</strong></td>
                            </tr>
                            <tr style="border-bottom:1px solid rgba(245,158,11,0.1);">
                                <td style="padding:0.6rem;text-align:center;font-weight:700;color:#fbbf24;">B</td>
                                <td style="padding:0.6rem;color:#cbd5e1;">Antígeno H + <strong style="color:#fcd34d;">Galactosa</strong></td>
                            </tr>
                            <tr>
                                <td style="padding:0.6rem;text-align:center;font-weight:700;color:#fbbf24;">AB</td>
                                <td style="padding:0.6rem;color:#cbd5e1;">Ambos antígenos A y B</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="color:#f59e0b;margin-bottom:0.75rem;">Glucosaminoglucanos Clave</h3>
                <div style="display:grid;gap:0.5rem;margin-bottom:1rem;">
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.88rem;">
                        <strong style="color:#fcd34d;">Ácido Hialurónico</strong>
                        <span style="color:#94a3b8;font-size:0.82rem;">Articulaciones, humor vítreo, piel</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.88rem;">
                        <strong style="color:#fcd34d;">Heparina</strong>
                        <span style="color:#94a3b8;font-size:0.82rem;">⚠️ Anticoagulante natural y clínico</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.88rem;">
                        <strong style="color:#fcd34d;">Condroitín Sulfato</strong>
                        <span style="color:#94a3b8;font-size:0.82rem;">Cartílago — resistencia compresión</span>
                    </div>
                    <div style="background:rgba(30,41,59,0.85);padding:0.8rem;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.88rem;">
                        <strong style="color:#fcd34d;">Queratán Sulfato</strong>
                        <span style="color:#94a3b8;font-size:0.82rem;">Córnea — transparencia ocular</span>
                    </div>
                </div>

                <div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:0.9rem;">
                    <p style="margin:0;color:#fcd34d;font-size:0.88rem;">💡 Las diferencias entre grupos sanguíneos son solo en los <strong>carbohidratos terminales</strong> de glucoproteínas en la superficie del eritrocito.</p>
                </div>
            `
        }
    ]
};

if (typeof window !== 'undefined') {
    window.CARBOHIDRATOS = CARBOHIDRATOS;
}
