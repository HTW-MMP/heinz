// scrollspy
var navheight = $('nav.menu').outerHeight(),
	bodyheight;

$('body').css('margin-top', navheight);

$(document).ready(function() {
	navheight = $('nav.menu').outerHeight();
	bodyheight = $(document).outerHeight() - navheight;

	$("section").each(function(i) {
		var offset = $(this).offset().top - navheight,
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

	$(".display-titles .scrollspy").click(function() {
		var id = $(this).data('go-to');
		$('html, body').animate({
			scrollTop: $('#'+id).offset().top - navheight
		}, 1000);
	});
});

var scrollHeight = $('body').prop("scrollHeight");
var windowHeight = $(window).innerHeight();
	body = $(document).outerHeight();

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();

        var currentTop = ((scrollTop / (scrollHeight - (windowHeight - navheight))) * 100) * ((scrollHeight - (windowHeight + navheight)) / bodyheight);

    $(".scrollbar").css("width", currentTop + '%');
});
