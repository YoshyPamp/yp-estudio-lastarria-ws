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
