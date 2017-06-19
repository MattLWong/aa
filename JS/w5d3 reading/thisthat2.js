function times(num, fun) {
  for (let i = 0; i < num; i++) {
    console.log("Running the for loop");
    fun(); //we run the function fun num number of times, function-style
  }
}

const cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

console.log(cat.age);

cat.ageOneYear();

console.log(cat.age);

times(10, cat.ageOneYear);

console.log(cat.age);

times(10, function() {
  cat.ageOneYear();
  console.log(cat.age);
}); //using the anonymous function
console.log(cat.age);

times(10, cat.ageOneYear.bind(cat));

console.log(cat.age);
