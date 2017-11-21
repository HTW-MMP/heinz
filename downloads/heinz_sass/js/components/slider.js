// Slider 
$('.slider').each(function() {
    $(this).children('div').first().addClass('active');
});
$('.toggle-next').click(function() {
    var current = $(this).siblings('div').children('.active');
    current.removeClass('active');
    if (current.next().length) {
        current.next().addClass('active');
    } else {
        $(this).siblings('div').children().first().addClass('active');
    }
});
$('.toggle-prev').click(function() {
    var current = $(this).siblings('div').children('.active');
    current.removeClass('active');
    if (current.prev().length) {
        current.prev().addClass('active');
    } else {
        $(this).siblings('div').children().last().addClass('active');
    }
});
