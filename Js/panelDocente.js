const mapaClases = classes.map((clase) => {
  return clase;
});

const principalAbajo = document.getElementById("principalAbajo");

function creadorClase(tamaño) {
  for (let i = 0; i < tamaño; i++) {
    const div = document.createElement("div");

    div.classList.add("justify-content-center", "align-items-center");
    div.style.width = "50%";
    div.style.display = "inline-block";
    div.style.paddingBottom = "10px";

    div.innerHTML = `
        
            <div class="classContainers" style="display: flex; background-image: url('');">
                <img id="" src="${mapaClases[i].image}" alt="">

                <ul>
                    <li >ID: ${mapaClases[i].id}</li>
                    <li >Nombre: ${mapaClases[i].name}</li>
                    <li >Turno: ${mapaClases[i].shift}</li>
                    <li >Alumnos: ${mapaClases[i].alumCont}</li>
                    <li >Hora: ${mapaClases[i].schedule}</li>
                    <li >Dias: ${mapaClases[i].days}</li>
                </ul>

            </div>  
        `;
    const background = document.getElementsByClassName("classContainers");

    principalAbajo.appendChild(div);
  }
}
creadorClase(mapaClases.length);

// Selecciona todos los elementos con la clase "classContainers"
const elementosContainers = document.getElementsByClassName("classContainers");

const contenedor_centralA = document.getElementById("contenedor_centralA");

// Itera a través de los elementos y agrega el evento a cada uno
for (let i = 0; i < elementosContainers.length; i++) {
  elementosContainers[i].addEventListener("click", () => {

    for (let j = 0; j < elementosContainers.length; j++) {
      elementosContainers[j].style.backgroundColor = "white";
    }

    let estado = true;
    if (estado == true) {
      elementosContainers[i].style.backgroundColor = "";

      contenedor_centralA.innerHTML = `
       
                    
                    <h1>
                    ${mapaClases[i].name}
                    </h1>
                   
                    <h2>${mapaClases[i].schedule}   ${mapaClases[i].group} </h2>
                    <ul>
                        Menu
                    <li>Panel General</li>
                    <li>Lista De Alumnos</li>
                    <li>Analisis Estadistico</li>
                    <li>Panel De Notas</li>
                        
                    </ul>
                    <div >
                      <p></p>
                      <div class=" progress" role="progressbar" aria-label="Animated striped example"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar " style="width: 75%">
                    </div> 

                </div> 
                <p>${mapaClases[i].days}</p>
                `;

      estado = false;
    }
  });
}
