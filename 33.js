var lib = require("./lib");

function isCuriousFraction(a, b) {
    if (a % 10 === 0) return false;
    var quotient = a / b;
    a = a + ""; b = b + "";
    for (var i = 0; i <= 1; i++)
        for (var j = 0; j <= 1; j++)
            if (a[i] / b[j] === quotient && a[1 - i] === b[1 - j]) return true;
    return false;
}

var numerators = [], denominators = [];
for (var i = 12; i <= 98; i++) {
    for (var j = i + 1; j <= 98; j++) {
        if (isCuriousFraction(i, j)) numerators.push(i), denominators.push(j);
    }
}
var numerator = numerators.product(),
    denominator = denominators.product();

console.log(denominator / lib.gcd(numerator, denominator));
