Node = function (data) {
    this.data = data;
    this.next = null;
}

Program = function (node) {  //find the kth element from last in linked list, where node is first element
    node.data = node.next.data;
    node = node.next;
}


var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

Program(c);
console.log(a);