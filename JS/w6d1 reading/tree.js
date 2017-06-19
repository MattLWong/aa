
function Tree(x) {
  this.value = x;
  this.children = []; // instance state
}
Tree.prototype = {
  addChild: function(x) {
    this.children.push(x);
  }
};

var left = new Tree(2);
left.addChild(1);
left.addChild(3);

var right = new Tree(6);
right.addChild(5);
right.addChild(7);

var top = new Tree(4);
top.addChild(left);
top.addChild(right);

console.log(top.children);
console.log(top.value);
