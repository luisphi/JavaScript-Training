$(document).ready (function(){

    // Para la ejecución del slider
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true,
          pager: false
        });
    });

    // Hacer que los post sean dinámicos
    var posts = [
        {
            title: 'Prueba de título 1', date: moment().format('MMMM Do YYYY, h:mm:ss a'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci non diam lobortis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis, elit eu aliquet hendrerit, urna libero molestie diam, sed suscipit nisl lacus quis magna. Ut suscipit in nisi eu consectetur. Praesent eu auctor ante. Quisque accumsan sit amet ante ornare posuere. Donec tincidunt molestie nulla, vitae tristique mauris feugiat vel. Nulla facilisi. In imperdiet vulputate massa, vitae facilisis arcu sodales in. Curabitur at diam ultricies, consequat ipsum ut, venenatis tellus. Donec eu pulvinar leo. Maecenas a tellus id ex elementum gravida at id dui. Donec et malesuada sapien. Donec placerat viverra erat quis porttitor. Vivamus ut ligula vitae mi vulputate placerat at sed ex. Sed diam urna, viverra quis dui vitae, dignissim venenatis libero.'
        },
        {
            title: 'Prueba de título 2', date: moment().format('MMMM Do YYYY, h:mm:ss a'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci non diam lobortis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis, elit eu aliquet hendrerit, urna libero molestie diam, sed suscipit nisl lacus quis magna. Ut suscipit in nisi eu consectetur. Praesent eu auctor ante. Quisque accumsan sit amet ante ornare posuere. Donec tincidunt molestie nulla, vitae tristique mauris feugiat vel. Nulla facilisi. In imperdiet vulputate massa, vitae facilisis arcu sodales in. Curabitur at diam ultricies, consequat ipsum ut, venenatis tellus. Donec eu pulvinar leo. Maecenas a tellus id ex elementum gravida at id dui. Donec et malesuada sapien. Donec placerat viverra erat quis porttitor. Vivamus ut ligula vitae mi vulputate placerat at sed ex. Sed diam urna, viverra quis dui vitae, dignissim venenatis libero.'
        },
        {
            title: 'Prueba de título 3', date: moment().format('MMMM Do YYYY, h:mm:ss a'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci non diam lobortis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis, elit eu aliquet hendrerit, urna libero molestie diam, sed suscipit nisl lacus quis magna. Ut suscipit in nisi eu consectetur. Praesent eu auctor ante. Quisque accumsan sit amet ante ornare posuere. Donec tincidunt molestie nulla, vitae tristique mauris feugiat vel. Nulla facilisi. In imperdiet vulputate massa, vitae facilisis arcu sodales in. Curabitur at diam ultricies, consequat ipsum ut, venenatis tellus. Donec eu pulvinar leo. Maecenas a tellus id ex elementum gravida at id dui. Donec et malesuada sapien. Donec placerat viverra erat quis porttitor. Vivamus ut ligula vitae mi vulputate placerat at sed ex. Sed diam urna, viverra quis dui vitae, dignissim venenatis libero.'
        },
        {
            title: 'Prueba de título 4', date: moment().format('MMMM Do YYYY, h:mm:ss a'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci non diam lobortis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis, elit eu aliquet hendrerit, urna libero molestie diam, sed suscipit nisl lacus quis magna. Ut suscipit in nisi eu consectetur. Praesent eu auctor ante. Quisque accumsan sit amet ante ornare posuere. Donec tincidunt molestie nulla, vitae tristique mauris feugiat vel. Nulla facilisi. In imperdiet vulputate massa, vitae facilisis arcu sodales in. Curabitur at diam ultricies, consequat ipsum ut, venenatis tellus. Donec eu pulvinar leo. Maecenas a tellus id ex elementum gravida at id dui. Donec et malesuada sapien. Donec placerat viverra erat quis porttitor. Vivamus ut ligula vitae mi vulputate placerat at sed ex. Sed diam urna, viverra quis dui vitae, dignissim venenatis libero.'
        }
    ];

    posts.forEach(element => {
        var post = `
            <article class="post">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>${element.content}</p>
                <a class="button-more" href="#">LEER MAS</a>
            </article>
        `;

        $("#posts").append(post);
    });

    /**
     * Como ejercicio: Para cambiar colores, fondos, etc en base de tema - se debe crear varios css y cambiar la importación 
     * de cada estilo ingresando al atributo attr
     */   
    
     //TRABAJO CON EL FORMULARIO DE REGISTRO
     $("#login form").submit(function(){
         var form_name = $("#form_name").val();
         localStorage.setItem("form_name", form_name);
     });

     $("#about p").append("<hr>Bienvenido: " + localStorage.getItem("form_name"));

     /**
      * Para recargar la pantalla se debe usar location.reload()
      */

    //LOGICA PARA QUE SE CARGUE UN RELOJ DE MANERA DINAMICA
     setInterval(() => {
        $("#reloj").html( moment().format('h:mm:ss a') );
     },1000);

    // Para lanzar el pluggin de validacion de formularios
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scroolToTopOnError: true
      });

    // Ubicar calendario con jquery UI
    $('form input[name="fecha"]').datepicker({
        dateFormat: 'dd/mm/yy'
    });
});