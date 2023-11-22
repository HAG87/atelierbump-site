$(document).ready(function() {
  // roll-up
    $(".category").on( "click", function() {
        $(this).next().toggle();
        $(this).toggleClass("category-up");
      });
});