// Función para manejar el evento de cambio de tamaño de la ventana y detectar la orientación
// function detectPantalla() {
//     let orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
//     document.documentElement.classList.remove('landscape', 'portrait');
//     // console.log(orientation);
//     document.documentElement.classList.add(orientation);
//     console.log(orientation);
//     let altoPantalla = window.innerHeight;
//     // document.documentElement.classList.add(altoPantalla);
//     // // document.documentElement.style.setProperty('$altoPantalla', altoPantalla + 'px');
//     console.log(altoPantalla)
//     // Aplicar estilos responsivos basados en la orientación detectada
//     let elements = document.querySelectorAll('.element');
//     elements.forEach(function(element) {
//     element.classList.remove('sm', 'md', 'desktop');
//     element.classList.add(orientation);
    
//     });
//   }
  
  // Agrega un listener para el evento resize
//   window.addEventListener("resize", detectPantalla);

  //Agrega variable para utilizar en mixins (por landscape) con el alto de la pantalla
//   document.documentElement.style.setProperty('--altoscreen', alturaPantalla + 'px');
// const fs = require('fs');

// Obtener la altura de la pantalla
// const altoPantalla =  window.innerHeight; 

// Obtener el ancho de la pantalla
// const anchoPantalla = window.innerWidth;

// // Modificar los estilos CSS según el ancho de la pantalla
// document.documentElement.style.setProperty('--altoPantalla', altoPantalla + 'px');

  // Generar el contenido del archivo variables.scss con la variable --altoscreen
// const contenido = `:root {
    // --altoscreen: ${alturaPantalla}px;
//   }`;
  
  // Escribir el contenido en el archivo variables.scss
//   fs.writeFileSync('./scss/utils/variables.scss', contenido);
  
  // Llama a la función detectPantalla una vez para mostrar el tamaño inicial de la pantalla
//   detectPantalla();
  


