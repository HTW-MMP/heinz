$(document).ready(function(){
    $('.table-creator .generate').click(function(){
        if($('#col-count').val() && $('#row-count').val()){
            colCount = $('#col-count').val();
            rowCount = $('#row-count').val();

            $html = [];
            $html.push('<table>');
            for (i = 0; i < rowCount; i++) {
                $html.push('<tr>');
                for (i = 0; i < colCount; i++) {
                    $html.push('<td><input type="number" name="width" placeholder="width"><input type="number" name="height" placeholder="height"></td>');
                }
                $html.push('</tr>');
            }
            $html.push('</table>');

            $('.result').append($html);

            alert(colCount+' '+rowCount);

            tbl  = document.createElement('table');

            for(var i = 0; i < rowCount; i++){
                var tr = tbl.insertRow();
                for(var j = 0; j < colCount; j++){
                    if(i == 2 && j == 1){
                        break;
                    } else {
                        var td = tr.insertCell();
                        td.append('<input type="number" name="width" placeholder="width"><input type="number" name="height" placeholder="height">');
                        td.style.border = '1px solid black';
                        if(i == 1 && j == 1){
                            td.setAttribute('rowSpan', '2');
                        }
                    }
                }
            }
            $('.result').append(tbl);

        } else {
            alert('fill out form');
        }
    });
});
