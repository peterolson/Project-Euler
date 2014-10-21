function findTriplet(max) {
	for(var a = 1; a < max; a++) {
		for(var b = a + 1; b < max - a; b++) {
			var c = 1000 - a - b;
			if(a * a + b * b === c * c) {
				return a * b *c;
			}
		}
	}
}

console.log(findTriplet(1000));