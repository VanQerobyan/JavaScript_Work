function isMyNumber(num){

     let myNum=Number(num);
     
    if(typeof(myNum) === "number"  && (!isNaN(myNum))) return myNum;
    if(isNaN(num)) return null;
    
}

let num=NaN;
let res=isMyNumber(NaN);

console.log("Res is: " + res);