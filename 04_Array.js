/* Array: Array is the collection of item of same as well as different data types
in JS, Arrays are resizeable and treated as objects.
*/

let Array = [12, 25, 34, 41, 56]
console.log(typeof Array) // object
console.log(Array[2])


//Array Methods
Array.push(15) // push : add an element at ending
console.log(Array)

Array.pop() // pop : Delete the last element from array
console.log(Array)

Array.unshift(6) // unshift : Add an element at starting position
console.log(Array)

Array.shift() // shift : Remove an element from starting
console.log(Array)

console.log(Array.includes(78)) // includes : checks the given element is present or not -> Returns a boolean value

console.log(Array.indexOf(34)) // indexOf : Return the index position of an element

let newArr = Array.join()
console.log(newArr)
console.log(typeof newArr) // string


// slice and splice
let newArray = [23, 57, 43, 64, 38, 80]
console.log("The original array:", newArray)

// slice : It does not change the original array
console.log("Slice operation:", newArray.slice(1, 3)) // [ 57, 43 ]
console.log("The original array:", newArray) // [ 23, 57, 43, 64, 38, 80 ]

// splice : It change the original array
console.log("Splice operation:", newArray.splice(1, 3)) // [ 57, 43, 64 ]
console.log("The original array:", newArray) // [ 23, 38, 80 ]


const marvel_heros = ['Ironman', 'Thor', 'Spiderman', 'CaptainAmerica']
const dc_heros = ['Superman', 'Batman', 'Flash']
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[4])


// Merge two array
mergedArray = marvel_heros.concat(dc_heros)
console.log(mergedArray) // ['Ironman', 'Thor', 'Spiderman', 'CaptainAmerica','Superman', 'Batman', 'Flash']
 
allHeros = [...marvel_heros, ...dc_heros] // spread operator
console.log(allHeros) // // ['Ironman', 'Thor', 'Spiderman', 'CaptainAmerica','Superman', 'Batman', 'Flash']



arrayWithinArray = [1, 2, 3, [4, 5, 6, [7, 8]], [9, 10, 11], [12, 13, [14, 15]]]
singleArray = arrayWithinArray.flat(Infinity)
console.log(singleArray) // [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15]


console.log(Array.isArray('Hello')) // false 
console.log(Array.from('Hello')) // [ 'H', 'e', 'l', 'l', 'o' ]


let score1 = 67
let score2 = 82
let score3 = 78
console.log(Array.of(score1,score2,score3)) // [ 67, 82, 78 ]