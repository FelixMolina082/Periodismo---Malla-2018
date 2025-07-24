document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla");
    const estadoCursos = {};

    function renderMalla() {
        container.innerHTML = "";

        malla.forEach((sem, i) => {
            const semDiv = document.createElement("div");
            semDiv.className = "semestre";
            const h3 = document.createElement("h3");
            h3.textContent = `Semestre ${i + 1}`;
            semDiv.appendChild(h3);

            sem.forEach(curso => {
                const div = document.createElement("div");
                div.className = "curso";
                div.textContent = `${curso.nombre} (${curso.sct} SCT)`;

                const id = curso.nombre;

                // Estado inicial
                if (!(id in estadoCursos)) {
                    estadoCursos[id] = {
                        cursado: false,
                        desbloqueado: i === 0
                    };
                }

                const estado = estadoCursos[id];

                if (estado.cursado) {
                    div.style.backgroundColor = "#61ABED"; // Aprobado
                } else if (estado.desbloqueado) {
                    div.style.backgroundColor = "#71DED0"; // Desbloqueado
                } else {
                    div.style.backgroundColor = "#CCCCCC"; // Bloqueado
                }

                div.addEventListener("click", () => {
                    if (!estado.desbloqueado) return;

                    estado.cursado = !estado.cursado;
                    actualizarDesbloqueos();
                    renderMalla();
                });

                semDiv.appendChild(div);
            });

            container.appendChild(semDiv);
        });
    }

    function actualizarDesbloqueos() {
        malla.flat().forEach(curso => {
            const estado = estadoCursos[curso.nombre];
            if (estado.cursado) return;

            const prereq = curso.prerrequisitos || [];
            const cumplidos = prereq.every(p => estadoCursos[p]?.cursado);
            estado.desbloqueado = cumplidos;
        });
    }

    renderMalla();
});
