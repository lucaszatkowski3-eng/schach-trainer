// =========================
// GRUNDWERTE
// =========================

let points = 0;


// =========================
// HTML-ELEMENTE
// =========================

const pointsDisplay = document.getElementById("points");

const feedButton = document.getElementById("feedButton");
const chessButton = document.getElementById("chessButton");
const shopButton = document.getElementById("shopButton");

const character = document.getElementById("character");
const speech = document.querySelector(".speech");


// =========================
// PUNKTE
// =========================

function updatePoints() {
    pointsDisplay.textContent = points;
}


// =========================
// CHARAKTER SPRECHEN
// =========================

function characterSpeak(message) {
    speech.textContent = message;
}


// =========================
// CHARAKTER-ZUSTAND
// =========================

function setCharacterState(state) {

    switch (state) {

        case "normal":
            character.textContent = "🧸";
            break;

        case "happy":
            character.textContent = "😊";
            break;

        case "sad":
            character.textContent = "😢";
            break;

        case "thinking":
            character.textContent = "🤔";
            break;

        case "eating":
            character.textContent = "😋";
            break;

        case "celebrating":
            character.textContent = "🥳";
            break;

        case "sleeping":
            character.textContent = "😴";
            break;

        default:
            character.textContent = "🧸";
    }
}


// =========================
// FÜTTERN
// =========================

feedButton.addEventListener("click", function() {

    setCharacterState("eating");

    characterSpeak("Mmmh! Das war lecker! 😋");

    setTimeout(function() {

        setCharacterState("happy");

        characterSpeak("Danke! 😊");

    }, 1500);

    setTimeout(function() {

        setCharacterState("normal");

    }, 3000);

});


// =========================
// SCHACH
// =========================

chessButton.addEventListener("click", function() {

    setCharacterState("happy");

    characterSpeak("Bald spielen wir Schach! ♟️");

});


// =========================
// SHOP
// =========================

shopButton.addEventListener("click", function() {

    setCharacterState("happy");

    characterSpeak("Unser Shop kommt bald! 🛍️");

});


// =========================
// STARTZUSTAND
// =========================

setCharacterState("normal");

updatePoints();
