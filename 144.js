
function nextHit(x1, y1, x2, y2) {
    // find the reflection slope
    var dy = y2 - y1,
        dx = x2 - x1,
        m_in = dy / dx,
        m = -4 * x2 / y2,
        m_perp = -1 / m;
    var magnitude = 1 + m_perp * m_perp;
    var c = 2 * (dx + dy * m_perp) / (magnitude);
    var m_refl = (dy - c * m_perp) / (dx - c);
    
    var eps = 0.00005;

    // solve x using quadratic formula
    var cy = y2 - m_refl * x2;
    var A = 4 + m_refl * m_refl,
        B = 2 * cy * m_refl,
        C = cy * cy - 100,
        discr = Math.sqrt(B*B-4*A*C);
    var x3 = [(-B + discr) / (2 * A), (-B - discr) / (2 * A)];
    x3 = Math.abs(x2 - x3[0]) < eps ? x3[1] : x3[0];

    // solve y using ellipse equation
    var y3 = Math.sqrt(100 - 4 * x3 * x3);
    if (Math.abs((y3 - y2) / (x3 - x2) - m_refl) > eps) y3 = -y3;

    return [x3, y3];
}

var x1 = 0, y1 = 10.1, x2 = 1.4, y2 = -9.6,
    hits = 0;

while (Math.abs(x2) > 0.01 || y2 < 0) {
    var p3 = nextHit(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
    x2 = p3[0];
    y2 = p3[1];
    hits++;
}

console.log(hits);