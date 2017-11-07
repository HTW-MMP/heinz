$('.dropdown ul').hide();
$('.dropdown span').click(function(){
    $(this).next('ul').slideToggle();
});

$('.nav-toggle').click(function(){
    $('.menu > ul').toggleClass('active');
});
