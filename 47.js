var lib = require("./lib");

function distinctPrimeFactors(n) {
    var factors = lib.primeFactors(n);
    var length = 0;
    for (var i = 0; i < factors.length; i++) {
        if (factors[i] === factors[i + 1]) continue;
        length++;
    }
    return length;
}

var n = 1;
while (true) {
    for (var i = 0; i < 4; i++) {
        if (distinctPrimeFactors(n + i) === 4) {
        }
        else break;
    }
    if (i === 4) break;
    n += i;
    n++;
}

console.log(n);