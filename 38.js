function isPandigital(n) {
    var concat = "";
    for (var i = 1; (concat + n * i).length <= 9; i++) {
        concat += n * i;
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].every(function (x) {
        return ~concat.indexOf(x);
    }) ? +concat : false;
}

var max = 0;
for (var i = 1; i <= 9999; i++) {
    var product = isPandigital(i);
    if (product > max)  max = product;
}

console.log(max);