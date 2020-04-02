// on appelle la date 
const date = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// on convertit la date d'aujourd'hui en français
var dateFormat = date.toLocaleDateString('fr-FR', options);
// on compte le nombre de jours dans un mois
var nbDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
var jourAct = new Date().getDate();
console.log(jourAct);
// on place la date en H1
$('h1').html('<i class="far fa-calendar-alt"> </i> ' + dateFormat)
// on crée le damier suivant le nombre de jour du mois
for (i = 1; i <= nbDays; i++) {
    $('#calendrier').append('<div class="case " id="' + i + '">' + i + '</div>')
    if (i < jourAct) {
        $('#' + i).addClass('jourPast')
    } else if (i == jourAct) {
        $('#' + i).addClass('jourAct ')
    } else $('#' + i).addClass('after ')
};



var infos = [
    { 'titre': "Whatever people say i am, that's what i'm not", 'artiste': "Arctic Monkeys", 'cover': "https://i0.wp.com/www.musiclipse.com/wp-content/uploads/2013/03/arctic-monkeys-whatever-people-say-i-am-thats-what-i-am-not.jpg?resize=550%2C550" },
    { 'titre': "Revolver", 'artiste': "The Beatles", 'cover': "https://images-na.ssl-images-amazon.com/images/I/91ffeWzPNpL._SL1500_.jpg" },
    { 'titre': "The Downward Spiral", 'artiste': "Nine Inch Nails", 'cover': "/Users/thomas/Desktop/calendrier/image/the downward spiral.jpg" },
    { 'titre': "Up The Bracket", 'artiste': "The Libertines", 'cover': "https://images-na.ssl-images-amazon.com/images/I/61xgks6yHZL._SL1000_.jpg" },
    { 'titre': "A Trick Of the Tail", 'artiste': "Genesis", 'cover': "https://i.pinimg.com/originals/65/88/23/6588236faaa6f86a9ba1054418e29fcb.jpg" },
    { 'titre': "Dark Side Of the Moon", 'artiste': "Pink Floyd", 'cover': "https://upload.wikimedia.org/wikipedia/commons/5/59/Optical-dispersion.png" },
    { 'titre': "The Weather", 'artiste': "Pond", 'cover': "https://lesoreillescurieuses.files.wordpress.com/2017/05/pond_the-weather_packshot.jpg" },
    { 'titre': "Sun Structures", 'artiste': "Temples", 'cover': "https://images-na.ssl-images-amazon.com/images/I/81Ry5i9l0EL._SL1500_.jpg" },
    { 'titre': "Prequelle", 'artiste': "Ghost", 'cover': "https://images-na.ssl-images-amazon.com/images/I/81KWwt9-szL._SL1400_.jpg" },
    { 'titre': "Ride The Lightning", 'artiste': "Metallica", 'cover': "https://images-na.ssl-images-amazon.com/images/I/71ClyL3iOxL._SL1417_.jpg" },
    { 'titre': "Rust In Peace", 'artiste': "Megadeth", 'cover': "https://images-na.ssl-images-amazon.com/images/I/71p0e8px-%2BL._SL1200_.jpg" },
    { 'titre': "Demon Days", 'artiste': "Gorillaz", 'cover': "https://images-na.ssl-images-amazon.com/images/I/71M8yXz6o7L._SL1300_.jpg" },
    { 'titre': "Hollywood's Bleeding", 'artiste': "Post Malone", 'cover': "https://media.senscritique.com/media/000018729653/source_big/Hollywood_s_Bleeding.jpg" },
    { 'titre': "The Marshall Mathers LP", 'artiste': "Eminem", 'cover': "https://images-na.ssl-images-amazon.com/images/I/91b1okHqjsL._SL1500_.jpg" },
    { 'titre': "Definitely Maybe", 'artiste': "Oasis", 'cover': "https://images-na.ssl-images-amazon.com/images/I/81ADWG7QUTL._SL1448_.jpg" },
    { 'titre': "Unknown Pleasures", 'artiste': "Joy Division", 'cover': "https://images-na.ssl-images-amazon.com/images/I/812FS2R2v6L._SL1500_.jpg" },
    { 'titre': "An Awesome Wave", 'artiste': "Alt-J", 'cover': "https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/a/n/an-awesome-wave-5050954271716_0.jpg?t=1509794184" },
    { 'titre': "Coal", 'artiste': "Leprous", 'cover': "https://www.eklektik-rock.com/wp-content/uploads/2013/05/leprous-Coal.jpg" },
    { 'titre': "In The Court Of The Crimson King", 'artiste': "King Crimson", 'content': "lorem" },
    { 'titre': "Blonde On Blonde", 'artiste': "Bob Dylan", 'content': "lorem" },
    { 'titre': "Are You Experienced", 'artiste': "Jimi Hendrix", 'content': "lorem" },
    { 'titre': "Toto IV", 'artiste': "Toto", 'content': "lorem" },
    { 'titre': "Visions", 'artiste': "Haken", 'cover': "https://images-na.ssl-images-amazon.com/images/I/71DkIkAv%2B4L._SL1202_.jpg" },
    { 'titre': "", 'artiste': "The Libertine", 'content': "lorem" },
    { 'titre': "A Trick Of the Tail", 'artiste': "Genesis", 'content': "lorem" },
]

$('.jourPast, .jourAct').on('click', function () {
    let tab = $(this).text();
$('img').addClass('unflip');
    if ($(this).hasClass('flip')) {
        // je la retourne (masque)
        $(this).removeClass('flip').addClass('unflip');
    } else {
        // je la dévoile
        $('.flip').removeClass('flip').addClass('unflip');
        $(this).addClass('flip').addClass('unflip');
        $('img').addClass('flip');

    }
    $('#text h2').text(infos[tab - 1]['titre']);
    $('#text h3').text(infos[tab - 1]['artiste']);
    $('#surprise').attr("src", (infos[tab - 1]['cover']));
});
function newFunction(unflip) {
    console.log(unflip);
}

