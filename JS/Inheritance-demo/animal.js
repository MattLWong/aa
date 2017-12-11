function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log("I love to eat");
}

module.exports = Animal;
