





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
    console.log("projects has been clicked")
    $(".projects1").toggleClass("projects1-open");
});
$("#projects1-close").on("click", function() {
    console.log("close thingy clicked");
    $(".projects1").removeClass("projects1-open");
});

$("#resume").on("click", function(){
    console.log("resume has been clicked")
    $(".resume1").toggleClass("resume1-open");
});
$("#projects1-close").on("click", function() {
    console.log("close thingy clicked");
    $(".resume1").removeClass("resume1-open");
});





});