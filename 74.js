var lib = require("./lib");
var chainLength = {};

var digitFactorial = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(lib.factorial);
var digitFactorialSums = {};

function digitFactorialSum(n) {
    if (digitFactorialSums[n]) return digitFactorialSums[n];
    var sum = 0;
    n = String(n);
    for (var i = 0; i < n.length; i++)
        sum += digitFactorial[n[i]];
    digitFactorialSums[n] = sum;
    return sum;
}

function findChainLength(n) {
    if (chainLength[n]) return chainLength[n];
    var next = digitFactorialSum(n);
    var chain = [n], chainMap = {};
    chainMap[n] = 1;
    var length = 1;
    while (!chainMap[next]) {
        if (chainLength[next]) {
            length += chainLength[next];
            chainMap[next] = 62;
            break;
        }
        chain.push(next);
        chainMap[next] = length;
        next = digitFactorialSum(next);
        length++;
        if (length > 60) break;
    }
    var cycleStart = chainMap[next];
    for (var i = 0; i < chain.length; i++) {
        if (i < cycleStart) chainLength[chain[i]] = length - i;
        else chainLength[chain[i]] = length - cycleStart + 1;
    }
    return length;
}

var sum = 0;
for (var i = 1; i < 1000000; i++) {
    if (findChainLength(i) === 60) {
        sum++;
    }
}

console.log(sum);