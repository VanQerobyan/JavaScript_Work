
function descendingInsertionSort(arr) {
    let flag = false;
    for (let i = 1; i < arr.length; ++i) {
        flag = false;
        for (let j = i; j > 0; --j) {
            if (arr[j] > arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                flag = true;
            }
            if(!flag) {
                break;
            }
        }
    }
    return arr;
}

let arr = [4, 1, 8, 3];

console.log(descendingInsertionSort(arr));