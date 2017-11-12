// Video

$('.video').each(function(){
    if($(this).hasClass('mute')){
        var vid =  $(this).children('iframe');
        vid.mute();
    }
});
