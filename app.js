const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementsByClassName("result");

let playerScore = 0;
let computerScore = 0;
counter = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
};

const playRound = (playerSelection, computerSelection) => {
  result[0].innerText = "";
  counter += 1;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    result[0].innerText = "This round is Tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    result[0].innerText = "You won round: " + playerScore + "/" + counter;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    result[0].innerText =
      "Computer won round: " + computerScore + "/" + counter;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    result[0].innerText = "You won round: " + playerScore + "/" + counter;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    result[0].innerText =
      "Computer won round: " + computerScore + "/" + counter;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    result[0].innerText = "You won round: " + playerScore + "/" + counter;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    result[0].innerText =
      "Computer won round: " + computerScore + "/" + counter;
  }
  if (playerScore >= 5) {
    result[0].innerText = "You Won the game";
    playerScore = 0;
    computerScore = 0;
    counter = 0;
  } else if (computerScore >= 5) {
    result[0].innerText = "You Lost the game";
    computerScore = 0;
    playerScore = 0;
    counter = 0;
  }
};

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
