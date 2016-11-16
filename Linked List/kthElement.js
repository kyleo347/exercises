Node = function (data) {
    this.data = data;
    this.next = null;
}

Program = function (node, k) {  //find the kth element from last in linked list, where node is first element
    var i = 0;
    var start = node;
    var end = node;
    for (var i = 0; i < k; i++) {
        if (end.next == null) {
            return -1;
        }
        end = end.next;
    }
    while (end.next !== null) {
        start = start.next;
        end = end.next;
    }
    return start;
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

console.log(Program(a,0));