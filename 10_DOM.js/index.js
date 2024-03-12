/* DOM - Document Object Model
console.log(window) in console
console.log(document)
console.dir(document) -> Show all elements
window.console.log("hello") */


/* Try all in browser console */
document.getElementById('firstHeading')  //Output: <h1 id="firstHeading" class="heading">This is the DOM Practise file</h1>

document.getElementById('firstHeading').id // Output: firstHeading

document.getElementById('firstHeading').className  // Output: heading

document.getElementById('firstHeading').innerHTML = "<h1>Hello JavaScript</h1>" //-> It change the webpage this is called DOM Manipulation
// Output: "<h1>Hello JavaScript</h1>'

document.getElementById('firstHeading').getAttribute('id')  // Output: firstHeading

document.getElementById('firstHeading').getAttribute('class')  // Output: heading

document.getElementById('firstHeading').setAttribute('class', 'test')  // When you inspect the HTML element the class name is changed to test

const title = document.getElementById('firstHeading')  //Output: <h1 id="firstHeading" class="heading">This is the DOM Practise file</h1>

title.style.backgroundColor='blue'  // Change background color of h1 tag to blue

title.style.padding = '15px'  // Add padding to h1 tag

title.style.borderRadius = '20px'  // Make a round corner for h1 tag

title.textContent
title.innerHTML
title.innerText  // all 3 are give same Output: 'This is the DOM Practise file'

document.querySelector('h1')  // Output : <h1 id="firstHeading" class="heading">This is the DOM Practise file</h1>