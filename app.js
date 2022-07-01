const computerPlay = () => {
    let selections = ['Rock', 'Paper', 'Scissors']
    return selections[Math.floor(Math.random() * 3)]
}

const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Rock') {
        player.winCount += 1
        return `You win this round! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
    computerSelection === 'Scissors' && playerSelection === 'Paper' ||
    computerSelection === 'Paper' && playerSelection === 'Rock') {
        computer.winCount += 1
        return `You lose this round! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === playerSelection){
        player.tieCount += 1
        return 'You tie with computer this round!'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        player.selection = capFirst(prompt('What is your selection? Rock, Paper, or Scissors'))
        computer.selection = capFirst(computerPlay());
        console.log(playRound(player.selection, computer.selection))
    }
    if (player.winCount > computer.winCount) {
        console.log(`You won ${player.winCount} rounds. Computer won ${computer.winCount} rounds. You tied ${player.tieCount} rounds. You win this game!`)
    } else if (player.winCount < computer.winCount) {
        console.log(`You won ${player.winCount} rounds. Computer won ${computer.winCount} rounds. You tied ${player.tieCount} rounds. You lose this game.`)
    } else {
        console.log(`You won ${player.winCount} rounds. Computer won ${computer.winCount} rounds. You tied ${player.tieCount} rounds. You tie with computer this game.`)
    }
}

const player = {
    'winCount': 0,
    'tieCount': 0
}
const computer = {
    'winCount': 0
}

game()