function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1,2,3,4,5))

function sum2(...args) {
  let sum = 0;
  console.log(args);
  args.forEach( value => {
    sum += value;
  });
  return sum;
}

console.log(sum2(1,2,3,4,5));
