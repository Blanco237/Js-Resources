/*
    Javascript was originally designed to be run in the browser
    and in order to get input from the user on the browser, 
    we could easily use the prompt() method
*/

var firstName = prompt('Enter your name');
console.log('Your name is' + firstName);

/* However, using Nodejs and npm packages this allows us to
   get user input directly from the console. There are multiple packages you can use but in this lesson we will 
   be using the readline-sync package (https://www.npmjs.com/package/readline-sync). 
*/

//Install the package by typing ```npm install readline-sync``` in your console.

//importing the package 
const reader = require('readline-sync');

//Getting user input
let username = reader.question("Please Enter your username:  ")

console.log("Your Username is " + username);  //printing user input