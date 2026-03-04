function isEven(num){

    if (num < 0) {
        return "Invalid numbers";
    }

    return num % 2 == 0;
}


var num = -11;
console.log(isEven(num));
