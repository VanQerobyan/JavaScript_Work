// Input
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];



function getUniqueUsers(users) {
    let map = new Map();
    for (let keys of users) {
        if (!map.has(keys["id"])) {
            map.set(keys["id"], keys);
        }
    }
    return [...map.values()];
}

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]

