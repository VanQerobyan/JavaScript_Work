
// 166
// Կանչեք getValue-ն obj1-ից՝ օգտագործելով obj2-ի հետ կանչը։
// const obj1 = {
// արժեք՝ 10,
// getValue() {
// վերադարձրեք this.value;
// }
// };

// const obj2 = {
// արժեք՝ 50
// };

// Ակնկալվող արդյունք՝ 50


const obj = {
    value: 10,
    getValue() {
        return this.value;
    }
};

const obj2 = {
    value: 50
};


console.log(obj.getValue.call(obj2));