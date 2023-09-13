const promptSync = require('prompt-sync');
const prompt = promptSync({
    sigint: true
});

const firstNumber = parseInt(prompt('Enter the first number: '));
const secondNumber = parseInt(prompt('Enter the second number: '));
const thirdNumber = parseInt(prompt('Enter the third number: '));

const average = (firstNumber + secondNumber + thirdNumber) / 3;

console.log(`Average: ${average.toFixed(2)}`);
