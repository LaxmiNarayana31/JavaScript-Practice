/*  JavaScript is everywhere 
Front-end : React JS, Angular JS, Vue JS 
Back-end: Node JS, Bun JS
Mobile App: React Native, Ionic JS
Dekstop App: Electron JS
AI: TensorFlow JS
IoT: Cyclon JS, IOT JS */


// ; is not mandatory in JavaScript, Its your choice
console.log("hello") 
console.log("hello"); 


/* Variable - Containers that store some data
const -> can't be redeclared or changed. A block level scope 
let -> can't be redeclared but can be updated. A block level scope
var -> can be redeclared and updated.A global level scope

let and const mostly used
prefer not to use var
*/

const accountID = 327  
let accountEmail = "shiva@gmail.com" 
var accountPassword = "Shiva@123"  



// accountID = 658
// console.log(accountID)  -> It shows error

console.table([accountEmail, accountID, accountPassword]) //It helps to print data in a tabular structure

// alert("hello") -> It show error because we are using node js

/* Datatypes =>  Primitive (call by values) and Non-Primitives (call by reference)

number -> 2 to ppwer 53
BigInt -> Biggers numbers ends with n
string -> "It is a string"
boolean -> true/false
null -> standalone value
undefined -> declared but not assign any value
Symbol -> for uniqueness

Non-Primnitives -> Array, objects, Functions, Regular Expressions  */

console.log(typeof 3) // number
console.log(typeof "hello") //string 
console.log(typeof null) // object 
console.log(typeof true) // boolean
console.log(typeof hello) // undefined
console.log(typeof 123n) //bigint


// Symbols aere generally used for uniquenness 
const ID = Symbol('123') 
const anotherID = Symbol('123')    
console.log(ID == anotherID) // false 

//Type Conversion : Convert from one data type to another data type.
let marks = "45abc"
console.log(typeof marks)

stringToNumber = Number(marks) // "45" => 45   "45abc" => NaN
console.log(typeof stringToNumber)
console.log(stringToNumber)  // NaN -> Not a Number


let id = 100
console.log(typeof id)  // number
numberToString = String(id)
console.log(typeof numberToString)  // string



console.log('1' + 2) // 12
console.log(1 + '2') //12
console.log('1' + 2 + 3) // 123
console.log(1 + 2 + '3') // 33
console.log(1 + '2' + 3) // 123


console.log(true) // true
console.log(+true) // 1


/* In JS, equality check == , Comparison such as <, >, >=, <= works differently.
Comparisons convert a null to a number, treating as 0 */
console.log(null > 0) //false because bahind the scene it checks 0 > 0

console.log(null == 0) // false 
console.log(null >= 0) // true 
console.log(null === 0) // false

// === -> It is a strict check in this the data type is also checked
console.log('5' === 5) //false because of different data type, string checks with a number
console.log(5 === 5) //true

/* Memory -> Stack, Heap
Stack -> all primitive data types declared in stack, whatever you declared in this you get a copy of this
Heap -> all non-primitive data types are declared in Heaps, whatever you declared in this you get reference of this  */


let myname = 'shiva'
let anothername = myname
anothername = "sumit"
console.log(myname)  //shiva
console.log(anothername) // sumit