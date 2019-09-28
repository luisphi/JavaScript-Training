'use strict'

// Definiendo clases sin typescript
var bicicleta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "disco",
    velocidadMaxima: 60,
    // Ubicando los metodos get and set
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color
    }
};