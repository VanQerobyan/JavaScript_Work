
class Cart {
    _total = 0;

    constructor(total) {
        this._total = total;
    }

    set setPrice(price) {
        if (price >= 0) {
            this._total += price;
        } else {
            throw new Error("Price can not be negative");
        }
    }

    get getTotal() {
        return this._total;
    }
}



let cart = new Cart(440);

console.log(cart.getTotal);

cart.setPrice = 500;

console.log(cart.getTotal);

// cart.setPrice = -8;