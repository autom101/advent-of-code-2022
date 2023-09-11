/*
 */

const { getData } = require("./_data-extractor");

const data = getData("../data/4.txt");

let total = 0;

data.forEach((elem) => {
  elem = elem.split(",");
  const firstSet = elem[0].split("-");
  const secondSet = elem[1].split("-");

  const firstStart = Number(firstSet[0]);
  const firstEnd = Number(firstSet[1]);

  const secondStart = Number(secondSet[0]);
  const secondEnd = Number(secondSet[1]);

  /* 
  5-7,7-9 overlaps in a single section, 7.
  2-8,3-7 overlaps all of the sections 3 through 7.
  6-6,4-6 overlaps in a single section, 6.
  2-6,4-8 overlaps in sections 4, 5, and 6.
  */

  //secondStart <= firstEnd && secondStart >= firstStart
  //firstStart <= secondEnd

  const intersection =
    (firstStart <= secondEnd && firstStart >= secondStart) ||
    (secondStart <= firstEnd && secondStart >= firstStart);

  if (intersection) {
    total++;
  }
});

console.log(total);
