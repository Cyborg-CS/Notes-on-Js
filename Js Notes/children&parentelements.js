//Notes on Childer, Parent & Transversing elements

let subject =  document.querySelector(".container")
console.log(subject.childNodes);
//Every node is not an element but every element is a node...like
console.log(subject.children);

//There's a way to know the childNode name and type//
let nodeName = subject.childNodes[1].nodeName
let nodeType = subject.childNodes[1].nodeType
console.log(nodeName);
console.log(nodeType);
//For nodeType reference
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector('div.container');

// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);