

function binarySearchCount(arr, target) {
    let obj = {index : 0, iterations: 0};
    let start = 0; 
    let end = arr.length - 1;

    while (start <= end) {
         obj.iterations++;
        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            obj.index = middle;
            break;
        } else if (target > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return obj;
}

let arr = [1, 3, 5, 7, 9, 11, 25];

console.log(binarySearchCount(arr, 3));