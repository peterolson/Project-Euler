var lib = require("./lib");

function isPythagoreanTriple(a, b) {
    return Math.sqrt(a * a + b * b) % 1 === 0;
}
var maxLength = 1500000;
var lengths = {}, limit = Math.sqrt(maxLength);

// Euclid's formula to generate Pythagorean triples
for (var m = 2; m < limit; m++) {
    for (var n = 1 + (m % 2); n < m; n += 2) {
        if (lib.gcd(m, n) !== 1) continue;
        var mm = m * m, nn = n * n;
        var a = mm - nn, b = 2 * m * n, c = mm + nn;
        var length;
        for (var k = 1; (length = k * (a + b + c)) <= maxLength; k++) {
            lengths[length] = (lengths[length] || 0) + 1;
        }
    }
}


var sum = 0;
for (var i in lengths) {
    if (lengths[i] === 1) sum++;
}
console.log(sum);