// Creamos un objeto URL
const baseURL = new URL('https://661c5d0de7b95ad7fa6a3986.mockapi.io/api/harryPotter/');



let filtrosEleg = {casa:"", origen:"", estado:""};
$selFiltroCasa.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, casa: $selFiltroCasa.value }
    console.log($selFiltroCasa.value, filtrosEleg)
})
$selFiltroOrigen.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, origen: $selFiltroOrigen.value }
    console.log($selFiltroOrigen.value, filtrosEleg)
})
$selFiltroEstado.addEventListener("change", () => {
    filtrosEleg = { ...filtrosEleg, estado: $selFiltroEstado.value }
    console.log($selFiltroEstado.value, filtrosEleg)
})


// $btnBusc.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("El botón BUSCAR de FILTROS  fue clickeado", $btnBusc);
//     filtrosEleg = armarObjPut(filtrosEleg);
//     console.log("listo obj para searchParam:", filtrosEleg)
//     if (Object.values(filtrosEleg).every(value => value === "")) {
//         console.log("no se han elegido filtros")
//     } else {
//         if (filtrosEleg.casa) {
//             if (filtrosEleg.casa !== "Todas") {
//                 filterURL.searchParams.append('casa', filtrosEleg.casa);
//             }
//         }
//         if (filtrosEleg.origen) {
//             if (filtrosEleg.origen !== "Todos") {
//                 filterURL.searchParams.append('origen', filtrosEleg.origen);
//                 console.log("hay origen", filtrosEleg, filterURL);
//             }
//         }
//         if (filtrosEleg.estado) {
//             if (filtrosEleg.estado !== "Todos") {
//                 filterURL.searchParams.append('estado', filtrosEleg.estado);
//                 console.log("hay estado", filtrosEleg, filterURL);
//             } 
//         }
//         console.log("hay estado", filtrosEleg,"filter URL:", filterURL);
//         filtroFetch (filterURL);
      
//     }
// });



$btnBusc.addEventListener("click", (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    let string = "";
    console.log("El botón BUSCAR de FILTROS fue clickeado", $btnBusc);
    filtrosEleg = armarObjPut(filtrosEleg);
    console.log("listo obj para searchParam:", filtrosEleg);
    
    if (Object.values(filtrosEleg).every(value => value === "")) {
        console.log("no se han elegido filtros");
    } else {
        if (filtrosEleg.casa && filtrosEleg.casa !== "Todas") {
            searchParams.append('casa', filtrosEleg.casa);
            string = string + "estado"+ filtrosEleg.casa.tostring
        }
        if (filtrosEleg.origen && filtrosEleg.origen !== "Todos") {
            searchParams.append('origen', filtrosEleg.origen);
        }
        if (filtrosEleg.estado && filtrosEleg.estado !== "Todos") {
            searchParams.append('estado', filtrosEleg.estado);
        }
        
        console.log("filter URL:", baseURL.toString(), searchParams, typeof(baseURL));
        const urlConParametros = `${baseURL}?${searchParams.toString()}`;

        // filtroFetch(filterURL); // Pasamos la URL completa como cadena
        llamadoFetch2(urlConParametros)
    }
});

const llamadoFetch2 = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("llamado fetch", data);
            mostrarTodasTarj(data);
        })
        .catch((error) => {
            // $contErrorForm.classList.remove("hidden");
            console.error('Error al realizar la solicitud:', error);
        })
};






// const filtroFetch = (URL) => {
//     console.log (URL)
//     URL = "'"+URL+"'";
//     console.log (URL)
//     return fetch(URL)
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                  console.log("llamado fetch con filtros ver si data es array", data);
//                 mostrarTodasTarj(data);
//              })
//             .catch((error) => {
//                 $contErrorForm.classList.remove("hidden");
//                 console.error('Error al realizar la solicitud:', error);
//             })
// }
        


// Evento Borrar Filtros 
$btnCancelBusc.addEventListener("click", () => borrarFiltros());


const borrarFiltros = () => {
  console.log("ingresé a borrar filtros")
  if ($selFiltroCasa.value === "Todas"  &&  $selFiltroOrigen.value === "Todos" &&  $selFiltroEstado.value === "Todos") {
    console.log("filtros iniciales")
  } else {
    $selFiltroCasa.value = "Todas";
    $selFiltroOrigen.value = "Todos";
    $selFiltroEstado.value = "Todos";
    llamadoFetch ("", true, "mostrar");
  }

}