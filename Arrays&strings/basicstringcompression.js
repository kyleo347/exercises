var program = function (str1) {
    var count = 1;
    var oldletter = str1.charAt(0);
    var output = '';
    for (var i = 1; i <= str1.length; i++) {
        if (str1.charAt(i) !== oldletter) {
            output += oldletter + count;
            oldletter = str1.charAt(i);
            count = 1;
        } else {
            count++;
        }
        if (output.length > str1.length) {
            return str1;
        }
    }
    return output;
};


console.log(program('raaaccccccceecaare'));
console.log(program('DeR'));