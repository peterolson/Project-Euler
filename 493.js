var lib = require("./lib");

var distinctColors = 7, pool = 70, n = 20,
    colorGroup = pool / distinctColors;

var expectedOfOneColor = 1 - (lib.choose(pool - colorGroup, n) / lib.choose(pool, n));
console.log((expectedOfOneColor * distinctColors).toFixed(9));