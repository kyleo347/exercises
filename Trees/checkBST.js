Node = function (obj) {
    this.obj = obj;
    this.left;
    this.right;
    this.up;
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

Node.prototype.getLeft = function () {
    if (this.left == null) {
        return null;
    }
    return this.left.obj;
}

Node.prototype.getRight = function () {
    if (this.right == null) {
        return null;
    }
    return this.right.obj;
}

var checkBST = function (node) {
    if (node == null) {
        return null;
    }
    var left = checkBST(node.left);
    var right = checkBST(node.right);
    if (left >= node.obj) {
       return false;
    }
    if (right == null){
    return node.obj;
    }
    if (right > node.obj) {
        return right;
    }
    return false;
}

var a = new Node(5);
var b = new Node(2);
var c = new Node(8);
var d = new Node(7);
var e = new Node(10);
var f = new Node(9);

a.appendLeft(b);
a.appendRight(c);
c.appendLeft(d);
c.appendRight(e);
e.appendLeft(f);

var g = new Node(25);
var h = new Node(10);
var i = new Node(26);

g.appendLeft(h);
g.appendRight(i);

console.log(checkBST(a)); // true
console.log(checkBST(g)); // true