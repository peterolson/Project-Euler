var lib = require("./lib");

var lcm = 1;
for(var i = 1; i <= 20; i++) {
	lcm = lib.lcm(i, lcm);
}
console.log(lcm);