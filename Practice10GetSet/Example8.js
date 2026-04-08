
class Email {
    _email;

    constructor(email) {
        this._email = email;
    }

    set setEmail(email) {
        if (email.includes("@")) {
            this._email = email;
        } else {
            console.log("Invalid email");
        }
    }
}


let email = new Email("asdasd@asd");

console.log(email);

email.setEmail = "sasda3212";

console.log(email);

email.setEmail = "as22222djh@asda";

console.log(email);