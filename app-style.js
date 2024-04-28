// Footer al final
let $footer = document.getElementById('footer');
let $pie = document.getElementById("pie");
let altoPantalla;
let anchoPantalla = window.innerWidth;
const lugarFooter = () => {
  let deberEstar = 0;
  let topFooter = 0;
  let altoFooter = 0;
  let marginTop = 0;
  topFooter = $footer.getBoundingClientRect().top;
  altoPantalla = window.innerHeight;
  anchoPantalla < 500 ? altoFooter = 60 : altoFooter = 60;
  deberEstar = altoPantalla - altoFooter;
  marginTop = deberEstar - topFooter ;
  topFooter < deberEstar ? $footer.style.marginTop = marginTop + "px" : $footer.style.marginTop = "15px";
  topFooter = $footer.getBoundingClientRect().top;
}


window.addEventListener('resize', lugarFooter);
lugarFooter();


let $btnNuevaTarj = document.getElementById("btn-nueva-tarj");
let $formTarj = document.getElementById("form-tarj");
let $contFiltrosVs = document.getElementById("cont-filtros-vs");
let $contTarj = document.getElementById("cont-tarj");
let $contUnaTarj = document.getElementById("cont-una-tarj");
let $contTotalUnaTarj = document.getElementById("cont-total-una-tarj");
let $btnHomeUna = document.getElementById("btn-home-una");
let $btnCancPost = document.getElementById("btn-canc-post");
let $btnCancelBusc = document.getElementById ("btn-cancel-busc");
let $selFiltroCasa = document.getElementById("filtro-casa");
let $selFiltroEspecie = document.getElementById("filtro-especie");
let $selFiltroEstado = document.getElementById("filtro-estado");


let elemOculMost = [$formTarj, $contFiltrosVs, $contTarj, $contTotalUnaTarj];

// **************** Evento Nueva Tarjeta ******************
$btnNuevaTarj.addEventListener("click", () => mostrar($formTarj));

// **************** Evento Cancelar nueva Tarjeta ******************
$btnCancPost.addEventListener("click", () => mostrar($contTarj, $contFiltrosVs));

// **************** Evento Ir al inicio desde una Tarjeta ******************
$btnHomeUna.addEventListener("click", () => mostrar($contTarj, $contFiltrosVs));

// **************** Evento Borrar Filtros ******************
$btnCancelBusc.addEventListener("click", () => borrarFiltros());


//  ***** Función ocultar todos los contenedores y mostrar los necesarios
const borrarFiltros = () => {
  $selFiltroCasa.value = "toda";
  $selFiltroEspecie.value = "toda";
  $selFiltroEstado.value = "todo";
}


//  ***** Función ocultar todos los contenedores y mostrar los necesarios
const mostrar = (...elementos) => {
  for (let i = 0; i < elemOculMost.length; i++) {
    elemOculMost[i].classList.add("hidden")
  }
  elementos.forEach(elem => {
    elem.classList.remove("hidden");
  });
  lugarFooter();
}





