$(document).ready( function(){
    var toc = $('#toc');
    var headings = [];
    $('h1, h2, h3').each(function(){
        var h = $(this).text(),
            id = null;

        if($(this).attr('id')){
           id = $(this).attr('id');
        } else{
            id = h.replace(/ /g,'')
            $(this).attr('id', id);
        }
        var l = '<a href="#'+id+'" class="'+$(this).prop("tagName")+'">'+h+'</a>';

        if(!$(this).parent().is('#toc')){
            headings.push(l);
        }
    });

    var list = '<ul class="table-of-contents">';
    for (var i = 0; i < headings.length; i++){
        list += '<li>'+headings[i]+'</li>';
    }
    list += '</ul>';
    toc.append(list);

    console.log(headings);
});
