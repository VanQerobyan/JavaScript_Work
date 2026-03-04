
function contSub(str, subStr){

    if(str.includes(subStr)){
        console.log(subStr);
    }else{
        console.log("Not substring")
    }
}

let str="Hello World";
let subS="llo";
contSub(str, subS);