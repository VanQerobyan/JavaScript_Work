function countDigits(num) {

    var count = 0;

    if (num < 0) {
        num *= -1;
    }

    //456
    while (num != 0) {
        count++;
        num =Math.floor(num/10);
    }
    return count;
}


var num = 0;
console.log("Number digit count is: " + countDigits(num));