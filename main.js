function getComputerChoice() {
    let answers = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return answers[choice];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock") {
        if (computerChoice == "paper")
            return ("The computer wins! Paper covers Rock");
        else if (computerChoice == "scissors")
            return ("You win! Rock blunts Scissors");
        else
            return ("It's a draw!")
    }
    if (playerChoice == "paper") {
        if (computerChoice == "paper")
            return ("It's a draw!");
        else if (computerChoice == "scissors")
            return ("The computer wins! Scissors cut Paper");
        else
            return ("You win! Paper covers Rock");
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper")
            return ("You win! Scissors cut Paper");
        else if (computerChoice == "scissors")
            return ("It's a draw!");
        else
            return ("The computer wins! Rock blunts Scissors");
    }
}

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter your choice: ")
    result = playRound(playerChoice, getComputerChoice());
    console.log(`Round ${i + 1}: ${result}`)
}