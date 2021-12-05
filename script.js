function computerPlayer() {
    let rollDice = Math.floor(Math.random() * 3)
    let computerChoice;
    if ( rollDice == 0 ) {
        return computerChoice = 'Rock';
    } else if ( rollDice == 1) {
        return computerChoice = 'Paper';
    } else {
        return computerChoice = 'Scissors';
    }
}

