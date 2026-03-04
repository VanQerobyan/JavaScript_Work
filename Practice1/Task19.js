function twoSum(num1, num2){

    let myNum1=Number(num1);
    let myNum2=Number(num2);


    if(typeof(myNum1) === "number" && typeof(myNum2) === "number" && (!Number.isNaN(myNum1)) && (!Number.isNaN(myNum2))) return myNum1 + myNum2;

    return "Invalid input";
}


let num1=4;
let num2="7a";

let res=twoSum(num1, num2);

console.log(res);
