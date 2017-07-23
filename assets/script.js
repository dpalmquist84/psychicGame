//computer choices

var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
var guess;


//the computers guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

//user guesses left

document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft

//user guess

 
    document.onkeyup = function (event) {
        window.guess = event.key;
        guessesLeft = 9;
         window.guessesLeft--;
         document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
       
      
 

        

        $("#guessesLetters").appendTo(guess);
          console.log(guess);
        document.querySelector('#guessedLetters').innerHTML = 'Your Guesses so far: ' + guessedLetters;
      }
    //reset the game
    var reset = function(){
        guessesLeft = 9;
        guessedLetters = [];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       console.log(computerGuess);
       guesses();
        
    }




    //Game logic

   function game(){
        if (guessesLeft > 0) {
            if (guess === computerGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "wins: " + wins;
                console.log('wins');
                reset();
            
        }
        else if (computerGuess != guess){
          guessesLeft--;
          game();
        }

        else if (guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            console.log('losses');
            reset();
        }
      }
    }

game();
  //reset button
function reset(){
 
 $("#guessedLetters").empty()
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
 guessLeft = 9;
 
}



