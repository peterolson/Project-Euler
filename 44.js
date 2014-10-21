function P(n) {
    return n * (3 * n - 1) / 2;
}

function isPentagonal(P_n) {
    var n = (0.5 + Math.sqrt(0.25 + 6 * P_n)) / 3;
    return n % 1 === 0;
}

function findDifference() {
    var i = 2;
    while (true) {
        var j = 1;
        while (j < i) {
            var P_i = P(i), P_j = P(j);
            if (isPentagonal(P_i + P_j) && isPentagonal(P_i - P_j)) {
                return P_i - P_j;
            }
            j++;
        }
        i++;
    }
}
console.log(findDifference());