
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function program( n, m, j, i){
var length = (j - i);
var slide = i;
while ( (m<<(slide + 1)) < Math.pow(2,j)){
    slide ++;
}
var mask = ~((Math.pow(2,length) - 1) << i);
var output = n & mask;
mask = ~mask & (m << slide);
return output | mask;
}

console.log(dec2bin(1024));
console.log(dec2bin(4));
console.log(dec2bin(1080));
console.log( program(1024, 7, 6,1)); 