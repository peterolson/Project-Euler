var lib = require("./lib");

var primes = lib.primesBelow(1e6);

var maxChain = 0, p;
for (var start = 0; start < primes.length; start++) {
    var sums = [[primes[start], 1]];
    for (var i = start + 1; i < primes.length; i++) {
        var sum = sums[i - start - 1][0] + primes[i];
        if (sum > 1e6) break;
        sums.push([sum, i - start]);
    }
    var longest = sums.filter(function (sum) {
        return ~lib.binarySearch(primes, sum[0]);
    }).last();
    if (longest[1] > maxChain) {
        maxChain = longest[1];
        p = longest[0];
    }
}

console.log(p);
