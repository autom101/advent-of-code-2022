const fs = require("fs");

let curSum = 0;
let maxSoFar = [0, 0, 0];

/* 
Same general process as 1.1, except we store an array of 3 ints that are replaced if curSum is higher than the smallest value. 
*/

const data = fs.readFileSync("../data/1.txt", "utf-8").toString().split("\r\n");

data.forEach((elem) => {
  let num = Number(elem);
  if (num != 0) {
    curSum += num;
  } else {
    const minSum = Math.min(...maxSoFar);

    if (curSum > minSum) {
      for (let i = 0; i < 3; i++) {
        if (maxSoFar[i] == minSum) {
          maxSoFar[i] = curSum;
          //Have to use break otherwise every item in this array would be the same.
          break;
        }
      }
    }

    curSum = 0;
  }
});

console.log(
  maxSoFar.reduce((pre, cur) => {
    return pre + cur;
  }, 0)
);
