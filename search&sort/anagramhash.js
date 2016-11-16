var anagramHash = function (str) {
    var char;
    var charArr = [];
    for (var i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        charArr[char]++ ? charArr[char] > 0 : charArr[char] = 1;
    }
    return charArr.toString();
}

var hashTable = function () {
    this.list = {};
    this.length = 0;
}

hashTable.prototype.put = function (str) {
    var hash = anagramHash(str);
    if (!(this.list.hasOwnProperty(hash))) {
        this.list[hash] = [];
    }
    this.list[hash].push(str);
    this.length++;
}

hashTable.prototype.output = function () {
    var output = [];
    for (var key in this.list) {
        if (this.list.hasOwnProperty(key)) {
            var arr = this.list[key];
            for (var idx in arr) {
                output.push(arr[idx]);
            }
        }
    }
return output;
}

var a = new hashTable();
a.put("banana");
a.put("rocket");
a.put("car");
a.put("poop");
a.put("aaannb");
console.log(a.output());