const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(cb) {
  reader.question('First number:', (res) => {
    reader.question('Second number:', (res2) => {
      let r = parseInt(res);
      let r2 = parseInt(res2);
      cb(r+r2);
      reader.close();
    })
  });

}

// addNumbers( (total) => {
//   console.log(`The total is: ${total}`);
// })


function addNumbers2(sum, numsLeft, completionCallback) {
  let acc = sum;
  if (numsLeft > 0) {
    reader.question("Input: ", (res) => {
      let r = parseInt(res);
      acc += r;
      let i = numsLeft - 1;
      addNumbers2(acc, i, completionCallback);
    });
  } else {
    completionCallback(acc);
    reader.close();
  }
}

addNumbers2(3, 3, sum => console.log(`Total Sum: ${sum}`));
