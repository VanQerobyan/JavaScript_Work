function sumArray(arr) {

    if(arr.length == 0) return "Invalid array";    
    var sum =0; 

    for(var i =0; i <arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}

var arr = [4];
console.log("Array elements summation is: " + sumArray(arr));
