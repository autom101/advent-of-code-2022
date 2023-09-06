const axios = require("axios");
const fs = require("fs");

let curSum = 0;
let maxSoFar = 0;

/* 
1. Read data using the fs module's read function and convert it to a string
2. Split the String using the delimiter "\r\n" to obtain an array of strings
3. Iterate through the data array and convert each item to a Number before adding it to curSum, updating the max each time. 
4. In step 3, if the item is a 0, that means the current person's calories are finished.
5. Return the calories
*/

const data = fs.readFileSync("../data/1.txt", "utf-8").toString().split("\r\n");

data.forEach((elem) => {
  let num = Number(elem);
  if (num > 0) {
    curSum += num;
  } else {
    curSum = 0;
  }

  maxSoFar = Math.max(maxSoFar, curSum);
});

console.log(maxSoFar);
