$(document).ready(function() {

    //Unite Gallery para la sección de trabajos
    $("#galeria").unitegallery({
    	lightbox_type: "compact",
      tiles_space_between_cols: 20,
    	tiles_type: "nested",
      tile_enable_image_effect:true,
      tile_image_effect_reverse:true,
      theme_enable_preloader: true
    });



    //LOGICA PARA HACER EL SCROLL SUAVE
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 1000);
          return false;
        }
      }
    });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
});

//Funcionalidad ajax para formulario de contacto.
function validarFormulario(){
  var nombre = $('#nombre').val();
  var correo = $('#correo').val();
  var mensaje = $('#mensaje').val();

  if(nombre != null && correo != null && mensaje != null){
    $.ajax({
      url: 'envio_correo.php',
      type: 'POST',
      data: {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
      }
    })
    .done(function(data) {
      if(data == ""){
        alert("Formulario de contacto, enviado exitosamente.");
      }
    })
    .fail(function(data) {
      if(data.status == 500){
        alert("Oops.. Hubo un problema en el envío del formulario. Favor intentar mas tarde.");
      }else{
        if(data.status == 400){
          alert("Oops.. Al parecer hay problemas con el formulario. Contactar WebMaster.");
        }else{
          alert("Oops.. Problema inesperado en envío de formulario. Contactar WebMaster")
        }
      }
    });
  }else{
    alert("Debe ingresar todos los campos del formulario.");
  }


}
