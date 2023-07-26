function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      return "Draw!";
    } else if (computerSelection == "Paper") {
      return "You Lose!";
    } else if (computerSelection == "Scissors") {
      return "You Win!";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Win!";
    } else if (computerSelection == "Paper") {
      return "Draw!";
    } else if (computerSelection == "Scissors") {
      return "You Lose!";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return "You Lose!";
    } else if (computerSelection == "Paper") {
      return "You Win!";
    } else if (computerSelection == "Scissors") {
      return "Draw!";
    }
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
