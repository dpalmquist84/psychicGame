//computer choices

var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


//the computers guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

//user guesses left

var guesses= function() {
    document.querySelector('#guessesLeft').innerHTML = "guesses Left: " + guessesLeft;
};

//user guess

 
    document.onkeyup = function (event) {
        var guess = event.key;
         guessesLeft--;
         document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
       
        console.log(guess);
        console.log(guessesLeft);

        

        guessedLetters.push(guess);
        document.querySelector('#guessedLetters').innerHTML = 'Your Guesses so far: ' + guessedLetters;
    //reset the game
    var reset = function(){
        guessesLeft = 9;
        guessedLetters = ' ';


       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       console.log(computerGuess);

        guesses();
        
    }




    //Game logic
    
        if (guessesLeft > 0) {
            if (guess === computerGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "wins: " + wins;
                alert('you a genius');
                console.log('wins');
                reset();
            
        }
        else if(guessesLeft == 0)
            losses++;

            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert('try again');
            console.log('losses');

            reset();
  }

  //reset button
   //document.querySelector(".reset").onClick = reset();


  //reset button
   var resetGame;

   resetGame = document.querySelector(".btn").onClick = reset();
};


