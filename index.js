const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const guesses = document.querySelector('.guesses');
const rightResult = document.querySelector('.rightResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const resetParas = document.querySelectorAll('.resultParas p');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    // check parseInt and number later
  let userGuess = Number(guessField.value);
  console.log(userGuess);
  if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';


if (userGuess === randomNumber) {
    rightResult.textContent = 'Congratulations! You got it right!';
    rightResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver();
} else if (guessCount === 10) {
    rightResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
} else {
    rightResult.textContent = 'Wrong!';
    rightResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
        lowOrHigh.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
        lowOrHigh.textContent = 'Last guess was too high!';
    }
}

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.backgroundColor = 'blue';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    // rightResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}


