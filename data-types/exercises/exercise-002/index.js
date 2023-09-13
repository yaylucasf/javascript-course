const promptSync = require('prompt-sync');
const prompt = promptSync();

const salary = Number(prompt('Enter the salary: '));
const increasePercentage = Number(prompt('Enter the increase percentage: '));

const newSalary = salary + salary * increasePercentage / 100;

console.log(`New salary: ${newSalary.toFixed(2)}`);
