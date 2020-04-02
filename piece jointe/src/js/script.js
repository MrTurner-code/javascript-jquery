/*let mot = $('li').last().text();
let last = parseInt(mot.substring(mot.length - 1));
var nouveauCar = last + 1;

$('#lire-mot').on('click', function () {
    $('ul').append('<li><a href="#">Item ' + nouveauCar + '</a></li>');
    nouveauCar ++;
});

/*$("#lire-mot").on("click", function(){
    let mot = $('#mot').text();
    let gth = mot.length - 1;
    let last = mot.substring(gth);
    console.log(last);
});


setInterval(function () {loop()} , 500);
function loop() {
    $('img').hide(500).show(500);
}


$('#text').on('keyup' , function(){
    var nbrCar = $('#text').val().length;
    var res = $('#text').val().split(' ');

    $('#nbrCarac').text(res.length + ' mots/ ' + nbrCar + ' caractères');
});*//*
$('button').on('mousedown', function () {
    $('#password').attr("type", 'text')
    $('button').on('mouseup', function () {
        $('#password').attr("type", 'password');
    });
});*/
/*
var contenu = [
    { 'titre': 'titre 1', 'texte': 'texte 1' },
    { 'titre': 'titre 2', 'texte': 'texte 2' },
    { 'titre': 'titre 3', 'texte': 'texte 3' },]


$('a').on('click', function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    let id = $(this).attr('id');
    $('#contenu h2').text(contenu[id - 1]["titre"]);
    $('#contenu p').text(contenu[id - 1]['texte']);
});*/

cleanForm('textarea, #title,#file');

const expressions = new Array('joint', 'piece', 'document', 'jointe', 'pj');
$('#submit').on('click', function () {
    var file = $('#file').val();
    var motpj = false;
    let text= $('#text').html();
    console.log(text)
    // On récupère ce que l'utilisateur a entré dans le corps du mail
    var texte = $('textarea').val().toLowerCase() + $('#title').val().toLowerCase()
    // On découpe cette chaîne de caractère en mots (dans un tableau)
    var mots = texte.split(' ');
    // Je parcours les expressions
    var i = 0;
    while (i < expressions.length && !motpj) {
        // Si dans mon tableau de mots je vois apparaître une de mes expressions
        
        if (mots.includes(expressions[i])) {
            // Je signale que la présence d'une potentielle PJ est signalé
            motpj = true;
        }
        i++;
    }console.log(motpj + i)
    if (motpj == true && file == "") {
        var confim = confirm("Vous avez mentionner une pj mais aucune pièce jointe n'est attachée");
        if (confim) {
            sendEmail();
        } else {
            displayAlert(".alert-red", "Veuillez ajouter une PJ");
        }
    } else { sendEmail(); }
    console.log(texte);

});
function sendEmail() {
    $('.alert-green').text("Mail envoyé avec succès").show().delay(3000).fadeOut(5000);
    cleanForm('textarea,#title, #file');
}

function displayAlert(selecteur, msgAlert) {
    $(selecteur).text(msgAlert).show().delay(3000).fadeOut(5000);
    cleanForm('textarea,#title, #file');
}
function cleanForm(selecteur) {
    $(selecteur).val("");
}

