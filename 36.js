var lib = require("./lib");

function isDoubleBasePalindrome(n) {
    if (n !== +(n + "").reverse()) return false;
    var n_2 = n.toString(2);
    return n_2 === n_2.reverse();
}

var sum = 0;
for (var i = 1; i < 1e6; i += 2) {
    if (isDoubleBasePalindrome(i)) sum += i;
}

console.log(sum);