// Let computer to select Rock, Paper, and Scissors randomly.

function getComputerChoice() {
    return Math.floor(Math.random() * 3 ) + 1;
}

// Get player input value.
const playserSelectionString = prompt("Please enter either Rock, Paper, or Scissors (case-insensitive)", ).toUpperCase();

// ROCK = 1
// PAPER = 2
// SCISSORS = 3

// Convert user input string to number

function playserSelectionStringtoNumber() {
    let playserSelection;
    if (playserSelectionString == "ROCK") {
        playserSelection = 1;
    }else if (playserSelectionString == "PAPER") {
        playserSelection = 2;
    }else {playserSelection = 3}
    return playserSelection;
}

// Compare the computer select value and user input value.

function playRound(playserSelection, computerSelection) {
    let result;
    if (playserSelection == 3 && computerSelection == 1) {
        result = "You Lose! Rock beats Scissors";
    }else if (playserSelection == 1 && computerSelection == 3) {
        result = "You Win! Rock beats Scissors";
    }else if (playserSelection > computerSelection) {
        result = "You Win!";
    }else if (playserSelection < computerSelection) {
        result = "You Loose!";
    }else {result = "Draw!"
    }
    return result;
}

const playserSelection = playserSelectionStringtoNumber();
console.log(playserSelectionStringtoNumber());

const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playserSelection, computerSelection));

