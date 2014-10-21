var lib = require("./lib");

var solutions = {};

var maxSolutions = 0, maxSum = 0;
for (var a = 1; a <= 1000; a++) {
    for (var b = Math.sqrt(1e6 - a * a - a) | 0; b > a; b--) {
        var c = Math.sqrt(a * a + b * b);
        var sum = a + b + c;
        if (c % 1 === 0 && sum <= 1000) {
            solutions[sum] = (solutions[sum] || 0) + 1;
            if (solutions[sum] > maxSolutions) {
                maxSolutions = solutions[sum];
                maxSum = sum;
            }
        }
    }
}

console.log(maxSum);