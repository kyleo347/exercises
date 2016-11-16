Layer = function (obj) {
    this.obj = obj;
    this.next = null;
}

Node = function (obj) {
    this.obj = obj;
    this.children = [];
}

Stack = function () {
    this.current = null;
}

Stack.prototype.pop = function () {
    var output = this.current.obj;
    this.current = this.current.next;
    return output;
}
Stack.prototype.push = function (obj) {
    var newLayer = new Layer(obj);
    newLayer.next = this.current;
    this.current = newLayer;
}
Stack.prototype.peek = function () {
    if (this.current !== null){
    return this.current.obj;
    }
    return null;
}
Stack.prototype.isEmpty = function () {
    if (this.current == null) {
        return true;
    }
    return false;
}

Queue = function () {
    Stack.call(this);
    this.last = null;
}
Queue.prototype = Object.create(Stack.prototype);
Queue.prototype.constructor = Queue;
Queue.prototype.push = function (obj) {
    var newLayer = new Layer(obj);
    if (this.current == null) {
        this.current = newLayer;
        this.last = newLayer;
    } else {
        this.last.next = newLayer;
        this.last = newLayer;
    }
}

var LayerList = function (topNode) {
    var index = 1;
    var workQueue = new Queue();
    var nextQueue = new Queue();
    var currentQueue = new Queue();
    currentQueue.push(topNode);
    var output = [currentQueue];
    currentQueue = new Queue();
    var current;
    topNode.children.forEach(function (obj) {
        workQueue.push(obj);
    }, this);
    while (workQueue.peek() !== null) {
        current = workQueue.pop();
        currentQueue.push(current);
        current.children.forEach(function (element) {
            nextQueue.push(element);
        }, this);
        if (workQueue.peek() == null) {
            output.push(currentQueue);
            currentQueue = new Queue();
            workQueue = nextQueue;
            nextQueue = new Queue();
        }
    }
    return output;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
a.children = [b,c];
b.children = [d];
c.children = [e,f];

console.log(LayerList(a).toString());