let myCallBack = (curVal, index, arr) => {

    
        if ((curVal + index) % 2 === 0 ) {
            arr[index] = 1;
        }
        
}


let arr = [4, 10, "6a", "7", undefined, undefined, 88, NaN, 77, Infinity, Infinity];

function myFiltr(arr, myCallBack) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        myCallBack(arr[i], i, arr);
        if(!Number.parseFloat(arr[i])){ continue;}
        res.push(Number.parseFloat(arr[i]));
    }
    return res;
}

let res = myFiltr(arr, myCallBack);
console.log(res);


