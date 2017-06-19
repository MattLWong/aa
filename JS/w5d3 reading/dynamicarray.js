function createVariables(){
  var accounts = [];

  for (var i = 0; i <= 20; i++) {
    accounts[i] = "whatever";
  }
  return accounts;
}

var test = createVariables();
console.log(test[21]);
