$('.toggle').click(function(){
    var ol = $(this).data('toggle-overlay');
    $('#'+ol).toggleClass('open');
    $('body').toggleClass('overlay-open');
});
$('.overlay .close').click(function(){
    $(this).closest('.overlay').removeClass('open');
    $('body').removeClass('overlay-open');
});
