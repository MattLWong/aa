function Counter() {
  let count = 1;
  const add = function() {
    return count++; //why does this return 1 and not 2?
  }
  return add;
}

let counter = new Counter();

console.log(counter());
console.log(counter());
console.log(counter.count);
//
// function Counter2 () {
//   this._count = 0;
// }
//
// Counter2.prototype.fire = function () {
//   this._count += 1;
//   return this._count;
// }
//
// let counter2 = new Counter2();
// counter2.fire(); // 1
// counter2.fire(); // 2
// console.log(counter2._count) // 2
// counter2._count = 0 // 0 (this works);
// console.log(counter2._count) // 2
