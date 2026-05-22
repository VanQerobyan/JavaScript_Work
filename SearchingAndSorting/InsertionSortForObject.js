
function insertionSortForObject(arr) {

    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j].age < arr[j - 1].age) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
}


let arr = [
  { name: "Anna", age: 22 },
  { name: "John", age: 18 },
  { name: "Mike", age: 30 }
];

console.log(insertionSortForObject(arr));