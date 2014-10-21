var lib = require("./lib");

function testFormula(a, b) {
    function formula(n) {
        return n * n + a * n + b;
    }
    var i = 0;
    while (lib.isPrime(formula(i))) i++;
    return i;
}

var max = 0, bestA, bestB;
for (var a = -999; a < 1000; a++) {
    for (var b = -999; b < 1000; b++) {
        var workingLength = testFormula(a, b);
        if (workingLength > max) {
            max = workingLength;
            bestA = a,
            bestB = b;
        }
    }
}
console.log(bestA * bestB);