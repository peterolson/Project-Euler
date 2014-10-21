var lib = require("./lib");

function triangleNumber(n) {
	return lib.sum(1,n,1);
}

var n = 500;
while(lib.numberOfDivisors(triangleNumber(n)) <= 500) n++;

console.log(triangleNumber(n));