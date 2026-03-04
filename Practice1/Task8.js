
function contSub(str, subStr){

    if(str.includes(subStr)){
        return true;
    }else{
        return false;
    }
}

let str="Hello World";
let subS="loo";
console.log(contSub(str, subS));