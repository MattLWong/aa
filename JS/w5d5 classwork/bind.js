class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

Function.prototype.myBind = function(context) {
  let that = this;
  let args = Array.prototype.slice.call(arguments, 0);
  let otherArgs = Array.prototype.slice.call(arguments, 1);
  return () => {
    that.apply(args[0], otherArgs);
  };
}

Function.prototype.myBind2 = function(context) {
  let that = this;
  let args = Array.prototype.slice.call(arguments, 0);
  return (...otherArgs) => {
    that.apply(args[0], otherArgs);
  };
}

Function.prototype.myBind3 = function(context) {
  let that = this;
  let args = Array.prototype.slice.call(arguments, 0);
  return (...otherArgs) => {
    that.apply(args[0], [args[1], otherArgs[0]]);
  }
}

Function.prototype.myBind4 = function(context) {
  let that = this;
  let args = Array.prototype.slice.call(arguments, 0);
  return (...otherArgs) => {
    that.apply(args[0], otherArgs);
  }
}

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind2(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind3(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind4(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
