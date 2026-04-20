let account = {
  balance: 1000,
  currency: "Dollar",
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.balance;
    } if (hint === "string") {
      return "Account balance: " + this.balance + " " + this.currency;
    } 
      return this.balance;
  
  },
};

console.log(+account);
console.log(String(account));
console.log(account + 500);
