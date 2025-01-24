let humanScore = 0, computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const pilihan = getRandomInt(3);
    if (pilihan === 1) return "rock";
    else if (pilihan === 2) return "paper";
    return "scissors";
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        showMessage("It's a draw!", false);
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        showMessage(`You won! ${humanSelection} beats ${computerSelection}.`, true);
        humanScore++;
    } else {
        showMessage(`You lose! ${computerSelection} beats ${humanSelection}.`, false);
        computerScore++;
    }
    updateScore();
}

function showMessage(text, won) {
    const message = document.getElementById('message');
    if(won){
        message.style.backgroundColor = '#def8d7';
        message.style.color = '#1c7220';
        message.style.border = '1px solid #def8d7';
    } else {
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        message.style.border = '1px solid #f5c6cb';
    }
    message.textContent = text;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}

function updateScore() {
    const humanScoreElem = document.getElementById('humanScore');
    const computerScoreElem = document.getElementById('computerScore');
    humanScoreElem.textContent = `Human: ${humanScore}`;
    computerScoreElem.textContent = `Computer: ${computerScore}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector('.Start');
    const putaranForm = document.getElementById('putaranForm');

    const sectionBegin = document.getElementById('Begin');
    const sectionPutaran = document.getElementById('Putaran');
    const sectionPlay = document.getElementById('Play');

    const rockButton = document.querySelector('.Rock');
    const paperButton = document.querySelector('.Paper');
    const scissorsButton = document.querySelector('.Scissors');

    let jumlahPutaran = 0;
    let currentRound = 0;

    startButton.addEventListener('click', () => {
        sectionBegin.style.display = 'none';
        sectionPutaran.style.display = 'block';
    });

    putaranForm.addEventListener('submit', (event) => {
        event.preventDefault();
        jumlahPutaran = parseInt(document.getElementById('putaran').value);
        if (isNaN(jumlahPutaran) || jumlahPutaran <= 0) {
            alert("Please enter a valid number of rounds.");
            return;
        }
        sectionPutaran.style.display = 'none';
        sectionPlay.style.display = 'block';
    });

    function handleHumanChoice(humanChoice) {
        if (currentRound >= jumlahPutaran) {
            showMessage("Game over! Restart to play again.");
            return;
        }

        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        currentRound++;

        if (currentRound >= jumlahPutaran) {
            setTimeout(() => {
                showMessage(`Game over! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
            }, 1000);
        }
    }

    rockButton.addEventListener('click', () => handleHumanChoice("rock"));
    paperButton.addEventListener('click', () => handleHumanChoice("paper"));
    scissorsButton.addEventListener('click', () => handleHumanChoice("scissors"));
});
