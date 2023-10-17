const option = ["Rock", "Paper", "Scissors"];
const outcome = ["Win", "Tie", "Lost"];

function getRandomInt(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  var choice = getRandomInt(3);
  console.log(`Computer chose ${option[choice]}`);
  return choice;
}

function getPlayerChoice() {
  var choice = parseInt(prompt("0. Rock, 1. Paper or 2. Scissors?"));
  if (!(choice in [0, 1, 2])) {
    getPlayerChoice();
  } else {
    console.log(`Player chose ${option[choice]}`);
    return choice;
  }
}

function playRound(player, computer) {
  let result = player - computer;
  if (result % 3 === 0) {
    console.log("%cTie!", "color: yellow");
    computer = getComputerChoice();
    player = getPlayerChoice();
    playRound(player, computer);
  } else if (result % 3 === 1 || result % 3 === -2) {
    console.log("%cYou Win!", "color: green");
    return 1;
  } else {
    console.log("%cYou Lost!", "color: red");
    return 0;
  }
}

function game() {
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`%cRound ${i + 1}`, "color: lightblue");
    computer = getComputerChoice();
    player = getPlayerChoice();
    playerScore += playRound(player, computer);
  }
  console.log(playerScore);
}

game();
