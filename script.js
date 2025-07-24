
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla");

    malla.forEach((sem, i) => {
        const semDiv = document.createElement("div");
        semDiv.className = "semestre";
        const h3 = document.createElement("h3");
        h3.textContent = `Semestre ${i + 1}`;
        semDiv.appendChild(h3);

        sem.forEach(curso => {
            const div = document.createElement("div");
            div.className = `curso ${curso.tipo}`;
            div.textContent = `${curso.nombre} (${curso.sct} SCT)`;

            div.addEventListener("click", () => {
                div.classList.toggle("cursado");
            });

            semDiv.appendChild(div);
        });

        container.appendChild(semDiv);
    });
});
