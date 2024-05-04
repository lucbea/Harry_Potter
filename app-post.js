// Evento Nueva Tarjeta 
$btnNuevaTarj.addEventListener("click", () => {
    console.log("voy a mostrar formulario")
    mostrarCont($formTarj);
    $imgForm.classList.add ("hidden");
    $datImg.classList.remove("ocuparParteCont");
    
    $contBtnsEditTarj.classList.add("hidden");
    $confBorrarTarj.classList.add("hidden");
    $contBtnsNuevaTarj.classList.remove("hidden");
    
    $inpNombForm.value = "";
    $inpUrlForm.value = "";
    $inpInfoRelForm.value = "";
    $inpMasTextForm.value = "";
    document.body.scrollIntoView({ block: 'start' });
});


// Evento que activa todo el proceso POST
$btnSubmitPost.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("El botón fue clickeado");
        let pers = armarObjNuevoPers(event);
        if (pers) { 
            postFetch(event, pers);
            llamadoFetch("", true, "mostrar");
        } else {
            // errorCampoForm();
            console.log("error en objeto para post");
        }
    });
    


const postFetch = (event, nuevoPers) => {
    event.preventDefault();
    console.log("Ingresé a Post", nuevoPers);
    fetch("https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(nuevoPers) 
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al agregar el objeto"); 
            }
            return res.json(); 
        })
        .then((data) => {
            llamadoFetch("", true, "mostrar");
            console.log(data); 
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Terminé POST"));
};


const armarObjNuevoPers = (event) => {
    event.preventDefault();
    let band = false;
    console.log("band:", band);
    band = validarForm(band);

    if (band) {
        let nombre = $inpNombForm.value;
        let imagenURL = $inpUrlForm.value;
        let infoRele = $inpInfoRelForm.value;
        let infoMas = $inpMasTextForm.value;
        let casa = $selCasaForm.value;
        let origen = $selOrigenForm.value;
        let estado = $selEstadoForm.value;
        let pers = {
            "nombre": nombre,
            "imagenURL": imagenURL,
            "infoRele": infoRele,
            "infoMas": infoMas,
            "casa": casa,
            "origen": origen,
            "estado": estado
        };
        console.log(pers);
        return pers

    } else {
        // errorCampoForm();
        console.log("error en objeto para post");
    }
};


const validarForm = (band) => {
    if ($inpNombForm.value === '' || $inpUrlForm.value === '' || $inpInfoRelForm.value === '' || $inpMasTextForm.value === '') {
        console.log("formulario con VACÍOS")
        $fondoModal.classList.remove("hidden");
        $contErrorForm.classList.remove("hidden");
        return band
    } else {
        console.log("formulario OK")
        return band = true;
    }
}


//Evento Cancelar nueva Tarjeta 
$btnCancPost.addEventListener("click", (event) => {
    event.preventDefault();
    $imgForm.classList.add("hidden");
    enlableSpinner.style.display = 'block'

    setTimeout(() => {
        enlableSpinner.style.display = 'none';
        mostrarCont($contTarj, $contFiltrosVs);
    }, 2000);
    document.body.scrollIntoView({block: 'start' });
});

