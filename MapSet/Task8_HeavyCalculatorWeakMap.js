
// Input
const dataObj = { value: 10 };

  let weakMap = new WeakMap();

function heavyCalc(obj) {
  
    let res = 0;

    if (weakMap.has(obj)) return weakMap.get(obj);

    for (let i = 0; i < 1_000_000_000; ++i) {
        res += obj.value + 1;
    }
    weakMap.set(obj, res);
    return weakMap.get(obj);
}


// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100

