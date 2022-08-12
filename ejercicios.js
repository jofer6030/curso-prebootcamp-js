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
