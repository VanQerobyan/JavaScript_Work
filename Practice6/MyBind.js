Function.prototype.myBind = function(myObj, ...myArgs) {
    let myThis = myObj ?? globalThis;
    let prop = Symbol();
     myThis[prop] = this;

    return function(...myArgs1) {
      let res = myThis[prop]([...myArgs, ...myArgs1]);
        delete myThis[prop];
        return res
    }
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


let f = foo.myBind(myObj);

f();