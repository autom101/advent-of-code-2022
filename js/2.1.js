const { getData } = require("./_data-extractor");

const data = getData("../data/2.txt");

/* 
First, see what opponent and player pick, then see if the case is a win, tie, or loss.
Assign points appropriately for win/tie/loss and also add points corresponding to the choice of the player

*/

const MOVES = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const POINTS = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const calculatePoints = (opponent, player) => {
  //handle tie case:
  if (opponent == player) {
    return 3 + POINTS[player];
  }

  let points = 0;

  // Opponent win scenarios
  if (
    (opponent === "rock" && player === "scissors") ||
    (opponent === "paper" && player === "rock") ||
    (opponent === "scissors" && player === "paper")
  ) {
    points = 0;
  } else {
    points = 6;
  }

  return points + POINTS[player];
};

let total = 0;

data.forEach((elem) => {
  const round = elem.split(" ");
  const opponent = round[0];
  const player = round[1];

  total += calculatePoints(MOVES[opponent], MOVES[player]);
});

console.log(total);
