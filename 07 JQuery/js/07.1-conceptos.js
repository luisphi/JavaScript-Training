'use strict'

$(document).ready(()=>{
    //USANDO FUNCIONES CSS
    $("#rojo").css("background","red").css("color","white");

    //OBTENER UN ARRAY DE TODAS SELECCIONES DE CLASES Y SOLO USAR 1
    console.log( $(".parrafo").eq(1) );

    // PARA BUSCAR SI TIENE UNA CLASE:::    .hasClass()

    // SELECTORES POR ATRIBUTOS, BUSCAR TITLE DE CUALQUIER PARTE DE DOM
    $("[title=apis]").css("color","red");

    //  PARA BUSCAR ETIQUETAS EN UNA SECCION O EN TODO EL DOCUMENTO
    $(document).find("#rojo");
    $(".class").find("#rojo");
});