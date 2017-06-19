function Kitten(name, age) {
  this.name = name;
  this.age = age;

  this.meow = function () {
    console.log(this.name + ' says "meow!"');
  };
}

k1 = new Kitten("Earl", 2);
k2 = new Kitten("Houdini", 1);

console.log(new Kitten("Harry", 3));

Kitten.prototype.meow = function () {
  console.log(this.name + ' says "meow!"');
};

// error, purr is not defined!
// k1.purr();

Kitten.prototype.purr = function () {
  console.log("Purr on, kitten!");
};

// all of a sudden it works! Because `Kitten.prototype` now has a
// `purr` property, `k1` can purr via its `k1.__proto__` reference to
// `Kitten.prototype`.
k1.purr();

Kitten.caboodle = [k1, k2, new Kitten('Flying Merkel', 3)];
console.log(Kitten.caboodle)

Kitten.parade = function() {
  Kitten.caboodle.forEach( kitten => {
    kitten.meow();
  });
};

Kitten.parade();
