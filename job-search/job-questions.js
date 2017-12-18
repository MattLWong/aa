let n = 0;
const add = function(...args) {
  if (args.length === 1) {
    if (n > 0) {
      return args[0];
    } else {
      n++;
      return function(l) {
        return args[0] + add(l);
      };
    }
  } else {
    //compute
    var s = 0;
    for(let i = 0; i < args.length; i++) {
      s += args[i];
    }
    return s;
  }

};

// console.log(add(2,3,4));
// console.log(add(6)(3));

// console.log("i'm a lasagna hog".split("").reverse().join(""));


// window.foo = 'asdf'
// console.log(( window.foo || ( window.foo = "bar" ) ));

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);
// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log((foo));

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
