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
    if (this.current !== null) {
    return this.current.obj;
    }
}
Stack.prototype.isEmpty = function () {
    if (this.current == null) {
        return true;
    }
    return false;
}

MinStack = function () {
    Stack.call(this);
    this.min = new Stack();
}

MinStack.prototype = Object.create(Stack.prototype);
MinStack.prototype.constructor = MinStack;
MinStack.prototype.push = function (obj) {
    Stack.prototype.push.call(this,obj);
    if (this.min.peek() !== undefined){
    this.min.push(Math.min(this.min.peek(),obj));
    } else {
        this.min.push(obj);
    }
}
MinStack.prototype.pop = function () {
    this.min.pop();
    return Stack.prototype.pop.call(this);
}
MinStack.prototype.Min = function () {
    return this.min.peek();
}


var s = new MinStack();
s.push(2);
s.push(33);
s.push(4);
s.push(88);
s.push(5);
s.push(1);
console.log(s.pop());
console.log(s.Min());
console.log(s.pop());
console.log(s.Min());
console.log(s.pop());
console.log(s.Min());
console.log(s.pop());
console.log(s.Min());
console.log(s.pop());
console.log(s.Min());
console.log(s.pop());
console.log(s.Min());