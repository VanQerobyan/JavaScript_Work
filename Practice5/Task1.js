
function curry(cb) {

    return function myCurry(...myArgs) {
        if (myArgs.length === cb.length) {
            return cb(...myArgs);
        }
        return (...myArgs1) => myCurry(...myArgs, ...myArgs1);
    }

}
const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24



