// Estructuras -- if else elseif switch
const edad = 20;

if( edad >= 18 ) {
  console.log("La persona es mayor de edad");
} else {
  console.log("La persona es menor de edad");
}

// SCOPED
const nombre = "Raul";

// logicos --> && || !
// false || false --> false
if( nombre === "Juan" || nombre === "Jose" ) {
  console.log("El nombre es Juan o Jose");
}else {
  console.log("El nombre no es Juan o Jose");
}

const n1 = 40;

if(n1 === 10) {
  console.log("n1 es igual a 10");
} else if(n1 === 20) {
  console.log("n1 es igual a 20");
} else if(n1 === 30) {
  console.log("n1 es igual a 30");
} else {
  console.log("n1 no es igual a 10, 20 o 30");
}


switch (n1) {
  case 10:
    console.log("n1 es igual a 10");
    break;
  case 20:
    console.log("n1 es igual a 20");
    break;
  case 30:
    console.log("n1 es igual a 30");
    break;
  default:
    console.log("n1 no es igual a 10, 20 o 30");
}

// operador ternario "condicion ? verdadero : falso"
const saludo = 1;

if(saludo === 1) console.log("Hola")
else console.log("Adios");

saludo === 1 ? console.log("Hola") : console.log("Adios");
// saludo === 1 ? console.log("Hola") : null;
// saludo === 1 && console.log("Hola");
