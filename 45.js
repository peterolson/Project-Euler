// No need to consider triangle numbers, since all
// hexagonal numbers are also triangle
function P(n) { return n * (3 * n - 1) / 2; }
function H(n) { return n * (2 * n - 1); }

var h = 144, p = 165, t = 285;

var Hh, Pp;
while (true) {
    Hh = H(h);
    while ((Pp = P(p)) < Hh) {
        p++;
    }
    if (Hh === Pp) break;
    h++;
}

console.log(Hh);