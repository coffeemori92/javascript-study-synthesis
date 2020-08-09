const a = [2, , 5];
console.log(a);

const array1 = ['A', 'B', 'C', 'D', 'E'];
array1.length = 2;
console.log(array1);

const evens = new Array(2, 4, 6, 8);
const empty = new Array();
const array2 = new Array(2, 4);
console.log(evens, empty, array2);

const array3 = new Array(3);
console.log(array3);
console.log(array3.length);

const abc = ['A', 'B', 'C'];
console.log(abc[1]);
abc[3] = 'D';
console.log(abc);
abc.push('E');
console.log(abc);
delete abc[1];
console.log(abc);
console.log(abc.length);

const test = {
  0: 'test_0',
  1: 'test_1',
  2: 'test_2',
  5: 'test_5',
};

console.log(test);
console.log(test[0]);
console.log(test['0']);
console.log(test[3]);
console.log(test['3']);
console.log(test[5]);
console.log(test['5']);