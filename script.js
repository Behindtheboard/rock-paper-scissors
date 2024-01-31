function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 9);
    let randNumToThree = randInt % 3;
    if (randNumToThree === 0) {
        const computerChoice = "rock"
        return computerChoice 
    } else if (randNumToThree === 1) {
        const computerChoice = "paper"
        return computerChoice
    } else if (randNumToThree === 2) {
        const computerChoice = "scissors"
        return computerChoice
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelLowCase = playerSelection.toLowerCase();
    let singleRoundScore = `You: ${playerSelLowCase}. Computer: ${computerSelection}.`
    
    if (playerSelLowCase === "rock" && computerSelection === "scissors") {
        return alert(`${singleRoundScore}. You win!`)
    } else if (playerSelLowCase === "paper" && computerSelection === "rock") {
        return alert(`${singleRoundScore}. You win!`)
    } else if (playerSelLowCase === "scissor" && computerSelection === "paper") {
        return alert(`${singleRoundScore}. You win!`)
    } else if (playerSelLowCase === computerSelection) {
        return alert(`${singleRoundScore}. Draw!`)
    } else {
        return alert(`${singleRoundScore}. You Lose...`)
    }
  }
  
  const playerSelection = prompt("rock, paper, or scissors?");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));