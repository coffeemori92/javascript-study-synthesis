function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

const card = new Card('heart', 'A');
console.log(card);

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = () => Math.PI * this.radius * this.radius;
}

const p = { x: 0, y: 0};
const c = new Circle(p, 2.0);
console.log(c.center);
console.log(c.area());