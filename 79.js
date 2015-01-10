var logins = ["319", "680", "180", "690", "129", "620", "762", "689", "762", "318", "368", "710", "720", "710", "629", "168", "160", "689", "716", "731", "736", "729", "316", "729", "729", "710", "769", "290", "719", "680", "318", "389", "162", "289", "162", "718", "729", "319", "790", "680", "890", "362", "319", "760", "316", "729", "380", "319", "728", "716"];
var before = { 0: {}, 1: {}, 2: {}, 3: {}, 6: {}, 7: {}, 8: {}, 9: {} };
for (var i = 0; i < logins.length; i++) {
    var login = logins[i];
    before[login[1]][login[0]] = 1;
    before[login[2]][login[1]] = 1;
}

function findBeginning() {
    for (var i in before) {
        var digits = before[i];
        var length = 0;
        for (var d in digits) {
            length++;
        }
        if (!length) return i;
    }
}

function removeDigit(d) {
    delete before[d];
    for (var i in before) {
        delete before[i][d];
    }
}

var str = "";
while (str.length < 8) {
    var c = findBeginning();
    removeDigit(c);
    str += c;
}
console.log(str);