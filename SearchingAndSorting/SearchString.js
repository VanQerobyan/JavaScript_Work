
function binarySearchString(arr, start, end, target) {
    while (start <= end) {
        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            start = middle + 1;
            binarySearchString(arr, start, end, target);
        } else {
            end = middle - 1;
            binarySearchString(arr, start, end, target);
        }
    }
}

let arr = ["apple", "banana", "kiwi", "orange"];

console.log(binarySearchString(arr, 0, arr.length - 1, "kiwi"));
