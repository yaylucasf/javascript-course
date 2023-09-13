const promptSync = require('prompt-sync');
const prompt = promptSync({
    sigint: true
});

const x = parseFloat(prompt('R$: '));
const y = parseFloat(prompt('US$: '));

const total = x / y;

console.log(`R$ ${x} -> US$ ${total.toFixed(2)}`);
