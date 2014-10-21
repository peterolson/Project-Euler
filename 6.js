var lib = require("./lib");

// Closed form solution for sum of squares
function sumOfSquares(n) {
	return n * (n + 1) * (2 * n + 1) / 6;
}

var sum = lib.sum(1,100,1);
var sumSquares = sumOfSquares(100);

console.log(sum * sum - sumSquares);