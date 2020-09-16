let lista = document.querySelector("parrafo 3");
console.log(parrafo3);
parrafo3.style.backgroundColor = "white";
let btn = document.querySelector("BotonCambiar");
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    parrafo3.style.backgroundColor = rndCol;
  }

  let btn2 = document.querySelector("BotonOcultar");
  function ocultarParrafo3() {
    parrafo3.style.display = "none";
  } 
  btn2.onclick = ocultarParrafo3;

  let btn3 = document.querySelector("BotonOcultar");
  function mostrarParrafo3() {
    parrafo3.style.display = "";
  } 
  btn3.onclick = mostrarParrafo3;