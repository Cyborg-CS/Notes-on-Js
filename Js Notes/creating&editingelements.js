//The cool stuff is here...creating, replacing & removing elements with js//

// let's create a element
let element = document.createElement('li');
let textNode = document.createTextNode('I am good boy ;)');
element.appendChild(textNode);


// Add a class name to the li element
element.className = 'childul';
element.id = 'newLi';
element.setAttribute('title','someTitle');
element.innerText = 'I am a very good boy';
// element.innerHTML = '<b>I am a very good boy<b>';
//A little differnce between innerText and innerHTML

// Appending it to the list
let list  =  document.querySelector('ul.this');
list.appendChild(element);
// console.log(list);
// console.log(element);

//a new element
let header = document.createElement('h3');
header.className = 'someHeader';
header.id = 'someHeader'
let newText = document.createTextNode('Im a bad boy');
header.appendChild(newText);

//let's replace this new child with the one we created before
element.replaceWith(header);

//some other methods
let myul =  document.getElementById('listId');
myul.replaceChild(element, document.getElementById('firstCh'));
myul.removeChild(document.getElementById("lastCh"));

let pr = header.hasAttribute('href'); //returns a boolean on wheather the element has that attribute
header.removeAttribute('id');
header.setAttribute('title', 'myelem2title');
console.log(header, pr);

//The quiz question completed
// let newElement = document.createElement('h3');
// let theTag = document.createElement('a');
// theTag.innerText= 'Go to Facebook';
// theTag.setAttribute('href','https://www.facebook.com/');
// newElement.appendChild(theTag);
// header.replaceWith(newElement)