const tom = {
  name: 'Tom',
  sayHello() {
    console.log(`Hello! ${this.name}`);
  }
};

console.log(tom.sayHello());

const huck = { name: 'Huck' };
huck.sayHello = tom.sayHello;
console.log(huck.sayHello());