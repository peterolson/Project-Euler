var turnProbabilities = [, [0.5, 0.5]];
for (var n = 2; n <= 15 ; n++) {
    var previous = turnProbabilities[n - 1],
        current = [];
    var red = n / (n + 1),
        blue = 1 / (n + 1);
    for (var i = 0; i <= previous.length; i++) {
        current[i] = (previous[i - 1] || 0) * blue + (previous[i] || 0) * red;
    }
    turnProbabilities[n] = current;
}

function winningChance(turns) {
    var probs = turnProbabilities[turns];
    var chance = 0;
    for (var i = 1 + (turns - (turns % 2)) / 2; i < probs.length; i++) {
        chance += probs[i];
    }
    return chance;
}

function maximumPrize(turns) {
    return Math.floor(1 / winningChance(turns));
}
console.log(maximumPrize(15));