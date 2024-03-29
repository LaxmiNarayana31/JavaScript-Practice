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

/* Imp: 
this keyword refers to the global execution contest
in global execution contest there is a problem, when you have access to window object this keyword refers to the window object  

But in node envirnoment you don't have access to the window object you get empty object  node = {} -> Empty object
*/

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


Array.prototype.Sumit = function(){
    console.log("Sumit says Hello");
}

myHeroes.Shiva()
myHeroes.Sumit()

heroPower.Shiva() // Output: Shiva is present in all objects
myHeroes.Shiva()  // Output: Shiva is present in all objects


// Inheritance
// Prototypical Inheritance

let anotherUsername = "Shiva     ";
String.prototype.trueLength = function () {
    console.log(`${this}`);  // output: Shiva
    console.log(`${this.name}`); // output: undefined
    console.log(`True lenght is:${this.trim().length}`); // output: 5
};

anotherUsername.trueLength();

"LaxmiNarayana".trueLength() // output: 13
"Sumit".trueLength() // output: 5