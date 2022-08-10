const frutas = ["Manzana", "Pera", "Naranja", "Sandia", "Coco", "Mango"];

// frutas.forEach(imprimirFrutas)

// function imprimirFrutas(fruta, indice){
//   console.log(fruta, indice);
// }



const frutasEndsWithA2 = frutas.map((fruta,indice) => {
  if(fruta.endsWith("a")) {
    return fruta +"2";
  }
  return fruta;
})
console.log(frutasEndsWithA2);

const frutasEndsWithA = [];

frutas.forEach((fruta,indice) => {
  if(fruta.endsWith("a")) {
    frutasEndsWithA.push(fruta);
  }
})
console.log(frutasEndsWithA);

const frutasEndsWithA3 = frutas.filter((fruta,indice) => {
  if(fruta.endsWith("a")) {
    return fruta
  }
})
console.log(frutasEndsWithA3);

const findFruta = frutas.find((fruta,indice)=> fruta.startsWith("M"));
const ordenarFrutas = frutas.sort()

console.log(ordenarFrutas);
console.log(findFruta);

const numeros = [45,1,2,99,3,4,23,6,43,17,9,10,86];
const arrOrdenado = [];

numeros.forEach(() => {
  let numeroMayor = 0;
  numeros.forEach((item1) => {
    if(item1 > numeroMayor) {
      numeroMayor = item1;
    }
  })
  arrOrdenado.unshift(numeroMayor)
  numeros[numeros.indexOf(numeroMayor)] = 0;
})
console.log(arrOrdenado)



