
// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

let weakMap = new WeakMap();

let arr = [];
function addLike(post, user) {

    arr.push(user);
    weakMap.set(post, arr);
    // return weakMap.get(post);
}


function getLikes(post) {
    if (!weakMap.has(post)) return [];
     return weakMap.get(post);
}

console.log(addLike(post1, 'John'));
console.log(addLike(post1, 'Anna'));

// Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined

