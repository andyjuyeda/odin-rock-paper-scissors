function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  // console.log("You chose " + playerSelection);
  // console.log("Computer chose " + computerSelection);
  const container = document.querySelector(".container");
  const playerChoiceDiv = document.createElement("div");
  playerChoiceDiv.textContent = "You chose " + playerSelection;
  container.appendChild(playerChoiceDiv);
  const computerChoiceDiv = document.createElement("div");
  computerChoiceDiv.textContent = "Computer chose " + computerSelection;
  container.appendChild(computerChoiceDiv);
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


const buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;

// Create the score display element outside of the event listener
const resultContainer = document.querySelector(".result");
const container = document.querySelector('.container');
const scoreDisplay = document.createElement("h4");
resultContainer.appendChild(scoreDisplay);

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    // If either score is 5, don't play a new round
    if (playerScore === 5 || computerScore === 5) {
      return;
    }

    const result = playRound(button.value, getComputerChoice());
    const resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    container.appendChild(resultDiv);

    if (result == "You Lose!") {
      computerScore++;
    } else if (result == "You Win!") {
      playerScore++;
    }

    // Update the text content of the existing score display element
    scoreDisplay.textContent =
      "Your Score: " + playerScore + " - " + "Computer Score: " + computerScore;

    // If either score is 5, display a message and stop the game
    if (playerScore === 5) {
      alert("You win the game!");
    } else if (computerScore === 5) {
      alert("Computer wins the game!");
    }
  })
);
