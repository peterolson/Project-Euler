var lib = require("./lib");

var limit = 28123;

function isAbundant(n) {
    return lib.getProperDivisors(n).sum() > n;
}

function markSums(list) {
    var isSum = [];
    for (var i = 0; i < limit; i++) {
        isSum[i] = isSum[i] || false;
        for (var j = i; j < list.length; j++) {
            isSum[list[i] + list[j]] = true;
        }
    }
    return isSum;
}

var abundantNumbers = [];
for (var i = 0; i <= limit; i++) {
    if (isAbundant(i)) abundantNumbers.push(i);
}

var sum = markSums(abundantNumbers).map(function (x, i) {
    return x ? 0 : i;
}).sum();

console.log(sum);
