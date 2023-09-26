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
