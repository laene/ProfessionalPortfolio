var lettersArray = ["e", "l", "e", "n", "a", "h", "e", "n", "r", "y"];
var words = ["enabler", "hearken", "kneeler", "yearner", "blarney", "learner", "belayer", "bleaker",
    "breaker", "relearn", "henbane", "bakery", "banker", "barely", "barney", "beaker", "earner", "herbal",
    "keenly", "larker", "nearby", "rarely", "baleen", "banner", "barker", "barrel", "bearer", "enable",
    "harken", "heeler", "hereby", "keblah", "kennel", "nearer", "barley", "barren", "bleary", "keener", "kernel",
    "arena", "baker", "blank", "laker", "barre", "belay", "berry", "brake", "break", "ankle", "array", "balky",
    "beaky", "bleak", "harry", "kneel", "able", "area", "balk", "bare", "beak", "bear", "bray", "kale", "bake",
    "healer", "henley", "lanner", "leaner", "nearly", "reheel", "bane", "bark", "been", "herb", "bale", "bank", "barn",
    "early", "henna", "hyena", "layer", "learn", "leary", "leery", "relay", "renal", "yearn", "bean", "beer", "bran",
    "earl", "earn", "eery", "keel", "hale", "hare", "heal", "hear", "heel", "hark", "bee", "ban", "bye", "err", "ark",
    "here", "lane", "lean", "lear", "leer", "lyre", "nary", "near", "rale", "bar", "bra", "lab", "bay", "elk",
    "real", "reel", "rely", "yarn", "yeah", "year", "by", "be", "rare", "rear", "reer",
    "ale", "any", "are", "aye", "ear", "eel", "era", "ere", "eye", "hay", "hen", "her", "hey",
    "lar", "lay", "lee", "lye", "nah", "nay", "ran", "ray", "rye", "yah", "yar", "yeh", "yen",
    "ah", "an", "ay", "eh", "er", "ha", "la", "ye", "a"]
var wordsUser = words;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var myName = "elenahenry";
var score = 0;
var letter;
var guess = "";
var guessCorrect = false;
var t = 30;
var timer;

function countdown() {
    t = t - 1;
    $("#timer").text(t);
    if (t === 0) {
        clearInterval(seconds);
        gameOver();
    }
}

console.log("test")

function check() {
    for (let i = 0; i < wordsUser.length; i++) {
        if (guess === wordsUser[i]) {
            guessCorrect = true;
            return;
        }
    }
}

function incorrectGuess() {
    $("#gameInstructions").text("Sorry! Try Again!");
    guess = "";
}

function correctGuess() {
    score = score + guess.length;
    $("#score").text(score);
    console.log(score);
    printUserWords();
    removePastGuesses();
    resetGuess();
}

function printUserWords() {
    $("#userWords").append(" " + guess + " ");
}

function removePastGuesses() {
    for (let i = 0; i < wordsUser.length; i++) {
        if (guess === wordsUser[i]) {
            wordsUser.splice(i, 1);
            return;
        }
    }
}

function validate() {
    letter = letter.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (letter == alphabet[i]) {
            guess = guess + letter;
            $("#gameInstructions").text(guess);
            return;
        }
    }
}

function gameOver() {
    $("#timer").text("0");
    $("#gameInstructions").text("Time's up! Want to play again? Y/N");
    onkeyup = function () {
        let answer = event.key;
        if (answer === "y") {
            start();
        } else if (answer === "n") {
            $("#gameInstructions").empty();
            $("#userWords").empty();
            $("#timer").empty();
            $("#score").empty();
            return;
        }
    }

}


function boggleTime() {
    letter = event.key;
    if (letter == "Enter") {
        check();
        if (guessCorrect === true) {
            correctGuess();
        } else {
            incorrectGuess();
        }
    } else if (letter == "Backspace") {
        deleteLetter();
    } else {
        validate();
    }
}

function deleteLetter() {
    let newGuess = "";
    for (let i = 0; i < guess.length - 1; i++) {
        newGuess = newGuess + guess[i];
    }
    guess = newGuess;
    $("#gameInstructions").text(guess);
}

function resetGuess() {
    guess = "";
    guessCorrect = false;
    $("#gameInstructions").empty();
}

function start() {
    $("#gameInstructions").empty();
    $("#userWords").empty();
    $("#timer").empty();
    $("#score").empty();
    score = 0;
    wordsUser = [];
    wordsUser = words;
    t = 30;
    seconds = setInterval(countdown, 1000);
    onkeyup = function () {
        boggleTime();
    }
}

onkeyup = function () {
    start();
}
