//a simple mergesort function and a function that organizes an array so that 
//each number is either less than or greater than both its neighbors

var peaksNValleys = function (numbers) {
    var median = 0;
    var arrayObj = {};
    var sorted = numbers.sort(sortNumber);
    arrayObj.low = [];
    arrayObj.high = [];
    median = sorted[Math.floor(numbers.length / 2)];
    for (var i in numbers) {
        if (numbers[i] < median) {
            arrayObj.low.push(numbers[i]);
        } else {
            arrayObj.high.push(numbers[i]);
        }
    }
    var output = [];
    var first, second, length;
    if (arrayObj.low.length > arrayObj.high.length) {
        length = arrayObj.low.length;
        first = "low";
        second = "high";
    } else {
        length = arrayObj.high.length;
        first = "high";
        second = "low";
    }
    for (var i = 0; i < length; i++) {
        if (arrayObj[first][i] !== undefined) {
            output.push(arrayObj[first][i]);
        }
        if (arrayObj[second][i] !== undefined) {
            output.push(arrayObj[second][i]);
        }
    }
    return output;
}

var mergesort = function(numbers) {
    return mergesortCached(numbers,0,numbers.length - 1);
}

var mergesortCached = function (numbers,low,high) {
    if (numbers.length < 2) {
        return numbers;
    }
    var middle = Math.floor((high - low) / 2);
    var left = mergesortCached(numbers, low, middle);
    var right = mergesortCached(numbers, middle, high);
    return merge(left,right);
}

var merge = function (left,right) {
    var output = [];
    var leftVal, rightVal;
    var leftIdx = 0;
    var rightIdx = 0;
    var length = left.length + right.length - 1;
    for (var i = 0; i < length; i++) {
        if (leftVal = undefined) {
            leftVal = left.shift();
            leftIdx ++;
        }
        if (rightVal = undefined) {
            rightVal = right.shift();
            rightIdx ++;
        }
        if (leftVal < rightVal) {
            output.push(leftVal);
            leftVal = undefined;
        } else {
            output.push(rightVal);
            rightVal = undefined ;
        }
    }
    return output;
} 

function sortNumber(a,b) {
    return a - b;
}
//console.log(peaksNValleys([5, 3, 1, 2, 3,6,22,-1,0, 0.5]));
//console.log(peaksNValleys([0,1,1,1,1,1,1,1]));

console.log(mergesort([3,5,1,22,15,11]));