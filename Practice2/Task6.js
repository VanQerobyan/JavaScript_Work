function average(arr) {

    if(arr.length === 0) return "Invalid array";
    var avg = 0;

    for (var i = 0; i < arr.length; ++i) {
        avg += arr[i];
    }
    return avg / arr.length;
}


var arr = [];
console.log("Array average is: " + average(arr));