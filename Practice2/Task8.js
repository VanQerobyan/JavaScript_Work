function removeFirstChar(str) {
     var str1 = "";

     for (var i= 1; i <str.length; ++i) {
          str1 += str[i];
     }
     return str1;
}


var str = "";

console.log("New string is: " + removeFirstChar(str));