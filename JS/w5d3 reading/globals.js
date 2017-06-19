function good() {
  let x = 5;
}

function bad() {
  y = "Expect the unexpected (eg. globals)";
}

function why() {
  console.log(y); // "Expect the unexpected (eg. globals)""
  // console.log(x); // Raises an error
}

good();
bad();
why();
