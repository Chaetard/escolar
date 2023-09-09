const alumnosL = alumnos.map((clase) => {
  return clase;
});

const alumnosAdd = document.getElementById("alumnosAdd");

function alumnoBuscado(tamaño) {
  for (let i = 0; i < tamaño; i++) {
    const divmore = document.createElement("div");
    divmore.innerHTML = `
  <table>
  <tr class="tabla">
    <td>${alumnosL[i].nombre}</td>
    <td>${alumnosL[i].apellido}</td>
    <td>${alumnosL[i].grado}</td>
    <td>${alumnosL[i].materias}</td>
  </tr>
  </table>
  `;
  alumnosAdd.appendChild(divmore);
  }

  
}

alumnoBuscado(alumnosL.length);



