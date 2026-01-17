Write a functioning code for rock, paper and scisssors game.
create and HTML file with javascript file embedded in body element.
Write a function that provides instruction for output from computer.
Write a function for user input.
Create two variable to track score for both entities.
Write a function playRound() with two parameters.
Write a function playGame for 5 rounds.

Adding User Interface to play the game.
Removing the previous logic
Addition of buttons


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
console.log(playGame(playRound(), 5))

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




