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
    console.log(img[i].color);
    elementos[i].style.backgroundColor = img[i].color;
    visuaCard.style.backgroundColor = img[i].color;
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


const grupo = document.getElementById("grupo");
const grupovista = document.getElementById("gruposelect");

grupo.addEventListener("input", () => {
  const grupo = document.getElementById("grupo").value;
  console.log(grupo);
  gruposelect.innerText = grupo;
});

