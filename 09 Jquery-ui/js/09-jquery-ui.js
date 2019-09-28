'use strict'

$(document).ready(function(){
    // Método draggable - Mover elemento por la página
    $(".elemento").draggable();

    //Redimencionar
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista").selectable();

    //Ordenar elementos y detectar el cambio para guardarlos
    $(".lista").sortable({
        update: function(event, ui){
            console.log("Se ha cambiado ")
        }
    });

    // PARA DAR EFECTOS --  $(".clase").toggle("fade");

    //USAR TOOLTIPS
    $(document).tooltip();

    // Usar popup o cuadros de texto
    $("#popup").dialog();

    //Agregar un calendario
    $("#calendario").datepicker();

    //Agregar tabs
    $("#pestanas").tabs();

});    