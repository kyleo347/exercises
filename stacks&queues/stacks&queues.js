Layer = function (obj) {
    this.obj = obj;
    this.next = null;
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
    return this.current.obj;
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

/*var s = new Stack();
s.push({ a : 1});
s.push('b');
s.push('c');
s.push('d');
s.push('e');
s.push('f');

var q = new Queue();
q.push({ a : 1});
q.push('b');
q.push('c');
q.push('d');
q.push('e');
q.push('f');
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());*/