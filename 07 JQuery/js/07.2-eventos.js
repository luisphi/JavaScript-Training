'use strict'

/**
 * En jQuery tienes que usar callbacks clasicos con function(){}
 * jQuery no está preparado para el ES6 y el ES7 que son los últimos estandaraes de los navegadores :)
 */

// MouseOver MouseOut
$(document).ready(()=>{

    var caja = $("#caja");
    // Se hace lo mismo con css :hover
    caja.mouseover( () =>{
        caja.css("background", "red");
    });

    caja.mouseout( () =>{
        caja.css("background", "yellow");
    });

    // ASI PARA TODOS LOS EVENTOS: mousedown, mouseup

    // Capturar el movimiento del mouse
    $(document).mousemove( () =>{
        console.log("Coordenada X: " + event.clientX);
        console.log("Coordenada Y: " + event.clientY);

        // HACER QUE CIERTO ELEMENTO SIGA EL MOUSE
        $("#sigueme").css("left", event.clientX);
        $("#sigueme").css("top", event.clientY);
    });
});    