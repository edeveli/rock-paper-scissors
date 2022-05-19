let playerSelection;
let playerScore = 0;
let computerScore = 0;
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
let choices = [rock, paper, scissors];

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', game);
});

const rockselection = document.querySelector('#rockbtn').addEventListener('click', function() { playerSelection = 'ROCK'})
const paperselection = document.querySelector('#paperbtn').addEventListener('click', function() { playerSelection = 'PAPER'})
const scissorsselection = document.querySelector('#scissorsbtn').addEventListener('click', function() { playerSelection = 'SCISSORS'})

let playerresult = document.querySelector('#playerscore')
let computerresult = document.querySelector('#computerscore')
let announcement = document.querySelector('.announcement')




function computerPlay () {
    return choices[Math.floor(Math.random()*choices.length)];
};

function playRound() {

let computerSelection = computerPlay();

playerresult.textContent = `Player: ${playerScore}`
computerresult.textContent = `Computer: ${computerScore}`

if (playerSelection === computerSelection) {
  
  announcement.textContent = 'It\'s a tie.';

} else if (
  (playerSelection === rock && computerSelection === scissors) ||
  (playerSelection === scissors && computerSelection === paper) ||
  (playerSelection === paper && computerSelection === rock)
) {
  playerScore += 1;
  announcement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  
} else if (
  (computerSelection === rock && playerSelection === scissors) ||
  (computerSelection === scissors && playerSelection === paper) ||
  (computerSelection === paper && playerSelection === rock)
) {
  computerScore += 1;

  announcement.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;

}
return;
};

function game () {
  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  } else playRound();
}

function declareWinner() {
  
  if (playerScore > computerScore) {
    announcement.textContent = 'YOU WON THE GAME!';
  } else {
    announcement.textContent = 'YOU LOST THE GAME!';
  }
}

