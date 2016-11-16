Node = function (obj) {
    this.obj = obj;
    this.left = {};
    this.right = {};
    this.up = {};
}

Node.prototype.appendLeft = function (node) {
    if (node instanceof Node) {
        this.left = node;
        node.up = this;
    }
}

Node.prototype.appendRight = function (node) {
    if (node instanceof Node) {
        this.right = node;
        node.up = this;
    }
}

var getDepth = function (node) {
    var left = 0;
    var right = 0;
    if (node == null) {
        return 0;
    }
    if (node.left !== null) {
        left++;
        left += getDepth(node.left);
    }
    if (node.right !== null) {
        right++;
        right += getDepth(node.right);
    }
    return Math.max(left, right);

}

var checkBalanced = function (node) {
    if (Math.abs(getDepth(node.left) - getDepth(node.right)) <= 1  ) {
        return true;
    }
    return false;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.appendLeft(b);
a.appendRight(c);
c.appendLeft(d);
c.appendRight(e);
e.appendLeft(f);

console.log(checkBalanced(a));//false
console.log(checkBalanced(g));//true
console.log(checkBalanced(b));//true
console.log(checkBalanced(c));//true