'use strict';

// selecting elements
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
console.log(Number(currentSoreP0.textContent),typeof Number(currentSoreP0.textContent));

// How we start the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');




let currentScore = 0;



// Rolling dice functionality
btnRoll.addEventListener('click', ()=>{
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    // 3. Check if rolled is 1 (you have to do the most common first)
    if(dice !== 1){
        // Add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore; // !change later

    }else{
        // switch to next player
    }

    // while it is player one add to its points else add 
    // currentScorePlayer0
});

