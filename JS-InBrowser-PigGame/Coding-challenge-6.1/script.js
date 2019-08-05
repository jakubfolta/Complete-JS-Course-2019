/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
CHALLENGE 6.1
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
*/


var scores, roundScore, activePlayer, gamePlaying, twiceSix, turn, maxPoints, prevScore;

var start = {
    init: function() {
        scores = [0, 0];
        roundScore = 0;
        twiceSix = 0;
        turn = 0;
        activePlayer = 0;
        gamePlaying = true;
        maxPoints = 100;
        prevScore = 0;

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
    }
};

start.init();

document.querySelector('.btn-roll').addEventListener('click', function() { // anonymous function, can be used only here inside addEventListener function
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var currentDOM = currentDOM = document.querySelector('#current-' + activePlayer);
        console.log(dice, prevScore);

        // 2. Display the score
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the score only if rolled number was not one
        switch(true) {
            case dice === 1:
                nextPlayer();
                break;
            case dice === 6 && prevScore === 6: //turn === 2 && twiceSix === 12:
                nextPlayer();
                break;
            case dice !== 1:
                roundScore += dice;
                currentDOM.textContent = roundScore;
        }
        prevScore = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= maxPoints) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.active').classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Reset current score and change player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', start.init);

function nextPlayer() {
    var currentDOM = currentDOM = document.querySelector('#current-' + activePlayer);
    currentDOM.textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    twiceSix = 0;
    turn = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

























