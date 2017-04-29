// Letters for computer to randomly chose from:
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses= 0;
var guesses =9;
var guessedLetters = [];
var letterToGuess = null;

// Equation for random computer letter selection:
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

// Function for user guesses left:
var updateGuessesLeft = function(){

// Setting HTML element Guesses left equal to guessesLeft:
document.querySelector("guessLeft").innerHTML = "Guesses left: " + guessesLeft;
}

//Function to update the letters guessed so far
var updateLetterToGuess = function(){
	this.letterToGuess = this.computerChoices[Mathfloor.(Mathrandom()*this.computerChoices.length)];
}

// Function to display user guesses in a row:
var updateGuesses = function(){
	document.querySelector('#show').innerHTML = "Guessed Letters: " + guessedLetters.join(', ');
}

// Function to reset game after win/loss or refresh:
var reset = function(){
	totalGuesses =9;
	guessesLeft =9;
	guessedLetters =[];
	updateLetterToGuess();
	updateGuessesLeft();
	updateGuesses();
}

// Function to call user's guessed key, and push into guessed key array when key is released:
document.onkeyup = function(event){
	guessLeft--;
	var userGuess = String.fromCharCode(event.keycode).toLowerCase();
	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuesses();
}

// If/Else statement for correct letter guessed, if win display "You are a psychic!"/// If letter is not guessed correctly, display "Your guesses were incorrect, please try again!"

   	if(guessesLeft > 0){
 	if(userGuess == letterToGuess){
 		wins++;
 		document.querySelector("wins").innerHTML = "Wins: " + wins;
 		alert("You are a pyschic!");
 		reset();
 		}
   	}else if(guessesLeft ==0){
   		losses++;
   			document.querySelector("losses").innerHTML = "Losses: " + losses;
   			alert("Your guesses were incorrect, please try again!");
   			reset();
   		}
   	};

   	// Not sure why Code is not working, tried to debug but couldn't find problem. Please let me know if you find!//




