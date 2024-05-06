$btnNuevaTarj.addEventListener("click", () => {
    ocultarCont();
    mostrarCont($formTarj, $contBtnsNuevaTarj, $datImg);
    $datImg.classList.remove("ocuparParteCont");
    $inpNombForm.value = "";
    $inpUrlForm.value = "";
    $inpInfoRelForm.value = "";
    $inpMasTextForm.value = "";
    document.body.scrollIntoView({ block: 'start' });
});


$btnSubmitPost.addEventListener("click", (event) => {
        event.preventDefault();
        let pers = armarObjNuevoPers(event);
        if (pers) {
            postFetch(event, pers);
        }
    });


const postFetch = (event, nuevoPers) => {
    event.preventDefault();
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
            mostrarUnaTarj(data, true);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Terminé POST"));
};


const armarObjNuevoPers = (event) => {
    event.preventDefault();
    let band = false;
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
        return pers

    } 
};


const validarForm = (band) => {
    if ($inpNombForm.value === '' || $inpUrlForm.value === '' || $inpInfoRelForm.value === '' || $inpMasTextForm.value === '') {
        mostrarCont($formTarj, $contBtnsNuevaTarj, $datImg, $fondoModal, $contErrorForm);
        return band;
    } else {
        return band = true;
    }
}


$btnCancPost.addEventListener("click", (event) => {
    event.preventDefault();
    ocultarCont();
    $contSpinner.style.display = 'flex';
    setTimeout(() => {
        $contSpinner.style.display = 'none';
        mostrarCont($contTarj, $contFiltrosVs);
    }, 2000);
    document.body.scrollIntoView({block: 'start' });
});

