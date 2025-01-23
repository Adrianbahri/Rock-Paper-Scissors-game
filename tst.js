function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const pilihan = getRandomInt(3);
    if(pilihan == 1) return "rock";
    else if (pilihan == 2)return "paper";
    else return "scissors";
}

function getHumanChoice(){
    return prompt("masukkan pilihan").toLowerCase();
}

let humanScore = 0, computerScore = 0;

function playRound(humanSelection, computerSelection){
    let x = humanSelection, y = computerSelection;
    if(x == "paper"){
        if(y == "scissors"){
            console.log("You lose! scissors beats Paper.");
            computerScore++;
        } else if(y == "rock"){
            console.log("You won! Paper beats Rock.");
            humanScore++;
        } else console.log("draw");
    } else if (x == "rock"){
        if(y == "scissors"){
            console.log("You won! Rock beats Scissors");
            humanScore++;
        } else if(y == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else console.log("draw");
    } else{
        if(y == "paper"){
            console.log("You won! Scissors beats Paper.");
            humanScore++;
        } else if(y == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else console.log("draw");
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore, computerScore); 
}

playGame();