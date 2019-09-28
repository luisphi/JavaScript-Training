'use strict'

$(document).ready(function(){
    reloadList();
    //Capturar lo que tiene un campo y añadirlo a una lista
    $("#add_button").click(function(){
        $("#menu").append( '<li><a href="' + $("#add_link").val() + '"></a></li>'  );
        reloadList();
    });


    function reloadList () {
        //Uso de la funcion en bucle para recorrer en JQuery, each
        console.log( $("a").length )
        $("a").each (function(){
            var enlace = $(this).attr("href");
            $(this).text(enlace);
            $(this).attr("target","_blank")
        });
    }

    // PARA OCULTAR O MOSTRAR SOBRE UN BOTON SE DEBE USAR TOGGLE... $(this).toggle();

    // FUNCIONES PARA REALIZAR ANIMACIONES
    $("#mov_button").click(function(){
        $("#menu").animate({marginLeft: '500px', fontSize: '20px'}, 'slow');
    });
});    