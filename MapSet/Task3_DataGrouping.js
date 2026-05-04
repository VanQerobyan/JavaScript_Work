// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];


function groupByGroup(students) {
    let map = new Map();
    let arr = [];

    for (let keys of students) {
        if (!map.has(keys["group"])) {
            map.set(keys.group, []);
        }

        let res = map.get(keys["group"]);
        res.push(keys["name"]);
    }
    return map;
}

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }

