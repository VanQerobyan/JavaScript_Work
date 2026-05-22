
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if(arr[i] === target) {
            return i;
        }
    }
}


let arr = [1, 5, 7, 4, 3, 9];

console.log(linearSearch(arr, 4));