var cubes = {};

for (var i = 0; ; i++) {
    var cube = i * i * i,
        sortedDigits = cube.toString().split("").sort().join("");
    var permutations = cubes[sortedDigits];
    if (!permutations) permutations = [];
    permutations.push(cube);
    if (permutations.length === 5) {
        console.log(permutations[0]);
        break;
    }
    cubes[sortedDigits] = permutations;
}