

function myNew(myConstr, ...myArgs) {
    let obj = {};
    obj.__proto__ = myConstr.prototype;
    let res = myConstr.call(obj, ...myArgs);
    if (typeof res === "object") return res;
    return obj;
}

function User(name) {
 this.name = name;
}

function Car(model) {
 this.model = model;
 return { custom: "returned object" };
}

const user = myNew(User, "Alex");
console.log(user.name); // Alex
console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(user.constructor === User); // true

const car = myNew(Car, "BMW");
console.log(car.custom); // returned object

function Empty() {}

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

function Test() {
 return 123;
}

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); // true

