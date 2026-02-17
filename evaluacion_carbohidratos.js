const EVALUACION_CARBOHIDRATOS = {
    id: 'eval_carbohidratos',
    titulo: 'Evaluación: Carbohidratos',
    descripcion: 'Evaluación completa de 100 preguntas sobre estructura, clasificación y metabolismo de carbohidratos',
    
    // 10 bloques × 10 preguntas = 100 preguntas
    bloques: [
        {
            id: 1,
            titulo: 'Conceptos Básicos y Clasificación',
            preguntas: [
                {
                    id: 1,
                    pregunta: '¿Cuál es la fórmula general de los carbohidratos?',
                    opciones: [
                        '(CH₂O)ₙ donde n ≥ 3',
                        '(CHO)ₙ donde n ≥ 2',
                        'CₙH₂ₙOₙ donde n ≥ 5',
                        '(C₂HO)ₙ donde n ≥ 4'
                    ],
                    correcta: 0,
                    explicacion: 'La fórmula general de los carbohidratos es (CH₂O)ₙ donde n ≥ 3, indicando que por cada carbono hay dos hidrógenos y un oxígeno.'
                },
                {
                    id: 2,
                    pregunta: '¿Cuántas kilocalorías aporta 1 gramo de carbohidratos?',
                    opciones: [
                        '2 kcal',
                        '4 kcal',
                        '7 kcal',
                        '9 kcal'
                    ],
                    correcta: 1,
                    explicacion: 'Los carbohidratos aportan 4 kcal por gramo, al igual que las proteínas. Los lípidos aportan 9 kcal/g.'
                },
                {
                    id: 3,
                    pregunta: '¿Qué característica hace a los carbohidratos hidrofílicos?',
                    opciones: [
                        'Sus enlaces C-C',
                        'Sus grupos hidroxilo (-OH)',
                        'Su estructura cíclica',
                        'Sus enlaces glucosídicos'
                    ],
                    correcta: 1,
                    explicacion: 'Los múltiples grupos hidroxilo (-OH) hacen a los carbohidratos hidrofílicos (solubles en agua) al formar puentes de hidrógeno.'
                },
                {
                    id: 4,
                    pregunta: '¿Cómo se clasifican los carbohidratos formados por 2 unidades de monosacáridos?',
                    opciones: [
                        'Monosacáridos',
                        'Disacáridos',
                        'Oligosacáridos',
                        'Polisacáridos'
                    ],
                    correcta: 1,
                    explicacion: 'Los disacáridos están formados por la unión de 2 monosacáridos mediante un enlace glucosídico.'
                },
                {
                    id: 5,
                    pregunta: '¿Cuántas unidades de monosacáridos contienen los oligosacáridos?',
                    opciones: [
                        '2 unidades',
                        '3-10 unidades',
                        '10-50 unidades',
                        'Más de 50 unidades'
                    ],
                    correcta: 1,
                    explicacion: 'Los oligosacáridos contienen entre 3 y 10 unidades de monosacáridos. Más de 10 se consideran polisacáridos.'
                },
                {
                    id: 6,
                    pregunta: '¿Cuáles son los dos grupos funcionales principales en los carbohidratos?',
                    opciones: [
                        'Carboxilo y amino',
                        'Carbonilo e hidroxilo',
                        'Fosfato y sulfato',
                        'Amida y éster'
                    ],
                    correcta: 1,
                    explicacion: 'Los carbohidratos contienen un grupo carbonilo (C=O) que puede ser aldehído o cetona, y múltiples grupos hidroxilo (-OH).'
                },
                {
                    id: 7,
                    pregunta: '¿Qué porcentaje de las calorías diarias deben provenir de carbohidratos según las recomendaciones?',
                    opciones: [
                        '20-30%',
                        '30-40%',
                        '50-60%',
                        '70-80%'
                    ],
                    correcta: 2,
                    explicacion: 'Los carbohidratos deben representar el 50-60% de las calorías diarias totales.'
                },
                {
                    id: 8,
                    pregunta: '¿Cuál es la diferencia entre carbohidratos simples y complejos?',
                    opciones: [
                        'El color',
                        'La velocidad de absorción',
                        'El origen (animal o vegetal)',
                        'El contenido de oxígeno'
                    ],
                    correcta: 1,
                    explicacion: 'Los carbohidratos simples se absorben rápidamente y tienen sabor dulce, mientras que los complejos se absorben lentamente y no son dulces.'
                },
                {
                    id: 9,
                    pregunta: '¿Cuál es el carbohidrato orgánico más abundante en la naturaleza?',
                    opciones: [
                        'Glucógeno',
                        'Almidón',
                        'Celulosa',
                        'Quitina'
                    ],
                    correcta: 2,
                    explicacion: 'La celulosa es el compuesto orgánico más abundante del planeta, siendo el principal componente de las paredes celulares vegetales.'
                },
                {
                    id: 10,
                    pregunta: '¿Qué tipo de enlace une a dos monosacáridos para formar un disacárido?',
                    opciones: [
                        'Enlace peptídico',
                        'Enlace glucosídico',
                        'Enlace fosfodiéster',
                        'Enlace éster'
                    ],
                    correcta: 1,
                    explicacion: 'El enlace glucosídico es un enlace covalente que se forma por una reacción de condensación entre dos grupos -OH de monosacáridos.'
                }
            ]
        },
        {
            id: 2,
            titulo: 'Monosacáridos - Estructura y Clasificación',
            preguntas: [
                {
                    id: 11,
                    pregunta: '¿Cómo se llaman los monosacáridos con 5 átomos de carbono?',
                    opciones: [
                        'Triosas',
                        'Tetrosas',
                        'Pentosas',
                        'Hexosas'
                    ],
                    correcta: 2,
                    explicacion: 'Los monosacáridos con 5 carbonos se llaman pentosas. Ejemplos: ribosa, desoxirribosa.'
                },
                {
                    id: 12,
                    pregunta: '¿Qué diferencia a una aldosa de una cetosa?',
                    opciones: [
                        'El número de carbonos',
                        'La posición del grupo carbonilo',
                        'La solubilidad en agua',
                        'El sabor'
                    ],
                    correcta: 1,
                    explicacion: 'Las aldosas tienen el grupo carbonilo (aldehído) en C1, mientras que las cetosas lo tienen en C2 (cetona).'
                },
                {
                    id: 13,
                    pregunta: '¿Cuál es el monosacárido más importante como fuente de energía?',
                    opciones: [
                        'Fructuosa',
                        'Galactosa',
                        'Glucosa',
                        'Ribosa'
                    ],
                    correcta: 2,
                    explicacion: 'La glucosa (dextrosa) es el monosacárido más importante, siendo la principal fuente de energía para las células.'
                },
                {
                    id: 14,
                    pregunta: 'La glucosa es clasificada como:',
                    opciones: [
                        'Cetohexosa',
                        'Aldohexosa',
                        'Cetopentosa',
                        'Aldopentosa'
                    ],
                    correcta: 1,
                    explicacion: 'La glucosa es una aldohexosa: tiene un grupo aldehído (aldosa) y 6 carbonos (hexosa).'
                },
                {
                    id: 15,
                    pregunta: '¿Cuál es la concentración normal de glucosa en sangre en ayunas?',
                    opciones: [
                        '40-60 mg/dL',
                        '70-110 mg/dL',
                        '120-150 mg/dL',
                        '160-200 mg/dL'
                    ],
                    correcta: 1,
                    explicacion: 'La glucemia normal en ayunas es de 70-110 mg/dL. Valores mayores pueden indicar diabetes.'
                },
                {
                    id: 16,
                    pregunta: '¿Qué monosacárido es conocido como "el azúcar de las frutas"?',
                    opciones: [
                        'Glucosa',
                        'Fructuosa',
                        'Galactosa',
                        'Manosa'
                    ],
                    correcta: 1,
                    explicacion: 'La fructuosa (levulosa) es el azúcar de las frutas y el monosacárido más dulce (1.7× más que la glucosa).'
                },
                {
                    id: 17,
                    pregunta: 'La fructuosa es clasificada como:',
                    opciones: [
                        'Aldohexosa',
                        'Cetohexosa',
                        'Aldopentosa',
                        'Cetopentosa'
                    ],
                    correcta: 1,
                    explicacion: 'La fructuosa es una cetohexosa: tiene un grupo cetona en C2 (cetosa) y 6 carbonos (hexosa).'
                },
                {
                    id: 18,
                    pregunta: '¿En qué se diferencia la serie D de la serie L en monosacáridos?',
                    opciones: [
                        'El número de carbonos',
                        'La posición del -OH en el carbono asimétrico más alejado',
                        'El sabor',
                        'La solubilidad'
                    ],
                    correcta: 1,
                    explicacion: 'En la serie D, el -OH del carbono asimétrico más alejado del carbonilo está a la DERECHA; en la serie L, a la IZQUIERDA.'
                },
                {
                    id: 19,
                    pregunta: '¿Qué pentosa forma parte del ARN?',
                    opciones: [
                        'Xilosa',
                        'Desoxirribosa',
                        'Ribosa',
                        'Arabinosa'
                    ],
                    correcta: 2,
                    explicacion: 'La ribosa (β-D-ribofuranosa) es el componente del ARN. La desoxirribosa forma parte del ADN.'
                },
                {
                    id: 20,
                    pregunta: 'Al ciclarse, el carbono carbonílico se convierte en:',
                    opciones: [
                        'Carbono asimétrico',
                        'Carbono anomérico',
                        'Carbono quiral',
                        'Carbono epímero'
                    ],
                    correcta: 1,
                    explicacion: 'Al formar el anillo, el carbono carbonílico se convierte en un nuevo centro quiral llamado carbono anomérico, generando formas α y β.'
                }
            ]
        },
        {
            id: 3,
            titulo: 'Disacáridos Importantes',
            preguntas: [
                {
                    id: 21,
                    pregunta: '¿Qué monosacáridos forman la sacarosa?',
                    opciones: [
                        'Glucosa + Glucosa',
                        'Glucosa + Fructuosa',
                        'Glucosa + Galactosa',
                        'Fructuosa + Galactosa'
                    ],
                    correcta: 1,
                    explicacion: 'La sacarosa (azúcar de mesa) está formada por α-D-Glucosa + β-D-Fructuosa unidas por enlace α(1→2).'
                },
                {
                    id: 22,
                    pregunta: '¿La sacarosa es un azúcar reductor?',
                    opciones: [
                        'Sí, porque tiene un grupo carbonilo libre',
                        'No, porque ambos carbonos anoméricos están en el enlace',
                        'Sí, solo en condiciones ácidas',
                        'No, porque es un disacárido'
                    ],
                    correcta: 1,
                    explicacion: 'La sacarosa NO es reductora porque ambos carbonos anoméricos (de glucosa y fructuosa) participan en el enlace glucosídico.'
                },
                {
                    id: 23,
                    pregunta: '¿Cuál es la principal fuente comercial de sacarosa?',
                    opciones: [
                        'Maíz',
                        'Caña de azúcar y remolacha',
                        'Frutas',
                        'Miel'
                    ],
                    correcta: 1,
                    explicacion: 'La sacarosa se obtiene comercialmente de la caña de azúcar (20%) y la remolacha azucarera (17%).'
                },
                {
                    id: 24,
                    pregunta: '¿Qué monosacáridos forman la lactosa?',
                    opciones: [
                        'Glucosa + Glucosa',
                        'Glucosa + Fructuosa',
                        'Galactosa + Glucosa',
                        'Galactosa + Fructuosa'
                    ],
                    correcta: 2,
                    explicacion: 'La lactosa (azúcar de la leche) está formada por β-D-Galactosa + β-D-Glucosa con enlace β(1→4).'
                },
                {
                    id: 25,
                    pregunta: '¿La lactosa es un azúcar reductor?',
                    opciones: [
                        'Sí, porque tiene un carbono anomérico libre',
                        'No, porque está en la leche',
                        'Sí, solo cuando se hierve',
                        'No, nunca'
                    ],
                    correcta: 0,
                    explicacion: 'La lactosa SÍ es reductora porque tiene un carbono anomérico libre en la glucosa que puede oxidarse.'
                },
                {
                    id: 26,
                    pregunta: '¿Qué enzima hidroliza la lactosa?',
                    opciones: [
                        'Sacarasa',
                        'Maltasa',
                        'Lactasa',
                        'Amilasa'
                    ],
                    correcta: 2,
                    explicacion: 'La lactasa (β-galactosidasa) hidroliza la lactosa en galactosa + glucosa en el intestino delgado.'
                },
                {
                    id: 27,
                    pregunta: '¿Qué causa la intolerancia a la lactosa?',
                    opciones: [
                        'Exceso de lactosa',
                        'Deficiencia de lactasa',
                        'Alergia a la proteína de la leche',
                        'Exceso de galactosa'
                    ],
                    correcta: 1,
                    explicacion: 'La intolerancia a la lactosa se debe a la deficiencia de lactasa, causando que la lactosa no digerida sea fermentada por bacterias colónicas.'
                },
                {
                    id: 28,
                    pregunta: '¿Qué monosacáridos forman la maltosa?',
                    opciones: [
                        'Glucosa + Fructuosa',
                        'Glucosa + Glucosa',
                        'Glucosa + Galactosa',
                        'Galactosa + Galactosa'
                    ],
                    correcta: 1,
                    explicacion: 'La maltosa (azúcar de malta) está formada por dos moléculas de α-D-Glucosa con enlace α(1→4).'
                },
                {
                    id: 29,
                    pregunta: '¿De dónde proviene principalmente la maltosa?',
                    opciones: [
                        'Leche',
                        'Frutas',
                        'Hidrólisis parcial del almidón',
                        'Caña de azúcar'
                    ],
                    correcta: 2,
                    explicacion: 'La maltosa se forma por hidrólisis parcial del almidón durante la digestión o el proceso de malteo de la cebada.'
                },
                {
                    id: 30,
                    pregunta: '¿Cuál es la diferencia clave entre maltosa y celobiosa?',
                    opciones: [
                        'El número de glucosas',
                        'El tipo de enlace (α vs β)',
                        'La solubilidad',
                        'El origen'
                    ],
                    correcta: 1,
                    explicacion: 'La maltosa tiene enlace α(1→4) (digerible), mientras que la celobiosa tiene enlace β(1→4) (no digerible por humanos).'
                }
            ]
        },
        {
            id: 4,
            titulo: 'Polisacáridos de Reserva',
            preguntas: [
                {
                    id: 31,
                    pregunta: '¿Cuáles son los dos componentes del almidón?',
                    opciones: [
                        'Amilosa y amilopectina',
                        'Glucógeno y celulosa',
                        'Maltosa y dextrina',
                        'Glucosa y fructuosa'
                    ],
                    correcta: 0,
                    explicacion: 'El almidón está compuesto de amilosa (20-30%, lineal) y amilopectina (70-80%, ramificada).'
                },
                {
                    id: 32,
                    pregunta: '¿Qué tipo de enlaces tiene la amilosa?',
                    opciones: [
                        'α(1→4) únicamente',
                        'β(1→4) únicamente',
                        'α(1→4) y α(1→6)',
                        'β(1→4) y β(1→6)'
                    ],
                    correcta: 0,
                    explicacion: 'La amilosa tiene solo enlaces α(1→4) formando una cadena lineal que adopta estructura de hélice.'
                },
                {
                    id: 33,
                    pregunta: '¿Cada cuántas glucosas se ramifica la amilopectina?',
                    opciones: [
                        'Cada 5-10 glucosas',
                        'Cada 24-30 glucosas',
                        'Cada 50-60 glucosas',
                        'No se ramifica'
                    ],
                    correcta: 1,
                    explicacion: 'La amilopectina se ramifica cada 24-30 glucosas mediante enlaces α(1→6) en los puntos de ramificación.'
                },
                {
                    id: 34,
                    pregunta: '¿De qué color se tiñe el almidón con yodo?',
                    opciones: [
                        'Rojo',
                        'Verde',
                        'Azul (amilosa) y rojo-violeta (amilopectina)',
                        'Amarillo'
                    ],
                    correcta: 2,
                    explicacion: 'La amilosa se tiñe de azul intenso con yodo, mientras que la amilopectina se tiñe de rojo-violeta.'
                },
                {
                    id: 35,
                    pregunta: '¿Cuál es la diferencia principal entre almidón y glucógeno?',
                    opciones: [
                        'El tipo de monosacárido',
                        'El grado de ramificación',
                        'El tipo de enlace',
                        'La solubilidad'
                    ],
                    correcta: 1,
                    explicacion: 'El glucógeno es más ramificado (cada 8-12 glucosas) que el almidón (cada 24-30 en amilopectina).'
                },
                {
                    id: 36,
                    pregunta: '¿Dónde se almacena el glucógeno en el organismo?',
                    opciones: [
                        'Solo en el cerebro',
                        'Solo en el hígado',
                        'Hígado (10%) y músculo (1-2%)',
                        'En todo el cuerpo uniformemente'
                    ],
                    correcta: 2,
                    explicacion: 'El glucógeno se almacena principalmente en el hígado (10% del peso) y músculo esquelético (1-2% del peso).'
                },
                {
                    id: 37,
                    pregunta: '¿Cuál es la función del glucógeno hepático?',
                    opciones: [
                        'Energía para contracción muscular',
                        'Mantener la glucemia entre comidas',
                        'Síntesis de proteínas',
                        'Almacenar vitaminas'
                    ],
                    correcta: 1,
                    explicacion: 'El glucógeno hepático se degrada para liberar glucosa a la sangre y mantener la glucemia entre comidas.'
                },
                {
                    id: 38,
                    pregunta: '¿Cuál es la función del glucógeno muscular?',
                    opciones: [
                        'Mantener glucemia',
                        'Energía para contracción muscular',
                        'Síntesis de hormonas',
                        'Termorregulación'
                    ],
                    correcta: 1,
                    explicacion: 'El glucógeno muscular proporciona energía durante la contracción muscular. No sale del músculo porque carece de glucosa-6-fosfatasa.'
                },
                {
                    id: 39,
                    pregunta: '¿Qué hormona estimula la síntesis de glucógeno?',
                    opciones: [
                        'Glucagón',
                        'Adrenalina',
                        'Insulina',
                        'Cortisol'
                    ],
                    correcta: 2,
                    explicacion: 'La insulina (liberada después de comer) estimula la glucogenogénesis (síntesis de glucógeno).'
                },
                {
                    id: 40,
                    pregunta: '¿Qué hormona estimula la degradación del glucógeno hepático?',
                    opciones: [
                        'Insulina',
                        'Glucagón',
                        'Hormona del crecimiento',
                        'Tiroxina'
                    ],
                    correcta: 1,
                    explicacion: 'El glucagón (liberado en ayuno) estimula la glucogenólisis hepática para liberar glucosa a la sangre.'
                }
            ]
        },
        {
            id: 5,
            titulo: 'Polisacáridos Estructurales',
            preguntas: [
                {
                    id: 41,
                    pregunta: '¿Qué tipo de enlace tiene la celulosa?',
                    opciones: [
                        'α(1→4)',
                        'β(1→4)',
                        'α(1→6)',
                        'β(1→6)'
                    ],
                    correcta: 1,
                    explicacion: 'La celulosa tiene enlaces β(1→4) entre moléculas de β-D-glucosa, formando cadenas lineales muy resistentes.'
                },
                {
                    id: 42,
                    pregunta: '¿Por qué los humanos no podemos digerir la celulosa?',
                    opciones: [
                        'Es muy grande',
                        'No tenemos la enzima celulasa',
                        'Es tóxica',
                        'Se absorbe sin digerir'
                    ],
                    correcta: 1,
                    explicacion: 'Los humanos carecemos de celulasa, la enzima que rompe enlaces β(1→4), por lo que no podemos digerir celulosa.'
                },
                {
                    id: 43,
                    pregunta: '¿Cuál es la función principal de la celulosa en plantas?',
                    opciones: [
                        'Reserva energética',
                        'Transporte de agua',
                        'Componente estructural de la pared celular',
                        'Fotosíntesis'
                    ],
                    correcta: 2,
                    explicacion: 'La celulosa es el principal componente estructural de la pared celular vegetal (40-50%), proporcionando rigidez.'
                },
                {
                    id: 44,
                    pregunta: 'Aunque no la digerimos, ¿qué función cumple la celulosa en nuestra dieta?',
                    opciones: [
                        'Aporta vitaminas',
                        'Actúa como fibra dietética',
                        'Proporciona energía',
                        'Regula hormonas'
                    ],
                    correcta: 1,
                    explicacion: 'La celulosa actúa como fibra dietética, aumentando el volumen fecal, estimulando el peristaltismo y alimentando la microbiota.'
                },
                {
                    id: 45,
                    pregunta: '¿De qué está compuesta la quitina?',
                    opciones: [
                        'Glucosa',
                        'N-acetilglucosamina',
                        'Galactosa',
                        'Ácido glucurónico'
                    ],
                    correcta: 1,
                    explicacion: 'La quitina es un polímero de N-acetilglucosamina (glucosa con grupo -NHCOCH₃ en C2) con enlaces β(1→4).'
                },
                {
                    id: 46,
                    pregunta: '¿Dónde se encuentra la quitina?',
                    opciones: [
                        'Paredes celulares de plantas',
                        'Exoesqueleto de artrópodos y pared celular de hongos',
                        'Tejido conectivo de mamíferos',
                        'Sangre'
                    ],
                    correcta: 1,
                    explicacion: 'La quitina forma el exoesqueleto de artrópodos (insectos, crustáceos) y la pared celular de la mayoría de los hongos.'
                },
                {
                    id: 47,
                    pregunta: '¿Qué componente forma el "cemento" que une las células vegetales?',
                    opciones: [
                        'Celulosa',
                        'Hemicelulosa',
                        'Pectina',
                        'Lignina'
                    ],
                    correcta: 2,
                    explicacion: 'La pectina, un polímero de ácido galacturónico, actúa como cemento en la lámina media entre células vegetales.'
                },
                {
                    id: 48,
                    pregunta: '¿Qué propiedad de la pectina la hace útil en la industria alimentaria?',
                    opciones: [
                        'Es muy dulce',
                        'Forma geles en presencia de azúcar y ácido',
                        'Es colorante natural',
                        'Es antioxidante'
                    ],
                    correcta: 1,
                    explicacion: 'La pectina forma geles en presencia de azúcar y medio ácido, por eso se usa en mermeladas y jaleas.'
                },
                {
                    id: 49,
                    pregunta: '¿Cuál es el segundo polisacárido más abundante en la naturaleza?',
                    opciones: [
                        'Almidón',
                        'Glucógeno',
                        'Quitina',
                        'Hemicelulosa'
                    ],
                    correcta: 2,
                    explicacion: 'La quitina es el segundo polisacárido más abundante después de la celulosa.'
                },
                {
                    id: 50,
                    pregunta: '¿Qué tipo de fibra dietética es la celulosa?',
                    opciones: [
                        'Fibra soluble',
                        'Fibra insoluble',
                        'Fibra fermentable',
                        'Prebiótica'
                    ],
                    correcta: 1,
                    explicacion: 'La celulosa es fibra insoluble que aumenta el volumen fecal y acelera el tránsito intestinal.'
                }
            ]
        },
        {
            id: 6,
            titulo: 'Glucólisis y Producción de Energía',
            preguntas: [
                {
                    id: 51,
                    pregunta: '¿Dónde ocurre la glucólisis?',
                    opciones: [
                        'Mitocondria',
                        'Citoplasma',
                        'Núcleo',
                        'Retículo endoplásmico'
                    ],
                    correcta: 1,
                    explicacion: 'La glucólisis ocurre en el citoplasma celular y no requiere oxígeno (puede ser aeróbica o anaeróbica).'
                },
                {
                    id: 52,
                    pregunta: '¿Cuál es el balance neto de ATP en la glucólisis?',
                    opciones: [
                        '+1 ATP',
                        '+2 ATP',
                        '+4 ATP',
                        '+8 ATP'
                    ],
                    correcta: 1,
                    explicacion: 'La glucólisis genera 4 ATP pero consume 2 ATP, resultando en un balance neto de +2 ATP por glucosa.'
                },
                {
                    id: 53,
                    pregunta: '¿Cuál es el producto final de la glucólisis?',
                    opciones: [
                        'Acetil-CoA',
                        'Lactato',
                        'Piruvato',
                        'Citrato'
                    ],
                    correcta: 2,
                    explicacion: 'El producto final de la glucólisis es el piruvato (2 moléculas por cada glucosa).'
                },
                {
                    id: 54,
                    pregunta: '¿Cuál es la enzima del paso limitante de la glucólisis?',
                    opciones: [
                        'Hexoquinasa',
                        'Fosfofructoquinasa-1 (PFK-1)',
                        'Piruvato quinasa',
                        'Aldolasa'
                    ],
                    correcta: 1,
                    explicacion: 'La fosfofructoquinasa-1 (PFK-1) cataliza el paso limitante (más lento) que regula la velocidad de toda la glucólisis.'
                },
                {
                    id: 55,
                    pregunta: '¿Qué molécula ACTIVA a la PFK-1?',
                    opciones: [
                        'ATP',
                        'AMP',
                        'Citrato',
                        'Glucosa-6-P'
                    ],
                    correcta: 1,
                    explicacion: 'El AMP (indicador de bajo estado energético) activa la PFK-1 para aumentar la producción de ATP.'
                },
                {
                    id: 56,
                    pregunta: '¿Qué molécula INHIBE a la PFK-1?',
                    opciones: [
                        'ADP',
                        'AMP',
                        'ATP',
                        'NAD+'
                    ],
                    correcta: 2,
                    explicacion: 'El ATP (indicador de alto estado energético) inhibe la PFK-1 para frenar la glucólisis cuando hay energía suficiente.'
                },
                {
                    id: 57,
                    pregunta: 'En condiciones anaeróbicas (sin oxígeno), ¿qué produce el músculo a partir del piruvato?',
                    opciones: [
                        'Acetil-CoA',
                        'Lactato',
                        'Etanol',
                        'Glucosa'
                    ],
                    correcta: 1,
                    explicacion: 'En anaerobiosis, el músculo convierte piruvato en lactato (fermentación láctica) para regenerar NAD+ y continuar la glucólisis.'
                },
                {
                    id: 58,
                    pregunta: '¿Cuántas moléculas de NADH se producen en la glucólisis?',
                    opciones: [
                        '1 NADH',
                        '2 NADH',
                        '4 NADH',
                        '6 NADH'
                    ],
                    correcta: 1,
                    explicacion: 'La glucólisis produce 2 NADH por cada glucosa (uno por cada gliceraldehído-3-P oxidado).'
                },
                {
                    id: 59,
                    pregunta: 'En condiciones aeróbicas, ¿a dónde va el piruvato después de la glucólisis?',
                    opciones: [
                        'Se convierte en lactato',
                        'Entra a la mitocondria como Acetil-CoA',
                        'Se excreta',
                        'Vuelve a glucosa'
                    ],
                    correcta: 1,
                    explicacion: 'En aerobiosis, el piruvato entra a la mitocondria, se convierte en acetil-CoA y entra al ciclo de Krebs.'
                },
                {
                    id: 60,
                    pregunta: '¿Cuántos ATP totales genera la oxidación completa de 1 glucosa (glucólisis + Krebs + cadena respiratoria)?',
                    opciones: [
                        '2 ATP',
                        '8 ATP',
                        '24 ATP',
                        '30-32 ATP'
                    ],
                    correcta: 3,
                    explicacion: 'La oxidación completa de 1 glucosa genera aproximadamente 30-32 ATP (2 glucólisis + 28-30 fosforilación oxidativa).'
                }
            ]
        },
        {
            id: 7,
            titulo: 'Gluconeogénesis y Metabolismo del Glucógeno',
            preguntas: [
                {
                    id: 61,
                    pregunta: '¿Qué es la gluconeogénesis?',
                    opciones: [
                        'Degradación de glucosa',
                        'Síntesis de glucosa a partir de precursores no glucídicos',
                        'Síntesis de glucógeno',
                        'Degradación de glucógeno'
                    ],
                    correcta: 1,
                    explicacion: 'La gluconeogénesis es la síntesis de nueva glucosa a partir de precursores como lactato, aminoácidos y glicerol.'
                },
                {
                    id: 62,
                    pregunta: '¿Dónde ocurre principalmente la gluconeogénesis?',
                    opciones: [
                        'Músculo',
                        'Cerebro',
                        'Hígado (90%) y riñón (10%)',
                        'Páncreas'
                    ],
                    correcta: 2,
                    explicacion: 'La gluconeogénesis ocurre principalmente en el hígado (90%) y en menor medida en el riñón (10%).'
                },
                {
                    id: 63,
                    pregunta: '¿Cuándo se activa la gluconeogénesis?',
                    opciones: [
                        'Después de comer',
                        'Durante el sueño',
                        'En ayuno prolongado (> 8 horas)',
                        'Durante la digestión'
                    ],
                    correcta: 2,
                    explicacion: 'La gluconeogénesis se activa en ayuno prolongado (>8h), ejercicio intenso o dieta baja en carbohidratos.'
                },
                {
                    id: 64,
                    pregunta: '¿Qué hormona estimula la gluconeogénesis?',
                    opciones: [
                        'Insulina',
                        'Glucagón',
                        'Somatotropina',
                        'Tiroxina'
                    ],
                    correcta: 1,
                    explicacion: 'El glucagón (hormona del ayuno) estimula la gluconeogénesis para mantener la glucemia.'
                },
                {
                    id: 65,
                    pregunta: '¿Cuál es el costo energético de hacer glucosa a partir de 2 piruvatos?',
                    opciones: [
                        '2 ATP',
                        '4 ATP',
                        '6 ATP',
                        '8 ATP'
                    ],
                    correcta: 2,
                    explicacion: 'Sintetizar glucosa a partir de 2 piruvatos cuesta 6 ATP (más costoso que los 2 ATP que genera la glucólisis).'
                },
                {
                    id: 66,
                    pregunta: '¿Qué enzima es clave para la glucogenogénesis (síntesis de glucógeno)?',
                    opciones: [
                        'Glucógeno fosforilasa',
                        'Glucógeno sintasa',
                        'Hexoquinasa',
                        'Fosfoglucomutasa'
                    ],
                    correcta: 1,
                    explicacion: 'La glucógeno sintasa es la enzima clave que añade glucosas al glucógeno durante la glucogenogénesis.'
                },
                {
                    id: 67,
                    pregunta: '¿Qué molécula "activada" de glucosa se usa para sintetizar glucógeno?',
                    opciones: [
                        'Glucosa-6-fosfato',
                        'Glucosa-1-fosfato',
                        'UDP-Glucosa',
                        'ADP-Glucosa'
                    ],
                    correcta: 2,
                    explicacion: 'La UDP-Glucosa (glucosa activada unida a UDP) es el sustrato que la glucógeno sintasa usa para elongar el glucógeno.'
                },
                {
                    id: 68,
                    pregunta: '¿Qué enzima es clave para la glucogenólisis (degradación de glucógeno)?',
                    opciones: [
                        'Glucógeno sintasa',
                        'Glucógeno fosforilasa',
                        'Hexoquinasa',
                        'Amilasa'
                    ],
                    correcta: 1,
                    explicacion: 'La glucógeno fosforilasa rompe enlaces α(1→4) del glucógeno liberando glucosa-1-fosfato.'
                },
                {
                    id: 69,
                    pregunta: '¿Por qué el músculo NO puede liberar glucosa libre a la sangre?',
                    opciones: [
                        'No tiene glucógeno',
                        'No tiene glucosa-6-fosfatasa',
                        'Solo tiene lactato',
                        'Su membrana es impermeable'
                    ],
                    correcta: 1,
                    explicacion: 'El músculo carece de glucosa-6-fosfatasa, enzima necesaria para convertir glucosa-6-P en glucosa libre.'
                },
                {
                    id: 70,
                    pregunta: '¿Cuánto tiempo dura la reserva de glucógeno hepático en ayuno?',
                    opciones: [
                        '2-4 horas',
                        '8-12 horas',
                        '12-24 horas',
                        '2-3 días'
                    ],
                    correcta: 2,
                    explicacion: 'El glucógeno hepático (100-120g) se agota en 12-24 horas de ayuno, luego predomina la gluconeogénesis.'
                }
            ]
        },
        {
            id: 8,
            titulo: 'Vía de las Pentosas Fosfato y Otras Vías',
            preguntas: [
                {
                    id: 71,
                    pregunta: '¿Cuál es la función principal de la vía de las pentosas fosfato?',
                    opciones: [
                        'Producir ATP',
                        'Producir NADPH y ribosa-5-P',
                        'Degradar glucógeno',
                        'Sintetizar proteínas'
                    ],
                    correcta: 1,
                    explicacion: 'La vía de las pentosas fosfato produce NADPH (poder reductor) y ribosa-5-P (precursor de nucleótidos).'
                },
                {
                    id: 72,
                    pregunta: '¿Dónde ocurre la vía de las pentosas fosfato?',
                    opciones: [
                        'Mitocondria',
                        'Citoplasma',
                        'Núcleo',
                        'Peroxisoma'
                    ],
                    correcta: 1,
                    explicacion: 'La vía de las pentosas fosfato ocurre en el citoplasma, paralela a la glucólisis.'
                },
                {
                    id: 73,
                    pregunta: '¿Para qué se usa el NADPH producido en la vía de pentosas?',
                    opciones: [
                        'Producir ATP',
                        'Biosíntesis (ácidos grasos, colesterol) y defensa antioxidante',
                        'Degradar proteínas',
                        'Sintetizar glucógeno'
                    ],
                    correcta: 1,
                    explicacion: 'El NADPH se usa para biosíntesis de lípidos y como poder reductor en la defensa antioxidante (regenera glutatión).'
                },
                {
                    id: 74,
                    pregunta: '¿Para qué se usa la ribosa-5-P producida en la vía de pentosas?',
                    opciones: [
                        'Producir ATP',
                        'Síntesis de nucleótidos (ADN, ARN, ATP, NAD, FAD)',
                        'Síntesis de aminoácidos',
                        'Gluconeogénesis'
                    ],
                    correcta: 1,
                    explicacion: 'La ribosa-5-P es precursor esencial de nucleótidos, necesarios para ADN, ARN, ATP, NAD+, FAD, CoA.'
                },
                {
                    id: 75,
                    pregunta: '¿Qué enfermedad resulta de la deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD)?',
                    opciones: [
                        'Diabetes',
                        'Anemia hemolítica',
                        'Galactosemia',
                        'Intolerancia a la lactosa'
                    ],
                    correcta: 1,
                    explicacion: 'La deficiencia de G6PD causa menor producción de NADPH, haciendo a los eritrocitos vulnerables al estrés oxidativo (anemia hemolítica).'
                },
                {
                    id: 76,
                    pregunta: '¿Qué desencadena crisis hemolíticas en personas con deficiencia de G6PD?',
                    opciones: [
                        'Consumo de leche',
                        'Consumo de habas, ciertos medicamentos o infecciones',
                        'Ejercicio intenso',
                        'Ayuno prolongado'
                    ],
                    correcta: 1,
                    explicacion: 'El estrés oxidativo por habas (favismo), medicamentos antipalúdicos, sulfonamidas o infecciones desencadena hemólisis.'
                },
                {
                    id: 77,
                    pregunta: '¿En qué tejidos es más activa la vía de las pentosas fosfato?',
                    opciones: [
                        'Músculo esquelético',
                        'Hígado, tejido adiposo, glándulas mamarias, eritrocitos',
                        'Hueso',
                        'Pulmón'
                    ],
                    correcta: 1,
                    explicacion: 'Es muy activa en tejidos con alta biosíntesis de lípidos (hígado, adiposo, mama) y en eritrocitos (defensa antioxidante).'
                },
                {
                    id: 78,
                    pregunta: '¿Qué molécula se sintetiza a partir del exceso de acetil-CoA derivado de glucosa?',
                    opciones: [
                        'Glucosa',
                        'Aminoácidos',
                        'Ácidos grasos',
                        'Glucógeno'
                    ],
                    correcta: 2,
                    explicacion: 'El exceso de acetil-CoA (de glucosa) se usa para sintetizar ácidos grasos mediante lipogénesis.'
                },
                {
                    id: 79,
                    pregunta: '¿Qué intermediario de la glucólisis se usa para sintetizar serina?',
                    opciones: [
                        'Piruvato',
                        '3-Fosfoglicerato',
                        'Glucosa-6-P',
                        'Fructosa-1,6-BP'
                    ],
                    correcta: 1,
                    explicacion: 'El 3-fosfoglicerato (intermediario de glucólisis) es precursor de serina, glicina y cisteína.'
                },
                {
                    id: 80,
                    pregunta: '¿Cuántos gramos de glucosa consume el cerebro por día?',
                    opciones: [
                        '50 g',
                        '80 g',
                        '120 g',
                        '200 g'
                    ],
                    correcta: 2,
                    explicacion: 'El cerebro consume aproximadamente 120 g de glucosa al día (60% del consumo total corporal).'
                }
            ]
        },
        {
            id: 9,
            titulo: 'Funciones Biológicas y Glucoconjugados',
            preguntas: [
                {
                    id: 81,
                    pregunta: '¿Qué son las glucoproteínas?',
                    opciones: [
                        'Proteínas que transportan glucosa',
                        'Proteínas con cadenas de carbohidratos unidas',
                        'Enzimas que degradan glucosa',
                        'Receptores de insulina'
                    ],
                    correcta: 1,
                    explicacion: 'Las glucoproteínas son proteínas que tienen cadenas de oligosacáridos unidas covalentemente.'
                },
                {
                    id: 82,
                    pregunta: '¿Qué determinan los carbohidratos en los grupos sanguíneos ABO?',
                    opciones: [
                        'La forma de los eritrocitos',
                        'La identidad antigénica de la superficie celular',
                        'La cantidad de hemoglobina',
                        'El tamaño celular'
                    ],
                    correcta: 1,
                    explicacion: 'Los grupos sanguíneos se determinan por diferencias en los carbohidratos terminales de glucoproteínas en la membrana eritrocitaria.'
                },
                {
                    id: 83,
                    pregunta: '¿Qué monosacárido distingue al grupo sanguíneo A del O?',
                    opciones: [
                        'Galactosa',
                        'N-acetilgalactosamina',
                        'Glucosa',
                        'Fructuosa'
                    ],
                    correcta: 1,
                    explicacion: 'El tipo A tiene N-acetilgalactosamina añadida al antígeno H básico (tipo O).'
                },
                {
                    id: 84,
                    pregunta: '¿Qué componente forma parte del humor vítreo del ojo?',
                    opciones: [
                        'Colágeno',
                        'Ácido hialurónico',
                        'Queratina',
                        'Elastina'
                    ],
                    correcta: 1,
                    explicacion: 'El ácido hialurónico es un componente importante del humor vítreo del ojo y líquido sinovial de articulaciones.'
                },
                {
                    id: 85,
                    pregunta: '¿Qué glucosaminoglucano tiene propiedades anticoagulantes?',
                    opciones: [
                        'Ácido hialurónico',
                        'Condroitín sulfato',
                        'Heparina',
                        'Queratán sulfato'
                    ],
                    correcta: 2,
                    explicacion: 'La heparina es un anticoagulante natural que inhibe la cascada de coagulación. Se usa clínicamente en cirugías.'
                },
                {
                    id: 86,
                    pregunta: '¿Qué componente da transparencia a la córnea?',
                    opciones: [
                        'Colágeno',
                        'Ácido hialurónico',
                        'Queratán sulfato',
                        'Condroitín sulfato'
                    ],
                    correcta: 2,
                    explicacion: 'El queratán sulfato es un componente clave de la córnea que contribuye a su transparencia.'
                },
                {
                    id: 87,
                    pregunta: '¿Dónde se encuentra el condroitín sulfato?',
                    opciones: [
                        'Sangre',
                        'Cartílago',
                        'Cerebro',
                        'Hígado'
                    ],
                    correcta: 1,
                    explicacion: 'El condroitín sulfato es un componente importante del cartílago que le da resistencia a la compresión.'
                },
                {
                    id: 88,
                    pregunta: '¿Cuál es la función del glucocálix celular?',
                    opciones: [
                        'Producir ATP',
                        'Reconocimiento célula-célula y protección',
                        'Síntesis de proteínas',
                        'Almacenar lípidos'
                    ],
                    correcta: 1,
                    explicacion: 'El glucocálix (capa de carbohidratos en superficie celular) participa en reconocimiento celular, adhesión y protección.'
                },
                {
                    id: 89,
                    pregunta: '¿Qué modifica la O-GlcNAc en proteínas?',
                    opciones: [
                        'El color',
                        'La actividad, localización y estabilidad',
                        'El tamaño',
                        'La carga eléctrica'
                    ],
                    correcta: 1,
                    explicacion: 'La O-GlcNAc (N-acetilglucosamina unida a proteínas) regula la actividad, localización y estabilidad de proteínas nucleares y citoplásmicas.'
                },
                {
                    id: 90,
                    pregunta: '¿Qué tipo de fibra reduce el colesterol LDL?',
                    opciones: [
                        'Fibra insoluble',
                        'Fibra soluble',
                        'Ambas por igual',
                        'Ninguna'
                    ],
                    correcta: 1,
                    explicacion: 'La fibra soluble (pectina, β-glucanos, inulina) reduce el colesterol LDL al unirse a ácidos biliares en el intestino.'
                }
            ]
        },
        {
            id: 10,
            titulo: 'Patologías y Aplicaciones Clínicas',
            preguntas: [
                {
                    id: 91,
                    pregunta: '¿Qué caracteriza a la diabetes mellitus tipo 1?',
                    opciones: [
                        'Resistencia a insulina',
                        'Destrucción autoinmune de células β pancreáticas',
                        'Obesidad',
                        'Deficiencia de glucagón'
                    ],
                    correcta: 1,
                    explicacion: 'La diabetes tipo 1 se caracteriza por destrucción autoinmune de células β pancreáticas, causando deficiencia absoluta de insulina.'
                },
                {
                    id: 92,
                    pregunta: '¿Qué valor de glucosa en ayunas indica diabetes?',
                    opciones: [
                        '≥ 100 mg/dL',
                        '≥ 110 mg/dL',
                        '≥ 126 mg/dL',
                        '≥ 150 mg/dL'
                    ],
                    correcta: 2,
                    explicacion: 'Glucemia en ayunas ≥ 126 mg/dL en dos ocasiones es diagnóstico de diabetes mellitus.'
                },
                {
                    id: 93,
                    pregunta: '¿Qué es la galactosemia?',
                    opciones: [
                        'Intolerancia a la lactosa',
                        'Deficiencia enzimática en la conversión de galactosa a glucosa',
                        'Alergia a la leche',
                        'Exceso de galactosa en dieta'
                    ],
                    correcta: 1,
                    explicacion: 'La galactosemia es una enfermedad genética donde falta una enzima de la vía de Leloir, causando acumulación tóxica de galactosa.'
                },
                {
                    id: 94,
                    pregunta: '¿Qué complicación NO es típica de la galactosemia no tratada?',
                    opciones: [
                        'Cataratas',
                        'Daño hepático',
                        'Retraso mental',
                        'Anemia'
                    ],
                    correcta: 3,
                    explicacion: 'La galactosemia causa cataratas, daño hepático y retraso mental, pero no es característica la anemia.'
                },
                {
                    id: 95,
                    pregunta: '¿Qué es la glucogenosis tipo I (enfermedad de Von Gierke)?',
                    opciones: [
                        'Exceso de glucógeno',
                        'Deficiencia de glucosa-6-fosfatasa',
                        'Deficiencia de insulina',
                        'Exceso de glucagón'
                    ],
                    correcta: 1,
                    explicacion: 'La enfermedad de Von Gierke se debe a deficiencia de glucosa-6-fosfatasa, impidiendo la liberación de glucosa del hígado.'
                },
                {
                    id: 96,
                    pregunta: '¿Qué caracteriza a la glucogenosis tipo V (enfermedad de McArdle)?',
                    opciones: [
                        'Hipoglucemia',
                        'Calambres musculares y debilidad con ejercicio',
                        'Daño hepático',
                        'Diabetes'
                    ],
                    correcta: 1,
                    explicacion: 'La enfermedad de McArdle (deficiencia de fosforilasa muscular) causa calambres y debilidad porque el músculo no puede degradar su glucógeno.'
                },
                {
                    id: 97,
                    pregunta: '¿Cuál es la prevalencia mundial de intolerancia a la lactosa en adultos?',
                    opciones: [
                        '10-20%',
                        '30-40%',
                        '65-70%',
                        '90-95%'
                    ],
                    correcta: 2,
                    explicacion: 'Aproximadamente 65-70% de la población mundial adulta tiene algún grado de intolerancia a la lactosa.'
                },
                {
                    id: 98,
                    pregunta: '¿Qué prueba se usa para diagnosticar intolerancia a la lactosa?',
                    opciones: [
                        'Prueba de glucemia',
                        'Prueba de aliento con hidrógeno',
                        'Biopsia hepática',
                        'Hemograma'
                    ],
                    correcta: 1,
                    explicacion: 'La prueba de aliento con hidrógeno detecta el hidrógeno producido por fermentación bacteriana de lactosa no digerida.'
                },
                {
                    id: 99,
                    pregunta: '¿Qué valor de HbA1c indica buen control glucémico en diabetes?',
                    opciones: [
                        '< 5%',
                        '< 7%',
                        '< 10%',
                        '< 15%'
                    ],
                    correcta: 1,
                    explicacion: 'HbA1c < 7% indica buen control glucémico en diabetes. Refleja el promedio de glucosa en los últimos 2-3 meses.'
                },
                {
                    id: 100,
                    pregunta: '¿Cuál es la ingesta diaria recomendada de fibra dietética?',
                    opciones: [
                        '5-10 gramos',
                        '15-20 gramos',
                        '25-30 gramos',
                        '40-50 gramos'
                    ],
                    correcta: 2,
                    explicacion: 'Se recomienda consumir 25-30 gramos de fibra dietética al día para mantener la salud digestiva y cardiovascular.'
                }
            ]
        }
    ]
};

// Registrar evaluación globalmente
if (typeof window !== 'undefined') {
    window.EVALUACION_CARBOHIDRATOS = EVALUACION_CARBOHIDRATOS;
}
