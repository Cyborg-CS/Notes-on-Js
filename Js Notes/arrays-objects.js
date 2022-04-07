//Arrays and Objects in JavaScript

//This is how we create an Array in Js
let someArr = [42, 67, 35, 10];
let stringArr = ['Naruto','Demon Slayer', 'Attack On Titan', 'Death Note', 'Tokyo Ghoul'];
console.log('someArr: ',someArr);
console.log('stringArr: ',stringArr);
//We can also create an Array by using...
let newArr = new Array('JavaScript', 'C++', 'Node.js', 'Python');
console.log('newArr: ',newArr);
//Here's how to get an element from the array by its index no.
console.log(newArr[0]);
//This method helps us to know the length of the array_
console.log('The length of string array is: ',stringArr.length);
//This method Search the array for an element and returns its position
console.log(stringArr.indexOf('Naruto'));
//This method is used to sort the elements of an array
console.log(someArr.sort());
//This is how we can merge two arrays or an array with a value...
const value = 'One Piece';
console.log(stringArr.concat(value));
console.log(stringArr.concat(newArr));
//This is how we can push an value in the array...
let animeList = stringArr.push('Dragon Ball Z');
console.log(stringArr);
//Unlike This method is used to add an item to the beginning of an Array
let fromFirst = (stringArr.unshift('Wotakoi'));
console.log(stringArr);
//This method is used to remove an item from the end of an Array
let fromLast = someArr.pop();
console.log(someArr);
//This method is used to remove an item by index position
let removeItem = stringArr.splice(2,3);
console.log(stringArr);
//lastly we can reverse an array by this...
let reverse = stringArr.reverse();
console.log(stringArr);
//Other than this we can also use the mothods from string-methods.js which are used to manipulate an array
//here's a life saving method to filter a array from elements you dont want...
let fileredArray = stringArr.filter((element)=>{return element.length>6});
console.log(fileredArray);

//Objects

let myObj = {
    name: 'Rover',
    country: 'Scotland',
    city: 'Glasgow'
};

console.log(myObj.name);
console.log(myObj['city']);