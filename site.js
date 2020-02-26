
var currentRound = 1;
var rounds = 6;
var players = [
  {name: "Walter White",
  score: 0},
  {name: "Jesse Pinkman",
  score: 0},
  {name: "Mike Ehrmantraut",
  score: 0},
  {name: "Saul Goodman",
  score: 0},
  {name: "Hank Schrader",
  score: 0},
  {name: "Gustavo Fring",
  score: 0},
  {name: "Hector Salamanca",
  score: 0},
  {name: "Skyler White",
  score: 0},
  {name: "Tuco Salamanca",
  score: 0},
  {name: "Gale Boetticher",
  score: 0}
];
function createTable() {
  var table ='<tr class="table-default"><th scope="col">Current Round: '+ currentRound +'</th><th scope="col">Score</th></tr>';
  for (var i = 0; i < players.length; i++) {
    var row = '<tr class="table-dark">';
    row += '<th scope="row">'+ players[i].name + '</th>';
    row += '<td>'+ players[i].score + '</td> </tr>';
    table += row;
  }
  document.getElementById("players").innerHTML = table;
}


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

function roundScore(){
  let roll = diceSet.map(x => rollDie(x));
  return roll.reduce((a,b) => a + b, 0);
}

function beginGame(){
  for (var i = 0; i < players.length; i++) {
    players[i].score = roundScore();
  }
}

function endGame(){
  for (var i = 0; i < players.length; i++) {
    players[i].score = shootoutRoll();
  }
  if (players[0].score !== players[1].score) {
    sortPlayers();
    shiftPlayers();
    let winner = players.shift(); //should be last player
    console.log(winner.name + " won!");
  } else{
    console.log("There was a tie! Another round!");
    endGame();
  }
}
function runGame(){
  if (currentRound <= 3) {
    beginGame();
    sortPlayers();
    createTable();
    shiftPlayers();
    shiftPlayers();
    currentRound++;
  } else if (currentRound <= 5) {
    beginGame();
    sortPlayers();
    createTable();
    shiftPlayers();
    currentRound++;
  } else {
    createTable();
    endGame();
    currentRound++;
  }
}
function shiftPlayers(){
  players.shift();
}
function sortPlayers(){
  players.sort(function(a,b) {return a.score - b.score});
}
