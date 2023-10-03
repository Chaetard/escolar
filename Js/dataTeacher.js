const dataTeacher = {
  name: "Juan Pedroso Locura Nañes",
  age: 30,
  country: "Mexico",
};



function setNombre() {
  const NombDoc = document.getElementById("NombDoc");
  NombDoc.innerHTML = localStorage.getItem("NombDoc");
}
