
//Պայմանական հատկությունների գումարում. Ստեղծեք օբյեկտ և պայմանականորեն ավելացրեք հատկություն՝ հիմնվելով փոփոխականի ճշմարիտ կամ կեղծ լինելու վրա։

let arr = [1, NaN, "name", 44, Infinity, undefined, null, 88, false, true, NaN];
myObj = {};

let j = 0;

for (let i = 0; i < arr.length; ++i) {
    
    if (arr[i]) {

          let myKey = "key";
           myKey += j++;
          myObj[myKey] = arr[i];
         
    }
}

console.log(myObj);

