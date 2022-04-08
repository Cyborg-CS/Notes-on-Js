// Functions in JavaScript...

//Normal functions ---
function printText(text){
 console.log(text)
};
//Now we call the function---
printText('Hello World');
//Anonymus functions...
const someFunction =function (text){
  console.log(text)
};
someFunction('JavaScript is awesome');
//All sorts of operations are there in function...
const addSum = function(a,b){
  let sum = a+b;
  return sum;
};
console.log(addSum(10,10));
//And then their's arrow functions ---
const getDistance = (speed, time)=>{
  let dist = speed*time;
  return dist;
};
console.log('The distance is '+getDistance(4,5)+'km');