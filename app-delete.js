let borrarUnaTarj = (e,pers,paramData) => {
    ocultarCont();
    mostrarCont($contTotalUnaTarj, $fondoModal, $confBorrarTarj)
    $btnSubmitDelete.setAttribute("data-id", pers.id);
}

$btnCancDelete.addEventListener("click", () => {
    ocultarCont();
})

$btnSubmitDelete.addEventListener("click", () => {
    deleteFetch ($btnSubmitDelete.getAttribute("data-id"));  
})

const deleteFetch = (id) => {
    event.preventDefault();
    fetch(`https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/` + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al borrar el objeto");
            }
            return res.json();
        })
        .then((data) => {
            ocultarCont();
            llamadoFetch("", true, "mostrar");
        })
        .catch((error) => console.log(error));
};
