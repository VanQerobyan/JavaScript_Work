let myCallBack = (curVal, index, arr) => {
    return (Number.isNaN(arr[index]));
}


let arr = [NaN, NaN, 7, NaN];

function myEvery(arr, myCallBack) {
    for (let i =0; i < arr.length; ++i) {
        if(!myCallBack(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

let res = myEvery(arr, myCallBack);
console.log(res);
