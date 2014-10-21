var bigInt = require("big-integer");

var terms = {};

var limit = 100;

for (var a = 2; a <= limit; a++) {
    for (var b = 2; b <= limit; b++) {
        terms[bigInt(a).pow(b)] = 1;
    }
}

console.log(Object.keys(terms).length);