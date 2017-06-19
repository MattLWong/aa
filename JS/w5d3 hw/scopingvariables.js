function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block'; //reassigns x
    console.log(x);
  }
  console.log(x);  //x = 'in block'
}

// mysteryScoping1();

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    //a const can be re-assigned inside the block
    //a const stays 'out of block' if no reassignment
    const x = 'in block';
    console.log(x); //in block
  }
  console.log(x); //out of block
}

// mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {

    // var x = 'in block';
    //not allowed because var checks function for other variables
    // and cannot reassign a const
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3();


function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'; //reassignment OK
    console.log(x);
  }
  console.log(x); //reassignment not saved
}

// mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block';
  console.log(x);
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  //you cannot redeclare a let
  // let x = 'out of block again';
  console.log(x);
}

mysteryScoping5();
