function firstAndLast(arr) {

    if (arr.length === 0) return arr;

    var arr1 = [];

    arr1[0] = arr[0];
    arr1[1] = arr[arr.length - 1];

    return arr1;
}


var arr = [];
console.log(firstAndLast(arr));