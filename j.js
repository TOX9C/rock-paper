const humanUi = document.querySelector("#humanChoice");
const computerUi = document.querySelector("#computerChoice");
let humanScore = 0;
let computerScore = 0;
choices = ["rock", "paper", "scissors"];

function changeUi(choice, ui) {
  switch (choice) {
    case "rock":
      ui.textContent = "🪨";
      break;
    case "paper":
      ui.textContent = "📃";
      break;
    case "scissors":
      ui.textContent = "✂︎";
      break;
    default:
      break;
  }
}
function showChoiceBox() {
  document
    .querySelectorAll(".hidden")
    .forEach((el) => el.classList.add("show"));
}
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
function getHumanChoice(txt) {
  let computerChoice = getComputerChoice();
  let humanChoice = txt;
  playRound(humanChoice, computerChoice);
  changeUi(humanChoice, humanUi);
  changeUi(computerChoice, computerUi);
  showChoiceBox();
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
