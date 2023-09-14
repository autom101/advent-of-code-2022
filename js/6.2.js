const { getData } = require("./_data-extractor");

const data = getData("../data/6.txt");

const ansArray = [];
data.forEach((elem) => {
  let str = "";

  // a sliding window question that looks for a set of 4 characters.
  for (let i = 0; i < elem.length; i++) {
    const cur = elem[i];
    if (str.includes(cur)) {
      //sequence is repeating but is not of length 4? reset:
      let tmp = 0;
      while (str[tmp] !== cur) {
        tmp++;
      }
      str = str.slice(tmp + 1);
    }

    str += cur;

    if (str.length == 14) {
      ansArray.push(i + 1);
      break;
    }
  }
});

ansArray.forEach((ans) => {
  console.log(ans);
});
