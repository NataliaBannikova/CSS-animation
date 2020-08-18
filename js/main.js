$(function(){

$('.helicopter').hover(
    function(){
        $('.helic-img').addClass('helicopter-on').removeClass('helicopter-off');
    },
    function(){
        $('.helic-img').removeClass('helicopter-on').addClass('helicopter-off');
    }
);


});