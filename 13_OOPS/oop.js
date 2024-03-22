// Object literal
const user = {
  userName: "Shiva",
  loginCount: 10,
  signedIn: true,


  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${userName}`);   // ReferenceError: userName is not defined
    console.log(`Username: ${this.userName}`); // Username: Shiva

    console.log(this);
    /*  output : {
            userName: 'Shiva',
            loginCount: 10,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        } */
  },
};


console.log(user.userName);
console.log(user.getUserDetails()); // Got user details from database

// Constructor function
const promiseOne = new Promise(); // This new is used for constructor

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = User("Shiva", 20, true);
const userTwo = User("Sumit", 12, false);
console.log(userOne); // userTWo overrides the userOne values
/* Output: { username: 'Sumit',
             loginCount: 12,
             isLoggedIn: false 
           }  */


const userThree = new User("Shiva", 20, true); // neew instances using new keyword
const userFour = new User("Sumit", 12, false);
console.log(userThree);


// instance of operator
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car); // output: true
console.log(auto instanceof Object); //  output: true