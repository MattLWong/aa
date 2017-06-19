function SumCalculator() {
  // scope 0
  this.sum = 0;
  console.log("In the calculator");
  return this.sum;
}

SumCalculator.prototype.addNumbers = function (numbers) {
  const sumCalculator = this;

  numbers.forEach(function (number) {
    sumCalculator.sum += number; // will work as intended
  });

  return this.sum;
};

var calculator = SumCalculator;
calculator.prototype.addNumbers();
