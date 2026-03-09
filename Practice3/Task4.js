let myCallBack = (curVal, index, arr) => {
     return (Number.isNaN(arr[index]));
}


let arr = [4, 11, "NaN", "10", 55];

function mySome(arr, myCallBack) {
    for (let i = 0; i < arr.length; ++i) {
        if(myCallBack(arr[i], i, arr)) {
            return true;
        } 
    }
    return false;
}


let res = mySome(arr, myCallBack);
console.log(res);