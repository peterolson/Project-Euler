function collatzLength(n) {
	var i = 1;
	while(n > 1) {
		if(n % 2 === 0) n /= 2;
		else n = 3 * n + 1;
		i++
	}
	return i;
}

var maxLength = 0, maxNum = 0;
for(var i = 5e5 + 1; i < 1e6; i += 2) {
	var length = collatzLength(i);
	if(length > maxLength) {
		maxLength = length;
		maxNum = i;
	}
}

console.log(maxNum);