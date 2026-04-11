
function checkProperty(obj, myKey) { 

    if (!obj.__proto__) {
        if (obj[myKey]) {
            return "own";
       }
    }


    let tmp = obj.__proto__;


    while (tmp) {
        if (tmp[myKey]) {
            return "inherited";
        }
        if (obj[myKey]) {
            return "own";
        }
        tmp = tmp.__proto__;
    }
    return "not found";
}



const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found
// Additional edge cases:
const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited


