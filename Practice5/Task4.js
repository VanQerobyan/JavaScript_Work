
function trace(cb) {

    myTrace.history = [];

     function myTrace(...args) {
        args.length = 2;
        let output = cb(...args);
        myTrace.history.push({args, output});
        return output;
    }
    return myTrace;
}

function foo(a, b) {
 return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
// console.log(tracedFunc(2, 4, 6)); //6
// console.log(tracedFunc(2, 5, 5, 7)); //7

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]

