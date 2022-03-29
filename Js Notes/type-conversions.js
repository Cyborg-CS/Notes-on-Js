//Type-Conversions and Type-Coercions in JavaScript

//String conversions
let myNum = 45;
console.log(myNum, typeof(myNum));

myNum = String(myNum);
console.log(myNum, typeof(myNum));

//There's also another method_
let newNum = 64;
console.log(newNum, typeof(newNum));
newNum = newNum.toString();
console.log(newNum, typeof(newNum));

//Number Conversions
let someStr = "35";
console.log(someStr, typeof(someStr));
//now...
let newStr = Number(someStr);
console.log(newStr, typeof(newStr));

//Type-Coercions
let x = 10 + "10";
console.log(x);
//while doing substractions...
let y = 10 - "10";
console.log(y);
//other's too...
const c = 10 / '10';
console.log(c);

const z = 10 % '10';
console.log(z);

//lastly booleans
const trueOne = true + 2;
const falseOne = false + 2;
console.log(trueOne, falseOne);
