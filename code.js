// Write computerChoice() to choose rock paper or scissors randomly and return that value

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];  
    console.log(cpuSelection)
    return cpuSelection; 
}


// -------------------------------------------------------------------------------------------------------------------------------- //
// Write humanChoice() which will prompt the user for their choice, make sure the value is case-insensitive and return it

function humanChoice() {
    humanSelection = prompt("Choose your play!");
    humanSelection = humanSelection.toLowerCase();
    if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
        console.log(humanSelection)
        return humanSelection
    }
    else {
        alert(`${humanSelection} is not a valid option!\nPlease enter one of the following options: Rock, Paper, Scissors`)
    }

}


// -------------------------------------------------------------------------------------------------------------------------------- //
// Keep player's scores in a variable that increments based on the winner every round




// -------------------------------------------------------------------------------------------------------------------------------- //

// Write playRound() which takes the values from humanChoice and computerChoice as parameters and evaluate the winner of the round thus incrementing
// score variable by 1





// -------------------------------------------------------------------------------------------------------------------------------- //
// write playGame() which will call playRound() 5 times keep track of the player's scores and returning the winner of the game at the end
