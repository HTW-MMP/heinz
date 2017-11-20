// Navigation
$(document).ready(function(){
    $('.dropdown ul').hide();
});

$('.dropdown span').click(function(){
    $(this).next('ul').slideToggle();
    $(this).toggleClass('open');
});

$('.nav-toggle').click(function(){
    $('.menu ul').toggleClass('active');
});
