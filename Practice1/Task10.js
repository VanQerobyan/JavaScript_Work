function oddAndEven(num){
    if(num%2==0){
       return "even";
    }else{
       return "odd"; 
    }
}

let num=43;
let res=oddAndEven(num);
console.log("Number is: " + res);
