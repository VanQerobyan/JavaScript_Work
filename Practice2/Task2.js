function sumUpTo(num){
    var sum = 0;

    if (num <= 0) return "Invalid number";

    for (var i = 0; i <= num; ++i){
        sum += i;
    }
    return sum;
}


var num = 1;

console.log("Summation is: " + sumUpTo(num));