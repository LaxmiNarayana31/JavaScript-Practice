// scope in node envirnoment and in console are different

let a = 50
const b = 60
if (true) {
    let  a = 10  // let has block level scope
    const b = 20 // const has block level scope
    var c = 30 // var has global level scope
    console.log("Inner a (with in scope)", a)
    console.log("Inner b (with in scope)", b)
}
console.log("Outer a (outside scope)", a)
console.log("Outer b (outside scope)", b)
console.log(c)



// Function nesting -> function with in another function
function printName() {
    const name = 'Shiva'
    function printAnotherName() { // inner function have access all data of outer function
        const anotherName = 'Sumit'
        console.log("With in inner function:",name,anotherName)
    }
    printAnotherName()
    // console.log(printName()) -> It leads to StackOverflowError, RangeError: Maximum call stack size exceeded
}
console.log(printName()) // Outer function don't access the data of inner function



console.log(addOne(5))  // Successfully runs
function addOne(num) {
    return num + 1
}



// Function Hoisting -> Result of a function is hold by a variable 
//in JS, variable hold anything
console.log(addTwo(5)) // ERROR : Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}