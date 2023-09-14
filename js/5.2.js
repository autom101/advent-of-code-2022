const { getData } = require("./_data-extractor");
/* 
First fill up the stacks array with the data
Iterate through the data and 
*/

const stackData = getData("../data/5-stacks.txt");
const data = getData("../data/5.txt");

const normal = [[" "], [], [], [], [], [], [], [], [], []];
const test = [[""], [], [], []];

const stacks = normal;

let stackNum = 1;
stackData.forEach((elem) => {
  const elemArr = elem.split(" ");
  elemArr.forEach((item) => {
    stacks[stackNum].push(item);
  });

  stackNum++;
});

data.forEach((elem) => {
  const elemArr = elem.split(" ");
  const count = Number(elemArr[1]);
  const sender = stacks[Number(elemArr[3])]; //remove elements from this
  const receiver = stacks[Number(elemArr[5])]; //put elements in this

  const temp = [];

  for (let i = 0; i < count; i++) {
    const item = sender.pop();
    temp.push(item);
  }

  for (let i = 0; i < count; i++) {
    const item = temp.pop();
    receiver.push(item);
  }
});

let ans = stacks.reduce((total, cur) => {
  return total + cur.pop();
}, "");

console.log(ans);
