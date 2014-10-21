var lib = require("./lib");

function isSumOfDigitsToPower(n, pow) {
    return n === (n + "").split("").map(function (x) { return Math.pow(x, pow); }).sum();
}

var limit = 5 * Math.pow(9, 5);

var sum = 0;
for (var i = 10; i <= limit; i++) {
    if (isSumOfDigitsToPower(i, 5)) sum += i;
}
console.log(sum);