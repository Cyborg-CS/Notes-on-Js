//Data types in JavaScript

//Primitive data-types-

//Strings
let text =  'Hello World';
console.log("The date type is "+ typeof(text));

//Numbers
let number = 09;
console.log("The date type is "+ typeof(number));

//Boolean
let booleanVar = true;
console.log("The date type is "+ typeof(booleanVar));

//Null
let nullValue = null;
console.log("The date type is "+ typeof(nullValue)+", its not really an object a null value means empty value");

//Undefined
let undefVar = undefined;
console.log("The date type is "+ typeof(undefVar));

//there's a new data-type symbol also...we will get on that a bit later

//Reference data-types-

//Arrays
let someArray = ['Superman', 'Batman', 'Spiderman', 'Captain America', 'Flash', true, 69, text];
console.log("The date type is "+ typeof(someArray)+", Arrays are also shown as objects");

//Objects/Object-Literals
const someObject = {
      Name: 'Tanjiro Kamado',
      Breathing_Technique: 'Sun Breathing',
      Anime: 'Demon Slayer'
};
console.log("The date type is "+ typeof(someObject))
console.table(someObject);

//functions
function uselessFunction(){
    console.log("The date type is "+ typeof(uselessFunction))
};
//let's call it...
uselessFunction();

// dates
let date = new Date();
console.log("The date type is " +typeof(date));
