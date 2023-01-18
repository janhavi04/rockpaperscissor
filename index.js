let playerScore = 0;
let computerScore = 0;
const playerScore_El = document.querySelector(".player-score")
const computerScore_El = document.querySelector(".computer-score")
const scoreBoard = document.querySelector(".score-box")
const result = document.querySelector(".result > p")
const rockBtn = document.getElementById("rckBtn")
const paperBtn = document.getElementById("pprBtn")
const scissorBtn = document.getElementById("scrBtn")
let playerSign = document.querySelector(".playerSign")
let computerSign = document.querySelector(".computerSign")


function getRandomChoice(){
  const choices = [ 'r', 'p' , 's']
  let randomNumber = Math.floor(Math.random()*3)
  return choices[randomNumber];
}  

function playerSignChoice(choice){
  if (choice === "r"){
    return '✊';
  }
  if (choice === "p"){
    return '✋';
  }
  if (choice === 's'){
  return ' ✌';
}

}

function computerSignChoice(choice){
  if (choice === "r"){
    return '✊';
  }
  if (choice === "p"){
    return '✋';
  }
  if (choice === "s"){
  return ' ✌';
}

}
function convertToWord(letter){
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSOR"; 
}
function win(player, computer){
  playerScore++;
  playerScore_El.innerHTML = playerScore;
  computerScore_El.innerHTML = computerScore;
  playerSign.innerHTML = playerSignChoice(player);
  computerSign.innerHTML = computerSignChoice(computer)
  
  result.innerHTML = `${convertToWord(player)}  beats  ${convertToWord(computer)} . You Win!`;
  
}

function lose(player, computer){

  computerScore++;
  playerScore_El.innerHTML = playerScore;
  computerScore_El.innerHTML = computerScore;
  playerSign.innerHTML = playerSignChoice(player);
  computerSign.innerHTML = computerSignChoice(computer)
  result.innerHTML = `${convertToWord(player)}  loses to  ${convertToWord(computer)}. You lose!`;
  
}

function draw(player, computer){
  result.innerHTML = `${convertToWord(player)}  equals  ${convertToWord(computer)}. It's a draw.`;
  playerSign.innerHTML = playerSignChoice(player);
  computerSign.innerHTML = computerSignChoice(computer)

}

function game(playerChoice){
  const computerChoice = getRandomChoice();

  switch (playerChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":  
      draw(playerChoice, computerChoice);
      break;
  }
}


function main(){


rockBtn.addEventListener('click', function(){
  game("r");
  
})

paperBtn.addEventListener('click', function(){
  game("p");
  
})


scissorBtn.addEventListener('click', function(){
  game("s");

})
}

main();







