// Input
const myMap = new Map([['a', 1], ['b', 2]]);

function mapToJson(map) {
    let str = JSON.stringify(Object.fromEntries(myMap));
    return str;
}

function jsonToMap(jsonStr) {
  let obj = JSON.parse(jsonStr);
  let objToMap = Object.entries(obj);
  let map = new Map(objToMap);
  return map;
}


// Expected Output
const jsonStr = mapToJson(myMap);
console.log(jsonStr); 
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }

