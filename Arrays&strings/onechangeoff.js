var program = function (str1, str2) {
    var diff = str1.length - str2.length;
    var err = 0;
    if (diff > 1) {
        return false;
    }
    var min = Math.min(str1.length, str2.length);
    for (var i = 0; i < min; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            if (str1.charAt(i + diff) !== str2.charAt(i)) {
                err++;
            }
        }
        if (err > 1) {
            return false;
        }
    };
    return true;
};


console.log(program('racecare', 'raccare'));