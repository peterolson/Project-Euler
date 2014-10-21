var lib = require("./lib");

function isCircular(n, i, primes) {
    var cycles = (n+"").split("").map(function (c, i, arr) {
        return arr.slice(i).concat(arr.slice(0, i)).join("").replace(/^(0)+/,"");
    }).map(Number)
    return cycles.every(function (n) {
        return ~lib.binarySearch(primes, n);
    });
}

var primes = lib.primesBelow(1e6);
console.log(primes.filter(isCircular).length);