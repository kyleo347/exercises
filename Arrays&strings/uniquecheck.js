var uniquecheck = function( str ) {
	var dict = {};
	var letter;
	for (var i = str.length - 1; i >= 0; i--) {
		letter = str.charAt(i);
		if (letter in dict) {
			dict[letter] = 0;
		}else{
			
			dict[letter] ++; 
		}
	}

console.log(dict);
};

