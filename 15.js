var lib = require("./lib");

// Closed form solution for the number of lattice paths on an m by n grid.
function latticePaths(m, n) {
	return lib.choose(m + n, n);
}

console.log(latticePaths(20, 20));