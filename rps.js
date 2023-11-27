let score = 0;

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
  console.log("Player chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);
  if (playerSelection === computerSelection) return console.log("It's a tie!");
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      score++;
      return console.log("You win!");
    } else return console.log("You lose :(");
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      score++;
      return console.log("You win!");
    } else return console.log("You lose :(");
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      score++;
      return console.log("You win!");
    } else return console.log("You lose :(");
  }
}

for (let i = 0; i < 5; i++) {
  const playerSelection = prompt();
  const computerSelection = getComputerChoice();
  playRound(playerSelection.toLowerCase(), computerSelection);
}

console.log("Your score is " + score);
