var lib = require("./lib");

var sum = lib.sum(0,999,3) + lib.sum(0,999,5) - lib.sum(0,999,15);
console.log(sum);