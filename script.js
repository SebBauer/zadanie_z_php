'use strict';

$('button').on("click", function(e){
    e.preventDefault();
    const valueType = $('#valueType').val();

    $.ajax({
        type: `GET`,
        url: `script.php`,
        dataType: `json`,
        data: {
            valueType: valueType
        },
        success: function(response){
            $('#result').html(response);
        },
        error: function(xhr){
            console.log(xhr);
        }
    });
});
