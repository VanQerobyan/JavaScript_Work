const myCallBack = (curVal, index, arr) => {
    return arr[index] * 2;
}


let arr = [10, 4 ,0 ,-8, 7];


function myMap(arr, myCallBack) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(myCallBack(arr[i], i, arr));
    }
    return res;
}


let res = myMap(arr, myCallBack);
console.log(res);
//console.log(res);

