
function subRectangles(width, height) {
    var count = 0;
    for (var a = 1; a <= width; a++) {
        for (var b = 1; b <= height; b++) {
            count += (width - a + 1) * (height - b + 1);
        }
    }
    return count;
}

var nearest = 0,
    nearestArea = 0;

for (var a = 2; a < 100; a++) {
    for (var b = a; b < 100; b++) {
        var subs = subRectangles(a, b);
        if (Math.abs(2e6 - subs) < Math.abs(2e6 - nearest)) {
            nearest = subs;
            nearestArea = a * b;
        }
    }
}

console.log(nearestArea);