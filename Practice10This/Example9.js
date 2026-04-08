

function sum(a, b, c) {
    return a + b + c;
}


function execute(fn, arr) {
   return fn(...arr);
}


console.log(execute(sum,[2, 4, 6]));
console.log(execute(sum,[2, 4, null]));
console.log(execute(sum,[2, -8, 7]));