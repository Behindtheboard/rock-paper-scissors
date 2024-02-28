
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 9);
    let randNumToThree = randInt % 3;

    if (randNumToThree === 0) {
        return rock = "rock";
    } else if (randNumToThree === 1) {
        return paper = "paper";
    } else if (randNumToThree === 2) {
        return scissors = "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let roundResult = '';
let win = "You win!"
let lose = "You lose..."
let draw = "Draw."


function playRound(playerSelection, computerSelection) {        
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return win;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return win;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return win;
    } else if (playerSelection === computerSelection) {
        return draw;
    } else {
        return lose;
    }
}

let container = document.querySelector('#container');
let start = document.querySelector('#start');
const rpsButtons = document.querySelector('#rpsButtons');
start.addEventListener('click', () => {
    container.removeChild(start);

    const rockButton = document.createElement('button');
    rockButton.setAttribute('id', 'rockButton');
    rockButton.textContent = 'Rock';
    rpsButtons.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.setAttribute('id', 'paperButton');
    paperButton.textContent = 'Paper';
    rpsButtons.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.setAttribute('id', 'scissorsButton');
    scissorsButton.textContent = 'Scissors';
    rpsButtons.appendChild(scissorsButton);
   
    rpsButtons.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.id) {
            case 'rockButton':
                playerSelection = 'rock';
                computerSelection = getComputerChoice();
                roundResult = playRound(playerSelection, computerSelection);
                break; 
            case 'paperButton':
                playerSelection = 'paper';
                computerSelection = getComputerChoice();
                roundResult = playRound(playerSelection, computerSelection);
                break;
            case 'scissorsButton':
                playerSelection = 'scissors';
                computerSelection = getComputerChoice();
                roundResult = playRound(playerSelection, computerSelection);
                break;
        }
        console.log(roundResult);
        
        if (roundResult === "You win!") {
            playerScore += 1;
        } else if (roundResult === "You lose...") {
            computerScore += 1;
        }

        let dialogBox = document.querySelector('#dialogBox');
        dialogBox.textContent = `${roundResult}`;

        let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
        playerScoreDisplay.textContent = `You: ${playerScore}`;
            
        let compScoreDisplay = document.querySelector('#computerScoreDisplay');
        compScoreDisplay.textContent = `Computer: ${computerScore}`;

        let playerChoiceDisplay = document.querySelector('#playerChoiceDisplay');
        playerChoiceDisplay.textContent = `You: ${playerSelection}`;

        let compChoiceDisplay = document.querySelector('#compChoiceDisplay');
        compChoiceDisplay.textContent = `Computer: ${computerSelection}`;
        
        let choiceDisplay = document.querySelector('#choiceDisplay');

        function reset() {
            rpsButtons.removeChild(rockButton);
            rpsButtons.removeChild(paperButton);
            rpsButtons.removeChild(scissorsButton);
            choiceDisplay.removeChild(playerChoiceDisplay);
            choiceDisplay.removeChild(compChoiceDisplay);
            
            let playAgainBtn = document.createElement('button');
            playAgainBtn.setAttribute('id', 'playAgainBtn');
            playAgainBtn.textContent = 'Play Again?';
            rpsButtons.appendChild(playAgainBtn);
            
            playAgainBtn.addEventListener('click', () => {
                location.reload();
            });
        }

        if (playerScore === 5) {
            reset();
            dialogBox.textContent = 'You beat the Computer!';
        } else if (computerScore === 5) {
            reset();
            dialogBox.textContent = 'Aww you lost to the computer';
        }

    });    
});





