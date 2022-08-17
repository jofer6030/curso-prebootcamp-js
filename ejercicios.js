// ((P-1)! + 1) / (P * P)
function amIWilson(p) {
  const newP = p-1
  let factorial = 1;

  for(let i = newP; i <= newP && i > 0 ; i--) {
    factorial = factorial * i
  }

  const result = (factorial + 1) / ( p * p )
  const resultToString = result.toString()
  const tienePunto = resultToString.includes('.')
  return !tienePunto;
}
console.log(amIWilson(5))
console.log(amIWilson(9))
console.log(amIWilson(6))
console.log(amIWilson(13))

function countPositivesSumNegatives(input) {
  if(!input || !input.length) {
    return []
  };
  // if(input===null || input.length===0) return [];
  const numerosPositivos = [], numerosNegativos = []

  input.forEach((elemento) => {
    if(elemento > 0) {
      numerosPositivos.push(elemento)
    } else {
      numerosNegativos.push(elemento)
    }
  })
  const cantNumPos = numerosPositivos.length; 
  let sumNumNeg = 0;

  numerosNegativos.forEach((elemento) => {
    sumNumNeg = sumNumNeg + elemento
  })
  
  return [cantNumPos,sumNumNeg]
}

// function a(input) {
//   return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// console.log(countPositivesSumNegatives([1,2,3,-1,-2,-3]))
// console.log(countPositivesSumNegatives(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
// console.log(countPositivesSumNegatives(
//   [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
// console.log(countPositivesSumNegatives([1,-2]))
// console.log(a([1,-2]))
// console.log(countPositivesSumNegatives())

function arrAdder(arr) {
  const arrString = [];
  arr.forEach((_, index) => {
    for(let i = 0; i< arr.length ; i++) {
      if(arr[i][index]) {
        arrString.push(arr[i][index]);
      }
    }
    arrString.push(" ")
  })
  return arrString.join("").trim();
}


console.log(
  arrAdder([
      ['J','L','L','M'],
      ['u','i','i','a'],
      ['s','v','f','n'],
      ['t','e','e','']
  ])
);

console.log(
  arrAdder([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ])
);

console.log(
  arrAdder([ 
    [ 'H', 's', 'J' ],
    [ 'o', 'o', 'o'  ],
    [ 'l', 'y', 's' ],
    [ 'a', '', 'é'],])
);

function findNextPower(val, pow_) {
  const result =  Math.floor(Math.pow(val, 1/pow_) + 1)**pow_;
  return result === val ? Math.floor(Math.pow(val, 1/pow_) + 2)**pow_ : result;
}


console.log(findNextPower(27,3));
console.log(findNextPower(4782969,7));

// const sortByArea = (array) => array.map((element,indice) => typeof element === "object" 
//     ?{area:element[0] * element[1],index:indice}
//     :{area:3.14 * (element**2),index:indice}
//   ).sort((a,b) => a.area - b.area).map(element => array[element.index])
function sortByArea(array) {
  const arrayNew = [];
  array.forEach((element,indice) => {
    if(typeof element === "object") {
      arrayNew.push({
        area:element[0] * element[1],
        index:indice
      })
    }else {
      arrayNew.push({
        area:3.14 * (element**2),
        index:indice
      })
    }
  })
  const arrayFinal = arrayNew.sort((a,b) => a.area - b.area);
  const arrayOrdenado =  arrayFinal.map(element => {
    return array[element.index]
  })

  return arrayOrdenado
}
// console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));