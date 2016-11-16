Node = function (obj) {
    this.obj = obj;
    this.children = [];
}

Graph = function () {
    this.nodes = [];
}
Graph.prototype.findPath = function (node1, node2) {
    var result = false;
    for (var i = 0; i < node1.children.length; i++) {
        var subnode = node1.children[i];
        if (subnode === node2) {
            return true;
        } else {
            if (this.findPath(subnode, node2)) {
                return true;
            }
        }
    }
    return false;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.children.push(b);
b.children.push(c, d);
d.children.push(e);
f.children.push(b);

var graph1 = new Graph();
graph1.nodes.push(a, b, c, d, e, f);

console.log(graph1.findPath(b, c));