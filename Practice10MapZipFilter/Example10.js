

let arr = [{name: "Anna", age: 17}, {name: "John", age: 20}, {name: "Joe", age: 19}];

let adult = arr.filter(elem => elem.age > 18);

adult.forEach((elem, index, arr) => {
    console.log(`${arr[index].name} is ${arr[index].age} years old`);
});