function getComputerChoice() {
    let answers = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return answers[choice];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase() || playerChoice;
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerCount++;
            return {
                message: "The computer wins! Paper covers Rock",
                playerCount: playerCount,
                computerCount: computerCount
            }
        }
        else if (computerChoice == "scissors") {
            playerCount++;
            return {
                message: "You win! Rock blunts Scissors",
                playerCount: playerCount,
                computerCount: computerCount
            }
        }
        else
            return {
                message: "It's a draw!",
                playerCount: playerCount,
                computerCount: computerCount
            }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "paper")
            return {
                message: "It's a draw!",
                playerCount: playerCount,
                computerCount: computerCount
            };
        else if (computerChoice == "scissors") {
            computerCount++;
            return {
                message: "The computer wins! Scissors cut Paper",
                playerCount: playerCount,
                computerCount: computerCount
            }
        }
        else {
            playerCount++;
            return {
                message: "You win! Paper covers Rock",
                playerCount: playerCount,
                computerCount: computerCount
            }
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            playerCount++;
            return {
                message: "You win! Scissors cut Paper",
                playerCount: playerCount,
                computerCount: computerCount
            };
        }
        else if (computerChoice == "scissors")
            return {
                message: "It's a draw!",
                playerCount: playerCount,
                computerCount: computerCount
            };
        else {
            computerCount++;
            return {
                message: "The computer wins! Rock blunts Scissors",
                playerCount: playerCount,
                computerCount: computerCount
            };
        }
    } else
        return {
            message: `The token ${playerChoice} is not valid.`,
            playerCount: playerCount,
            computerCount: computerCount
        };
}

const displayBox = document.getElementById("display");
const inputBox = document.getElementById("input");
const scoreBox = document.getElementById("score");
let playerCount = 0, computerCount = 0;

inputBox.addEventListener("keydown", (event) => {
    if (event.isComposing) {
        return;
    }
    if (event.key == "Enter") {
        let playerChoice = inputBox.value;
        let result = playRound(playerChoice, getComputerChoice(), playerCount, computerCount);
        let score = `Player: ${String(result.playerCount).padStart(2, "0")} | Computer: ${String(result.computerCount).padStart(2, "0")}`
        scoreBox.innerText = (score)
        displayBox.innerText = (result.message)
        inputBox.value = "";
        return playerChoice
    }
})