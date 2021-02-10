function getRandomInt() {
    return Math.ceil(Math.random() * 31)
} 

function cpuChoice() {
    let cChoice = getRandomInt()
    if (cChoice <= 9) {
        document.getElementById('cpuResult').innerHTML = 'Rock'
        return 'rock'  
    } else if (cChoice >= 10 && cChoice <= 20 ) {
        document.getElementById('cpuResult').innerHTML = 'Paper'
        return 'paper'
    } else if (cChoice >= 21) {
        document.getElementById('cpuResult').innerHTML = 'Skissors'
        return 'skissors'
    }
}

function winBox() {
    document.getElementById('result').innerHTML = 'You win!'
}

function loseBox() {
    document.getElementById('result').innerHTML = 'You lose, sucka!'
}

function tieBox() {
    document.getElementById('result').innerHTML = 'You tie. The only way to win is to play again...'
}

function playerChoice(pC) {
    if (pC == cpuChoice()) {
        tieBox()
} else if (pC == 'rock' && cpuChoice() == 'skissors') {
    winBox()
} else if (pC == 'skissors' && cpuChoice() == 'paper') {
    winBox()
} else if (pC == 'paper' && cpuChoice() == 'rock') {
    winBox()
} else {
    loseBox()
}
} 


