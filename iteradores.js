const frutas = ["Manzana", "Pera", "Naranja", "Sandia", "Coco"];

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);

// for
// 0 < 5
for(let i = 0; i < frutas.length ; i++) {
  console.log(frutas[i]);
}

// while 
let j = 0;
while(j < frutas.length) {
  console.log(frutas[j]);
  j++;
}

// do while
let k = -2;
do {
  console.log("hola", k);
  k++;
}while(k < 5 && k >= 0)