var lib = require("./lib");

var limit = 50e6;

var primes = lib.primesBelow(Math.sqrt(limit));
var squares = [], cubes = [], fourths = [];
for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    squares.push(p * p);
    var cube = p * p * p, fourth = cube * p;
    if (cube < limit) cubes.push(cube);
    if (fourth < limit) fourths.push(fourth);
}

var numbers = {};
for (var i = 0; i < fourths.length; i++) {
    var f = fourths[i];
    for (var j = 0; j < cubes.length; j++) {
        var c = cubes[j];
        if (f + c >= limit) break;
        for (var k = 0; k < squares.length; k++) {
            var sum = squares[k] + f + c;
            if (sum >= limit) break;
            numbers[sum] = (numbers[sum] || 0) + 1;
        }
    }
}
console.log(Object.keys(numbers).length);