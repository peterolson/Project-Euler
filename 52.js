var lib = require("./lib");

function isPermutedMultiple(x) {
    return lib.isPermutation(x, 2 * x) && lib.isPermutation(2 * x, 3 * x) && lib.isPermutation(4 * x, 5 * x) && lib.isPermutation(5 * x, 6 * x);
}

for (var n = 1; !isPermutedMultiple(n) ; n++);

console.log(n);