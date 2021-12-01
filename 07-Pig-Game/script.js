'use strict';
const
    dice = document.querySelector('.dice'),
    btnRoll = document.querySelector('.btn--roll-dice'),
    btnHold = document.querySelector('.btn--hold'),
    player1 = document.querySelector('.player--1'),
    player2 = document.querySelector('.player--2'),
    player1CurrentScore = document.querySelector('#current--1'),
    player2CurrentScore = document.querySelector('#current--2'),
    renderPlayer1TotalScore = document.querySelector('#score--1'),
    renderPlayer2TotalScore = document.querySelector('#score--2'),
    newGame = document.querySelector('.btn--new-game'),
    player1Indicator = document.querySelector('.player--1 .player__indicator'),
    player2Indicator = document.querySelector('.player--2 .player__indicator'),
    playPlayer1 = (state) => player1.classList.contains(state),
    startingNumber = 1,
    endingNumber = 7;
let currentScore = 0, player1TotalScore = 0, player2TotalScore = 0, randomNumber
player1.classList.add('player--active')
player1Indicator.classList.add('player__indicator--active')


function activePlayer(prePlayer, preIndicator, curPlayer, curIndicator) {
    /**
     * Change player state who will roll the dice if one player get 1 as a dice value or wants click hold button to add the total value.
    */
    prePlayer.classList.remove('player--active')
    preIndicator.classList.remove('player__indicator--active')
    curPlayer.classList.add('player--active')
    curIndicator.classList.add('player__indicator--active')
}


function buttonState(state) {
    /**
     *  Disable the game button if any player win the game and enable them again if player wants to start new game.
    */
    if (state) {
        btnRoll.setAttribute('disabled', state)
        btnHold.setAttribute('disabled', state)
    } else {
        btnRoll.removeAttribute('disabled')
        btnHold.removeAttribute('disabled')
    }
}


function switchPlayer() {
    if (!playPlayer1('player--active'))
        activePlayer(player2, player2Indicator, player1, player1Indicator)
    else
        activePlayer(player1, player1Indicator, player2, player2Indicator)
}


function showCurrentScore() {
    if (!playPlayer1('player--active')) player2CurrentScore.innerHTML = currentScore
    else player1CurrentScore.innerHTML = currentScore
}


function checkForWinner(totalScore, renderTotalScore, playerCurrentScore, player) {
    renderTotalScore.innerHTML = totalScore
    currentScore = 0;
    playerCurrentScore.innerHTML = currentScore
    if (totalScore >= 50) {
        player.classList.add('player--winner')
        buttonState(true)
    }
}


function restartGame() {
    currentScore = 0
    player1TotalScore = 0
    player2TotalScore = 0
    dice.src = 'images/dice-1.png';
    player1CurrentScore.innerHTML = currentScore
    player2CurrentScore.innerHTML = currentScore
    renderPlayer1TotalScore.innerHTML = player1TotalScore
    renderPlayer2TotalScore.innerHTML = player2TotalScore

    player1.classList.add('player--active')
    buttonState(false)

    if (playPlayer1('player--winner')) {
        player1.classList.remove('player--winner')
        player2.classList.remove('player--active')
    }
    else {
        player2.classList.remove('player--winner')
        player2.classList.remove('player--active')
    }
}


// roll the dice
btnRoll.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * (endingNumber - startingNumber)) + startingNumber;
    dice.src = `images/dice-${randomNumber}.png`;
    if (randomNumber == 1) {
        currentScore = 0;
        showCurrentScore()
        switchPlayer()
    }
    else {
        currentScore = currentScore + randomNumber;
        showCurrentScore()
    }
})
// hold button
btnHold.addEventListener('click', () => {
    if (!playPlayer1('player--active')) {
        activePlayer(player2, player2Indicator, player1, player1Indicator)
        player2TotalScore = player2TotalScore + currentScore
        checkForWinner(player2TotalScore, renderPlayer2TotalScore, player2CurrentScore, player2)
    } else {
        activePlayer(player1, player1Indicator, player2, player2Indicator)
        player1TotalScore = player1TotalScore + currentScore
        checkForWinner(player1TotalScore, renderPlayer1TotalScore, player1CurrentScore, player1)
    }
})
newGame.addEventListener('click', restartGame)