

//Generally, there are two types of comments in Javascript

// 1. Single Line Comments

// These are done by starting a line with a '//'.
// // This is a single line comment.

// console.log('This will not be executed');
console.log('This will be executed');

//Single Line Comments can also be used in-line to add small comments to a piece of code.

const PI = 3.141592654; // A variable for storing the value of PI.

// 2. Multi Line Comments

//These comments span multiple lines.
// These are done by starting a line with a '/*' and ending it with a '*/'.

/* This is a multiline comment and 
can span multiple lines of code.
These are usually used for Docstrings to add meaning
to a function or block of code */


//Here is an example of Javascript Docstrings

/** 
* Prints a message to the console
* @param {String} msg - Message to be printed
*/
function print(msg) {
    console.log(msg);
}