//app-style
const $header = document.getElementById("")
const $btnNuevaTarj = document.getElementById("btn-nueva-tarj");
const $formTarj = document.getElementById("form-tarj");
const $contFiltrosVs = document.getElementById("cont-filtros-vs");
const $contTarj = document.getElementById("cont-tarj");
const $contTotalUnaTarj = document.getElementById("cont-total-una-tarj");
const $btnHomeUna = document.getElementById("btn-home-una");
const $btnCancPost = document.getElementById("btn-canc-post");
const $btnSubmitPost = document.getElementById("btn-submit-post");
const $btnCancelBusc = document.getElementById("btn-cancel-busc");
let $selFiltroCasa = document.getElementById("filtro-casa");
let $selFiltroEspecie = document.getElementById("filtro-especie");
let $selFiltroEstado = document.getElementById("filtro-estado");
const $footer = document.getElementById('footer');
const $pie = document.getElementById("pie");

const $fondoModal = document.getElementById("fondo-modal");
const $cerrar = document.getElementById("cerrar");

//app-get
const $contentTarjetas = document.getElementById("content-tarjetas");
const $contUnaTarj = document.getElementById("cont-una-tarj");
const $total = document.getElementById("total");

//spinner
const enlableSpinner = document.getElementById('render-spinner'); //revisar el spinner

//app-post
const $contieneError = document.getElementById("contieneError");
let $inpNombForm = document.getElementById("nombreForm");
let $selCasaForm = document.getElementById("sel-cas-form");
let $selOrigenForm = document.getElementById("sel-origen-form");
let $selEstadoForm = document.getElementById("sel-estado-form");
let $inpUrlForm = document.getElementById("urlForm");
let $inpInfoRelForm = document.getElementById("infoRelForm");
let $inpMasTextForm = document.getElementById("masTexForm");
let $imgForm = document.getElementById("img-form");
let $imag = document.getElementById("imag");

const $formulario = document.getElementById("formulario");
const $contFiltrosUrl = document.getElementById("cont-filtros-url");
const $contBtnsNuevaTarj = document.getElementById("contBtnsNuevaTarj");
const $contBtnsEditTarj = document.getElementById("contBtnsEditTarj");

// let $prueba = document.getElementById("prueba")
// let $inpInfoRelForm2 =document.getElementById("inp-info-rel-2")

//app-put
const $btnEditUna = document.getElementById("btn-edit-una");
const $btnCancPut = document.getElementById("btn-canc-put");
const $btnSubmitPut = document.getElementById("btn-submit-put");
const $imagURL = document.getElementById("imagURL");
const $classSpanFilForm = document.querySelectorAll(".spanFilForm");
const $classIco = document.querySelectorAll(".ico");



// Para probar IdleDeadline, luego borrar
let $idTarj = document.getElementById("idTarj");