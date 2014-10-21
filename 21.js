var lib = require("./lib");

function isAmicable(n) {
    var sumDivisors = lib.getProperDivisors(n).sum();
    return n !== sumDivisors && lib.getProperDivisors(sumDivisors).sum() === n;
}

var sum = 0;
for (var i = 1; i < 10000; i++) {
    if (isAmicable(i)) sum += i;
}

console.log(sum);