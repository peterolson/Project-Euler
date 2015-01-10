var lib = require("./lib");

var count = 0;
for (var n = 1; n <= 100; n++) {
    for (var r = 1; r <= n; r++) {
        if (lib.choose(n, r) >= 1e6) count++;
    }
}
console.log(count);