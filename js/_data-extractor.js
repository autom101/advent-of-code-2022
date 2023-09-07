const fs = require("fs");

const getData = (path) => {
  const data = fs.readFileSync(path, "utf-8").toString().split("\n");
  return data;
};

module.exports = { getData };
