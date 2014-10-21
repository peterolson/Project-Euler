var start = 1,
    sum = start;
for (var i = 1; i <= (1000) / 2; i++) {
    for (var j = 0; j < 4; j++) {
        start += i * 2;
        sum += start;
    }
}
console.log(sum);