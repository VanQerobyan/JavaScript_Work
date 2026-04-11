function getPrototypeMethods(obj) {

    if (obj.__proto__ == null) {
        return [];
    }

    let meth = Object.getOwnPropertyNames(obj.__proto__);
    let arr = [];

    for (let prop of meth) {
        if (typeof obj[prop] === "function" && obj.__proto__ !== Object.prototype && prop !== 'constructor') {
            arr.push(prop);
        }
     }
     return arr;
}



function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []

