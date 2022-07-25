/* WHAT ARE JAVASCRIPT OPERATORS */
// JavaScript operators are symbols that are used to perform operations on operands. 

/* TYPES OF OPERATORS IN JAVASCRIPT */
// There are 6 types of operators in JavaScript:
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Special Operator

/* ARITHMETIC OPERATORS */
// Arithmetic operators are used to perform arithmetic operations on operands.
// There are 3 types of arithmetic operators in JavaScript:
// 1. Addition Operator (+)      // 10 + 20 = 30
// 2. Subtraction Operator (-)   // 10 - 20 = -10
// 3. Multiplication Operator (*) // 10 * 20 = 200
// 4. Division Operator (/)   // 10 / 20 = 0.5
// 5. Modulus(Remainder) Operator (%)   // 10 % 20 = 10
// 6. Exponent Operator (**)  // 10 ** 2 = 100
// 7. Increment Operator (++)  var a = 10; a++ // a = 11
// 8. Decrement Operator (--)  var a = 10; a-- // a = 9

/* Try All the above operators in the console and get familiar with them */

/* ASSIGNMENT OPERATORS */
// Assignment operators are used to assign values to variables.
// There are 7 types of assignment operators in JavaScript:
// 1. Assignment Operator (=)   var a = 10;
// 2. Addition Assignment Operator (+=)  var a = 10; a += 20; // a = 30 
// 3. Subtraction Assignment Operator (-=)  var a = 10; a -= 20; // a = -10
// 4. Multiplication Assignment Operator (*=)  var a = 10; a *= 20; // a = 200
// 5. Division Assignment Operator (/=)  var a = 10; a /= 20; // a = 0.5
// 6. Modulus Assignment Operator (%=)  var a = 10; a %= 20; // a = 10
// 7. Exponent Assignment Operator (**=)  var a = 10; a **= 2; // a = 100


/* COMPARISON OPERATORS */
// Comparison operators are used to compare two values.
// There are 7 types of comparison operators in JavaScript:
// 1. Equal to Operator (==)    // 10 == 20 = false
// 2. Identical (equal and of same type) Operator (===)  // 10 === 20 = false
// 3. Not Equal to Operator (!=)  // 10 != 20 = true
// 4. Greater than Operator (>)  // 10 > 20 = false
// 5. Less than Operator (<)    // 10 < 20 = true
// 6. Greater than or Equal to Operator (>=)  // 10 >= 20 = false
// 7. Less than or Equal to Operator (<=)  // 10 <= 20 = true


/* LOGICAL OPERATORS */
// Logical operators are used to combine conditional statements.
// There are 3 types of logical operators in JavaScript:
// 1. Logical AND Operator (&&)  // true && true = true
// 2. Logical OR Operator (||)  // true || false = true
// 3. Logical NOT Operator (!)   // !true = false


/* BITWISE OPERATORS */
// Bitwise operators are used to perform bitwise operations on operands.
// There are 3 types of bitwise operators in JavaScript:
// 1. Bitwise AND Operator (&)
// 2. Bitwise OR Operator (|)
// 3. Bitwise NOT Operator (~)


/* SPECIAL OPERATOR */
// Special operator is used to perform special operations on operands.
// There are a few types of special operators in JavaScript:
// 1. Ternary Operator (? :)  // returns a value based on if the condition is true or false condition ? true : false
var three = true? 3 : 8
console.log(true); //prints 3
// 2. delete Operator (delete)  // deletes the variable or a property from an object
// 3. in operator // Checks if an object has a given property // 
console.log(firstName in Person);
// 4. instanceof operator //Checks if an object is an instance of a given type 
console.log([] instanceof Array);
// 5. new operator //Creates an instance of a class
var now = new Date();
