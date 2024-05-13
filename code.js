// Write computerChoice() to choose rock paper or scissors randomly and return that value

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];  
    return cpuSelection; 
}
// Write humanChoice() which will prompt the user for their choice, make sure the value is case-insensitive and return it

function humanChoice() {
    humanSelection = prompt("Choose your play!");
    humanSelection = humanSelection.toLowerCase();
    if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
        return humanSelection
    }
    else {
        alert(`${humanSelection} is not a valid option!\nPlease enter one of the following options: Rock, Paper, Scissors`)
        humanChoice()
    }

}
// Keep player's scores in a variable that increments based on the winner every round

let humanScore = 0;
let cpuScore = 0; 
// Write playRound() which takes the values from humanChoice and computerChoice as parameters and evaluate the winner of the round thus incrementing
// score variable by 1
function playRound(humanSelection, cpuSelection) {

    cpuSelection = computerChoice()
    humanSelection = humanChoice()

    if (humanSelection === cpuSelection) {
        console.log("It's a tie!");
    }
    else {
        switch(humanSelection) {
            case "rock":
                if (cpuSelection === "paper"){
                    console.log("Paper beats Rock, you lose!");
                    cpuScore++;
                }
                else {
                    console.log("Rock beats Scissors, you win!");
                    humanScore++;
                }
                break;
            case "paper":
                if (cpuSelection === "scissors"){
                    console.log("Scissors beats Paper, you lose!");
                    cpuScore++;
                }
                else {
                    console.log("Paper beats Rock, you win!");
                    humanScore++;
                }
                break;
            case "scissors":
                if (cpuSelection === "rock"){
                    console.log("Rock beats Scissors, you lose!");
                    cpuScore++;
                }
                else {
                    console.log("Scissors beats Paper, you win!");
                    humanScore++;
                }
                break;
                
        }
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