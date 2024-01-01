// String : Sequence of characters enclose by ' ' or " "
/* On console write : console.log(String.prototype)  it will show all string method */
const name = 'shiva'
console.log(name) // shiva
let age = 22

const anotherName = new String("sumit")
console.log(anotherName) // [String: 'sumit']


// String interpolation (Interview Ques)
console.log(`Hello my name is ${name} and my age is ${age}`);


// String method
let str = 'Hello JavaScript'

stringLength = str.length 
console.log(stringLength)

upperCase = str.toUpperCase()
console.log(upperCase)

upper = str.toLocaleUpperCase()
console.log(upper)

lowerCase = str.toLowerCase()
console.log(lowerCase)

characterPosition = str.charAt(6)
console.log(characterPosition)

indexPosition = str.indexOf('J') // It returns -1 if the given character is not found
console.log(indexPosition)

partOfString = str.slice(3, 9) // also use negative values 
console.log(partOfString)

subString = str.substring(6,10)
console.log(subString)

characterReplace = str.replace('Java', 'Type')
console.log(characterReplace)

stringIncludes = str.includes('Java') //-> It check the given string is present or not in original string
console.log(stringIncludes)


let str2 = "       Hello TypeScript   "
trim = str2.trim() // it remove spaces from beginning and ending position  
console.log(trim)

str.concat(str2)
console.log(str.concat(str2))
console.log(str2.concat(str))

let res = str + str2
console.log(res)