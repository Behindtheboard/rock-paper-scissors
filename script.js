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

let playerSelection = '';

let fullGame = document.querySelector('#choices');
fullGame.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            playerSelection = 'rock';

            break; 
        case 'paper':
            playerSelection = 'paper';

            break;
        case 'scissors':
            playerSelection = 'scissors';

            break;
    }
});


function playGame() {
    let win = "You win!";
    let lose = "You lose...";
    let draw = "Draw.";
    

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
    
    let playerName = 'you';
    let computerSelection = getComputerChoice();
    let singleRoundPair = `${playerName}: ${playerSelection}. Computer: ${computerSelection}.`;
    
    let roundResult = playRound(playerSelection, computerSelection);
    
    if (roundResult === win) {
        playerScore += 1;
    } else if (roundResult === lose) {
        computerScore += 1;
    } else {
    }
    
    let gameScore = `${playerName}: ${playerScore} | Computer: ${computerScore}`;
    
    alert(`${singleRoundPair} ${roundResult}\n\nScore: ${gameScore}`);
    
    if (playerScore > computerScore) {
        alert(`${win} The WHOLE game`);
    } else if (playerScore === computerScore) {
        alert(`You and computer ${draw} The WHOLE game`);
    } else {
        alert(`${lose} The WHOLE game.`);
    }
    
}
    