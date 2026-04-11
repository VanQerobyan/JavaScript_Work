function myInstanceOf(obj, myConstr) {
    if (obj === null || typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'boolean' ||
         typeof obj === "bigint" || typeof obj === 'symbol' || typeof obj === 'undefined') return false;

    while (obj.__proto__ !== null) {
        if (obj.__proto__ === myConstr.prototype) {
            return true;
        }
        obj = obj.__proto__;
    }

    return false;
}



function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false


console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false

