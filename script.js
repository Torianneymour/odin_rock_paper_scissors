function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! " + playerSelection + " is beaten by " + computerSelection + "..";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! " + playerSelection + " is beaten by " + computerSelection + "..";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! " + playerSelection + " is beaten by " + computerSelection + "..";
    }
    else if (playerSelection == computerSelection){
        return "Draw! ";
    }
    else{
        return
    }
}

function computerPlay() {

    const choiceArray = ["rock", "paper", "scissors"]
    const selection = choiceArray[Math.floor(Math.random() * 3)];
    return selection

}

function game(){



    if (roundCount >= 5){

        return
    } 

    else if (roundCount < 5){
        let playerSelection = prompt("Rock, paper or scissors?  Press f12 to see results in console.");
        let computerSelection = computerPlay();
        console.log("You choose " + playerSelection)
        console.log("Computer choose " + computerSelection)
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        roundCount ++;
        return game();
    }

}

let roundCount = 0;
game();