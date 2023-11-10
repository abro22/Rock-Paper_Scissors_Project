

const playerChoice1 = document.getElementById("rockButton")
const playerChoice2 = document.getElementById("paperButton")
const playerChoice3 = document.getElementById("scissorButton")
const hint = document.getElementById("hint")

let computerChoice = Math.floor(Math.random() * 3 + 1)

console.log(computerChoice)

switch (computerChoice) {
    case 1: computerChoice = "rock";
        break;
    case 2: computerChoice = "paper";
        break;
    case 3: computerChoice = "scissors";
        break;
}


function game() {

    if (playerChoice1.checked == true) {
        if (computerChoice == "rock") {
            hint.textContent = "The computer chose rock. It's a Tie!"
        }

        else if (computerChoice == "scissors") {
            hint.textContent = "The computer chose scissors. You win!"
        }

        else if (computerChoice == "paper") {
            hint.textContent = "The computer chose paper. You lose!"
        }
    }

    if (playerChoice2.checked == true && computerChoice == "paper") {
        hint.textContent = "The computer chose paper. It's a tie!"
    } else if (playerChoice2.checked == true && computerChoice == "rock") {
        hint.textContent = "The computer chose rock. You win!"
    } else if (playerChoice2.checked == true && computerChoice == "scissors") {
        hint.textContent = "The computer chose scissors. You lose!"
    }

    if (playerChoice3.checked == true && computerChoice == "scissors") {
        hint.textContent = "The computer chose scissors. It's a Tie!"
    } else if (playerChoice3.checked == true && computerChoice == "paper") {
        hint.textContent = "The computer chose paper. You win!"
    } else if (playerChoice3.checked == true && computerChoice == "rock") {
        hint.textContent = "The computer chose rock. You lose!"
    }
}



