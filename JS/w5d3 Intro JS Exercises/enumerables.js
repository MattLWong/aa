const NUMS = [1,2,3,4,5]

Array.prototype.mul = function() {
  newArr = [];
  this.forEach( (number) => {
    newArr.push(number * 2);
  });
  return newArr;
};
//
// console.log([1,2,3].mul());

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return this;
}

let a1 = [[1,2,3],[4,5,6]];

var unchangedArr = a1.myEach(function(array) {
  var newArr = array.mul();
  console.log(newArr);
});

console.log(unchangedArr);

Array.prototype.myMap = function(cb) {
  let mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    mappedArr.push(cb(this[i]));
  }
  return mappedArr;
}

console.log(NUMS.myMap( num => num * num));

Array.prototype.myInject = function( func ) {
  let result = this[0];
  this.slice(1).myEach( element => {
    console.log(result);
    result = func(result, element);
  });
  return result;
};

let sum = [1,2,3,4].myInject( (total, element) => total + element );
console.log(sum);
