digits = [1, 2, 3];
let extraNumbers = {
    "0": 0,
    "1": 1,
    length: 2,

    [Symbol.isConcatSpreadable]: true
};

bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;


console.log(digits.concat(extraNumbers));

console.log(digits);
console.log(extraNumbers);

console.log();
console.log();

console.log(digits.concat(bonus));



//Զանգվածները concat-ի ժամանակ spreadable(տարածվող) են։Տալիս ենք Symbol.isConcatSpreadable = false որպեսզի concat-ի ժամանակ զանգվածը համարվի մեկ օբյեկտ և չտարածվի։