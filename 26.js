function getPeriodLength(divisor) {
    var quotient = [];
    var previous = {};
    var remainder = 10, i = 0;
    while (remainder) {
        var division = (remainder / divisor) | 0;
        quotient.push(division);
        remainder = (remainder - division * divisor) * 10;
        if (previous[division + " " + remainder]) break;
        previous[division + " " + remainder] = i;
        i++;
    }
    if (remainder) return i - previous[division + " " + remainder];
    return 0;
}

var max = 0, maxD;
for (var d = 2; d < 1000; d++) {
    var periodLength = getPeriodLength(d);
    if (periodLength > max) {
        max = periodLength;
        maxD = d;
    }
}
console.log(maxD);