

const user = {
    name: "Alex",
    greet() {
        return "Hello " + this.name;
    }
};


const admin = {
    name: "Admin",
    greet(){ 
        return user.greet.call(admin)
    }
};

console.log(admin.greet());