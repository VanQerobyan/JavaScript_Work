function repeatString(str, n){

    var str1 = "";
    for (var i =0; i<n; ++i){
        str1 += str; 
    }
    return str1;
}


var str = "x";
var n = 0;

console.log(repeatString(str, n));