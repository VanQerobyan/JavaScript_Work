
function recursiveBinarySearch(arr, start, end, target) {

    while (start <= end) {
        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            start = middle + 1; 
            recursiveBinarySearch(arr, start, end, target);
        } else {
            end = middle - 1;
            recursiveBinarySearch(arr, start, end, target);
        }
    }
}


let arr = [1, 3, 5, 7, 9, 11, 25, 36];

console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 25));