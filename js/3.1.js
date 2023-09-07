const { getData } = require("./_data-extractor");

const data = getData("../data/3.txt");

//assume we already have data,

const asciiLowercaseA = "a".charCodeAt(0);
const asciiUppercaseA = "A".charCodeAt(0);

const helperFunction = (firstHalf, secondHalf, halfwayPoint) => {
  const set1 = new Set();
  const set2 = new Set();
  let val = 0;

  for (let i = 0; i < halfwayPoint; i++) {
    const firstChar = firstHalf[i];
    const secondChar = secondHalf[i];

    set1.add(firstChar);
    set2.add(secondChar);
  }

  set1.forEach((elem) => {
    if (set2.has(elem)) {
      const charCode = elem.charCodeAt(0);
      val = elem.match(new RegExp("[A-Z]"))
        ? charCode - asciiUppercaseA + 27
        : charCode - asciiLowercaseA + 1;
    }
  });

  return val;
};

let total = 0;

data.forEach((elem) => {
  const halfwayPoint = Math.floor(elem.length / 2);
  const firstHalf = elem.slice(0, halfwayPoint); //extracts up to but not including halfwayPoint
  const secondHalf = elem.slice(halfwayPoint);

  total += helperFunction(firstHalf, secondHalf, halfwayPoint);
});

console.log(total);
