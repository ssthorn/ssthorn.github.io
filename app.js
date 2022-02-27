





$(document).ready(function(){
  $("li").on({
      mouseover: function(){
          $(this).css("background-color", "rgb(10, 57, 73)");
      },  
     
      mouseleave: function(){
          $(this).css("background-color", "rgb(10, 57, 73)");
      },
     
      mousedown: function(){
          $(this).css("background-color", "#cbf2a8");
      },

      mouseup: function(){
        $(this).css("background-color", "rgb(10, 57, 73)");
      },
});

$("#projects").on("click", function(){
    $(".projects1").toggleClass("projects1-open");
    $(".resume1").removeClass("resume1-open");
    $(".about1").removeClass("about1-open");
    $(".links1").removeClass("links1-open");
});

$("#resume").on("click", function(){
    $(".resume1").toggleClass("resume1-open");
    $(".about1").removeClass("about1-open");
    $(".links1").removeClass("links1-open");
    $(".projects1").removeClass("projects1-open");
});


$("#about").on("click", function(){
    $(".about1").toggleClass("about1-open");
    $(".resume1").removeClass("resume1-open");
    $(".projects1").removeClass("projects1-open");
    $(".links1").removeClass("links1-open");
});


$("#links").on("click", function(){
    $(".links1").toggleClass("links1-open");
    $(".about1").removeClass("about1-open");
    $(".resume1").removeClass("resume1-open");
    $(".projects1").removeClass("projects1-open");
});


});