function arraySum(arr){

    let sum=0;
    for(let i=0; i<arr.length; ++i){
        sum+=arr[i];
     }   
     return sum;
}

let arr=[4, 55, 88, -52, 15];
let res=arraySum(arr);
console.log("Array elements summation is: " + res);