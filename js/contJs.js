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


window.addEventListener('DOMContentLoaded', function (evento) {
  console.log('Paxina cargada')
  const cuota = this.document.querySelector('.icon');
  cuota.addEventListener('click', function (event) {
      var respostaCuota = document.querySelector('.insider');

      if (respostaCuota.style.display == "block") {
          respostaCuota.style.display = "none"
          cuota.textContent = "+";
      } else {
          respostaCuota.style.display = "block";
          cuota.textContent = "-";
      }
  })
});

window.addEventListener('DOMContentLoaded', function (evento) {
  console.log('Paxina cargada')
  const cuota1 = this.document.querySelector('.icon1');
  cuota1.addEventListener('click', function (event) {
      var respostaCuota1 = document.querySelector('.insider1');

      if (respostaCuota1.style.display == "block") {
          respostaCuota1.style.display = "none"
          cuota1.textContent = "+";
      } else {
          respostaCuota1.style.display = "block";
          cuota1.textContent = "-";
      }
  })
});

window.addEventListener('DOMContentLoaded', function (evento) {
  console.log('Paxina cargada')
  const cuota2 = this.document.querySelector('.icon2');
  cuota2.addEventListener('click', function (event) {
      var respostaCuota2 = document.querySelector('.insider2');

      if (respostaCuota2.style.display == "block") {
          respostaCuota2.style.display = "none"
          cuota2.textContent = "+";
      } else {
          respostaCuota2.style.display = "block";
          cuota2.textContent = "-";
      }
  })
});

window.addEventListener('DOMContentLoaded', function (evento) {
  console.log('Paxina cargada')
  const cuota3 = this.document.querySelector('.icon3');
  cuota3.addEventListener('click', function (event) {
      var respostaCuota3 = document.querySelector('.insider3');

      if (respostaCuota3.style.display == "block") {
          respostaCuota3.style.display = "none"
          cuota3.textContent = "+";
      } else {
          respostaCuota3.style.display = "block";
          cuota3.textContent = "-";
      }
  })
});

