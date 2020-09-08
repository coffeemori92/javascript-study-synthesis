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
console.log(header.exec('<h1>JavaScript</h1>'));

const jsFirst = /^JavaScript/;
console.log(jsFirst.test('JavaScript is powerful'));
console.log(jsFirst.test('I love JavaScript'));

const jsFirst2 = /JavaScript$/;
console.log(jsFirst2.test('JavaScript is powerful'));
console.log(jsFirst2.test('I love JavaScript'));

console.log(/Java(?=Script)/.exec('I like JavaScript')[0]);
console.log(/Java(?!Script)/.exec('I like JavaCoffee'));

const fruit = /apple|peach|orange/;
console.log(fruit.test('2 apples'));

console.log(/\bcat\b/i.test('I like CAT'));
console.log(/\bcat\b/i.test('I like Cat'));

const countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
console.log(countFruits.exec('there are 10 apples'));

const s = '1 little, 2 little indian';
console.log(s.search(/little/));
console.log(s.search(/\d/));
console.log(s.search(/\bindian\b/));
console.log(s.search(/3\s/));

console.log(s.replace(/indian/,  'boy'));
console.log(s.replace(/little/,  'big'));
console.log(s.replace(/little/g, 'big'));

const person = 'Tom, tom@example.com, 010-1234-5678';
console.log(person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, '+82-$1'));

const today = '오늘은 2016년9월10일 입니다.';
console.log(today.replace(/(\d+)년(\d+)월(\d+)일/, '$1/$2/$3'));

console.log('Tom Sawyer'.replace(/(\w+)\s(\w+)/, '$2 $1'));

const text = '투명 드래곤이 [와우] 하고 울부짖었다.';
console.log(text.replace(/^\[와우\]$/, match => {
  let s = '';
  for (let i = 1; i < match.length; i++) {
    s += String.fromCodePoint(match.charCodeAt(i));
  }
  return s;
}));