'use strict'

$(document).ready(function(){
    //LOAD
    //$("#datos").load("https://reqres.in/");

    //GET Y POST
    $.get("https://reqres.in/api/users",{page:2}, function(response){
        console.log(response);
        response.data.forEach(element => {
            console.log(element.first_name + " " + element.last_name);
        });
    });

    // RECOGER Y ENVIAR VIA POST UN FORMULARIO
    $("#formulario").submit(function(event){
        //Para que no se dirija a la página de action y se realice mediante ajax
        event.preventDefault();

        // PARA RECOGER UN VALOR DEL FORMULARIO POR EL NOMBRE: $('input[name="nombre"]').val();
        var usuario = {
            first_name: $('input[name="nombre"]'),
            last_name: $('input[name="apellido"]')
        };
        
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        });
        

        //USANDO EL METODO AJAX
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario");
            },
            success: function(){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 2000  //Si se pasa ese timepo se va por error
        });

        // Para que no se vaya a la página de destino
        return false;
    });

});    