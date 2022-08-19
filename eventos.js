const titulo = document.querySelector("H1");
// Evento click
titulo.addEventListener('click', eventoRealizado)

// Evento doble - click
// titulo.addEventListener('dblclick', eventoRealizado)

// Mouse encima (hover)
// titulo.addEventListener('mouseover', eventoRealizado)

// Mouse deja el element (contrario de hover)
// titulo.addEventListener('mouseleave', eventoRealizado2)


// function cambiarColor (e) {
//   titulo.style.color = "green"
//   titulo.textContent = "CLICK DESDE JS"
// }

function eventoRealizado(e) {
  console.log(e.target.textContent)
  if(e.target.textContent = "Javascript") {
    titulo.textContent = "React Js"
  }
  titulo.style.color = "green"
}

function eventoRealizado2(e) {
  titulo.style.color = "red"
}


