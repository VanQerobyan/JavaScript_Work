
function myType(str){
  

    if(typeof(str)==="string"){
        console.log("string")
    }else if(typeof(str)==="number"){
        console.log("number");
    }else if(typeof(str)==="boolean"){
        console.log("boolean");
    }else if(str===null){
            console.log("null");
    }else if(typeof(str)==="function"){
           console.log("function");
    } 
    else if(typeof(str)==="object"){
          if(Array.isArray(str)){
            console.log("array");
    }else {
        console.log("object");
     }  
   }
}
function foo(){
    return 10;
}

car = {make: "Toyota", year: 2020};
let str1=[44, 55, 11];
myType(car);