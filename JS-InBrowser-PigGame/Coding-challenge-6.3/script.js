/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
CHALLENGE 6.3
Change the game to follow these rules:

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer, gamePlaying, maxPoints, prevScore;


var app = {
    init: function() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = false;
        prevScore = 0;

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('.set-goal').classList.remove('hidden');
        document.querySelector('.btn-submit').classList.remove('hidden');

        document.getElementById('input-score').value = '?';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
    },
    restart: function() {
        return 0;
    }
};


// INITIALIZE GAME
app.init();

// ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() { // anonymous function, can be used only here inside addEventListener function
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var secondDice = Math.floor(Math.random() * 6) + 1;
        var currentDOM = document.querySelector('#current-' + activePlayer);
        console.log(dice, secondDice, prevScore);

        // 2. Display the score
        var diceDOM = document.querySelector('.dice');
        var secondDiceDOM = document.querySelector('.second-dice');
        diceDOM.style.display = 'block';
        secondDiceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        secondDiceDOM.src = 'dice-' + secondDice + '.png';

        // 3. Update the score only if rolled number was not one
        switch(true) {
            case dice === 1 || secondDice === 1:
                prevScore = secondDice;
                nextPlayer();
                break;
            case dice === 6 && prevScore === 6:
                scores[activePlayer] = app.restart();
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                prevScore = app.restart();
                nextPlayer();
                break;
            case dice !== 1 && secondDice !== 1:
                roundScore += dice + secondDice;
                prevScore = secondDice;
                currentDOM.textContent = roundScore;
        }
    }
});

// HOLD BUTTON
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
            document.querySelector('.second-dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Reset current score and change player
            prevScore = app.restart();
            nextPlayer();
        }
    }
});


// SET SCORE
document.querySelector('.btn-submit').addEventListener('click', function() {
    if (isNaN(document.getElementById('input-score').value) || document.getElementById('input-score').value === '0') {
        alert('Enter a number bigger than "0" !');
    } else {
        gamePlaying = true;
        maxPoints = document.getElementById('input-score').value;
        document.querySelector('.set-goal').classList.toggle('hidden');
        document.querySelector('.btn-submit').classList.toggle('hidden');
        console.log(maxPoints);
    }
});


// NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', app.init);


// RULES BUTTON
document.querySelector('.btn-rules').addEventListener('click', function() {
    document.querySelector('.rules-box').classList.toggle('hidden');
});


// RULES CLOSE BUTTON
document.querySelector('.btn-close-rules').addEventListener('click', function() {
    document.querySelector('.rules-box').classList.toggle('hidden');
});


function nextPlayer() {
    var currentDOM = document.querySelector('#current-' + activePlayer);
    currentDOM.textContent = 0;
    roundScore = app.restart();
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

































