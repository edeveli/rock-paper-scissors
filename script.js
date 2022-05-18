let playerScore = 0;
let computerScore = 0;
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
let choices = [rock, paper, scissors];

function computerPlay () {
    return choices[Math.floor(Math.random()*choices.length)];
};

function getPlayerInput () {

    const playerInput = prompt("Type your choice: rock, paper or scissors?");
    const playerUSelection = playerInput.toUpperCase();
    if (playerUSelection === rock ||
        playerUSelection === paper ||
        playerUSelection === scissors) {
    return playerUSelection;
  }
    else {alert("That doesn't make any sense.")};
    
};

function playRound() {

let computerSelection = computerPlay();
let playerSelection = getPlayerInput();

if (playerSelection === computerSelection) {
  
  alert("It's a tie!");
} else if (
  (playerSelection === rock && computerSelection === scissors) ||
  (playerSelection === scissors && computerSelection === paper) ||
  (playerSelection === paper && computerSelection === rock)
) {
  playerScore += 1;
  alert("You win!")
  
} else if (
  (computerSelection === rock && playerSelection === scissors) ||
  (computerSelection === scissors && playerSelection === paper) ||
  (computerSelection === paper && playerSelection === rock)
) {
  computerScore += 1;

  alert("You lose!")}

  console.log(playerScore, computerScore);
  return;
};

function declareWinner() {
  
  if (playerScore > computerScore) {
    alert("You won the game!");
  } else {
  alert("You lost the game.")
  }};

function game () {
 
  for (let i = 0; i < 5; i++) {
  playRound();
}
declareWinner();
};


game();
