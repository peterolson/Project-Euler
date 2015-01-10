var limit = 100000;

var p = [1, 1, 2, 3, 5, 7];

var pentagonals = [];
var signs = [];
for (var i = 1; i < limit / 2; i++) {
    pentagonals.push(i * (3 * i - 1) / 2);
    signs.push(Math.pow(-1, i - 1));
    pentagonals.push((-i) * (3 * (-i) - 1) / 2);
    signs.push(Math.pow(-1, -i - 1));
}

function partitions(n) {
    var sum = 0, k = 1;
    var pos, neg;
    for (var i = 0; pentagonals[i] <= n; i++) {
        sum += signs[i] * p[n - pentagonals[i]];
    }
    sum = sum % 1e6;
    if (sum < 0) sum = 1e6 + sum;
    p[n] = sum;
    return sum;
}

for (var i = p.length; i < limit; i++) {
    if (partitions(i) === 0) break;
}
console.log(i);