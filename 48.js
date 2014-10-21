var lib = require("./lib"),
    bigInt = require("big-integer");

var sum = bigInt.zero;
for (var i = 1; i <= 1000; i++) {
    sum = sum.add(bigInt(i).modPow(i, 1e10));
}
console.log(sum.toString().slice(-10));