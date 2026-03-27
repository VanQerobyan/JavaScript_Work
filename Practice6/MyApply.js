Function.prototype.myApply = function(myObj, myArgs) {
    let myThis = myObj ?? globalThis;
    let prop = Symbol();
    myThis[prop] = this;
    let res = myThis[prop](...myArgs);
    delete myThis[prop];
    return res;
}



let myObj = {
    name: "Karen",
    age: 23,
    foo: function() {
        console.log(this.age);
    }
};

function foo() {
    console.log(this.name);
}


myObj.foo.myApply(myObj, []);
