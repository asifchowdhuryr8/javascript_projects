const playerChoices = document.querySelector('#player-choices');
const winner = document.querySelector('.winner');
const showResult = document.querySelector('#show-result');
let playerChoice = "";


const combinations = {
    'scissors': {
        'paper': 'cuts',
        'lizard': 'decapitates'
    },
    'paper': {
        'rock': 'covers',
        'spock': 'disproves'
    },
    'rock': {
        'lizard': 'crushes',
        'scissors': 'crushes'
    },
    'lizard': {
        'spock': 'poisons',
        'eats': 'paper'
    },
    'spock': {
        'smashes': 'scissors',
        'rock': 'vaporizes'
    }
}


const calculate = function (computer, player) {
    if (combinations[computer][player]) {
        return computer + ' ' + combinations[computer][player] + ' ' + player + '! You lose!';
    } else if (combinations[player][computer]) {
        return player + ' ' + combinations[player][computer] + ' ' + computer + '! You win!';
    }
    return 'The game is draw!';
}


const computerChoice = function () {
    const choice = Math.floor(Math.random() * (15 - 1)) + 1;
    if (choice <= 3) {
        return "rock";
    } else if (choice <= 6) {
        return "paper";
    } else if (choice <= 9) {
        return "scissors";
    } else if (choice <= 12) {
        return "lizard";
    } else {
        return "spock";
    }
}

playerChoices.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-choice')) {
        player = (event.target.dataset.choice);
    }
    const choice = computerChoice();
    const result = calculate(choice, player);
    winner.innerHTML = `
        <div>
        <h3>You have chosen</h3>
        <img src="images/${player}.svg" alt="${player}-image">
        </div>
        <div>
            <h3>Computer has chosen</h3>
            <img src="images/${choice}.svg" alt="${choice}-image">
        </div>
    `;
    showResult.innerHTML = result
});