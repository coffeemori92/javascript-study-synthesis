const reg = /cat/;
console.log(reg.test('cats and dogs'));
console.log(reg.test('Cat'));

const reg2 = /Script/;
const result = reg2.exec('JavaScript');
console.log(result);

console.log(/[01234567890]/.test('10 little indians'));
console.log(/[^0-9]/.test('137'));

const dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test("2016-Aug-27 10:15"));

console.log(/\w/.test('A'));

console.log(/\s\w\w/.exec('JavaScript RegExp'));

const dateTime2 = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime2.test("it's 2016-08-27 10:15"));
console.log(dateTime2.test("2016-Aug-27 10:15"));

const bark = /bow+(woo+f)+/;
console.log(bark.test('bowwoofwoofwooofwoooof'));

const header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec('<h1>JavaScript</h1>'))