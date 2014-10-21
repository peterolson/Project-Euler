var start = new Date("6 Jan 1901"),
    end = new Date("31 Dec 2000");

var firstSundays = 0;
while(start <= end) {
	if(start.toUTCString().split(" ")[1] === "01") {
		console.log(start);
		firstSundays++;
	}
	start.setDate(start.getDate() + 7);
}
console.log(firstSundays);