let humanScore = 0;
let computerScore = 0;
choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
function getHumanChoice(txt) {
  let humanChoice = prompt("chose: rock,paper,scissors");
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    switch (humanChoice) {
      case "rock":
        console.log("draw");
        break;
      case "paper":
        console.log("Win, paper beats rock");
        humanScore += 1;
        break;
      default:
        console.log("Lose, rock bests scissors");
        computerScore += 1;
        break;
    }
  } else if (computerChoice == "paper") {
    switch (humanChoice) {
      case "rock":
        console.log("lose, paper beats rock");
        computerScore += 1;
        break;
      case "paper":
        console.log("draw");
        break;
      default:
        console.log("win, scissors beats paper");
        humanScore += 1;
        break;
    }
  } else {
    switch (humanChoice) {
      case "rock":
        console.log("lose, rock beats scissors");
        computerScore += 1;
        break;
      case "paper":
        console.log("win, scissors beats paper");
        humanScore += 1;
        break;
      default:
        console.log("draw");
        break;
    }
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();

    playRound(humanChoice, computerChoice);
  }
  console.log("your Score is: ", humanScore);
  console.log("Computer Score is: ", computerScore);
}
