class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class newUser extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addVerification(){
        console.log(`The Verification was added by user ${this.username}`);
    }
}

const user1 = new newUser("Sumit_07", "sumit123@gmail.com", 'Sumit123')
user1.addVerification()
//console.log(user1);

const user2 = new User("Shiva_07", "shiva123@gmail.com", 'Shiva123')
// user2.addVerification()  // This line show an error 
user2.logMe()

console.log(user1 instanceof User); // output: true

// 8:32:09