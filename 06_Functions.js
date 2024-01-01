/* Function: Block of code that performs a specific task.
In JS, it is declared using the 'function' keyword.
The values that passed into function definition called parameter or formal parameter.
The values that passed into function call called Arguments or actual parameter.  */


function printName(name) { // function definition
    console.log("My name is:",name)
}

printName('Shiva') // function call


// Function to add 2 numbers
function addTwoNumbers(num1, num2) {
    result = num1 + num2
    return result
    console.log("Hello JavaScript") // After return statement nothing execute in function
}

console.log('The addition is',addTwoNumbers(6,4))



// When you don't know no of arguments passed in calling function
function noOfProducts(...num){ // ... -> Rest Operator
    return num
}

console.log(noOfProducts(340, 500, 204, 600))



// How to pass an Object into a function
const productInfo = { // Obkect creation
    name: "RealmeBook",
    price: 35000,
    Rating: 4.2
}

function handleObject(anyobject) {
    console.log(`Product name is ${anyobject.name}, Price is ${anyobject.price} and Product rating was ${anyobject.Rating}`)
}
//handleObject(productInfo)
handleObject ({           // you can declare and pass an object during function call 
    name: "Realme GT",
    price: 21000,
    Rating:4.0
})



// Pass an array in fumction
myArray = [67, 75, 85, 76, 41, 55]
function returnArray(passAnyArray) {
    return passAnyArray
}
console.log(returnArray(myArray))
console.log(returnArray([67,56,34])) // you can directly pass an array like object passing 