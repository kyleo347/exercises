var program = function (str1,str2) {
    str1 = str1 + str1;
    return (str1.indexOf( str2) > -1 );
};

console.log(program('waterbottle','terbottlewa'));
console.log(program('waterbottle','airplane'));

/*
if x
*/