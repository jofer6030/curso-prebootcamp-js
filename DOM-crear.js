const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p")
const parrafoSpan = document.createElement("span")

// Añadiendo clase
// parrafo.className=""
parrafo.classList.add('parrafojs')

// parrafo.classList.remove('parrafojs')

// Añadiendo id
parrafo.id = "parrafoIdjs"

// Añadiendo contenido
parrafo.textContent = "Párrafo creado desde JS"

parrafoSpan.textContent = " esto es un span desde JS"

parrafo.appendChild(parrafoSpan)

contenedor.appendChild(parrafo)