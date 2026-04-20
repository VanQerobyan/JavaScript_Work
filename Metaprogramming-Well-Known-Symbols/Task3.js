let OddValidator1 = {
    [Symbol.hasInstance](instance) {
        if (typeof instance !== "number") return false;
        if (typeof instance === "number" && instance % 2 !== 0) return true;
    }
}


class OddValidator {
    static [Symbol.hasInstance](instance) {
        if (typeof instance !== "number") return false;
        if (typeof instance === "number" && instance % 2 !== 0) return true;  
    }
}

console.log("7" instanceof OddValidator);
console.log(7 instanceof OddValidator);
console.log(10 instanceof OddValidator);
console.log(5 instanceof OddValidator);

console.log("----------");
console.log(5 instanceof OddValidator1);
console.log(10 instanceof OddValidator1);
console.log("7" instanceof OddValidator1);
console.log(7 instanceof OddValidator1);
