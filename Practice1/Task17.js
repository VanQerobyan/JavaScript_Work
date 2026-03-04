function myConv(myVal){


   if(typeof(myVal) === "object" && myVal !== null && !Array.isArray(myVal)) return true;
     return false;
   

}

function foo(){
    return 10;
}

let arr=[40,8,55];


dog={
    name:"Rex",
    age:4
};

let res=myConv(arr);

console.log("Res is: " + res);