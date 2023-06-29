let userScore = 0;
let computerScore = 0;

// Computer select from RPS randomly
function getComputerChoice() {
    const computerSelectArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = (computerSelectArray[(Math.floor(Math.random() * computerSelectArray.length))]);
    return computerChoice;
}

// // Get user input
// function getPlayerChoice() {
//     const plyaserInput = prompt("Please enter either Rock, Paper, or Scissors (case-insensitive)", )
//     const playserInputCapitalized = plyaserInput.charAt(0).toUpperCase() + plyaserInput.slice(1).toLowerCase();
//     return playserInputCapitalized;
// }

// RPS compare rule
const RPS = {
    Rock: {weakTo: "Paper", strongTo: "Scissors"},
    Paper: {weakTo: "Scissors", strongTo: "Rock"},
    Scissors: {weakTo: "Rock", strongTo: "Paper"}
}

// Play single round
function playRound(playserSelection, computerSelection) {
    // Display choices
    // console.log("Your choice is " + playserSelection);
    // console.log("Computer choice is " + computerSelection);

    // Comparasion
    if (RPS[playserSelection].strongTo === computerSelection) {
        // console.log(`${playserSelection} beats ${computerSelection}`);
        // console.log(`You Win! Your current score is ${userScore += 1}. Computer 's current score is ${computerScore}`);
        document.getElementById("result").innerHTML = `You Win! ${playserSelection} beats ${computerSelection}.`;
        document.getElementById("playerScore").innerHTML = userScore += 1;
    }else if (RPS[playserSelection].weakTo === computerSelection) {
        // console.log(`${computerSelection} beats ${playserSelection}`);
        // console.log(`You Lose! Your current score is ${userScore}. Computer 's current score is ${computerScore += 1}`);
        document.getElementById("result").innerHTML = `You Lose! ${computerSelection} beats ${playserSelection}.`;
        document.getElementById("computerScore").innerHTML = computerScore += 1;
    }else {
        // console.log("Draw!");
        // console.log(`You Lose! Your current score is ${userScore}. Computer 's current score is ${computerScore}`);
        document.getElementById("result").innerHTML = "Draw Game!"
    }
    return {userScore, computerScore};
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playserSelection = button.id;
    playRound(playserSelection, getComputerChoice());        
    if (userScore == 5) {
        alert("You Win!");
    } else if (computerScore == 5){
        alert("You Lose!");
    }
    });
});









// const rock = document.querySelector("#Rock");
// rock.addEventListener("click", function(e) {
//     const res = (e.target.id);
//     console.log(res);
//     playRound(res, getComputerChoice());
// })


// Play 5 times
// function game(n) {
//     for (let i = 0; i < n; i++) {
//         (playRound(getPlayerChoice(), getComputerChoice()));
//     }
//     if (userScore > computerScore) {
//         console.log("You are winner!");
//     }else if (userScore < computerScore) {
//         console.log("Computer is winner!");
//     }else console.log("Draw Game!");
// }

// game(5);