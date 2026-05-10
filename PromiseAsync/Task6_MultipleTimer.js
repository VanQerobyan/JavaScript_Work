setTimeout(() => console.log("A"), 1000); // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue,  3
                                           // երբ call stack-ը լինի դատարկ event loop-ը այն երկրորդը կտեղափոխի call stack և callback-ը կկատարվի

setTimeout(() => console.log("B"), 0); // ասինխրոն գործողություն հայտնվում է call stack-ում և Web API-ի միջոցով տեղափոխվում է macrotask queue  2
                                       // երբ call stack-ը լինի դատարկ event loop-ը այն առաջինը կտեղափոխի call stack և callback-ը կկատարվի 

console.log("C"); // սինխրոն գործողություն հայտնվում է call stack-ում և անմիջապես կատարվում  1


//output 

// C
// B
// A