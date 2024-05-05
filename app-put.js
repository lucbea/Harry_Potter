let inpPerChange = { nombre: "", imagenURL: "", infoRele: "", infoMas: "", casa: "", origen: "", estado: "", id: "" };

let formMostData = (per) => {    
    inpPerChange.id = per.id;
    ocultarCont();
    mostrarCont($formTarj, $datImg, $contenImgForm, $imgForm, $contBtnsEditTarj);
    $datImg.classList.add("ocuparParteCont");
    $inpNombForm.value = per.nombre;
    $inpUrlForm.value = per.imagenURL;
    $inpInfoRelForm.value = per.infoRele;
    $inpMasTextForm.value = per.infoMas;
    $selCasaForm.value = per.casa;
    $selOrigenForm.value = per.origen;
    $selEstadoForm.value = per.estado;
    $imgForm.innerHTML = "";
    $imgForm.innerHTML +=
                `<img id="imag" src="${per.imagenURL} " alt="imagen desde URL">` 
 
    document.body.scrollIntoView({ block: 'start' });
}


$inpNombForm.addEventListener("input", () => {
    $inpNombForm.value = $inpNombForm.value.slice(0, 24); 
    inpPerChange = { ...inpPerChange, nombre: $inpNombForm.value }
})


$inpUrlForm.addEventListener("input", () => {
    inpPerChange = { ...inpPerChange, imagenURL: $inpUrlForm.value }
})


$inpInfoRelForm.addEventListener("input", () => {
    $inpInfoRelForm.value = $inpInfoRelForm.value.slice(0, 45); 
    inpPerChange = { ...inpPerChange, infoRele: $inpInfoRelForm.value };
});


$inpMasTextForm.addEventListener("input", () => {
    $inpMasTextForm.value = $inpMasTextForm.value.slice(0, 80);
    inpPerChange = { ...inpPerChange, infoMas: $inpMasTextForm.value }
})


$selCasaForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, casa: $selCasaForm.value }
})


$selOrigenForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, origen: $selOrigenForm.value }
})


$selEstadoForm.addEventListener("change", () => {
    inpPerChange = { ...inpPerChange, estado: $selEstadoForm.value }
})


$btnSubmitPut.addEventListener("click", (event) => {
    event.preventDefault();
    let band = false;
    band = validarForm(band);
    if (band) {
        let pers = armarObjPut(inpPerChange);
        if (pers) {
            putFetch(event, pers);
        }
    } 
});


const armarObjPut = (objeto) => {
    objeto = eliminarVaciosObj(objeto);
    return objeto;
}


const eliminarVaciosObj = (obj) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === '') {
            delete obj[key];
        }
    });
    return obj;
};


const putFetch = (event, persModif) => {
    event.preventDefault();
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
            mostrarUnaTarj (data, true);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Terminé PUT"));
};


$btnCancPut.addEventListener("click", (event) => {
    event.preventDefault();
    $formTarj.classList.add("hidden");
    $contSpinner.style.display = 'flex'
    setTimeout(() => {
        $contSpinner.style.display = 'none';
        mostrarCont($contTotalUnaTarj);
    }, 2000);
    document.body.scrollIntoView({block: 'start' });
})

