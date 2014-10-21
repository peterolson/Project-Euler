var lib = require("./lib");

// Note: nine digit and eight digit pandigital numbers are always divisible by 3.
var pandigitalPrimes = lib.permutations([1, 2, 3, 4, 5, 6, 7]).map(function (x) { return +x.join(""); }).filter(lib.isPrime);

console.log(pandigitalPrimes.max());