function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor (Math.random() * 3);
    
    if (randomNumber === 0) {
        return choices[0];
    } else if (randomNumber === 1) {
        return choices[1];
    } else if (randomNumber === 2) {
        return choices[2];
}
};

let humanScore = 0;
let computerScore = 0;

function humanChoice() {
    return; 
}

function playRound (humanChoice, computerChoice) {
    const playerSelection = humanChoice;
    const computerSelection = computerChoice;
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
document.body.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
document.body.appendChild(scissorsBtn);


rockBtn.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    console.log(result);
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
});

paperBtn.addEventListener ('click', () => {
    const result = playRound ('paper', getComputerChoice());
    console.log (result);
    console.log (`Scores -You: ${humanScore}, Computer: ${computerScore}`);
});

scissorsBtn.addEventListener ('click', () => {
    const result = playRound ('scissors', getComputerChoice());
    console.log (result);
    console.log (`Scores -You: ${humanScore}, Computer: ${computerScore}`);
});

function checkWinner() {
    for (let i = 0; i < 5; i++) {
        if (humanScore === 5) {
            console.log ('Congratulations! You are the overall winner!');   
        } else if (computerScore === 5) {
            console.log ('Sorry, the computer wins this time.');
        } else {
            console.log ('The game is a tie!');
        }
}
}
// Try for.each method or maybe individual event listeners for each button?