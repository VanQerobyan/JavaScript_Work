
class Account {
    _password;

    constructor(password) {
        this.password = password;
    }

    set setPassword(password) {
        if (password.length < 6) {
            console.log(`Pawsword too short`);
        } else {
            this._password = password;
        }
    } 

    get getPassword() {
        return this._password;
    }
}


let pass = new Account();

pass.setPassword = "12345678";
pass.setPassword = "12345";
console.log(pass.getPassword);
