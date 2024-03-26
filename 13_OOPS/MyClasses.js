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

// 8:20:49

