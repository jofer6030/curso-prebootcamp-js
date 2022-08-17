const navegacion = document.getElementById("navegacion")

console.log(navegacion);

console.log(navegacion.childNodes);

console.log(navegacion.childNodes[1].childNodes);

console.log(navegacion.children);

console.log(navegacion.children[0].children);

console.log(navegacion.nodeName);
console.log(navegacion.nodeType);
console.log(navegacion.nodeValue);


const lista = document.getElementById("lista")
// console.log(lista.children[0])
// primer elemento hijo
console.log(lista.firstElementChild);
// ultimo elemento hijo
console.log(lista.lastElementChild);
// total de elementos hijos
console.log(lista.childElementCount);

const item2 = document.querySelector(".item2")

// Seleccionando elementos hijos a elementos padres
console.log(item2.parentNode);
console.log(item2.parentElement);

// Seleccionando elementos hermanos
console.log(item2.parentElement.children[0]);
console.log(item2.previousElementSibling);
console.log(item2.nextElementSibling);

