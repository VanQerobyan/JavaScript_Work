
// Input
const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };

let weakSet = new WeakSet();

function processNotification(notif) {
    if (weakSet.has(notif)) {
        return `Already processed, ignoring`;
    } else {
        weakSet.add(notif);
        return `Processed: ${notif.text}`;
    }
}


// Expected Output
console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"

