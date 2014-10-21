var lib = require("./lib");
var bigInt = require("big-integer");

var a = bigInt(1), b = bigInt(2), i = 3;
while (b.toString().length < 1000) {
    var t = b;
    b = a.plus(b);
    a = t;
    i++;
}
console.log(i);