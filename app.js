$(()=>{

$('.fruitty:odd').css("background-image", "url(https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg)");
$('.fruitty:even').css("background-image", "url(https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg)");

$('#menu').click(function(){
        console.log('menu clicked')
    $('#hidden-nav').toggleClass("open");
});

});