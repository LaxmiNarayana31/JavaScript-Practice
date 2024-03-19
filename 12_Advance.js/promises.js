/* In JavaScript, a promise is an object that represents an asynchronous operation. Promises have several methods that let you register a callback that the JavaScript runtime will call when the operation succeeds or fails.

You can think of a promise as a state machine with 3 states:
Pending The operation is in progress.
Fulfilled The operation completed successfully.
Rejected The operation experienced an error. 

When a promise is created, it is always pending. Once a promise is fulfilled or rejected, the promise is considered settled, and can no longer change state. The promise's state is a private property: given a promise, there is no easy way to tell what the promise's state currently is.

When a promise becomes settled, the JavaScript runtime calls any handler functions that you registered using .then(). The then() function takes 2 parameters: onFulfilled and onRejected. JavaScript calls onFulfilled() if the promise is fulfilled, or onRejected() if the promise is rejected. */



// 1st promise
const promiseOne = new Promise(function (resolve, reject) {
  // Promise created
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {     // promise consumption
  console.log("Promise consumed");
});

// Do an async task
// Used for Database calls, Cryptography, network




// Another way to implement promises
// 2nd promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});





// 3rd promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      // whtever you passed in resolve that passed in then function
      user: "Shiva",
      email: "Shiva@gmail.com",
      country: "India",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});





// 4th promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"Shiva31", password:"Shiva@12"})
        } else {
            reject("Error: Something went wrong")
        }
    })
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolve or rejected");
})





// 5th promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"JavaScript", password:"JS@123"})
        } else {
            reject("Error: JavaScript went wrong")
        }
    },1000)
})

async function consumepromiseFive() {
   try {
    const respone = await promiseFive
    console.log(respone); 
   } catch (error) {
     console.log(error);
   }
}
consumepromiseFive()

