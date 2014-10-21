function waysToMake(sum, values) {
    if (values.length === 1) return 1;
    var ways = 0;
    var value = values[0], tail = values.slice(1);
    for (var i = 0; i <= sum; i += value) {
        ways += waysToMake(sum - i, tail);
    }
    return ways;
}

console.log(waysToMake(200, [200, 100, 50, 20, 10, 5, 2, 1]));