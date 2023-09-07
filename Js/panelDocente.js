const mapaClases = classes.map((clase) => {
  return clase;
});

const principalAbajo = document.getElementById("principalAbajo");

function creadorClase(tamaño) {
  const divmore = document.createElement("div");
  divmore.innerHTML = `
  <a style="text-decoration: none !important; color:blue;" href=""><div class="classContainers" style="display: flex; ">
            
  <img id="imgplus" height="80px" src="../img/plus-svgrepo-com.svg" alt="">
<h1>Añadir Una Clase</h1>
  </div>  </a>

`;


  for (let i = 0; i < tamaño; i++) {
    const div = document.createElement("div");

    div.classList.add("justify-content-center", "align-items-center");
    div.style.width = "50%";
    div.style.display = "inline-block";
    div.style.paddingBottom = "10px";

    div.innerHTML = `
        
            <div class="classContainers" style="display: flex; background-image: url('');">
            
                <img id="" height="80px" src="${mapaClases[i].image}" alt="">
                  
                <ul>
                    
                   
                   <h3>${mapaClases[i].name}</h3>
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
  principalAbajo.appendChild(divmore);
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
                    <li> <a href=""> Panel General </a>  </li>
                    <li> <a href=""> Lista De Alumnos </a></li>
                    <li> <a href=""> Analisis Estadistico </a></li>
                    <li> <a href=""> Panel De Notas </a></li>
                    
                        
                    </ul>
                    <div >
                      <p></p>
                      <div class=" progress" role="progressbar" aria-label="Animated striped example"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar " style="width: 75%">
                    </div> 

                </div> 
                <p>${mapaClases[i].days}</p>
                <a href=""><button type="button" class="btn btn-success">Ir a la Clase</button> <a/>
                
                
                `;

      estado = false;
    }
  });
}
