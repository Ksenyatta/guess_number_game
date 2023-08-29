'use strict';

//////Число в шапке страницы
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Функционльный рефакторинг 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const scoreCount = function (score) {
    document.querySelector('.score').textContent = score;
}

let number = document.querySelector('.number');
let body = document.querySelector('body');
let guessInput = document.querySelector('.guess');

///Инпут с угадыванием
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessInput.value)
    console.log(guess);

    //когда инпут пустой
    if (!guess) {
        displayMessage('⛔️ No number!');

        // если угадали число
    } else if (guess === secretNumber) {
        body.style.backgroundColor = '#60b347';
        displayMessage('🎉 Correct Number!');
        number.style.width = '30rem';
        number.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // если ввели БОЛЬШЕ чем нужно
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : ' 📉 Too low!');
            score--;
            scoreCount(score);
        } else {
            displayMessage('😥 You lost the game!');
            document.body.style = 'background-color: red';
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    number.textContent = '?';
    scoreCount(score);
    guessInput.value = '';

    number.style.width = '';
    body.style.backgroundColor = '';
});