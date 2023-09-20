const nombre = document.getElementById("nombre");
console.log(nombre);
const materiaN = document.getElementById("materiaN");

nombre.addEventListener("keyup", (e) => {
  let nombreM = e.target.value;
  console.log(nombreM);
  materiaN.innerText = nombreM;
});
