$(function(){

$('.helicopter').hover(
    function(){
        $('.helic-img').addClass('helicopter-on').removeClass('helicopter-off');
        $('.helicopter').addClass('animation-on').removeClass('animation-off');
    },
    function(){
        $('.helic-img').removeClass('helicopter-on').addClass('helicopter-off');
        $('.helicopter').removeClass('animation-on').addClass('animation-off');
    }
);


});