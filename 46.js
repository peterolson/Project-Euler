var lib = require("./lib");

function isSumOfPrimeAndTwiceSquare(n, primes) {
    for (var i = 0; primes[i] <= n; i++) {
        var diff = n - primes[i];
        if (Math.sqrt(diff / 2) % 1 === 0) return true;
    }
    return false;
}

function findSmallestCounterexample() {
    var primes = [];

    var i = 3;
    while (true) {
        var p = lib.nextPrime();
        primes.push(p);
        while (i < p) {
            if (!isSumOfPrimeAndTwiceSquare(i, primes)) return i;
            i += 2;
        }
    }
}

console.log(findSmallestCounterexample());