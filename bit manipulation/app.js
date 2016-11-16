
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function program( n){
var i = 1;
var ones = [];
while ((1<<i) < n) {
    if ((1<<i) & n) {
        ones.push(i);
    }
    i++;
}
if (ones.length === 0) {
    return;
}
//next highest
var highest = 0;
var first = ones[0];
var tmp = ones.slice(1);
for (var idx in tmp) {
    if (condition) {
        
    }
}
}

console.log(dec2bin(1024));
console.log(dec2bin(4));
console.log(dec2bin(1080));
console.log( program(1024, 7, 6,1));