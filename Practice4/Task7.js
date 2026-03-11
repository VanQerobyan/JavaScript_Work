let myObj1 = {
    num1: 10,
    num3: 20
};

let myObj2 = {
    num1: 10,
    num3: 10
};

function myIsEqual(myObj1, myObj2) {

        let obj1Length = Object.keys(myObj1).length;
        let obj2Length = Object.keys(myObj2).length;

        if(obj1Length !== obj2Length) return false;


        for (let key in myObj1) {
            if(myObj1[key] !== myObj2[key]) return false;
        }
        return true;
}


let res = myIsEqual(myObj1, myObj2);

console.log(res);
