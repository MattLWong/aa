function isPrime(number) {
  if (number < 2) { return false; }
  for (let i = 2; i < number; i++ ) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstNPrimes(n) {
  let j = 1;
  const arr = [];
  while (arr.length < n) {
    if (isPrime(j) === true) {
      arr.push(j);
    }
    j++;
  }
  return arr;
}

console.log(firstNPrimes(5));

function sumOfNPrimes(n) {
  const arr = firstNPrimes(n);
  let sum = arr.reduce(function(prev, cur) {
    console.log(`The prev is: ${prev}` );
    console.log(`The cur is: ${cur}` );
    return prev + cur;
  });
  return sum;
}

console.log(sumOfNPrimes(5));
