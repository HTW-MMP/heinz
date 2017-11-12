// overlay


// if toggle is clicked, find the corresponding overlay contaienr and toggle the opening class.
$('.toggle').click(function(){
    var ol = $(this).data('toggle-overlay');
    $('#'+ol).toggleClass('open');
    $('body').toggleClass('overlay-open');
    $('body').append('<div class="backdrop"></div>');
});

// close on X
$('.overlay .close').click(function(){
    closeOverlay();
});

// close when clicked outside of element
$('body').on('click', '.backdrop', function(){
    closeOverlay();
});

// close on esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27){
      closeOverlay();
  }
});

function closeOverlay(){
    $('.backdrop').remove();
    $('.overlay').removeClass('open');
    $('body').removeClass('overlay-open');
}

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

// Video

$('.video').each(function(){
    if($(this).hasClass('mute')){
        var vid =  $(this).children('iframe');
        vid.mute();
    }
});

// Back to Top
$('.backtotop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

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

// Navigation 
$('.dropdown ul').hide();
$('.dropdown span').click(function(){
    $(this).next('ul').slideToggle();
});

$('.nav-toggle').click(function(){
    $('.menu > ul').toggleClass('active');
});

//@prepros-prepend overlay.js
//@prepros-prepend slider.js
//@prepros-prepend video.js
//@prepros-prepend backtotop.js
//@prepros-prepend scrollspy.js
//@prepros-prepend nav.js

