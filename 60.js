var lib = require("./lib");

function belongsInGroup(p, group) {
    for (var i = 0; i < group.length; i++) {
        if (!lib.isPrime(+(p + "" + group[i]))) return false;
        if (!lib.isPrime(+(group[i] + "" + p))) return false;
    }
    return true;
}

var primes = lib.primesBelow(50000);
var limit = 5;

function search(group, end) {
    if (group.length >= limit) return group;
    for (var i = 0; i < end; i++) {
        var p = primes[i];
        if (belongsInGroup(p, group)) {
            var result = search(group.concat(p), i + 1);
            if (result) return result;
        }
    }
    return false;
}

console.log(search([], primes.length).sum());