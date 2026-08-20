// =========================
// GRUNDWERTE
// =========================

let points = 0;


// =========================
// ELEMENTE AUS HTML HOLEN
// =========================

const pointsDisplay = document.getElementById("points");
const feedButton = document.getElementById("feedButton");
const chessButton = document.getElementById("chessButton");
const shopButton = document.getElementById("shopButton");

const character = document.querySelector(".character");
const speech = document.querySelector(".speech");


// =========================
// PUNKTE ANZEIGEN
// =========================

function updatePoints() {
    pointsDisplay.textContent = points;
}


// =========================
// CHARAKTER SPRECHEN LASSEN
// =========================

function characterSpeak(message) {
    speech.textContent = message;
}


// =========================
// FÜTTERN
// =========================

feedButton.addEventListener("click", function() {

    characterSpeak("Mmmh! Das war lecker! 😋");

    character.textContent = "😋";

    setTimeout(function() {
        character.textContent = "🧸";
    }, 1500);

});


// =========================
// SCHACH-SPIELEN BUTTON
// =========================

chessButton.addEventListener("click", function() {

    characterSpeak("Bald spielen wir Schach! ♟️");

});


// =========================
// SHOP BUTTON
// =========================

shopButton.addEventListener("click", function() {

    characterSpeak("Unser Shop kommt bald! 🛍️");

});


// =========================
// START
// =========================

updatePoints();
