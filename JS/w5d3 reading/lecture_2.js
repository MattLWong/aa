
//constructor function, first letter capitalized
function NBAPlayer(name, team, pos){
  this.name = name;
  this.team = team;
  this.pos = pos;
}

//this defines the method dunk on the prototype
NBAPlayer.prototype.dunk = function(){

}
//new object
const curry = new NBAPlayer("stef", "warriors", 1)

//NBAPlayer.prototype === curry.__proto___

//method-type invocation
curry.dunk();
