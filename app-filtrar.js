const baseURL = new URL('https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/');


let filtrosEleg = { casa: "", origen: "", estado: "" };
$selFiltroCasa.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, casa: $selFiltroCasa.value }
})
$selFiltroOrigen.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, origen: $selFiltroOrigen.value }
})
$selFiltroEstado.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, estado: $selFiltroEstado.value }
})


$btnBusc.addEventListener("click", (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    filtrosEleg = armarObjPut(filtrosEleg);

    if (Object.values(filtrosEleg).every(value => value === "")) {
        $elijaFiltros.classList.remove("hidden");
    } else {
        $elijaFiltros.classList.add("hidden");
        if (filtrosEleg.casa && filtrosEleg.casa !== "Todas") {
            searchParams.append('casa', filtrosEleg.casa);
        }
        if (filtrosEleg.origen && filtrosEleg.origen !== "Todos") {
            searchParams.append('origen', filtrosEleg.origen);
        }
        if (filtrosEleg.estado && filtrosEleg.estado !== "Todos") {
            searchParams.append('estado', filtrosEleg.estado);
        }
        const urlConParametros = `${baseURL}?${searchParams.toString()}`;
        filtroFetch(urlConParametros)
    }
});


const filtroFetch = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.length === 9 && typeof (data) === "string") {
                if (!($contTarj.classList.contains("hidden"))) {
                    ocultarCont()
                    mostrarCont($contFiltrosVs, $contMjeCambFilt, $mjeCambFilt);
                };
            } else {
                if ($contTarj.classList.contains("hidden")) {
                    ocultarCont();
                    mostrarCont($contTarj);
                }
                mostrarTodasTarj(data);
            }
        })
        .catch((error) => {
            console.log("No hay datos para mostrar")
        })
};


$btnCancelBusc.addEventListener("click", () => borrarFiltros());


const borrarFiltros = () => {
    if ($selFiltroCasa.value === "Todas" && $selFiltroOrigen.value === "Todos" && $selFiltroEstado.value === "Todos") {
    } else {
        $selFiltroCasa.value = "Todas";
        $selFiltroOrigen.value = "Todos";
        $selFiltroEstado.value = "Todos";
        llamadoFetch("", true, "mostrar");
    }
}