function fizzBuzz(array) {
  const finalArray = [];
  array.forEach( function(number) {
    if (number % 15 === 0) {
      //do nothing
    } else if (number % 5 === 0 || number % 3 === 0) {
      finalArray.push(number);
    }
  })
  return finalArray;
}

console.log(fizzBuzz([1,2,3,4,5,6,15,16,30,31,35]))
