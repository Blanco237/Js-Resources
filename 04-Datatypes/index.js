
/* JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. It can hold any type of values such as numbers, strings etc. */

var a = 40;  //holding number  
var b = "Rahul"; //holding string  

/* PRIMITIVE TYPES */
/* There are 5 primitive types in JavaScript: 
1. Number - represents numeric values.
2. String - represents textual values.
3. Boolean - represents true or false values.
4. Undefined - represents udefined value.
5. Null  - represents the absence of a value. 
*/

/* NON-PRIMITIVE (REFERENCE TYPES) */
/* There are 5 reference types in JavaScript:
1. Object - represents objects.
2. Array - represents arrays.
3. Function - represents functions.
4. Date - represents dates.
5. RegExp - represents regular expressions.

We will look deeper into each of these types in future lessons.
*/

/* HOW TO CHECK VARIABLE TYPE */
/* There are 3 ways to check the type of a variable:
1. typeof operator - returns the type of the variable.
2. instanceof operator (only for reference types)
3. constructor property (only for reference types)
*/

let firstName = 'Rahul';
let age = 30;
let isMarried = true;
let height = undefined;
let address = {};

console.log(typeof firstName); //returns string
console.log(typeof age);  //returns number
console.log(typeof isMarried); //returns boolean
console.log(typeof height); //returns undefined
console.log(typeof address); //returns object
