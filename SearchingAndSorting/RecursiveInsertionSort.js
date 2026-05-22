function recursiveInsertionSort(arr, index) {

  if (index === arr.length) return; 
  let i = index;

  while (i > 0) {
        if (arr[i] < arr[i - 1]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }
        i--;
      }
          recursiveInsertionSort(arr, index + 1);
          return arr;
    
}


let arr = [5, 2, 4, 1];


console.log(recursiveInsertionSort(arr, 1));