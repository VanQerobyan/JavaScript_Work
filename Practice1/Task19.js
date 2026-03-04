function twoSum(num1, num2){

     if ((typeof(num1) === "number" && typeof(num2) === "number") && (!Number.isNaN(num1)) && (!Number.isNaN(num2))) return myNum1 + myNum2;

    return "Invalid input";
}


let num1=4;
let num2="7";

let res=twoSum(num1, num2);

console.log(res);
