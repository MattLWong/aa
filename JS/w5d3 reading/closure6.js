function newClosure(someNum, someRef) {
  var num = someNum;
  var anArray = [1,2,3];
  var ref = someRef;
  return function(x) {
    num += x;
    anArray.push(num);
    console.log('num: ' + num + '; anArray: ' + anArray.toString() +
      '; ref.someVar: ' + ref.someVar + ';');
  }
}

obj = {someVar: 4};
fn1 = newClosure(4, obj);
fn2 = newClosure(5, obj);
fn1(1); // num: 5; anArray: 1,2,3,5; ref.someVar: 4;
fn2(1); // num: 6; anArray: 1,2,3,6; ref.someVar: 4;
obj.someVar++;
fn1(2); // num: 7; anArray: 1,2,3,5,7; ref.someVar: 5;
fn2(2); // num: 8; anArray: 1,2,3,6,8; ref.someVar: 5;
