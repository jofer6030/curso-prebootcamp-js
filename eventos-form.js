const inputUsuario = document.getElementById("input-usuario")
const inputPaswword = document.getElementById("input-password")
const btnMostrarPass = document.getElementById("btn-mostrar-password")

inputUsuario.addEventListener("focus",eventoInput)

inputUsuario.addEventListener("blur",eventoInput2)

function eventoInput(e) {
  // console.log("evento focus")
}

function eventoInput2(e) {
  // console.log("evento blur")
}

// inputUsuario.addEventListener("keydown",presionarTecla)
// inputUsuario.addEventListener("keypress",presionarTecla)
// inputUsuario.addEventListener("change",presionarTecla)
// inputUsuario.addEventListener("input",presionarTecla)

function presionarTecla(e) {
  console.log("Escribiendo...")
  console.log(e.target.value)
}

const formulario = document.getElementById("form")

formulario.addEventListener("submit",enviarDatos)

function enviarDatos(e) {
  e.preventDefault();
  console.log("Enviando...");
}

btnMostrarPass.addEventListener("click",(e) => {
  inputPaswword.type = "text"
})