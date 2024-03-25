/* Prototypes are the mechanism by which JavaScript objects inherit features from one another.

All JavaScript objects inherit properties and methods from a prototype.
- Date objects inherit from Date.prototype
- Array objects inherit from Array.prototype

The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.  

Array    ------> Object ------> null 
String   ------> Object ------> null
Function ------> Object ------> null

Everything in JavaScript is an Object  */
 

let myName = "Shiva"
console.log(myName.length);

let anotherName = "Sumit        "
console.log(anotherName.trim().length);


let myHeroes = ['thor', 'ironman', 'spiderman']
let heroPower = {
    thor: "hammer",
    ironman: "ironsuite",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.Shiva = function () {
    console.log(`Shiva is present in all objects`);
}

heroPower.Shiva() // Output: Shiva is present in all objects
myHeroes.Shiva()  // Output: Shiva is present in all objects