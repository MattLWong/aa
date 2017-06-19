Function.prototype.myBind = function(context) {
  console.log(Array.isArray(arguments));
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  console.log(Array.isArray(args));
  return (() => {
    this.apply(context, args);
  })
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function(equipment1, equipment2) {
   console.log(`Turning on ${this.name} using ${equipment1} and ${equipment2}`);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp, "ladder", "bench");
const myBoundTurnOn = turnOn.myBind(lamp, "fan", "ladder");

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
