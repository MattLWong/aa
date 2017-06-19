"use strict";

Array.prototype.myUniq = function() {
  let newArr = [];
  this.forEach( (value) => {
    if (!newArr.includes(value)) {
      newArr.push(value)
    }
  });
  return newArr.sort();
}

// console.log([1,4, 2,2,3,3].myUniq());
