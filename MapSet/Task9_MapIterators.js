// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

let iterator = mixedMap.entries();

let res = iterator.next();
while(res.done !== true) {
      if(typeof res.value[1] === "string"){
            console.log(res.value);
    }
        res = iterator.next();
}

// Expected Output in console
// [1, 'num']
// ['str', 'text']

