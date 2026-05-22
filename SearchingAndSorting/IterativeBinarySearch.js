
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    for (let i = start; i <= end; ++i) {
        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            return middle;
        } else if (target < arr[middle]) {
            end  = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}


let arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 7));