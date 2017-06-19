const obj = {
  name: "Earl",
  greet: function(msg) {
    console.log(`${msg}: !!! ${this.name}`)
  }
}

function greet(msg) {
  console.log(`${msg}: ${this.name}`)
}

greet("Hello");
obj.greet("Hello"); //does not work; greet is not an attribute of obj
greet.bind(obj)("Hello");
greet.apply(obj, ["Hello"]);


function greet2(msg1, msg2) {
  console.log(`${msg1}: ${this.name}`);
  console.log(`${msg2}: ${this.name}`);
}

greet2.call(obj, "Hello", "Goodbye");
