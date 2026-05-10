console.log("A"); //սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում 1

Promise.resolve().then(() => { // ասինխրոն գործողություն հայտնվում է call stak-ում, Web API֊ի միջոցով տեղափոխվում է microtask queue,   3 
                               // և երբ call stack-ը դատարկ լինի callback-ը կտեղափոխվի call stack և կկատարվի  առաջինը  
 console.log("B");
});

Promise.resolve().then(() => {// ասինխրոն գործողություն հայտնվում է call stak-ում, Web API֊ի միջոցով տեղափոխվում է microtask queue,   4
                               // և երբ call stack-ը դատարկ լինի callback-ը կտեղափոխվի call stack և կկատարվի  երկրորդը
 console.log("C");
});

setTimeout(() => { // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue, 
                   // և բոլոր microtask queue-ի callback-ները կատարվելուց հետո վերջում կկատարվի 5
 console.log("D");
}, 0);

console.log("E"); // սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում 2



// output 

// A
// E
// B
// C
// D