// Symbol 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값.

const heart = Symbol('Heart!');
console.log(heart.toString());

const sym1 = Symbol.for('club');
const sym2 = Symbol.for('club');
const sym3 = Symbol('club');
console.log(sym1 === sym2);
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym3));