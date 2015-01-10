var ten25Binary = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function combinations(digits) {
    var length = digits.length;
    if (length < 2) return 1;
    var trailingZeros = 0;
    while (digits[length - trailingZeros - 1] === 0) trailingZeros++;
    if (trailingZeros === 0) return combinations(digits.slice(0, -1));
    var copy = digits.slice(0, -trailingZeros - 1);
    return combinations(copy) + trailingZeros * combinations(copy.concat(0));
}

console.log(combinations(ten25Binary));