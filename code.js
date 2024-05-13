// Keep player's scores in a variable that increments based on the winner every round
let humanScore = 0;
let cpuScore = 0; 

const score = document.querySelector("#score")
score.textContent = `${humanScore} - ${cpuScore}`

const cpuText = document.querySelector("#cputext")
const announcement = document.querySelector("#roundwinner")
let atext = ""

const restartBtn = document.querySelector("#restart")
restartBtn.addEventListener("click", () => {
    console.log("clicked")
})

const choiceBtns = document.querySelectorAll(".playerchoice") 
choiceBtns.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent.toLowerCase()
        cpuChoice = computerChoice()
        playRound(humanChoice, cpuChoice)
    });
});
// Write computerChoice() to choose rock paper or scissors randomly and return that value

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];  
    return cpuChoice; 
}

// Write playRound() which takes the values from humanChoice and computerChoice as parameters and evaluate the winner of the round thus incrementing
// score variable by 1
function playRound(humanChoice, cpuChoice) {

    if (humanChoice === cpuChoice) {
        atext = "It's a tie!"
    }
    else {
        switch(humanChoice) {
            case "rock":
                if (cpuChoice === "paper"){
                    atext = "PAPER beats ROCK, you lose!"
                    cpuScore++;
                }
                else {
                    atext = "ROCK beats SCISSORS, you win!"
                    humanScore++;
                }
                break;
            case "paper":
                if (cpuChoice === "scissors"){
                    atext = "SCISSORS beats PAPER, you lose!"
                    cpuScore++;
                }
                else {
                    atext = "PAPER beats ROCK, you win!"
                    humanScore++;
                }
                break;
            case "scissors":
                if (cpuChoice === "rock"){
                    atext = "ROCK beats SCISSORS, you lose!"
                    cpuScore++;
                }
                else {
                    atext = "SCISSORS beats PAPER, you win!";
                    humanScore++;
                }
                break;
                
        }
    }

    score.textContent = `${humanScore} - ${cpuScore}`
    cpuText.textContent = `CPU Chose ${cpuChoice.toUpperCase()}`
    announcement.textContent = `${atext}`

    if (humanScore === 5 || cpuScore === 5) {
        resetGame()
    }
}
// write playGame() which will call playRound() 5 times keep track of the player's scores and returning the winner of the game at the end
function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound()
    }

    if (humanScore > cpuScore) {
        alert(`Player: ${humanScore}\nCPU: ${cpuScore}\nYou Win!`)
    }
    else if (humanScore === cpuScore) {
        alert(`Player: ${humanScore}\nCPU: ${cpuScore}\nIt's a Tie!`)
    }
    else {
        alert(`Player: ${humanScore}\nCPU: ${cpuScore}\nYou Lose!`)
    }
}

// Add resetGame()