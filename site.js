
var rounds = 6;
var players = [];

function rollDie(sides){
  return Math.floor(Math.random()*sides) + 1;
}

function shootoutRoll(){
  let rolls = [];
  let length = 4;
  for (var i = 0; i < length; i++) {
    rolls[i] = rollDie(20);
  }
  let index = rollDie(4) - 1;
  return rolls[index];
}

const diceSet = [4, 6, 8, 10, 12, 20];

function createPlayers(){
  for (var i = 1; i <= 10; i++) {
    let player = {
      name: "Player " + i,
      score: 0
    };
    players.push(player);
  }
}

function roundScore(){
  let roll = diceSet.map(x => rollDie(x));
  return roll.reduce((a,b) => a + b, 0);
}
function beginGame(players){
  for (var i = 0; i < players.length; i++) {
    players[i].score = roundScore();
  }
  players.sort(function(a, b) {return a.score - b.score});
  let bottomScore = players.shift();
  console.log(bottomScore.name + " eliminated with a measly " + bottomScore.score);
  bottomScore = players.shift();
  console.log(bottomScore.name + " was also eliminated this round with a " + bottomScore.score);
}
function middleGame(players){
  for (var i = 0; i < players.length; i++) {
    players[i].score = roundScore();
  }
  players.sort(function(a,b) {return a.score - b.score});
  let bottomScore = players.shift();
  console.log(bottomScore.name + " was eliminated this round with a " + bottomScore.score);
}
function endGame(players){
  for (var i = 0; i < players.length; i++) {
    players[i].score = shootoutRoll();
  }
  if (players[0].score !== players[1].score) {
    players.sort(function(a,b) {return a.score - b.score});
    let bottomScore = players.shift();
    console.log(bottomScore.name + " lost with a " + bottomScore.score);
    let winner = players.shift(); //should be last player
    console.log(winner.name + " won!");
  } else{
    console.log("There was a tie! Another round!");
    endGame(players);
  }
}
function runGame(){
  var round = 1;
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}


createPlayers();
beginGame(players);
beginGame(players);
beginGame(players);
middleGame(players);
middleGame(players);
endGame(players);
