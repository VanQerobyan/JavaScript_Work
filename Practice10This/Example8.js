
const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };


function foo() {
    return this.name + " has " + this.points + " points.";
}

console.log(foo.call(p1));
console.log(foo.call(p2));

