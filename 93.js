var lib = require("./lib");

function getConsecutiveLength(w, x, y, z) {
    var values = {};

    function store(vals) {
        for (var i = 0; i < vals.length; i++) {
            var val = vals[i];
            if (val === (val | 0)) values[vals[i]] = 1;
        }
    }

    function parenthesize(w, x, y, z, a, b, c) {
        store([
            b(a(w, x), c(y, z)),
            c(a(w, b(x, y)), z),
            c(b(a(w, x), y), z),
            a(w, c(b(x, y), z)),
            a(w, b(x, c(y, z)))
        ]);
    }

    var a = function (a, b) { return a + b; },
        s = function (a, b) { return a - b; },
        m = function (a, b) { return a * b; },
        d = function (a, b) { return a / b };

    function operate(w, x, y, z) {
        var ops = [a, s, m, d];
        for (var i = 0; i < ops.length; i++) {
            for (var j = 0; j < ops.length; j++) {
                for (var k = 0; k < ops.length; k++) {
                    parenthesize(w, x, y, z, ops[i], ops[j], ops[k]);
                }
            }
        }
    }

    function permute(w, x, y, z) {
        var perms = lib.permutations([w, x, y, z]);
        for (var i = 0; i < perms.length; i++) {
            var p = perms[i];
            operate(p[0], p[1], p[2], p[3]);
        }
    }

    permute(w, x, y, z);

    var length = 1;
    while (values[length]) length++;
    return length - 1;
}

var maxLength = 0, maxN = 0;
for (var a = 1; a < 7; a++)
    for (b = a + 1; b < 8; b++)
        for (c = b + 1; c < 9; c++)
            for (d = c + 1; d <= 9; d++) {
                var length = getConsecutiveLength(a, b, c, d);
                if (length > maxLength) {
                    maxLength = length;
                    maxN = a + "" + b + "" + c + "" + d;
                }
            }

console.log(maxN);