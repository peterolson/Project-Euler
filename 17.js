function numberToWords(n) {
	if(n === 1000) return "onethousand";
	var words = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	words[20] = "twenty";
	words[30] = "thirty";
	words[40] = "forty";
	words[50] = "fifty";
	words[60] = "sixty";
	words[70] = "seventy";
	words[80] = "eighty";
	words[90] = "ninety";
	
	var name = "";
	var hundreds = (n / 100) | 0;
	if(hundreds) name += words[hundreds] + "hundred";
	var remainder = n % 100;
	if(!remainder) return name;
	if(hundreds) name += "and";
	if(words[remainder]) name += words[remainder];
	else {
		var tens = (remainder / 10) | 0,
			ones = remainder % 10;
		name += words[tens * 10] + words[ones];
	}
	return name;
}

var sum = 0;
for(var i = 1; i <= 1000; i++) {
	sum += numberToWords(i).length;
}
console.log(sum);