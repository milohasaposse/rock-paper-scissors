function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 ) + 1;
    switch(choice){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}
/*
function getPlayerChoice(){
    let playerChoice;
    while(playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors"){
        let playerInput = prompt("Enter Rock, Paper, or Scissors");
        if(playerInput !== null){
            playerInput = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
            playerChoice = playerInput;
        }
    }
    return playerChoice;
}  */
const results = document.querySelector(".results")


function playRound(playerSelection, computerSelection){

    console.log(`player = ${playerSelection}`);
    console.log(`cpu = ${computerSelection}`);
    console.log(playerSelection == computerSelection);
 
    let message = "";
    if(playerSelection == computerSelection){
        message = `Tie Game! You both chose ${playerSelection}`;
        //return 0;
    }
    else if( (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
            message = `You Win! ${playerSelection} beats ${computerSelection}!`;
            //return 1;
        }
    else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        //return -1;
    }
    console.log(message);
    results.textContent = message;

}

const buttons = document.querySelectorAll(".player-input");
buttons.forEach(button => button.addEventListener("click", (e)=> playRound(e.target.dataset.play, getComputerChoice())))

/*
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let tiedGames = 0;
    let totalGames = 0;
    while(playerWins < 5 && computerWins < 5){
        const result = playRound(getPlayerChoice(), getComputerChoice());
        totalGames++;
        switch(result){
            case 1: 
                playerWins++;
                break;
            case -1:
                computerWins++;
                break;
            case 0:
                tiedGames++;
                break;            
        }
        console.log(`Player Wins:${playerWins} Computer Wins:${computerWins} Tie Games:${tiedGames}`);
        
    }
    if(playerWins === 5){
        console.log(`You win the match after ${totalGames} games!`);
    } else console.log(`You lose the match after ${totalGames} games.`);
    console.log(`Win percentage: ${Math.floor(playerWins / totalGames * 100)}%`);
}

let wannaPlay = true;
while(wannaPlay){
    game();
    wannaPlay = confirm("Play again?");
}; */