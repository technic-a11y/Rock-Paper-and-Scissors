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
    return displayDiv();
});

paperBtn.addEventListener ('click', () => {
    const result = playRound ('paper', getComputerChoice());
    console.log (result);
    return displayDiv();
});

scissorsBtn.addEventListener ('click', () => {
    const result = playRound ('scissors', getComputerChoice());
    console.log (result);
    return displayDiv();
});

function checkWinner() {
    for (let i = 0; i < 5; i++) {
        if (humanScore === 5) {
            return ('Congratulations! You are the overall winner!');   
        } else if (computerScore === 5) {
            return ('Sorry, the computer wins this time.');
        } else if (humanScore === 5 && computerScore === 5) {
            return ('The game is a tie!');
        } else {
            return;
        }
}
};

const div = document.querySelector('div');
function displayDiv() {
    div.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        checkWinner();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    const resultMessage = checkWinner();
    if (resultMessage) {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = resultMessage;
        document.body.appendChild(resultDiv);
        resultDiv.appendChild(div);
    }
}
