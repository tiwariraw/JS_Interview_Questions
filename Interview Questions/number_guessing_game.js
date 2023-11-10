/*
    <h3>Number guessing game</h3>
    <h4>Try and guess a random number between 1 and 100</h4>
    <h5>You have 10 attempts to guess the right number</h5>

    <h1>Guess a number</h1>

    <input type="text" id="input">

    <button class="btn">Submit guess</button>

    <div class="result"></div>

    <div>Previous guesses: <span class="guesses"></span></div>
    <div>Guesses Remaining: <span class="remaining"></span></div>
*/

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');

let attempt = 3;
const randomNum = Math.floor((Math.random() * 100) + 1);
const previousGuesses = [];

remaining.innerHTML = attempt;

const checkGuess = () => {

    const userInput = parseInt(document.getElementById('input').value);

    previousGuesses.push(userInput);

    console.log(`num: ${userInput}, randomNumber: ${randomNum}`);

    remaining.innerHTML = --attempt;
    guesses.innerHTML = previousGuesses.join(', ');

    if (userInput === randomNum) {
        result.innerHTML = 'You guessed correctly';
    } else {
        result.innerHTML = 'Try again';
    }
}

btn.addEventListener('click', (event) => {
    if (attempt !== 0) {
        checkGuess();
    } else {
        result.innerHTML = 'You lost.'
    }
})