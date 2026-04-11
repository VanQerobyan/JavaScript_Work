
Array.prototype.mySum = function() {

    let sum = 0;

    for (let i = 0; i < this.length; ++i) {
        if (this[i] === null || isNaN(this[i]) || typeof this[i] === "string" || typeof this[i] === "boolean" || 
           typeof this[i] === "bigint" || typeof this[i] === "symbol" || typeof this[i] === "undefined") {
            throw new Error("One element is not a number");
           }
        sum += this[i];
    }
    return sum;
}

let obj = {};

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

// console.log([1, "2", 3].mySum()); // Error
// console.log([1, NaN].mySum()); // Error
// console.log([true, 2].mySum()); // Error

