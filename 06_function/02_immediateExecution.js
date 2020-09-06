const a = (function fact(n) {
  if (n < 2) return 1;
  return n * fact(n-1);
})(5);

console.log(a);