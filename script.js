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
    if (playerSelLowCase === "rock" && computerSelection === "scissors") {
        return alert(`${playerSelLowCase} beats ${computerSelection}. You win!`)
    } else if (playerSelLowCase === "paper" && computerSelection === "rock") {
        return alert(`${playerSelLowCase} beats ${computerSelection}. You win!`)
    } else if (playerSelLowCase === "scissor" && computerSelection === "paper") {
        return alert(`${playerSelLowCase} beats ${computerSelection}. You win!`)
    } else if (playerSelLowCase === computerSelection) {
        return alert(`${playerSelLowCase} and ${computerSelection}. Draw!`)
    } else {
        return alert(`${playerSelLowCase} and ${computerSelection}. You Lose...`)
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));