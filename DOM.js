// alert("hola esto es una alerta")
// prompt("Escribe tu nombre")
// window


// const tituloPrincipal = document.getElementsByTagName('h1')
const tituloPrincipal = document.querySelector('H1')
// const parrafo1 = document.getElementsByClassName("parrafo1")
const parrafo1 = document.querySelector(".parrafo1")
// const parrafo2 = document.getElementById("parrafo2")
const parrafo2 = document.querySelector("#parrafo2")
const parrafos = document.querySelectorAll(".parrafo")

console.log(tituloPrincipal.textContent);
console.log(parrafo2);
console.log(parrafo1.attributes);

tituloPrincipal.textContent = "Cambiado desde JS"

// tituloPrincipal.style.fontSize = "50px"
// tituloPrincipal.style.color = "red"
console.log(tituloPrincipal.classList);
tituloPrincipal.classList.add("desdejs")
console.log(tituloPrincipal.classList);

console.log(tituloPrincipal.textContent);

