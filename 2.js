var lib = require("./lib");

var sum = 0, i, fib_i;
for(i = 3; (fib_i = lib.fibonacci(i)) < 4e6; i += 3) {
	sum += fib_i;
}
console.log(sum);