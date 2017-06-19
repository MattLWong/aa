function logArguments(arg1, arg2) {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }

  console.log(arg1);

  return result
}

console.log(logArguments("boop", "candle", 3)); // ["boop", "candle", 3]


function thisBreaks() {
  console.log(arguments instanceof Array); //=> false
  arguments.forEach((arg) => console.log(arg)); // Raises an error
}

// thisBreaks();

function argumentsWay(firstArg) {
  console.log(`The first arg is ${firstArg}!`);

  let otherArgs = Array.prototype.slice.call(arguments, 1, 2);
  console.log('The other args are')
  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}

argumentsWay("first", "second", 'third');

//rest parameters
function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}`);
  otherArgs.forEach( (arg) =>{
    console.log(arg);
  });
}
restWay("first");
restWay("first", "second", 'third');
restWay();


function add(x, y=17) {
  return x + y;
}

console.log(add(1,2));
console.log(add(1));
