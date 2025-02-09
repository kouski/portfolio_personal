document.addEventListener("DOMContentLoaded", function () {
    const contenedorProyectos = document.getElementById("contenedor-proyectos");
    const botonesFiltro = document.querySelectorAll(".filtro-btn");
  
    // 🔹 Función para renderizar los proyectos dinámicamente
    function renderizarProyectos(filtro = "todos") {
      contenedorProyectos.innerHTML = ""; // Limpiar contenedor antes de renderizar
  
      proyectos.forEach((proyecto) => {
        if (filtro === "todos" || proyecto.categoria === filtro) {
          const proyectoHTML = `
            <div class="col proyecto" data-categoria="${proyecto.categoria}">
              <article class="card h-100">
                <a href="${proyecto.enlace}" target="_blank" class="link-proyecto">
                  <img src="${proyecto.imagen}" class="card-img-top img-fluid" alt="${proyecto.titulo}">
                  <div class="card-body">
                    <h3 class="card-title fs-4">${proyecto.titulo}</h3>
                    <p class="card-text lead">${proyecto.descripcion}</p>
                  </div>
                </a>
              </article>
            </div>`;
          contenedorProyectos.innerHTML += proyectoHTML;
        }
      });
    }
  
    // 🔹 Evento para los botones de filtro
    botonesFiltro.forEach((boton) => {
      boton.addEventListener("click", function () {
        const filtro = this.getAttribute("data-filtro");
        renderizarProyectos(filtro);
  
        // Cambiar estilos de los botones
        botonesFiltro.forEach((b) => b.classList.remove("btn-primary"));
        this.classList.add("btn-primary");
      });
    });
  
    // 🔹 Renderizar todos los proyectos al cargar la página
    renderizarProyectos();
  });