const fs = require("fs");

const getData = (path) => {
  const data = fs.readFileSync(path, "utf-8").toString().split("\r\n");
  return data;
};

module.exports = { getData };
