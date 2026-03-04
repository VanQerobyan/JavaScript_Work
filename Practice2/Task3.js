function minInArrays(arr) {

    if (arr.length === 0) return null;

    var min = arr[0];

    for( var i= 0; i < arr.length; ++i) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return  min;
}


var arr = [];
console.log("Minimum element is: " + minInArrays(arr));