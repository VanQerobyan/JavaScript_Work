function countChar(str, ch) {

    if(str.length == 0) return "Invalid String";
    var count = 0;

    for (var i =0; i <str.length; ++i) {
        if (str[i] === ch) {
            count++;
        }
     }
     return count;
}

var str = "";
var ch ='d';

console.log("Count is: " + countChar(str, ch));

