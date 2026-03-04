
function numIndex(arr, num){

    for(let i=0; i<arr.length; ++i){

        if(arr[i]==num) {
            return i;
        }   
    }
    return -1;
}

let arr=[4, 5, 6, 8, 99, 10];
let res=numIndex(arr, 10);
console.log("Number index is: " + res);