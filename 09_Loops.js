/* Loop/Iterations : Statements that continuously executed until a certain condition reached
in JavaScript loop are 6 types -
    for loop           for-of loop
    while loop         for-in loop
    do-while loop      for-each loop
 */


// for loop
for (let i = 1; i <= 10; i++){
    const element = i
    console.log(element)
}



// break , continue keyword
for (let i = 1; i <= 10; i++){
    if (i == 5) {
        break  // stop the loop when break statement reached
    }
    console.log(i)
}



for (let i = 1; i <= 10; i++){
    if (i == 5) {
        continue // skip the loop when continue statement reached
    }
    console.log(i)
}




// While loop
let i = 1
while (i <= 10) {
    console.log(i)
    i++
}




// do while loop
let mark = score
do {
    console.log(score)
    j++
} while (score<10);



// for-of loop -> Helps to iterate special data types like Array, String
const values1 = [34, 75, 89, 61, 45]
for (const i of values1) {
    console.log(i);
}

const myName = 'LaxmiNarayana'
for (const i of myName) {
    console.log(i)
}




// Maps -> it is object in JS
const map = new Map()
map.set('name', 'Shiva')
map.set('age', '22')
map.set('country', 'india')
//console.log(map)

for (const [key, value] of map) {
    console.log(key,'=>',value)
}




// for-in loops
const myObjects = {
    langauage1: 'C',
    langauage2: 'Java',
    langauage3: 'Python',
    langauage4: 'JavaScript'
}
for (const key in myObjects) {
    c//onsole.log(key)
    console.log(myObjects[key])
}


const langauages = ['Hindi', 'English', 'German', 'French']
for (const key in langauages) {
    //console.log(key)
    console.log(langauages[key])
}
//for-in loops does not work on maps



//for-each loop
const codingLanguages=['C','Java','Python','JavaScript']
codingLanguages.forEach(function (languages) { // function
    console.log(languages)
})
    

codingLanguages.forEach((languages) => {  // arrow-function
    console.log(languages)
});


// it also has access to array index and its elements
// forEach loop internally takes array index and elements as a parameter
codingLanguages.forEach((languages,index,codingLanguages) => {  // arrow-function
    console.log(languages)
    console.log(index)
    console.log(codingLanguages)
});




// Access object with in an Array using forEach loop
const fileExtension = [
    {
        language: "JavaScript",
        languageFileName: ".js"
    },
    {
        language: "Java",
        languageFileName: ".java"
    },
    {
        language: "Python",
        languageFileName: ".py"
    },
    
]
fileExtension.forEach((item) => {
    console.log(item.language,"and its file name was",item.languageFileName)
})




// filter
const values = [23, 67, 45, 90, 54, 76]
let result = values.filter((value) => {
    return value>45
})
console.log("Values greater than 45 are : ", result)



// // same without using filter
const newNum = []
values.forEach((num) => {
    if (num > 45) {
        newNum.push(num);
    }
})
console.log(newNum)




// reduce method 
const numbers = [1, 2, 3, 4]
const myTotal = numbers.reduce(function (accumulator,currentValue) {
    console.log(`accumulator : ${accumulator} and current value ${currentValue}`)
    return accumulator + currentValue;
},0)
console.log(myTotal)





const shoppingCart = [
    {
        courseName: "JavaScript",
        price: 2999
    },
    {
        courseName: "Java",
        price: 1999
    },
    {
        courseName: "Python",
        price: 3999
    },
    {
        courseName: "C",
        price: 999
    }
]
const totalcoursePrice = shoppingCart.reduce(function (acc, cuuValue) {
    return acc + cuuValue.price
},0)

console.log("Total course price",totalcoursePrice)




// Method Chaining
const naturalNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = naturalNo
    .map((num) => num * 10)
    .map((num) => num + 10)
    .filter((num) => num >= 40)
console.log(newNums)