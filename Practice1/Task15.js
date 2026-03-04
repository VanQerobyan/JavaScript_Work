function isMyNumber(num){

     let myNum=Number(num);
     
    if(typeof(myNum) === "number" && typeof(myNum)!== "string" && (!isNaN(myNum))) return true;
    if(isNaN(num)) return null;
    
}

let num=NaN;
let res=isMyNumber(num);

console.log("Res is: " + res);