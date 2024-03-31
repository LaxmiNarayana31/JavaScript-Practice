
// least used in modern codebase
const User = {
    _email: "shiva@gmail.com",
    password: "shiva@123",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const user = Object.create(User)
console.log(user.email);