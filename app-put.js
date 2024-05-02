let inpPerChange = { nombre: "", imagenURL: "", infoRele: "", infoMas: "", casa: "", origen: "", estado: "", id: "" };


const formMostData = (per) => {
    inpPerChange.id = per.id
    console.log("voy a mostrar formulario, per:", per, "id:", per.id, inpPerChange.id)
    mostrarCont($formTarj);

    $contBtnsNuevaTarj.classList.add("hidden");
    $contBtnsEditTarj.classList.remove("hidden");

    $inpNombForm.value = per.nombre;
    $inpUrlForm.value = per.imagenURL;
    $inpInfoRelForm.value = per.infoRele;
    $inpMasTextForm.value = per.infoMas;
    $selCasaForm.value = per.casa;
    $selOrigenForm.value = per.origen;
    $selEstadoForm.value = per.estado;
    $selCasaForm.value = per.casa;
    $idTarj.value = per.id;
    document.body.scrollIntoView({ block: 'start' });
}


$inpNombForm.addEventListener("input", () => {
    inpPerChange = { ...inpPerChange, nombre: $inpNombForm.value }
    console.log($inpNombForm.value, inpPerChange)
})
$inpUrlForm.addEventListener("input", () => {
    inpPerChange = { ...inpPerChange, imagenURL: $inpUrlForm.value }
    console.log($inpUrlForm.value, inpPerChange)
})
$inpInfoRelForm.addEventListener("input", () => {
    inpPerChange = { ...inpPerChange, infoRele: $inpInfoRelForm.value }
    console.log($inpInfoRelForm.value, inpPerChange)
})
$inpMasTextForm.addEventListener("input", () => {
    inpPerChange = { ...inpPerChange, infoMas: $inpMasTextForm.value }
    console.log($inpMasTextForm.value, inpPerChange)
})
$selCasaForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, casa: $selCasaForm.value }
    console.log($selCasaForm.value, inpPerChange)
})
$selOrigenForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, origen: $selOrigenForm.value }
    console.log($selOrigenForm.value, inpPerChange)
})
$selEstadoForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, estado: $selEstadoForm.value }
    console.log($selEstadoForm.value, inpPerChange)
})


$btnSubmitPut.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("El botón ENVIAR  PUT  fue clickeado", $btnSubmitPut);
    let band = false;
    console.log("band:", band);
    band = validarForm(band);

    if (band) {
        let pers = armarObjPut(event);
        console.log("listo obj para put:", pers)
        if (pers) {
            console.log("antes del fetchPut", pers)
            putFetch(event, pers);
        }
    } else {
        errorCampoForm();
    }
});


const armarObjPut = () => {
    eliminarVaciosObj(inpPerChange);
    return inpPerChange;
}


const eliminarVaciosObj = (obj) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === '') {
            delete obj[key];
        }
    });
};


const putFetch = (event, persModif) => {
    event.preventDefault();
    console.log("Ingresé a Post", persModif.id); ``
    fetch(`https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/` + persModif.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persModif)
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al modificar el objeto");
            }
            return res.json();
        })
        .then((data) => {
            llamadoFetch("", true, "mostrar");
            console.log(data);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Terminé PUT"));
};



