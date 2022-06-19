const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

const third = writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);
console.log(third);
