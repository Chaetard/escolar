const img = imgs.map((img) => {
  return img;
});

const nombre = document.getElementById("nombre");

console.log(nombre);
const materiaN = document.getElementById("materiaN");

nombre.addEventListener("keyup", (e) => {
  let nombreM = e.target.value;
  console.log(nombreM);
  materiaN.innerText = nombreM;
});

const visuaCard = document.getElementById("visuaCard");

const color_tarjetaListener = document.getElementById("color_tarjeta");

color_tarjetaListener.addEventListener("input", () => {
  const color_tarjeta = document.getElementById("color_tarjeta").value;
  visuaCard.style.backgroundColor = color_tarjeta;
});

const iconos = document.getElementById("iconos");
const elementos = document.getElementsByClassName("imagenes");
const logo = document.getElementById("logo");

for (let i = 0; i < img.length; i++) {
  iconos.innerHTML += `<img src="${img[i].img}" alt="" class="imagenes">`;
}

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", () => {
    limpiarFondo();
    logo.src = elementos[i].src;
    console.log(elementos[i].src);
    elementos[i].style.backgroundColor = "rgba(5, 173, 5, 0.835)";
  });
}

function limpiarFondo() {
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.backgroundColor = "";
  }
}

const hora = document.getElementById("hora");
const horavista = document.getElementById("horaselect");

hora.addEventListener("input", () => {
  const hora = document.getElementById("hora").value;
  console.log(hora);
  horaselect.innerText = hora;
});

const contenedordias = document.getElementById("contenedordias");
const checkboxes = document.getElementsByClassName("dias");

for (var i = 0; i < checkboxes.length; i++) {
  // Captura el valor de 'i' en cada iteración
  (function (index) {
    checkboxes[index].addEventListener("change", function () {
      if (this.checked) {
        contenedordias.innerHTML += `<span  class="${checkboxes[index].id}" >   ${checkboxes[index].name}</span>`;
        console.log(checkboxes[index].id);
      } else {
        let elemento = document.getElementsByClassName(checkboxes[index].id);
        
        elemento[0].remove();
        
      }
    });
  })(i);
}


