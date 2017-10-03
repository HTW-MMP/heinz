$('.toggle').click(function(){
    var ol = $(this).data('toggle-overlay');
    $('#'+ol).toggleClass('open');
    $('body').toggleClass('overlay-open');$
});

// close on X
$('.overlay .close').click(function(){
    closeOverlay();
});

// close on esc
$(document).keyup(function(e) {
  if (e.keyCode === 27){
      closeOverlay();
  }
});

function closeOverlay(){
    $('.overlay').removeClass('open');
    $('body').removeClass('overlay-open');
}
