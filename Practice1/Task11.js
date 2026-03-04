
function myType(str){
  

    if(typeof(str)==="string"){
        return "string";
    }else if(typeof(str)==="number"){
        return "number";
    }else if(typeof(str)==="boolean"){
        return "boolean";
    }else if(str===null){
            return "null";
    }else if(typeof(str)==="function"){
           return "function";
    } 
    else if(typeof(str)==="object"){
          if(Array.isArray(str)){
            return "array";
    }else {
        return "object";
     }  
   }
}
function foo(){
    return 10;
}

car = {make: "Toyota", year: 2020};
let str1=[44, 55, 11];
console.log(myType(true));