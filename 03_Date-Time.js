const score = 75
console.log(score)
console.log(typeof score)

const balance = new Number(123) //object
console.log(balance)
console.log(balance.toString())
console.log(typeof balance) //object


const hundreds = 10000000
console.log(hundreds.toLocaleString()) //US standard
console.log(hundreds.toLocaleString('en-IN')) // Indian standard

 
console.log(Math) // Object {}
console.log(Math.abs(-5)); //absolute value
console.log(Math.round(6.4)) // round value
console.log(Math.ceil(5.4)) // 6
console.log(Math.floor(5.4)) // 5
console.log(Math.sqrt(625))  // 25
console.log(Math.random()) // this value always lies in between 0-1



// Date and Time
const myDate = new Date()
console.log(typeof myDate) // object
console.log(myDate.toString()) // Display the current date and time with timezone
console.log(myDate.toDateString()) // display : Day Month Date Year
console.log(myDate.toISOString()) // dispaly : Year-Month-Date
console.log(myDate.toLocaleDateString()) // display : Month/Date/Year
console.log(myDate.toLocaleString()) // display : Month/Date/Year, Current time
console.log(myDate.toTimeString()) // Current time with time zone
console.log(myDate.toLocaleTimeString()) // Current time 
console.log(myDate.toUTCString()) // day, Date Month Year with time zone 
let myDateStamp = Date.now()
console.log(myDateStamp) // print in miliseconds


console.log(myDate.getDate()) // display current date 
console.log(myDate.getDay())
console.log(myDate.getFullYear()) // display year
console.log(myDate.getHours()) // current hour from 12 AM
console.log(myDate.getMonth()) // display month (starting from 0 )
console.log(myDate.getTime()) // dispaly time in miliseconds 
console.log(myDate.getUTCDate()) // dispaly date 
console.log(myDate.getUTCDay()) 

myDate.toLocaleString('default', {   // Ctrl + Space 
    weekday: "long"
})