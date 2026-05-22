

class OwnUtility {

    insertionSort(arr) {
        let flag = false;
        for (let i = 1; i < arr.length; ++i) {
            flag = false;
            for (let j = i; j > 0; --j) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                    flag = true;
                }
                if (!false) {
                    break;
                }
            } 
        }
        return arr;
    }
    iterativeBinarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let middle = Math.floor((end - start) / 2) + start;
            if (target === arr[middle]) {
                return middle;
            } else if (target > arr[middle]) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
}
    recursiveBinarySearch(arr, start, end, target) {
        while (start <= end) {
            let middle = Math.floor((end - start) / 2) + start;
            if (target === arr[middle]) {
                return middle;
            } else if (target > arr[middle]) {
                start = middle + 1;
                this.recursiveBinarySearch(arr, start, end, target);
            } else {
                end = middle - 1;
                this.recursiveBinarySearch(arr, start, end, target);
            }
        }
    }
}


const utils = new OwnUtility();

console.log(utils.insertionSort([4,1,3]));
console.log(utils.iterativeBinarySearch([1,2,3], 2));

let arr = [ 1, 2, 4, 8, 17, 25, 36, 44, 88]
console.log(utils.recursiveBinarySearch(arr, 0, arr.length - 1, 25));