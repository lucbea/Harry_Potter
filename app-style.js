// Footer al final
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
  marginTop = deberEstar - topFooter;
  topFooter < deberEstar ? $footer.style.marginTop = marginTop + "px" : $footer.style.marginTop = "15px";
  topFooter = $footer.getBoundingClientRect().top;
}


window.addEventListener('resize', lugarFooter);
lugarFooter();


const elemOculMost = [$contErrorForm, $contTarj, $contTotalUnaTarj,   $contenImgForm, $contBtnsNuevaTarj, $contBtnsEditTarj, $contFiltrosVs, $confBorrarTarj, $datImg, $elijaFiltros, $fondoModal, $formTarj, $imgForm, $contMjeCambFilt, $mjeCambFilt];


const ocultarCont = () => {
  for (let i = 0; i < elemOculMost.length; i++) {
    elemOculMost[i].classList.add("hidden");
  }
}


const mostrarCont = (...elementos) => {
  elementos.forEach(elem => {
    elem.classList.remove("hidden");
  });
  lugarFooter();
}


$cerrar.addEventListener("click", () => {
  $fondoModal.classList.add("hidden");
})
 