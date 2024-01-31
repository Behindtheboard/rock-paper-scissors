function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 9);
    let randNumToThree = randInt % 3;
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"
    if (randNumToThree === 0) {
        return rock;
    } else if (randNumToThree === 1) {
        return paper;
    } else if (randNumToThree === 2) {
        return scissors;
    }
}

function playGame() {
    function playRound(playerSelection, computerSelection) {
        let playerSelLowCase = playerSelection.toLowerCase();
        let win = "You win!"
        let lose = "You lose..."
        let draw = "Draw"
        if (playerSelLowCase === "rock" && computerSelection === "scissors") {
            return win;
        } else if (playerSelLowCase === "paper" && computerSelection === "rock") {
            return win;
        } else if (playerSelLowCase === "scissor" && computerSelection === "paper") {
            return win;
        } else if (playerSelLowCase === computerSelection) {
            return draw;
        } else {
            return lose;
        }
    }
    
    const playerSelection = prompt("rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    let singleRoundPair = `You: ${playerSelection}. Computer: ${computerSelection}.`
    let roundResult = playRound(playerSelection, computerSelection);
    alert(`${singleRoundPair} ${roundResult}`);
}

playGame()