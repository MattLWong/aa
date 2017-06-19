var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function(greeting, punctuation) {
    console.log( greeting + ', ' + this.firstName + punctuation );
  }
};

var sayIt = person.greet;

// sayIt.apply(person, ['Hello', '!!1!!1']);
