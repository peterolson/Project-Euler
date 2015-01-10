var consecutiveDoubles = 0;
function rollDice() {
    function rollDie() {
        return Math.ceil(Math.random() * 4);
    }
    var a = rollDie(), b = rollDie();
    if (a === b) consecutiveDoubles++;
    else consecutiveDoubles = 0;
    if (consecutiveDoubles === 3) {
        consecutiveDoubles = 0;
        return 0;
    }
    return rollDie() + rollDie();
}

var pos = 0;

var ccPile = Array(16);
ccPile[5] = 0;
ccPile[12] = 10;
function communityChest() {
    var ccIndex = (Math.random() * 16) | 0;
    if (ccPile[ccIndex] !== undefined) pos = ccPile[ccIndex];
}

var chancePile = [, 0, 10, , 11, 24, , 39, 5, , -1, -2, , -1, , -3];
function chance() {
    var result = chancePile[(Math.random() * 16) | 0];
    if (result === undefined) return;
    if (result === -3)
        pos -= 3;
    else if (result === -2) {
        if (pos > 12 && pos < 28) pos = 28;
        else pos = 12;
    }
    else if (result === -1) {
        if (pos > 35) pos = 5;
        else if (pos < 15) pos = 15;
        else pos = 25;
    }
    else pos = result;
}


var distribution = [];
for (var i = 0; i < 1000000; i++) {
    var roll = rollDice();
    if (roll === 0) pos = 10;
    else pos = (pos + roll) % 40;
    if (pos === 30) pos = 10;
    if (pos === 2 || pos === 17 || pos === 33) communityChest();
    if (pos === 7 || pos === 22 || pos === 36) chance();
    if (pos === 33) communityChest();
    distribution[pos] = (distribution[pos] || 0) + 1;
}

var modalString = "", distributionTable = {};
for (var i = 0; i < distribution.length; i++) {
    distributionTable[distribution[i] || 0] = i;
}

distribution.sort(function (a, b) { return b - a });
console.log(distributionTable[distribution[0]] + "" + distributionTable[distribution[1]] + "" + distributionTable[distribution[2]]);