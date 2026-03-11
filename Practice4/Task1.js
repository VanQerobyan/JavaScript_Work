
person1 = {
    name: "Karen",
    age: 22,
    email: "hayk@gmail.com"
};


person2 = {
    name: "Karen",
    height: 155,
    weight: 77
};



mergedPerson = {};

Object.assign(mergedPerson, person2, person1);

console.log(mergedPerson);
