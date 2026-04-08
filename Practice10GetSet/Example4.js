class Counter {
    _count = 0;

    increment() {
        this._count++;
    }


    get getCount() {
        return this._count;
    }
}



let cou = new Counter;

console.log(cou._count);
cou.increment();
cou.increment();
console.log(cou.getCount);

