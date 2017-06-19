function curriedSum(numArgs) {
  let array = []
  function _curriedSum(number) {
    array.push(number);
    if (array.length === numArgs) {
      let sum = array.reduce(
        ( acc, cur ) => acc + cur,
        0
        );
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const args = [];
  const fn = this;

  function _curriedSum(number) {
    if (args.length === numArgs) {
      return fn(...args)
    } else {
      args.push(number);
      return _curriedSum;
    }
  }
  return _curriedSum;
}
