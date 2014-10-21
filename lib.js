exports.binarySearch = function (arr, n) {
    function search(arr, n, min, max) {
        if (max < min) return -1;
        var middle = Math.floor((min + max) / 2),
            probe = arr[middle];
        if (probe < n) return search(arr, n, middle + 1, max);
        if (probe > n) return search(arr, n, min, middle - 1);
        return middle;
    }
    return search(arr, n, 0, arr.length - 1);
};

exports.choose = function (n, m) {
    var prod = 1;
    for (var i = n; i > m; i--) prod *= i;
    return Math.round(prod / factorial(m));
};

function factorial (n) {
	if(n < 2) return 1;
	var product = n;
	for(var i = 2; i < n; i++) product *= i;
	return product;
}
exports.factorial = factorial;

exports.fibonacci = function (n) {
    var phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};

var gcd = function (a, b) {
    if (!b) return a;
    return gcd(b, a % b);
};

exports.gcd = gcd;

exports.isPalindrome = function (n) {
    return n + "" === (n + "").split("").reverse().join("");
};

exports.lcm = function (a, b) {
    return a * b / gcd(a, b);
};

exports.nthPrime = function (n) {
    var nPrimes = exports.nPrimes(n);
    return nPrimes.last();
};

exports.nPrimes = function (n, primes) {
    primes = primes || [];
    i = (primes[primes.length - 1] || 1) + 1;
    while (primes.length < n) {
        for (var root = Math.sqrt(i), j = 0; primes[j] <= root; j++) {
            if (i % primes[j] === 0) root = 0;
        }
        if (root) primes.push(i);
        i++;
    }
    return primes;
};

exports.nextPrime = (function () {
    var primes = [];
    var n = 1;
    return function () {
        var next = exports.nPrimes(n, primes).last();
        primes.push(next);
        n += 2;
        return next;
    }
})();

exports.primesBelow = function (max) {
    var primes = exports.nPrimes(1);
    for (var i = 2; primes.last() < max; i++) {
        primes = exports.nPrimes(i, primes);
    }
    return primes.slice(0, -1);
};

exports.primeFactors = function (n) {
    var factors = [];
    var d = 2;
    while (n > 1) {
        while (n % d === 0) {
            factors.push(d);
            n /= d;
        }
        d++;
        if (d * d > n) {
            if (n > 1) factors.push(n);
            break;
        }
    }
    return factors;
};

exports.isPrime = function (n) {
    return exports.primeFactors(n).length === 1;
};

exports.getDivisors = function (n) {
    var factors = exports.primeFactors(n);

    function getDivisors(factors, i) {
        if (i >= factors.length) return [1];
        var start = i;
        while (i < factors.length) {
            if (factors[i] !== factors[i + 1]) break;
            i++;
        }
        var divisors = getDivisors(factors, i + 1);
        var list = [];
        var f = factors[i];
        for (var k = 0; k <= (i - start) + 1; k++) {
            list = list.concat(divisors.map(function (x) {
                return Math.pow(f, k) * x;
            }));
        }
        return list;
    }
    return getDivisors(factors, 0);
};

exports.getProperDivisors = function (n) {
    return exports.getDivisors(n).slice(0, -1);
};

exports.numberOfDivisors = function (n) {
    var factors = exports.primeFactors(n);
    var groups = [];
    for (var i = 1, j = 1; i < factors.length; i++) {
        if (factors[i] === factors[i - 1]) j++;
        else {
            groups.push(j + 1);
            j = 1;
        }
    }
    groups.push(j + 1);
    return groups.product();
};

exports.permutations = function (list) {
    function permutations(list) {
        if (list.length === 1) return [list];
        var perms = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] === list[i + 1]) continue;
            var rest = list.slice(0, i).concat(list.slice(i + 1));
            perms = perms.concat(permutations(rest).map(function (x) {
                return [list[i]].concat(x);
            }));
        }
        return perms;
    };
    list.sort();
    return permutations(list);
};

// Returns the sum of the multiples of n between min and max
// Uses the closed form solution
//   \sum_{i=a}^b i = (b - a + 1)(a + b) / 2
exports.sum = function (min, max, n) {
    var a = Math.floor(min / n),
	    b = Math.floor(max / n);
    return n * (b - a + 1) * (a + b) / 2;
};

Array.prototype.last = function() {
	return this[this.length - 1];
};

Array.prototype.sum = function () {
    if (this.length < 1) return this[0] || 0;
	return this.reduce(function(a, b) { return a + b; });
};

Array.prototype.product = function() {
	return this.reduce(function(a, b) { return a * b; });
};

Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};