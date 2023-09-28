const img = imgs.map((img) => {
  return img;
});

const nombre = document.getElementById("nombre");
const materiaN = document.getElementById("materiaN");
materiaN.style.border = "3px solid red";
nombre.addEventListener("keyup", (e) => {
  let nombreM = e.target.value;

  if (nombreM.length == 0) {
    materiaN.innerText = "Nombre de la materia";
  } else {
    materiaN.innerText = nombreM;

    if (nombreM.length >= 5) {
      materiaN.style.border = "3px solid blue";
    } else {
      materiaN.style.border = "3px solid red";
    }
  }
  
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

  horaselect.innerText = hora;
});

const contenedordias = document.getElementById("contenedordias");
const checkboxes = document.getElementsByClassName("dias");
const semana = document.getElementsByClassName("Ldias");

for (var i = 0; i < checkboxes.length; i++) {
  (function (index) {
    checkboxes[index].addEventListener("change", function () {
      if (this.checked) {
        contenedordias.innerHTML += `<span  class="${checkboxes[index].id}" >   ${checkboxes[index].name}</span>`;
        semana[index].style.backgroundColor = "rgb(30, 201, 73)";
      } else {
        let elemento = document.getElementsByClassName(checkboxes[index].id);
        elemento[0].remove();
        semana[index].style.backgroundColor = "";
      }
    });
  })(i);
}

const grupo = document.getElementById("grupo");
const grupovista = document.getElementById("gruposelect");

grupo.addEventListener("input", () => {
  const grupo = document.getElementById("grupo").value;
  gruposelect.innerText = grupo;
});
