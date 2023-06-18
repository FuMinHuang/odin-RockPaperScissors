// Computer select from RPS randomly
function getComputerChoice() {
    const computerSelectArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = (computerSelectArray[(Math.floor(Math.random() * computerSelectArray.length))]);
    return computerChoice;
}

//Get user input
function getPlayerChoice() {
    const plyaserInput = prompt("Please enter either Rock, Paper, or Scissors (case-insensitive)", )
    const playserInputCapitalized = plyaserInput.charAt(0).toUpperCase() + plyaserInput.slice(1).toLowerCase();
    return playserInputCapitalized;
}

//RPS compare rule
const RPS = {
    Rock: {weakTo: "Paper", strongTo: "Scissors"},
    Paper: {weakTo: "Scissors", strongTo: "Rock"},
    Scissors: {weakTo: "Rock", strongTo: "Paper"}
}

//Play single round
function playRound(playserSelection, computerSelection) {
    console.log("Your choice is " + playserSelection);
    console.log("Computer choice is " + computerSelection);
    if (RPS[playserSelection].strongTo === computerSelection) {
        console.log(`You Win! ${playserSelection} beats ${computerSelection}`);
    }else if (RPS[playserSelection].weakTo === computerSelection) {
        console.log(`You Lose! ${computerSelection} beats ${playserSelection}`);
    }else {
        console.log("Draw!");
    }
}

//Play 5 times
function game() {
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
}

game()