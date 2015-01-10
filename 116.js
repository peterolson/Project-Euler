var lib = require("./lib");

function ways(width, slots) {
    function fixedWidthWays(width, n, slots) {
        var uncoveredSlots = slots - (width * n);
        return lib.choose(uncoveredSlots + n, uncoveredSlots);
    }
    var sum = 0;
    for (var n = 1; n * width <= slots; n++) {
        sum += fixedWidthWays(width, n, slots);
    }
    return sum;
}

var reds = ways(2, 50),
    greens = ways(3, 50),
    blues = ways(4, 50);
console.log(reds + greens + blues);