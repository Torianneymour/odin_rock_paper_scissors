function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "..";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return "You lose! " + playerSelection + " is beaten by " + computerSelection + "..";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        return "You lose! " + playerSelection + " is beaten by " + computerSelection + "..";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
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

let clickedSelection = "";
const selectRock = document.getElementById("rock");
selectRock.addEventListener("click", () => {clickedSelection = "rock"
return game()});
const selectPaper = document.getElementById("paper");
selectPaper.addEventListener("click", () => {clickedSelection = "paper"
return game()});
const selectScissors = document.getElementById("scissors");
selectScissors.addEventListener("click", () => {clickedSelection = "scissors"
return game()});

displayedPlayerScore = document.getElementById("playerscore");
displayedComputerScore = document.getElementById("computerscore");

let playerScore = 0;
let computerScore = 0;

function game(){
 
    let computerSelection = computerPlay();
    console.log("You choose " + clickedSelection)
    console.log("Computer choose " + computerSelection)
    playRound(clickedSelection, computerSelection);

    displayedPlayerScore.innerHTML = playerScore.toString();
    displayedComputerScore.innerHTML = computerScore.toString();

    if  (playerScore >= 5){
        document.getElementById("winstatus").innerHTML = "PLAYER WINS"
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore >= 5){
        document.getElementById("winstatus").innerHTML = "CPU WINS"
        playerScore = 0
        computerScore = 0
    }
    return;
}