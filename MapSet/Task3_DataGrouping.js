// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];


function groupByGroup(students) {
    let map = new Map();

    for (let keys of students) {
        let arr= [];
        if (!map.has(keys["group"])) {
            map.set(keys.group, arr);
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

