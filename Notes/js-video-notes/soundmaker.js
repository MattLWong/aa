function soundMaker(sound, times) {
  function makeSound() {
    sound += "p";
    console.log(`${sound}`);
  }
  for(let i = 0; i < times; i++) {
    makeSound();
  }
  console.log(`${sound}`);
}

let sum = function(arr) {
  let sum = 1;
  function summer() {
    for(let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }
  summer();
  return sum;
}

let seconds = 1000;


function closure(seconds) {
  global.setTimeout( (seconds) => console.log(`It has been ${seconds}`), seconds)
}

closure(2000);

// global.setTimeout(function() {
//   console.log("It has been one second");
// },1000);
//
// global.setTimeout( () => console.log("It has 1 sec"), 1000)
