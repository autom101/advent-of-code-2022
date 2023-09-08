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

  //firstSet has to enclose second set, or secondSet has to enclose first set.
  //As in, start earlier and end later:
  const firstSetEnclosesSecond =
    firstStart <= secondStart && firstEnd >= secondEnd;
  const secondSetEnclosesFirst =
    secondStart <= firstStart && secondEnd >= firstEnd;

  const firstSetIntersectsSecond =
    firstStart <= secondStart && secondEnd >= firstEnd;
  const secondSetIntersectsFirst =
    secondStart <= firstStart && firstEnd >= secondEnd;

  if (firstSetEnclosesSecond) {
    /*     console.log("first encloses: ", elem);
     */ total++;
  } else if (secondSetEnclosesFirst) {
    /*     console.log("second encloses: ", elem);
    console.log("start? ", secondStart <= firstStart);
    console.log("end? ", secondEnd >= firstEnd); */
    total++;
  }
});

console.log(total);
