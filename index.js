const _option = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getRandomInt(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  const choice = getRandomInt(3);
  return choice;
}

function getResult(a, b) {
  return (3 + a - b) % 3;
}

function playRound(playerChoice) {
  computer = getComputerChoice();
  player = playerChoice;
  result = getResult(player, computer);

  if (result === 0) {
    div1.textContent =
      `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

    div.textContent = "Tie!";
  } else if (result === 1) {
    div.textContent = `Player Won! ${_option[player]} beats ${
      _option[computer]
    }`;
    playerScore += 1;
    div1.textContent =
      `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  } else {
    div.textContent = `Player Lost! ${_option[player]} loses to ${
      _option[computer]
    }`;
    computerScore += 1;
    div1.textContent =
      `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  }
}

const div1 = document.createElement("div");
div1.textContent =
  `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
document.querySelector("body").appendChild(div1);
const div = document.createElement("div");
document.querySelector("body").appendChild(div);

const button_rock = document.createElement("button");
button_rock.setAttribute("value", 0);
button_rock.textContent = "Rock";
const button_paper = document.createElement("button");
button_paper.textContent = "Paper";
button_paper.setAttribute("value", 1);
const button_scissors = document.createElement("button");
button_scissors.textContent = "Scissors";
button_scissors.setAttribute("value", 2);
document.querySelector("body").appendChild(button_rock);
document.querySelector("body").appendChild(button_paper);
document.querySelector("body").appendChild(button_scissors);

button_rock.addEventListener("click", () => {
  playRound(0);
});
button_paper.addEventListener("click", () => {
  playRound(1);
});
button_scissors.addEventListener("click", () => {
  playRound(2);
});
