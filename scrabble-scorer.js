// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
let choice = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

//Old Scabble Scorer
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = "";

	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in oldPointStructure) {

		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		 }
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log(word);
};

let newPointStructure = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};


// Simple Scorer
function simpleScorer(word) {
   word = word.toUpperCase();
   return word.length;  // Each character scores 1 point
}


// Vowel Bonus Scorer
function vowelBonusScorer(word) {
   word = word.toUpperCase();
   const vowels = "AEIOU";
   let score = 0;
   for (let char of word) {
       score += vowels.includes(char) ? 3 : 1;
   }
   return score;
}

// Scrabble Scorer
let scrabbleScorer;

const scoringAlgorithms = [
   {
       name: "Simple Score",
       description: "Each letter is worth 1 point.",
       scorerFunction: simpleScorer
   },
   {
       name: "Bonus Vowels",
       description: "Vowels are 3 pts, consonants are 1 pt.",
       scorerFunction: vowelBonusScorer
   },
   {
       name: "Scrabble",
       description: "The traditional scoring algorithm.",
       scorerFunction: oldScrabbleScorer
   }
];

function scorerPrompt(choice) {
   choice = parseInt(choice);  // Ensure choice is an integer

   if (choice < 0 || choice >= scoringAlgorithms.length) {
       console.log("Invalid input. Please enter 0, 1, or 2.");
       return null;  // Exit if invalid choice
   }

   // Get the scoring algorithm based on user's choice and apply it
   const selectedAlgorithm = scoringAlgorithms[choice];
   const score = selectedAlgorithm.scorerFunction(word);
   console.log(`Score for '${word}': ${score}`);
}


function transform() {};

function runProgram() {
   scorerPrompt(choice);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
