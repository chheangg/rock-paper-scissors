function computerPlay() {
    let rollDice = Math.floor(Math.random() * 3)
    return rollDice;
}

function playerSelection() {
let choice = prompt("Enter a choice (rock, paper or scissors)");
choice = choice.toLowerCase();
  if ( choice != null || choice != undefined ) {
    if ( choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    } else {
        return playerSelection();
    }
} else {
    alert("Enter again please!");
    return playerSelection();
}
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
    switch (true) {
        case (player == 'rock' && computer == 'scissors'):
            alert("You won! rock beats scissors");
            break;
        case (player == 'rock' && computer == 'paper'):
            alert("You lost! paper beats rock");
            break;
        case (player == 'rock' && computer == 'rock'):
            alert("You tied! rock cannot beats rock");
            break;
        case (player == 'paper' && computer == 'scissors'):
            alert("You lost! scissors beats paper");
            break;
        case (player == 'paper' && computer == 'rock'):
            alert("You won! paper beats rock");
            break;
        case (player == 'paper' && computer == 'paper'):
            alert("You tied! paper cannot beat paper");
            break;
        case (player == 'scissors' && computer == 'scissors'):
            alert("You tied! scissors cannot beat scissors");
            break;
        case (player == 'scissors' && computer == 'paper'):
            alert("You won! scissors beats paper");
            break;
        case (player == 'scissors' && computer == 'rock'):
            alert("You lost! scissors cannot beat rock");
            break;
    }
}

function game() {
    let x = 0;

    while ( x < 5 ) {
    let player = playerSelection();
    let computer = computerSelection();   
    playRound(player,computer);
    x++ 
    }
}

game();