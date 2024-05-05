let pers = [];
let per = {};
let URLbase = "https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/"

const llamadoFetch = (id, todosUno, funcion) => {
    return fetch( URLbase + id)
        .then((res) => res.json())
        .then((data) => {
            if (funcion === "mostrar") {
                todosUno ? mostrarTodasTarj(data) : mostrarUnaTarj(data, false);
            } 
        });
};


const mostrarUnaTarj = (pers, post) => {
    ocultarCont();
    contSpinner.style.display = 'flex';
    setTimeout(() => {
        mostrarCont($contTotalUnaTarj);
        $contSpinner.style.display = 'none';
        $contTotalUnaTarj.innerHTML = '';
        $contTotalUnaTarj.innerHTML += `
        <div id="contTarjPost" class="hidden">
                <h3>La información fue registrada</h3>
            </div>
            <div id="cont-una-tarj">
                    <div id="imagen-una">
                        <img id="img-una" src="${pers.imagenURL}" alt="imagen">
                    </div>
                    <div>
                        
                        <div id="datos-una">
                            <div class="info-apar"> 
                                <div class="con-tit">
                                </div>
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
        evenVolverInicio(btnsHomeUna);
        const btnsEditUna = document.querySelectorAll('#btn-edit-una');
        evenEditUna(btnsEditUna, "idBtnEditUna");
        const btnsBorrarUna = document.querySelectorAll('#btn-borrar-una');
        evenBorrarUna(btnsBorrarUna, "idBtnBorrarUna");
        if (post) {
            const $contTarjPost = document.getElementById("contTarjPost");
            $contTarjPost.classList.remove('hidden');
            setTimeout(() => {
                $contTarjPost.classList.add('hidden');
            }, 3000);
        }
    }, 2000);
    per = pers;
    document.body.scrollIntoView({ block: 'start' });
}


const evenVolverInicio = (btns) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            ocultarCont();
            llamadoFetch("", true, "mostrar");
            mostrarCont($contTarj, $contFiltrosVs);
        });
    });
}


const evenEditUna = (btns, paramData) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            formMostData(per);      
        });
    });
}


const evenBorrarUna = (btns, paramData) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            borrarUnaTarj(e, per, paramData);
        });
    });
}


const mostrarTodasTarj = (personajes) => {
    ocultarCont();
    $contSpinner.style.display = 'flex';
    setTimeout(() => {
        mostrarCont($contTarj, $contFiltrosVs);
        $contSpinner.style.display = 'none';
        $total.innerHTML = '';
        if (personajes) {
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
            evenMostrarPers(btnsMas, "idboton");
        } 
    }, 2000);
    document.body.scrollIntoView({ block: 'start' });
};


const evenMostrarPers = (btns, paramData) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            llamadoFetch(btn.getAttribute(`data-${paramData}`), false, "mostrar")
        });
    });
}


const inicializar = () => {
    llamadoFetch("", true, "mostrar");
}  


inicializar();