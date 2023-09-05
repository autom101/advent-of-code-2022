const axios = require("axios");

//Read file in, every time there is an empty space, skip over it and start adding up calories again:

const getData = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

let curSum = 0;
let maxSoFar = 0;

// just pretend I get the data for now...
const path = "temp";
const data = getData(path); //Should be an array of some sort, maybe

data.forEach((elem) => {
  if (elem > 0) {
    curSum += elem;
  } else {
    curSum = 0;
  }

  maxSoFar = Math.max(maxSoFar, curSum);
});
