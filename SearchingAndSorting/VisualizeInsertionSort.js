function insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j] < arr[ j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
          console.log(arr);
    }
}



let arr = [5, 2, 4, 1];

insertionSort(arr);

