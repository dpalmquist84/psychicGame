var wins;
var losses;
var current;
var guess;


alert("press a letter to play");

// This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

       // Determines which key was pressed.
        guess = event.key;
        console.log(guess)
    }
