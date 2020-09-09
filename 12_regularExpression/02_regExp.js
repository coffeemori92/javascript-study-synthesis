const tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
// const text = 'Tom: 010-1234-5678';
// console.log(tel.exec(text));

const text2 = 'Tom: 010-1234-5678\nHuck: 020-550-7890\nBecky: 030-4321-9876';
console.log(tel.lastIndex);
console.log(tel.exec(text2));
console.log(tel.lastIndex);