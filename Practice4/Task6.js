// Օբյեկտի մուտքագրման մանիպուլյացիա. Օգտագործեք `Object.entries()`-ը՝ օբյեկտը բանալի-արժեք զույգերի զանգվածի փոխակերպելու համար, այնուհետև մանիպուլացրեք այն՝ պայմանի հիման վրա զտելով, նախքան այն կրկին օբյեկտի փոխակերպելը:

myObj = {
    name: "Hayk",
    age: 55,
    height: 177,
    weight: 77
};


let arr = Object.entries(myObj);



function myFilter(arr) {
    let newArr = [];

    for (let i =0; i < arr.length; ++i) {
        for(let j = 0; j < 2; ++j) {
            if(typeof arr[i][j] === "number" && typeof arr[i][0] === "string") {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

let myArr = myFilter(arr);

console.log(myArr);


myObj1 = Object.fromEntries(myArr);

console.log(myObj1);
