
class BankAccount {
    _balance;

    constructor(balance) {
        this._balance = balance;
    }

    set setBanalce(value) {
        if (value <=0 ) {
          throw new Error("value can not be negative");
        } else {
            this._balance += value;
        }
    }
    get getBalance() {
        return this._balance;
    }
}



let ba = new BankAccount(885);

console.log(ba.getBalance);

ba.setBanalce = 555;

console.log(ba.getBalance);


// ba.setBanalce = -855;