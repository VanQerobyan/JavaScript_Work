function boolConv(val){

    let bool=Boolean(val);

    return bool;

}

let bool=-0;
let res=boolConv(bool);
console.log("Res is: " + res);