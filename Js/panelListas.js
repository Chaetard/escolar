const alumnosL = alumnos.map((clase) => {
  return clase;
});

const alumnosAdd = document.getElementById("alumnosAdd");

function alumnoBuscado(tamaño, palabraClave) {
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
const busqueda = document.getElementById("busqueda");

busqueda.addEventListener("keydown", (e) => {

  let busqueda = e.target.value;
  console.log(busqueda);

  alumnosAdd.innerHTML = `${busqueda}`;
  
});






// CHAT GPT CODE 

/* 

// Obtenemos el campo de entrada y la lista
const searchInput = document.getElementById('searchInput');
const lista = document.getElementById('lista');

// Agregamos un evento 'keypress' al campo de entrada
searchInput.addEventListener('keypress', function () {
  // Obtenemos el valor del campo de entrada
  const searchTerm = searchInput.value.toLowerCase();

  // Obtenemos todos los elementos de la lista
  const elementos = lista.getElementsByTagName('li');

  // Recorremos los elementos de la lista
  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    const textoElemento = elemento.innerText.toLowerCase();

    // Comparamos el texto del elemento con el término de búsqueda
    if (textoElemento.includes(searchTerm)) {
      // Mostramos el elemento si coincide con la búsqueda
      elemento.style.display = 'block';
    } else {
      // Ocultamos el elemento si no coincide con la búsqueda
      elemento.style.display = 'none';
    }
  }
});




*/
