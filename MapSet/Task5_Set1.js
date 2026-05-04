// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

function filterSpam(text, badWords) {
    let set = new Set(badWords);

    let textSplit = text.split(" ");

    for (let val of textSplit) {
        if(set.has(val)) {
            text = text.replace(val, "***"); 
        }
    }
    return text;
}


// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"

