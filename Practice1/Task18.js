function primRef(myVal){

    if(typeof(myVal) === "number" || typeof(myVal) === "string" || typeof(myVal) === "boolean" || typeof(myVal) === "undefined" 
        || myVal===null) return true;

    
        return false;

}

let x = {
    name: "Asdsad",
    age: 14
};


let val = x;
let res = primRef(val);

console.log(res);

