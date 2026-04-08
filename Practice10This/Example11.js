const obj = {
 value: 100,
 get() {
   function inner() {
     return this.value;
   }
   return inner();
 }
};



const obj1 = {
  value: 100,
  get() {
    const inner = () => this.value;
    return inner();
  }
};

console.log(obj.get());
console.log(obj1.get());