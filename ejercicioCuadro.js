const cuadro = document.getElementById("cuadro");

cuadro.addEventListener("click",cambiar)

function cambiar(e) {
  cuadro.style.backgroundColor = cambiarColor();
  cuadro.style.position = "absolute";
  cuadro.style.top = cambiarPosition("top");
  cuadro.style.left = cambiarPosition("left");
  cuadro.style.width = cambiarTamanio();
  cuadro.style.height = cambiarTamanio();
}


function cambiarColor() {
  const r = (Math.random()*250).toFixed(0)
  const g = (Math.random()*250).toFixed(0)
  const b = (Math.random()*250).toFixed(0)
  return `rgb(${r},${g},${b})`
}

function cambiarPosition(direccion) {
  const position = (Math.random()*(direccion === "top" ? 500 : 1000)).toFixed(0)
  return `${position}px`
}

function cambiarTamanio() {
  const position = (Math.random()*500).toFixed(0)
  return `${position}px`
}