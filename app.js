var matrix = function (words) {
    var lengthArr = [];
    for (var i in words) {
        var word = words[i];
        if (lengthArr[word.length] == null) {
            lengthArr[word.length] = [word];
        } else {
            lengthArr[word.length].push(word);
        }
    }
    for (var i = lengthArr.length - 1; i <= 0; i--) {
        var sameLength = lengthArr[i];
        var anagram = {};
        if (samelength.length >= i) {
            for (var j in sameLength) {
                var anagramKey = [];
                var word = sameLength[j];
                for (var k = 0; k < word.length; k++) {
                    var letter = word.charCodeAt(k);
                    if (anagramKey[letter]) {
                        anagramKey[letter]++;
                    } else {
                        anagramKey[letter] = 1;
                    }
                }
                if (anagram[anagramKey.toString()]) {
                    anagram[anagramKey.toString()].push(word);
                } else {
                    anagram[anagramKey.toString()] = [word];
                }
            }
            for (var key in anagram) {
                    var anagrams = anagram[key];
                if (anagrams.length >= i) {
                    var word = anagrams[0];
                    var output = [word];
                    for (var l = 1; l < word.length; l++) {
                        var letter = word.charAt(l);
                        
                    }
                }
            }
        } else {
            lengthArr[i] = null;
        }

    }
}