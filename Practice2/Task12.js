function firstAndLast(arr) {

    var arr1 = [];

    arr1[0] = arr[0];
    arr1[1] = arr[arr.length - 1];

    return arr1;
}


var arr = [8];
console.log(firstAndLast(arr));