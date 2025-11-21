document.addEventListener('DOMContentLoaded', () => {
  fetch('banner_plantilla.html')
    .then(res => res.text())
    .then(html => {
      const header = document.getElementById('header-placeholder');
      if (header) header.innerHTML = html;
    })
    .catch(err => console.error('Error cargando banner:', err));

  fetch('footer_plantilla.html')
    .then(res => res.text())
    .then(html => {
      const footer = document.getElementById('footer-placeholder');
      if (footer) footer.innerHTML = html;
    })
    .catch(err => console.error('Error cargando footer:', err));
});