
class Product {
    _price;

    constructor(price) {
        this._price = price;
    }

    set setPrice(value) {
        this._price = value;
    }

    get getPrice() {
        return this._price - (this._price*10)/100;
    }
}


let pr = new Product(750);

console.log(pr.getPrice);

pr.setPrice = 741;

console.log(pr.getPrice);