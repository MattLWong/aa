function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

[1, 2, 3, 4].forEach(logIfEven);

const myForEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

myForEach([1,2,3,4], logIfEven)
