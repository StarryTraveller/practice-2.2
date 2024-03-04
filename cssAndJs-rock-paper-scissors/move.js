let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
updateScoresElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove == "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "rock") {
      result = "You Lose.";
    }
  } else if (playerMove == "paper") {
    if (computerMove === "scissors") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You Win.";
    }
  } else if (playerMove == "rock") {
    if (computerMove === "scissors") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "rock") {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    score.Wins += 1;
  } else if (result === "You Lose.") {
    score.Losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  } else {
    score.Wew += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoresElement();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML = `You
  <img
    class="move-icon"
    src="../assets-rock-paper-scissor/${playerMove}-emoji.png
"
  />
  <img
    class="move-icon"
    src="../assets-rock-paper-scissor/${computerMove}-emoji.png
"
  />Computer`;
}

function updateScoresElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.Wins}, Losses: ${score.Losses}, Ties ${score.Ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
