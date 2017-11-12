// scrollspy
var bodyheight = $(document).outerHeight(),
    navheight = $('nav.menu').outerHeight();

$('body').css('margin-top', navheight);

$("section").each(function(i) {
    var offset = $(this).offset().top,
        height = $(this).outerHeight(),
        p = (offset / bodyheight) * 100,
        w = (height / bodyheight) * 100;

    if ($(this).attr('data-section-title')) {
        var title = $(this).data('section-title');
    } else {
        var title = $(this).children(':header').first().text();
    }

    $(this).attr('id', 'section-'+i);

    $(".scrollspy-wrapper").append('<div data-go-to="section-' + i + '" class="scrollspy" style="width:'+w+'%; left:'+p+'%">' + title + '</div>');
});

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop(),
        currentTop = (100 / bodyheight * (scrollTop - navheight));

    $(".scrollbar").css("width", currentTop+'%');
});

$(".scrollspy").click(function() {
    var id = $(this).data('go-to');
    $('html, body').animate({
        scrollTop: $('#'+id).offset().top - navheight
    }, 1000);
});
