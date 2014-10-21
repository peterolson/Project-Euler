var lib = require("./lib");

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var permutation = [];
var remainder = 1e6 - 1;
var max = 9;
while (remainder > 0) {
    var permutations = lib.factorial(max);
    var index = remainder / permutations | 0;
    permutation.push(digits[index]);
    digits.splice(index, 1);
    remainder -= index * permutations;
    max--;
}
permutation = permutation.concat(digits);

console.log(permutation.join(""));