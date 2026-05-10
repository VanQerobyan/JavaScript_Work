console.log("1"); // սինխրոն գործողություն հայտնվում է call stack-ում և կատարվում  1

setTimeout(() => { // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի  միջոցով տեղափոխվում է macrotask queue, 
                   // microtask queue֊ն դատարկվելուց հետ event loop-ը callback-ը տեղափոխում է call stack և կատարվում է 
 console.log("2");
}, 0);
Promise.resolve().then(() => {  // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի  միջոցով տեղափոխվում է microtask queue, 3 
                                // և event loop֊ը ստուգում է եթե call stack-ը դատարկ է տեղափոխում է callback-ը call stack և կատարվում է 
 console.log("3");
});

console.log("4"); // սինխրոն գործողություն հայտնվում է call stack-ում և կատարվում  2



// output 
// 1 
// 4
// 3
// 2