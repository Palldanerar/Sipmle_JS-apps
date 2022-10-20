function getRandomIntInclusive(min = 2, max = 11) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let scoreArea = document.querySelector('.score')
let btnGiveCards = document.querySelector('.btn__giveCart')
let btnStopGame = document.querySelector('.btn__stopGame')
let winBlock = document.querySelector('.scoreWin')

let score = 0
let winScore = 0

btnGiveCards.addEventListener('click', () => {
    score += getRandomIntInclusive()
    if (score == 21) {
        scoreArea.innerHTML = `${score}`
        scoreArea.style.color = 'green'
        winScore += 1
        btnGiveCards.setAttribute('disabled', 'true')
        btnStopGame.setAttribute('disabled', 'true')
        setTimeout(() => {
            scoreArea.innerHTML = '0'
            scoreArea.style.color = 'black'  
            score = 0
            winBlock.innerHTML = `Побед подряд: ${winScore}`
            btnGiveCards.removeAttribute('disabled')
            btnStopGame.removeAttribute('disabled')
        }, 1000)
    } else if (score <= 21) {
        scoreArea.innerHTML = `${score}`
    } else {
        scoreArea.innerHTML = `${score}`
        scoreArea.style.color = 'red'
        winScore = 0
        btnGiveCards.setAttribute('disabled', 'true')
        btnStopGame.setAttribute('disabled', 'true')
        setTimeout(() => {
            scoreArea.innerHTML = '0'
            scoreArea.style.color = 'black'  
            score = 0
            winBlock.innerHTML = `Побед подряд: ${winScore}`
            btnGiveCards.removeAttribute('disabled')
            btnStopGame.removeAttribute('disabled')
        }, 1000)
    }
})

btnStopGame.addEventListener('click', () => {
    if ( score >= 19 && score <= 21) {
        scoreArea.style.color = 'green'
        winScore += 1
        btnGiveCards.setAttribute('disabled', 'true')
        btnStopGame.setAttribute('disabled', 'true')
        setTimeout(() => {
            scoreArea.innerHTML = '0'
            scoreArea.style.color = 'black'  
            score = 0
            winBlock.innerHTML = `Побед подряд: ${winScore}`
            btnGiveCards.removeAttribute('disabled')
            btnStopGame.removeAttribute('disabled')
        }, 1000)
    } else {
        scoreArea.style.color = 'red'
        winScore = 0
        btnGiveCards.setAttribute('disabled', 'true')
        btnStopGame.setAttribute('disabled', 'true')
        setTimeout(() => {
            scoreArea.innerHTML = '0'
            scoreArea.style.color = 'black'  
            score = 0
            winBlock.innerHTML = `Побед подряд: ${winScore}`
            btnGiveCards.removeAttribute('disabled')
            btnStopGame.removeAttribute('disabled')
        }, 1000)
    }
})