function getComputerChoice() {
    let computerSelectArray = ["ROCK", "PAPER", "SCISSORS"];
    const computerSelection = (computerSelectArray[(Math.floor(Math.random() * computerSelectArray.length))]);   
    console.log("The computer choice is " + computerSelection);

    let computerNumber;
    if (computerSelection == "ROCK") {
        computerNumber = 1;
    }else if (computerSelection == "PAPER") {
        computerNumber = 2;
    }else {computerNumber = 3}
    return computerNumber;
    }
 

function getPlayerChoice() {
    const plyaserInput = prompt("Please enter either Rock, Paper, or Scissors (case-insensitive)", )
    const plyaserInputUpper = plyaserInput.toUpperCase();
    console.log("Your choice is " + plyaserInput);

    let playerNumber;
    if (plyaserInputUpper == "ROCK") {
        playerNumber = 1;
    }else if (plyaserInputUpper == "PAPER") {
        playerNumber = 2;
    }else {playerNumber = 3}
    return playerNumber;
}

function playRound(playerSelectionNumber , computerSelectionNumber) {
    let Score = 0;
    if (playerSelectionNumber  == 3 && computerSelectionNumber == 1) { 
        console.log("You Lose! Rock beats Scissors");
        Score -= 1;
    }else if (playerSelectionNumber  == 1 && computerSelectionNumber == 3) {
        console.log("You Win! Rock beats Scissors");
        Score += 1;
    }else if (playerSelectionNumber  > computerSelectionNumber) {
        console.log("You Win!" );
        Score += 1;
    }else if (playerSelectionNumber  < computerSelectionNumber) {
        console.log("You Loose!");
        Score -= 1;
    }else {
        console.log("Draw!");
    }
    return Score;
}

let sumScore = playRound(getPlayerChoice() , getComputerChoice())

console.log(sumScore)