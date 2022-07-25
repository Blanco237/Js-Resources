const prompt = require('readline-sync');

console.log('+----------------------------------+');
console.log('|    CALCULATOR BUILT WITH JS      |');
console.log('+----------------------------------+');
console.log('\n');
let username = prompt.question('Please Enter your username:  ');
console.log('Welcome ' + username);

let operation = prompt.question('Please Enter your operation(+,-,/,*):  ');

let firstNumber = Number(prompt.question('Enter first number:  '));
let secondNumber = Number(prompt.question('Enter second number:  '));

switch(operation) {
    case '+':
        console.log('Result is: ' + (firstNumber + secondNumber));
        break;
    case '-':
        console.log('Result is: ' + firstNumber - secondNumber);
        break;
    case '*':
        console.log('Result is: ' + firstNumber * secondNumber);
        break;
    case '/':
        if(secondNumber === 0) {
            console.log('Division by zero is not allowed');
            break;
        }
        console.log('Result is: ' + firstNumber / secondNumber);
        break;
    default:
        console.log('Invalid operation');
}