var lib = require("./lib");

function isTruncatablePrime(n) {
    var s = n.toString();
    if (s.length < 2) return false;
    return s.split("").every(function (x, i) {
        return lib.isPrime(+s.slice(i) || 2) && lib.isPrime(+s.slice(0, i) || 2);
    });
}

var primes = lib.primesBelow(1e6);

console.log(primes.filter(isTruncatablePrime).sum());