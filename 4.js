var lib = require("./lib");

var max = 0;
for(var i = 999; i > 900; i--) {
	for(var j = 999; j > 900; j--) {
		var product = i * j;
		if(lib.isPalindrome(product) && product > max) {
			max = product;
		}
	}
}
console.log(max);