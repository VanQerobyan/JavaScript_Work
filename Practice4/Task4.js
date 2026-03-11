let str = ["name", "age", "weight", "height", "email"];
let str1 = ["Hayk", "22", "66", "160", "hayk22@gmail.com"];

myObj = {};

let i = 0;
for (let val of str) {
   
    myObj[val] = str1[i];
    myKey += i++;
}


console.log(myObj);