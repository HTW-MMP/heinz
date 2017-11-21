// Navigation
$(document).ready(function(){
    $('.dropdown ul').hide();
});

$(document).click(function() {
	$(".dropdown span").next('ul').slideToggle();
	$(".dropdown span").removeClass('open');
});

$(document).on("click touchend", ".dropdown span, .table-of-contents", function (event) {
    $(this).next('ul').slideToggle();
    $(".dropdown span").addClass('open');
    event.stopPropagation();
});

$('.nav-toggle').click(function(){
    $('.menu ul').toggleClass('active');
});