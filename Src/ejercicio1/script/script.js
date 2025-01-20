// 1- Crea una web con bootstrap y js,
// que contenga un botón comenzar el juego,
// en ese momento se crea un número aleatorio que el usuario deberá adivinar,
// la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar
//  un mensaje indicando al usuario que adivino el numero.

const buttonComenzar = document.getElementById("btn_comenzar");
const buttonVerificar = document.getElementById("btn_verificar");
const panel = document.getElementById("panel_juego");
const input = document.getElementById("nroIngresado");
let numeroMagico = 0;

// Usamos addEventListener directamente sobre el botón
buttonComenzar.addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 100 + 1);
  panel.classList.remove("d-none");
  console.log(numeroMagico);
  buttonComenzar.disabled = true;
  
});

buttonVerificar.addEventListener("click", () => {
  let numeroIngresado = parseInt(input.value);

  if (isNaN(numeroIngresado)) {
    alert("Debes ingresar un número.");
    return;
  }
 
  if (numeroIngresado > numeroMagico) {
    alert(
      `El número ingresado es mayor al número mágico.`
    );
    
  } else if (numeroIngresado < numeroMagico) {
    alert(
      `El número ingresado es menor al número mágico.`
    );
  } else {
    alert(
      `El número ingresado es el número mágico! Felicidades, has adivinado.`
    );
    numeroMagico = 0
    buttonComenzar.disabled = false;
    panel.classList.add("d-none");
  }

  // Limpia el campo de entrada en cada intento
  input.value = "";
});
