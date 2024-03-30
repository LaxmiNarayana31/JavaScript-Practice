class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Shiva_31", "Shiva@gmail.com", "Shiva@345")
console.log(user1.encryptPassword()); // output: Shiva@345abc
console.log(user1.changeUsername()) // output: SHIVA_31




// behind scene
function user(username, email, password) {
    this.username = username
        this.email = email
        this.password = password
}
    
User.prototype.encryptPassword = function () {
        return `${this.password}abc`
}
User.prototype.changeUsername = function () {
        return `${this.password.toUpperCase()}`
}

const user2 = new User("Sumit", "sumit12@gmail.com", "sumit@123")
console.log(user2.encryptPassword()); // output: sumit@123abc
console.log(user2.changeUsername()); // output: SUMIT@123