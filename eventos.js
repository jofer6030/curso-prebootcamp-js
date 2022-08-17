// Evento click
const titulo = document.querySelector("H1");

titulo.addEventListener('click', cambiarColor)

function cambiarColor (e) {
  titulo.style.color = "green"
  titulo.textContent = "CLICK DESDE JS"
}

// const cambiarColor = (e) => {
//   titulo.style.color = "green"
// }

