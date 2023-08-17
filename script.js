const remainingGuessesElement = document.getElementById("remaining-guesses");
const scoreElement = document.getElementById("score");
const previousRollElement = document.getElementById("previous-roll");
const guessInput = document.getElementById("guess");
const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");

let remainingGuesses = 3;
let score = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore() {
  scoreElement.textContent = score;
}

function updateRemainingGuesses() {
  remainingGuessesElement.textContent = remainingGuesses;
}

function resetGame() {
  remainingGuesses = 3;
  score = 0;
  guessInput.value = "";
  updateScore();
  updateRemainingGuesses();
  previousRollElement.textContent = "-";
}

rollButton.addEventListener("click", () => {
  if (remainingGuesses > 0) {
    const guess = parseInt(guessInput.value);
    const roll = rollDice();
    previousRollElement.textContent = roll;

    if (guess === roll) {
      score++;
      updateScore();
    }

    remainingGuesses--;
    updateRemainingGuesses();

    if (remainingGuesses === 0) {
      alert(`Game Over. Your final score is ${score}`);
    }
  }
});

resetButton.addEventListener("click", resetGame);

resetGame();
