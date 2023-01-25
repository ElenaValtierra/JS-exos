'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');




//  player 0
const currentSoreP0 = document.getElementById('current--0');
console.log(Number(currentSoreP0.textContent), typeof Number(currentSoreP0.textContent));

// How we start the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');





const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
    // switch to next player
    // * Old player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // * New player - switch
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if rolled is 1 (you have to do the most common first)
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore; // ! Change later as we want to make it dynamic depending on player

    } else {
        switchPlayer();
    }

    // while it is player one add to its points else add 
    // currentScorePlayer0
});


btnhold.addEventListener('click', () => {
    // 1. Add current score to the score of the active player's score
    scores[activePlayer] += currentScore;

    // Display score
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // 2. Check if the player's score is >=100

    if (scores[activePlayer] >= 10) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        // Switch to next player
        switchPlayer();
    }


});

// State conditions to continue playing or not

