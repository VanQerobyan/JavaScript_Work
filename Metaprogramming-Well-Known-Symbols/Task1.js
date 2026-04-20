let myRange = {
    from: 1, 
    to: 4,

    [Symbol.iterator](){
        let curVal = this.from;
        let end  = this.to;
        return{
            next() {
                if(curVal <= end) {
                    return {value: curVal++, done: false};
                }
                return {done: true};

                //Experiment
            // if(curVal <= end) {
            //     return {value: end--, done: false};
            // }
            // return {done: true};
        }
        }
    }
};

let it = myRange[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



for(let num of myRange) {
    console.log(num);
}

console.log([...myRange]);
