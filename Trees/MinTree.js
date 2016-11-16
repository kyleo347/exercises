Node = function (attr) {
    this.attr = attr;
    this.children = [];
}

MinTree = function (nodeArray) {
    if (nodeArray.length == 0) {
        return null;
    } else if(nodeArray.length == 1) {
        return new Node(nodeArray[0]);
    }
    var middle = Math.floor(nodeArray.length / 2);
    var top = new Node(nodeArray[middle]);
    var left = MinTree(nodeArray.slice(0,middle));
    var right = MinTree(nodeArray.slice(middle+1));
    top.children = [left,right];
    return top;
}

console.log(MinTree([2,4,6,9,13,15,21,25]));