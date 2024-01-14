const user = {  // object creation
    username: 'Shiva',
    age: 22,
    welcomeMessage : function() {
        console.log(`${this.username}, welxome`) // this keyword talks about current context
        //console.log(this) // Run this
    }
   
}
user.welcomeMessage() // Shiva, welcome
user.username = 'Sumit'
user.welcomeMessage() // Sumit, welxome
console.log(this)     // {} -> Empty object [this is a global object in JS]





function demo() {
    let name = 'Shiva'
    console.log(this.name) // undefined because this context only works in objects
    //console.log(this) //-> Run this
}
demo()





// Arrow function
const demo = () => {
    let name = 'Shiva'
    console.log(name)
}
demo()





// Add 2 number by using Arrow Function
const result = (num1,num2) => {  // Explicit return
    return num1 + num2   //
}
console.log(result(7, 3))

// you also write arrow function like this
const anotherResult = (num1, num2) => (num1 + num2) // Implicit return : No need to use of {} and return statement
console.log(result(7, 3))

    
    

// // IIFE (Immediately invoked function expressions)
// in IIFE whole function is written with in a () like (function) and to run the IIFE function simply add () after function definition
(function demo() {
    console.log("Hello")
})()

// IIFE in Arrow function
((name) => {
    console.log(name)
}
)('shiva')

    
    
    
    
// How to write two IIFE in one file
(function demo() {  // named IIFE
    console.log("Hello")
})();      // just add a ; after a IIFE



// IIFE in Arrow function
((name) => {    // Un-named IIFE
    console.log(name)
}
)('shiva')



//General Knowledge
// falsy values -> false, 0, -0, BigInt 12n, "", null, undefined, NaN
// truthy values -> "0",'false'," ", [], {}, function() {}

// Nullish Coalescing Operator(??): null  undefined 
let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1)


//Terniary operator
const productPrice = 100
productPrice < 100 ? console.log("buy") : console.log("not buy")

