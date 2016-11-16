var program = function (matrix) {
var arr = matrix[0];
var output = [];
var xpivot = matrix.length / 2 - 1;
var ypivot = arr.length / 2 - 1;

for (var x = 0; x < matrix.length; x++) {
    var arr = matrix[x];
    output.push([]);
    for (var y = 0; y < arr.length; y++) {
        output[x].push('');
    }
}
for (var x = 0; x < matrix.length; x++) {
    var arr = matrix[x];
    for (var y = 0; y < arr.length; y++) {
        var value = arr[y];
        //if (x > xpivot && y > ypivot) {
            arr2 = output[y];
            arr2[x] = value;
        //}
    }
}
return output;
};
var matrix = [[11,21,31,41],[12,22,32,42],[13,23,33,43],[14,24,34,44]];
console.log(matrix);
console.log(program(matrix));

/*
if x
*/