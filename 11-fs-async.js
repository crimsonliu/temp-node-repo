const { readFile, writeFile } = require("fs");

const first = readFile("./content/first.txt", "utf-8", (err, result) => {});
console.log(first);
