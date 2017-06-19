// function showName(first, last){
//   var nameIntro = "Your first name is ";
//   function makeFullName(){
//     return nameIntro + first + " " + last;
//   }
//
//   return makeFullName();
// }
//
// console.log(showName("Matt","Wong")) ;

//
//
// function celebrityID() {
//   var celebrityID = 999;
//
//   return {
//     getID: function(){
//       return celebrityID;
//     },
//     setID: function(theNewID) {
//       celebrityID = theNewID;
//     }
//   }
// }
//
// var mjID = celebrityID();
// console.log(mjID.getID());
// mjID.setID(777);
// console.log(mjID.getID());

function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++){
    theCelebrities[i]['id'] = function(j) {
      return function(){
        return uniqueID + j;
      }()
    }(i);
  }
  return theCelebrities;
}

let actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

console.log(createIdForActionCelebs);
