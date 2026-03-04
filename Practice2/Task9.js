function power(num, exp) {

    if (num <= 0 || exp < 0) return "Invalid numbers";

    var res = 1;
    for (var i = 0; i< exp; ++i){
        res *= num;
    }
    return res;
}


var num = -5; 
var exp = 0; 

console.log(power(num, exp));