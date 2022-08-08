const frutas = ["Manzana", "Pera", "Naranja", "Sandia", "Coco"];

// frutas.forEach(imprimirFrutas)

// function imprimirFrutas(fruta, indice){
//   console.log(fruta, indice);
// }
const frutasEndsWithA = [];

console.log(frutasEndsWithA);
frutas.forEach((fruta,indice) => {
  if(fruta.endsWith("a")) {
    frutasEndsWithA.push(fruta);
  }
})
console.log(frutasEndsWithA);


const frutasEndsWithA2 = frutas.map((fruta,indice) => {
  if(fruta.endsWith("a")) {
    return fruta + "2";
  }
  return fruta;
})
console.log(frutasEndsWithA2);

