class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
     static createID() {
        return `123`
    }
}

const user1 = new User("Shiva")
console.log(user1.createID());  // output: TypeError: user1.createID is not a function because createID declared as static function. This is not accessible to child classes