$(document).ready(function() {
    $(".category").on( "click", function() {
        $( this ).next().toggle();
      });
});