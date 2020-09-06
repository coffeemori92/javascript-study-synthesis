function norm(x) {
  const sum2 = sumSquare();
  console.log(sum2);
  return Math.sqrt(sum2);
  function sumSquare() {
    let sum = 0;
    for(let i = 0; i < x.length; i++) {
      sum += x[i] * x[i];
    }
    return sum;
  }
}

const a = [2, 1, 3, 5, 7];
const n = norm(a);
console.log(n);