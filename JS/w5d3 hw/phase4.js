function dinerBreakfast() {
  let order = "I'd like scrambled eggs";
  console.log(order + " please");

  return function(newItem) {
    order = order + " and " + newItem;
    console.log(order + " please");
  }
}

let bfastOrder = dinerBreakfast();

bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
