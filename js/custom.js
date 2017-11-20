$(document).ready(function(){
    $('.menu .toc ul').unwrap();

    $('pre code').before('<span class="copy-code">Copy To Clipboard</span>');

    $('.copy-code').click(function() {
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($(this).next('code').text()).select();
        document.execCommand("copy");
        temp.remove();
        alert('Code was copied to clipboard');
    });

    $('.toggle-code').click(function() {
        $(this).toggleClass('off');
        $('pre').toggle();
    });
});
