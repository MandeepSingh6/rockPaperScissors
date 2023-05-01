const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Won";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Won";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose";
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const playerChoice = prompt(
      `Choose between Rock, Paper or Scissors ${6 - i} time(s)`
    );
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    if (result === "You Won") {
      playerScore++;
    } else if (result === "You Lose") {
      computerScore++;
    }
  }
  console.log(
    playerScore > computerScore
      ? "You Won"
      : playerScore < computerScore
      ? "You Lose"
      : "Tie"
  );
};

game();
