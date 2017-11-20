// scrollspy
var bodyheight = $(document).outerHeight(),
    navheight = $('nav.menu').outerHeight();

$('body').css('margin-top', navheight);

$(document).ready(function() {
	bodyheight = $(document).outerHeight() - $(window).innerHeight();

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

		// console.log("Section ID: " + i + " width: " + w + " left: " + p);

		$(".scrollspy-wrapper").append('<div data-go-to="section-' + i + '" class="scrollspy" style="width:'+w+'%; left:'+p+'%">' + title + '</div>');
	});

    navheight = $('nav.menu').outerHeight();

	$(".scrollspy").click(function() {
		var id = $(this).data('go-to');
		$('html, body').animate({
			scrollTop: $('#'+id).offset().top - navheight
		}, 1000);
	});
});

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop(),
		bodyheight = $(document).outerHeight() - $(window).innerHeight(),
        currentTop = ((scrollTop) / (bodyheight)) * 100;

		// console.log("currentTop ( (scrollTop + window.innerHeight) / bodyheight ) * 100: " + currentTop);

    $(".scrollbar").css("width", currentTop+'%');
});
