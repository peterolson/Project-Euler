var lib = require("./lib");

function ways(slots, b, g, r, uncovered) {
    return lib.choose(uncovered + b + g + r, uncovered) * (lib.factorial(b+g+r)/(lib.factorial(b)*lib.factorial(g)*lib.factorial(r)));
}

var sum = 0;
var slots = 50, bSlots, gSlots, rSlots;
for (var b = 0; (bSlots = b * 4) <= slots; b++) {
    for (var g = 0; bSlots + (gSlots = g * 3) <= slots; g++) {
        for (var r = 0; bSlots + gSlots + (rSlots = r * 2) <= slots; r++) {
            sum += ways(slots, b, g, r, slots - (bSlots + gSlots + rSlots));
        }
    }
}
console.log(sum);