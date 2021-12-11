const button = document.querySelectorAll('button');
const result = document.querySelector('.result');

button.forEach((button) => {
    button.addEventListener('click', playRound);
})

function computerPlay() {
    let rollDice = Math.floor(Math.random() * 3)
    return rollDice;
}

function computerSelection() {
    let rollDice = computerPlay();
    if ( rollDice == 0 ) {
        return computerChoice = 'rock';
    } else if ( rollDice == 1) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
}

function playRound (player, computer) {
    player = player.target.textContent.toLowerCase();
    computer = computerSelection();
    switch (true) {
        case (player == 'rock' && computer == 'scissors'):
            result.textContent = "You won! rock beats scissors";
            break;
        case (player == 'rock' && computer == 'paper'):
            result.textContent = "You lost! paper beats rock";
            break;
        case (player == 'rock' && computer == 'rock'):
            result.textContent = "You tied! rock cannot beats rock";
            break;
        case (player == 'paper' && computer == 'scissors'):
            result.textContent = "You lost! scissors beats paper";
            break;
        case (player == 'paper' && computer == 'rock'):
            result.textContent = "You won! paper beats rock";
            break;
        case (player == 'paper' && computer == 'paper'):
            result.textContent = "You tied! paper cannot beat paper";
            break;
        case (player == 'scissors' && computer == 'scissors'):
            result.textContent = "You tied! scissors cannot beat scissors";
            break;
        case (player == 'scissors' && computer == 'paper'):
            result.textContent = "You won! scissors beats paper";
            break;
        case (player == 'scissors' && computer == 'rock'):
            result.textContent = "You lost! scissors cannot beat rock";
            break;
    }
}
