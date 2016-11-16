Node = function (data) {
    this.data = data;
    this.next = null;
}

Program = function (node,x) {  //partition values less than x
    if (node == null || node.next == null) {
        return false;
    }
    var firstLeft;
    var lastLeft;
    var firstRight;
    var lastRight;
    var iter = node;
    while (iter !== null) {
        if (iter.data < x) {
            if (firstLeft == null) {
                firstLeft = iter;
                lastLeft = firstLeft;
            } else {
                lastLeft.next = iter;
                lastLeft = iter;
            }
        } else {
            if (firstRight == null) {
                firstRight = iter;
                lastRight = firstRight;
            } else{
                lastRight.next = iter;
                lastRight = iter;
            }
        }
        iter = iter.next;
    }
    lastRight.next = null;
    lastLeft.next = firstRight;
    return firstLeft;
}


var a = new Node(3);
var b = new Node(6);
var c = new Node(3);
var d = new Node(1);
var e = new Node(2);
var f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

var list = Program(a,3);
while (list !== null) {
    console.log(list.data);
    list = list.next;
}

console.log(d);