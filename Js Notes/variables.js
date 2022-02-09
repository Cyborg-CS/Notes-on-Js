/*
A Variable or Binding is a sort of a holding place(holder) for
any expression or a new value produced by a statement.

There are mainly three kinds of Variable - var, let, const

Rules to assign variable names-
1. Cannot start with a number.
2. Can start with letter,_ or $ and then can contain numbers.
3. Are case sensitive.
4. Use camelCase, kebab-case, snake_case or PascalCase.
*/

//The old 'Var'//
var text = "Useless text";
console.log(text);
//This was the old keyword for declaring variables. it is a 
//functioned scoped or global scoped variable depending on the usage.

//const
const someName = "Edward";
console.log(someName);
//now here's the catch...
// someName = "Anthony"; uncomment it to see the error
/* as you can see in the console it throws a error when we try to
reassign the value of the const variable.
It is mostly used for assigning arrow functions, objects or
other things that you won't be changing for the rest of our code.
it is a global scoped variable.*/ 

//let
let number = 9;
console.log(number);
number = 78;
console.log(number);
//as we can see we can easily reassign the values of let's.
{
number = 50
console.log(number)
}
number = 30;
console.log(number)
/*As we can see its block-scoped*/

/*Try to avoid var as much as possible because it's a old
 concept and can be found in old scripts through it not a crime.
 */