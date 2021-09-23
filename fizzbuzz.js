const prompt = require('prompt-sync')();

const num1 = prompt('Enter a number');
console.log(num1);

const num2 = 15;

if(num2 % 3 === 0) {
    console.log('fizz');
}
if(num2 % 5 === 0) {
    console.log('buzz');
}

if(num2 % 5 , 3){
    console.log('fizzbuzz');
}
