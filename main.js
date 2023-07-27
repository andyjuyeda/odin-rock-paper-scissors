function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Draw!";
    } else if (computerSelection == "paper") {
      return "You Lose!";
    } else if (computerSelection == "scissors") {
      return "You Win!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You Win!";
    } else if (computerSelection == "paper") {
      return "Draw!";
    } else if (computerSelection == "scissors") {
      return "You Lose!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You Lose!";
    } else if (computerSelection == "paper") {
      return "You Win!";
    } else if (computerSelection == "scissors") {
      return "Draw!";
    }
  }
}


function game(n) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < n; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "You Lose!") {
      computerScore++;
    } else if (result == "You Win!") {
      playerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "You win " + playerScore + " to " + computerScore + "!";
  } else if (playerScore < computerScore) {
    return "You lose " + playerScore + " to " + computerScore + "!";
  } else {
    return "It's a tie! " + playerScore + " to " + computerScore + "!";
  }
}

console.log(game(4));
