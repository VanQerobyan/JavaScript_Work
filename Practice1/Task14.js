function myNumber(num){

    if(num==Infinity || num==Number.MAX_SAFE_INTEGER || num==Number.MIN_SAFE_INTEGER || isNaN(num)) return false;
    if(!isNaN(num)) return true;

}

let num="4";
let res=myNumber(num);

console.log("Res is: " + res);

