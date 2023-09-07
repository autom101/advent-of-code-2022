const { getData } = require("./_data-extractor");

const data = getData("../data/2.txt");

/* 
Just pick moves based on decision map outlined below, and also pick points accordingly. Then calculate total.
*/

const MOVES = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const DECISIONS = {
  X: "loss",
  Y: "tie",
  Z: "win",
};

const WIN = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

const LOSS = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

const MOVE_POINTS = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const DECISION_POINTS = {
  win: 6,
  tie: 3,
  loss: 0,
};

const calculatePoints = (opponent, decision) => {
  let points = 0;

  switch (decision) {
    case "win": {
      const move = WIN[opponent];
      points = DECISION_POINTS[decision] + MOVE_POINTS[move];
      break;
    }
    case "tie": {
      const move = opponent;
      points = DECISION_POINTS[decision] + MOVE_POINTS[move];
      break;
    }
    case "loss": {
      const move = LOSS[opponent];
      points = DECISION_POINTS[decision] + MOVE_POINTS[move];
      break;
    }
    default: {
      break;
    }
  }

  return points;
};

let total = 0;

data.forEach((elem) => {
  const round = elem.split(" ");
  const opponent = round[0];
  const player = round[1];

  const points = calculatePoints(MOVES[opponent], DECISIONS[player]);
  total += points;
});

console.log(total);
