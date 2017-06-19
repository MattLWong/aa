const fun = function() {
  console.log("So much fun");
}

fun();

fun.amount = 100;
fun.intensity = "very intense";
console.log(fun.amount);

console.log(Object.keys(fun).length);

//fun is a function that is also an object with two key-value pairs
