
function recursiveBinarySearchCount(arr, start, end, target) {
    let obj = {index: 0, calls: 0};
    while (start <= end) {
        obj.calls++;
        let middle = Math.floor((end - start) / 2) + start;
        if (target === arr[middle]) {
            obj.index = middle;
            break;
        } else if (target > arr[middle]){
            start = middle + 1;
            recursiveBinarySearchCount(arr, start, end, target);
        } else {
            end = middle - 1;
            recursiveBinarySearchCount(arr, start, end, target);
        }
    }
    return obj;
}

let arr = [1, 3, 5, 7, 9, 11, 25];

console.log(recursiveBinarySearchCount(arr, 0, arr.length - 1, 11));
