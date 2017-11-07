var sectionstart = [],
    bodyheight = $('body').height(),
    counter = 1,
    navheight = 20;

$('body').css('margin-top', navheight);

$("section").each(function() {
    var y = $(this).offset(),
        yh = $(this).height(),
        yleft = 100 / bodyheight * y.top,
        ywidth = (100 / bodyheight * (y.top + yh)) - yleft;

    if ($(this).children("h1").text() != "") {
        var title = $(this).children("h1:first-child").text();
    } else if ($(this).children("h2").text() != "") {
        var title = $(this).children("h2:first-child").text();
    } else if ($(this).children("h3").text() != "") {
        var title = $(this).children("h3:first-child").text();
    } else if ($(this).children("h4").text() != "") {
        var title = $(this).children("h4:first-child").text();
    } else if ($(this).children("h5").text() != "") {
        var title = $(this).children("h5:first-child").text();
    } else if ($(this).children("h6").text() != "") {
        var title = $(this).children("h6:first-child").text();
    } else {
        var title = "";
    }

    $(".scrollspy-wrapper").append('<div id="section-' + counter + '" class="scrollspy" style="left:' + yleft + '%; width: calc(' + ywidth + '% - 2px);">' + title + '</div>');

    sectionstart[counter] = yleft;
    counter++;
});

$(document).scroll(function() {
    var scrollTop = $(window).scrollTop(),
        currentTop = (100 / bodyheight * (scrollTop + navheight)) + "%";

    $(".scrollbar").css("width", "calc(" + currentTop + " - 2px)");
});

$(".scrollspy").click(function() {

    var i = $(this).attr('id').substr(-1);
    i = i - 1;

    var el = $('section');

    $('html, body').animate({
        scrollTop: $(el[i]).offset().top - 20
    }, 1000);

});
