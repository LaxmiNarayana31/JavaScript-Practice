// Timestamp: 7:59 Hour
function setUsername(username) {
    this.username = username; // complex DB calls
    console.log("Called");
}

function createuser(username, email, password) {
    // setUsername(username) // This method actually not called
    // setUsername.call(username)
    setUsername.call(this, username) // to hold the reference we use call 

    this.email = email
    this.password = password

}

const user1 = new createuser("Shiva_07", "shiva@gmail.com", 2563)
console.log(user1);