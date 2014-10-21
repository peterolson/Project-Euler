var lib = require("./lib");

function isValid(a, b, c) {
    a = a + "" + (b || "") + (c || "");
    if (c && a.length !== 9) return false;
    var digits = {};
    for (var i = 0; i < a.length; i++) {
        var c = a[i];
        if (c === "0") return false;
        if (digits[c]) return false;
        digits[c] = 1;
    }
    return true;
}

var products = {};
for (var i = 1; i <= 98; i++) {
    if (!isValid(i)) continue;
    for (var j = i; j <= 4321; j++) {
        if (!isValid(i, j)) continue;
        if (isValid(i, j, i * j)) products[i * j] = 1;
    }
}
console.log(Object.keys(products).map(Number).sum());