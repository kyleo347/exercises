var mergeSort = function (arr) {
    return mergeSortCached(arr,0,arr.length);
}

var mergeSortCached = function (arr,left,right) {
    var middle,leftArr,rightArr;
    if ((right - left) > 1) {
        
    middle = Math.floor((left + right) / 2);
    leftArr = mergeSortCached(arr,left,middle);
    rightArr = mergeSortCached(arr,middle,right);
    return merge(leftArr, rightArr);
    } 

    return arr.slice(left,right);
}

var merge = function (leftArr,rightArr) {
    var output = [];
    var length = leftArr.length + rightArr.length;
    var leftIdx = 0;
    var rightIdx = 0;
    var leftValue;
    var rightValue;
    for (var i = 0; i < length; i++) {
        leftValue = leftArr[leftIdx];
        rightValue = rightArr[rightIdx];
        if (rightValue === undefined || leftValue < rightValue) {
            output.push(leftValue);
            leftIdx ++;
        } else if (leftValue === undefined || rightValue < leftValue) {
            output.push(rightValue);
            rightIdx ++;
        }
        
    }
    return output;
}

console.log(mergeSort([5,3,4,2,1]));
console.log(mergeSort([3,22,16,95,256,-1]));
console.log(mergeSort([45]));
console.log(mergeSort([]));
console.log(mergeSort([3,999999999999999,45]));