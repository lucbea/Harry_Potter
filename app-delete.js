const borrarUnaTarj = (e,pers,paramData) => {
    $fondoModal.classList.remove("hidden");
    $contErrorForm.classList.add("hidden");
    $confBorrarTarj.classList.remove ("hidden");
    $btnSubmitDelete.setAttribute("data-id", pers.id);
}

$btnCancDelete.addEventListener("click", () => {
    $fondoModal.classList.add("hidden");
    $confBorrarTarj.classList.add("hidden");
})

$btnSubmitDelete.addEventListener("click", () => {
    deleteFetch ($btnSubmitDelete.getAttribute("data-id"))   
})

const deleteFetch = (id) => {
    event.preventDefault();
    console.log("Ingresé a Delete", id); ``
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
            $fondoModal.classList.add("hidden");
            $confBorrarTarj.classList.add("hidden");
            llamadoFetch("", true, "mostrar");
            console.log(data);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Terminé DELETE"));
};
