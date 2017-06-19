function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}

console.log(foo()); // returns 8

function foo2(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

console.log(foo2()); //returns 3

console.log(foo3()); //returns 3
function foo3(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

function foo4(){
    return (typeof bar);
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
console.log(foo4()); //error: bar is not a function

function boo() {
  if(false) {
    function x() {};
  }
  return x;
}

console.log(boo());

var loo = 'qux';
var myFunction = function() {
  var loo = 'bar';
  console.log(loo);
}

console.log( loo );
myFunction();
console.log( loo );
