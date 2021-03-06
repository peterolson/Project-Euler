﻿var lib = require("./lib");

function findSequence() {
    var primes = lib.primesBelow(1e4).filter(function (x) { return x > 1487 });

    for (var i = 0; i < primes.length; i++) {
        for (var j = i + 1; j < primes.length; j++) {
            var pi = primes[i], pj = primes[j], pk = pj + pj - pi;
            if (~lib.binarySearch(primes, pk)) {
                if (lib.isPermutation(pi, pj) && lib.isPermutation(pi, pk)) {
                    return pi + "" + pj + pk;
                }
            }
        }
    }
}

console.log(findSequence());