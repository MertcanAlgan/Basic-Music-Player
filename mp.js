// Değişkenler

// Kontroller 
var last = document.querySelector(".last");
var next = document.querySelector(".next");
var like = document.querySelector(".addLike");
// Müzik Kısmı
var music = document.querySelector(".player");

// Müzik bilgileri
var resimler = [
    "img/cover.jpg",
    "img/damn.jpg",
    "img/thestrokes.jpeg"
];
var mevcutResim = 0;

var ses = [
    "music/sacrifice.mp3",
    "music/loyalty.mp3",
    "music/strokes.mp3"
]
var mevcutSes = 0;

var sarkiAdi = [
    "Sacrifice",
    "LOYALTY.",
    "Ode To The Mets"
];
var mevcutSarki = 0;

var isim = [
    "The Weeknd",
    "Kendrick Lamar",
    "The Strokes"
];
var mevcutIsim = 0;

var fav = [
    "black",
    "red"
];
var favMı = 0;


// Fonksiyon Kısmı
function oynat() {
    var audio = document.getElementById("muzik");
    var stop = document.querySelector(".fa-solid fa-play");
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
    
};

function sonraki() {
    var audio = document.getElementById("muzik");
    var albumArt = document.querySelector(".albumArt");
    var sarki = document.querySelector(".songName");
    var artistName = document.querySelector(".artistName");
    var player = document.querySelector("#muzik");
    mevcutSes = mevcutSes + 1;
    mevcutSarki = mevcutSarki + 1;
    mevcutResim = mevcutResim + 1;
    mevcutIsim = mevcutIsim + 1;
    if (mevcutSes >= ses.length && mevcutResim >= resimler.length && mevcutSarki >= sarkiAdi.length && mevcutIsim >= isim.length) {
        mevcutResim = 0;
        mevcutSarki = 0;
        mevcutIsim = 0;
        mevcutSes = 0;
    }
    player.src = ses[mevcutSes];
    albumArt.src = resimler[mevcutResim];
    sarki.innerHTML = sarkiAdi[mevcutSarki];
    artistName.innerHTML = isim[mevcutIsim];
    audio.currentTime = 0;
    audio.play();
};

function onceki() {
    var audio = document.getElementById("muzik");
    var albumArt = document.querySelector(".albumArt");
    var sarki = document.querySelector(".songName");
    var artistName = document.querySelector(".artistName");
    var player = document.querySelector("#muzik");
    mevcutSarki = mevcutSarki - 1;
    mevcutResim = mevcutResim - 1;
    mevcutIsim = mevcutIsim - 1;
    mevcutSes = mevcutSes - 1;
    if (mevcutResim < 0 && mevcutSarki < 0 && mevcutIsim < 0 && mevcutSes < 0) {
        mevcutResim = resimler.length - 1;
        mevcutSarki = sarkiAdi.length - 1;
        mevcutIsim = isim.length - 1;
        mevcutSes = ses.length - 1;
    }
    player.src = ses[mevcutSes];
    albumArt.src = resimler[mevcutResim];
    sarki.innerHTML = sarkiAdi[mevcutSarki];
    artistName.innerHTML = isim[mevcutIsim];
    audio.currentTime = 0;
    audio.play();
};

function begen() {
    var like = document.querySelector(".addLike-black");
    like.classList.toggle("addLike-red");
};