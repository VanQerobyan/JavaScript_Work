const myCallBack = (curVal, index, arr) => {
    if(index % 2 !== 0){
        arr[index] += 10;
    }
}

let arr = [7, 5, 4, 6, 1, 11, 10, 5, 4];

function myForEach(arr, myCallBack) {
    for (let i = 0; i < arr.length; ++i) {
        myCallBack(arr[i], i, arr);
    }
}

myForEach(arr, myCallBack);

console.log(arr);




