
let users = [{name: "Hayk", age: 88}, {name: "Karen", age: 14}, {name:"John", age: 19}];


let arr = users.filter(elem => elem.age >= 18).map( elem => elem.name);


console.log(users);
console.log(arr);

