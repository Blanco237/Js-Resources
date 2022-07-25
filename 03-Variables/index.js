/***** WHAT IS A JAVASCRIPT VARIABLE? ****/

// A JavaScript variable is simply a name of storage location. 

/***** TYPES OF VARIABLES IN JAVASCRIPT *****/

/* There are two types of variables in JavaScript : 
Local variable and
Global variable. */

// 1.
/* Local Variables can only be accessed within the scope
of the function or block in which they are declared 
and cannot be accessed externally */

function printNum(){
    let num = 10;     //Local Variable Num
    console.log(num); //Can be accessed within the function where it is declared
}

console.log(num) //This would throw an error cause num cannot be accessed externally.

// 2.
/* Global Variables are declared outside of any functions or
blocks and can be accessed from anywhere within the program */

const MAX = 100;  // Global Variable MAX
console.log(MAX) // MAX can be accessed, prints 100

function printMAX() {
    console.log(MAX) //MAX can be accessed within function, prints 100
}




/***** RULES FOR NAMING VARIABLES *****/
// - Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
// - After first letter we can use digits (0 to 9), for example value1.
// - JavaScript variables are case sensitive, for example x and X are different variables.

// Correct JavaScript variables
var x = 10;  
var _value="sonoo";  

// Incorrect JavaScript variables (Uncomment and run to see errors)
// var  123=30; 
// var *aa=320;  


/***** HOW TO DECLARE VARIABLES *****/
/*JS variables can be declared using 3 different keywords:
1. let
2. var 
3. const
*/

let counter;
var message;
const MIN = 0;


//Here are the differences between the different keywords:

/*  
  var:
    -can be declared outside any function to be used inside any function
    -can be declared inside any function and can be used anywhere inside the function
    -can be changed again and again anywhere
  let:
    -can be declared outside any function to be used inside any function
    -if declared inside any function or block, can only be used within that function or block.
    - can be changed again and again only inside the statement in which they are made in
  const:
    -can be declared outside any function to be used inside any function
    -can be declared inside any function and can be used anywhere inside the function
    -cannot be changed again and agan anywhere, if tried to, will result in an error
*/

// var has function scope. (this variable can be accessed from anywhere inside function)
// let & const has block scope.(this variable can not be accessed out of block. means outside of if else but inside of a function it can not be accessed. only inside that block we can access this variable)

// https://www.youtube.com/watch?v=--Vh17ocC_s

function func(){
    if(true){
      var A = 1;
      let B = 2;
    }
    A++; // 2 --> ok, inside function scope
    B++; // B is not defined --> not ok, outside of block scope
    return A + B; // NaN --> B is not defined
  }

//example 2
  var variable1 // declared using var
  const variable2 = '' // declared using const
  
  function myFunction1() {
    variable1 = "hello!";
    console.log(variable1);
    // "hello!"
  }

  function myFunction2() {
    variable2 = "hello!";
    // error: variable2 is a constant and can not be redifined
  }
  
  function myFunction3(codition) {
    if(condition) {
      let variable3 = "helo!" // declared using let
    }
    variable3 = "hello!";
    // error: variable3 is out of scope
  }

/**** Js Naming Conventions ****/

/* Javascript Uses the Camelcase naming convention.
This is where every first letter of a word if capitalized
*/

let firstName;
let lastName;
const dateOfBirth = '26/08/2001';