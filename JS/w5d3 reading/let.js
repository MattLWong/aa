function blockScope() {
  if (true) {
    //var is function scoped
    var x = 'var';
    //let is function scoped
    let y = 'let';
    console.log(x); // 'var'
    console.log(y); // 'let'
  }
  console.log(x); // 'var'
  console.log(y); // ReferenceError: y is not defined
}

blockScope(); // evoking the function

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
