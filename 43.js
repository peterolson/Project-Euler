var lib = require("./lib");

function pad(n) {
    return ("000" + n).slice(-3);
}

function hasUniqueDigits(n) {
    var digits = {};
    for (var i = 0; i < n.length; i++) {
        if (digits[n[i]]) return false;
        digits[n[i]] = 1;
    }
    return true;
}

function stringsDivisibleBy(n) {
    var strings = [];
    for(var i = 0; i <= 999; i += n){
        if (i % n === 0 && hasUniqueDigits(i)) strings.push(pad(i));
    }
    return strings;
}

function concat(a, b) {
    var strings = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            var a_i = a[i], b_j = b[j];
            if (a_i.slice(1) !== b_j.slice(0, 2)) continue;
            var string = a_i.slice(0, 3) + b_j.slice(2);
            if (hasUniqueDigits(string)) strings.push(string);
        }
    }
    return strings;
}

var dividers = [13, 11, 7, 5, 3, 2, 1];
var pandigitalStrings = stringsDivisibleBy(17);
for (var i = 0; i < dividers.length; i++) {
    pandigitalStrings = concat(stringsDivisibleBy(dividers[i]), pandigitalStrings);
}

console.log(pandigitalStrings.map(Number).sum());