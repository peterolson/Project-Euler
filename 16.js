var bigInt = require("big-integer");
var lib = require("./lib");

console.log(bigInt(2).pow(1000).toString().split("").map(Number).sum());