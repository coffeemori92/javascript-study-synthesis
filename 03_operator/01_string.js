console.log('Hello ' + 'World');
console.log('1' + '2');
console.log(10 + ' little indians');
console.log(1 + {});
console.log(true + (new Date()));

// 원시 값을 객체로 변환하는 행위를 가리켜 원시 값을 객체로 래핑한다고 한다.
const msgObj = String('Everything is practice');
console.log(msgObj.length);
console.log(msgObj.charAt(3));

// 래핑 없이도 사용가능
// 자바스크립트의 문자열은 불변이다.
const msg = 'Everything is practice';
console.log(msg.length);
console.log(msg.charAt(3));
console.log(msg.substring(7, 10));
console.log(msg.slice(7, 10));
console.log(msg.slice(-3));
console.log(msg.slice(-9, -6));
console.log(msg.split(' '));
console.log(msg.replace('p', 'A'));
console.log(msg);