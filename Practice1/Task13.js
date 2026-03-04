function objCont(val1, val2){

    return{
        loose:val1 == val2,
        strict:val1 === val2
    };
}


var val1=42;
var val2="42";

console.log(objCont(val1, val2));