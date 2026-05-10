console.log("Start"); // սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում 1 

setTimeout(() => { // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue, 
                   // երբ microtask queue-ն դատարկ լինի կտեղափոխվի call stack և կկատարվի cl()֊ն, և կա promise ասինխրոն գործողություն և սս Web API-ի
                   // միջոցով տեղափոխվում է macrotask queue, հետո microtask queue֊ից տեղափոխվում է call stack և կատարվում      4, 5 
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {// ասինխրոն գործողություն հայտնվում է call stak-ում, Web API֊ի միջոցով տեղափոխվում է microtask queue,    3 
                               // և երբ call stack-ը դատարկ լինի callback-ը կտեղափոխվի call stack և կկատարվի  
 console.log("Promise 1");
});

setTimeout(() => { // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue, 
                   // երբ բոլոր microtask queue-ում գտնվող callback-երը կատարվում են վերջում callback-ը տեղափոխվում է call stack և կատարվում է 6
 console.log("Timeout 2");
}, 0);

console.log("End"); //սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում     2


// output
// start
// end 
// Promise 1
// Timeout 1
// Promise inside timeout
// Timeout 2

