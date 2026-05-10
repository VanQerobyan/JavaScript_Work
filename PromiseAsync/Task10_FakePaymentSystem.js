
let promise = new Promise((resolve, reject) => {
    function pay(balance, amount) {
        if (amount <= balance) {
            resolve("Payment successful");
        } else {
            reject("Not enough money");
        }
    }
    pay(1000, 300);
});

promise.then((value) => {
    console.log(value);
})
    .catch((value) => {
     console.log(value);
    });

