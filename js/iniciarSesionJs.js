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