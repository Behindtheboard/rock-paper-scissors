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
    if (playSelLowCase === "rock" && computerSelection === "paper") {
        return alert("You win!")
    } else if (playSelLowCase === "paper" && computerSelection === "rock") {
        
    }
    

  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));