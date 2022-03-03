$(()=>{

$('.fruitty:odd').css("background-image", "url(https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg)");
$('.fruitty:even').css("background-image", "url(https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg)");
$('#bear').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/a/a9/GrizzlyBearJeanBeaufort.jpg)");
$('#projects').css("background-image", "url(https://scitechdaily.com/images/Goosebumps.jpg");

$('#menu').click(function(){
        console.log('menu clicked')
    $('#hidden-nav').toggleClass("open");
    
});

$('#to-resume').click(function(){
    console.log('to-resume clicked')
$('#resume').toggleClass("open");
$('#about').removeClass("open");
$('#contact').removeClass("open");
$('#links').removeClass("open");

});

$('#to-about').click(function(){
    console.log('to-about clicked')
$('#about').toggleClass("open");
$('#contact').removeClass("open");
$('#links').removeClass("open");
$('#resume').removeClass("open");

});

$('#to-contact').click(function(){
    console.log('to-contact clicked')
$('#contact').toggleClass("open");
$('#links').removeClass("open");
$('#resume').removeClass("open");
$('#about').removeClass("open");
$('html, body').animate({ scrollBottom: 0 }, 'fast');

});

$('#to-links').click(function(){
    console.log('to-links clicked')
$('#links').toggleClass("open");
$('#resume').removeClass("open");
$('#about').removeClass("open");
$('#contact').removeClass("open");

});

$('.fruitty').click(function(){
    $('#links').removeClass("open");
    $('#resume').removeClass("open");
    $('#about').removeClass("open");
    $('#contact').removeClass("open");
    $('#hidden-nav').removeClass("open");
})

$('#nametag').click(function(){
    $('.open').removeClass("open");
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});

$('#footer-card').click(function(){
    $('.open').removeClass("open");
    $('html, body').animate({ scrollTop: 0 }, 'fast');

});

$('#welcome').on({
    mouseover: function(){
        $(this).css("color" , "white")
    },
    mouseleave: function(){
        $(this).css("color" , "orange")
    },
 
    

})


});