let pers = [];
let per= {};


const llamadoFetch = (id, todosUno, funcion) => {
    return fetch("https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/" + id)
        .then((res) => res.json())
        .then((data) => {
            console.log("llamado fetch", data);
            if (funcion === "mostrar") {
                console.log("voy a mostar algo")
                todosUno? mostrarTodasTarj(data) : mostrarUnaTarj (data);
            } else {
                console.log("voy a editar tarjeta")
            }
        });
};


const mostrarUnaTarj = (pers) => {
    console.log("voy a mostrar una tarj")
    ocultarCont();
    enlableSpinner.style.display = 'block'
    setTimeout(() => {
        mostrarCont($contTotalUnaTarj);
        enlableSpinner.style.display = 'none';
        $contTotalUnaTarj.innerHTML = '';
        $contTotalUnaTarj.innerHTML += `
            <div id="cont-una-tarj">
                    <!-- div id="contenidoPersonaje" class="centrado-personaje"> -->
                    <!-- <div class="btn-home-inicio hidden">
                        <button id="btn-home-una-inicio" class="btn btn-una" value="home" tabindex="0"> -->
                    <!-- <span class="hidden"> <<< Volver</span> -->
                    <!-- <img src="./icono/house-solid.png" class="icono" alt="inicio">
                        </button>
                    </div> -->
                    <div id="imagen-una">
                        <img id="img-una" src="${pers.imagenURL}" alt="imagen">
                    </div>
                    <div id="datos-una">
                        <div class="info-apar">
                            <p id="nomb-una">${pers.nombre}</p>
                            <p id="info-relevante-una" class="info-tres">${pers.infoRele}</p>
                        </div>
                        <div class="info-apar">
                            <p class="info-una">Casa: ${pers.casa}</p>
                            <p class="info-una">Origen: ${pers.origen}</p>
                            <p id="estado-una" class="info-una">Estado: ${pers.estado}</p>
                        </div>
                        <div class="info-apar">
                            <p id="mas-info-una" class="info-dos">${pers.infoMas}</p>
                        </div>
                    </div>
                </div>
                <div class="btns-una-tarj">
                    <button id="btn-home-una" data-idBtnHomeUna=${pers.id} class="btn btn-una" value="home" tabindex="0">
                        <span class="hidden">
                            <<< Volver</span>
                                <img src="./icono/house-solid.png" class="icono" alt="inicio">
                    </button>
                    <button id="btn-edit-una" data-idBtnEditUna=${pers.id} class="btn btn-una" value="Editar" tabindex="0">
                        <span class="hidden"> Editar </span>
                        <img src="./icono/file-pen-solid.png" class="icono" alt="editar">
                    </button>
                    <button id="btn-borrar-una" data-idBtnBorrUna=${pers.id} class="btn btn-una" type="submit" value="Borrar" tabindex="0">
                        <span class="hidden"> Eliminar </span>
                        <img src="./icono/trash-can-solid.png" class="icono" alt="eliminar">
                    </button>
                </div>`
        const btnsHomeUna = document.querySelectorAll("#btn-home-una");
        evenVolverInicio (btnsHomeUna);
        const btnsEditUna = document.querySelectorAll('#btn-edit-una');
        evenEditUna (btnsEditUna, "idBtnEditUna");
        const btnsBorrarUna = document.querySelectorAll('#btn-borrar-una');
        evenBorrarUna (btnsBorrarUna, "idBtnBorrarUna");
    }, 200);
    per = pers;
    console.log(pers, "per: ", per, "****")
    document.body.scrollIntoView({block: 'start' });
}


// **************** Evento Ir al inicio desde una Tarjeta ******************
const evenVolverInicio = (btns) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            ocultarCont ();
            llamadoFetch ("", true, "mostrar");
            mostrarCont($contTarj, $contFiltrosVs);

        });
    });
}

// **************** Editar una Tarjeta ******************
const evenEditUna = (btns, paramData) => {
    console.log(per, "estoy en editar una",btns,paramData);
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // console.log(per);
            // mostrarCont($formTarj);
            // let perso = llamadoFetch(btn.getAttribute(`data-${paramData}`), false, "editar");
            formMostData(per);       //muestra el formulario con los datos HACER
        } );
    });
}



// **************** Borrar una Tarjeta ******************
const evenBorrarUna = (btns, paramData) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log(per,paramData, btn)
            borrarUnaTarj(e, per, paramData)});
    });
}



const mostrarTodasTarj = (personajes) => {
    ocultarCont();
    enlableSpinner.style.display = 'block'

    setTimeout(() => {
        mostrarCont($contTarj, $contFiltrosVs);
        enlableSpinner.style.display = 'none';
        $total.innerHTML = '';
        personajes.forEach(personaje => {
            const { id, nombre, imagenURL, casa, origen, estado, infoRele, infoMas } = personaje;
            $total.innerHTML += `<div id="contenidoPersonaje" class="centrado-personaje">
                                    <div id="imagen">
                                        <img src="${imagenURL}" alt="imagen">
                                    </div>
                                    <div id="datos">
                                        <div>
                                            <p id="nomb">${nombre}</p>
                                        </div>
                                        <div class="info-apar hidden">
                                            <p id="info-relevante">${infoRele}</p>
                                             <p class="info">${casa}</p>
                                            <p class="info">${origen}</p>
                                            <p id="estado" class="info">${estado}</p>
                                            <p id="mas-text" class="hidden"${infoMas}></p>
                                        </div>
                                    </div>
                                    <div id="mas">
                                        <button id=btn-mas data-idboton=${id} class="btn btn-mas">
                                            <p id="mas-info">Leer + <span class="flecha hidden">→</span></p>
                                        </button>
                                    </div>
                            </div>`
        });
        const btnsMas = document.querySelectorAll('.btn-mas');
        evenMostrarPers (btnsMas, "idboton");
    }, 2000);
    document.body.scrollIntoView({block: 'start' });
};


const evenMostrarPers = (btns, paramData) => {
    console.log("estoy en evenMostrarPers, con el paramData:",paramData)
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            llamadoFetch(btn.getAttribute(`data-${paramData}`), false, "mostrar") 
        });
    });
}


const inicializar = () => llamadoFetch("", true, "mostrar");

inicializar ();