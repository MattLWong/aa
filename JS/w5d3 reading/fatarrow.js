function Cat(name) {
  this.name = name;
  this.toys = ['string', 'ball', 'balloon'];
};

// Cat.prototype.play = function meow() {
//   this.toys.forEach(function(toy) {
//     console.log(`${this.name} plays with ${toy}`);
//   });
// };

Cat.prototype.play = function meow() {
  this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};

let garfield = new Cat('garfield');
garfield.play();

// output
