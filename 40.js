function d(n) {
    var length = 1;
    var start = Math.pow(10, length - 1);
    while (n - (length * 9 * start) > 0) {
        n -= length * 9 * start;
        start = Math.pow(10, ++length - 1);
    }
    
    var index = (n - 1) / length | 0,
        digit = (n - 1) % length;

    return (start + index).toString()[digit];
}

var product = 1;
for (var i = 1; i <= 1e6; i *= 10) product *= d(i);
console.log(product);