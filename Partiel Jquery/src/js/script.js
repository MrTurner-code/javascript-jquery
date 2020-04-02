$(document).ready(function () {
    var color = {
        "1": "red",
        "2": "green",
        "3": "blue"
    }

    $('body').html('<input type="checkbox" id="red" checked ><label>Rouge</label><input type="checkbox" id="green"  checked ><label>Vert</label><input type="checkbox" id="blue" checked  ><label>Bleu</label> <div id="container"></div>');

    for (i = 0; i < 12; i++) {
        var alea = Math.floor((Math.random() * 3) + 1)
        $('#container').append('<div class="case ' + color[alea] + '"></div>')
    }
    $('input[id=red]').on('click', function () {
        if ($('input[id=red]').is(':checked')) {
            $('.red').removeClass('hidden')
        } else {
            $('.red').addClass('hidden')
        }
    });
    $('input[id=green]').on('click', function () {
        if ($('input[id=green]').is(':checked')) {
            $('.green').removeClass('hidden')
        } else {
            $('.green').addClass('hidden')
        }
    });
    $('input[id=blue]').on('click', function () {
        if ($('input[id=blue]').is(':checked')) {
            $('.blue').removeClass('hidden')
        } else {
            $('.blue').addClass('hidden')
        }
    });



});










