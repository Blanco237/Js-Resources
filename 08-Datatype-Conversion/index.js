/* JavaScript variables can be converted to a new variable and another data type:
1. By the use of a JavaScript function
2. Automatically by JavaScript itself
*/

/* Converting Numbers to Strings */
var x = 10;

String(x)      // returns a string from a number variable x
String(123)    // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

//the toString() method also converts a number to a string
x.toString()
(123).toString()
(100 + 23).toString()

/* Converting Booleans to Strings */
String(false)        // returns "false"
String(true)         // returns "true"
// The Boolean method toString() does the same.
false.toString()     // returns "false"
true.toString()      // returns "true"

/* Converting Strings to Numbers */
/*
The global method Number() can convert strings to numbers.
Strings containing numbers (like "3.14") convert to numbers (like 3.14).
Empty strings convert to 0.
Anything else converts to NaN (Not a number).
*/

Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN

//Other methods used to convert include
var num = "3.14";
parseFloat(num)	//Parses a string and returns a floating point number -> 3.14
parseInt(num)	//Parses a string and returns an integer -> 3


/* Automatic Type Conversion */
/* 
When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
The result is not always what you expect: 
*/

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns 52        because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2