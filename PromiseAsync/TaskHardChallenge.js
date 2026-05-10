console.log("1");  // սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում 1 

setTimeout(() => {  //ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue, 
                   // երբ microtask queue-ն դատարկ լինի կտեղափոխվի call stack և կկատարվի cl()֊ն, և կա promise ասինխրոն գործողություն և սա Web API-ի
                   // միջոցով տեղափոխվում է macrotask queue, հետո microtask queue֊ից տեղափոխվում է call stack և կատարվում  4 5 
 console.log("2");

 Promise.resolve().then(() => {
   console.log("3");
 });

}, 0);

Promise.resolve().then(() => {// ասինխրոն գործողություն հայտնվում է call stak-ում, Web API֊ի միջոցով տեղափոխվում է microtask queue,    3 
                               // և երբ call stack-ը դատարկ լինի callback-ը կտեղափոխվի call stack և կկատարվի 
 console.log("4");
});

console.log("5"); // սինխրոն գործողություն  հայտնվում է call stack-ում և կատարվում 2

setTimeout(() => { // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue, 
                   // երբ բոլոր microtask queue-ում գտնվող callback-երը կատարվում են վերջում callback-ը տեղափոխվում է call stack և կատարվում է 6
 console.log("6");
}, 0);



// output
// 1
// 5
// 4
// 2 
// 3
// 6