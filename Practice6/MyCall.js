Function.prototype.myCall = function(myObj, ...myArgs) {
    let myThis = myObj ?? globalThis;
    let prop = Symbol();
    myThis[prop] = this;

    let res = myThis[prop](...myArgs);
    delete myThis[prop];
    return res;
}   

let myObj = {
    name: "Hayk",
    age: 22,
    foo: function () {
        console.log(this.age);
    }
};
function foo1 () {
    console.log(this.name);
}

foo1.myCall(myObj);