function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
    // console.log(a);
   res *= i;
 }
 return res;
}

function memoize(cb) {


    let cache = [];
    return function myMemo(n) {
       if (cache[n]) {
          return cache[n];
       }
       return cache[n] = cb(n);
    }
 }

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120