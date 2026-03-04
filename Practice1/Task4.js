
function strRev(str){

    let str1="";    
    for(let i=str.length-1; i>=0; --i){
        str1+=str[i];
     }
     return str1;
}


let res=strRev("Hello");
console.log(res);
