// 참조에 의한 호출과 값에 의한 호출
const a = 3;
const b = {
  x: 3,
  y: 4,
};

function add1(number) {
  return number = number + 1;
}

console.log(a, add1(a));

function add2(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}

console.log(b, add2(b));

function abc() {
  console.log(x);
  var x = 'local';
  console.log(x);
}
abc();

console.log(square(5));
function square(x) {
  return x * x;
}

const circle = {
  center: {
    x: 1.0,
    y: 2.0,
  },
  radius: 2.5,
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area());

circle.translate = function(a, b) {
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
};
circle.translate(1, 2);
console.log(circle.center);