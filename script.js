
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

let win = "You win!"
let lose = "You lose..."
let draw = "Draw."


function playRound(playerSelection, computerSelection) {  
    if (playerSelection === "rock" && computerSelection === "scissors") {
        win = "Your rock beats the computer's scissors!"
        return win;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        win = "Your paper beats the computer's rock!"
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        win = "Your scissors beats the computer's paper!"
        return win;
    } else if (playerSelection === computerSelection) {
        return draw;
    } else {
        return lose;
    }
}

let roundResult = '';
let playerSelection = '';
let computerSelection = getComputerChoice();

let playerChoice = document.querySelector('#playerSelection');
playerChoice.addEventListener('click', (event) => {

    let target = event.target;
    switch(target.id) {
        case 'rock':
            playerSelection = 'rock';
            roundResult = playRound(playerSelection, computerSelection);
            break; 
        case 'paper':
            playerSelection = 'paper';
            roundResult = playRound(playerSelection, computerSelection);
            break;
        case 'scissors':
            playerSelection = 'scissors';
            roundResult = playRound(playerSelection, computerSelection);
            break;
        }
        
    let dialogBox = document.querySelector('#dialogBox');
    dialogBox.textContent = `${roundResult}`;
    
    if (roundResult === win) {
        playerScore += 1;
    } else if (roundResult === lose) {
        computerScore += 1;
    }

    if (playerScore === 5) {
        dialogBox.textContent = 'You beat the Computer!'
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        dialogBox.textContent = 'Aww Computer beat you'
        playerScore = 0;
        computerScore = 0;
    }


    let playerScoreDisplay = document.querySelector('#playerScore');
    playerScoreDisplay.textContent = `You: ${playerScore}`;
        
    let compScoreDisplay = document.querySelector('#computerScore');
    compScoreDisplay.textContent = `Computer: ${computerScore}`;

    let playerChoiceDisplay = document.querySelector('#playerChoice');
    playerChoiceDisplay.textContent = `You picked: ${playerSelection}`;

    let compChoiceDisplay = document.querySelector('#computerChoice');
    compChoiceDisplay.textContent = `Computer picked: ${computerSelection}`;
    
});
            



