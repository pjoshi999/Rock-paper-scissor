const movingText = document.getElementById("dynamic-text");
setTimeout(() => {
  movingText.innerHTML =
    "Unless you can defeat them in the game of Rock Paper and Scissors..";
}, 7500);

setTimeout(() => {
  movingText.innerHTML = "Do you have what it takes to save Mankind?";
}, 14600);


// Game begins here 
const myArray = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(userChoice, computerChoice) {
  computerChoice = getComputerChoice();
  console.log("user: " + userChoice);
  console.log("comp: " + computerChoice);
  if (userChoice == computerChoice) {
    winner.innerHTML = "Tie";
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    winner.innerHTML = "Paper beats Rock, Computer wins!";
    lose();
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    winner.innerHTML = "Rock beats Scissor, You win!";
    win();
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    winner.innerHTML = "Paper beats Rock, You win!";
    win();
  }
  if (userChoice == "paper" && computerChoice == "scissor") {
    winner.innerHTML = "Scissor beats Paper, Computer wins!";
    lose();
  }
  if (userChoice == "scissor" && computerChoice == "rock") {
    winner.innerHTML = "Rock beats Scissor, Computer wins!";
    lose();
  }
  if (userChoice == "scissor" && computerChoice == "paper") {
    winner.innerHTML = "Scissor beats Paper, You win!";
    win();
  }

  declareWinner();
}

let user = 0;
let comp = 0;
const manScore = document.getElementById("manScore");
const compScore = document.getElementById("compScore");
const winner = document.getElementById("winner");

function win() {
  user++;
  manScore.innerHTML = user;
}
function lose() {
  comp++;
  compScore.innerHTML = comp;
}

function declareWinner() {
  if (user == 5) {
    winner.innerHTML = "Congratulations! You are Winner";
    setTimeout(() => {
      winner.innerHTML = "Would you like to play again?";
    }, 5000);
    user = 0;
    comp = 0;
    manScore.innerHTML = user;
    compScore.innerHTML = comp;
  }

  if (comp == 5) {
    winner.innerHTML = "Aww! You lose. Better luck next time. See ya!";
    user = 0;
    comp = 0;
    manScore.innerHTML = user;
    compScore.innerHTML = comp;
  }
}

function main() {
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissor_div = document.getElementById("s");

  rock_div.addEventListener("click", function () {
    playRound("rock");
  });

  paper_div.addEventListener("click", function () {
    playRound("paper");
  });

  scissor_div.addEventListener("click", function () {
    playRound("scissor");
  });
}
main();
