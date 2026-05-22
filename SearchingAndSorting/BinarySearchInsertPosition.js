

function binarySearchInsertPosition(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (target > arr[end]) return end + 1;
        if (target < arr[start]) return start;

        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            start = middle + 1;
            if (arr[start] > target) {
                return start;
            }
        } else {
            end = middle - 1;
            if (arr[end] < target) {
                return middle;
            }
        }
    }
}

let arr = [1, 3, 5, 7, 14, 17];

console.log(binarySearchInsertPosition(arr, 6));