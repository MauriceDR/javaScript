// const getComputerChoice = ["Rock", "Paper", "Scissor"]

// function random() {
//     let x = getComputerChoice[Math.floor(Math.random()*getComputerChoice.length)];
//     console.log(x)
// }

const decide = ["Rock", "Paper", "Scissor"];
// userInput = prompt("What is your selection?")

const playerSelection = userInput;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
  let choice = decide[Math.floor(Math.random() * decide.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) return playRound;
}
