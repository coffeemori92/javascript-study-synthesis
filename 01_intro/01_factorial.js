function fact(number) {
  if (number <= 1) {
    return number;
  }
  return number*fact(number - 1); 
}

for (let i = 1; i < 10; i++) {
  console.log(`${i}! = ${fact(i)}`)
}