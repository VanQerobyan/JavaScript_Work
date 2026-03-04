function mySwap(str){

    if(str === 0 || str === -0 || str === undefined || str === null || str === "" || str === '' 
        || (Number.isNaN(str))) return true;
      
    return false;
}


let x=null;
let res=mySwap(x);

console.log("res is: " + res);
