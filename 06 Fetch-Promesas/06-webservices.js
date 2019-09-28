'use strict'

// Llamada a servicio externo enviando la Authorization
var obj = { 
    method: 'GET', 
    headers: new Headers({
      'Authorization': 'jzquiSOdXc9MPPGYssQ0LK4Ax1GOkqn6LsTAbrpfnn4'
    })
  };    

fetch('https://contifico.com/sistema/api/v1/producto/',obj)
    .then(jsonData => jsonData.json())
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
      console.log(error)
    });

    // USANDO LA ESTRUCTRA TRY CATCH
    try {
      //console.log(luis);
    } catch (error) {
      alert("El error es: " + error);
    }