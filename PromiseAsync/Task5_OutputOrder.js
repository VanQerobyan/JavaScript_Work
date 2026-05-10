console.log("Start");// սինխրոն գործողություն հայտնվում է call stack-ում և կատարվում  1

setTimeout(() => { //ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում macrotask queue,   3
                        //  և երբ բոլոր սինխրոն գործողությունները ավարտվեն callback-ը կհայտնվի call stack-ում և կկատարվի  
 console.log("Timeout");
}, 0);

console.log("End"); // սինխրոն գործողություն հայտնվում է call stack-ում և կատարվում  2

//output
//  start
//  end
//  Timeout
