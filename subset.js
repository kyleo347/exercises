//function to find all subsets within a set

var subset = function (set) {
    var output = {};
    subsetCached(set,output);
    return output;
}

var subsetCached = function (set,output) {
    if (set.length === 0) {
        return;
    }
    var left,right; 
    if ( output.hasOwnProperty(set.toString()) === false) {
        output[set.toString()] = set ;
    }
    for (var i in set) {
        left = set.slice(0,i);
        right = set.slice(i+1);
        left = left.concat(right);
        subsetCached(left,output);
    }
}

var set = [1,3,2,15,22,17];
console.log(subset(set));





























/*var stringSearch = function (strArr, str) {
    var start = Math.floor(strArr.length() / 2);
    while (str !== strArr[start]) {
        
    }
    return start;
    
}


var arr = ["apple" , "", "car", "coupe", "funhouse", "", "", "maple", "niagara", "", "snake", "sneaky", "zebra", ""];
console.log(stringSearch(arr,"sneaky")); */