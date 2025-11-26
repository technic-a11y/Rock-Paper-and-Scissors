//First function. Function to get computer choice.
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return 'rock';
    if (randomNum === 1) return 'paper';
    return 'scissors';
}
console.log(getComputerChoice("scissors"));
//Second function. Function to get user choice.
function getUserChoice() {
    let userInput = prompt("Choose rock, paper or scissors:");
    userInput = userInput.toLowerCase().trim();
    if (userInput === null) {
        return null; // User cancelled the prompt
    } else if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Invalid choice. Please choose rock, paper or scissors.");
        return null; // Recursively prompt until valid input
    }
    return userInput;
}
console.log(getUserChoice());
//Create two variables to track scores.
let humanScore = 0;
let computerScore = 0;


//Third function. Function to play a round.
    
function playRound(humanChoice, computerChoice) {
    const humanSelection = getUserChoice(caseInsensitive = false);
    const computerSelection = getComputerChoice();
    if (humanSelection === null) {
        return; // Exit if user input is invalid
    } else if (humanSelection === computerSelection) {
        return "It's a tie!";
    } else if  (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore++;
        return "You win! Rock beats Scissors.";
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore++;
        return "You win! Paper beats Rock.";
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        return "You win! Scissors beats Paper.";
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
}
console.log(playRound(getUserChoice, getComputerChoice));
//Fourth function. Function to play a game of 5 rounds.
function playGame() {
    let round = 5;
    if (round < 5) {
        console.log(playRound());
        round++;
    }
    if (humanScore > computerScore) {
        return "Congratulations! You won the game!";
    } else if (computerScore > humanScore) {
        return "Sorry, you lost the game.";
    } else {
        return "The game is a tie!";
    }
}
console.log(playGame(playRound(), 5));