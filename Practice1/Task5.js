function isContains(str, subStr){

    if(str.includes(subStr)){
        return true; 
    }else{
        return false;
    }
}



var str = "Learning JavaScript";
var subStr = "Jaava";

var res = isContains(str, subStr);

console.log("Contains: " + res);
