var lib = require("./lib");

function isCuriousNumber(n) {
    return n === (n + "").split("").map(Number).map(lib.factorial).sum();
}

var sum = 0;
for (var i = 11; i < 99999; i += 2) {
    if (isCuriousNumber(i)) sum += i;
}
console.log(sum);