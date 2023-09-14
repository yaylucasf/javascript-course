// const date = new Date();

// console.log(`Original: ${date.toISOString()}`);
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

const firstDate = new Date('2010-10-10');
const secondDate = new Date('2003-10-17');

console.log(firstDate.getTime() > secondDate.getTime());
console.log(firstDate.getTime() === secondDate.getTime());
