const humanUi = document.querySelector("#humanChoice");
const computerUi = document.querySelector("#computerChoice");
const humanCounter = document.querySelector("#humanCounter");
const computerCounter = document.querySelector("#computerCounter");
const resultUi = document.querySelector("#result");
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
        resultUi.textContent = "You Drew";
        resultUi.style.color = "#666666";
        break;
      case "paper":
        resultUi.textContent = "You Won";
        resultUi.style.color = "#33CC33";
        humanScore += 1;
        break;
      case "scissors":
        resultUi.textContent = "You Lost";
        resultUi.style.color = "#FF0000";
        computerScore += 1;
        break;
    }
  } else if (computerChoice == "paper") {
    switch (humanChoice) {
      case "rock":
        resultUi.textContent = "You Lost";
        resultUi.style.color = "#FF0000";
        computerScore += 1;
        break;
      case "paper":
        resultUi.textContent = "You Drew";
        resultUi.style.color = "#666666";
        break;
      case "scissors":
        resultUi.textContent = "You Won";
        resultUi.style.color = "#33CC33";
        humanScore += 1;
        break;
    }
  } else if (computerChoice == "scissors") {
    switch (humanChoice) {
      case "rock":
        resultUi.textContent = "You Won";
        resultUi.style.color = "#33cc33";
        computerScore += 1;
        break;
      case "paper":
        resultUi.textContent = "You Lost";
        resultUi.style.color = "#ff0000";
        humanScore += 1;
        break;
      case "scissors":
        resultUi.textContent = "You Drew";
        resultUi.style.color = "#666666";
        break;
    }
  }
  humanCounter.textContent = "You'r Score: " + humanScore;
  computerCounter.textContent = "Computer's Score: " + computerScore;
}
