
const malla = [
    [ // Semestre 1
        { nombre: "Introducción al Periodismo", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Expresión Escrita", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Guión y lenguaje audiovisual", sct: 8, tipo: "taller", prerrequisitos: [] },
        { nombre: "Historia chilena contemporánea", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Lógica y pensamiento crítico", sct: 8, tipo: "teorico", prerrequisitos: [] }
    ],
    [ // Semestre 2
        { nombre: "Técnicas de reporteo", sct: 10, tipo: "taller", prerrequisitos: ["Introducción al Periodismo"] },
        { nombre: "Narrativa digital periodística", sct: 8, tipo: "taller", prerrequisitos: [] },
        { nombre: "Comunicación, medios e identidad", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Estado, instituciones y sociedad civil", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Teoría política", sct: 8, tipo: "teorico", prerrequisitos: [] }
    ],
    [ // Semestre 3
        { nombre: "Taller de noticias", sct: 10, tipo: "taller", prerrequisitos: ["Técnicas de reporteo", "Expresión Escrita"] },
        { nombre: "Narrativa de no ficción", sct: 8, tipo: "taller", prerrequisitos: ["Expresión Escrita"] },
        { nombre: "Taller de herramientas audiovisuales", sct: 8, tipo: "taller", prerrequisitos: ["Guión y lenguaje audiovisual"] },
        { nombre: "Teoría de la comunicación", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Fundamentos de la economía", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Inglés I", sct: 10, tipo: "ingles", prerrequisitos: [] }
    ],
    [ // Semestre 4
        { nombre: "Taller de Crónicas y entrevistas", sct: 10, tipo: "taller", prerrequisitos: ["Narrativa de no ficción", "Taller de noticias"] },
        { nombre: "Taller Audiovisual: Informativo I", sct: 10, tipo: "taller", prerrequisitos: ["Taller de herramientas audiovisuales"] },
        { nombre: "Tecnología y sociedad", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Sistema internacional y globalización", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Inglés II", sct: 10, tipo: "ingles", prerrequisitos: ["Inglés I"] }
    ],
    [ // Semestre 5
        { nombre: "Taller de Reportajes y perfiles", sct: 10, tipo: "taller", prerrequisitos: ["Taller de Crónicas y entrevistas"] },
        { nombre: "Visualización y arquitectura de la información", sct: 5, tipo: "taller", prerrequisitos: ["Narrativa digital periodística"] },
        { nombre: "Taller Audiovisual: Informativo II", sct: 10, tipo: "taller", prerrequisitos: ["Taller Audiovisual: Informativo I"] },
        { nombre: "Audiencias de industria de medios", sct: 8, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Derecho de la información", sct: 8, tipo: "teorico", prerrequisitos: ["Introducción al Periodismo"] },
        { nombre: "Formación Complementaria I", sct: 10, tipo: "complementario", prerrequisitos: [] }
    ],
    [ // Semestre 6
        { nombre: "Periodismo Radial", sct: 10, tipo: "taller", prerrequisitos: ["Taller de herramientas audiovisuales"] },
        { nombre: "Periodismo y análisis de datos", sct: 8, tipo: "taller", prerrequisitos: ["Visualización y arquitectura de la información"] },
        { nombre: "Taller de reportaje audiovisual", sct: 8, tipo: "taller", prerrequisitos: ["Taller Audiovisual: Informativo II"] },
        { nombre: "Comunicación política y opinión pública", sct: 5, tipo: "teorico", prerrequisitos: [] },
        { nombre: "Derechos Digitales", sct: 8, tipo: "teorico", prerrequisitos: ["Derecho de la información"] },
        { nombre: "Formación Complementaria II", sct: 10, tipo: "complementario", prerrequisitos: [] }
    ],
    [ // Semestre 7
        { nombre: "Periodismo de investigación", sct: 10, tipo: "taller", prerrequisitos: ["Periodismo y análisis de datos"] },
        { nombre: "Producción y realización sonora", sct: 8, tipo: "taller", prerrequisitos: ["Periodismo Radial"] },
        { nombre: "Taller de medios multimedia", sct: 10, tipo: "taller", prerrequisitos: ["Taller de Crónicas y entrevistas", "Taller Audiovisual: Informativo II", "Periodismo Radial"] },
        { nombre: "Metodología de la investigación social", sct: 8, tipo: "teorico", prerrequisitos: ["Comunicación, medios e identidad", "Teoría de la comunicación", "Tecnología y sociedad"] },
        { nombre: "Ética periodística", sct: 8, tipo: "teorico", prerrequisitos: ["Derecho de la información"] },
        { nombre: "Formación complementaria III", sct: 10, tipo: "complementario", prerrequisitos: [] }
    ],
    [ // Semestre 8
        { nombre: "Seminario de Titulación", sct: 10, tipo: "titulo", prerrequisitos: ["Taller de Reportajes y perfiles", "Visualización y arquitectura de la información", "Taller Audiovisual: Informativo II", "Audiencias de industria de medios", "Derecho de la información", "Formación Complementaria I", "Periodismo Radial", "Periodismo y análisis de datos", "Taller de reportaje audiovisual", "Comunicación política y opinión pública", "Derechos Digitales", "Formación Complementaria II", "Periodismo de investigación", "Producción y realización sonora", "Taller de medios multimedia", "Metodología de la investigación social", "Ética periodística", "Formación complementaria III"] },
        { nombre: "Comunidades digitales", sct: 8, tipo: "teorico", prerrequisitos: ["Narrativa digital periodística", "Tecnología y sociedad", "Audiencias de industria de medios"] },
        { nombre: "Seminario de investigación en comunicación", sct: 10, tipo: "teorico", prerrequisitos: ["Metodología de la investigación social"] },
        { nombre: "Gestión en comunicaciones I", sct: 8, tipo: "teorico", prerrequisitos: ["Comunicación, medios e identidad", "Teoría de la comunicación", "Audiencias de industria de medios"] },
        { nombre: "Formación complementaria IV", sct: 10, tipo: "complementario", prerrequisitos: [] }
    ],
    [ // Semestre 9
        { nombre: "Práctica Profesional", sct: 30, tipo: "titulo", prerrequisitos: ["Seminario de Titulación"] },
        { nombre: "Proyecto de título", sct: 20, tipo: "titulo", prerrequisitos: ["Seminario de Titulación"] },
        { nombre: "Taller de emprendimientos periodísticos", sct: 8, tipo: "taller", prerrequisitos: ["Taller de medios multimedia"] },
        { nombre: "Gestión en comunicaciones II", sct: 8, tipo: "teorico", prerrequisitos: ["Gestión en comunicaciones I"] },
        { nombre: "Formación complementaria V", sct: 10, tipo: "complementario", prerrequisitos: [] }
    ]
];
