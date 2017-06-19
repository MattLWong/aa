//constant cannot be reassigned but new constant of the same names can be declared in
//nested scopes

const favFood = "cheeseboard pizza";

console.log(favFood);

if (true) {
  //What! the const is not defined in the block!
  // console.log(favFood);
  const favFood = 'noodles';
  console.log(favFood);
}

console.log(favFood);

const animals = {};
animals.cetacea = "beluga whale";

console.log(animals);

// animals = {rodent: 'capybara'};

// console.log(animals);
