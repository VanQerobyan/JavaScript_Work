
function insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
         }
    }
    return arr;
}

let arr = [5, 2, 9, 1, 7];

console.log(insertionSort(arr));