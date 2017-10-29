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

    $("#scrollspy").append('<div id="section-' + counter + '" class="scrollspy" style="background: black; left:' + yleft + '%; width:' + ywidth + '%;">1</div>');

    sectionstart[counter] = yleft;
    counter++;
});

$(document).scroll(function(){
    var scrollTop = $(window).scrollTop(),
        currentTop = (100 / bodyheight * (scrollTop + navheight)) + "%";

    $("#scrollbar").css("width", currentTop);
});
