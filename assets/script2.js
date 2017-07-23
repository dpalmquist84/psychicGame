$(document).ready(function(){
	console.log("ready");

var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

//computer choses a letter

function game(){

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);	
    $("#wins").html("wins: " + wins);
    $("#losses").html("losses: " + losses);
    $("#guessesLeft").html("Gueses Left: " + guessesLeft);
    $("#guessedLetters").html("Your guessess so far:")
}

game();
//log a user guess

document.onkeyup = function (event) {
  guess = event.key;
  console.log(guess);

//show guess on guess panel
$("#guessedLetters").append(guess + " ");
console.log("guessed " + guess)


//logic
if (guessesLeft == 0){
	losses++;
	$("#losses").html("losses: " + losses)
	
	guessesLeft = 9;
	game();
}
else if(guess === computerGuess){
	wins++;
	console.log(wins)

	$("#wins").html("wins: " + wins);
	$('#guessedLetters').empty();
	game();
} else if (guess != computerGuess){
	guessesLeft--;
	$("#guessesLeft").html("Guesses Left: " + guessesLeft);
	console.log(guessesLeft);
}

}

//reset button;
$("#reset").on("click", function(){
	guessesLeft = 9;
	$("#wins").html("wins: " + wins);
    $("#losses").html("losses: " + losses);
    $("#guessesLeft").html("Gueses Left: " + guessesLeft);
    $("#guessedLetters").html("Your guessess so far:");
    game();


});


});