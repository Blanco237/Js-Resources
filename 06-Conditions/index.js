/* The JavaScript Conditions statement are used to execute the code whether condition is true or false.  */

/* There are various forms of conditional statements in JavaScript.
1. If Statement
2. If else statement
3. Ternary Operator
4. if else if statement 
5. Switch statement 
*/

//1. If Statement
/* It evaluates the content only if expression is true. The signature of JavaScript if statement is given below. */

if (expression) {
    //content to be evaluated  
}

var a = 20;
if (a > 10) {
    console.log("value of a is greater than 10");
}

//2. If Else
/* It evaluates the content whether condition is true of false. The syntax of JavaScript if-else statement is given below. */

if (expression) {
    //content to be evaluated if condition is true  
}
else {
    //content to be evaluated if condition is false  
}

var a = 20;
if (a % 2 == 0) {
    console.log("a is even");
}
else {
    console.log("a is odd");
}

//3. Ternary Operator
/* We looked at this in the previous section on Operators. It is like a summarized version of an if-else statement */
var a = 20;
console.log(a % 2 == 0 ? 'a is even' : 'a is odd');

//4. If else if
/* It evaluates the content only if expression is true from several expressions. The signature of JavaScript if else if statement is given below. */

if (expression1) {
    //content to be evaluated if expression1 is true  
}
else if (expression2) {
    //content to be evaluated if expression2 is true  
}
else if (expression3) {
    //content to be evaluated if expression3 is true  
}
else {
    //content to be evaluated if no expression is true  
}

var a = 20;
if (a == 10) {
    console.log("a is equal to 10");
}
else if (a == 15) {
    console.log("a is equal to 15");
}
else if (a == 20) {
    console.log("a is equal to 20");
}
else {
    console.log("a is not equal to 10, 15 or 20");
}

//5. Switch Statement 
/* The JavaScript switch statement is used to execute one code from multiple expressions. It is just like else if statement but it is more convenient than if..else..if because it can be used with numbers, characters etc. and makes for a more organized codebase */

switch (expression) {
    case value1:
        //  code to be executed;  
        break;
    case value2:
        //  code to be executed;  
        break;
    // ......  

    default:
    //  code to be executed if above values are not matched;  
}

var grade = 'B';
var result;
switch (grade) {
    case 'A':
        result = "A Grade";
        break;
    case 'B':
        result = "B Grade";
        break;
    case 'C':
        result = "C Grade";
        break;
    default:
        result = "No Grade";
}
console.log(result);  