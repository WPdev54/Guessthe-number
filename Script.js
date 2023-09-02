const randomNumber = Math.floor(Math.random() * 30);
const randomNumInput = document.getElementById("random_number");

/* if(randomNumber > 10){
    randomNumber = "0" + randomNumber
} */

// expression Messages
const Messages = document.getElementById("message");

randomNumInput.textContent = randomNumber;

const guessedNumInput = document.getElementById("guessed-Num");
document
  .getElementById("input-value-sender-and-checker")
  .addEventListener("click", function () {
    let guessedNum = guessedNumInput.value;

    if (guessedNum == randomNumber) {
      Messages.innerHTML = `You Have Guessed Correct Number 🥳`;
      randomNumInput.style.display = "none"
      Messages.style.fontSize = "35px"
    }
    if (guessedNum > randomNumber) {
      Messages.innerHTML = `It's High Number 😎 . Try Again`;
    }
    if (guessedNum < randomNumber) {
      Messages.innerHTML = `It's Low Number 😖. Try Again`;
    }
  });
