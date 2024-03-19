// 1st promise
const promiseOne = new Promise(function (resolve, reject) {
  // Promise created
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // promise consumption
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
      username: "Shiva",
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

// promiseFour.then