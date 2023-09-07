/* 


*/

const { getData } = require("./_data-extractor");

const data = getData("../data/3.txt");

//assume we already have data,

const asciiLowercaseA = "a".charCodeAt(0);
const asciiUppercaseA = "A".charCodeAt(0);

const helperFunction = (strings) => {
  const setArray = [];
  let len = strings.length;

  for (let i = 0; i < len; i++) {
    setArray[i] = new Set();

    for (let j = 0; j < strings[i].length; j++) {
      const curChar = strings[i][j];
      setArray[i].add(curChar);
    }
  }

  let val = 0;

  setArray[0].forEach((elem) => {
    if (setArray[1].has(elem) && setArray[2].has(elem)) {
      const charCode = elem.charCodeAt(0);
      val = elem.match(new RegExp("[A-Z]"))
        ? charCode - asciiUppercaseA + 27
        : charCode - asciiLowercaseA + 1;
    }
  });

  return val;
};

let total = 0;

for (let i = 0; i < data.length; i += 3) {
  const first = data[i];
  const second = data[i + 1];
  const third = data[i + 2];

  const val = helperFunction([first, second, third]);
  total += val;
}

console.log(total);
