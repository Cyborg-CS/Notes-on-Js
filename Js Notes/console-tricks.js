console.time("Your code took")
//You will know this soon//

console.log("Text");
//Description- This function prints out the passed arguments on the browser console.//

console.log(34)
//It can print numbers too//

console.log(34+10)
//Also it can take expressions as argument and print the produced value//

console.log(true)
//Can return boolean's true//

console.log(['Naruto', 'Death Note', 'Attack On Titan', 'Demon Slayer'])
//Array's are there too//

console.table({Name: "Bruce Wayne", Vigilante_Name: "Batman"})
/**Description- This one takes an object or array and prints data as a table. it also takes
                 an additional argument which is columns**/
                 
console.warn('This is a warning')
//This one gives a warning on console//

console.assert(0 === true, "0 is not equals to boolean true")
/**This one takes a statement as an argument and prints out another argument is the statement
 * Failes to get asserted**/

console.error("This an error")
//If an error happens in the logic this can help you to show it on the console//

console.timeEnd("Your code took")
/**Now you know why i used console.time at line 1 and also you can see how much your code
   took to execute.
**/

//console.clear()
//This one clears your console. uncomment it to test