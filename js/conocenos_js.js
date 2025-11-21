document.addEventListener('DOMContentLoaded', () => {
    fetch('banner_plantilla.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
  
  
        const iconMenu = document.getElementById('icon_menu');
        const menu = document.getElementById('menu_desplegable');
  
        if (iconMenu && menu) {
          iconMenu.addEventListener('click', () => {
            const isVisible = getComputedStyle(menu).display === 'block';
            menu.style.display = isVisible ? 'none' : 'block';
          });
        }
      });
  
    fetch('footer_plantilla.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
      });
  });

const sections = document.querySelectorAll("#contenedor section");
const textos = document.querySelectorAll("#contenedorTexto p");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        const target = section.getAttribute("data-target");

        textos.forEach(texto => {
            texto.style.display = (texto.id === target) ? "block" : "none";
        });
    });
});

document.getElementById("contenedor").addEventListener("mouseleave", () => {
    textos.forEach(texto => texto.style.display = "none");
});

sections.forEach(section => {
  const handler = () => {
      const target = section.getAttribute("data-target");

      textos.forEach(texto => {
          texto.style.display = (texto.id === target) ? "block" : "none";
      });
  };

  section.addEventListener("mouseenter", handler);
  section.addEventListener("click", handler); 
});