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
  var choice = parseInt(prompt("1. Rock, 2. Paper or 3. Scissors?"));
  if (!(choice in [1, 2, 3])) {
    getPlayerChoice();
  } else {
    console.log(`Player chose ${option[choice]}`);
    return choice - 1;
  }
}

function getResult(a, b) {
  return (3 + a - b) % 3;
}

function playRound(player, computer) {
  let result = getResult(player, computer);
  if (result === 0) {
    console.log("%cTie!", "color: yellow");
    computer = getComputerChoice();
    player = getPlayerChoice();
    return playRound(player, computer);
  } else if (result === 1 || result === 2) {
    console.log("%cYou Win!", "color: green");
    return true;
  } else {
    console.log("%cYou Lost!", "color: red");
    return false;
  }
}

function game() {
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`%cRound ${i + 1}`, "color: lightblue");
    computer = getComputerChoice();
    player = getPlayerChoice();
    if (playRound(player, computer)) playerScore++;
  }
  console.log(playerScore);
}

game();
