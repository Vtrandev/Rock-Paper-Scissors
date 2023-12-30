const btn = document.querySelectorAll(".btn");

// specific buttons (unneeded)
// const rockButton = document.querySelector(".btn-rock");
// const paperButton = document.querySelector(".btn-paper");
// const scissorButton = document.querySelector(".btn-scissor");

// Text on DOM
const textPlayer = document.querySelector(".para-player");
const textComputer = document.querySelector(".para-computer");
const textResult = document.querySelector(".para-result");
const textScore = document.querySelector(".para-score");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    playRound(playerSelection.toLowerCase(), computerSelection);
    textScore.textContent = `Your score is ${playerScore} and Computer is ${computerScore}`;

    if (playerScore === 5) {
      textScore.textContent = `Player has won! Lets try again!`;
      playerScore = 0;
      computerScore = 0;
    }
    if (computerScore === 5) {
      textScore.textContent = `Computer has won! Lets play again!`;
      playerScore = 0;
      computerScore = 0;
    }
  });
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.ceil(Math.random() * 3);
  switch (choice) {
    case 1:
      return "scissors";
    case 2:
      return "paper";
    default:
      return "rock";
  }
}

function playRound(playerSelection, computerSelection) {
  textPlayer.textContent = "Player chose: " + playerSelection;
  textComputer.textContent = "Computer chose: " + computerSelection;
  if (playerSelection === computerSelection)
    return (textResult.textContent = "It's a tie!");
  else if (playerSelection === "rock") { // Player Rock

    if (computerSelection === "scissors") {
      playerScore++;
      return (textResult.textContent = "You win!");
    } else {
      computerScore++ 
      return textResult.textContent = "You lose :("
    }
  } else if (playerSelection === "paper") { // Player Paper

    if (computerSelection === "rock") {
      playerScore++;
      return (textResult.textContent = "You win!");
    } else {
      computerScore++ 
      return textResult.textContent = "You lose :("
    }

  } else if (playerSelection === "scissors") { // Player Scissor
    if (computerSelection === "paper") {
      playerScore++;
      return (textResult.textContent = "You win!");
    } else {
      computerScore++ 
      return textResult.textContent = "You lose :("
    }
  }
}

// for (let i = 0; i < 5; i++) {
// const playerSelection = prompt();
// const computerSelection = getComputerChoice();
// playRound(playerSelection.toLowerCase(), computerSelection);
// }
