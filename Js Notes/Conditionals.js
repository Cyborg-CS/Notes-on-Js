//Conditionals in JavaScript

//If Else & Else If statements
let age = 18;
//age = '21';
let doesDrive = true;
if(age >= 18){
  console.log("You are eligible.");
}
//The '===' operater checks the value type as well as the value
//We use "else if" condition when we want to apply second level conditions after the if statement
else if(age === 21){
  console.log("You are welcome");
}
else{
  console.log("You are underage.");
}

//Some basic logical operaters...
//This '||'-'or' operater executes the statement if one conditon goes true- 
if(doesDrive || age < 18){
    console.log("You are good to drive.");
}else{
    console.log("You can't drive.");
};
//This '&&'-'and' operater executes the statement if both of the conditons are true- 
if(doesDrive && age > 18){
    console.log("You are good to drive.");
}else{
    console.log("You can't drive.");
};
//The (ternary) operator
//The conditional operator returns one of two values based on the logical value of the condition.
//its kind of shortcut method of if else statement
(age >= 18 ? console.log("You are good to drive") : console.log("You can't drive."));

//Switch statement
switch (age) {
    case age !== 18:
        console.log("You can't drive");
        break;
    case age == 21:
        console.log("You can't drive");
        break;

    default:
        console.log("You are good to drive");
        break;
}