var chainEnd = {
    1: 1,
    89: 89
};

function squareDigit(n) {
    var sum = 0;
    n = String(n);
    for (var i = 0; i < n.length; i++) {
        sum += n[i] * n[i];
    }
    return sum;
}

function findChainEnd(n) {
    if (chainEnd[n]) return chainEnd[n];
    var chain = [n];
    var next = squareDigit(n);
    while (!chainEnd[next]) {
        chain.push(next);
        next = squareDigit(next);
    }
    for (var i = 0; i < chain.length; i++)
        chainEnd[chain[i]] = chainEnd[next];
    return chainEnd[next];
}

var count = 0;
for (var i = 1; i < 1e7; i++) {
    if (findChainEnd(i) === 89) count++;
}
console.log(count);