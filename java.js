const boton = document.getElementById('cambiar-tema');
const cuerpo = document.body;
const gif = document.getElementById('imagen-gif');

let temaOscuro = false;

boton.addEventListener('click', () => {
  temaOscuro = !temaOscuro; // cambia el valor a lo contrario

  if (temaOscuro) {
    cuerpo.classList.add('oscuro');
    gif.src = 'https://i.redd.it/pelvp0novfie1.gif'; // cambia al gif oscuro
  } else {
    cuerpo.classList.remove('oscuro');
    gif.src = 'https://i.redd.it/pelvp0novfie1.gif'; // vuelve al gif claro
  }
});


