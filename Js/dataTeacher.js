const dataTeacher = {
  name: "Josue Ramirez",
  age: 30,
  country: "Mexico",
};



function setNombre() {
  const NombDoc = document.getElementById("NombDoc");
  NombDoc.innerHTML = localStorage.getItem("NombDoc");
}
