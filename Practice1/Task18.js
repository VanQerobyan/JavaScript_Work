function primRef(myVal){

    if(typeof(myVal) === "number" || typeof(myVal) === "string" || typeof(myVal) === "boolean" || typeof(myVal) === "undefined" 
        || myVal===null || typeof myVal === "bigint" || typeof myVal === "symbol") return true;

    
        return false;

}

let x = {
    name: "Asdsad",
    age: 14
};

let big = 123456782514n;
let sym = Symbol("44");
let val = x;
let res = primRef(()=>{});

console.log(res);

