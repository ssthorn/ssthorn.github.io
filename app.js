





$(document).ready(function(){
  $(".button").on({
   
      mouseleave: function(){
          $(this).css("color", "white");
      },
     
      mousedown: function(){
          $(this).css("color", "#cbf2a8");
      },

      mouseup: function(){
         $(this).css("color", "white");
      },
});

$("#projects").on("click", function(){
    $(".projects1").toggleClass("projects1-open");
    $(".resume1").removeClass("resume1-open");
    $(".about1").removeClass("about1-open");
    $(".links1").removeClass("links1-open");
    $(".contact").removeClass("dot-open");
});

$("#resume").on("click", function(){
    $(".resume1").toggleClass("resume1-open");
    $(".about1").removeClass("about1-open");
    $(".links1").removeClass("links1-open");
    $(".projects1").removeClass("projects1-open");
    $(".contact").removeClass("dot-open");
});


$("#about").on("click", function(){
    $(".about1").toggleClass("about1-open");
    $(".resume1").removeClass("resume1-open");
    $(".projects1").removeClass("projects1-open");
    $(".links1").removeClass("links1-open");
    $(".contact").removeClass("dot-open");
});


$("#links").on("click", function(){
    $(".links1").toggleClass("links1-open");
    $(".about1").removeClass("about1-open");
    $(".resume1").removeClass("resume1-open");
    $(".projects1").removeClass("projects1-open");
    $(".contact").removeClass("dot-open");
});

$("#dot").on({
    mouseup: function(){
        console.log("dot click");
        $(".contact").toggleClass("dot-open");
        $(".links1").removeClass("links1-open");
        $(".about1").removeClass("about1-open");
        $(".resume1").removeClass("resume1-open");
        $(".projects1").removeClass("projects1-open");   
    },
   
});

$(".responsive-header h1").on("click", function(){
    window.location = 'index.html'

})









});