let myIndexOf = (arr, searchElement) => {   

    // if(arr.length === 0) return -1;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}


let arr = [];

let res = myIndexOf(arr, 4);
console.log(res);
