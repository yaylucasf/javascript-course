const promptSync = require('prompt-sync');

const prompt = promptSync({sigint: true});

const x = parseInt(prompt('First number: '));
const y = parseInt(prompt('Second number: '));

const sum = x + y;

console.log(`Sum: ${sum}`);
