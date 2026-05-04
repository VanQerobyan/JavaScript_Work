// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);


function intersection(setA, setB) {
        let set = new Set();
        for (let val of setA) {
            if (setB.has(val)) {
                set.add(val);
            }
        }
        return set;
}

function difference(setA, setB) {
    let set = new Set();
    for (let val of setA) {
        if (!setB.has(val)) {
            set.add(val);
        }
    }
    return set;
}


// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }


