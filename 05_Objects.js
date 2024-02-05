const student = {
  name: "shiva",
  age: 22,
  email: "shiva@gmail.com",
  password: "shiva123",
  country: "India",
}

/* console.log(Object.prototype) in console to get all Object method */

console.log(Object.keys(student)) // it print all keys of student object -> return type is Array 
console.log(Object.values(student)) // it print all values of student object -> return type is Array
console.log(Object.entries(student)) // display all entries -> return type is Array
console.log(student.hasOwnProperty('password')) // true
console.log(student.hasOwnProperty('date')) // false


// 2 ways to access value of the object
console.log(student.email) // Using dot(.) notation
console.log(student["email"]) // Using brackets


// Take a Symbol represent as key and print it (Interview Question)
let mySym = Symbol("hello")
const student2 = {
  name: "shiva",
  mySym: "Hello", //This is the wrong way
  age: 22,
  email: "shiva@gmail.com",
  password: "shiva123",
  country: "India",
}
console.log(student2.mySym); // In this it is treated as string
console.log(typeof student2.mySym); // string


// To treated as Symbol use [mySym]
const student3 = {
  name: "shiva",
  [mySym]: "Hello", // This is the right way
  age: 22,
  email: "shiva@gmail.com",
  password: "shiva123",
  country: "India",
}
console.log(student3[mySym]) // Hello
console.log(typeof student3[mySym])


// Change value of an Object
student3.email = "hello@gmail.com"
console.log(student3.email)


// freeze the object, you can't do any modifications
Object.freeze(student3)
student3.email = "sumit@gmail.com"
console.log(student3.email)


//Object can be declared by 2 ways
const studentInfo = {} // non-singleton object
const studentInfo2 = new Object() // singleton object

studentInfo.name = "Laxmi Narayana"
studentInfo.email = "abc@gamil.com"
studentInfo.password = "abc123"
console.log(studentInfo)


// object nesting
const user = {
  email: "shiva@gmail.com",
  fullname: {
    userFullName: {
      firstName: "shiva",
      lastName: "pattanayak",
    }
  }
}
console.log(user.fullname.userFullName)


// Object merging
const obj1 = { 1: 'hello', 2: "world" }
const obj2 = { 3: "Welcome", 4: "JavaScript" }
//mergeObject = Object.assign({}, obj1, obj2)
mergeObject = { ...obj1, ...obj2 }
console.log(mergeObject) // { '1': 'hello', '2': 'world', '3': 'Welcome', '4': 'JavaScript' }


const obj3 = { 1: 'hello', 2: "world" }
const obj4 = { 2: "Welcome", 2: "JavaScript" }
mergeObject2 = Object.assign({},obj3,obj4)
console.log(mergeObject2) // { '1': 'hello', '2': 'JavaScript' }