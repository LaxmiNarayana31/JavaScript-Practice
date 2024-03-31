// console.log(Math.PI); // output: 3.1416

// Timestamp: 08:51:07 
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
/* output: 
  {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  } */


const user = {
    name: "Shiva",
    age: 22,
    counter: "India"
}

console.log(Object.getOwnPropertyDescriptor(user)) // output: undefined  because this method gives the description of property not the object. Here user is a Object.


console.log(Object.getOwnPropertyDescriptor(user, "name"))
/* output:
{
  value: 'Shiva',
  writable: true,
  enumerable: true,
  configurable: true
}  */




// You can also define your own properties
Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"))
/* output:
{
  value: 'Shiva',
  writable: false,
  enumerable: false,
  configurable: true
}  */