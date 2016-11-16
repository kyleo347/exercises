function checkIntersect(point1a, point1b, point2a, point2b) {
    var line1start, line1end, line2start, line2end;
    if (point1a[0] < point1b[0]){
        var line1start = point1a;
        var line1end = point1b;
    } else {
        var line1start = point1b;
        var line1end = point1a;
    }
        if (point2a[0] < point2b[0]){
        var line2start = point2a;
        var line2end = point2b;
    } else {
        var line2start = point2b;
        var line2end = point2a;
    }
    var slope1 = (line1end[1] - line1start[1]) / (line1end[0] - line1start[0]);
    var slope2 = (line2end[1] - line2start[1]) / (line2end[0] - line2start[0]);
    var y1 = line1start[1] - (slope1 * line1start[0]);
    var y2 = line2start[1] - (slope2 * line2start[0]);
    //same line
    if (slope1 !== slope2){
    //we now have functions for lines, solve for x
    // slope1 * x + y1 = slope2 * x + y2
    // y1 - y2 / = (slope2 - slope1) * x
    var x = (y1-y2)/(slope2-slope1);
    if (line1start[0] < x && line2start[0] < x && x < line1end[0]  && x < line2end[0]){
        return true;
    }
    } else if (y1 === y2 && ((line1start[0] < line2start[0] && line2start[0] < line1start[0]) 
    || (line2start[0] < line1start[0] && line1start[0] < line2start[0]))){
        return true;
    }
    return false;
}

console.log(checkIntersect([1,2],[8,3],[2,1],[4,4]));