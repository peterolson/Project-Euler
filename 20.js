var bigInt = require("big-integer");
var lib = require("./lib");

var fact = bigInt(100);
for(var i = 2; i < 100; i++) fact = fact.times(i);
console.log(fact.toString().split("").map(Number).sum());